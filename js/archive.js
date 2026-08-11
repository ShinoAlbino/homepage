/**
 * ARCA HORTUS - Archive Improved System (v2.3 FINAL)
 * Fixed filtering logic + Simple responsive layout
 * カテゴリ選択で消える問題を解決
 */

document.addEventListener('DOMContentLoaded', function () {
  initArchiveSystem();
});

function initArchiveSystem() {
  initModalSystem();
  initCardEventListeners();
  initSidebarFilters();
  initSearch();
  initCategoryFilter();
  initSorting();
  initPagination();
  initCounts();
  render(); // 初期表示から並び順とページングを効かせる
  openFromHash(); // 他ページから archive.html#TOL-001 の形で直接開けるようにする
  console.log("✓ A.R.C.A. Archive System v2.4 Initialized");
}

// ============================================
// MODAL SYSTEM
// ============================================

function initModalSystem() {
  const modal = document.getElementById('archive-modal');
  if (!modal) return;
  
  const closeBtn = modal.querySelector('.modal-close-btn');
  const backdrop = modal.querySelector('.modal-backdrop');

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/**
 * URLのハッシュ（#TOL-001 など）で指定された記録を開く。
 * 各ページからその記録へ直接案内できるようにするため。
 */
function openFromHash() {
  const id = decodeURIComponent((location.hash || '').replace('#', '')).trim();
  if (!id) return;

  const card = document.querySelector(`.archive-card[data-doc-id="${CSS.escape(id)}"]`);
  if (card) openModal(card);
}

function openModal(cardElement) {
  const modal = document.getElementById('archive-modal');
  if (!modal) return;
  
  const docId = cardElement.getAttribute('data-doc-id');
  const category = cardElement.getAttribute('data-category');
  const security = cardElement.getAttribute('data-security');

  const id = cardElement.querySelector('.doc-id').textContent;
  const date = cardElement.querySelector('.doc-date').textContent;
  const title = cardElement.querySelector('.archive-title').textContent;
  const fullContent = cardElement.querySelector('.archive-full-content');
  const tags = Array.from(cardElement.querySelectorAll('.archive-tag')).map(tag => tag.textContent);

  document.getElementById('modal-id').textContent = id;
  document.getElementById('modal-date').textContent = date;
  document.getElementById('modal-title').textContent = title;
  
  const securityBadge = document.getElementById('modal-security');
  if (securityBadge) {
    securityBadge.className = `modal-security-badge ${security}`;
    securityBadge.textContent = security.toUpperCase();
  }

  document.getElementById('modal-category').textContent = capitalizeCategory(category);
  document.getElementById('modal-author').textContent = getAuthorByDocId(id);
  document.getElementById('modal-created').textContent = getCreatedDateByDocId(id);
  document.getElementById('modal-modified').textContent = getModifiedDateByDocId(id);
  document.getElementById('modal-version').textContent = getVersionByDocId(id);

  if (fullContent) {
    document.getElementById('modal-body').innerHTML = fullContent.innerHTML;
  }

  const tagsContainer = document.getElementById('modal-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'archive-tag';
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });
  }

  const relatedDocs = getRelatedDocuments(id);
  const relatedList = document.getElementById('related-list');
  if (relatedList) {
    relatedList.innerHTML = '';
    relatedDocs.forEach(docLink => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = docLink;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const relatedCard = document.querySelector(`[data-doc-id="${docLink}"]`);
        if (relatedCard) openModal(relatedCard);
      });
      li.appendChild(a);
      relatedList.appendChild(li);
    });
  }

  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('archive-modal');
  if (modal) {
    modal.classList.remove('is-active');
  }
  document.body.style.overflow = '';
}

// ============================================
// CARD EVENT LISTENERS
// ============================================

function initCardEventListeners() {
  const cards = document.querySelectorAll('.archive-card');
  cards.forEach(card => {
    card.removeEventListener('click', handleCardClick);
    card.addEventListener('click', handleCardClick);
  });
}

function handleCardClick(e) {
  if (e.target.closest('.doc-link')) return;
  openModal(this);
}

// ============================================
// FILTERING & SEARCH (FIXED v2.3)
// ============================================

let currentFilters = {
  category: 'all',
  security: [],
  searchQuery: '',
  sort: 'date-desc'
};

// 1ページあたりの表示件数。収録数が増えたらここだけ変えればよい
const PAGE_SIZE = 24;
let currentPage = 1;

/**
 * FIX v2.3: Changed logic to show/hide instead of moving DOM
 * This prevents cards from disappearing when filtering
 */
function initCategoryFilter() {
  const categoryItems = document.querySelectorAll('.tree-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.tree-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      const category = item.getAttribute('data-category');
      currentFilters.category = category;
      
      // Reset security filters if "all" is selected
      if (category === 'all') {
        document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb => {
          cb.checked = false;
        });
        currentFilters.security = [];
      }
      
      applyFilters();
    });
  });
}

function initSidebarFilters() {
  const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedSecurityLevels = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      
      currentFilters.security = selectedSecurityLevels;
      applyFilters();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentFilters.searchQuery = e.target.value.toLowerCase();
      applyFilters();
    }, 300);
  });
}

function initSorting() {
  const sortSelect = document.getElementById('sort-select');
  if (!sortSelect) return;
  
  sortSelect.addEventListener('change', (e) => {
    currentFilters.sort = e.target.value;
    applySorting();
  });
}

/**
 * 絞り込みの判定のみを行う（DOMは触らない）。
 * 検索は本文とタグも対象にする。館内検索で目的の記録に辿り着けないと
 * 収録している意味が薄いため。
 */
function matchesFilters(card) {
  if (currentFilters.category !== 'all' &&
      card.getAttribute('data-category') !== currentFilters.category) {
    return false;
  }

  if (currentFilters.security.length > 0 &&
      !currentFilters.security.includes(card.getAttribute('data-security'))) {
    return false;
  }

  if (currentFilters.searchQuery) {
    const parts = [
      card.querySelector('.archive-title'),
      card.querySelector('.archive-excerpt'),
      card.querySelector('.doc-id'),
      card.querySelector('.archive-full-content')
    ].concat(Array.from(card.querySelectorAll('.archive-tag')));

    const haystack = parts
      .filter(Boolean)
      .map(node => node.textContent.toLowerCase())
      .join(' ');

    if (!haystack.includes(currentFilters.searchQuery)) return false;
  }

  return true;
}

// 絞り込み・並び替えの変更は常に1ページ目から見せる
function applyFilters() {
  currentPage = 1;
  render();
}

function applySorting() {
  currentPage = 1;
  render();
}

/**
 * 絞り込み → 並び替え → ページ切り出し の順に適用して描画する。
 */
function render() {
  const grid = document.querySelector('.archive-grid');
  if (!grid) return;

  const allCards = Array.from(grid.querySelectorAll('.archive-card'));
  const matched = sortCards(allCards.filter(matchesFilters), currentFilters.sort);

  const totalPages = Math.max(1, Math.ceil(matched.length / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageCards = matched.slice(start, start + PAGE_SIZE);

  allCards.forEach(card => { card.style.display = 'none'; });
  pageCards.forEach(card => {
    card.style.display = '';
    grid.appendChild(card); // 並び順どおりにDOMを詰め直す
  });

  // Show "no results" message if needed
  let noResultsDiv = grid.querySelector('.no-results');
  if (matched.length === 0) {
    if (!noResultsDiv) {
      noResultsDiv = document.createElement('div');
      noResultsDiv.className = 'no-results';
      noResultsDiv.textContent = '🔍 No documents match your criteria';
      grid.appendChild(noResultsDiv);
    }
  } else if (noResultsDiv) {
    noResultsDiv.remove();
  }

  // Reinitialize card listeners
  initCardEventListeners();

  updatePagination(matched.length, totalPages, pageCards.length);
}

function sortCards(cards, sortType) {
  const cardsCopy = [...cards];

  switch (sortType) {
    case 'date-desc':
      cardsCopy.sort((a, b) => {
        const dateA = new Date(a.querySelector('.doc-date').textContent.replace(/\./g, '-'));
        const dateB = new Date(b.querySelector('.doc-date').textContent.replace(/\./g, '-'));
        return dateB - dateA;
      });
      break;

    case 'date-asc':
      cardsCopy.sort((a, b) => {
        const dateA = new Date(a.querySelector('.doc-date').textContent.replace(/\./g, '-'));
        const dateB = new Date(b.querySelector('.doc-date').textContent.replace(/\./g, '-'));
        return dateA - dateB;
      });
      break;

    case 'title':
      cardsCopy.sort((a, b) => {
        const titleA = a.querySelector('.archive-title').textContent;
        const titleB = b.querySelector('.archive-title').textContent;
        return titleA.localeCompare(titleB, 'ja');
      });
      break;

    case 'id':
      cardsCopy.sort((a, b) => {
        const idA = a.querySelector('.doc-id').textContent;
        const idB = b.querySelector('.doc-id').textContent;
        return idA.localeCompare(idB);
      });
      break;
  }

  return cardsCopy;
}

// ============================================
// PAGINATION
// ============================================

function updatePagination(matchedCount, totalPages, shownCount) {
  const pageInfo = document.querySelector('.page-info');
  if (pageInfo) {
    pageInfo.textContent =
      `Page ${currentPage} of ${totalPages} (Showing ${shownCount} of ${matchedCount} records)`;
  }

  const prevBtn = document.querySelector('.page-btn.prev');
  const nextBtn = document.querySelector('.page-btn.next');
  if (prevBtn) prevBtn.disabled = currentPage <= 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
}

function initPagination() {
  const prevBtn = document.querySelector('.page-btn.prev');
  const nextBtn = document.querySelector('.page-btn.next');

  const goTo = (page) => {
    currentPage = page;
    render();
    const container = document.querySelector('.archive-container');
    if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (prevBtn) prevBtn.addEventListener('click', () => { if (!prevBtn.disabled) goTo(currentPage - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (!nextBtn.disabled) goTo(currentPage + 1); });
}

/**
 * 件数表示は実際のカード枚数から数える。
 * 手書きの数字は収録のたびに実体とずれるため、DOMを唯一の出典にする。
 */
function initCounts() {
  const cards = Array.from(document.querySelectorAll('.archive-card'));

  document.querySelectorAll('[data-count-for]').forEach(el => {
    const key = el.getAttribute('data-count-for');
    const n = (key === 'all')
      ? cards.length
      : cards.filter(card => card.getAttribute('data-category') === key).length;
    el.textContent = `(${n})`;
  });

  const totalEl = document.getElementById('total-documents');
  if (totalEl) totalEl.textContent = String(cards.length);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function capitalizeCategory(category) {
  const categoryMap = {
    'all': 'All Records',
    'boundary': 'Boundary Phenomena',
    'protocol': 'Protocols & Systems',
    'anomaly': 'Anomalies',
    'character': 'Chronicles & Entities',
    'tool': 'Instruments & Tools'
  };
  return categoryMap[category] || category;
}

function getAuthorByDocId(docId) {
  const authorMap = {
    'REG-001': '観測班主任 / 記録局',
    'REG-002': '精神管理局 (PSY-DIV)',
    'ANM-044': 'Anomaly Response Team',
    'CHR-001': 'Archive System',
    'TOL-001': 'ArcaHortus',
    'TOL-002': 'ArcaHortus',
    'TOL-003': 'ArcaHortus'
  };
  return authorMap[docId] || 'Unknown Author';
}

function getCreatedDateByDocId(docId) {
  const dateMap = {
    'REG-001': '2026.04.12 09:47:23',
    'REG-002': '2026.05.01 12:30:00',
    'ANM-044': '2026.06.09 15:22:45',
    'CHR-001': '2026.03.20 08:15:00',
    'TOL-001': '2026.08.11 00:00:00',
    'TOL-002': '2026.08.11 00:00:00',
    'TOL-003': '2026.08.11 00:00:00'
  };
  return dateMap[docId] || '2026.06.15 10:00:00';
}

function getModifiedDateByDocId(docId) {
  const dateMap = {
    'REG-001': '2026.04.15 14:32:15',
    'REG-002': '2026.05.10 16:45:30',
    'ANM-044': '2026.06.14 19:33:22',
    'CHR-001': '2026.06.01 12:20:15',
    'TOL-001': '2026.08.11 00:00:00',
    'TOL-002': '2026.08.11 00:00:00',
    'TOL-003': '2026.08.11 00:00:00'
  };
  return dateMap[docId] || '2026.06.15 10:00:00';
}

// ツールの版はツール本体の表記と揃える。本体を更新したらここも更新すること
function getVersionByDocId(docId) {
  const versionMap = {
    'REG-001': '2.3 (Patched)',
    'REG-002': '3.2.1',
    'ANM-044': '1.0 (UNSTABLE)',
    'CHR-001': '1.0',
    'TOL-001': '1.0（2026年8月）',
    'TOL-002': '1.0（2026年8月）',
    'TOL-003': '1.0（2026年8月）'
  };
  return versionMap[docId] || '1.0';
}

function getRelatedDocuments(docId) {
  const relatedMap = {
    'REG-001': ['ANM-044', 'PRO-012'],
    'REG-002': ['REG-001'],
    'ANM-044': ['REG-001', 'CHR-001'],
    'CHR-001': ['ANM-044'],
    'TOL-001': ['TOL-002', 'TOL-003'],
    'TOL-002': ['TOL-001'],
    'TOL-003': ['TOL-001']
  };
  return relatedMap[docId] || [];
}

// ============================================
// PRINT & EXPORT FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  const printBtn = document.querySelector('.print-btn');
  const exportBtn = document.querySelector('.export-btn');

  if (printBtn) {
    printBtn.addEventListener('click', printDocument);
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', exportDocument);
  }
});

function printDocument() {
  const printWindow = window.open('', '_blank');
  
  const title = document.getElementById('modal-title').textContent;
  const docId = document.getElementById('modal-id').textContent;
  const date = document.getElementById('modal-date').textContent;
  const body = document.getElementById('modal-body').innerHTML;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        body {
          font-family: 'Noto Serif JP', serif;
          line-height: 1.8;
          padding: 40px;
          background: white;
          color: #333;
        }
        .print-header {
          border-bottom: 2px solid #333;
          margin-bottom: 30px;
          padding-bottom: 20px;
        }
        .print-header h1 {
          margin: 0 0 10px 0;
          font-size: 32px;
        }
        .print-header .meta {
          font-size: 12px;
          color: #666;
        }
        .print-content {
          margin-top: 20px;
        }
        .content-section {
          margin-bottom: 25px;
        }
        .content-section h3 {
          font-size: 18px;
          margin: 20px 0 10px 0;
          border-left: 4px solid #333;
          padding-left: 12px;
        }
        @media print {
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="print-header">
        <h1>${title}</h1>
        <div class="meta">
          <p>Document ID: ${docId} | Date: ${date}</p>
        </div>
      </div>
      <div class="print-content">
        ${body}
      </div>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  setTimeout(() => {
    printWindow.print();
  }, 250);
}

function exportDocument() {
  const title = document.getElementById('modal-title').textContent;
  const docId = document.getElementById('modal-id').textContent;
  const date = document.getElementById('modal-date').textContent;
  const body = document.getElementById('modal-body').textContent;

  const content = `
DOCUMENT: ${title}
ID: ${docId}
DATE: ${date}

${body}
  `.trim();

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${docId}_${title.replace(/\s+/g, '_')}.txt`;
  link.click();
}

console.log("✓ Archive System v2.3 FINAL - Filtering Fixed");
