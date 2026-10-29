(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LOGIC_HZ:240,MAX_CATCHUP_SEC:.25,STALL_SEC:.1,INTERP_TELEPORT_PX:120,AUTO_PAUSE_SEC:1,SCHED_INTERVAL_MS:25,SCHED_LOOKAHEAD_SEC:.12,SONG_START_DELAY_SEC:.2,GAME_OVER_DELAY_SEC:1.1},t={OFFSET_MIN_MS:-200,OFFSET_MAX_MS:200,OFFSET_STEP_MS:10,MOVE_SPEED_COUNT:3,VOLUME_MAX:10,VOLUME_DEFAULT:10,PAD_DEADZONE:.35,TOUCH_SLOW_GAIN:.45},n={ENEMY:4096,PLAYER:2048},r={DPR:[2,1,.75],PARTS_STRIDE:[1,1,2],SLOW_FRAME_SEC:1/48,WINDOW_SEC:3,WARMUP_SEC:2},i={BPM:100,COUNT_IN:4,TAPS:16,MIN_TAPS:8,OUTLIER_SEC:.09,NOTE_DOWN:88,NOTE:81},a={W:540,H:960,PLAYER_MIN_X:18,PLAYER_MIN_Y:60,PLAYER_MAX_Y_FROM_BOTTOM:170,PLAYER_START_Y_FROM_BOTTOM:210,TOUCH_MOVE_GAIN:1.25},o={WIDE_ASPECT:16/9,MORPH_BAR_FRAC:.5,AOE_EXTEND:4e3,DEPTH_BACK:260,DEPTH_HEIGHT:330,DEPTH_LOOK_Y:380,DEPTH_FOV:52,DEPTH_FAR:8e3,DEPTH_DOLLY:1,DEPTH_DOLLY_MIN:.6,DEPTH_DOLLY_MAX:4,DEPTH_GRID_AHEAD:2400,DEPTH_GRID_STEP:90},s={Z_MAX:140,Z_SPEED_MULT:1,PLAYER_Y_FROM_BOTTOM:210,PLAYER_Y_SPEED:600,SPAWN_Z:120,AIM_VZ_MAX:260,SEEK_Z_GAIN:6,SETTLE_SPEED:400,CAM_BACK:420,CAM_EYE_Z:40,CAM_LOOK_AHEAD:900,CAM_FOV:46,GRID_Z:190,CAM_FOLLOW_X:.6,CAM_FOLLOW_Z:.6,CAM_LOOK_FOLLOW:.12,CAM_SMOOTH:5,AOE_EDGE:40,AOE_ROW_EXTRA:150,AOE_CHECKER_GRID:[4,3],WALL_GAP_H:120,WALL_DZ:[40,120],WALL_FAR:1600,WALL_HIT_BEATS:1,WALL_HIT_DEPTH:24,OBST_LEAD_BEATS:4,OBST_SPEED:1400,OBST_DEPTH:120,OBST_PILLAR_W:70,OBST_BAR_H:56,OBST_PAD:6,OBST_DMG:20,MARK_SEC:.7,MARK_R:46,SHADOW_A:.5,SHADOW_ENEMY_R:.8,BOSS_Z_AMP:100,BOSS_Z_FREQ:.9,BOSS_FOLLOW_Z:2},c={CLEAR:{at:`bar`,cost:4},BURST:{at:`beat`,cost:1,radius:150},ABSORB:{at:`beat`,cost:2,radius:180,gain:.25},FREEZE:{at:`bar`,cost:2}},l=Object.keys(c),u={MIN_RATIO:.2,TYPES:{bastion:3,spinner:1,splitter:1},TINK_NOTE:96,SPARKS:4},d={LEVELS:28,SCAN:.06,BLUR:.6},f={OPEN_SEC:.32,CLOSE_SEC:.24,CHAR_SEC:.045,HOLD_SEC:1.1,LAST_HOLD_SEC:1.8,LOOKAHEAD:.1,VOICE_NOTES:[62,64,67,69,71],VOICE_PEAK:.05,VOICE_LEN:.09,VOWELS:[[800,1200],[300,2300],[350,1300],[500,1900],[500,900]],FREE_BPM:120,BOX_H:78,FACE_W:66,QUEUE_SEC:6},p={LOW_HP:.3,SLIP_RATE:.35},m={SEC:3.6,CLEAR_SEC:1.6},h={DPS:{LO:10,HI:26},HEAT_SEC:{LO:3,HI:20},ARMOR:{LO:.1,HI:.5},LOCK:{LO:15,HI:95},TOUGH:{LO:60,HI:140},MOVE:{LO:.6,HI:1.4},REACH:{PLUCK:.2,SQUARE:.35,SAW:.55,SUPERSAW:.95,BRASS:.6,BELL:.7,WOBBLE:.65,RHODES:.1},STRONG:.62,WEAK:.3,SHOW:2},g={ELEV:{flat:38,depth:62,rail:14},SCALE:1.1,PERSP:75,BANK_MAX:28,BANK_SPEED:420,BANK_EASE:10,TURN_DEG:32,TURN_SEC:6},_={BPM:120,LOOKAHEAD:.15,SCHED_MS:25,START_LEAD:.06,EXIT_SEC:.45},v={FAKE_SEC:4,ROLL_SEC:14,NOISE_SEC:2.4},y={W:160,H:14,LINE_X:22,AHEAD_BARS:1,FLASH_STEPS:2},b={MOVE_SPEEDS:[[470,200],[540,220],[620,240]],COMBO_ARP:10,COMBO_LEAD:30,COMBO_TIMEOUT_BARS:2,COMBO_BREAK_FLOATER_MIN:5,LOCK_REGEN:2.6,LASER_DMG:6,LASER_BOSS_DMG:10,PERFECT_WIN:.05,PERFECT_MULT:1.5,PERFECT_REFUND:1,GRAZE_R:18,GRAZE_GAIN:.15,GRAZE_BEAT_GAIN:.5,GRAZE_WIN:.06,DROP_ENEMY_DMG:8,DROP_BOSS_DMG:40,COUNTER_MULT:8,ANSWER_MULT:2,HEAL_SMALL:6,HEAL_BIG:15,DROP_DRONE:.03,DROP_DRONE_TUT:.06,DROP_SPINNER:.25,DROP_BASTION:.6,STAGE_HEAL:30,INVULN:1.3,MAX_HP:100,REPLAY_SEC:30,SHOT_VOL:.7,FILL_GAP:.028},x={BULLET:10,BULLET_HIT_PAD:3,ENEMY_BODY:15,ENEMY_BODY_R:.6,ENEMY_BODY_PAD:4,BOSS_BODY:20,BOSS_BODY_R:.6,CLEAR_RADIUS:150},S={PICK_R:26,MAGNET_SPEED:480,FALL_HEAL:85,FALL_CAP:45,CAP_HIT_R:22,CAP_PUSH:3,CAP_PUSH_MIN_Y:60,CAP_HIT_GAP_STEPS:3},C={CONE_BASE:140,CONE_SLOPE:.4,MIN_AHEAD:30},w={drone:{hp:3,r:16,score:100,smallHp:1,smallR:10,smallScore:50,wobble:[30,70],wobbleFreq:[2,4],spin:2},formV:{n:5,denseN:7,denseAt:1.3,xs:[170,370],gapX:56,gapY:46,y:-40,vy:175},formLine:{n:4,gap:55,x:30,y:110,stepY:30,vx:210,vy:80},cluster:{n:4,nPerDensity:2,xs:[270,170,370,270],gapX:44,gapY:22,y:-30,vy:135,wobble:10},spinner:{hp:14,r:24,score:500,lifeSteps:32,x:[110,430],y:-50,stopY:[170,280],enterSec:.7,leaveVy:240,spin:1.5},carrier:{hp:12,r:22,score:800,vx:95,y:210,offscreen:40,bob:18,bobFreq:2.4,spin:1.5},lancer:{hp:2,r:14,score:150,dash:900,n:3,jitter:20,y:-40,stopY:[110,210],stagger:.18,enterSec:.5},mine:{hp:4,r:15,score:200,vy:75,life:4.6,n:3,edge:60,y:-20,gap:70,ringN:10,ringSpeed:160,spin:1},seg:{hp:2,headR:15,r:12,score:80,count:8,x:[170,370],amp:[90,150],stagger:.13,freq:2.2,y:-30,waitY:-80,vy:150},bastion:{hp:40,r:30,score:1500,cap:3,lifeSteps:64,x:[140,400],y:-60,stopY:[140,190],follow:1.5,leaveVy:140,spin:.5},splitter:{hp:6,r:18,score:300,vy:110,n:2,edge:80,y:-30,gap:50,vx:[-90,90],wall:20,spin:3},BOUNDS:{below:70,above:-200,side:90,sideGraceSec:2},FIRE_PROB_SECTOR:.2,FIRE_PROB_PER_STAGE:.025,FIRE_PROB_BOSS:.3,FIRE_PROB_TUT:.2,FIRE_PROB_TUT_EVADE:.4,FIRE_PROB_TUT_EASY:.12},T={ring:{n:12,hot:6,speed:150,speedPerLevel:4,spin:.26},ring2:{n:10,hot:4,speeds:[140,200],spin:.3,spinStep:.1},aimed:{speed:240,n:3,hotN:5,spread:.18,dy:30},spiral:{arms:2,hotArms:3,speed:170,turn:.33},fan:{speed:210,n:7,hotN:9,spread:.14,dy:30},wave:{speed:200,freq:2.6,swing:.9},rain:{n:2,hotN:3,speed:230,edge:20,y:-10},burst:{n:10,speed:120,speedStep:25,spinStep:.1,lastStep:6},call:{speed:230,n:3,spread:.22,dy:30}},E={START_Y:-160,TARGET_Y:230,R:74,LOCK_CAP:8,FOLLOW_Y:1.6,SWAY_FREQ:.55,SWAY_X:120,FOLLOW_X:2,SPIN:.6,SPIN_PH2:1.1,SPIN_DYING:.3,MORPH_SEC:.9,WARN_CLEAR_SCORE:50},D={SCROLL_SPEED_STEP:.03,BOSS_CLEAR_SCORE:5e4},O={DMG:{circle:20,lane:18,safe:30,row:18,chase:20,donut:22,chain:15,cone:22,checker:20,wall:25},BUSY:{safe:20,wall:26,checker:16,chase:16,donut:14,chain:18},BUSY_DEFAULT:12,CHASE_SPEED:300,BAND_HIT_PAD:4,CHECKER_GRID:[4,7],SHAPE:{circle:{r:88,tele:12,edge:44,minY:150,extraR:80,extraDx:[165,-150],extraDy:70},lane:{w:92,tele:8,end:14,edge:46,extraW:84,extraEdge:42,extraDx:[120,170]},safe:{r:100,tele:16,edgeX:130,minYFrac:.45,bottomPad:100},row:{h:84,tele:8,end:14,minY:170,extraH:76,extraDy:200},chase:{r:80,lock:8,tele:14},donut:{r1:62,r2:185,tele:12},chain:{n:5,gap:78,r:58,tele:8,stepPer:2,edge:40,minY:150},cone:{hw:.26,len:1500,tele:10,end:14,edgeX:120,topY:-10},checker:{tele:12},wall:{gw:130,tele:12,end:24,edge:90,dx:[80,200],approach:8,fromY:-30}}},ee=[`PLUCK`,`SQUARE`,`SAW`,`SUPERSAW`,`BRASS`,`BELL`,`WOBBLE`,`RHODES`],k=[`LIGHT`,`STANDARD`,`HEAVY`],te=[`PULSE`,`DEEP`,`GLASS`],ne=[4,6,8,12],A=[`ASC`,`DESC`,`ORDER`,`RANDOM`,`PINGPONG`],re=[`8`,`16`,`T`],ie=[`S`,`M`,`L`],ae=[`player`,`accent`,`lime`,`heal`,`warn`,`white`],oe=[`dyn`,`tempo`,`art`,`expr`],j={STEPS:16,NOTES_MIN:2,NOTES_MAX:16,ACCENT_NOTES:2,ACCENT_MULT:1.8,D_BAR:28,NOTE_MAX:6,ACCENT_PER_VOICE:4,DROP_VOICES:{CLEAR:4,BURST:1,ABSORB:3,FREEZE:3},TUNE_RANGE:3,HEAT:{COOL:.5,WARN:.8,WARN_LP:900},OVERHEAT_MULT:.6,RANGE_ARMOR:3,RANGE_DPS_SEC:2},se={PLUCK:{power:1,n:1,spread:0,speed:1300,life:2,r:5,heat:.038,voices:1},SQUARE:{power:1,n:1,spread:0,speed:1e3,life:2,r:11,heat:.06,voices:1},SAW:{power:.6,n:2,spread:.09,speed:1100,life:2,r:6,heat:.06,voices:2},SUPERSAW:{power:.3,n:5,spread:.17,speed:1e3,life:2,r:6,heat:.08,voices:3},BRASS:{power:1.2,n:1,spread:0,speed:620,life:2.4,r:10,heat:.06,voices:2,pierce:!0,armorIgnore:.5},BELL:{power:.7,n:1,spread:0,speed:1100,life:2,r:7,heat:.045,voices:1,ring:.5,ringBeats:.5},WOBBLE:{power:.9,n:1,spread:0,speed:900,life:2,r:9,heat:.06,voices:2,wob:46,wobRate:1},RHODES:{power:1.5,n:1,spread:0,speed:900,life:.32,r:8,heat:.045,voices:1,near:90,far:290,farMult:.4}},ce={LIGHT:{layers:3,voices:12,move:1.15,hit:.7},STANDARD:{layers:4,voices:16,move:1,hit:1},HEAVY:{layers:5,voices:20,move:.86,hit:1.4}},le=.55,ue={RATE:{8:{steps:2,power:1},T:{steps:4/3,power:.9},16:{steps:1,power:.8}},LEN:{S:{cost:1,power:1,width:1,pierce:!1},M:{cost:1.25,power:1.15,width:1.6,pierce:!1},L:{cost:1.5,power:1.3,width:2.4,pierce:!0}},PIERCE_R:26,PIERCE_MULT:.5,OCT2_POWER:.5,CRIT_RATE:.25,CRIT_MULT:2},de={DYN_POWER:.08,DYN_HEAT:.08,DYN_HIT:.1,TEMPO_MOVE:.06,TEMPO_SLOW:.1,TEMPO_CONE:.12,ART_SPEED:.08,ART_LIFE:.1,ART_HEAT:.06,ART_RING:.15,ART_PIERCE_AT:2,EXPR_WIN:.15,EXPR_MULT:.12},M={DROP_RATE:.35,SAMPLE_MIN:1,SAMPLE_MAX:2,DUP_SAMPLES:5,SYNTH_COST:20,CHALLENGE_SAMPLES:3,CH_PERFECT:{BASE:3,STEP:1},CH_COMBO:{BASE:30,STEP:10},TUNE_AT:{dyn:1,tempo:2,art:4,expr:6}},fe={MAX:3,ADD:[[[{a:-.07,dx:-16,dmg:.25},{a:.07,dx:16,dmg:.25}],[{a:0,dx:-9,dmg:.25},{a:0,dx:9,dmg:.25}]],[[{a:-.51,dx:0,dmg:1},{a:.51,dx:0,dmg:1}],[{a:-.68,dx:0,dmg:1},{a:.68,dx:0,dmg:1}]],[[{a:-.3,dx:-6,dmg:.25},{a:.3,dx:6,dmg:.25}],[{a:-.6,dx:-10,dmg:.25},{a:.6,dx:10,dmg:.25}]]],NEW_START_DIV:3},pe={SHOT_BEATS:1,ITEM_RANGE:70},me={BPM_START:[100,120],BPM_STEP:[30,50],BPM_MAX:320,BOSS_HP:450,BOSS_HP_STEP:110,HEAL:20,DENSITY_STEP:.08,DENSITY_MAX:2,BULLET_SPEED_STEP:.04,BULLET_SPEED_MAX:1.5},he={W:1200,H:675},ge=[`auto`,`high`,`mid`,`low`],_e={high:0,mid:1,low:2},ve=class{setting;level=0;sum=0;n=0;warm=0;constructor(e=`auto`){this.setting=e,this.set(e)}set(e){this.setting=e,this.level=e===`auto`?0:_e[e],this.restart()}restart(){this.sum=0,this.n=0,this.warm=0}sample(e){if(this.setting!==`auto`||this.level>=r.DPR.length-1||!(e>0)||e>.5)return!1;if(this.warm<r.WARMUP_SEC)return this.warm+=e,!1;if(this.sum+=e,this.n++,this.sum<r.WINDOW_SEC)return!1;let t=this.sum/this.n;return this.sum=0,this.n=0,t<=r.SLOW_FRAME_SEC?!1:(this.level++,this.warm=0,!0)}get dpr(){return r.DPR[this.level]}get partsStride(){return r.PARTS_STRIDE[this.level]}},N={ink:`#060818`,field:`#0a0e26`,player:`#7ff3ff`,enemy:`#ff6b9a`,warn:`#ffb347`,accent:`#a98bff`,text:`#dfe6ff`,dim:`#8590c0`,lime:`#d4ff6b`,heal:`#6dffb0`,white:`#ffffff`},ye={standard:{player:`#7ff3ff`,enemy:`#ff6b9a`},blueYellow:{player:`#4fa8ff`,enemy:`#ffe14d`},contrast:{player:`#ffffff`,enemy:`#ff3b30`}},be=Object.keys(ye);function xe(e){let t=ye[e]??ye.standard,n=N;n.player=t.player,n.enemy=t.enemy,typeof document<`u`&&(document.documentElement.style.setProperty(`--player`,t.player),document.documentElement.style.setProperty(`--enemy`,t.enemy))}var Se=(e,t=N.warn)=>e&&e in N?N[e]:t,Ce=[N.player,N.accent,N.lime];function P(e){let[t,n]=e,r=t*16/n,i=n===4?4:t%3==0?6:2;return{bar:r,beat:i,beats:r/i}}function we(e){if(!Array.isArray(e)||e.length!==2)return!1;let[t,n]=e;if(typeof t!=`number`||!Number.isInteger(t)||n!==4&&n!==8)return!1;let r=t*16/n;return r>=6&&r<=32}var F={bpm:120,s16:60/120/4,bar:16,beat:4,beats:4,mid:8,set(e,t=[4,4]){this.bpm=e,this.s16=60/e/4;let n=P(t);this.bar=n.bar,this.beat=n.beat,this.beats=n.beats,this.mid=n.beat*Math.floor(n.beats/2)}},I=(e,t,n)=>e<t?t:e>n?n:e,L=(e,t,n,r)=>(e-n)*(e-n)+(t-r)*(t-r),Te=(e,t)=>((e.z??0)-(t.z??0))**2,R=[`KICK`,`BASS`,`SNARE`,`HAT`,`PAD`,`ARP`,`LEAD`],Ee=.85,z=new class{ac;master;out;musicBus;padBus;padHP;arpBus;leadBus;kickB;snareB;hatB;bassB;sfxBus;shotBus;userMusic;userSfx;userShot;vols={bgm:1,sfx:1,shot:1};echoBus;delayIn;delayNode;noiseBuf;hpLP;stutterG;musicLP;dryG;wetG;staticG;revIn;ready=!1;init(){if(this.ready)return this.ac;let e=window,t=window.AudioContext??e.webkitAudioContext,n=this.ac=new t({latencyHint:`interactive`}),r=n.createDynamicsCompressor();r.threshold.value=-14,r.ratio.value=4,r.attack.value=.003,r.release.value=.15,this.master=n.createGain(),this.master.gain.value=Ee,this.master.connect(r),r.connect(n.destination),this.out=r,this.musicBus=n.createGain();let i=()=>{let e=n.createGain();return e.connect(this.musicBus),e};this.kickB=i(),this.snareB=i(),this.hatB=i(),this.bassB=i(),this.arpBus=i(),this.leadBus=i(),this.padHP=i(),this.padBus=n.createGain(),this.padBus.connect(this.padHP),this.hpLP=n.createBiquadFilter(),this.hpLP.type=`lowpass`,this.hpLP.frequency.value=18e3,this.hpLP.Q.value=.8,this.musicBus.connect(this.hpLP),this.stutterG=n.createGain(),this.hpLP.connect(this.stutterG),this.musicLP=n.createBiquadFilter(),this.musicLP.type=`lowpass`,this.musicLP.frequency.value=18e3,this.musicLP.Q.value=.7,this.stutterG.connect(this.musicLP),this.userMusic=n.createGain(),this.userMusic.connect(this.master),this.userSfx=n.createGain(),this.userSfx.connect(this.master),this.userShot=n.createGain(),this.userShot.connect(this.master);let a=n.createGain();a.gain.value=.72,a.connect(this.userMusic),this.dryG=n.createGain(),this.musicLP.connect(this.dryG),this.dryG.connect(a);let o=n.createWaveShaper(),s=2048,c=new Float32Array(s);for(let e=0;e<s;e++){let t=e/2047*2-1;c[e]=Math.round(t*4)/4}o.curve=c;let l=n.createBiquadFilter();l.type=`highpass`,l.frequency.value=350,this.wetG=n.createGain(),this.wetG.gain.value=0,this.musicLP.connect(o),o.connect(l),l.connect(this.wetG),this.wetG.connect(a),this.sfxBus=n.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.userSfx),this.shotBus=n.createGain(),this.shotBus.gain.value=.9,this.shotBus.connect(this.userShot);let u=n.createBiquadFilter();u.type=`bandpass`,u.frequency.value=1500,u.Q.value=.9,this.echoBus=n.createGain(),this.echoBus.gain.value=.6,this.echoBus.connect(u),u.connect(this.userMusic);let d=n.createConvolver(),f=Math.floor(n.sampleRate*3.8),p=n.createBuffer(2,f,n.sampleRate);for(let e=0;e<2;e++){let t=p.getChannelData(e);for(let e=0;e<f;e++)t[e]=(Math.random()*2-1)*(1-e/f)**2.6}d.buffer=p,this.revIn=n.createGain(),this.revIn.gain.value=.55,this.revIn.connect(d),d.connect(this.master),this.delayNode=n.createDelay(1),this.delayNode.delayTime.value=F.s16*3;let m=n.createGain();m.gain.value=.33;let h=n.createBiquadFilter();h.type=`lowpass`,h.frequency.value=3200,this.delayIn=n.createGain(),this.delayIn.gain.value=.5,this.delayIn.connect(this.delayNode),this.delayNode.connect(h),h.connect(m),m.connect(this.delayNode),h.connect(this.master),this.noiseBuf=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let g=this.noiseBuf.getChannelData(0);for(let e=0;e<g.length;e++)g[e]=Math.random()*2-1;let _=n.createBufferSource();_.buffer=this.noiseBuf,_.loop=!0;let v=n.createBiquadFilter();return v.type=`bandpass`,v.frequency.value=2600,v.Q.value=.5,this.staticG=n.createGain(),this.staticG.gain.value=0,_.connect(v),v.connect(this.staticG),this.staticG.connect(this.master),_.start(),this.ready=!0,this.applyVolumes(),n}setVolumes(e){this.vols={...e},this.applyVolumes()}applyVolumes(){if(!this.ready)return;let e=this.ac.currentTime;this.userMusic.gain.setTargetAtTime(this.vols.bgm**2,e,.02),this.userSfx.gain.setTargetAtTime(this.vols.sfx**2,e,.02),this.userShot.gain.setTargetAtTime(this.vols.shot**2,e,.02)}latency(){let e=this.ac;return e.outputLatency||e.baseLatency||0}layerGain(e){switch(e){case`KICK`:return this.kickB.gain;case`BASS`:return this.bassB.gain;case`SNARE`:return this.snareB.gain;case`HAT`:return this.hatB.gain;case`PAD`:return this.padHP.gain;case`ARP`:return this.arpBus.gain;case`LEAD`:return this.leadBus.gain}}resetFx(){let e=this.ac.currentTime,t=[[this.musicLP.frequency,18e3],[this.wetG.gain,0],[this.dryG.gain,1],[this.staticG.gain,0],[this.stutterG.gain,1],[this.master.gain,Ee]];for(let[n,r]of t)n.cancelScheduledValues(e),n.setValueAtTime(r,e);this.delayNode.delayTime.setValueAtTime(F.s16*3,e)}glitch(e,t){let n=this.musicLP.frequency;n.cancelScheduledValues(e),n.setValueAtTime(520,e),n.exponentialRampToValueAtTime(18e3,e+t),this.wetG.gain.cancelScheduledValues(e),this.wetG.gain.setValueAtTime(.9,e),this.wetG.gain.linearRampToValueAtTime(0,e+t),this.dryG.gain.cancelScheduledValues(e),this.dryG.gain.setValueAtTime(.2,e),this.dryG.gain.linearRampToValueAtTime(1,e+t),this.staticG.gain.cancelScheduledValues(e),this.staticG.gain.setValueAtTime(.16,e),this.staticG.gain.linearRampToValueAtTime(0,e+t*.9);let r=this.stutterG.gain,i=F.s16/2;r.cancelScheduledValues(e);for(let t=0;t<14;t++)r.setValueAtTime(t%2?Math.random()<.5?.08:.55:1,e+t*i);r.setValueAtTime(1,e+14*i)}rampMaster(e,t){let n=this.ac.currentTime,r=this.master.gain;r.cancelScheduledValues(n),r.setValueAtTime(r.value,n),r.linearRampToValueAtTime(e,n+t)}muteMaster(){let e=this.ac.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(1e-4,e)}setDelayForTempo(){this.delayNode.delayTime.setValueAtTime(F.s16*3,this.ac.currentTime)}},B=e=>440*2**((e-69)/12);function De(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(r,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+i)}function Oe(e,t){let n=z.ac.createGain();n.gain.value=t,e.connect(n),n.connect(z.delayIn)}function ke(e,t){let n=z.ac.createGain();n.gain.value=t,e.connect(n),n.connect(z.revIn)}function V(e,t,n,r,i,a,o={}){let s=z.ac,c=o.a||.002,l=s.createOscillator();l.type=e,l.frequency.setValueAtTime(t,n),o.to&&l.frequency.exponentialRampToValueAtTime(o.to,n+(o.glide||r)),o.detune&&(l.detune.value=o.detune);let u=s.createGain();De(u,n,c,i,r);let d=l;if(o.lp){let e=s.createBiquadFilter();e.type=`lowpass`,e.frequency.setValueAtTime(o.lp,n),o.lpTo&&e.frequency.exponentialRampToValueAtTime(o.lpTo,n+c+r),e.Q.value=o.q||1,l.connect(e),d=e}d.connect(u),u.connect(a),o.send&&Oe(u,o.send),o.rev&&ke(u,o.rev),l.start(n),l.stop(n+c+r+.05)}function H(e,t,n,r,i,a,o={}){let s=z.ac,c=o.a||.001,l=s.createBufferSource();l.buffer=z.noiseBuf,l.loop=!0;let u=s.createBiquadFilter();u.type=i,u.frequency.setValueAtTime(a,e),o.to&&u.frequency.exponentialRampToValueAtTime(o.to,e+c+t),u.Q.value=o.q||.8;let d=s.createGain();De(d,e,c,n,t),l.connect(u),u.connect(d),d.connect(r),o.send&&Oe(d,o.send),o.rev&&ke(d,o.rev),l.start(e,Math.random()*1.5),l.stop(e+c+t+.05)}function Ae(e){z.padBus.gain.setValueAtTime(.3,e),z.padBus.gain.linearRampToValueAtTime(1,e+.2)}function je(e,t){let n=z.kickB;if(t.startsWith(`heart`)){let r=t.slice(6);r===`DEEP`?(V(`sine`,54,e,.42,1,n,{to:28,glide:.18}),V(`sine`,48,e+.21,.34,.6,n,{to:26,glide:.14})):r===`GLASS`?(V(`sine`,72,e,.24,.7,n,{to:40,glide:.1}),V(`triangle`,1320,e,.08,.08,n),V(`sine`,62,e+.15,.2,.45,n,{to:36,glide:.08}),V(`triangle`,990,e+.15,.06,.05,n)):(V(`sine`,72,e,.3,.95,n,{to:36,glide:.12}),V(`sine`,62,e+.17,.26,.55,n,{to:34,glide:.1}))}else t===`chip`?V(`square`,300,e,.09,.4,n,{to:50,glide:.06}):t===`boom`?(V(`sine`,130,e,.55,1,n,{to:38,glide:.18}),H(e,.02,.2,n,`lowpass`,1500)):t===`soft`?V(`sine`,110,e,.25,.75,n,{to:48,glide:.1}):(V(`sine`,160,e,.32,.95,n,{to:42,glide:.11}),H(e,.015,.25,n,`highpass`,3e3)),Ae(e)}function Me(e,t,n){let r=z.snareB;switch(n){case`clap`:for(let n=0;n<3;n++)H(e+n*.012,.03,.3*t,r,`bandpass`,1600,{q:1.2});H(e+.036,.16,.3*t,r,`bandpass`,1400,{q:.8});break;case`gated`:H(e,.24,.42*t,r,`bandpass`,1500,{q:.6,send:.3}),V(`triangle`,190,e,.1,.3*t,r,{to:130});break;case`chip`:H(e,.08,.35*t,r,`highpass`,2e3),V(`square`,220,e,.05,.12*t,r,{to:110});break;case`rim`:V(`square`,820,e,.02,.12*t,r,{lp:3e3}),H(e,.03,.2*t,r,`bandpass`,3200,{q:2});break;case`lofi`:H(e,.14,.3*t,r,`lowpass`,2600),V(`triangle`,180,e,.07,.18*t,r,{to:140});break;case`big`:H(e,.32,.45*t,r,`bandpass`,1300,{q:.5,send:.25}),V(`triangle`,170,e,.14,.35*t,r,{to:110});break;default:H(e,.17,.42*t,r,`bandpass`,1900,{q:.7}),V(`triangle`,200,e,.08,.28*t,r,{to:140})}}function Ne(e,t,n,r){let i=z.hatB;r===`chip`?H(e,n?.08:.02,.14*t,i,`highpass`,7e3):r===`ride`?(H(e,.28,.09*t,i,`bandpass`,7400,{q:3}),V(`square`,5200,e,.08,.012*t,i)):r===`soft`?H(e,n?.12:.03,.09*t,i,`highpass`,7500):H(e,n?.16:.035,.16*t,i,`highpass`,8e3)}function Pe(e){V(`sine`,95,e,.4,.7,z.kickB,{to:58,glide:.2}),H(e,.15,.25,z.kickB,`lowpass`,500)}function Fe(e){H(e,1.4,.26,z.hatB,`highpass`,4500,{send:.2})}var Ie=0;function Le(e,t,n){let r=z.ac,i=r.createOscillator();i.type=`sawtooth`,i.frequency.value=B(t);let a=r.createOscillator();a.type=`square`,a.frequency.value=B(t)*1.006;let o=r.createBiquadFilter();o.type=`lowpass`,o.Q.value=8,o.frequency.value=700,Ie=(Ie+1)%3;let s=r.createOscillator();s.frequency.value=1/(F.s16*[2,4,1][Ie]);let c=r.createGain();c.gain.value=600,s.connect(c),c.connect(o.frequency);let l=r.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(.22,e+.01),l.gain.exponentialRampToValueAtTime(1e-4,e+.01+n),i.connect(o),a.connect(o),o.connect(l),l.connect(z.bassB);for(let t of[i,a,s])t.start(e),t.stop(e+n+.1);V(`sine`,B(t-12),e,n,.3,z.bassB,{a:.01})}function Re(e,t,n,r){let i=z.bassB;switch(r){case`reese`:for(let r of[-14,14])V(`sawtooth`,B(t),e,n,.15,i,{lp:700,lpTo:220,q:2,detune:r,a:.01});V(`sine`,B(t),e,n,.26,i,{a:.01});break;case`acid`:V(`sawtooth`,B(t),e,n,.24,i,{lp:2600,lpTo:240,q:11}),V(`sine`,B(t),e,n,.2,i);break;case`sub`:V(`sine`,B(t),e,n,.42,i,{a:.01}),V(`triangle`,B(t+12),e,n*.5,.06,i);break;case`pulse`:V(`sawtooth`,B(t),e,n,.22,i,{lp:1600,lpTo:300,q:3}),V(`sine`,B(t),e,n,.18,i);break;case`chip`:V(`triangle`,B(t),e,n,.38,i);break;case`slap`:V(`square`,B(t),e,n,.16,i,{lp:3200,lpTo:400,q:4}),V(`sine`,B(t),e,n,.24,i);break;case`walk`:V(`triangle`,B(t),e,n,.34,i,{lp:1400,lpTo:500}),V(`sine`,B(t),e,n,.2,i);break;case`wobble`:Le(e,t,n);break;default:V(`sawtooth`,B(t),e,n,.26,i,{lp:1e3,lpTo:180,q:6}),V(`sine`,B(t),e,n,.22,i)}}function ze(e,t,n,r,i){let a=i||z.arpBus;r===`bell`?(V(`sine`,B(t),e,.35,.07*n,a,{send:.3}),V(`sine`,B(t+24),e,.12,.015*n,a)):r===`pluck`?V(`triangle`,B(t),e,.14,.09*n,a,{lp:2600,lpTo:600,send:.3}):r===`chip`?V(`square`,B(t),e,.06,.045*n,a):V(`square`,B(t),e,.11,.06*n,a,{lp:3200,lpTo:900,send:.35})}function Be(e,t,n,r,i){let a=i||z.leadBus;switch(r){case`chip`:V(`square`,B(t),e,n,.06,a,{a:.003});break;case`brass`:V(`sawtooth`,B(t),e,n,.07,a,{a:.03,lp:900,lpTo:2800,q:2,send:.2}),V(`sawtooth`,B(t),e,n,.04,a,{a:.03,lp:1200,lpTo:2400,detune:10});break;case`rhodes`:V(`sine`,B(t),e,n*1.2,.1,a,{a:.004,send:.3}),V(`triangle`,B(t+12),e,n*.4,.03,a);break;case`reed`:V(`sawtooth`,B(t),e,n,.06,a,{a:.02,lp:2e3,lpTo:1200,q:2,send:.25}),V(`square`,B(t),e,n,.025,a,{a:.02,lp:1500,detune:-6});break;case`supersaw`:for(let r of[-14,0,14])V(`sawtooth`,B(t),e,n,.035,a,{a:.01,lp:4200,lpTo:2e3,detune:r,send:.3});break;default:V(`square`,B(t),e,n,.05,a,{a:.006,lp:3400,lpTo:1200,send:.35}),V(`sawtooth`,B(t),e,n,.04,a,{a:.006,lp:2800,lpTo:1e3,detune:8})}}function Ve(e,t,n,r,i){let a=z.padBus;if(i===`rhodes`){for(let i of t)V(`sine`,B(i),e,n,.05*r,a,{a:.005}),V(`triangle`,B(i+12),e,n*.3,.012*r,a);return}if(i===`organ`){for(let i of t)V(`square`,B(i),e,n,.016*r,a,{a:.02,lp:1400});return}let o=i===`strings`;for(let i of t)for(let t of[-9,9])V(`sawtooth`,B(i),e,n,(o?.026:.032)*r,a,{a:o?.5:.3,lp:o?2200:1500,lpTo:o?900:450,detune:t})}function He(e,t,n){for(let r of t)n===`brass`?V(`sawtooth`,B(r+12),e,.18,.05,z.arpBus,{a:.01,lp:1200,lpTo:3e3,send:.2}):n===`rhodes`?V(`sine`,B(r+12),e,.3,.07,z.arpBus,{send:.2}):V(`square`,B(r+12),e,.14,.045,z.arpBus,{lp:4e3,lpTo:800,send:.3})}function Ue(e,t){let n=z.ac,r=n.createBufferSource();r.buffer=z.noiseBuf,r.loop=!0;let i=n.createBiquadFilter();i.type=`bandpass`,i.Q.value=2,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(7e3,e+t);let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.25,e+t*.97),a.gain.linearRampToValueAtTime(1e-4,e+t),r.connect(i),i.connect(a),a.connect(z.sfxBus),r.start(e),r.stop(e+t+.05)}var We=0;function Ge(){We=0}function Ke(e,t,n,r,i){let a=z.shotBus,o=b.SHOT_VOL*(n===2?1.6:n===3?.5:1),s=r[We++%r.length],c=i||n===3?j.HEAT.WARN_LP:0,l=e=>c?Math.min(c,e):e;switch(t){case`PLUCK`:V(`triangle`,B(s+24),e,.05,.05*o,a,{lp:l(6e3)}),H(e,.012,.02*o,a,`highpass`,c||9e3);break;case`SQUARE`:V(`square`,B(s+12),e,.06,.03*o,a,{lp:l(3200)});break;case`SAW`:V(`sawtooth`,B(s+12),e,.06,.022*o,a,{lp:l(4200),detune:-8}),V(`sawtooth`,B(s+12),e,.06,.022*o,a,{lp:l(4200),detune:8});break;case`SUPERSAW`:for(let t of[-14,0,14])V(`sawtooth`,B(s+12),e,.07,.016*o,a,{lp:l(5200),detune:t});break;case`BRASS`:V(`sawtooth`,B(s),e,.11,.04*o,a,{lp:l(700),lpTo:l(2600),a:.012});break;case`BELL`:V(`sine`,B(s+24),e,.28,.04*o,a,{lp:l(12e3),send:.3}),V(`sine`,B(s+24)*3.5,e,.12,.012*o,a,{lp:l(12e3)});break;case`WOBBLE`:V(`square`,B(s),e,.1,.035*o,a,{lp:l(500),lpTo:l(2400),q:6});break;case`RHODES`:V(`sine`,B(s+12),e,.14,.05*o,a),V(`triangle`,B(s+24),e,.05,.015*o,a,{lp:l(5e3)})}}function qe(e,t,n=1){V(`triangle`,B(t),e,.24,.22*n,z.sfxBus,{send:.45}),V(`sine`,B(t+12),e,.12,.07*n,z.sfxBus)}function Je(e,t){V(`square`,B(t),e,.05,.065,z.sfxBus,{lp:4200})}function Ye(e){H(e,.14,.12,z.sfxBus,`bandpass`,3e3,{to:500})}function Xe(e,t){V(`sawtooth`,B(t),e,.16,.1,z.sfxBus,{lp:5e3,lpTo:600,send:.4}),V(`triangle`,B(t+7),e,.16,.09,z.sfxBus)}function Ze(e,t){for(let n of[0,7,12])V(`sine`,B(t+n),e,.35,.07,z.sfxBus,{send:.4});H(e,.25,.06,z.sfxBus,`highpass`,9e3)}function Qe(e){V(`sine`,B(100),e,.03,.035,z.sfxBus)}function $e(e,t){V(`square`,B(t),e,.05,.06,z.sfxBus,{lp:4200,send:.15})}function et(e,t){V(`square`,B(t),e,.025,.12,z.sfxBus,{lp:6e3}),V(`sine`,B(t-12),e,.05,.12,z.sfxBus)}function tt(e,t){V(`sine`,B(t),e,.07,.1,z.sfxBus),V(`square`,B(t),e,.03,.025,z.sfxBus,{lp:2e3})}function nt(e){H(e,.45,.45,z.sfxBus,`lowpass`,2600,{to:110}),V(`sine`,95,e,.42,.55,z.sfxBus,{to:34})}function rt(e,t){V(`sawtooth`,B(33),e,t,.11,z.sfxBus,{lp:1800,lpTo:500,a:.01}),H(e,t,.1,z.sfxBus,`bandpass`,1400,{a:.01})}function it(e){H(e,.5,.45,z.sfxBus,`bandpass`,1300,{to:140}),V(`square`,220,e,.4,.12,z.sfxBus,{to:55});for(let t=0;t<5;t++)V(`square`,300+Math.random()*2100,e+t*.03,.025,.05,z.sfxBus)}function at(e){V(`square`,B(81),e,.16,.07,z.sfxBus,{lp:2600}),V(`square`,B(76),e+F.s16*2,.16,.07,z.sfxBus,{lp:2600})}function ot(e){H(e,1.6,.6,z.sfxBus,`lowpass`,3e3,{to:60,send:.3}),V(`sine`,70,e,1.2,.7,z.sfxBus,{to:25})}function st(e,t){V(`sawtooth`,B(t),e,.12,.09,z.sfxBus,{lp:2400,lpTo:900,q:5,send:.3}),V(`square`,B(t-12),e,.1,.04,z.sfxBus,{lp:1200})}function ct(e,t){V(`square`,B(t),e,.03,.05,z.sfxBus,{lp:9e3}),V(`triangle`,B(t+7),e,.06,.04,z.sfxBus),H(e,.03,.06,z.sfxBus,`highpass`,7e3)}function lt(e,t){V(`sawtooth`,B(t),e,.2,.12,z.sfxBus,{lp:6e3,lpTo:1500,send:.4}),V(`sine`,B(t+12),e,.25,.1,z.sfxBus,{send:.4}),H(e,.08,.15,z.sfxBus,`highpass`,5e3)}function ut(e,t,n,r){V(`sine`,B(t),e,.18,.12,z.sfxBus,{send:.4}),V(`sine`,B(n),e+r,.22,.1,z.sfxBus,{send:.4})}function dt(e,t,n){t.forEach((t,r)=>V(`triangle`,B(t),e+r*n*.5,.14,.12,z.sfxBus,{send:.3}))}function ft(e,t=2.6,n=26){H(e,t,.55,z.sfxBus,`lowpass`,5e3,{to:70,rev:.7}),V(`sine`,90,e,t,.8,z.sfxBus,{to:n,glide:t*.85})}function pt(e,t,n=4){[1,1.48,2.03,2.71,3.9].forEach((r,i)=>V(`sine`,B(t)*r,e,n/(1+i*.4),.12/(1+i*.6),z.sfxBus,{a:.004,rev:.8}))}function mt(e,t,n,r,i=`sawtooth`){for(let a of t)for(let t of[-10,10])V(i,B(a),e+.03,n,r,z.sfxBus,{a:.08,lp:5e3,lpTo:500,detune:t,rev:.9})}function ht(e,t,n=.075,r=24){t.concat(t.map(e=>e+12)).forEach((t,i)=>V(`sine`,B(t+r),e+.15+i*n,1.3,.06,z.sfxBus,{send:.4,rev:.8}))}function gt(e,t,n=.09){V(`sine`,B(t),e,.9,n,z.sfxBus,{a:.003,rev:.5}),V(`sine`,B(t)*2.76,e,.35,n*.35,z.sfxBus,{rev:.5})}function _t(e,t,n,r,i,a){let o=z.ac,s=o.createOscillator();s.type=`sawtooth`,s.frequency.value=B(t);let c=o.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(r,e+Math.min(.4,n*.3)),c.gain.exponentialRampToValueAtTime(1e-4,e+n);for(let[e,t]of[[i,5],[a,6]]){let n=o.createBiquadFilter();n.type=`bandpass`,n.frequency.value=e,n.Q.value=t,s.connect(n),n.connect(c)}c.connect(z.sfxBus),ke(c,.8),s.start(e),s.stop(e+n+.05)}function vt(e){H(e,.09,.12,z.sfxBus,`bandpass`,2600,{to:900}),V(`square`,B(74),e+.02,.05,.035,z.sfxBus,{lp:3200}),V(`square`,B(81),e+.07,.07,.035,z.sfxBus,{lp:3200,send:.2})}function yt(e){H(e,.07,.1,z.sfxBus,`bandpass`,1800,{to:500}),V(`square`,B(76),e,.08,.03,z.sfxBus,{lp:2400,to:B(64)})}function bt(e,t,n,r){_t(e,t,f.VOICE_LEN,f.VOICE_PEAK,n,r)}function xt(e){let t=z.ac,n=t.createBufferSource();n.buffer=z.noiseBuf,n.loop=!0;let r=t.createBiquadFilter();r.type=`bandpass`,r.frequency.setValueAtTime(8e3,e-.7),r.frequency.exponentialRampToValueAtTime(300,e);let i=t.createGain();i.gain.setValueAtTime(1e-4,e-.7),i.gain.exponentialRampToValueAtTime(.45,e-.01),i.gain.linearRampToValueAtTime(1e-4,e),n.connect(r),r.connect(i),i.connect(z.sfxBus),n.start(e-.7),n.stop(e+.02),V(`sine`,40,e-.6,.6,.3,z.sfxBus,{to:500,glide:.6})}var St=()=>z.sfxBus,Ct={shield:{pat:[`x...x...x...x...`,`x.x.x.x.xxxxxxxx`],dir:`down`,pop:(e,t)=>{H(e,.5,.3,St(),`bandpass`,2400,{q:6,rev:.4});for(let n of[1,2.76,5.4])V(`triangle`,B(t)*n,e,.6/n,.1/n,St(),{rev:.4});V(`sine`,B(t-24),e,.3,.4,St(),{to:40,glide:.25})},fin:(e,t)=>{ft(e),pt(e,t[0]-12),mt(e,t.concat([t[0]+12]),3.2,.045)}},tide:{pat:[`x..x..x..x..x.x.`,`x..x..x.xxxxxxxx`],dir:`wave`,pop:(e,t)=>{V(`sine`,B(t-12),e,.18,.3,St(),{to:B(t+12),glide:.12,rev:.5}),H(e,.22,.18,St(),`lowpass`,900,{rev:.4})},fin:(e,t)=>{ft(e,3),H(e,3.2,.3,St(),`bandpass`,4e3,{to:200,q:1.5,rev:.9}),mt(e,t,4,.05,`sine`);for(let n=0;n<10;n++){let r=t[n%t.length]+12+n%3*12;V(`sine`,B(r-12),e+.2+n*.13,.15,.12,St(),{to:B(r),glide:.1,rev:.6})}}},disco:{pat:[`x..x..x...x..x..`,`x..x..x.x.x.xxxx`],dir:`rand`,pop:(e,t)=>{for(let t=0;t<3;t++)H(e+t*.011,.04,.25,St(),`bandpass`,1500,{q:1.2});V(`square`,B(t),e,.12,.07,St(),{lp:3500,lpTo:600,rev:.3})},fin:(e,t)=>{V(`sawtooth`,600,e-.35,.35,.12,St(),{to:70,glide:.33}),H(e-.35,.33,.12,St(),`bandpass`,2500,{to:300,q:2});for(let n of t.concat([t[0]+12,t[0]-12]))V(`sawtooth`,B(n),e,.5,.09,St(),{lp:5e3,lpTo:900,rev:.6}),V(`square`,B(n+12),e,.35,.04,St(),{rev:.6});ft(e,1.6),H(e,1.2,.2,St(),`highpass`,6e3,{rev:.5}),ht(e,t,.045,24)}},sun:{pat:[`x.x.x.x.x.x.x.x.`,`xxxxxxxxxxxxxxxx`],dir:`up`,pop:(e,t)=>{H(e,.25,.3,St(),`highpass`,2500,{rev:.4}),V(`sine`,B(t+12),e,.2,.08,St(),{rev:.4})},fin:(e,t)=>{H(e,2.6,.32,St(),`bandpass`,600,{to:11e3,q:.7,rev:.9}),ft(e,2.4);for(let n of t.concat([t[0]+12,t[0]+19]))V(`sawtooth`,B(n),e+.05,3.4,.045,St(),{a:.5,lp:1200,lpTo:7e3,rev:.9})}},pixel:{pat:[`x.xxx.xxx.xxx.xx`,`xxxxxxxxxxxxxxxx`],dir:`down`,pop:(e,t)=>{V(`square`,B(t),e,.12,.11,St(),{to:B(t-24),glide:.11}),H(e,.06,.2,St(),`highpass`,6e3)},fin:(e,t)=>{for(let n=0;n<16;n++)V(`square`,B(t[0]+36-n*3),e+n*.035,.06,.09,St());H(e,.7,.35,St(),`highpass`,1500,{to:400}),V(`triangle`,70,e,.8,.5,St(),{to:30}),[0,4,7,12].forEach((n,r)=>V(`square`,B(t[0]+24+n),e+.8+r*.09,.12,.07,St(),{rev:.25}))}},orrery:{pat:[`x.x.x.x.x.x.x.x.`,`x.x.x.x.xxxxxxxx`],dir:`up`,pop:(e,t)=>{gt(e,t),H(e,.2,.12,St(),`lowpass`,2e3,{rev:.3})},fin:(e,t)=>{ft(e,2),pt(e,t[0]-12,5);for(let n=0;n<3;n++)t.forEach((r,i)=>gt(e+.1+(n*t.length+i)*.11,r+12+n*12,.07))}},chorus:{pat:[`x...x...x...x...`,`x...x...x.x.xxxx`],dir:`wave`,pop:(e,t,n)=>{let r=n%2?[400,800]:[700,1150];_t(e,t,.4,.09,r[0],r[1]),H(e,.15,.15,St(),`lowpass`,1500)},fin:(e,t)=>{ft(e,1.8);for(let n of t.concat([t[0]+12]))for(let t of[[700,1150],[400,2e3]])_t(e+.05,n,4.2,.07,t[0],t[1]);ht(e,t,.09,24)}},gravity:{pat:[`x.......x.......`,`x...x...x.x.xxxx`],dir:`down`,pre:!0,pop:(e,t)=>{V(`sine`,40,e,.22,.35,St(),{to:B(t),glide:.2,rev:.5}),H(e,.25,.2,St(),`lowpass`,1200,{a:.15,rev:.4})},fin:(e,t)=>{ft(e,3.2,18),V(`sine`,55,e,3.4,.6,St(),{to:18,glide:3}),mt(e+.6,t.map(e=>e-12),3,.04,`sine`)}},lattice:{pat:[`xx..xx..x.xx.x.x`,`xxxxxxxxxxxxxxxx`],dir:`rand`,pop:(e,t)=>{for(let n=0;n<4;n++)V(`square`,B(t+[0,7,12,5][n]),e+n*.022,.02,.07,St(),{lp:6e3})},fin:(e,t)=>{for(let n=0;n<14;n++){let r=.09*(1-n/16);for(let i of t)V(`square`,B(i+12),e+n*.032,.026,r,St(),{lp:5e3})}ft(e,2.2),H(e,.9,.3,St(),`bandpass`,3e3,{to:500,q:3,rev:.5});for(let n=0;n<8;n++)V(`square`,B(t[n%t.length]+24+n*5%12),e+.6+n*.07,.04,.05,St(),{rev:.6})}},vesper:{pat:[`x.x.x.x.x.x.x.x.`,`xxxxxxxxxxxxxxxx`],dir:`down`,pre:!0,pop:(e,t)=>{H(e,.32,.4,St(),`lowpass`,3200,{to:180,rev:.35}),V(`sine`,B(t),e,.28,.28,St(),{to:B(t)/3,glide:.25,rev:.3})},fin:(e,t)=>{ft(e,3.2),pt(e,t[0]-24,5),mt(e,t.concat([t[0]+12,t[0]-12]),3.8,.05);for(let n of t)_t(e+.1,n,4,.05,700,1150);ht(e,t,.075,24)}}},wt=e=>Ct[e]??Ct.vesper;function Tt(e,t,n){return e===`up`?n[Math.min(15,2+t)]:e===`wave`?n[I(8+Math.round(Math.sin(t*.9)*6),0,15)]:e===`rand`?n[(t*7+3)%16]:n[Math.max(0,15-t)]}function Et(e,t,n,r){wt(t).pop(e,n,r)}function Dt(e,t,n){wt(t).fin(e,n)}var Ot=[`BASS`,`SNARE`,`HAT`,`PAD`],kt=e=>Ot[Math.min(e,Ot.length-1)],At=e=>Array.from({length:e},(t,n)=>(n+1)/(e+1)*100);function jt(e,t){let n=0;for(let r of t)e>=r&&n++;return n}function Mt(e,t,n){let r=jt(e,n),i=n.length,a=t;return{L:r,c:a,KICK:1,BASS:+(r>=1),SNARE:+(r>=2),HAT:+(r>=3),PAD:i<4?0:i===4?+(r>=4):r>=5?1:r>=4?le:0,ARP:+(a>=1),LEAD:+(a>=2),lp:r===0?1600:r===1?7e3:18e3}}function Nt(e,t,n,r,i){let a=z.ac.currentTime;for(let t of[`KICK`,`BASS`,`SNARE`,`HAT`,`PAD`]){let i=z.layerGain(t);i.cancelScheduledValues(a),i.setValueAtTime(i.value,a),i.setTargetAtTime(e[t],n,r?.001:.03)}z.hpLP.frequency.cancelScheduledValues(a),z.hpLP.frequency.setTargetAtTime(e.lp,n,.05);for(let o of[`ARP`,`LEAD`]){if(!r&&t&&t[o]===e[o])continue;let s=z.layerGain(o);s.cancelScheduledValues(a),s.setValueAtTime(r?e[o]:s.value,a),!r&&(e[o]>0?s.setTargetAtTime(1,n,.04):(s.setValueAtTime(s.value,n),s.linearRampToValueAtTime(0,n+i)))}}function Pt(e,t){for(let n of R)z.layerGain(n).setTargetAtTime(e[n],t,.04);z.hpLP.frequency.setTargetAtTime(e.lp,t,.05)}var Ft={kick:je,snare:Me,hat:Ne,taiko:Pe,crash:Fe,bass:Re,arp:ze,lead:Be,pad:Ve,stab:He,riser:Ue,bigBoom:ot,hpTick:$e,killNote:qe,laserHit:Xe,lockTick:Je,perfectSfx:Ze,callTone:st,counterSfx:lt,armorTink:ct,deathPop:Et,finale:Dt,implode:xt,commOpen:vt,commClose:yt,commVoice:bt},It=6e3,Lt=1e3,Rt=new class{entries=[];enabled=!1;reset(){this.entries=[]}push(e,t,n){this.enabled&&(this.entries.push([e,t,n]),this.entries.length>It&&this.entries.splice(0,Lt))}};function zt(e,t,...n){Rt.push(t,e,n),Ft[e](t,...n)}function Bt(e,t){Rt.push(e,`gain`,[{...t}])}var Vt=null,Ht=()=>Vt!==null;function Ut(e){Vt&&=(clearInterval(Vt),null),e&&z.ready&&z.rampMaster(1e-4,.3)}function Wt(e){let t=Rt.entries;if(!z.ready||!t.length)return!1;let n=[...t].sort((e,t)=>e[0]-t[0]),r=n[n.length-1][0]-b.REPLAY_SEC,i=null;for(let e of n){if(e[0]>=r)break;e[1]===`gain`&&(i=e[2][0])}let a=n.filter(e=>e[0]>=r);if(!a.length)return!1;let o=z.ac,s=o.currentTime,c=s+.35-a[0][0];z.resetFx(),i&&Pt(i,s);let l=0;return Vt=setInterval(()=>{let t=o.currentTime+.3;for(;l<a.length&&a[l][0]+c<t;){let[e,t,n]=a[l++],r=Math.max(o.currentTime+.01,e+c);t===`gain`?Pt(n[0],r):Ft[t](r,...n)}l>=a.length&&o.currentTime>a[a.length-1][0]+c+2.5&&(Ut(!0),e())},50),!0}var Gt=class{s;constructor(e=Date.now()>>>0){this.s=e>>>0}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}seed(e){this.s=e>>>0}range(e,t){return e+this.next()*(t-e)}int(e){return this.next()*e|0}pick(e){return e[this.int(e.length)]}},Kt=new Gt,qt=(e,t)=>Kt.range(e,t),Jt=new Gt,Yt={meta:{lang:`ja`,title:`Pulse Vector`,_note:`description と shareTitle は Web 版のページの説明（検索結果、共有したときのプレビュー）。ビルドのときに index.html へ入る`,description:`音ハメで撃つリズムシューティング。曲の厚みが体力とスコアを表し、撃つ音もロックの音も拍に揃う。ブラウザとスマホで遊べる。`,shareTitle:`Pulse Vector — Rhythm Shooter`},splash:{_note:`タイトル画面（Phase 11.5）。ロゴの文字は title.logo1 / logo2`,tagline:`Rhythm Shooter`,press:`PRESS ANY KEY`,pressTouch:`TAP TO START`,version:`ver {v}`,test:`TEST BUILD`,feedback:`感想を送る`,copyright:`© 2026 Shino`},title:{eyebrow:`Rhythm Shooter Prototype · 10 Stages`,logo1:`PULSE`,logo2:`VECTOR`,lede:`曲の厚みが状態表示になる。低音側は HP、高音側はコンボ。ボスが使った AoE は次のステージから道中に持ち越され、そのボスの曲の断片も一緒に聞こえる。`,keys:[[`←↑↓→ / WASD`,`移動（Shift で低速）`],[`Z / J`,`ショット（押しっぱなし）`],[`X / K`,`押してロック、拍ちょうどで離すと PERFECT`],[`C / L`,`ドロップ：次の小節頭で弾を全消去`],[`ITEM`,`<b>緑の＋</b>で HP 回復／<i>カプセル</i>で武器変更・強化`],[`Enter / V`,`オペレーターの通信を送る`],[`Esc`,`ポーズ　／　TOUCH：ドラッグ移動・右下ボタン`]],invincible:`無敵モード`,moveSpeed:`移動速度`,moveSpeedOptions:[`標準`,`速い`,`最速`],offset:`オフセット`,offsetValue:`{sign}{ms} ms`,exNote:`∞ EXTRA：ランダムなボスを倒すごとに BPM が 30〜50 上がり、曲もランダムに切り替わる。HP 以外は途切れずに続く。`,soundNote:`音が出ます。オフセットは拍の判定（PERFECT・グレイズ）と拍の光をずらします。押すのが遅れがちならプラスへ。「キャリブレーション」で自動で合わせられます。`,reduceFlash:`点滅を弱める`,calibrate:`キャリブレーション`,exName:`EXTRA ／ ノンストップ`,exTitle:`ランダムなボスを倒すごとに BPM が 30〜50 上がり、曲もランダムに変わる`,exBest:`BEST {score}  ·  ROUND {round}  ·  BPM {bpm}`,exBestNone:`BEST ―`,stageMeta:`{genre} · {bpm}`,controls:`操作`,stages:`ステージ`,settings:`設定`,toSplash:`タイトルへ戻る`,invOn:`無敵モード ON`},progress:{sim:`SIM`,trackSim:`調律試験（SIM）`,trackMain:`本番`,codename:`CODENAME  {name}`,codenameChange:`変更`,garage:`GARAGE`,studio:`STUDIO`},operator:{_note:`仮の台詞（Shino さんが書き換える前提）。1つの台詞は1行の文か、数行の文の並び（通信ウィンドウで1行ずつ出る）。{name} = コードネーム（1周目は callR1）、{n} = 区画（ステージ）の番号。「……」だけの行は声を出さず、波形が平らになる`,label:`OPERATOR`,incoming:`INCOMING`,callR1:`調律体`,r1:{start:[[`調律試験、第{n}区画。`,`拍を拾え。`],[`{name}、信号は安定している。`,`始めよう。`],[`記録を開始する。`,`音を途切れさせるな。`]],warn:[[`大きな反応。`,`……先代の残響だ。`],[`来るぞ。`,`拍を見失うな。`]],bossDown:[`反応、消失。よくやった。`,`残響を回収した。次へ。`],lowHp:[`音が薄い。持ちこたえろ。`,`心音だけになるぞ。`]},r2:{start:[[`本番だ、{name}。`,`……今回は——いや、行こう。`],[`第{n}区画。`,`前より、音が少ない。`],`{name}。拍を拾え。`],warn:[[`来る。`,`知っている反応だ。`,`……気にするな。`],`大きな反応。`],bossDown:[`……`,[`……`,`回収した。`],[`……`,`次へ。`]],lowHp:[`{name}、音が消えかけている。`,`まだだ。`]},ending:{web:[`……聞こえるか、{name}。`,`試験は、これで終わりだ。`,`本番の記録は、ここでは開けない。`],full:[`……聞こえるか、{name}。`,`試験は、これで終わりだ。`,`本番の前に、名前を登録してくれ。`],registered:[`{name}。……覚えた。`,`前にも、そう呼んだ気がする。`,`——気のせいだ。行こう。`]},slip:`{other}——いや、{name}`,others:[`K-04`,`LYRA`,`ノクト`,`SEVEN`]},lastWords:{_note:`ボス（先代）の撃破時の一言。仮の文`,shield:`まだ、守れると思っていた`,tide:`波の音しか、覚えていない`,disco:`踊っていれば、忘れられた`,sun:`眩しすぎて、何も聞こえない`,pixel:`8つの音で、足りたはずだった`,orrery:`巡り続ければ、終わらないと`,chorus:`みんなの声が、わたしだった`,gravity:`落ちていく音が、心地よかった`,lattice:`形にすれば、残ると思った`,vesper:`最後の拍を、きみに`},ending:{_note:`1周目クリア時の種明かし（偽エンディング → ノイズ → TUNING COMPLETE）。仮の文`,fakeTitle:`ALL TUNING TESTS PASSED`,fakeSub:`おつかれさま、調律体。`,roll:[`PULSE VECTOR`,``,`TUNING PROGRAM`,``,`DESIGN / PROGRAM / MUSIC`,`Shino`,``,`OPERATOR`,`—`,``,`TEST SUBJECTS`,`K-04`,`LYRA`,`ノクト`,`SEVEN`,`……`,``,`THANK YOU FOR PLAYING`],skip:`クリックで進む`,complete:`TUNING COMPLETE`,completeFull:`本番プログラム起動`,completeWeb:`本番プログラムは外部の記録媒体で実行されます`,store:`ストアページへ`,toTitle:`タイトルへ`,codenameTitle:`コードネームを登録してください`,codenameHint:`12文字まで。英数字とカタカナ。あとから変更できます`,codenameOk:`登録`,codenameBad:`使えない文字があるか、長すぎます`,unlocked:`GARAGE UNLOCKED`,unlockedSub:`本番（2周目）を始められます。曲はリミックスになります`},notice:{eyebrow:`Photosensitivity Warning`,title:`光の点滅についての注意`,body:[`このゲームには、点滅する光や、画面が素早く切り替わる表現が含まれます。`,`ごくまれに、強い光の刺激によって、けいれんや意識の喪失などの症状が起きることがあります。これまでにそうした経験がなくても起きる場合があります。`,`遊ぶときは部屋を明るくし、画面から離れてください。疲れているときや体調が悪いときは遊ばないでください。気分が悪くなったら、すぐに遊ぶのをやめてください。`,`「点滅を弱める」をオンにすると、拍の光・画面の揺れ・フラッシュ・被弾のノイズを控えめにします（タイトル画面でも変えられます）。`],reduceFlash:`点滅を弱める`,ok:`OK（Enter）`},calib:{eyebrow:`Calibration`,title:`キャリブレーション`,offerTitle:`はじめに：タイミングを合わせる`,intro:`一定のテンポでクリックが鳴ります。最初の4つは数えるだけ。そのあと、聞こえたクリックに合わせて Space・Z・Enter か画面のタップを16回押してください。光は目安です。音に合わせてください。`,start:`はじめる`,later:`あとで`,cancel:`やめる`,runTitle:`クリックに合わせて押す`,run:`Space・Z・Enter・タップ`,countIn:`{n}`,taps:`{n} / {total}`,resultTitle:`オフセット {sign}{ms} ms`,result:`ばらつき ±{spread} ms（{n} 回から計算）。「適用する」でオフセットに入れます。あとからタイトル画面で変えられます。`,apply:`適用する`,retry:`やり直す`,failTitle:`うまく測れませんでした`,fail:`クリックに合った押し方が {n} 回でした（{min} 回以上いります）。もう一度、音に合わせて押してください。`},result:{eyebrow:`Result`,eyebrowAllClear:`All Stages Complete`,eyebrowClear:`Stage {n} Clear`,eyebrowLost:`Signal Lost`,eyebrowExRecord:`Extra Mode · New Record`,eyebrowExLost:`Extra Mode · Signal Lost`,titleAllClear:`ALL CLEAR`,titleClear:`STAGE CLEAR`,titleOver:`GAME OVER`,stageName:`STAGE {n}  {name}`,exName:`∞ ROUND {round}  ·  BPM {bpm}  ·  {name}`,score:`SCORE`,kills:`撃破`,maxCombo:`MAX COMBO`,perfect:`PERFECT`,graze:`GRAZE`,hits:`被弾`,counter:`COUNTER`,lastHp:`残り HP`,lastReached:`到達地点`,lastBest:`BEST`,reachedSector:`SECTOR 0{n}`,reachedBoss:`SECTOR 07`,reachedStart:`START`,next:`NEXT`,nextStage:`NEXT STAGE`,retry:`RETRY`,playAgain:`PLAY AGAIN`,title:`TITLE`,replay:`REPLAY TRACK`,replayStop:`■ STOP`,note:`Z キーで左のボタン。REPLAY TRACK は直前約30秒の演奏（レイヤーの増減・ロックのフレーズ・PERFECT）を再生する。`},pause:{title:`PAUSE`,note:`Esc で再開`,resume:`再開`,retry:`リトライ`,toStages:`ステージセレクトへ`},touch:{lock:`LOCK`,drop:`DROP`,pause:`II`},a11y:{canvas:`ゲーム画面`},hud:{score:`SCORE`,combo:`COMBO {n}`,comboNext:`→ {layer} {n}`,stage:`STAGE {n}`,exStage:`∞ ROUND {round}  ·  BPM {bpm}`,sector:`SECTOR {n}`,sectorBoss:`SECTOR 07`,clear:`CLEAR`,start:`START`,hp:`HP {n}`,lock:`LOCK {n}/{cap}`,dropQueuedBar:`{kind} ▶ NEXT BAR`,dropQueuedBeat:`{kind} ▶ NEXT BEAT`,dropReady:`C : {kind} READY`,invincible:`無敵モード`,signalNoise:`SIGNAL NOISE`,mixerHead:`HP LAYERS  ·  COMBO LAYERS`,phase1:`PHASE 1`,phase2:`PHASE 2`,call:`CALL`,response:`RESPONSE`,chorus:`CHORUS`,verse:`VERSE`,lockCount:`LOCK {n}`,tagJoin:`{tag}  ·  {phase}`,overheat:`OVERHEAT`},callout:{keyUp:`KEY UP`,keyUpSub:`転調 ／ 攻撃激化`,round:`ROUND {n}`,roundSub:`BPM {bpm}  ／  {name} · {genre}`,stage:`STAGE {n}`,stageSub:`{name}  ／  {genre}`,sector:`SECTOR {n}`,warning:`WARNING`,warningSub:`{boss} 接近`,destroyed:`TARGET DESTROYED`,destroyedExSub:`BPM UP ／ 次のボスへ`,chorus:`CHORUS`,perfect:`PERFECT`,drop:`DROP`,dropSub:`+{n} COMBO`,burst:`BURST`,burstSub:`{n} 弾を消去`,absorb:`ABSORB`,absorbSub:`{n} 弾を吸収`,freeze:`FREEZE`,freezeSub:`{n} 弾が停止`,break:`BREAK`,phase2:`{ph2}  ／  PHASE 2`,preset:`{name}  Lv{lv}`,range:`TEST RANGE`},floater:{soundMinus:`SOUND −{layer}`,soundPlus:`SOUND +{layer}`,layerIn:`+{layer}`,comboBreak:`COMBO BREAK`,echo:`ECHO · {name}`,gaugeNeed:`GAUGE {n} 必要`,dropReady:`{kind} READY`,counter:`COUNTER`,damage:`-{n}`,weaponDown:`{name} Lv{lv}`,heal:`+{n}`,overheat:`OVERHEAT`,crit:`CRITICAL`,laser:`×{n}`,bonus:`{label} ×{n}`,unison:`UNISON`,scaleUp:`SCALE UP`,scaleDown:`SCALE DOWN`,answer:`ANSWER`},tipLabel:{tutorial:`TUTORIAL`,sector:`{sector} / 07`,boss:`SECTOR 07 / 07`,newEnemy:`NEW ENEMY`,newEnemyLine:`このステージから出現する`,newAoe:`NEW AoE`,newAoeLine:`次のステージから道中にも出現する`,bossPattern:`BOSS PATTERN`,damage:`DAMAGE`,range:`TEST RANGE`},tips:{intro:{h:`戦闘訓練`,l:[`全7セクターで基本操作を順に練習する`,`曲の厚みがそのまま状態表示になる`]},shoot:{h:`射撃とコンボ`,l:[`Z 長押しでショット（BGM の8分に同期）`,`連続撃破でコンボ。10 で ARP、30 で LEAD が鳴る`]},lock:{h:`ロックオン`,l:[`X 長押しでロック、離すとレーザー（ゲージ制）`,`拍ちょうどで離すと PERFECT：威力1.5倍・ゲージ回収`,`敵の種類ごとに音程が違う。ロック順がフレーズになる`]},capsule:{h:`武器カプセル`,l:[`白い運搬機を倒すとカプセルが出る`,`撃つと色が変わる（1拍ぶん撃ち当てて L→W→S）。点は色が変わるまでの残り`,`同じ色で強化（Lv3まで）、違う色で武器変更`]},evade:{h:`回避とグレイズ`,l:[`Shift で低速移動。弾にかするとゲージ回収`,`拍ちょうどのグレイズは回収量アップ`]},hp:{h:`HP とサウンド`,l:[`HP が減ると PAD→HAT→SNARE→BASS の順に抜ける`,`最後はキックだけが心音のように残る`]},drill:{h:`ドロップ`,l:[`ゲージが4つ以上あれば C でドロップ`,`次の小節頭で弾を全消去。消した数はコンボに加算`]},boss:{h:`ボス`,l:[`ボスは新しい AoE（予兆攻撃）を使ってくる`,`倒すと次のステージから道中にも出現する`]},damage:{h:`被弾`,l:[`HP が減り、武器 Lv が 1 下がる`,`コンボも途切れて高音側が1小節かけて消える`]},callresp:{h:`コール＆レスポンス`,l:[`ボスが1小節リズムを鳴らしたら、次の小節で同じリズムに当てる`,`合ったタイミングの命中は COUNTER（大ダメージ）`,`並び順が「ロックした順」なら、ボスを含めてコールと同じ数をロックして離すと、同じリズムで撃ち返す（ANSWER）`]}},sectionNames:[`接敵`,`展開`,`交戦`,`激化`,`突破`,`最終防衛線`],aoe:{circle:[`円形`,`円の中が爆発する。数字は残り拍数`],lane:[`直線`,`縦の帯にビームが照射される`],safe:[`安全地帯`,`青い円の外側がすべて爆発する`],row:[`横一文字`,`横の帯にビームが照射される`],chase:[`追尾`,`円が自機を追い、途中で止まってから爆発する`],donut:[`リング`,`輪の部分だけが爆発する。中心か外側へ`],chain:[`連鎖`,`並んだ円が順番に爆発する`],cone:[`扇形`,`発射元から扇状に照射される`],checker:[`市松`,`格子の半分のマスが爆発する`],wall:[`ゲートウォール`,`降りてくる壁の隙間を抜ける`]},aoeLabel:{safe:`SAFE`,gate:`GATE`},enemies:{lancer:`突撃機`,mine:`機雷`,snake:`連節体`,bastion:`砲台`,splitter:`分裂体`},weaponLetters:[`L`,`W`,`S`],songs:{"midi-demo":{name:`MIDI DEMO`,genre:`MIDI → CHART`},"midi-waltz":{name:`MIDI WALTZ`,genre:`MIDI → CHART / 3/4`},"view-vertical":{name:`VIEW TEST: VERTICAL`,genre:`視点テスト / 縦`},"view-horizontal":{name:`VIEW TEST: HORIZONTAL`,genre:`視点テスト / 横`},"view-depth":{name:`VIEW TEST: DEPTH`,genre:`視点テスト / 奥行き`},"view-switch":{name:`VIEW TEST: SWITCH`,genre:`視点テスト / 切り替え`},"view-rail":{name:`VIEW TEST: RAIL`,genre:`視点テスト / 高さのある区間`},"view-rail-switch":{name:`VIEW TEST: RAIL SWITCH`,genre:`視点テスト / 平面と高さの行き来`},training:{name:`戦闘訓練`,genre:`LO-FI HIP HOP`},"neon-drive":{name:`NEON DRIVE`,genre:`SYNTHWAVE`},"velvet-disco":{name:`VELVET DISCO`,genre:`FUNK / DISCO`},"orbit-gate":{name:`ORBIT GATE`,genre:`TECHNO`},"8bit-rush":{name:`8BIT RUSH`,genre:`CHIPTUNE`},"midnight-swing":{name:`MIDNIGHT SWING`,genre:`JAZZ FUSION`},aurora:{name:`AURORA`,genre:`TRANCE`},"gravity-well":{name:`GRAVITY WELL`,genre:`DUBSTEP`},"vesper-core":{name:`VESPER CORE`,genre:`DRUM & BASS`},"requiem-engine":{name:`REQUIEM ENGINE`,genre:`EPIC ORCHESTRAL`}},bosses:{shield:{name:`WARDEN`,sub:`訓練用標的機`,ph2name:`解放形態`},tide:{name:`TIDECALLER`,sub:`潮流制御体`,ph2name:`大潮形態`},disco:{name:`VELVET QUEEN`,sub:`舞踏型制圧機`,ph2name:`ミラーボール形態`},sun:{name:`HELIOS`,sub:`軌道照射塔`,ph2name:`コロナ形態`},pixel:{name:`PIXEL TYRANT`,sub:`8bit 演算核`,ph2name:`バグ形態`},orrery:{name:`ORRERY`,sub:`天球儀型兵装`,ph2name:`天球解放`},chorus:{name:`CHORUS`,sub:`共鳴体群`,ph2name:`大合唱`},gravity:{name:`GRAVITON`,sub:`重力井戸`,ph2name:`特異点`},lattice:{name:`LATTICE`,sub:`格子演算体`,ph2name:`展開格子`},vesper:{name:`VESPER-9`,sub:`軌道防衛核`,ph2name:`終局形態`}},chartError:{head:`譜面データ {file} に {n} 件の問題があります`,notObject:`オブジェクト（{ }）である必要があります`,notArray:`配列（[ ]）である必要があります`,notNumber:`数値である必要があります`,notInteger:`整数である必要があります`,notString:`空でない文字列である必要があります`,range:`{min} 〜 {max} の範囲で指定してください（今は {v}）`,oneOf:`"{v}" は使えません。使えるのは {list}`,tooShort:`{n} 個以上必要です`,missing:`指定がありません`,unknownKey:`知らない項目です。使えるのは {list}`,unknownLayer:`知らない層です。層は {list}`,format:`形式が "{v}" です。"{ok}" である必要があります`,version:`バージョン {v} は読めません（このゲームが読めるのは {ok}）`,meter:`拍子は [拍数, 4] か [拍数, 8] で、1小節が 6〜32 ステップ（16分音符）になるように書いてください（例：[3, 4]、[6, 8]、[7, 8]）`,scaleLen:`音階は 16 音必要です（今は {n} 音）`,rootsLen:`根音の数（{n}）がコードの数（{chords}）と合っていません`,patternLen:`パターンは1小節ぶんの {bar} 文字必要です（今は {n} 文字）`,patternChars:`パターンに使えない文字 "{chars}" があります（使えるのは "{ok}"）`,noteShape:`ノートは [開始ステップ, ノート番号, 長さ] の3つの数で書いてください`,bassWays:`notes と pattern / walk は同時に書けません`,bassNone:`pattern、walk、notes のどれかが必要です`,arpWays:`seq と notes のどちらか一方を書いてください`,firstIntro:`最初のセクションは intro にしてください`,lastBoss:`最後のセクションは boss にしてください`,warnBeforeBoss:`warn は boss の直前に1つだけ置いてください`,warnBars:`warn は 3 小節に固定です`,color:`色は #rrggbb の形で書いてください`,bossAoeMissing:`ボスの代表の AoE "{v}" が bossAoePool に入っていません`,noVariant:`パターンの切り替え "{v}" が variants にありません`,remixBpmBoth:`bpmScale と bpm は同時に書けません`},range:{title:`TEST RANGE`,dps:`DPS（直近2秒）`,armor:`対装甲（装甲の敵に通った割合）`,heat:`熱量`,voices:`ボイス`,exit:`Esc でガレージへ戻る（撃たれない・ボスは出ない）`},garage:{_note11_5:`Phase 11.5：中央のプレビュー（機体・試聴・得意不得意）と、保存した構成との差`,listen:`▶ 試聴（くり返し）`,listenStop:`■ 試聴を止める`,dragHint:`部品を変えると1小節鳴る。機体はドラッグで回せる（ダブルクリックで戻る）`,hp:`HP`,move:`移動の速さ`,diffNote:`▲▼ は保存してある構成との差。レーダーの点線も保存してある構成`,strong:`得意`,weak:`苦手`,sceneNone:`とくになし（平均的）`,axes:{power:`火力`,sustain:`持続`,reach:`範囲`,armor:`対装甲`,lock:`ロック`,tough:`耐久`,move:`機動`},scene:{power:`ボスを早く倒す`,sustain:`撃ち続ける長い区間`,reach:`雑魚が広く散らばる場面`,armor:`装甲の厚い敵`,lock:`敵がまとまって出る場面（ロックで一掃）`,tough:`弾の多い場面を耐える`,move:`大きくよける場面`},eyebrow:`GARAGE  ／  機体の構成`,title:`GARAGE`,save:`保存`,savedBtn:`保存済み`,saved:`保存しました。2周目（本番）はこの構成で出撃します。`,range:`試射場`,back:`戻る`,core:`コア`,coreSub:`HP {layers}層 ・ ボイス {voices}`,cores:{LIGHT:`LIGHT：HP の層 3（PAD なし）・ボイス上限 12・移動が速く、当たり判定が小さい`,STANDARD:`STANDARD：HP の層 4・ボイス上限 16・標準`,HEAVY:`HEAVY：HP の層 5（PAD が2段）・ボイス上限 20・移動が遅く、当たり判定が大きい`},heart:`心音`,hearts:{PULSE:`PULSE（標準）`,DEEP:`DEEP（低く長い）`,GLASS:`GLASS（硬い倍音）`},color:`色`,shot:`ショット`,timbreSub:`ボイス {v}`,timbres:{PLUCK:`PLUCK：速い小弾が直進する。発熱が低い`,SQUARE:`SQUARE：大きな弾が直進する。当てやすい`,SAW:`SAW：2発に分かれて少し広がる（0.6 × 2）。装甲に弱い`,SUPERSAW:`SUPERSAW：5方向に広く撃つ（0.3 × 5）。群れに強く、装甲に弱い。発熱が高い`,BRASS:`BRASS：遅い弾が敵を貫通する（1.2）。装甲を半分無視する`,BELL:`BELL：当たった半拍後に余韻のダメージ（0.7 + 余韻）。発熱が低い`,WOBBLE:`WOBBLE：拍に合わせてうねり、広い範囲に当たる（0.9）`,RHODES:`RHODES：射程が短く、近いほど強い（近距離 1.5）。装甲に強い`},stepHelp:`マスを押すたびに 休み → 通常（•）→ アクセント（>）。アクセントは2ノート分で、威力 1.8 倍。ノートは 2〜16。`,stepAria:`{n} 番目のマス：{v}`,stepKind:{0:`休み`,1:`通常`,2:`アクセント`},patterns:{all:`xxxxxxxxxxxxxxxx`,eighth:`x.x.x.x.x.x.x.x.`,quarter:`X...X...X...X...`,offbeat:`..x...x...x...x.`,clave:`X..x..X...x.X...`},patternNames:{all:`16分`,eighth:`8分`,quarter:`4分（強）`,offbeat:`裏拍`,clave:`クラーベ`},lock:`ロック（アルペジエーター）`,lockMax:`最大数`,lockOrder:`並び順`,lockRate:`細かさ`,lockLen:`長さ`,lockOct:`オクターブ`,orders:{ASC:`上昇`,DESC:`下降`,ORDER:`ロック順`,RANDOM:`ランダム`,PINGPONG:`往復`},orderHelp:{ASC:`上昇：音程の低い順に当てる。3つ以上でスケールボーナス`,DESC:`下降：音程の高い順に当てる。3つ以上でスケールボーナス`,ORDER:`ロック順：ロックした順に当てる（コール＆レスポンスのボーナスの対象。ボーナスは後のフェーズで）`,RANDOM:`ランダム：順番を入れ替える。1発ごとに 25% でクリティカル（2倍）`,PINGPONG:`往復：最後にロックした敵へもう一度当てる`},rates:{8:`8分`,16:`16分`,T:`3連符`},lens:{S:`短`,M:`中`,L:`長（貫通）`},drop:`ドロップ`,dropSub:`ボイス {v}`,drops:{CLEAR:`CLEAR：次の小節の頭で画面の弾をすべて消し、消した数をコンボに足す（ゲージ 4）`,BURST:`BURST：次の拍で自機の周りの弾を消す（ゲージ 1）`,ABSORB:`ABSORB：次の拍で周りの弾を吸い込み、ロックのゲージに変える（ゲージ 2）`,FREEZE:`FREEZE：次の小節の頭から1小節、すべての弾が止まる（ゲージ 2）`},tuneTitle:`調律`,tuneNeutral:`中央`,tune:{dyn:{name:`強弱`,l:`ff`,r:`pp`,ld:`フォルテ {n}：威力・発熱・当たり判定が大きい`,rd:`ピアノ {n}：当たり判定が小さく、威力も小さい`},tempo:{name:`速さ`,l:`Presto`,r:`Largo`,ld:`プレスト {n}：移動が速い（低速移動も速い）`,rd:`ラルゴ {n}：移動が遅く、ロックできる範囲が広い`},art:{name:`奏法`,l:`stacc. ･`,r:`⌒ legato`,ld:`スタッカート {n}：弾が速く射程が短い。発熱が低い`,rd:`レガート {n}：余韻が長く発熱が高い。2 以上で弾が1体貫通`},expr:{name:`表情`,l:`a tempo`,r:`rubato`,ld:`テンポ・ジュスト {n}：PERFECT の幅が狭く、倍率が高い`,rd:`ルバート {n}：PERFECT の幅が広く、倍率が低い`}},presets:`プリセット`,presetHelp:`LINE / WIDE / SEEK は1周目と同じ構成。押すと今の構成を置き換える（保存するまで反映されない）。`,voices:`ボイス {n} / {cap}`,voiceSplit:`ショット {shot} ・ ロック {lock} ・ ドロップ {drop}`,notes:`ノート`,notesVal:`{n} / {max}（アクセント {acc}）`,notePower:`1発の威力`,notePowerVal:`通常 {n} ・ アクセント {acc}`,capped:`（上限）`,bpm:`曲`,stageOpt:`{n}. {name}（BPM {bpm}）`,heat:`熱量`,heatSafe:`撃ち続けても過熱しない`,heatSec:`撃ち続けると {s} 秒で過熱`,dps:`DPS`,dpsVal:`{dps}（過熱しなければ {peak}）`,armorEff:`対装甲（装甲 3）`,lockDmg:`ロック`,lockDmgVal:`{max} ロックで {n}`,problem:{voices:`ボイスが上限を超えている（コアを替えるか、部品を軽くする）`,notesLow:`ノートが少なすぎる（2 以上）`,notesHigh:`ノートが多すぎる（16 まで。アクセントは2ノート分）`,steps:`マスの数が 16 ではない`,tune:`調律の値が範囲の外`,locked:`まだ手に入れていない部品を使っている`},estimate:`見積もり（全弾が当たったとき）`,code:`構成コード`,shareUrl:`URL をコピー`,urlCopied:`同じ構成で遊べる URL をコピーした`,copy:`コピー`,copied:`コピーしました`,load:`読み込む`,codeLoaded:`読み込みました（保存するまで反映されない）`,codeInvalid:`制約に違反しているので読み込めません：{why}`,code_format:`構成コードの形式が違います`,code_version:`この版では読めない構成コードです`,tabs:{base:`基本`,shot:`ショット`,lock:`ロック`,tune:`調律`},codeLocked:`まだ手に入れていない部品がある（{parts}）。試射場でだけ試せる（保存はできない）`,locked:`未入手`,lockedFrom:`未入手：{boss}`,tuneLocked:`未解禁（2周目のステージを {n} 個クリアで解禁）`},parts:{order:`並び順：{v}`,rate:`細かさ：{v}`,len:`長さ：{v}`,lockMax:`ロック最大 {v}`,oct:`オクターブ {v}`,heart:`心音 {v}`},studio:{eyebrow:`STUDIO  ／  合成と記録`,title:`STUDIO`,help:`2周目でボスを倒すと、部品が落ちるか、そのボスのサンプルがもらえる。持っている部品が落ちたらサンプル {dup} 個になる。サンプル {cost} 個（足りない分は汎用サンプル）で、そのボスの部品を確定で合成できる。`,generic:`汎用サンプル（チャレンジでもらえる）`,samples:`サンプル {n}`,unknown:`？？？`,sealed:`（記録は封じられている）`,synth:`合成（サンプル {boss}・汎用 {generic}）`,synthNeed:`合成にはサンプル {n} 個`,made:`{part} を合成した`,starting:`最初から持っている部品`,tabs:{synth:`合成`,archive:`説明文`,challenge:`チャレンジ`,rules:`ルールと数値`},partsOwned:`部品 {n}/{m}`,stageOf:`STAGE {n}  {song}`,progress:`サンプル {n} / {cost}`,from:`{boss}（STAGE {n}）`,fromStart:`最初から`,group:`{kind}  {n}/{m}`,reveal:`開発用：まだ手に入れていない部品の説明文も表示する`,cleared:`2周目クリア済み`,notCleared:`未クリア`,challengeHelp:`2周目でクリアしたときに判定する。はじめて達成したチャレンジ1つにつき汎用サンプル {n} 個。無敵モードでは数えない。`,rules:{where:`もらえるとき`,drop:`部品が落ちる確率`,samples:`落ちなかったときのサンプル`,dup:`持っている部品が落ちたときのサンプル`,synth:`合成に使うサンプル`,challenge:`チャレンジ1つ（初回だけ）の汎用サンプル`,tune:`調律の軸の解禁（2周目でクリアしたステージの数）`},rulesVal:{where:`2周目でボスを倒したとき（1周目・EXTRA・試射場では何も出ない）`,pct:`{p}%`,range:`{min}〜{max} 個`,n:`{n} 個`,tune:`{axis} {n}`},rulesNote:`数値はすべて仮。data/balance.ts の UNLOCK を変えると、ここにもそのまま出る。`,kinds:{timbre:`音色`,core:`コア`,heart:`心音`,lockMax:`ロック`,order:`ロック`,rate:`ロック`,len:`ロック`,oct:`ロック`,drop:`ドロップ`}},reward:{drop:`DROP  ・  {part}  NEW`,dup:`DROP  ・  {part}（所持済み → {boss} のサンプル +{n}）`,samples:`{boss} のサンプル +{n}（計 {total}）`,axis:`調律の軸を解禁：{axis}`,ch:{perfect:`PERFECT {n} 回`,nomiss:`被弾なし`,combo:`最大コンボ {n}`},chNow:`CHALLENGE  {ch}  達成（汎用サンプル +{n}）`,chDone:`CHALLENGE  {ch}  ✓`,chTodo:`CHALLENGE  {ch}`,assist:`無敵モードのため、チャレンジは数えない`},flavor:{_note:`仮の説明文（Shino さんが書き換える前提）。先代の記憶の断片。説明はしない`,"timbre:PLUCK":`最初に配られる弦。誰の指の形にも馴染むよう、癖を削ってある。`,"timbre:SUPERSAW":`七つの声を重ねて一つに聞かせる。重ねた声の数を、誰も数えなかった。`,"timbre:WOBBLE":`拍の上で揺れる。揺れているのは音か、聴いている側か。`,"timbre:RHODES":`雨の日の部屋でだけ鳴らしていた。近くにいる人にしか届かない音。`,"timbre:SAW":`潮が引くたび、波形は二つに割れた。片方は戻ってこなかった。`,"timbre:BRASS":`フロアの全員に届くよう、壁ごと押し出す音。彼女は一度も客席を見なかった。`,"timbre:SQUARE":`八ビットの解像度で世界を覚えていた。覚えきれない色は、黒にした。`,"timbre:BELL":`空の色が変わるたびに、ひとつ鳴らした。最後の音の余韻は、まだ消えていない。`,"core:STANDARD":`標準の器。四つの層を抱えられる。それ以上は、規格が許さない。`,"core:HEAVY":`重い器は、落ちる速さも重い。引き寄せられたのは、彼が先だった。`,"core:LIGHT":`格子の隙間を抜けるために、層を一枚捨てた。何を捨てたかは記録にない。`,"heart:PULSE":`最後に残る音。誰から借りたものでもない。`,"heart:DEEP":`訓練の標的は、撃たれるたびに少しだけ低い声で鳴いた。`,"heart:GLASS":`合唱の中に、ひとつだけ硬い声があった。割れる寸前の。`,"lockMax:4":`太陽を見るときは、四つまで。それ以上は目が焼ける。`,"lockMax:6":`六つの名前までなら、覚えていられる。`,"lockMax:8":`八つ。両手の指から、親指を除いた数。`,"lockMax:12":`十二。一オクターブに収まる音の数。それより多くは、同じ名前で呼び直すことになる。`,"order:ASC":`低いほうから順に。教わった通りの並べ方。`,"order:ORDER":`見つけた順に返す。呼ばれた順に、応える。`,"order:DESC":`満ちた潮は、高いところから引いていく。`,"order:RANDOM":`太陽の黒点は、予報を嫌った。`,"order:PINGPONG":`軌道は必ず戻ってくる。戻ってきたとき、同じ星だとは限らない。`,"rate:8":`歩く速さ。`,"rate:16":`走る速さ。`,"rate:T":`三つで一つ。彼女のステップは、いつも割り切れなかった。`,"len:S":`短く切る。`,"len:M":`少し残す。`,"len:L":`重力に引かれて、線は伸びる。途中にあるものも巻き込んで。`,"oct:1":`一つの高さで。`,"oct:2":`同じ旋律を、一段上でもう一度。子どもの声で。`,"drop:CLEAR":`一小節ぶんの静寂を借りる。返すあてはない。`,"drop:BURST":`身のまわりだけを、一拍だけ黙らせる。`,"drop:ABSORB":`飛んでくる音を、自分の中にしまう。しまった音は、もう相手のものではない。`,"drop:FREEZE":`すべてが止まる一小節。夕べの鐘のあと、彼はそれを「祈り」と呼んだ。`},share:{button:`SHARE`,eyebrow:`SHARE  ／  共有カード`,send:`共有する`,save:`画像を保存`,copyUrl:`URL をコピー`,close:`閉じる`,help:`スコアと構成の画像と、同じ構成で遊べる URL を共有する。PC では画像を保存して、X の投稿画面を開く。`,done:{shared:`共有した`,posted:`画像を保存して、投稿画面を開いた`,saved:`画像を保存した`,copied:`URL をコピーした`,cancel:`共有をやめた`,failed:`共有できなかった`},brand:`PULSE VECTOR`,hashtag:`PulseVector`,noName:`UNREGISTERED`,round1:`SIM`,round2:`MAIN`,stage:`STAGE {n}  {name}`,extra:`∞ EXTRA  {name}`,clear:`CLEAR`,over:`GAME OVER`,score:`SCORE`,perfect:`PERFECT`,combo:`MAX COMBO`,pattern:`SHOT  ·  {timbre}`,core:`CORE`,lock:`LOCK`,drop:`DROP`,tune:`TUNE`,lockVal:`{max} · {order} · {rate}`,code:`BUILD CODE`,sig:`CHECK {sig}`,post:`{name}  {stage}  SCORE {score}`,fileName:`pulse-vector-{stage}-{score}.png`},launch:{loaded:`共有された構成を読み込んだ。保存すると、この構成で遊べる。`,locked:`共有された構成には、まだ手に入れていない部品がある（{parts}）。試射場でだけ試せる（保存はできない）。`,notTuned:`共有された構成は、1周目をクリアするとガレージで使える。`,webOnly:`共有された構成は、本番プログラム（ガレージのある版）で読み込める。`,invalid:`共有された構成コードを読めなかった。`},settings:{eyebrow:`SETTINGS  ／  設定`,title:`SETTINGS`,tabs:{general:`一般`,sound:`音`,display:`表示`,controls:`操作`},volume:{bgm:`BGM`,sfx:`効果音`,shot:`自分のショット音`},volumeNote:`曲の厚み（楽器の層）は体力とコンボを表すので、BGM を小さくしすぎると状態が聞き取りにくくなる。`,iosNote:`iPhone・iPad：マナーモード（消音）だと音が出ないことがある。音が出ないときは消音を切って、画面をタップする。`,colors:`自機と敵の色`,colorNames:{standard:`標準`,blueYellow:`青と黄`,contrast:`白と赤`},colorSub:{standard:`水色とピンク`,blueYellow:`赤と緑が見分けにくい場合に`,contrast:`明るさの差で見分ける`},quality:`品質`,qualityNames:{auto:`自動`,high:`高`,mid:`中`,low:`低`},qualityLevels:[`高`,`中`,`低`],qualityNow:`今の品質：{level}`,qualityNote:`自動は、プレイ中に重くなったら解像度とパーティクルの数を下げる（弾の数や判定は変わらない）。`,keyboard:`キーボード`,gamepad:`ゲームパッド`,actions:{up:`上`,down:`下`,left:`左`,right:`右`,slow:`低速移動`,fire:`ショット`,lock:`ロック`,drop:`ドロップ`,pause:`ポーズ`,talk:`通信を送る`},pressKey:`キーを押す…`,pressButton:`ボタンを押す…`,controlsHelp:`変えたい欄を押してから、割り当てるキーかボタンを押す（Esc でやめる）。ほかの操作で使っていたキーは、そちらから外れる。ゲームパッドは左スティックでも移動できる。メニューは十字キーで選び、A で決定、B で戻る。`,touchHelp:`タッチ：ドラッグで移動（触れている間は自動でショット）。2本目の指を置いている間は低速移動。右下の LOCK・DROP、右上の II（ポーズ）。`,resetControls:`操作を元に戻す`}};function Xt(e,t=Yt){let n=t;for(let t of e.split(`.`)){if(typeof n!=`object`||!n)return;n=n[t]}return n}function Zt(e,t){return t?e.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e):e}function U(e,t){let n=Xt(e);return typeof n==`string`?Zt(n,t):e}function Qt(e){let t=Xt(e);if(t===void 0)throw Error(`text: missing key "${e}"`);return t}var $t=`pulse-vector-chart`,en={1:e=>({...e,version:2})};function tn(e){if(typeof e!=`object`||!e||Array.isArray(e))return e;let t=e;for(;typeof t.version==`number`&&t.version<2&&en[t.version];)t=en[t.version](t);return t}var nn=[`KICK`,`BASS`,`SNARE`,`HAT`,`PAD`,`ARP`,`LEAD`],rn=[`KICK`,`SNARE`,`HAT`,`BASS`,`ARP`,`LEAD`],an=[`vertical`,`horizontal`,`depth`,`rail`],on=[`ring`,`ring2`,`aimed`,`spiral`,`fan`,`wave`,`rain`,`burst`],sn=[`drone`,`cluster`,`spinner`,`carrier`,`lancer`,`mine`,`snake`,`bastion`,`splitter`],cn=[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`,`checker`,`wall`],ln=[`shield`,`tide`,`disco`,`sun`,`pixel`,`orrery`,`chorus`,`gravity`,`lattice`,`vesper`],un={kick:[`soft`,`chip`,`boom`,`punch`],snare:[`clap`,`gated`,`chip`,`rim`,`lofi`,`big`,`std`],hat:[`soft`,`chip`,`ride`,`std`],bass:[`reese`,`acid`,`sub`,`pulse`,`chip`,`slap`,`walk`,`wobble`,`saw`],pad:[`rhodes`,`organ`,`strings`,`saw`],arp:[`bell`,`pluck`,`chip`,`square`],lead:[`chip`,`brass`,`rhodes`,`reed`,`supersaw`,`sqsaw`],stab:[`brass`,`rhodes`,`square`]},dn=class extends Error{file;problems;constructor(e,t){super(U(`chartError.head`,{file:e,n:t.length})+`
`+t.map(e=>`  - `+e).join(`
`)),this.file=e,this.problems=t,this.name=`ChartError`}};function fn(e){let t=[],n=(e,n,r={})=>t.push(`${e}: ${U(`chartError.${n}`,r)}`),r=e=>typeof e==`object`&&!!e&&!Array.isArray(e),i=(e,t)=>r(e)?e:(n(t,`notObject`),null),a=(e,t,r=-1/0,i=1/0,a=!1)=>typeof e!=`number`||!Number.isFinite(e)?(n(t,`notNumber`),!1):a&&!Number.isInteger(e)?(n(t,`notInteger`),!1):e<r||e>i?(n(t,`range`,{min:r,max:i,v:e}),!1):!0,o=(e,t)=>typeof e==`string`&&e.length>0||(n(t,`notString`),!1),s=(e,t,r)=>{o(e,r)&&!t.includes(e)&&n(r,`oneOf`,{v:e,list:t.join(` / `)})},c=(e,t,r=0)=>Array.isArray(e)?e.length<r?(n(t,`tooShort`,{n:r}),!1):!0:(n(t,`notArray`),!1),l=(e,t)=>a(e,t,0,127,!0),u=16,d=(e,t,r)=>{if(!o(e,t))return;e.length!==u&&n(t,`patternLen`,{n:e.length,bar:u});let i=[...e].filter(e=>!r.includes(e));i.length&&n(t,`patternChars`,{chars:[...new Set(i)].join(``),ok:r})},f=(e,t,r)=>{c(e,t)&&e.forEach((e,i)=>{let o=`${t}[${i}]`;if(!Array.isArray(e)||e.length!==3)return n(o,`noteShape`);a(e[0],`${o}[0]`,0,r*u-1,!0),l(e[1],`${o}[1]`),a(e[2],`${o}[2]`,.25,64)})},p=i(e,`(root)`);if(!p)return t;p.format!==`pulse-vector-chart`&&n(`format`,`format`,{v:String(p.format),ok:$t}),p.version!==2&&n(`version`,`version`,{v:String(p.version),ok:2}),o(p.id,`id`);let m=i(p.meta,`meta`);if(m){a(m.bpm,`meta.bpm`,40,400),we(m.meter)?u=P(m.meter).bar:n(`meta.meter`,`meter`);let e=i(m.key,`meta.key`);e&&(l(e.tonic,`meta.key.tonic`),o(e.name,`meta.key.name`)),m.swing!==void 0&&a(m.swing,`meta.swing`,0,.9),m.swingUnit!==void 0&&a(m.swingUnit,`meta.swingUnit`,1,4,!0)}c(p.scale,`scale`,16)&&(p.scale.length!==16&&n(`scale`,`scaleLen`,{n:p.scale.length}),p.scale.forEach((e,t)=>l(e,`scale[${t}]`)));let h=i(p.harmony,`harmony`),g=0;h&&(c(h.chords,`harmony.chords`,1)&&(g=h.chords.length,h.chords.forEach((e,t)=>{c(e,`harmony.chords[${t}]`,1)&&e.forEach((e,n)=>l(e,`harmony.chords[${t}][${n}]`))})),c(h.roots,`harmony.roots`,1)&&(g&&h.roots.length!==g&&n(`harmony.roots`,`rootsLen`,{n:h.roots.length,chords:g}),h.roots.forEach((e,t)=>l(e,`harmony.roots[${t}]`))),a(h.bossTranspose,`harmony.bossTranspose`,-12,12,!0));let _=i(p.sounds,`sounds`);if(_){let e=i(_.kit,`sounds.kit`);if(e)for(let t of[`kick`,`snare`,`hat`])s(e[t],un[t],`sounds.kit.${t}`);for(let e of[`bass`,`pad`,`arp`,`lead`,`stab`])s(_[e],un[e],`sounds.${e}`)}let v=(e,t)=>{for(let r of Object.keys(e))nn.includes(r)||n(`${t}.${r}`,`unknownLayer`,{list:nn.join(`, `)});let r=i(e.KICK,`${t}.KICK`);r&&(d(r.pattern,`${t}.KICK.pattern`,`.x`),r.perc!==void 0&&d(r.perc,`${t}.KICK.perc`,`.x`));let o=i(e.SNARE,`${t}.SNARE`);o&&d(o.pattern,`${t}.SNARE.pattern`,`.xg`);let s=i(e.HAT,`${t}.HAT`);s&&(d(s.pattern,`${t}.HAT.pattern`,`.xX`),d(s.dense,`${t}.HAT.dense`,`.x`));let l=i(e.BASS,`${t}.BASS`);if(l){a(l.maxLen,`${t}.BASS.maxLen`,.25,16);let e=[l.pattern!==void 0,l.walk===!0,l.notes!==void 0].filter(Boolean).length;l.notes!==void 0&&(l.pattern!==void 0||l.walk)&&n(`${t}.BASS`,`bassWays`),e||n(`${t}.BASS`,`bassNone`),l.pattern!==void 0&&d(l.pattern,`${t}.BASS.pattern`,`.xo`),l.bossPattern!==void 0&&d(l.bossPattern,`${t}.BASS.bossPattern`,`.xo`),l.pattern!==void 0&&l.bossPattern===void 0&&!l.walk&&n(`${t}.BASS.bossPattern`,`missing`),l.notes!==void 0&&a(l.loopBars,`${t}.BASS.loopBars`,1,64,!0)&&f(l.notes,`${t}.BASS.notes`,l.loopBars)}i(e.PAD,`${t}.PAD`);let p=i(e.ARP,`${t}.ARP`);if(p){a(p.octave,`${t}.ARP.octave`,-24,36,!0),p.seq===void 0==(p.notes===void 0)&&n(`${t}.ARP`,`arpWays`),p.seq!==void 0&&c(p.seq,`${t}.ARP.seq`,1)&&p.seq.forEach((e,n)=>a(e,`${t}.ARP.seq[${n}]`,0,15,!0)),p.every!==void 0&&a(p.every,`${t}.ARP.every`,1,16,!0),p.notes!==void 0&&a(p.loopBars,`${t}.ARP.loopBars`,1,64,!0)&&f(p.notes,`${t}.ARP.notes`,p.loopBars);let e=i(p.stab,`${t}.ARP.stab`);if(e)for(let n of[`chorus`,`phase2`])c(e[n],`${t}.ARP.stab.${n}`)&&e[n].forEach((e,r)=>a(e,`${t}.ARP.stab.${n}[${r}]`,0,u-1,!0))}let m=i(e.LEAD,`${t}.LEAD`);m&&a(m.loopBars,`${t}.LEAD.loopBars`,1,64,!0)&&f(m.notes,`${t}.LEAD.notes`,m.loopBars)},y=i(p.layers,`layers`);y&&v(y,`layers`);let b=new Set;if(p.variants!==void 0){let e=i(p.variants,`variants`);if(e&&y)for(let[t,r]of Object.entries(e)){b.add(t);let e=i(r,`variants.${t}`);if(!e)continue;let a={...y};for(let[r,o]of Object.entries(e))rn.includes(r)?i(o,`variants.${t}.${r}`)&&(a[r]=hn(y[r],o)):n(`variants.${t}.${r}`,`unknownLayer`,{list:rn.join(`, `)});v(a,`variants.${t}`)}}if(c(p.structure,`structure`,1)){let e=p.structure.map(e=>r(e)?e.type:null);e[0]!==`intro`&&n(`structure[0]`,`firstIntro`),e[e.length-1]!==`boss`&&n(`structure[${e.length-1}]`,`lastBoss`),(e.filter(e=>e===`warn`).length!==1||e[e.length-2]!==`warn`)&&n(`structure`,`warnBeforeBoss`),p.structure.forEach((e,t)=>{let r=`structure[${t}]`,l=i(e,r);if(l)switch(l.view!==void 0&&s(l.view,an,`${r}.view`),l.variant!==void 0&&o(l.variant,`${r}.variant`)&&!b.has(l.variant)&&n(`${r}.variant`,`noVariant`,{v:l.variant}),l.type){case`intro`:a(l.bars,`${r}.bars`,1,16,!0);break;case`warn`:l.bars!==3&&n(`${r}.bars`,`warnBars`);break;case`sector`:{a(l.bars,`${r}.bars`,1,64,!0),a(l.energy,`${r}.energy`,1,3,!0);let e=i(l.spawn,`${r}.spawn`);if(!e)break;c(e.mix,`${r}.spawn.mix`,1)&&e.mix.forEach((e,t)=>s(e,sn,`${r}.spawn.mix[${t}]`)),s(e.sub,sn,`${r}.spawn.sub`),e.carrier!==void 0&&c(e.carrier,`${r}.spawn.carrier`)&&e.carrier.forEach((e,t)=>a(e,`${r}.spawn.carrier[${t}]`,0,(typeof l.bars==`number`?l.bars:64)-1,!0)),e.aoe!==void 0&&a(e.aoe,`${r}.spawn.aoe`,0,2,!0),e.obstacle!==void 0&&a(e.obstacle,`${r}.spawn.obstacle`,0,2,!0),e.tutorial!==void 0&&o(e.tutorial,`${r}.spawn.tutorial`);break}case`boss`:c(l.parts,`${r}.parts`,1)&&l.parts.forEach((e,t)=>s(e,[`verse`,`chorus`],`${r}.parts[${t}]`));break;default:n(`${r}.type`,`oneOf`,{v:String(l.type),list:`intro / sector / warn / boss`})}})}let x=i(p.stage,`stage`);x&&(a(x.level,`stage.level`,0,9,!0),a(x.density,`stage.density`,.1,5),a(x.bulletSpeed,`stage.bulletSpeed`,.1,5),o(x.floor,`stage.floor`),o(x.bg,`stage.bg`)&&!/^#[0-9a-fA-F]{6}$/.test(x.bg)&&n(`stage.bg`,`color`),x.newEnemy!=null&&s(x.newEnemy,sn,`stage.newEnemy`),c(x.aoePool,`stage.aoePool`)&&x.aoePool.forEach((e,t)=>s(e,cn,`stage.aoePool[${t}]`)),s(x.bossAoe,cn,`stage.bossAoe`),c(x.bossAoePool,`stage.bossAoePool`,1)&&(x.bossAoePool.forEach((e,t)=>s(e,cn,`stage.bossAoePool[${t}]`)),typeof x.bossAoe==`string`&&!x.bossAoePool.includes(x.bossAoe)&&n(`stage.bossAoePool`,`bossAoeMissing`,{v:x.bossAoe})),s(x.view,an,`stage.view`));let S=i(p.boss,`boss`);if(S){o(S.id,`boss.id`),a(S.hp,`boss.hp`,1,1e5),o(S.drop,`boss.drop`),s(S.look,ln,`boss.look`),a(S.sides,`boss.sides`,3,12,!0),o(S.inner,`boss.inner`),o(S.col2,`boss.col2`);let e=i(S.attacks,`boss.attacks`);e&&(c(e.base,`boss.attacks.base`,1)&&e.base.forEach((e,t)=>s(e,on,`boss.attacks.base[${t}]`)),c(e.extra,`boss.attacks.extra`)&&e.extra.forEach((e,t)=>s(e,on,`boss.attacks.extra[${t}]`)),s(e.summon,sn,`boss.attacks.summon`)),S.fill!==void 0&&a(S.fill,`boss.fill`,1,16,!0),S.fillStyle!==void 0&&s(S.fillStyle,[`arp`,`zig`],`boss.fillStyle`),S.callResp!==void 0&&s(S.callResp,[`always`,`ph2`],`boss.callResp`)}if(p.remix!==void 0){let e=p.remix?.meter;t.push(...pn(p.remix,`remix`,we(e)?P(e).bar:u))}return t}function pn(e,t,n=16){let r=[],i=(e,t,n={})=>r.push(`${e}: ${U(`chartError.${t}`,n)}`);if(typeof e!=`object`||!e||Array.isArray(e))return i(t,`notObject`),r;let a=e,o=[`bpmScale`,`bpm`,`transpose`,`sounds`,`patterns`,`swing`,`meter`,`bossParts`,`variants`,`sectionVariants`];for(let e of Object.keys(a))o.includes(e)||i(`${t}.${e}`,`unknownKey`,{list:o.join(`, `)});a.bpmScale!==void 0&&a.bpm!==void 0&&i(t,`remixBpmBoth`);let s=(e,t,n,r)=>{typeof e!=`number`||!Number.isFinite(e)?i(t,`notNumber`):(e<n||e>r)&&i(t,`range`,{min:n,max:r,v:e})};a.bpmScale!==void 0&&s(a.bpmScale,`${t}.bpmScale`,.5,2),a.bpm!==void 0&&s(a.bpm,`${t}.bpm`,40,400),a.transpose!==void 0&&s(a.transpose,`${t}.transpose`,-12,12),a.swing!==void 0&&s(a.swing,`${t}.swing`,0,.9),a.meter!==void 0&&!we(a.meter)&&i(`${t}.meter`,`meter`),a.bossParts!==void 0&&(!Array.isArray(a.bossParts)||!a.bossParts.length?i(`${t}.bossParts`,`tooShort`,{n:1}):a.bossParts.forEach((e,n)=>e===`verse`||e===`chorus`?0:i(`${t}.bossParts[${n}]`,`oneOf`,{v:String(e),list:`verse / chorus`})));for(let e of[`variants`,`sectionVariants`])a[e]!==void 0&&(typeof a[e]!=`object`||a[e]===null||Array.isArray(a[e]))&&i(`${t}.${e}`,`notObject`);if(a.sounds!==void 0){let e=a.sounds;for(let n of Object.keys(e)){if(n===`kit`){for(let n of Object.keys(e.kit)){let r=un[n],a=e.kit[n];r?typeof a==`string`&&r.includes(a)||i(`${t}.sounds.kit.${n}`,`oneOf`,{v:String(a),list:r.join(` / `)}):i(`${t}.sounds.kit.${n}`,`unknownKey`,{list:`kick, snare, hat`})}continue}let r=un[n];!r||n===`kick`||n===`snare`||n===`hat`?i(`${t}.sounds.${n}`,`unknownKey`,{list:`kit, bass, pad, arp, lead, stab`}):typeof e[n]==`string`&&r.includes(e[n])||i(`${t}.sounds.${n}`,`oneOf`,{v:String(e[n]),list:r.join(` / `)})}}if(a.patterns!==void 0){let e={KICK:`.x`,SNARE:`.xg`,HAT:`.xX`,BASS:`.xo`};for(let[r,o]of Object.entries(a.patterns))e[r]?(typeof o!=`string`||o.length!==n||[...o].some(t=>!e[r].includes(t)))&&i(`${t}.patterns.${r}`,`patternChars`,{chars:String(o),ok:e[r]}):i(`${t}.patterns.${r}`,`unknownKey`,{list:Object.keys(e).join(`, `)})}return r}function mn(e,t){let n=tn(e),r=fn(n);if(r.length)throw new dn(t,r);return n}function hn(e,t){let n={...e};for(let[e,r]of Object.entries(t))r===null?delete n[e]:n[e]=r;return n}var gn=(e,t)=>e?.map(([e,n,r])=>[e,n+t,r]);function _n(e,t){let n=e.length,r=[...`.`.repeat(t)];for(let i=0;i<n;i++){if(e[i]===`.`)continue;let a=Math.floor(i*t/n);r[a]===`.`&&(r[a]=e[i])}return r.join(``)}function vn(e,t,n){let r=new Set,i=[];for(let[a,o,s]of e){let e=Math.floor(a/t)*n+Math.floor(a%t*n/t);r.has(e)||(r.add(e),i.push([e,o,Math.max(1,Math.round(s*n/t))]))}return i}var yn=(e,t,n)=>[...new Set(e.map(e=>Math.floor(e*n/t)))];function bn(e,t,n){let r=structuredClone(e),i=(e,t)=>{e&&typeof e[t]==`string`&&(e[t]=_n(e[t],n))},a=e=>{e&&Array.isArray(e.notes)&&(e.notes=vn(e.notes,t,n))};i(r.KICK,`pattern`),i(r.KICK,`perc`),i(r.SNARE,`pattern`),i(r.HAT,`pattern`),i(r.HAT,`dense`),i(r.BASS,`pattern`),i(r.BASS,`bossPattern`),a(r.BASS),a(r.ARP),a(r.LEAD);let o=r.ARP?.stab;return o&&(r.ARP.stab={chorus:yn(o.chorus,t,n),phase2:yn(o.phase2,t,n)}),r}function xn(e,t=e.remix){let n=structuredClone(e);if(!t)return n;let r=P(e.meta.meter).bar,i=t.meter?P(t.meter).bar:r,a=pn(t,`remix`,i);if(a.length)throw new dn(e.id,a);if(t.meter&&(n.meta.meter=[t.meter[0],t.meter[1]],i!==r&&(n.layers=bn(n.layers,r,i),n.variants)))for(let e of Object.keys(n.variants))n.variants[e]=bn(n.variants[e],r,i);t.bpm===void 0?t.bpmScale!==void 0&&(n.meta.bpm=Math.round(e.meta.bpm*t.bpmScale*10)/10):n.meta.bpm=t.bpm,t.swing!==void 0&&(t.swing?n.meta.swing=t.swing:delete n.meta.swing);let o=t.transpose??0;if(o){n.meta.key.tonic+=o,n.scale=n.scale.map(e=>e+o),n.harmony.chords=n.harmony.chords.map(e=>e.map(e=>e+o)),n.harmony.roots=n.harmony.roots.map(e=>e+o);let e=e=>{e.LEAD?.notes&&(e.LEAD.notes=gn(e.LEAD.notes,o)),e.BASS?.notes&&(e.BASS.notes=gn(e.BASS.notes,o)),e.ARP?.notes&&(e.ARP.notes=gn(e.ARP.notes,o))};e(n.layers),n.variants&&Object.values(n.variants).forEach(e)}if(t.sounds){let{kit:e,...r}=t.sounds;Object.assign(n.sounds,r),e&&Object.assign(n.sounds.kit,e)}let s=t.patterns;if(s&&(s.KICK&&(n.layers.KICK.pattern=s.KICK),s.SNARE&&(n.layers.SNARE.pattern=s.SNARE),s.HAT&&(n.layers.HAT={pattern:s.HAT,dense:s.HAT.replace(/X/g,`x`)}),s.BASS&&(n.layers.BASS={maxLen:n.layers.BASS.maxLen,pattern:s.BASS,bossPattern:s.BASS})),t.variants){n.variants??={};for(let[e,r]of Object.entries(t.variants)){let t=n.variants[e]??={};for(let[e,n]of Object.entries(r))t[e]=hn(t[e]??{},n)}}if(t.sectionVariants)for(let[e,r]of Object.entries(t.sectionVariants)){let t=n.structure[Number(e)];t&&t.type!==`warn`&&(t.variant=r)}if(t.bossParts){let e=n.structure[n.structure.length-1];e.type===`boss`&&(e.parts=[...t.bossParts])}return delete n.remix,mn(n,`${e.id} (remix)`)}var Sn=Object.assign({"../../data/charts/stages/01-training.json":{format:`pulse-vector-chart`,version:2,id:`training`,meta:{bpm:92,meter:[4,4],key:{tonic:48,name:`C`},swing:.3,swingUnit:1},scale:[48,50,52,55,57,60,62,64,67,69,72,74,76,79,81,84],harmony:{chords:[[53,57,60,64],[52,55,59,62],[50,53,57,60],[48,52,55,59]],roots:[41,40,38,36],bossTranspose:2},sounds:{kit:{kick:`soft`,snare:`lofi`,hat:`soft`},bass:`sub`,pad:`rhodes`,arp:`bell`,lead:`rhodes`,stab:`rhodes`},layers:{KICK:{pattern:`x......x..x.....`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`x.x.x.x.x.x.x.x.`,dense:`xxxxxxxxxxxxxxxx`},BASS:{maxLen:4,pattern:`x......x..x.....`,bossPattern:`x..x...x..x..x..`},PAD:{},ARP:{seq:[0,1,2,3],octave:12,stab:{chorus:[0,10],phase2:[0,6,10,14]},every:2},LEAD:{notes:[[0,72,4],[4,76,2],[6,74,2],[8,72,8],[16,71,4],[20,74,4],[24,79,6],[30,76,2],[32,77,4],[36,76,2],[38,74,2],[40,72,4],[44,69,4],[48,71,6],[54,72,2],[56,67,8]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`],sub:`drone`,tutorial:`shoot`}},{type:`sector`,bars:4,energy:1,spawn:{mix:[`cluster`],sub:`spinner`,tutorial:`lock`}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`drone`],sub:`drone`,carrier:[0,2],tutorial:`capsule`}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`spinner`,`drone`],sub:`spinner`,tutorial:`evade`}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`spinner`],sub:`drone`,carrier:[1],tutorial:`hp`}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`drone`,`cluster`,`spinner`],sub:`drone`,tutorial:`drill`}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:0,density:1,bulletSpeed:1,floor:`heal`,bg:`#0d1626`,tutorial:!0,aoePool:[],bossAoe:`circle`,bossAoePool:[`circle`],view:`vertical`},boss:{id:`shield`,hp:420,drop:`armor`,look:`shield`,sides:5,inner:`warn`,col2:`enemy`,attacks:{base:[`ring`,`aimed`],extra:[`fan`],summon:`drone`}},remix:{bpm:100,transpose:2,swing:.38,patterns:{HAT:`x.xxx.x.x.xxx.x.`},variants:{chorus:{HAT:{pattern:`xxxxxxxxxxxxxxxx`}},phase2:{KICK:{pattern:`x..x...x..x..x..`}}},bossParts:[`verse`,`verse`,`chorus`,`chorus`]}},"../../data/charts/stages/02-neon-drive.json":{format:`pulse-vector-chart`,version:2,id:`neon-drive`,meta:{bpm:112,meter:[4,4],key:{tonic:57,name:`A`}},scale:[57,60,62,64,67,69,72,74,76,79,81,84,86,88,91,93],harmony:{chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],roots:[45,41,48,43],bossTranspose:2},sounds:{kit:{kick:`punch`,snare:`gated`,hat:`std`},bass:`pulse`,pad:`saw`,arp:`square`,lead:`sqsaw`,stab:`square`},layers:{KICK:{pattern:`x...x...x...x...`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`..x...x...x...x.`,dense:`x.x.x.x.x.x.x.x.`},BASS:{maxLen:1.6,pattern:`x.x.x.x.x.x.x.x.`,bossPattern:`xxxxxxxxxxxxxxxx`},PAD:{},ARP:{seq:[0,1,2,1],octave:12,stab:{chorus:[0,6,10],phase2:[0,3,6,10,13]}},LEAD:{notes:[[0,76,6],[6,74,2],[8,72,4],[12,74,4],[16,77,8],[24,76,4],[28,72,4],[32,79,6],[38,76,2],[40,74,4],[44,72,4],[48,74,8],[56,71,4],[60,79,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`lancer`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`cluster`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`lancer`,`drone`],sub:`drone`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`cluster`,`lancer`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`spinner`,`cluster`],sub:`lancer`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`drone`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:1,density:1.07,bulletSpeed:1.035,floor:`accent`,bg:`#1a0d33`,newEnemy:`lancer`,aoePool:[`circle`],bossAoe:`lane`,bossAoePool:[`circle`,`lane`],view:`vertical`},boss:{id:`tide`,hp:510,drop:`graze`,look:`tide`,sides:6,inner:`accent`,col2:`player`,attacks:{base:[`spiral`,`aimed`],extra:[`ring`],summon:`lancer`},fillStyle:`arp`},remix:{bpm:126,transpose:-2,sounds:{lead:`supersaw`,pad:`strings`},variants:{chorus:{HAT:{pattern:`x.X.x.X.x.X.x.X.`}},phase2:{SNARE:{pattern:`....x.......x.xx`}}},bossParts:[`verse`,`chorus`]}},"../../data/charts/stages/03-velvet-disco.json":{format:`pulse-vector-chart`,version:2,id:`velvet-disco`,meta:{bpm:118,meter:[4,4],key:{tonic:52,name:`E`}},scale:[52,55,57,59,62,64,67,69,71,74,76,79,81,83,86,88],harmony:{chords:[[64,67,71,74],[61,64,67,69],[64,67,71,74],[62,66,69,72]],roots:[40,45,40,38],bossTranspose:2},sounds:{kit:{kick:`punch`,snare:`clap`,hat:`std`},bass:`slap`,pad:`strings`,arp:`pluck`,lead:`brass`,stab:`brass`},layers:{KICK:{pattern:`x...x...x...x...`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`..X...X...X...X.`,dense:`x.x.x.x.x.x.x.x.`},BASS:{maxLen:1.5,pattern:`x.o.x.o.x.o.x.o.`,bossPattern:`x.oxx.o.x.oxx.oo`},PAD:{},ARP:{seq:[3,2,1,0],octave:12,stab:{chorus:[2,6,10,14],phase2:[2,3,6,10,11,14]}},LEAD:{notes:[[0,76,2],[2,79,2],[4,81,4],[10,79,2],[12,76,4],[16,73,4],[20,76,4],[24,79,8],[32,76,2],[34,79,2],[36,83,4],[42,81,2],[44,79,4],[48,78,8],[56,74,4],[60,76,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`mine`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`spinner`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`mine`,`drone`],sub:`drone`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`cluster`,`mine`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`cluster`,`mine`],sub:`mine`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`mine`,`spinner`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:2,density:1.14,bulletSpeed:1.07,floor:`warn`,bg:`#26101c`,newEnemy:`mine`,aoePool:[`circle`,`lane`],bossAoe:`safe`,bossAoePool:[`circle`,`lane`,`safe`],view:`vertical`},boss:{id:`disco`,hp:600,drop:`metro`,look:`disco`,sides:4,inner:`warn`,col2:`lime`,attacks:{base:[`fan`,`ring`],extra:[`wave`],summon:`mine`},fillStyle:`arp`},remix:{bpm:126,transpose:1,sounds:{bass:`acid`,lead:`sqsaw`},variants:{phase2:{SNARE:{pattern:`x...x...x...x...`}}},bossParts:[`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`,`chorus`,`chorus`]}},"../../data/charts/stages/04-orbit-gate.json":{format:`pulse-vector-chart`,version:2,id:`orbit-gate`,meta:{bpm:130,meter:[4,4],key:{tonic:55,name:`G`}},scale:[55,58,60,62,65,67,70,72,74,77,79,82,84,86,89,91],harmony:{chords:[[55,58,62],[51,55,58],[58,62,65],[53,57,60]],roots:[43,39,46,41],bossTranspose:3},sounds:{kit:{kick:`punch`,snare:`clap`,hat:`std`},bass:`acid`,pad:`saw`,arp:`square`,lead:`sqsaw`,stab:`square`},layers:{KICK:{pattern:`x...x...x...x...`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`..x...x...x...X.`,dense:`x.x.x.x.x.x.x.x.`},BASS:{maxLen:1.6,pattern:`..x...xx..x...xo`,bossPattern:`.xo..xo..xo..xoo`},PAD:{},ARP:{seq:[0,1,2,1,0,2,1,2],octave:12,stab:{chorus:[0,6,10],phase2:[0,3,6,10,13]}},LEAD:{notes:[[0,74,4],[4,70,2],[6,72,2],[8,74,6],[14,77,2],[16,75,4],[20,74,2],[22,70,2],[24,67,8],[32,70,4],[36,74,4],[40,77,6],[46,79,2],[48,77,4],[52,72,4],[56,69,4],[60,72,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`snake`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`lancer`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`snake`,`drone`],sub:`drone`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`cluster`,`snake`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`drone`,`lancer`],sub:`snake`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`snake`,`drone`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:3,density:1.21,bulletSpeed:1.105,floor:`player`,bg:`#0c1131`,newEnemy:`snake`,aoePool:[`circle`,`lane`,`safe`],bossAoe:`row`,bossAoePool:[`circle`,`lane`,`safe`,`row`],view:`vertical`},boss:{id:`sun`,hp:690,drop:`regen`,look:`sun`,sides:7,inner:`warn`,col2:`white`,attacks:{base:[`wave`,`aimed`],extra:[`spiral`],summon:`snake`}},remix:{meter:[5,4],bpm:136,patterns:{KICK:`x...x...x...x...x...`,SNARE:`........x.......x...`,HAT:`..x...x...x...x...x.`},variants:{chorus:{HAT:{pattern:`x.x.x.x.x.x.x.x.x.x.`}}}}},"../../data/charts/stages/05-8bit-rush.json":{format:`pulse-vector-chart`,version:2,id:`8bit-rush`,meta:{bpm:150,meter:[4,4],key:{tonic:55,name:`G`}},scale:[55,57,59,62,64,67,69,71,74,76,79,81,83,86,88,91],harmony:{chords:[[55,59,62],[50,54,57],[52,55,59],[48,52,55]],roots:[43,38,40,36],bossTranspose:2},sounds:{kit:{kick:`chip`,snare:`chip`,hat:`chip`},bass:`chip`,pad:`organ`,arp:`chip`,lead:`chip`,stab:`square`},layers:{KICK:{pattern:`x...x...x...x.x.`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`x.x.x.x.x.x.x.x.`,dense:`xxxxxxxxxxxxxxxx`},BASS:{maxLen:1.8,pattern:`x.o.x.o.x.o.x.o.`,bossPattern:`xoxoxoxoxoxoxoxo`},PAD:{},ARP:{seq:[0,1,2,1],octave:24,stab:{chorus:[0,4,8,12],phase2:[0,2,4,8,10,12,14]}},LEAD:{notes:[[0,79,2],[2,81,2],[4,83,4],[8,86,4],[12,83,4],[16,81,6],[22,78,2],[24,81,8],[32,79,2],[34,78,2],[36,76,4],[40,79,4],[44,83,4],[48,84,4],[52,83,4],[56,81,4],[60,79,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`bastion`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`mine`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`bastion`,`drone`],sub:`drone`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`cluster`,`bastion`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`bastion`,`spinner`],sub:`bastion`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`bastion`,`snake`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:4,density:1.28,bulletSpeed:1.14,floor:`lime`,bg:`#0f1a12`,newEnemy:`bastion`,aoePool:[`circle`,`lane`,`safe`,`row`],bossAoe:`chase`,bossAoePool:[`circle`,`lane`,`safe`,`row`,`chase`],view:`vertical`},boss:{id:`pixel`,hp:780,drop:`thruster`,look:`pixel`,sides:4,inner:`lime`,col2:`enemy`,attacks:{base:[`rain`,`fan`],extra:[`aimed`],summon:`lancer`},fill:4,fillStyle:`arp`},remix:{bpm:180,transpose:2,variants:{phase2:{KICK:{pattern:`x.x.x.x.x.x.x.xx`}}},bossParts:[`verse`,`chorus`,`chorus`,`chorus`]}},"../../data/charts/stages/06-midnight-swing.json":{format:`pulse-vector-chart`,version:2,id:`midnight-swing`,meta:{bpm:168,meter:[4,4],key:{tonic:50,name:`D`},swing:.33,swingUnit:2},scale:[50,53,55,57,60,62,65,67,69,72,74,77,79,81,84,86],harmony:{chords:[[62,65,69,72],[59,62,65,67],[60,64,67,71],[61,64,67,70]],roots:[38,43,36,45],bossTranspose:1},sounds:{kit:{kick:`soft`,snare:`rim`,hat:`ride`},bass:`walk`,pad:`rhodes`,arp:`bell`,lead:`reed`,stab:`rhodes`},layers:{KICK:{pattern:`x.......x.......`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`x...x.x.x...x.x.`,dense:`................`},BASS:{maxLen:4,walk:!0,pattern:`x...x...x...x...`,bossPattern:`x...x...x...x...`},PAD:{},ARP:{seq:[0,1,2,3],octave:12,stab:{chorus:[2,10],phase2:[2,6,10,14]},every:2},LEAD:{notes:[[0,74,2],[2,77,2],[4,81,4],[8,79,6],[14,77,2],[16,76,2],[18,74,2],[20,71,4],[24,74,8],[32,76,4],[36,79,4],[40,83,6],[46,81,2],[48,79,4],[52,76,4],[56,73,4],[60,76,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`splitter`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`snake`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`splitter`,`drone`],sub:`drone`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`cluster`,`splitter`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`bastion`,`cluster`],sub:`splitter`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`splitter`,`mine`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:5,density:1.35,bulletSpeed:1.175,floor:`warn`,bg:`#1d1407`,newEnemy:`splitter`,aoePool:[`circle`,`lane`,`safe`,`row`,`chase`],bossAoe:`donut`,bossAoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`],view:`vertical`},boss:{id:`orrery`,hp:870,drop:`hold`,look:`orrery`,sides:8,inner:`player`,col2:`warn`,attacks:{base:[`ring2`,`spiral`],extra:[`wave`],summon:`bastion`},fillStyle:`zig`},remix:{meter:[3,4],bpm:186,patterns:{KICK:`x...........`,SNARE:`........g...`,HAT:`x...x.x.x...`},variants:{chorus:{SNARE:{pattern:`....x...x...`}}}}},"../../data/charts/stages/07-aurora.json":{format:`pulse-vector-chart`,version:2,id:`aurora`,meta:{bpm:138,meter:[4,4],key:{tonic:47,name:`B`}},scale:[47,50,52,54,57,59,62,64,66,69,71,74,76,78,81,83],harmony:{chords:[[59,62,66],[55,59,62],[62,66,69],[57,61,64]],roots:[35,43,38,45],bossTranspose:2},sounds:{kit:{kick:`punch`,snare:`clap`,hat:`std`},bass:`saw`,pad:`strings`,arp:`pluck`,lead:`supersaw`,stab:`square`},layers:{KICK:{pattern:`x...x...x...x...`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`..X...X...X...X.`,dense:`xxxxxxxxxxxxxxxx`},BASS:{maxLen:1,pattern:`.xx..xx..xx..xx.`,bossPattern:`.xx..xx..xx..xxx`},PAD:{},ARP:{seq:[0,2,1,2],octave:12,stab:{chorus:[0,6,10],phase2:[0,3,6,8,10,13]}},LEAD:{notes:[[0,78,4],[4,74,4],[8,71,4],[12,74,4],[16,79,6],[22,78,2],[24,74,8],[32,81,4],[36,78,4],[40,74,4],[44,78,4],[48,76,8],[56,73,4],[60,76,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`spinner`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`splitter`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`spinner`,`drone`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`snake`,`cluster`,`spinner`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`drone`,`lancer`],sub:`spinner`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`spinner`,`bastion`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:6,density:1.42,bulletSpeed:1.21,floor:`player`,bg:`#071a24`,newEnemy:null,aoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`],bossAoe:`chain`,bossAoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`],view:`vertical`},boss:{id:`chorus`,hp:960,drop:`sustain`,look:`chorus`,sides:5,inner:`accent`,col2:`heal`,attacks:{base:[`wave`,`spiral`],extra:[`burst`],summon:`splitter`},fillStyle:`arp`,callResp:`always`},remix:{meter:[6,8],bpm:150,transpose:2,patterns:{KICK:`x.....x.....`,SNARE:`......x.....`,HAT:`..X.X...X.X.`},variants:{phase2:{KICK:{pattern:`x..x..x..x..`}}}}},"../../data/charts/stages/08-gravity-well.json":{format:`pulse-vector-chart`,version:2,id:`gravity-well`,meta:{bpm:140,meter:[4,4],key:{tonic:53,name:`F`}},scale:[53,56,58,60,63,65,68,70,72,75,77,80,82,84,87,89],harmony:{chords:[[53,56,60],[49,53,56],[56,60,63],[51,55,58]],roots:[41,37,44,39],bossTranspose:2},sounds:{kit:{kick:`punch`,snare:`big`,hat:`std`},bass:`wobble`,pad:`strings`,arp:`bell`,lead:`brass`,stab:`brass`},layers:{KICK:{pattern:`x.........x.....`},SNARE:{pattern:`........x.......`},HAT:{pattern:`x.x.x.x.x.x.x.x.`,dense:`xxxxxxxxxxxxxxxx`},BASS:{maxLen:3,pattern:`x..x..x.x..x.x..`,bossPattern:`x.xx..x.x.xx.x.x`},PAD:{},ARP:{seq:[0,1,2],octave:24,stab:{chorus:[0,3],phase2:[0,3,8,11]},every:2},LEAD:{notes:[[0,72,6],[6,75,2],[8,77,8],[16,77,4],[20,75,4],[24,72,8],[32,75,6],[38,77,2],[40,80,8],[48,79,8],[56,75,8]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`snake`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`cluster`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`snake`,`drone`],sub:`mine`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`splitter`,`cluster`,`snake`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`spinner`,`snake`],sub:`snake`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`snake`,`drone`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:7,density:1.49,bulletSpeed:1.245,floor:`accent`,bg:`#160a26`,newEnemy:null,aoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`],bossAoe:`cone`,bossAoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`],view:`vertical`},boss:{id:`gravity`,hp:1050,drop:`magnet`,look:`gravity`,sides:6,inner:`lime`,col2:`accent`,attacks:{base:[`fan`,`aimed`],extra:[`ring2`],summon:`mine`},fill:4},remix:{bpm:150,variants:{phase2:{KICK:{pattern:`x.....x...x.....`},SNARE:{pattern:`....x.......x...`}}},bossParts:[`verse`,`verse`,`chorus`,`chorus`]}},"../../data/charts/stages/09-vesper-core.json":{format:`pulse-vector-chart`,version:2,id:`vesper-core`,meta:{bpm:174,meter:[4,4],key:{tonic:52,name:`E`}},scale:[52,55,57,59,62,64,67,69,71,74,76,79,81,83,86,88],harmony:{chords:[[64,67,71],[60,64,67],[62,66,69],[59,63,66]],roots:[40,36,38,35],bossTranspose:2},sounds:{kit:{kick:`punch`,snare:`std`,hat:`std`},bass:`reese`,pad:`saw`,arp:`square`,lead:`sqsaw`,stab:`square`},layers:{KICK:{pattern:`x.........x.....`},SNARE:{pattern:`....x..g....x..g`},HAT:{pattern:`x.x.x.x.x.x.x.x.`,dense:`xxxxxxxxxxxxxxxx`},BASS:{maxLen:8,pattern:`x.........x..x..`,bossPattern:`x..x..x.x..x..x.`},PAD:{},ARP:{seq:[0,1,2,1],octave:12,stab:{chorus:[0,3,6,10],phase2:[0,3,6,8,10,13,14]}},LEAD:{notes:[[0,79,4],[4,78,2],[6,76,2],[8,71,8],[16,72,4],[20,76,4],[24,79,4],[28,83,4],[32,81,6],[38,78,2],[40,74,8],[48,75,4],[52,78,4],[56,83,8]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`drone`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`lancer`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`drone`,`drone`],sub:`bastion`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`cluster`,`cluster`,`drone`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`mine`,`splitter`],sub:`drone`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`drone`,`spinner`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:8,density:1.56,bulletSpeed:1.28,floor:`enemy`,bg:`#1e0a1c`,newEnemy:null,aoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`],bossAoe:`checker`,bossAoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`,`checker`],view:`vertical`},boss:{id:`lattice`,hp:1140,drop:`compress`,look:`lattice`,sides:4,inner:`player`,col2:`lime`,attacks:{base:[`rain`,`ring`],extra:[`fan`],summon:`snake`},fill:4,fillStyle:`zig`},remix:{meter:[7,4],bpm:172,patterns:{KICK:`x.........x.....x...........`,SNARE:`....x.......x...........x...`,HAT:`x.x.x.x.x.x.x.x.x.x.x.x.x.x.`},variants:{chorus:{SNARE:{pattern:`....x..x....x......x....x...`}}}}},"../../data/charts/stages/10-requiem-engine.json":{format:`pulse-vector-chart`,version:2,id:`requiem-engine`,meta:{bpm:150,meter:[4,4],key:{tonic:50,name:`D`}},scale:[50,53,55,57,60,62,65,67,69,72,74,77,79,81,84,86],harmony:{chords:[[62,65,69],[58,62,65],[60,65,69],[60,64,67]],roots:[38,34,41,36],bossTranspose:2},sounds:{kit:{kick:`boom`,snare:`big`,hat:`std`},bass:`saw`,pad:`strings`,arp:`pluck`,lead:`brass`,stab:`brass`},layers:{KICK:{pattern:`x.......x.......`,perc:`x..x..x.x.x.x...`},SNARE:{pattern:`....x.......x...`},HAT:{pattern:`x...x...x...x...`,dense:`x.x.x.x.x.x.x.x.`},BASS:{maxLen:1.8,pattern:`x.x.x.x.x.x.x.x.`,bossPattern:`xxxxxxxxxxxxxxxx`},PAD:{},ARP:{seq:[0,1,2,1],octave:12,stab:{chorus:[0,6,10],phase2:[0,3,6,8,10,13,14]}},LEAD:{notes:[[0,74,6],[6,77,2],[8,81,8],[16,82,6],[22,81,2],[24,77,8],[32,77,4],[36,79,4],[40,81,4],[44,84,4],[48,79,8],[56,76,4],[60,79,4]],loopBars:4}},structure:[{type:`intro`,bars:2},{type:`sector`,bars:4,energy:1,spawn:{mix:[`drone`,`lancer`],sub:`drone`,carrier:[1],aoe:0}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`cluster`,`snake`],sub:`spinner`,aoe:1}},{type:`sector`,bars:4,energy:2,spawn:{mix:[`lancer`,`drone`],sub:`drone`,aoe:1}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`cluster`,`lancer`],sub:`drone`,carrier:[1],aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`bastion`,`cluster`],sub:`lancer`,aoe:2}},{type:`sector`,bars:4,energy:3,spawn:{mix:[`lancer`,`mine`,`cluster`],sub:`spinner`,aoe:2}},{type:`warn`,bars:3},{type:`boss`,parts:[`verse`,`verse`,`verse`,`verse`,`chorus`,`chorus`,`chorus`,`chorus`]}],stage:{level:9,density:1.63,bulletSpeed:1.315,floor:`warn`,bg:`#200d0d`,newEnemy:null,aoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`,`checker`],bossAoe:`wall`,bossAoePool:[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`,`checker`,`wall`],view:`vertical`},boss:{id:`vesper`,hp:1230,drop:`vital`,look:`vesper`,sides:8,inner:`enemy`,col2:`white`,attacks:{base:[`ring`,`aimed`,`spiral`],extra:[`burst`,`wave`],summon:`splitter`},fill:4,callResp:`ph2`},remix:{bpm:162,transpose:1,sounds:{pad:`organ`},variants:{phase2:{HAT:{pattern:`xxxxxxxxxxxxxxxx`},KICK:{pattern:`x.x.x.x.x.x.x.x.`}}},bossParts:[`chorus`]}}});function Cn(){return Object.keys(Sn).sort().map(e=>mn(Sn[e],e.replace(/^.*\/data\//,`data/`)))}var wn=[`circle`,`lane`,`safe`,`row`,`chase`,`donut`,`chain`,`cone`,`checker`,`wall`],Tn=[null,`lancer`,`mine`,`snake`,`bastion`,`splitter`,null,null,null,null],En={bastion:3,boss:4,mine:5,drone:6,lancer:7,seg:8,spinner:9,splitter:10,carrier:11},Dn=[[0,3,6,10,12],[0,4,6,8,12,14],[0,2,6,8,11],[0,3,8,11,14],[0,6,8,10,12]],On=e=>e?new Map(e.map(e=>[e[0],e])):void 0;function kn(e){let t=e.layers;return{id:e.id,bpm:e.meta.bpm,meter:e.meta.meter,swing:e.meta.swing,su:e.meta.swingUnit,btr:e.harmony.bossTranspose,prog:e.harmony.chords,roots:e.harmony.roots,kit:[e.sounds.kit.kick,e.sounds.kit.snare,e.sounds.kit.hat],kick:t.KICK.pattern,snare:t.SNARE.pattern,hat:t.HAT.pattern,hat16:t.HAT.dense,perc:t.KICK.perc,bassP:t.BASS.pattern,bossBass:t.BASS.bossPattern,bassWalk:!!t.BASS.walk,bassNotes:On(t.BASS.notes),bassLoop:t.BASS.loopBars??1,bassType:e.sounds.bass,bassMax:t.BASS.maxLen,arp:t.ARP.seq,arpNotes:On(t.ARP.notes),arpLoop:t.ARP.loopBars??1,arpOct:t.ARP.octave,arpType:e.sounds.arp,arpEvery:t.ARP.every,leadType:e.sounds.lead,padType:e.sounds.pad,stabType:e.sounds.stab,lead:t.LEAD.notes,leadLoop:t.LEAD.loopBars,leadMap:On(t.LEAD.notes),scale:e.scale,stab:t.ARP.stab.chorus,stab2:t.ARP.stab.phase2,floor:e.stage.floor,bg:e.stage.bg,chart:e,variantCache:new Map}}function An(e,t){let n=e.chart.variants;if(!n)return e;let r=t.filter(e=>!!e&&!!n[e]);if(!r.length)return e;let i=r.join(`+`),a=e.variantCache.get(i);if(!a){let t={...e.chart.layers};for(let e of r)for(let[r,i]of Object.entries(n[e]))t[r]=hn(t[r],i);a=kn({...e.chart,layers:t}),e.variantCache.set(i,a)}return a}function jn(e){let t=e.boss;return{id:t.id,drop:t.drop,look:t.look,fill:t.fill,fillStyle:t.fillStyle,callResp:t.callResp,sides:t.sides,inner:t.inner,col2:t.col2,moves:t.attacks.base,ph2:t.attacks.extra,summon:t.attacks.summon,hp:t.hp}}function Mn(e,t,n=kn(e)){let r=e.stage,i=e.structure,a=i.find(e=>e.type===`intro`),o=i.find(e=>e.type===`boss`),s=i.find(e=>e.type===`warn`),c=[];for(let e of i)e.type===`sector`&&c.push({k:e.spawn.tutorial,mix:e.spawn.mix,sub:e.spawn.sub,E:e.energy,aoe:e.spawn.aoe,obstacle:e.spawn.obstacle,carrier:e.spawn.carrier,bars:e.bars,view:e.view,variant:e.variant});return{idx:r.level,song:n,songIdx:t,boss:jn(e),d:r.density,bs:r.bulletSpeed,floor:r.floor,bg:r.bg,pool:r.aoePool,bossAoe:r.bossAoe,bossPool:r.bossAoePool,tutorial:r.tutorial,newEnemy:r.newEnemy,sectors:c,introBars:a.bars,introVariant:a.variant,bossParts:o.parts,bossVariant:o.variant,view:r.view,introView:a.view,warnView:s?.view,bossView:o.view}}var Nn=Cn(),Pn=Nn.map(kn),Fn=Nn.map(jn),In=Nn.map((e,t)=>Mn(e,t,Pn[t]));function Ln(e){let t=zn(e),n=Array.from({length:60},(e,n)=>({...t.sectors[n%t.sectors.length],aoe:0,obstacle:0}));return{...t,range:!0,introBars:1,sectors:n}}var Rn=[];function zn(e){return Rn[e]??=Mn(xn(Nn[e]),e)}var Bn=e=>e?.view===`rail`,Vn=(e,t)=>!!e.parts&&e.parts[t%e.parts.length]===`chorus`,Hn=(e,t)=>Vn(e,t)&&!Vn(e,t+e.parts.length-1);function Un(e){let t=e.introBars,n=[{type:`intro`,start:0,bars:t,E:0,view:e.introView??e.view,variant:e.introVariant}],r=t;return e.sectors.forEach((t,i)=>{let a=t.bars??4;n.push({type:`sector`,start:r,bars:a,E:t.E,k:t.k,mix:t.mix,sub:t.sub,aoe:t.aoe||0,obstacle:t.obstacle||0,n:i+1,carrier:t.carrier||[],view:t.view??e.view,variant:t.variant}),r+=a}),n.push({type:`warn`,start:r,bars:3,n:7,E:0,view:e.warnView??e.view}),r+=3,n.push({type:`boss`,start:r,bars:1e9,n:7,E:3,parts:e.bossParts,view:e.bossView??e.view,variant:e.bossVariant}),n}function Wn(e,t){let n=8;for(let e of[2,4,8])if(t/e<=b.FILL_GAP){n=e;break}return Math.max(n,e.fill||0)}function Gn(e,t,n){return 2*n-2*n/Wn(e,t)}function Kn(e,t,n){let r;if(t===`arp`){let t=e.prog[0];r=t[n%t.length]+12*Math.floor(n*3/32)}else r=t===`zig`?e.scale[Math.min(15,(n>>1)+(n&1?3:0))]:e.scale[Math.min(15,n>>1)]+(n&1?12:0);for(;r>98;)r-=12;return r}function qn(e,t,n,r=4){let i=e.prog[t],a=e.roots[t];if(n<r-1)return a+(i[n%3]-i[0]);let o=e.roots[(t+1)%e.prog.length];return o+(o>a?-1:1)}function Jn(e,t,n){return e-t-n}function Yn(e,t,n,r=4){let i=r*n,a=((e-t)%i+i)%i;return Math.min(a,i-a)}function Xn(e,t,n,r=.05){let i=Math.ceil((e-t)/n+r);return{k:i,t:t+i*n}}function Zn(e,t,n,r=4){let i=r*n;return t+Math.max(0,Math.ceil((e-t)/i))*i}var Qn=e=>[...e].map(e=>e===`X`?2:+(e===`x`)),$n=e=>e.map(e=>e===2?`X`:e===1?`x`:`.`).join(``),er=e=>({...e,shot:{timbre:e.shot.timbre,steps:[...e.shot.steps]},lock:{...e.lock},tune:{...e.tune}});function tr(e,t){return t>0?Math.max(e-t,e*u.MIN_RATIO):e}var nr=e=>e.filter(e=>e===2).length,rr=e=>e.reduce((e,t)=>e+(t===2?j.ACCENT_NOTES:t),0),ir=e=>Math.min(j.NOTE_MAX,j.D_BAR/Math.max(1,rr(e))),ar=(e,t)=>t===0?0:ir(e)*(t===2?j.ACCENT_MULT:1),or=e=>Math.max(0,-e),sr=e=>Math.max(0,e),cr={power:e=>1-e.tune.dyn*de.DYN_POWER,heat:e=>(1+or(e.tune.dyn)*de.DYN_HEAT)*(1-or(e.tune.art)*de.ART_HEAT+sr(e.tune.art)*de.ART_HEAT),hit:e=>1-e.tune.dyn*de.DYN_HIT,move:e=>1-e.tune.tempo*de.TEMPO_MOVE,slow:e=>1+or(e.tune.tempo)*de.TEMPO_SLOW-sr(e.tune.tempo)*de.TEMPO_MOVE,cone:e=>1+sr(e.tune.tempo)*de.TEMPO_CONE,speed:e=>1+or(e.tune.art)*de.ART_SPEED,life:e=>1-or(e.tune.art)*de.ART_LIFE,ring:e=>1+sr(e.tune.art)*de.ART_RING,pierce:e=>e.tune.art>=de.ART_PIERCE_AT,perfectWin:e=>1+e.tune.expr*de.EXPR_WIN,perfectMult:e=>1-e.tune.expr*de.EXPR_MULT};function lr(e){let t=se[e.shot.timbre].voices+Math.ceil(nr(e.shot.steps)/j.ACCENT_PER_VOICE),n=e.lock.max/2,r=j.DROP_VOICES[e.drop];return{shot:t,lock:n,drop:r,total:t+n+r,cap:ce[e.core].voices}}function ur(e){let t=[];e.shot.steps.length!==j.STEPS&&t.push(`steps`);let n=rr(e.shot.steps);n<j.NOTES_MIN&&t.push(`notesLow`),n>j.NOTES_MAX&&t.push(`notesHigh`);let r=lr(e);return r.total>r.cap&&t.push(`voices`),Object.values(e.tune).some(e=>!Number.isInteger(e)||Math.abs(e)>j.TUNE_RANGE)&&t.push(`tune`),t}var dr=e=>240/e;function fr(e,t=0){let n=se[e.shot.timbre],r=`armorIgnore`in n?n.armorIgnore:0,i=cr.power(e),a=0;for(let o of e.shot.steps){if(!o)continue;let s=ar(e.shot.steps,o)*n.power*i;a+=n.n*tr(s,t*(1-r)),`ring`in n&&(a+=n.n*tr(s*n.ring*cr.ring(e),t*(1-r)))}return a}var pr=(e,t=j.RANGE_ARMOR)=>fr(e,t)/Math.max(1e-9,fr(e,0));function mr(e){return rr(e.shot.steps)*se[e.shot.timbre].heat*cr.heat(e)}function hr(e,t,n=0){let r=dr(t),i=mr(e)/r-j.HEAT.COOL,a=fr(e,n)/r;if(i<=0)return{net:i,toOverheat:1/0,dps:a,peakDps:a};let o=se[e.shot.timbre],s=`armorIgnore`in o?o.armorIgnore:0,c=4*o.n*tr(ir(e.shot.steps)*o.power*cr.power(e)*j.OVERHEAT_MULT,n*(1-s)),l=(1-Math.max(0,1-j.HEAT.COOL*r))/i;return{net:i,toOverheat:1/i,dps:(a*l+c)/(l+r),peakDps:a}}function gr(e,t){let n=e.lock,r=t*ue.RATE[n.rate].power*ue.LEN[n.len].power*(n.oct===2?ue.OCT2_POWER:1),i=n.max*n.oct+ +(n.order===`PINGPONG`),a=n.order===`RANDOM`?1+ue.CRIT_RATE*(ue.CRIT_MULT-1):1;return r*i*a}var _r={LIGHT:`LGT`,STANDARD:`STD`,HEAVY:`HVY`};function vr(e){let t=e.lock,n=oe.map(t=>e.tune[t]+j.TUNE_RANGE).join(``);return[`PV1`,`S:${$n(e.shot.steps)}|${e.shot.timbre}`,`L:${t.max}:${t.order}:${t.rate}:${t.len}:${t.oct}`,`C:${_r[e.core]}:${e.heart}:${e.color}`,`D:${e.drop}`,`T:${n}`].join(`-`)}var yr=(e,t)=>e.find(e=>String(e)===t);function br(e){let t=e.trim().split(`-`),n=/^PV(\d+)$/i.exec(t[0]??``);if(!n)return{ok:!1,reason:`format`};if(Number(n[1])!==1)return{ok:!1,reason:`version`};let r={};for(let e of t.slice(1)){let t=e.indexOf(`:`);if(t<1)return{ok:!1,reason:`format`};r[e.slice(0,t).toUpperCase()]=e.slice(t+1).split(`:`)}let[i]=r.S??[],[a,o]=(i??``).split(`|`),[s,c,u,d,f]=r.L??[],[p,m,h]=r.C??[],[g]=r.D??[],[_]=r.T??[],v=e=>(e??``).toUpperCase(),y={core:Object.keys(_r).find(e=>_r[e]===v(p)),shot:{timbre:yr(ee,v(o)),steps:/^[.xX]+$/.test(a??``)?Qn(a):void 0},lock:{max:yr(ne,s??``),order:yr(A,v(c)),rate:yr(re,v(u)),len:yr(ie,v(d)),oct:f===`1`?1:f===`2`?2:void 0},drop:yr(l,v(g)),heart:yr(te,v(m)),color:/^\d+$/.test(h??``)&&Number(h)<ae.length?Number(h):void 0,tune:/^\d{4}$/.test(_??``)?Object.fromEntries(oe.map((e,t)=>[e,Number(_[t])-j.TUNE_RANGE])):void 0},b=y.lock;if(!y.core||!y.shot.timbre||!y.shot.steps||!b.max||!b.order||!b.rate||!b.len||!b.oct||!y.drop||!y.heart||y.color===void 0||!y.tune)return{ok:!1,reason:`format`};let x=y,S=ur(x);return S.length?{ok:!1,reason:`invalid`,problems:S}:{ok:!0,build:x}}function xr(e){let t=ce[e.core],n=se[e.shot.timbre],r=cr.power(e),i=e.lock,a=+!!cr.pierce(e);return{build:e,maxHp:t.layers*25,layers:t.layers,move:t.move*cr.move(e),slow:t.move*cr.slow(e),hitPad:x.BULLET_HIT_PAD*t.hit*cr.hit(e),heart:e.heart,color:ae[e.color]??ae[0],timbre:e.shot.timbre,steps:[...e.shot.steps],stepDmg:e.shot.steps.map(t=>ar(e.shot.steps,t)*n.power*r),overDmg:ar(e.shot.steps,1)*n.power*r*j.OVERHEAT_MULT,heat:n.heat*cr.heat(e),speed:n.speed*cr.speed(e),life:n.life*cr.life(e),ring:`ring`in n?n.ring*cr.ring(e):0,pierce:`pierce`in n&&n.pierce?1/0:a,armorIgnore:`armorIgnore`in n?n.armorIgnore:0,lockCap:i.max,order:i.order,rateSteps:ue.RATE[i.rate].steps,lockPower:ue.RATE[i.rate].power*ue.LEN[i.len].power*(i.oct===2?ue.OCT2_POWER:1),lockCost:ue.LEN[i.len].cost,laserWidth:ue.LEN[i.len].width,laserPierce:ue.LEN[i.len].pierce,oct:i.oct,cone:cr.cone(e),drop:e.drop,perfectWin:b.PERFECT_WIN*cr.perfectWin(e),perfectMult:1+(b.PERFECT_MULT-1)*cr.perfectMult(e)}}var Sr=(e,t)=>(C.CONE_BASE+t*C.CONE_SLOPE)*e.cone,Cr={dyn:0,tempo:0,art:0,expr:0},wr=[{core:`STANDARD`,shot:{timbre:`PLUCK`,steps:Qn(`xxxxxxxxxxxxxxxx`)},lock:{max:8,order:`ASC`,rate:`16`,len:`S`,oct:1},drop:`CLEAR`,tune:{...Cr},heart:`PULSE`,color:0},{core:`STANDARD`,shot:{timbre:`SUPERSAW`,steps:Qn(`x.x.x.x.x.x.x.x.`)},lock:{max:6,order:`ASC`,rate:`8`,len:`M`,oct:1},drop:`BURST`,tune:{...Cr},heart:`PULSE`,color:1},{core:`STANDARD`,shot:{timbre:`WOBBLE`,steps:Qn(`X.x.X.x.X.x.X.x.`)},lock:{max:12,order:`ORDER`,rate:`16`,len:`S`,oct:1},drop:`ABSORB`,tune:{...Cr,tempo:1},heart:`PULSE`,color:2}],Tr=[`LINE`,`WIDE`,`SEEK`],Er=[`power`,`sustain`,`reach`,`armor`,`lock`,`tough`,`move`],Dr=(e,t)=>Math.min(1,Math.max(0,(e-t.LO)/(t.HI-t.LO)));function Or(e,t){let n=xr(e),r=hr(e,t),i=ce[e.core].layers*25,a=n.move/Math.sqrt(n.hitPad/x.BULLET_HIT_PAD);return{power:Dr(r.dps,h.DPS),sustain:r.toOverheat===1/0?1:Dr(r.toOverheat,h.HEAT_SEC),reach:h.REACH[e.shot.timbre],armor:Dr(pr(e),h.ARMOR),lock:Dr(gr(e,b.LASER_DMG),h.LOCK),tough:Dr(i,h.TOUGH),move:Dr(a,h.MOVE)}}function kr(e){let t=[...Er].sort((t,n)=>e[n]-e[t]);return{strong:t.filter(t=>e[t]>=h.STRONG).slice(0,h.SHOW),weak:t.reverse().filter(t=>e[t]<=h.WEAK).slice(0,h.SHOW)}}var W=a.W,G=a.H,Ar=G-a.PLAYER_MAX_Y_FROM_BOTTOM,jr=G-s.PLAYER_Y_FROM_BOTTOM,Mr=s.GRID_Z*2,Nr=e=>s.GRID_Z-e,Pr=e=>s.GRID_Z-e;function Fr(){return{state:`title`,paused:!1,invincible:!1,now:0,time:0,scroll:0,speed:500,kickP:0,snP:0,warp:0,flash:0,flashCol:N.white,shake:0,noiseT:0,noiseMax:1,stage:In[0],stageIdx:0,song:In[0].song,spd:0,offset:0,lat:0,kit:xr(wr[0]),snap:null,heat:0,overUntil:0,overT:0,rings:[],dmgLog:[],t0:0,nextT:0,gstep:0,queue:[],slot:new Map,blastSet:new Set,sections:[],secObj:null,rail:!1,outroBar:null,outroSec:null,clearBar:null,player:null,enemies:[],ebul:[],pbul:[],parts:[],lasers:[],aoes:[],obstacles:[],floaters:[],locks:[],items:[],boss:null,bossPhase2:!1,ph2Music:!1,outTr:0,deathLook:``,fillStart:null,fillR:8,spin:0,aoeBusy:0,aoeN:0,obstN:0,bossAoeN:0,score:0,kills:0,hits:0,maxLock:0,perfects:0,grazes:0,counters:0,combo:0,maxCombo:0,comboL:0,lastKillT:0,lockCharge:0,drop:null,dropKind:`CLEAR`,freezeUntil:0,round:1,codename:``,comm:null,commNext:null,opLow:!1,lastWord:null,tinkK:-1,callPat:null,respPat:null,callout:null,curBar:0,curS:0,meter:{},layers:null,heart:!1,tipBase:null,tipTemp:null,tipped:{},firing:!1,locking:!1,gameOverAt:null}}var K=Fr(),Ir=()=>K.kit.lockCap;function Lr(e,t){Object.assign(K,{state:`play`,paused:!1,t0:0,nextT:0,gstep:0,queue:[],slot:new Map,blastSet:new Set,sections:t,secObj:null,rail:!1,outroBar:null,outroSec:null,clearBar:null,player:{x:W/2,y:G-a.PLAYER_START_Y_FROM_BOTTOM,z:0,hp:e.hp,maxHp:e.maxHp,weapon:e.weapon,level:e.level,inv:0,alive:!0,trail:[]},enemies:[],ebul:[],pbul:[],parts:[],lasers:[],aoes:[],obstacles:[],floaters:[],locks:[],items:[],boss:null,bossPhase2:!1,ph2Music:!1,outTr:0,fillStart:null,spin:0,aoeBusy:0,aoeN:0,obstN:0,bossAoeN:0,score:e.score,kills:0,hits:0,maxLock:0,perfects:0,grazes:0,counters:0,combo:0,maxCombo:0,comboL:0,lastKillT:0,lockCharge:0,drop:null,freezeUntil:0,heat:0,overUntil:0,overT:0,rings:[],dmgLog:[],comm:null,commNext:null,opLow:!1,lastWord:null,tinkK:-1,callPat:null,respPat:null,scroll:0,warp:0,kickP:0,snP:0,flash:0,flashCol:N.white,shake:0,callout:null,curBar:0,curS:0,meter:{},layers:null,heart:!1,noiseT:0,noiseMax:1,tipBase:null,tipTemp:null,tipped:{},firing:!1,locking:!1,gameOverAt:null}),K.lockCharge=Ir()}var Rr=700,zr={h:0},Br=e=>K.t0?(e-K.t0)/F.s16:0,Vr=e=>(e-K.lat-K.offset-K.t0)/F.s16,Hr=e=>Yn(Jn(e,K.lat,K.offset),K.t0,F.s16,F.beat);function Ur(e){let t=Xn(z.ac.currentTime,K.t0,F.s16),n=K.slot.get(t.k)||0;n>=3||(K.slot.set(t.k,n+1),e(t.t,n))}function Wr(e,t,n,r=14,i=320){for(let a=0;a<r&&K.parts.length<Rr;a++){let r=qt(0,Math.PI*2),a=qt(i*.3,i);K.parts.push({x:e,y:t,z:zr.h,vx:Math.cos(r)*a,vy:Math.sin(r)*a,life:qt(.3,.7),max:.7,col:n,kind:`shard`,len:qt(6,14),rot:r})}K.parts.push({x:e,y:t,z:zr.h,life:.35,max:.35,col:n,kind:`ring`,r:8,vr:260})}function Gr(e,t,n,r,i,a){K.parts.push({x:e,y:t,z:zr.h,life:r,max:r,col:n,kind:`ring`,r:i,vr:a})}function Kr(e,t,n,r,i=1.1,a=zr.h){K.floaters.push({x:e,y:t,z:a,text:n,col:r,life:i})}function qr(e,t,n,r=2.2){K.callout={text:e,sub:t,col:n,t:0,dur:r}}function Jr(e,t,n){K.tipped[e]||(K.tipped[e]=!0,K.tipTemp={...t,until:K.now+n})}function Yr(e=!1){if(!z.ready||!K.player)return;let t=K.player,n=Mt(t.hp/t.maxHp*100,K.comboL,At(K.kit.layers)),r=K.layers,i=z.ac.currentTime,a=e?i:Zn(i,K.t0,F.s16,F.beat);Nt(n,r,a,e,F.s16*F.bar),r&&K.state===`play`&&(n.L<r.L?Kr(t.x,t.y-84,U(`floater.soundMinus`,{layer:kt(n.L)}),N.enemy,void 0,K.player.z):n.L>r.L&&Kr(t.x,t.y-84,U(`floater.soundPlus`,{layer:kt(n.L-1)}),N.heal,void 0,K.player.z),n.c>r.c&&Kr(t.x,t.y-104,U(`floater.layerIn`,{layer:n.c===1?`ARP`:`LEAD`}),N.warn,void 0,K.player.z)),K.heart=n.L===0,K.layers=n,Bt(a,n)}function Xr(){return K.combo>=b.COMBO_LEAD?2:+(K.combo>=b.COMBO_ARP)}function Zr(e){K.combo+=e,K.maxCombo=Math.max(K.maxCombo,K.combo),K.lastKillT=K.now;let t=Xr();t!==K.comboL&&(K.comboL=t,Yr())}function Qr(){K.combo>=b.COMBO_BREAK_FLOATER_MIN&&K.player.alive&&Kr(K.player.x,K.player.y-104,U(`floater.comboBreak`),N.dim,void 0,K.player.z),K.combo=0,K.comboL!==0&&(K.comboL=0,Yr())}function $r(e){let t={vx:0,vy:0,t:0,flash:0,rot:0,lockN:0,cap:1,score:100,...e};return K.round===2&&u.TYPES[t.type]&&(t.armor=u.TYPES[t.type]),K.rail&&(t.z=qt(-s.SPAWN_Z,s.SPAWN_Z)),K.enemies.push(t),t}var ei=e=>qt(e[0],e[1]);function ti(e,t,n,r,i,a){let o=w.drone;$r({type:`drone`,x:e,y:t,vx:n,vy:r,hp:a?o.smallHp:o.hp,r:a?o.smallR:o.r,wa:i??ei(o.wobble),wf:ei(o.wobbleFreq),small:a,score:a?o.smallScore:o.score})}function ni(e){let t=w.spinner;$r({type:`spinner`,x:e,y:t.y,ty:ei(t.stopY),hp:t.hp,r:t.r,life:F.s16*t.lifeSteps,score:t.score})}function ri(e){let t=w.carrier;$r({type:`carrier`,x:e?-t.offscreen:W+t.offscreen,y:t.y,by:t.y,vx:e?t.vx:-t.vx,hp:t.hp,r:t.r,score:t.score})}function ii(e,t=w.formV.n){let n=w.formV;for(let r=0;r<t;r++){let i=r-(t-1)/2;ti(e+i*n.gapX,n.y-Math.abs(i)*n.gapY,0,n.vy)}}function ai(e){let t=w.formLine;for(let n=0;n<t.n;n++){let r=e?1:-1;ti(e?-t.x-n*t.gap:W+t.x+n*t.gap,t.y+n*t.stepY,t.vx*r,t.vy)}}function oi(e,t){let n=w.cluster,r=Math.round(n.n+t*n.nPerDensity),i=n.xs[e%n.xs.length];for(let e=0;e<r;e++){let t=e-(r-1)/2;ti(i+t*n.gapX,n.y-Math.abs(t)*n.gapY,0,n.vy,n.wobble)}}function si(e){let t=w.lancer;for(let n=0;n<e;n++)$r({type:`lancer`,x:W*(n+1)/(e+1)+qt(-t.jitter,t.jitter),y:t.y,ty:ei(t.stopY),hp:t.hp,r:t.r,t:-n*t.stagger,score:t.score})}function ci(e){let t=w.mine;for(let n=0;n<e;n++)$r({type:`mine`,x:qt(t.edge,W-t.edge),y:t.y-n*t.gap,vy:t.vy,hp:t.hp,r:t.r,life:t.life,score:t.score})}function li(e){let t=w.seg,n=ei(t.amp),r=qt(0,6);for(let i=0;i<t.count;i++)$r({type:`seg`,head:i===0,cx:e,amp:n,ph:r,x:e,y:t.waitY,t:-i*t.stagger,hp:t.hp,r:i===0?t.headR:t.r,score:t.score})}function ui(e){let t=w.bastion;$r({type:`bastion`,x:e,y:t.y,ty:ei(t.stopY),hp:t.hp,r:t.r,cap:t.cap,life:F.s16*t.lifeSteps,score:t.score})}function di(e){let t=w.splitter;for(let n=0;n<e;n++)$r({type:`splitter`,x:qt(t.edge,W-t.edge),y:t.y-n*t.gap,vx:ei(t.vx),vy:t.vy,hp:t.hp,r:t.r,score:t.score})}var fi={drone:e=>{let t=w.formV;e%2==0?ii(t.xs[e%4<2?0:1],K.stage.d>t.denseAt?t.denseN:t.n):ai(e%4<2)},cluster:e=>oi(e,K.stage.d),spinner:()=>ni(ei(w.spinner.x)),lancer:()=>si(w.lancer.n+Math.round(K.stage.d)),mine:()=>ci(w.mine.n),snake:()=>li(ei(w.seg.x)),bastion:()=>{K.enemies.some(e=>e.type===`bastion`)?ii(ei(w.bastion.x),w.formV.n):ui(ei(w.bastion.x))},splitter:()=>di(w.splitter.n)};function pi(e,t,n,r,i=6){r*=K.stage.bs;let a=Math.cos(n)*r,o=Math.sin(n)*r;if(!K.rail&&!zr.h){K.ebul.push({x:e,y:t,vx:a,vy:o,r:i});return}let c=K.player,l=zr.h,u=o>1?(c.y-t)/o:0,d=K.rail&&u>0?I((c.z-l)/u,-s.AIM_VZ_MAX,s.AIM_VZ_MAX):0;K.ebul.push({x:e,y:t,vx:a,vy:o,z:l,vz:d,r:i})}function mi(e,t,n,r,i=0){for(let a=0;a<n;a++)pi(e,t,i+a*Math.PI*2/n,r)}function hi(e,t,n,r=1,i=.18){let a=K.player,o=Math.atan2(a.y-t,a.x-e);for(let a=0;a<r;a++)pi(e,t,o+(a-(r-1)/2)*i,n,7)}function gi(e,t,n){K.items.push({kind:`heal`,x:e,y:t,z:zr.h,big:n,v:n?b.HEAL_BIG:b.HEAL_SMALL,t:0})}function _i(e){let t=K.song.scale[En[e]??6];for(;t<64;)t+=12;return t}function vi(e,t,n){switch(zr.h=e.z??0,e.t+=t,e.flash=Math.max(0,e.flash-t),e.type){case`drone`:e.x+=e.vx*t+Math.cos(e.t*e.wf)*e.wa*t,e.y+=e.vy*t,e.rot+=t*w.drone.spin;break;case`carrier`:{let n=w.carrier;e.x+=e.vx*t,e.y=e.by+Math.sin(e.t*n.bobFreq)*n.bob,e.rot+=t*n.spin;break}case`spinner`:{let n=w.spinner;e.rot+=t*(n.spin+K.kickP),e.t<n.enterSec?e.y=n.y+(e.ty-n.y)*(1-(1-e.t/n.enterSec)**3):e.t>e.life&&(e.y+=n.leaveVy*t);break}case`lancer`:{let n=w.lancer;if(e.t<0){e.y=n.y;break}e.t<n.enterSec?e.y=n.y+(e.ty-n.y)*(1-(1-e.t/n.enterSec)**3):e.dash&&(e.x+=Math.cos(e.ang)*n.dash*t,e.y+=Math.sin(e.ang)*n.dash*t);break}case`mine`:{let n=w.mine;e.y+=e.vy*t,e.rot+=t*n.spin,e.t>e.life&&e.hp>0&&(e.ripe=!0);break}case`seg`:{let t=w.seg;if(e.t<0){e.y=t.waitY;break}e.x=e.cx+Math.sin(e.t*t.freq+e.ph)*e.amp,e.y=t.y+e.t*t.vy;break}case`bastion`:{let n=w.bastion;e.t<e.life?e.y+=(e.ty-e.y)*Math.min(1,t*n.follow):e.y+=n.leaveVy*t,e.rot+=t*n.spin;break}case`splitter`:{let n=w.splitter;e.x+=e.vx*t,e.y+=e.vy*t,(e.x<n.wall||e.x>W-n.wall)&&(e.vx*=-1),e.rot+=t*n.spin;break}}}var yi=w.BOUNDS,bi=e=>e.hp>0&&!e.dead&&e.y<G+yi.below&&e.y>yi.above&&!(e.t>yi.sideGraceSec&&(e.x<-yi.side||e.x>W+yi.side)),xi=()=>K.round===1,Si=e=>Math.min(fe.MAX,1+Math.floor((e+1)/fe.NEW_START_DIV));function Ci(e,t){let n=fe.ADD[e];return n?n.slice(0,Math.max(0,t-1)).flat():[]}function wi(){let e=K.player;!xi()||e.weapon<0||e.level<=1||(e.level--,Kr(e.x,e.y-62,U(`floater.weaponDown`,{name:Tr[e.weapon],lv:e.level}),N.dim))}var Ti=e=>Math.min(1,(e.shot??0)/(pe.SHOT_BEATS*F.beat*F.s16));function Ei(e){let t=K.player,n=xr(wr[e]),r=t.hp/t.maxHp;K.kit=n,K.dropKind=n.drop,t.weapon=e,t.maxHp=n.maxHp,t.hp=Math.max(1,Math.round(n.maxHp*r)),K.lockCharge=Math.min(K.lockCharge,Ir())}function Di(e,t){xi()&&K.items.push({kind:`cap`,x:e,y:t,z:zr.h,t:0,w:Math.max(0,K.player.weapon),shot:0})}function Oi(){let e=S.CAP_HIT_GAP_STEPS*F.s16,t=pe.SHOT_BEATS*F.beat*F.s16;for(let n of K.items){if(n.kind!==`cap`||n.got)continue;let r=!1;for(let e of K.pbul)e.dead||L(e.x,e.y,n.x,n.y)+Te(e,n)>S.CAP_HIT_R*S.CAP_HIT_R||(e.dead=!0,r=!0,n.y=Math.max(S.CAP_PUSH_MIN_Y,n.y-S.CAP_PUSH));if(!r)continue;let i=n.hitT;if(n.hitT=K.now,i===void 0||K.now-i>e||(n.shot=(n.shot??0)+(K.now-i),n.shot<t-1e-9))continue;n.shot=0,n.w=((n.w??0)+1)%wr.length,zr.h=n.z??0,Gr(n.x,n.y,Ce[n.w],.3,14,160),zr.h=0;let a=K.song.scale[9+n.w];Ur((e,t)=>{t||zt(`callTone`,e,a)})}}function ki(e){let t=K.player,n=K.song.scale,r=e.w??Math.max(0,t.weapon);r===t.weapon?t.level=Math.min(fe.MAX,t.level+1):Ei(r),qr(U(`callout.preset`,{name:Tr[r],lv:t.level}),``,Ce[r],1.4),Wr(t.x,t.y,Ce[r],16,260),Ur(e=>dt(e,[n[7],n[9],n[11]],F.s16))}function Ai(e,t,n){let r;do r=Kt.int(Pn.length);while(r===n&&Pn.length>1);let i=(e,t)=>e+Kt.int(t-e+1),a=e===1?i(me.BPM_START[0],me.BPM_START[1]):Math.min(me.BPM_MAX,t+i(me.BPM_STEP[0],me.BPM_STEP[1])),o=Kt.int(Fn.length),s=wn.slice(0,Math.min(10,1+e)),c=[`drone`,`cluster`,`spinner`,...Tn.slice(1,Math.min(6,e+2)).filter(Boolean)],l=()=>c[Kt.int(c.length)];return{endless:!0,round:e,bpm:a,songIdx:r,idx:Math.min(9,2+e),song:Pn[r],boss:{...Fn[o],hp:me.BOSS_HP+e*me.BOSS_HP_STEP},bossAoe:wn[o],bossPool:[...new Set([...s,wn[o]])],d:Math.min(me.DENSITY_MAX,1+e*me.DENSITY_STEP),bs:Math.min(me.BULLET_SPEED_MAX,1+e*me.BULLET_SPEED_STEP),floor:Pn[r].floor,bg:Pn[r].bg,pool:s,introBars:1,bossParts:In[r].bossParts,view:`vertical`,sectors:[{mix:[l(),`drone`],sub:l(),E:2,aoe:1,carrier:[1]},{mix:[l(),`cluster`,l()],sub:`spinner`,E:3,aoe:2},{mix:[l(),l()],sub:l(),E:3,aoe:2,carrier:[2]}]}}var ji=()=>({hp:0,maxHp:0,weapon:0,level:1,score:0});function Mi(){let e=K.player,t=K.stage,n=Ai(t.round+1,t.bpm,t.songIdx);K.stage=n,K.song=n.song,K.stageIdx=n.idx,F.set(n.bpm,n.song.meter),e.hp=Math.min(e.maxHp,e.hp+me.HEAL),Object.assign(K,{sections:Un(n),secObj:null,outroBar:null,outroSec:null,clearBar:null,boss:null,bossPhase2:!1,ph2Music:!1,aoes:[],ebul:[],enemies:[],locks:[],items:[],lasers:[],blastSet:new Set,slot:new Map,aoeBusy:0,aoeN:0,bossAoeN:0,callPat:null,drop:null,freezeUntil:0,fillStart:null,tipBase:null}),K.t0=K.nextT,K.gstep=0,K.queue=[],z.setDelayForTempo(),Yr()}var Ni=e=>[...e],Pi=e=>Ni(e).length*f.CHAR_SEC,Fi=e=>/^[…・.\s—―-]*$/.test(e);function Ii(e,t){return{lines:[...e],openAt:t,idx:0,lineAt:t+f.OPEN_SEC,closeAt:null,voiceAt:t}}var Li=(e,t)=>n=>e+(Math.floor((n-e)/t+1e-6)+1)*t;function Ri(e,t){let n=e.lines[e.idx]??``,r=e.idx<e.lines.length-1,i={idx:e.idx,text:n,more:r};if(t<e.openAt)return{...i,phase:`wait`,open:0,shown:0,typing:!1};if(e.closeAt!==null&&t>=e.closeAt){let r=(t-e.closeAt)/f.CLOSE_SEC;return r>=1?{...i,phase:`done`,open:0,shown:0,typing:!1,more:!1}:{...i,phase:`close`,open:1-r,shown:Ni(n).length,typing:!1,more:!1}}let a=(t-e.openAt)/f.OPEN_SEC,o=t-e.lineAt,s=Ni(n).length,c=o<0?0:Math.min(s,Math.floor(o/f.CHAR_SEC)+1);return a<1?{...i,phase:`open`,open:a,shown:c,typing:!1}:{...i,phase:`line`,open:1,shown:c,typing:c<s}}function zi(e,t,n){if(e.closeAt!==null||t<e.lineAt)return!1;let r=e.idx>=e.lines.length-1,i=e.lineAt+Pi(e.lines[e.idx]??``)+(r?f.LAST_HOLD_SEC:f.HOLD_SEC);return t<i?!1:r?(e.closeAt=n(t),!0):(e.idx++,e.lineAt=i,!1)}function Bi(e,t,n){if(e.closeAt!==null||t<e.openAt)return!1;let r=e.lines[e.idx]??``;return t-e.lineAt<Pi(r)?(e.lineAt=Math.min(e.lineAt,t)-Pi(r),!1):e.idx<e.lines.length-1?(e.idx++,e.lineAt=Math.max(t,e.openAt+f.OPEN_SEC),!1):(e.closeAt=n(t),!0)}function Vi(e,t,n){let r=[];for(let i=n(e.voiceAt);i<=t;i=n(i)){e.voiceAt=i;let t=Ri(e,i);t.phase===`line`&&t.typing&&!Fi(t.text)&&r.push({t:i,ch:Ni(t.text)[Math.max(0,t.shown-1)]??``})}return r}function Hi(e){let t=e.codePointAt(0)??0,n=f.VOICE_NOTES[t%f.VOICE_NOTES.length],[r,i]=f.VOWELS[Math.floor(t/7)%f.VOWELS.length];return{note:n,f1:r,f2:i}}var Ui=[`start`,`lowHp`],Wi=.03,Gi=e=>e[Math.floor(Jt.next()*e.length)%e.length];function Ki(){return K.round===2&&K.codename?K.codename:U(`operator.callR1`)}function qi(e,t={}){let n=Qt(`operator.${K.round===2?`r2`:`r1`}.${e}`);if(!n?.length)return;let r=Ki(),i=Gi(n),a=(Array.isArray(i)?i:[i]).map(e=>Zt(e,{...t,name:r}));if(K.round===2&&Ui.includes(e)&&Jt.next()<p.SLIP_RATE){let e=U(`operator.slip`,{other:Gi(Qt(`operator.others`)),name:r}),t=a.findIndex(e=>e.includes(r));t>=0?a[t]=a[t].replace(r,e):a[0]=`${e}。${a[0]}`}Ji(a)}function Ji(e){K.comm?K.commNext={lines:e,at:K.now}:Yi(e)}function Yi(e){let t=Zn(K.now+Wi,K.t0,F.s16,F.beat);K.comm=Ii(e,t),zt(`commOpen`,t)}var Xi=()=>Li(K.t0,F.s16),Zi=()=>{let e=Xi();return t=>e(t+Wi)};function Qi(){let e=K.comm,t=K.now;if(e){zi(e,t,Zi())&&zt(`commClose`,e.closeAt);for(let n of Vi(e,t+f.LOOKAHEAD,Xi())){if(n.t<t)continue;let e=Hi(n.ch);zt(`commVoice`,n.t,e.note,e.f1,e.f2)}if(Ri(e,t).phase===`done`){K.comm=null;let e=K.commNext;K.commNext=null,e&&t-e.at<f.QUEUE_SEC&&Yi(e.lines)}}}function $i(){let e=K.comm;e&&Bi(e,K.now,Zi())&&zt(`commClose`,e.closeAt)}var ea=e=>e%j.STEPS;function ta(e,t){return t<K.overUntil?e%F.beat===0?3:0:K.kit.steps[ea(e)]??0}function na(e,t){let n=K.kit,r=se[n.timbre],i=K.player,a=r.n;for(let o=0;o<a;o++){let s=-Math.PI/2+(o-(a-1)/2)*r.spread,c=i.x+(a>1&&r.spread===0?(o-(a-1)/2)*10:0);K.pbul.push({x:c,y:i.y-18,...i.z?{z:i.z}:{},vx:Math.cos(s)*n.speed,vy:Math.sin(s)*n.speed,dmg:e,kind:n.timbre,life:n.life,acc:t,pierce:n.pierce,ox:i.x,oy:i.y-18,age:0,...n.timbre===`WOBBLE`?{cx:c}:{}})}for(let r of Ci(i.weapon,i.level)){let a=-Math.PI/2+r.a,o=i.x+r.dx;K.pbul.push({x:o,y:i.y-14,...i.z?{z:i.z}:{},vx:Math.cos(a)*n.speed,vy:Math.sin(a)*n.speed,dmg:e*r.dmg,kind:n.timbre,life:n.life,acc:t,pierce:n.pierce,ox:o,oy:i.y-14,age:0,...n.timbre===`WOBBLE`?{cx:o}:{}})}}function ra(e,t){let n=K.kit,r=ta(e,t);if(r){if(r===3)na(n.overDmg,!1);else if(na(n.stepDmg[ea(e)],r===2),K.heat+=n.heat*(r===2?j.ACCENT_NOTES:1),K.heat>=1){K.heat=1,K.overUntil=t+F.bar,K.overT=K.t0+K.overUntil*F.s16;let e=K.player;Kr(e.x,e.y+40,U(`floater.overheat`),N.enemy)}}}function ia(){let e=K.kit;if(K.lockCharge<e.lockCost-1e-9||K.locks.length>=e.lockCap)return;let t=K.player,n=null,r=1e9,i=K.enemies.filter(e=>e.hp>0);K.boss&&K.boss.vuln&&!K.boss.dying&&i.push(K.boss);for(let a of i){if(a.lockN>=a.cap||a.y<-10||a.y>t.y-C.MIN_AHEAD)continue;let i=Sr(e,t.y-a.y);if(Math.abs(a.x-t.x)>i||a.z!==void 0&&Math.abs(a.z-t.z)>i)continue;let o=L(a.x,a.y,t.x,t.y)+Te(a,t);o<r&&(r=o,n=a)}if(!n)return;n.lockN++,K.lockCharge-=e.lockCost;let a=n.cap>1,o=_i(n.type);K.locks.push({e:n,type:n.type,note:o,ox:a?qt(-n.r*.5,n.r*.5):0,oy:a?qt(-n.r*.4,n.r*.4):0}),zt(`lockTick`,z.ac.currentTime,o)}function aa(e){if(zr.h=K.player.z,K.locking=!1,!K.locks.length||!z.ready||K.state!==`play`){for(let e of K.locks)e.e.lockN=Math.max(0,e.e.lockN-1);K.locks=[];return}let t=K.locks.length;K.maxLock=Math.max(K.maxLock,t);let n=K.kit,r=Hr(e)<=n.perfectWin,i=[...K.locks];if(n.order===`ASC`)i.sort((e,t)=>e.note-t.note);else if(n.order===`DESC`)i.sort((e,t)=>t.note-e.note);else if(n.order===`RANDOM`)for(let e=i.length-1;e>0;e--){let t=Kt.int(e+1);[i[e],i[t]]=[i[t],i[e]]}let a=i.map(e=>e.note),o=i.map(e=>e.type),s=1,c=``;if(t>=3&&o.every(e=>e===o[0]))s=2,c=U(`floater.unison`);else if(t>=3){let e=a.every((e,t)=>t===0||e>a[t-1]),t=a.every((e,t)=>t===0||e<a[t-1]);(e||t)&&(s=3,c=U(e?`floater.scaleUp`:`floater.scaleDown`))}let l=z.ac.currentTime,u=Xn(l,K.t0,F.s16),d=K.player;if(Ye(l),r){K.perfects++,K.lockCharge=Math.min(Ir(),K.lockCharge+b.PERFECT_REFUND),zt(`perfectSfx`,u.t,a[0]),qr(U(`callout.perfect`),``,N.warn,.7);for(let e=0;e<3;e++)Gr(d.x,d.y,N.warn,.5,10+e*8,240+e*60)}let f=K.respPat,p=!!f&&n.order===`ORDER`&&t===f.length&&i.some(e=>e.e.type===`boss`);p&&(s*=b.ANSWER_MULT,c=U(`floater.answer`)),c&&Kr(d.x,d.y-120,U(`floater.bonus`,{label:c,n:s}),N.lime);let m=i.map(e=>({L:e,note:e.note,extra:!1}));if(n.oct===2)for(let e of i)m.push({L:e,note:e.note+12,extra:!0});n.order===`PINGPONG`&&m.push({L:i[i.length-1],note:i[i.length-1].note+12,extra:!0});let h=e=>p&&f?e<f.length?f[e]-f[0]:f[f.length-1]-f[0]+(e-f.length+1)*n.rateSteps:e*n.rateSteps;m.forEach((e,i)=>{let a=u.t+h(i)*F.s16;zt(`laserHit`,a,e.note);let o=n.order===`RANDOM`&&Kt.next()<ue.CRIT_RATE;K.lasers.push({...e.L,note:e.note,extra:e.extra,crit:o,x0:d.x,y0:d.y,t0:K.now,t1:a,n:t,i,perfect:r,bonus:s,answer:p,cx:qt(-220,220),done:!1,fade:0})}),K.locks=[]}function oa(e,t){return e===`CLEAR`?F.mid:e===`FREEZE`?t:Math.max(1,Math.floor(t/2))}function sa(e){if(zr.h=K.player.z,K.state!==`play`||K.paused||K.drop!=null||!K.player.alive)return;let t=K.dropKind,n=c[t].cost;if(K.lockCharge<n){Kr(K.player.x,K.player.y+60,U(`floater.gaugeNeed`,{n}),N.dim);return}let r=c[t].at===`bar`?F.bar:F.beat,i=Math.ceil(K.gstep/r)*r,a=e(Math.floor(i/F.bar));if(a.type!==`sector`&&a.type!==`boss`)return;K.lockCharge-=n,K.drop={kind:t,g:i,len:r};let o=K.t0+i*F.s16,s=z.ac.currentTime;zt(`riser`,s,Math.max(.2,o-s)),Kr(K.player.x,K.player.y+60,U(`floater.dropReady`,{kind:t}),N.player)}function ca(e=`CLEAR`){zr.h=K.player.z;let t=K.player;if(e===`CLEAR`){let e=K.ebul.length;for(let e of K.ebul)Gr(e.x,e.y,N.player,.5,2,90);K.ebul=[],t.inv=Math.max(t.inv,8*F.s16+.1);for(let e of[...K.enemies])e.hp>0&&e.y>-20&&(ua(e,b.DROP_ENEMY_DMG),e.flash=.1,e.hp<=0&&fa(e));K.boss&&K.boss.vuln&&pa(b.DROP_BOSS_DMG,!1),e&&Zr(e),K.flash=.8,K.flashCol=N.white,K.shake=20,K.warp=1,qr(U(`callout.drop`),U(`callout.dropSub`,{n:e}),N.player,1.2)}else if(e===`BURST`||e===`ABSORB`){let n=c[e].radius**2,r=K.ebul.filter(e=>L(e.x,e.y,t.x,t.y)+Te(e,t)<n);K.ebul=K.ebul.filter(e=>!r.includes(e));for(let t of r)zr.h=t.z??0,Gr(t.x,t.y,e===`BURST`?N.player:N.warn,.4,2,70);if(zr.h=t.z,Gr(t.x,t.y,e===`BURST`?N.player:N.warn,.45,12,c[e].radius*2.2),e===`ABSORB`){let e=r.length*c.ABSORB.gain;K.lockCharge=Math.min(Ir(),K.lockCharge+e),qr(U(`callout.absorb`),U(`callout.absorbSub`,{n:r.length}),N.warn,.8)}else t.inv=Math.max(t.inv,F.beat*F.s16),qr(U(`callout.burst`),U(`callout.burstSub`,{n:r.length}),N.player,.8);K.flash=.3,K.flashCol=e===`BURST`?N.player:N.warn,K.shake=Math.max(K.shake,8)}else K.freezeUntil=(K.drop?.g??0)+(K.drop?.len??F.bar),K.flash=.4,K.flashCol=N.player,qr(U(`callout.freeze`),U(`callout.freezeSub`,{n:K.ebul.length}),N.player,1)}function la(e,t,n){K.stage.range&&(K.dmgLog.push({t:K.now,d:e,raw:t,armored:n}),K.dmgLog.length>2e3&&K.dmgLog.splice(0,1e3))}function ua(e,t,n=0){let r=(e.armor??0)*(1-n),i=tr(t,r);if(e.hp-=i,la(i,t,(e.armor??0)>0),r>0){let t=Xn(z.ac.currentTime,K.t0,F.s16);K.tinkK!==t.k&&(K.tinkK=t.k,zt(`armorTink`,t.t,u.TINK_NOTE),zr.h=e.z??0,Wr(e.x,e.y,N.white,u.SPARKS,220))}return i}var da={spinner:N.accent,carrier:N.white,seg:N.accent,bastion:N.warn,splitter:N.accent,mine:N.warn};function fa(e,t=1){zr.h=e.z??0,e.hp=0,K.kills++,Zr(1),K.score+=Math.round(e.score*t*(1+Math.min(K.combo,100)/100)),Wr(e.x,e.y,da[e.type]||N.enemy,e.type===`bastion`?40:e.type===`drone`?14:20,e.type===`bastion`?480:320);let n=!!K.stage.tutorial;if(e.type===`carrier`)xi()?Di(e.x,e.y):gi(e.x,e.y,!0);else if(e.type===`spinner`)Kt.next()<b.DROP_SPINNER&&gi(e.x,e.y,!0);else if(e.type===`bastion`)Kt.next()<b.DROP_BASTION&&gi(e.x,e.y,!0);else if(e.type===`splitter`)for(let t=0;t<3;t++){let n=-Math.PI/2+(t-1)*.9+Math.PI;ti(e.x,e.y,Math.cos(n)*170,Math.sin(n)*170+90,0,!0)}else e.type===`drone`&&!e.small&&Kt.next()<(n?b.DROP_DRONE_TUT:b.DROP_DRONE)&&gi(e.x,e.y,!1);let r=6+(K.combo-1)%8;t===1&&Ur((e,t)=>zt(`killNote`,e,K.song.scale[Math.min(15,r+t*2)],.9))}function pa(e,t=!0){let n=K.boss;if(zr.h=n?.z??0,!n||!n.vuln||n.hp<=0||n.dying)return;t&&n.counterUntil>K.now&&(e*=b.COUNTER_MULT,n.counterHit||(n.counterHit=!0,K.counters++,Ur((e,t)=>{t||zt(`counterSfx`,e,K.song.scale[11])}),Kr(n.x,n.y-n.r-20,U(`floater.counter`),N.lime),Wr(n.x,n.y,N.lime,16,300))),n.hp-=e,la(e,e,!1),n.flash=.06,K.score+=Math.round(e*10);let r=Math.max(0,Math.ceil(n.hp/n.max*32));if(r<n.seg){n.seg=r;let e=Xn(z.ac.currentTime,K.t0,F.s16);n.tickK!==e.k&&(n.tickK=e.k,zt(`hpTick`,e.t,K.song.scale[Math.min(15,r>>1)]));let t=n.segLog??=[];t.length&&t[t.length-1].k===e.k?t[t.length-1].seg=r:t.push({k:e.k,seg:r}),t.length>64&&t.splice(0,t.length-64)}if(!K.bossPhase2&&n.hp<n.max/2){K.bossPhase2=!0,n.morph=0;let e=Se(n.cfg.col2,N.enemy);qr(U(`bosses.${n.cfg.id}.name`),U(`callout.phase2`,{ph2:U(`bosses.${n.cfg.id}.ph2name`)}),e,2),K.warp=1,K.flash=.5,K.flashCol=Se(n.cfg.col2,N.white),K.shake=16;for(let e=0;e<3;e++)Gr(n.x,n.y,e?Se(n.cfg.inner):N.white,.7,n.r*.6+e*16,300+e*120);Wr(n.x,n.y,Se(n.cfg.inner),40,520),Ur(e=>{zt(`bigBoom`,e),zt(`crash`,e)})}n.hp<=0&&ma()}function ma(){let e=K.boss;zr.h=e.z??0,K.lastWord={text:U(`lastWords.${e.cfg.id}`),t0:K.now},qi(`bossDown`),e.dying=!0,e.hp=0,e.cracks=[],K.deathLook=e.cfg.look;for(let e of K.enemies)Wr(e.x,e.y,N.enemy,8);K.enemies=[],K.ebul=[];for(let e of K.locks)e.e.lockN=0;K.locks=[],K.aoes=[],K.obstacles=[],K.drop=null,K.freezeUntil=0,K.score+=D.BOSS_CLEAR_SCORE,K.flash=.7,K.flashCol=N.white,K.shake=22,K.warp=1,Wr(e.x,e.y,N.white,30,520),K.outTr=K.song.btr+ +!!K.ph2Music,K.outroBar=Math.floor(K.gstep/F.bar)+2,K.clearBar=K.outroBar+4,K.outroSec={type:`outro`,start:K.outroBar,bars:6,E:0},qr(U(`callout.break`),``,N.white,1)}function ha(t){zr.h=K.player.z;let n=K.player;if(n.inv>0||!n.alive)return;let r=z.ac.currentTime;it(r),z.glitch(r,1.4+t/30),K.noiseT=K.noiseMax=1.2+t/30,K.flash=.45,K.flashCol=N.enemy,K.shake=14,Wr(n.x,n.y,N.player,18),K.ebul=K.ebul.filter(e=>L(e.x,e.y,n.x,n.y)+Te(e,n)>x.CLEAR_RADIUS*x.CLEAR_RADIUS),n.inv=b.INVULN,K.stage.tutorial&&Jr(`damage`,{label:U(`tipLabel.damage`),h:U(`tips.damage.h`),l:Qt(`tips.damage.l`)},3),!K.invincible&&(n.hp=Math.max(0,n.hp-t),!K.opLow&&n.hp>0&&n.hp/n.maxHp<p.LOW_HP&&(K.opLow=!0,qi(`lowHp`)),K.hits++,Kr(n.x,n.y-40,U(`floater.damage`,{n:t}),N.enemy),wi(),Qr(),Yr(),n.hp<=0&&(n.alive=!1,Wr(n.x,n.y,N.player,40,600),K.noiseT=K.noiseMax=3,z.glitch(r,3),K.locks=[],K.gameOverAt=K.now+e.GAME_OVER_DELAY_SEC))}function ga(e){zr.h=K.player.z;let t=K.player,n=K.song.scale;e.kind===`heal`?(t.hp=Math.min(t.maxHp,t.hp+e.v),Kr(t.x,t.y-40,U(`floater.heal`,{n:e.v}),N.heal),Gr(t.x,t.y,N.heal,.4,10,180),Ur((e,t)=>{t||ut(e,n[10],n[12],F.s16)})):ki(e),Yr()}function _a(e,t){let n=F.beat;for(let r=e+n/2;r<t;r+=n)tt(K.t0+r*F.s16,t-r<=n?81:76)}function va(e){let t={...e,dmg:e.dmg||O.DMG[e.kind]};K.aoes.push(t),_a(t.c,t.d);let n=t.e!=null,r=(n?`B`:`P`)+t.d;if(!K.blastSet.has(r)){K.blastSet.add(r);let e=K.t0+t.d*F.s16;n?rt(e,(t.e-t.d)*F.s16):(nt(e),t.kind===`safe`&&ot(e))}}function ya(){let e=K.player;return K.rail?{rail:!0,px:e.x,py:Nr(e.z),fh:Mr,lo:()=>s.AOE_EDGE,hi:Mr-s.AOE_EDGE}:{rail:!1,px:e.x,py:e.y,fh:G,lo:e=>e,hi:Ar}}var ba={beam:4,blast:8};function xa(e){let t=Math.floor(e/F.bar),n=null;for(let e of K.sections)t>=e.start&&(n=e);return Bn(n)}function Sa(e){let t=K.player;return e.rail?[t.x,Nr(t.z)]:[t.x,t.y]}function Ca(e,t,n){return e.rail?[t,jr,Pr(n)]:[t,n,0]}function wa(e,t,n={}){let r=ya(),i=e=>{let t=(e.e==null?e.d+ba.blast:e.e+ba.beam)+Math.ceil(o.MORPH_BAR_FRAC*F.bar);xa(e.d)===r.rail&&xa(t)===r.rail&&va(r.rail?{...e,rail:!0}:e)},{px:a,py:c}=r,l=a<W/2?1:-1,u=K.boss,d=O.SHAPE;switch(e){case`circle`:{let o=d.circle,s=n.tele||o.tele;i({kind:e,x:I(a,o.edge,W-o.edge),y:I(c,r.lo(o.minY),r.hi),r:o.r,c:t,d:t+s});for(let u=1;u<=(n.extra||0);u++)i({kind:e,x:I(a+l*o.extraDx[u===1?0:1],o.edge,W-o.edge),y:I(c-o.extraDy*u,r.lo(o.minY),r.hi),r:o.extraR,c:t,d:t+s});break}case`lane`:{let r=d.lane;i({kind:e,x:I(a,r.edge,W-r.edge),w:r.w,c:t,d:t+r.tele,e:t+r.end}),n.extra&&i({kind:e,x:I(a+l*qt(r.extraDx[0],r.extraDx[1]),r.extraEdge,W-r.extraEdge),w:r.extraW,c:t,d:t+r.tele,e:t+r.end});break}case`safe`:{let n=d.safe,a=r.rail?qt(r.lo(0),r.hi):qt(G*n.minYFrac,Ar-n.bottomPad);i({kind:e,x:qt(n.edgeX,W-n.edgeX),y:a,r:n.r,c:t,d:t+n.tele});break}case`row`:{let a=d.row;i({kind:e,y:I(c,r.lo(a.minY),r.hi),h:a.h,c:t,d:t+a.tele,e:t+a.end}),n.extra&&i({kind:e,y:I(r.rail?c+(c<r.fh/2?1:-1)*s.AOE_ROW_EXTRA:c-a.extraDy,r.lo(a.minY),r.hi),h:a.extraH,c:t,d:t+a.tele,e:t+a.end});break}case`chase`:i({kind:e,x:a,y:c,r:d.chase.r,c:t,lock:t+d.chase.lock,d:t+d.chase.tele});break;case`donut`:i({kind:e,x:a,y:c,r1:d.donut.r1,r2:d.donut.r2,c:t,d:t+d.donut.tele});break;case`chain`:{let e=d.chain,n=qt(0,Math.PI*2);for(let o=0;o<e.n;o++){let s=(o-(e.n-1)/2)*e.gap;i({kind:`circle`,chain:!0,x:I(a+Math.cos(n)*s,e.edge,W-e.edge),y:I(c+Math.sin(n)*s,r.lo(e.minY),r.hi),r:e.r,c:t,d:t+e.tele+o*e.stepPer,dmg:O.DMG.chain})}break}case`cone`:{let n=d.cone,o=u?u.x:qt(n.edgeX,W-n.edgeX),s=u?r.rail?Nr(u.z??0):u.y:n.topY;i({kind:e,ox:o,oy:s,ang:Math.atan2(c-s,a-o),hw:n.hw,len:n.len,c:t,d:t+n.tele,e:t+n.end});break}case`checker`:i({kind:e,par:Kt.int(2),c:t,d:t+d.checker.tele});break;case`wall`:{let n=d.wall,o=I(a+l*qt(n.dx[0],n.dx[1]),n.edge,W-n.edge);if(r.rail){let a=s.WALL_GAP_H,l=I(c+(c<r.fh/2?1:-1)*qt(s.WALL_DZ[0],s.WALL_DZ[1]),a/2,r.fh-a/2);i({kind:e,gx:o,gw:n.gw,gy:l,gh:a,c:t,d:t+n.tele,e:t+n.end})}else i({kind:e,gx:o,gw:n.gw,c:t,d:t+n.tele,e:t+n.end});break}}}function Ta(e,t){let n=wn.indexOf(e);if(n<0||(K.stage.endless?Pn[n]===K.song:n>=K.stage.idx))return;let r=Pn[n],i=K.song,a=K.t0+(t+F.beat)*F.s16;for(let e of r.lead){if(e[0]>=8)continue;let t=0,n=99;r.scale.forEach((r,i)=>{let a=Math.abs(r-e[1]);a<n&&(n=a,t=i)});let o=i.scale[t];for(;o<62;)o+=12;for(;o>86;)o-=12;zt(`lead`,a+e[0]*F.s16,o,e[2]*F.s16*.9,r.leadType,z.echoBus)}K.floaters.push({x:W/2,y:228,text:U(`floater.echo`,{name:U(`songs.${r.id}.name`)}),col:N.dim,life:1.4})}function Ea(e){if(K.tipped[`aoe_`+e])return;K.tipped[`aoe_`+e]=!0;let t=Qt(`aoe.${e}`);K.tipTemp={label:U(`tipLabel.newAoe`),h:t[0],l:[t[1],U(`tipLabel.newAoeLine`)],until:K.now+F.s16*40}}function Da(e,t,n){switch(e.kind){case`circle`:case`chase`:return L(t,n,e.x,e.y)<e.r*e.r;case`safe`:return L(t,n,e.x,e.y)>e.r*e.r;case`donut`:{let r=L(t,n,e.x,e.y);return r>e.r1*e.r1&&r<e.r2*e.r2}case`lane`:return Math.abs(t-e.x)<e.w/2-O.BAND_HIT_PAD;case`row`:return Math.abs(n-e.y)<e.h/2-O.BAND_HIT_PAD;case`cone`:{let r=Math.atan2(n-e.oy,t-e.ox)-e.ang;return Math.abs(Math.atan2(Math.sin(r),Math.cos(r)))<e.hw&&L(t,n,e.ox,e.oy)<e.len*e.len}case`checker`:{let[r,i]=ka(e);return(Math.floor(t/(W/r))+Math.floor(n/(Oa(e)/i)))%2===e.par}}return!1}var Oa=e=>e.rail?Mr:G,ka=e=>e.rail?s.AOE_CHECKER_GRID:O.CHECKER_GRID,Aa=e=>e.d-(e.rail?s.WALL_HIT_BEATS*F.beat:O.SHAPE.wall.approach);function ja(e,t){if(e.rail){let n=s.WALL_HIT_BEATS*F.beat;return jr+(t-e.d)/n*s.WALL_FAR}let n=O.SHAPE.wall,r=e.ay!==void 0&&t>=e.d?e.ay:K.player.y;return r+(t-e.d)/n.approach*(r-n.fromY)}function Ma(e){let t=K.player;return Math.abs(t.x-e.gx)>e.gw/2-10||!!e.rail&&Math.abs(Nr(t.z)-e.gy)>e.gh/2-10}var Na=[`circle`,`chase`,`safe`,`donut`,`checker`];function Pa(e){let t=K.player;if(e.kind===`wall`)e.ay=t.y,t.alive&&Ma(e)&&(e.hit=!0,ha(e.dmg));else{let[n,r]=Sa(e);t.alive&&Da(e,n,r)&&(e.hit=!0,ha(e.dmg))}if(Na.includes(e.kind)){if(e.kind===`safe`)K.flash=.6,K.flashCol=N.warn,K.shake=Math.max(K.shake,16);else if(e.kind===`circle`||e.kind===`chase`){let[t,n,r]=Ca(e,e.x,e.y);zr.h=r,Wr(t,n,N.warn,10,260),zr.h=0}K.shake=Math.max(K.shake,9)}}var Fa=e=>O.BUSY[e]||O.BUSY_DEFAULT;function Ia(e){let t=K.player,n=e+s.OBST_LEAD_BEATS*F.beat;if(!xa(n+F.beat+Math.ceil(o.MORPH_BAR_FRAC*F.bar)))return;let r=s.GRID_Z*2;if(K.obstN++%2==0){let e=I(t.x,a.PLAYER_MIN_X,W-a.PLAYER_MIN_X);K.obstacles.push({kind:`pillar`,x:e,z:0,w:s.OBST_PILLAR_W,h:r,hit:n})}else{let e=I(t.z,-s.Z_MAX,s.Z_MAX);K.obstacles.push({kind:`bar`,x:W/2,z:e,w:W,h:s.OBST_BAR_H,hit:n})}}var La=(e,t)=>jr+(t-e.hit)*F.s16*s.OBST_SPEED;function Ra(e,t,n,r,i,a=0){return Math.abs(r-La(e,t))<s.OBST_DEPTH/2+a&&Math.abs(n-e.x)<e.w/2+a&&Math.abs(i-e.z)<e.h/2+a}function za(e){if(!K.obstacles.length)return;let t=K.player;for(let n of K.obstacles){!n.done&&t.alive&&Ra(n,e,t.x,t.y,t.z,s.OBST_PAD)&&(n.done=!0,ha(s.OBST_DMG));for(let t of K.pbul)!t.dead&&Ra(n,e,t.x,t.y,t.z??0)&&(t.dead=!0,zr.h=t.z??0,Wr(t.x,t.y,N.dim,2,90),zr.h=0)}K.obstacles=K.obstacles.filter(t=>La(t,e)-s.OBST_DEPTH<jr+s.CAM_BACK)}var Ba=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],Va=[0,6,10],Ha={KICK:.85,BASS:.8,SNARE:0,HAT:.6,PAD:1,ARP:.7,LEAD:0},Ua=null,Wa=0,Ga=0,Ka=()=>60/_.BPM/4,qa=()=>Ua!==null;function Ja(e){if(Ua||!z.ready)return;Wa=e,Ga=0;let t=z.ac.currentTime;for(let[e,n]of Object.entries(Ha)){let r=z.layerGain(e);r.cancelScheduledValues(t),r.setValueAtTime(n,t)}z.hpLP.frequency.cancelScheduledValues(t),z.hpLP.frequency.setValueAtTime(18e3,t),Ua=setInterval(Qa,_.SCHED_MS),Qa()}function Ya(){Ua&&clearInterval(Ua),Ua=null}function Xa(e){return Ua?(e-Wa)/(Ka()*4):null}function Za(e){let t=Ka()*4;return Ua?Wa+Math.ceil((e+_.START_LEAD-Wa)/t)*t:e+_.START_LEAD}function Qa(){let e=z.ac.currentTime+_.LOOKAHEAD,t=Ka();for(;Wa+Ga*t<e;)$a(Ga,Wa+Ga*t),Ga++}function $a(e,t){let n=e%16,r=Ba[Math.floor(e/16)%Ba.length],i=e<16*Ba.length;n%4!=0||i&&n!==0||je(t,`soft`),n%4==2&&Ne(t,.55,!1,`soft`),Va.includes(n)&&Re(t,r[0]-24,Ka()*2,`sub`),n===0&&Ve(t,r,Ka()*16,.8,`strings`),ze(t,r[n%3]+12+(n>=8?12:0),n%4==0?.7:.4,`pluck`)}var eo=()=>{let e=K.stage.boss.callResp;return e===`always`||e===`ph2`&&K.bossPhase2};function to(e,t){if(e===0&&t===0){for(let e of K.enemies)Wr(e.x,e.y,N.enemy,8),K.score+=E.WARN_CLEAR_SCORE;for(let e of K.ebul)Gr(e.x,e.y,N.warn,.4,2,40);K.enemies=[],K.ebul=[];for(let e of K.locks)e.e.lockN=0;K.locks=[]}if(e>=1){let n=(e-1)*F.bar+t,r=Wn(K.stage.boss,F.s16),i=Gn(K.stage.boss,F.s16,F.bar);if(n===0){let e=K.stage.boss;K.boss={type:`boss`,cfg:e,x:W/2,y:E.START_Y,ty:E.TARGET_Y,hp:e.hp,max:e.hp,seg:32,vuln:!1,flash:0,rot:0,r:E.R,lockN:0,cap:E.LOCK_CAP,t:0,counterUntil:0},K.fillStart=K.curBar*F.bar+i,K.fillR=r}K.boss&&n>=i&&(K.boss.flash=.03)}}var no=()=>F.mid,ro=e=>e%(2*F.beat)===F.beat,io=T,ao={ring:(e,t,n,r,i)=>{t===0&&mi(e.x,e.y,io.ring.n+(i>>1)+(r?io.ring.hot:0),io.ring.speed+i*io.ring.speedPerLevel,n*io.ring.spin)},ring2:(e,t,n,r)=>{(t===0||t===no())&&mi(e.x,e.y,io.ring2.n+(r?io.ring2.hot:0),io.ring2.speeds[+!!t],n*io.ring2.spin+t*io.ring2.spinStep)},aimed:(e,t,n,r)=>{t===no()&&hi(e.x,e.y+io.aimed.dy,io.aimed.speed,r?io.aimed.hotN:io.aimed.n,io.aimed.spread)},spiral:(e,t,n,r)=>{if(t%2==0){let t=r?io.spiral.hotArms:io.spiral.arms;for(let n=0;n<t;n++)pi(e.x,e.y,K.spin+n*Math.PI*2/t,io.spiral.speed);K.spin+=io.spiral.turn}},fan:(e,t,n,r)=>{ro(t)&&hi(e.x,e.y+io.fan.dy,io.fan.speed,r?io.fan.hotN:io.fan.n,io.fan.spread)},wave:(e,t)=>{if(t%2==0){let t=Math.PI/2+Math.sin(K.time*io.wave.freq)*io.wave.swing;pi(e.x,e.y,t,io.wave.speed),pi(e.x,e.y,Math.PI-t,io.wave.speed)}},rain:(e,t,n,r)=>{if(t%2==0)for(let e=0;e<(r?io.rain.hotN:io.rain.n);e++)pi(qt(io.rain.edge,W-io.rain.edge),io.rain.y,Math.PI/2,io.rain.speed)},burst:(e,t,n)=>{n%2==0&&t%2==0&&t<io.burst.lastStep&&mi(e.x,e.y,io.burst.n,io.burst.speed+t*io.burst.speedStep,t*io.burst.spinStep)}},oo={ring:e=>e===0,ring2:e=>e===0||e===no(),aimed:e=>e===no(),fan:e=>ro(e)};function so(e){let t=F.bar;return t===16?[...e]:[...new Set(e.map(e=>Math.floor(e*t/16)))]}var co=[`safe`,`wall`,`checker`,`donut`];function lo(e,t,n){let r=K.boss;if(zr.h=r?.z??0,!r)return;let i=r.cfg;r.vuln||(r.vuln=!0,qr(U(`bosses.${i.id}.name`),U(`bosses.${i.id}.sub`),N.enemy,2));let a=K.bossPhase2,o=K.stage.idx,s=K.secObj,c=Vn(s,e),l=+!!c+ +!!a,u=eo(),d=u&&e%2==0,f=u&&e%2==1;if(t===0&&Hn(s,e)&&!u&&qr(U(`callout.chorus`),``,N.enemy,1),t===0&&(K.respPat=f&&K.callPat?[...K.callPat]:null),u){if(K.tipped.callresp||Jr(`callresp`,{label:U(`tipLabel.bossPattern`),h:U(`tips.callresp.h`),l:Qt(`tips.callresp.l`)},F.s16*48),d&&t===0&&(K.callPat=so(Dn[Kt.int(Dn.length)])),d&&K.callPat?.includes(t)){let e=K.song.scale[8+K.callPat.indexOf(t)%4];zt(`callTone`,K.t0+n*F.s16+.002,e),hi(r.x,r.y+io.call.dy,io.call.speed,io.call.n,io.call.spread),r.flash=.05}f&&K.callPat&&K.callPat.includes(t)&&(r.counterUntil=K.now+F.s16*1.3+K.lat+K.offset,r.counterHit=!1)}if(!f){let a=K.ebul.length;for(let n of i.moves)ao[n](r,t,e,l>=2,o);if(l>=1)for(let n of i.ph2)ao[n](r,t,e,l>=2,o);if(l>=2&&!i.ph2.includes(`burst`)&&ao.burst(r,t,e,!0,o),t%F.beat===0)for(let e=a;e<K.ebul.length;e++)K.ebul[e].acc=!0;let s=Math.max(1,Math.floor(F.beat/2)),c=(t+s)%F.bar;(l>=1?[...i.moves,...i.ph2]:i.moves).some(e=>oo[e]?.(c))&&(r.teleAt=n,r.fireAt=n+s)}e%2==1&&t===no()&&!f&&fi[i.summon](e);let p=u?e%2==0&&(a||e%4==0):a||c||e%2==1;if(t===0&&n>=K.aoeBusy&&p){let e=K.stage.bossPool,t=K.stage.bossAoe,r=e.filter(e=>e!==t),i=K.bossAoeN++%2==0||!r.length?t:r[Kt.int(r.length)];if(i===t&&Ea(t),wa(i,n,{extra:+(l>=2&&o>=2&&i===`circle`),tele:K.stage.tutorial&&!a?16:0}),K.aoeBusy=n+Fa(i),l>=2&&o>=4&&!co.includes(i)){let t=e.filter(e=>!co.includes(e)&&e!==i);t.length&&wa(t[Kt.int(t.length)],n)}}zr.h=0}function uo(e,t){let n=K.boss;zr.h=n.z??0;let r=e===K.outroBar-1,i=wt(n.cfg.look).pat[+!!r];if(i[t%i.length]===`x`){let e=qt(0,Math.PI*2),i=qt(10,n.r*1.1);Wr(n.x+Math.cos(e)*i,n.y+Math.sin(e)*i,t%4?N.warn:N.white,14,300),n.cracks.push(qt(0,Math.PI*2)),n.flash=.06,K.shake=Math.max(K.shake,r?14:8)}}function fo(e,t){if(zr.h=0,K.rail&&e.vuln&&!e.dying){let n=Math.sin(e.t*s.BOSS_Z_FREQ)*s.BOSS_Z_AMP;e.z=(e.z??0)+(n-(e.z??0))*Math.min(1,t*s.BOSS_FOLLOW_Z)}else if(e.z!==void 0&&!K.rail){let n=s.SETTLE_SPEED*t;e.z=Math.abs(e.z)<=n?void 0:e.z-Math.sign(e.z)*n}e.t+=t,e.rot+=t*(K.bossPhase2?E.SPIN_PH2:E.SPIN)*(e.dying?E.SPIN_DYING:1),e.flash=Math.max(0,e.flash-t),e.morph!=null&&e.morph<1&&(e.morph=Math.min(1,e.morph+t/E.MORPH_SEC)),e.y+=(e.ty-e.y)*Math.min(1,t*E.FOLLOW_Y),e.vuln&&(e.x+=(W/2+Math.sin(e.t*E.SWAY_FREQ)*E.SWAY_X-e.x)*Math.min(1,t*E.FOLLOW_X))}function po(e){if(K.outroBar!=null&&e>=K.outroBar)return K.outroSec;let t=K.sections;for(let n=t.length-1;n>=0;n--)if(e>=t[n].start)return t[n];return t[0]}function mo(e,t,n){let r=e.length;for(let i=1;i<=r;i++)if(e[(t+i)%r]!==`.`)return Math.min(i,n)*F.s16*.9;return n*F.s16}function ho(e,t){let n=F.s16,r=F.bar,i=F.beat,a=F.mid,o=Math.floor(e/r),s=e%r,c=po(o),l=o-c.start,u=K.drop,d=u&&e>=u.g&&e<u.g+u.len&&(c.type===`sector`||c.type===`boss`)?e-u.g:-1,f=d>=0,p=c.type===`boss`&&!(K.boss&&K.boss.dying)&&!f,m=!1;p&&s===0&&K.bossPhase2&&!K.ph2Music&&(K.ph2Music=!0,m=!0);let h=c.type===`boss`&&c.parts?c.parts[l%c.parts.length]:void 0,g=An(K.song,[c.variant,h,c.type===`boss`&&K.ph2Music&&`phase2`]),_=g.su||1,v=t+(g.swing&&s%(2*_)===_?g.swing*_*n:0),y={},b=g.kit,x=0,S=0,C=l%g.prog.length,w=0,T=e=>{zt(`kick`,v,K.heart&&!e?`heart-${K.kit.heart}`:e||b[0]),y.KICK=1,x=1},E=(e=1)=>{zt(`snare`,v,e,b[1]),y.SNARE=1,e>.5&&(S=1)},D=(e=1,t=!1)=>{zt(`hat`,v,e,t,b[2]),y.HAT=1},O=(e,t)=>{zt(`bass`,v,e,t,g.bassType),y.BASS=1},ee=(e,t,n)=>{zt(`pad`,v,e,t,n,g.padType),y.PAD=1},k=(e,t,n)=>{zt(`arp`,v,e,t,g.arpType,n),n?y.PAD=1:y.ARP=1},te=(e,t)=>{zt(`lead`,v,e,t,g.leadType),y.LEAD=1},ne=e=>{zt(`stab`,v,e,g.stabType),y.ARP=1},A=(e,t,o)=>{let c=g.prog[C].map(e=>e+w),u=g.padType===`rhodes`;if((s===0||u&&s===a)&&ee(c,n*(u?s===0?a:r-a:r),e>=3?.45:.6),(g.kick[s]===`x`||t&&K.ph2Music&&s===r-2)&&T(),e>=2){let e=g.snare[s];e===`x`?E():e===`g`&&E(.28)}let d=g.hat[s];if(d===`.`?e>=3&&g.hat16[s]===`x`&&D(.35):D(1,d===`X`),g.perc&&e>=2&&g.perc[s]===`x`&&(zt(`taiko`,v),y.KICK=1),g.bassWalk)s%i===0&&O(qn(g,C,s/i,F.beats)+w,n*i*.85);else if(g.bassNotes){let e=g.bassNotes.get(l%g.bassLoop*r+s);e&&O(e[1]+w,Math.min(e[2],g.bassMax)*n*.95)}else{let n=t?g.bossBass:g.bassP,r=n[s];r!==`.`&&(e>=2||r===`x`)&&O(g.roots[C]+w+(r===`o`?12:0),mo(n,s,g.bassMax))}let f=g.arpEvery||1;if(g.arpNotes){let e=g.arpNotes.get(l%g.arpLoop*r+s);e&&k(e[1]+w,t?1:.8)}else if((e>=2||s%2==0)&&s%f===0&&g.arp){let n=g.arp[s%g.arp.length]%c.length;k(c[n]+g.arpOct+(e>=3&&s>=a||t&&K.ph2Music&&s%2==1?12:0),t?1:.8)}if(e>=2){let e=g.leadMap.get(l%g.leadLoop*r+s);e&&te(e[1]+w,e[2]*n*.95)}return o&&(K.ph2Music?g.stab2:g.stab).includes(s)&&ne(c),c},re=g.prog[C];if(f&&u.kind===`CLEAR`)d===0&&(zt(`bigBoom`,v),zt(`crash`,v)),d>=a&&(E(.3+(d-a)*.09),(d-a)%i===0&&T());else if(f&&u.kind===`FREEZE`){d===0&&zt(`crash`,v);let e=r-i;d>=e&&(E(.35+(d-e)*.15),d===e&&T())}else if(f){let e=Math.max(1,Math.floor(i/2));d===0&&zt(`crash`,v),d>=e&&E(.4+(d-e)*.15)}else if(c.type===`intro`)s===0&&ee(re,n*r,.8),s%i===0&&k(re[s/i%re.length]+g.arpOct,.6,z.padBus),l>=1&&s%i===i/2&&D(.6),l===c.bars-1&&(s===0&&zt(`riser`,v,n*r),s>=r-4&&s%2==0&&T());else if(c.type===`sector`){let e=c.E,t=K.sections[K.sections.indexOf(c)+1],i=l===c.bars-1;re=A(e,!1,!1),s===0&&l===0&&zt(`crash`,v),i&&t&&(s===0&&t.type===`warn`&&zt(`riser`,v,n*r),s>=r-4&&E(.35+(s-(r-4))*.15))}else if(c.type===`warn`){let e=g.roots[0];if(l===0)s===0&&(ee([e+12,e+19,e+24],n*r,.5),at(v)),s===a&&at(v),(s===0||s===3||s===a||s===a+3)&&T(`soft`);else{let e=(l-1)*r+s,t=K.stage.boss,a=Wn(t,n),o=Gn(t,n,r);if(e===0&&(zt(`riser`,v,n*r*2),ee(g.prog[0],n*r*2,.7)),e>=o)for(let r=0;r<a;r++)zt(`hpTick`,v+r*n/a,Kn(g,t.fillStyle,(e-o)*a+r));(l===1?s%i===0:s%2==0||s>=r-4)&&E(.3+e*16/r/45),l===2&&s%i===0&&T()}}else if(c.type===`boss`&&K.boss&&K.boss.dying){w=K.outTr;let e=o===K.outroBar-1;s===0&&ee(g.prog[0].map(e=>e+w),n*r,.5),e&&s===0&&zt(`riser`,v,n*r);let t=K.boss.cfg.look,i=wt(t),c=i.pat[+!!e],l=s%c.length;if(c[l]===`x`){let n=(e?8:0)+c.slice(0,l).split(`x`).length-1;zt(`deathPop`,v,t,Tt(i.dir,n,g.scale)+w,n)}e&&s===a&&i.pre&&zt(`implode`,v+(r-a)*n)}else if(c.type===`boss`){w=g.btr+ +!!K.ph2Music;let e=Vn(c,l);s===0&&(l===0||m||Hn(c,l))&&(zt(`crash`,v),l===0&&zt(`bigBoom`,v)),re=A(3,!0,e)}else c.type===`outro`&&(w=K.outTr,l===0&&s===0&&(zt(`crash`,v),zt(`finale`,v,K.deathLook,g.prog[0].map(e=>e+w)),ee(g.prog[0].map(e=>e+w).concat([g.prog[0][0]+w+12]),n*r*4,1.1)),l<4&&s%2==0&&k(g.scale[15-(l*8+s/2)%16]+w,.6*(1-l/4),z.padBus));if(K.firing&&K.player.alive&&c.type!==`outro`){let n=ta(s,e);n&&Ke(t,K.kit.timbre,n,re,K.heat>=j.HEAT.WARN)}return{g:e,t,bar:o,s,sec:c,lb:l,k:x,sn:S,hit:y,keyUp:m}}var go=null;function _o(){if(z.ready&&K.state===`play`&&!K.paused)for(;K.nextT<z.ac.currentTime+e.SCHED_LOOKAHEAD_SEC;)K.queue.push(ho(K.gstep,K.nextT)),K.nextT+=F.s16,K.gstep++}function vo(){K.t0=z.ac.currentTime+e.SONG_START_DELAY_SEC,K.nextT=K.t0,K.gstep=0,K.queue=[],yo(),go=setInterval(_o,e.SCHED_INTERVAL_MS),_o()}function yo(){go&&clearInterval(go),go=null}var bo=null;function xo(e){bo=e}function So(e,t,n){let r=K.player;if(e===`retry`&&K.snap){let e=xr(t||wr[Math.max(0,K.snap.weapon)]);return{kit:e,carry:{...K.snap,hp:e.maxHp,maxHp:e.maxHp}}}if(e===`next`&&r){let e=t?-1:Math.max(0,r.weapon),n=xr(t||wr[e]);return{kit:n,carry:{hp:Math.min(n.maxHp,Math.max(1,Math.round(r.hp/r.maxHp*n.maxHp)+b.STAGE_HEAL)),maxHp:n.maxHp,weapon:e,level:t?1:r.level,score:K.score}}}let i=xr(t||wr[0]);return{kit:i,carry:{hp:i.maxHp,maxHp:i.maxHp,weapon:t?-1:0,level:t?1:Si(n),score:0}}}var Co=null;function wo(e,t,n){if(!bo)throw Error(`flow: hooks not set`);bo.ensureAudio(),Eo(),Co={i:e,override:n},Ut(!1);let r=bo.readSettings(),i=!!n?.range,a=i?2:e===`ex`||n?1:r.round??1,o=n??(e===`ex`?Ai(1,0,-1):a===2?zn(e):In[e]),s=a===2&&r.build?r.build:null,c=e===`ex`?So(`new`,null,0):So(t,s,e),l=e===`ex`?{...ji(),hp:c.kit.maxHp,maxHp:c.kit.maxHp}:c.carry;K.kit=c.kit,K.stageIdx=e===`ex`?o.idx:e,K.stage=o,K.song=o.song,F.set(o.bpm||o.song.bpm,o.song.meter),K.snap={...l},K.invincible=r.invincible||i,K.dropKind=K.kit.drop,K.spd=r.spd,K.offset=r.offsetSec,K.lat=z.latency(),Lr(l,Un(o)),K.round=a,K.codename=r.codename??``,Rt.reset(),Rt.enabled=!0,Ge(),z.resetFx(),Yr(!0),K.firing=bo.isFireHeld(),vo(),bo.onStart()}function To(e){if(K.state!==`play`)return;K.state=`result`,Rt.enabled=!1,yo(),K.queue=[],K.gameOverAt=null,z.rampMaster(e?.6:1e-4,e?2:.6),K.firing=!1,K.locking=!1,K.comm=null,K.commNext=null;let t=K.stageIdx>=In.length-1,n=!!K.stage.endless;bo?.onResult({clear:e,last:t,endless:n,ending:e&&t&&!n&&K.round===1})}function Eo(){K.paused&&(K.paused=!1,K.firing=!1,K.locking=!1,z.ready&&z.ac.resume(),bo?.onPause(!1))}function Do(){if(K.state!==`play`||!Co)return;let{i:e,override:t}=Co;e===`ex`?wo(`ex`,`new`):wo(e,`retry`,t)}function Oo(){Eo(),Ut(!1),yo(),K.state=`title`,K.secObj=null,z.ready&&z.muteMaster(),bo?.onTitle()}function ko(){K.stage.range&&(Ut(!1),yo(),K.state=`title`,K.secObj=null,K.firing=!1,K.locking=!1,z.ready&&z.muteMaster(),bo?.onRangeExit?.())}function Ao(e){K.state===`play`&&z.ready&&(K.paused=e,e?(z.ac.suspend(),K.firing=!1):(z.ac.resume(),K.firing=bo?.isFireHeld()??!1),bo?.onPause(e))}function jo(){let e=[];return K.player&&e.push(K.player),K.boss&&e.push(K.boss),[e,K.enemies,K.ebul,K.pbul,K.items,K.parts,K.floaters,K.aoes,Yo]}function Mo(){for(let e of jo())for(let t of e)t.px=t.x,t.py=t.y,t.z!==void 0&&(t.pz=t.z)}var No=[],Po=[],Fo=[],Io=[];function Lo(t,n){let r=e.INTERP_TELEPORT_PX;if(t<1)for(let e of jo())for(let n of e){if(n.px===void 0||n.py===void 0||typeof n.x!=`number`)continue;n.z!==void 0&&n.pz!==void 0&&n.z!==n.pz&&Math.abs(n.z-n.pz)<=r&&(Po.push(n),Fo.push(n.z),n.z=n.pz+(n.z-n.pz)*t);let e=n.x-n.px,i=n.y-n.py;e===0&&i===0||Math.abs(e)>r||Math.abs(i)>r||(Io.push(n),No.push(n.x,n.y),n.x=n.px+e*t,n.y=n.py+i*t)}try{n()}finally{for(let e=0;e<Io.length;e++)Io[e].x=No[e*2],Io[e].y=No[e*2+1];Io.length=0,No.length=0;for(let e=0;e<Po.length;e++)Po[e].z=Fo[e];Po.length=0,Fo.length=0}}var Ro=(e,t)=>({label:t,h:U(`tips.${e}.h`),l:Qt(`tips.${e}.l`)});function zo(e){K.warp=1;let t=K.stage,n=!!t.tutorial,r=U(`songs.${t.song.id}.name`),i=U(`songs.${t.song.id}.genre`);if(e.type===`intro`&&t.endless)qr(U(`callout.round`,{n:t.round}),U(`callout.roundSub`,{bpm:t.bpm,name:r,genre:i}),N.warn,2.6),K.tipBase=null;else if(e.type===`intro`&&t.range)qr(U(`callout.range`),U(`callout.roundSub`,{bpm:t.bpm||t.song.bpm,name:r,genre:i}),N.player,2.4),K.tipBase=null;else if(e.type===`intro`)qr(U(`callout.stage`,{n:K.stageIdx+1}),U(`callout.stageSub`,{name:r,genre:i}),N.player,2.8),qi(`start`,{n:K.stageIdx+1}),K.tipBase=n?Ro(`intro`,U(`tipLabel.tutorial`)):null,t.newEnemy&&Jr(`enemy`,{label:U(`tipLabel.newEnemy`),h:U(`enemies.${t.newEnemy}`),l:[U(`tipLabel.newEnemyLine`)]},4);else if(e.type===`sector`&&t.range)K.tipBase=null;else if(e.type===`sector`){let t=U(`callout.sector`,{n:String(e.n).padStart(2,`0`)});qr(t,n?U(`tips.${e.k}.h`):Qt(`sectionNames`)[e.n-1],e.E>=3?N.accent:N.player),K.tipBase=n?Ro(e.k,U(`tipLabel.sector`,{sector:t})):null}else if(e.type===`warn`)qr(U(`callout.warning`),U(`callout.warningSub`,{boss:U(`bosses.${t.boss.id}.name`)}),N.warn,3.2),qi(`warn`),K.tipBase=null;else if(e.type===`boss`)K.tipBase=n?{...Ro(`boss`,U(`tipLabel.boss`)),until:K.now+F.s16*48}:null;else if(e.type===`outro`){let e=K.boss;if(e){let t=N[e.cfg.inner]||N.warn;for(let n=0;n<6;n++)Gr(e.x,e.y,n%2?N.white:t,1.2,20+n*20,420+n*90);for(let n=0;n<4;n++)Wr(e.x+qt(-40,40),e.y+qt(-40,40),[N.white,N.warn,N.enemy,t][n],40,700)}K.boss=null,K.flash=1,K.flashCol=N.white,K.shake=30,K.warp=1,qr(U(`callout.destroyed`),K.stage.endless?U(`callout.destroyedExSub`):``,N.player,3),K.tipBase=null,K.tipTemp=null}}function Bo(e,t,n,r){n===0&&fi[e.mix[t%e.mix.length]](t),n===F.mid&&t%2==1&&fi[e.sub](t+1),e.carrier.includes(t)&&n===F.beat&&ri(t%2==0);let i=K.stage.pool,a=K.stage.idx;if(!K.stage.range){if(e.aoe&&i.length&&n===0&&r>=K.aoeBusy&&(e.aoe===2||t%2==1)){let e=K.aoeN++%3==0?i[i.length-1]:i[Kt.int(i.length)];wa(e,r,{extra:+(e===`circle`&&a>=4||e===`lane`&&a>=3||e===`row`&&a>=6)}),Ta(e,r),K.aoeBusy=r+Fa(e)}K.rail&&e.obstacle&&n===0&&(e.obstacle===2||t%2==1)&&Ia(r)}}function Vo(e,t,n){if(t.type!==`sector`&&t.type!==`boss`||K.stage.range)return;let r=K.stage,i=!!r.tutorial;for(let e of K.enemies)e.fireAt!=null&&(e.fireAt<n?e.fireAt=e.teleAt=void 0:e.fireAt===n&&(e.fireAt=e.teleAt=void 0,!(e.hp<=0||e.dead)&&(zr.h=e.z??0,e.type===`drone`?hi(e.x,e.y,230):e.type===`spinner`?mi(e.x,e.y,i?8:10,170,e.t*1.3):e.type===`bastion`?hi(e.x,e.y+20,200,5,.18):e.type===`mine`?(e.dead=!0,mi(e.x,e.y,w.mine.ringN,w.mine.ringSpeed,qt(0,1)),Wr(e.x,e.y,N.warn,10,200)):e.type===`lancer`&&(e.dash=!0))));let a=t.type===`boss`?w.FIRE_PROB_BOSS:i?t.k===`evade`?w.FIRE_PROB_TUT_EVADE:t.k===`shoot`||t.k===`lock`?w.FIRE_PROB_TUT_EASY:w.FIRE_PROB_TUT:w.FIRE_PROB_SECTOR+r.idx*w.FIRE_PROB_PER_STAGE,o=Math.max(1,Math.floor(F.beat/2)),s=(e+o)%F.bar;if(s%F.beat!==0)return;let c=e=>{e.teleAt=n,e.fireAt=n+o},l=K.player;for(let e of K.enemies)e.fireAt!=null||e.hp<=0||e.dead||(e.type===`mine`?e.ripe&&c(e):e.type===`lancer`?!e.dash&&e.ang==null&&e.t>=w.lancer.enterSec&&(e.ang=Math.atan2(l.y-e.y,l.x-e.x),c(e)):e.y<40||e.y>G*.6||(e.type===`drone`&&!e.small&&(s===F.mid||r.d>1.2&&s===0)&&Kt.next()<a||e.type===`spinner`&&(s===0||s===F.mid)&&e.t>.6||e.type===`bastion`&&(s===0||s===F.mid)&&e.t>1)&&c(e));zr.h=0}function Ho(e){let{g:t,bar:n,s:r,sec:i,lb:a}=e;K.curBar=n,K.curS=r,i!==K.secObj&&(K.secObj=i,K.rail=Bn(i),zo(i)),zr.h=0,e.k&&(K.kickP=1),e.sn&&(K.snP=1);for(let t in e.hit)K.meter[t]=1;e.keyUp&&(K.warp=1,K.flash=.35,K.flashCol=N.warn,qr(U(`callout.keyUp`),U(`callout.keyUpSub`),N.warn,1.6));for(let e of K.slot.keys())e<t-4&&K.slot.delete(e);let o=K.player,s=K.drop,c=s&&t>=s.g&&t<s.g+s.len?t-s.g:-1;s&&c===0&&ca(s.kind);let l=!!s&&c>=0&&c<oa(s.kind,s.len);s&&t>=s.g+s.len-1&&(K.drop=null),l&&s.kind===`CLEAR`&&(K.ebul=[]),K.firing&&o.alive&&i.type!==`outro`&&ra(r,t),K.locking&&o.alive&&ia();for(let e of K.aoes)e.d===t&&Pa(e);if(i.type===`sector`)Bo(i,a,r,t);else if(i.type===`warn`)to(a,r);else if(i.type===`boss`&&K.boss&&K.boss.dying)uo(n,r);else if(i.type===`boss`&&!l)lo(a,r,t);else if(i.type===`outro`&&K.stage.endless&&n>=K.outroBar+2&&r===0)return Mi(),!1;else if(i.type===`outro`&&n>=K.clearBar&&r===0)return To(!0),!1;return l||Vo(r,i,t),!0}var Uo={left:!1,right:!1,up:!1,down:!1,slow:!1,rise:!1,sink:!1};function Wo(e,t){e.z&&=Math.abs(e.z)<=t?0:e.z-Math.sign(e.z)*t}function Go(e){if(e.kind!==`RHODES`)return e.dmg;let t=se.RHODES,n=I((Math.hypot(e.x-e.ox,e.y-e.oy)-t.near)/(t.far-t.near),0,1);return e.dmg*(1-n*(1-t.farMult))}function Ko(e,t,n,r,i,a){let o=n-e,s=r-t,c=o*o+s*s||1;for(let n of K.enemies){if(n===i||n.hp<=0||n.dead)continue;let r=I(((n.x-e)*o+(n.y-t)*s)/c,0,1);L(e+o*r,t+s*r,n.x,n.y)>(ue.PIERCE_R+n.r)**2||(zr.h=n.z??0,ua(n,a),n.flash=.05,n.hp<=0&&fa(n))}}function qo(){let e=K.secObj,t=1+(K.stage.idx||0)*D.SCROLL_SPEED_STEP;return K.state===`title`||!e?500:e.type===`intro`?380*t:e.type===`sector`?(700+e.E*170)*t:e.type===`warn`?K.curBar-e.start===0?260:1500*t:e.type===`boss`?1300*t:420}function Jo(e,t){for(;K.queue.length&&K.queue[0].t<=t&&K.state===`play`&&Ho(K.queue.shift()););if(K.state!==`play`)return;if(K.gameOverAt!=null&&t>=K.gameOverAt){To(!1);return}Qi();let n=Br(t),r=K.player;if(K.lockCharge=Math.min(Ir(),K.lockCharge+b.LOCK_REGEN*e),K.heat=Math.max(0,K.heat-j.HEAT.COOL*e),K.combo>0&&t-K.lastKillT>b.COMBO_TIMEOUT_BARS*F.bar*F.s16&&Qr(),r.alive){let t=0,n=0;Uo.left&&--t,Uo.right&&(t+=1),Uo.up&&--n,Uo.down&&(n+=1),t&&n&&(t*=.7071,n*=.7071);let i=b.MOVE_SPEEDS[K.spd][+!!Uo.slow]*(Uo.slow?K.kit.slow:K.kit.move);if(K.rail){let t=+!!Uo.rise-!!Uo.sink,n=+!!Uo.right-!!Uo.left;t&&n&&(t*=.7071,n*=.7071),r.x=I(r.x+n*i*e,a.PLAYER_MIN_X,W-a.PLAYER_MIN_X),r.z=I(r.z+t*i*s.Z_SPEED_MULT*e,-s.Z_MAX,s.Z_MAX);let o=G-s.PLAYER_Y_FROM_BOTTOM;r.y+=I(o-r.y,-s.PLAYER_Y_SPEED*e,s.PLAYER_Y_SPEED*e)}else r.x=I(r.x+t*i*e,a.PLAYER_MIN_X,W-a.PLAYER_MIN_X),r.y=I(r.y+n*i*e,a.PLAYER_MIN_Y,Ar);r.inv=Math.max(0,r.inv-e)}if(!K.rail){let t=s.SETTLE_SPEED*e;Wo(r,t);for(let e of[K.enemies,K.ebul,K.pbul,K.items])for(let n of e)Wo(n,t)}let i=se.WOBBLE;for(let t of K.pbul)t.age+=e,t.cx===void 0?t.x+=t.vx*e:(t.cx+=t.vx*e,t.x=t.cx+Math.sin(t.age/(F.beat*F.s16)*Math.PI*2*i.wobRate)*i.wob*Math.min(1,t.age*6)),t.y+=t.vy*e,t.vz&&(t.z=(t.z??0)+t.vz*e),t.life-=e;if(K.pbul=K.pbul.filter(e=>e.y>-30&&e.y<G+30&&e.x>-30&&e.x<W+30&&e.life>0&&!e.dead),!(n<K.freezeUntil))for(let t of K.ebul)t.x+=t.vx*e,t.y+=t.vy*e,t.vz&&K.rail&&(t.z=(t.z??0)+t.vz*e);K.ebul=K.ebul.filter(e=>e.x>-40&&e.x<W+40&&e.y>-40&&e.y<G+40);for(let t of K.enemies)vi(t,e,r);K.enemies=K.enemies.filter(bi),K.boss&&fo(K.boss,e);let o=K.kit,c=Se(o.color,N.player),l=se.BELL.ringBeats*F.beat*F.s16;for(let e of K.pbul){if(e.dead)continue;let t=se[e.kind].r,n=Go(e);for(let r of K.enemies)if(r.hp>0&&r.y>-20&&!e.hitList?.includes(r)&&L(e.x,e.y,r.x,r.y)+Te(e,r)<(r.r+t)*(r.r+t)&&(zr.h=r.z??0,e.pierce>0?(e.pierce--,(e.hitList??=[]).push(r)):e.dead=!0,ua(r,n,o.armorIgnore),o.ring>0&&K.rings.push({e:r,at:K.now+l,dmg:n*o.ring,ign:o.armorIgnore}),r.flash=.05,r.hp<=0&&fa(r),e.dead))break;let r=K.boss;!e.dead&&r&&r.vuln&&!r.dying&&!e.hitList?.includes(r)&&L(e.x,e.y,r.x,r.y)+Te(e,r)<r.r*r.r&&(e.pierce>0?(e.pierce--,(e.hitList??=[]).push(r)):e.dead=!0,pa(n),o.ring>0&&K.rings.push({e:r,at:K.now+l,dmg:n*o.ring,ign:0}),Kt.next()<.3&&Gr(e.x,e.y,c,.15,2,120))}if(K.rings.length){for(let e of K.rings){if(e.at>t)continue;let n=e.e;n.type===`boss`?pa(e.dmg,!1):n.hp>0&&!n.dead&&(zr.h=n.z??0,ua(n,e.dmg,e.ign),Gr(n.x,n.y,c,.25,n.r*.6,90),n.hp<=0&&fa(n))}K.rings=K.rings.filter(e=>e.at>t)}for(let t of K.aoes)if(t.kind===`chase`&&n<t.lock&&r.alive){let[n,r]=Sa(t),i=Math.sqrt(L(t.x,t.y,n,r))||1,a=Math.min(i,O.CHASE_SPEED*e);t.x+=(n-t.x)/i*a,t.y+=(r-t.y)/i*a}if(r.alive){for(let e of K.ebul){let n=L(e.x,e.y,r.x,r.y)+Te(e,r);if(n<(e.r+K.kit.hitPad)**2){ha(x.BULLET);break}if(!e.grazed&&n<(e.r+b.GRAZE_R)**2){e.grazed=!0,K.grazes++;let n=Hr(t)<=b.GRAZE_WIN;K.lockCharge=Math.min(Ir(),K.lockCharge+(n?b.GRAZE_BEAT_GAIN:b.GRAZE_GAIN)),zr.h=((e.z??0)+r.z)/2,Gr((e.x+r.x)/2,(e.y+r.y)/2,n?N.warn:N.dim,.25,2,n?160:80),n&&Qe(z.ac.currentTime)}}for(let e of K.enemies)if(e.y>-20&&L(e.x,e.y,r.x,r.y)+Te(e,r)<(e.r*x.ENEMY_BODY_R+x.ENEMY_BODY_PAD)**2){ha(x.ENEMY_BODY);break}let e=K.boss;e&&!e.dying&&L(e.x,e.y,r.x,r.y)+Te(e,r)<(e.r*x.BOSS_BODY_R)**2&&ha(x.BOSS_BODY)}za(n),Oi();let u=pe.ITEM_RANGE;for(let t of K.items){t.t+=e;let n=L(t.x,t.y,r.x,r.y)+Te(t,r);if(r.alive&&n<u*u){let i=Math.sqrt(n)||1;t.x+=(r.x-t.x)/i*S.MAGNET_SPEED*e,t.y+=(r.y-t.y)/i*S.MAGNET_SPEED*e,t.z!==void 0&&(t.z+=(r.z-t.z)/i*S.MAGNET_SPEED*e)}else t.y+=(t.kind===`cap`?S.FALL_CAP:S.FALL_HEAL)*e;r.alive&&n<S.PICK_R*S.PICK_R&&(t.got=!0,ga(t))}K.items=K.items.filter(e=>!e.got&&e.y<G+30);for(let n of K.lasers){if(!n.done&&t>=n.t1){n.done=!0;let e=n.e;zr.h=e.z??0;let t=(n.perfect?o.perfectMult:1)*o.lockPower*(n.crit?ue.CRIT_MULT:1);e.type===`boss`?(pa(b.LASER_BOSS_DMG*t*(n.answer?b.ANSWER_MULT:1)),Wr(e.x+n.ox,e.y+n.oy,n.perfect?N.white:N.warn,8,260)):e.hp>0&&(ua(e,b.LASER_DMG*t),e.flash=.06,e.hp<=0&&fa(e,n.n)),n.crit&&K.floaters.push({x:e.x+n.ox,y:e.y+n.oy-40,z:e.z,text:U(`floater.crit`),col:N.lime,life:.8}),o.laserPierce&&Ko(n.x0,n.y0,e.x+n.ox,e.y+n.oy,e,b.LASER_DMG*t*ue.PIERCE_MULT),n.extra||(e.lockN=Math.max(0,e.lockN-1)),K.score+=200*n.n*n.bonus,K.floaters.push({x:e.x+n.ox,y:e.y+n.oy-20,z:e.z,text:U(`floater.laser`,{n:n.n}),col:n.perfect?N.white:N.warn,life:1.1})}n.done&&(n.fade+=e)}K.lasers=K.lasers.filter(e=>e.fade<.25),K.locks=K.locks.filter(e=>e.e.type===`boss`?K.boss===e.e:e.e.hp>0&&!e.e.dead),K.aoes=K.aoes.filter(e=>n<(e.e==null?e.d+ba.blast:e.e+ba.beam)),K.callout&&(K.callout.t+=e,K.callout.t>K.callout.dur&&(K.callout=null)),K.tipTemp&&t>K.tipTemp.until&&(K.tipTemp=null),K.tipBase&&K.tipBase.until&&t>K.tipBase.until&&(K.tipBase=null)}var Yo=Array.from({length:90},()=>({x:Jt.range(0,W),y:Jt.range(0,G),z:Jt.range(.25,1)})),Xo=1/60,Zo=0;function Qo(e,t){if(K.now=t,Mo(),K.time+=e,K.state===`play`&&Jo(e,t),K.speed+=(qo()-K.speed)*Math.min(1,e*1.5),K.state===`title`){let e=Xa(t);(e===null?K.time*2%1:(e%1+1)%1)<.05&&(K.kickP=1)}if(Zo+=e,Zo>=Xo&&(Zo%=Xo,K.player&&K.state===`play`&&K.player.alive)){let e=K.player;e.trail.unshift({x:e.x,y:e.y}),e.trail.length>8&&e.trail.pop()}for(let t of K.parts)if(t.life-=e,t.kind===`shard`){t.x+=t.vx*e,t.y+=t.vy*e;let n=.94**(e*60);t.vx*=n,t.vy*=n}else t.r+=t.vr*e;K.parts=K.parts.filter(e=>e.life>0);for(let t of K.floaters)t.life-=e,t.y-=40*e;K.floaters=K.floaters.filter(e=>e.life>0);for(let t in K.meter)K.meter[t]=Math.max(0,K.meter[t]-e*5);K.scroll+=K.speed*(1+K.warp*.8)*e;for(let t of Yo)t.y+=K.speed*(1+K.warp*1.5)*t.z*e*.9,t.y>G+30&&(t.y=-30,t.x=Jt.range(0,W));K.kickP=Math.max(0,K.kickP-e*5),K.snP=Math.max(0,K.snP-e*6),K.warp=Math.max(0,K.warp-e*.9),K.flash=Math.max(0,K.flash-e*1.8),K.shake=Math.max(0,K.shake-e*40),K.noiseT=Math.max(0,K.noiseT-e)}var $o=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,es={setting:!1,get reduced(){return $o||this.setting}},ts=(e,t)=>es.reduced||Math.floor(e*t)%2==0,ns=(()=>{let e=[-.35,.55,.76],t=Math.hypot(e[0],e[1],e[2]);return e.map(e=>e/t)})();function rs(e){let t=Math.cos(e.yaw),n=Math.sin(e.yaw),r=Math.cos(e.roll),i=Math.sin(e.roll),a=Math.sin(e.elev),o=Math.cos(e.elev),s=e.persp??0;return([e,c,l])=>{let u=e*t+c*n,d=c*t-e*n,f=u*r+l*i,p=l*r-u*i,m=d*a+p*o,h=-d*o+p*a,g=s?s/Math.max(s*.3,s-h):1;return{x:f*g,u:m*g,d:h}}}function is(e,t){let n=rs(t),r=[];for(let t of e.faces)r.push(as(t,n));return r.sort((e,t)=>e.depth-t.depth),r.map(e=>e.face)}function as(e,t){let n=e.pts.map(t),[r,i,a]=n,o=i.x-r.x,s=i.u-r.u,c=i.d-r.d,l=a.x-r.x,u=a.u-r.u,d=a.d-r.d,f=s*d-c*u,p=c*l-o*d,m=o*u-s*l,h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h,m<0&&(f=-f,p=-p,m=-m);let g=Math.max(0,f*ns[0]+p*ns[1]+m*ns[2]),_=n.reduce((e,t)=>e+t.d,0)/n.length;return{face:{pts:n.map(e=>[e.x,e.u]),tag:e.tag,light:g},depth:_}}function os(e,t,n){let r=parseInt(e.slice(1),16),i=parseInt(t.slice(1),16),a=e=>{let t=r>>e&255,a=i>>e&255;return Math.round(t+(a-t)*Math.min(1,Math.max(0,n)))};return`#`+(1<<24|a(16)<<16|a(8)<<8|a(0)).toString(16).slice(1)}function ss(e,t,n,r){let i=e.light;switch(e.tag){case`glow`:return{fill:os(t,`#ffffff`,.35),edge:`#ffffff`,edgeA:.9};case`canopy`:return{fill:os(r,n,.25+.55*i),edge:n,edgeA:.7};case`gun`:return{fill:os(r,`#c8d2e6`,.12+.55*i*i),edge:t,edgeA:.55};case`fin`:return{fill:os(r,t,.12+.45*i*i),edge:t,edgeA:.85};case`engine`:return{fill:os(r,`#8a93ad`,.15+.5*i),edge:t,edgeA:.5};case`armor`:return{fill:os(r,`#9aa6c2`,.12+.55*i*i),edge:t,edgeA:.6};case`wing`:return{fill:os(r,t,.06+.42*i*i),edge:t,edgeA:.75};default:return{fill:os(r,t,.08+.5*i*i),edge:t,edgeA:.65}}}function cs(e,t,n,r,i,a,o,s,c,l=0){let u=is(t,n);e.save(),e.lineJoin=`round`;for(let t of u){let n=ss(t,o,s,c);e.beginPath(),t.pts.forEach(([t,n],o)=>o?e.lineTo(r+t*a,i-n*a):e.moveTo(r+t*a,i-n*a)),e.closePath(),e.fillStyle=n.fill,e.fill(),e.globalAlpha=n.edgeA*(t.tag===`glow`?.6+l*.4:1),e.strokeStyle=n.edge,e.lineWidth=Math.max(1,a*(t.tag===`glow`?.35:.22)),e.shadowColor=n.edge,e.shadowBlur=t.tag===`glow`?a*2*(.5+l):a*.6,e.stroke(),e.globalAlpha=1,e.shadowBlur=0}e.restore()}var ls={LIGHT:{hullW:7,hullH:5,span:17,armor:!1},STANDARD:{hullW:9,hullH:6,span:21,armor:!1},HEAVY:{hullW:11.5,hullH:7.5,span:24,armor:!0}},us={PLUCK:{len:14,w:1.6,flare:0,mount:`nose`},SQUARE:{len:10,w:4.2,flare:0,mount:`nose`},SAW:{len:11,w:2,flare:0,mount:`wing`},SUPERSAW:{len:7,w:1.6,flare:0,mount:`wing`},BRASS:{len:12,w:3,flare:3.2,mount:`nose`},BELL:{len:8,w:3.4,flare:1.4,mount:`nose`},WOBBLE:{len:11,w:2.6,flare:.8,mount:`nose`},RHODES:{len:6,w:3.2,flare:0,mount:`wing`}},ds={S:5,M:7.5,L:10};function fs(e,t,n,r,i,a=0,o=0){let s=e.length,c=(e,t)=>e.map(([e,n])=>[a+e,t,o+n]),l=c(e,t),u=c(n,r),d=[];for(let e=0;e<s;e++){let t=(e+1)%s;d.push({pts:[l[e],l[t],u[t],u[e]],tag:i})}return d.push({pts:[...l],tag:i}),d.push({pts:[...u].reverse(),tag:i}),d}var ps=(e,t)=>[[-e/2,0],[-e/4,-t/2],[e/4,-t/2],[e/2,0],[e/4,t/2],[-e/4,t/2]],ms=(e,t,n=e)=>Array.from({length:t},(r,i)=>{let a=-Math.PI/2-i/t*Math.PI*2;return[Math.cos(a)*e,Math.sin(a)*n]});function hs(e,t,n,r){let i=e.map(([e,r])=>[e,r,t+n/2]),a=e.map(([e,r])=>[e,r,t-n/2]),o=[{pts:i,tag:r},{pts:[...a].reverse(),tag:r}];for(let t=0;t<e.length;t++){let n=(t+1)%e.length;o.push({pts:[a[t],a[n],i[n],i[t]],tag:r})}return o}function gs(e,t,n,r){let i=t.map(([t,r])=>[e-n/2,t,r]),a=t.map(([t,r])=>[e+n/2,t,r]),o=[{pts:[...a].reverse(),tag:r},{pts:i,tag:r}];for(let e=0;e<t.length;e++){let n=(e+1)%t.length;o.push({pts:[i[e],i[n],a[n],a[e]],tag:r})}return o}var _s=e=>e.map(e=>({tag:e.tag,pts:e.pts.map(([e,t,n])=>[-e,t,n]).reverse()}));function vs(e){let t=ls[e.core],n=[],r=[],i=[],a=t.hullW,o=t.hullH;n.push(...fs(ps(a*.85,o*.9),-14,ps(a,o),3,`hull`)),n.push(...fs(ps(a,o),3,ps(1.2,1),22,`hull`)),n.push(...fs(ps(a*.45,o*.5),-2,ps(a*.3,o*.35),10,`canopy`,0,o*.45));let s=t.span,c=hs([[a*.4,4],[a*.4,-11],[s,-15],[s,-9]],-.5,1.6,`wing`);n.push(...c,..._s(c));let l=gs(s,[[-15,-1],[-8,-1],[-9,2.5],[-14,2.5]],1.4,`glow`);if(n.push(...l,..._s(l)),t.armor){let e=hs([[a*.5,8],[a*.5,-12],[a*.5+4.5,-10],[a*.5+4.5,5]],1.2,3.2,`armor`);n.push(...e,..._s(e))}let u=se[e.timbre],d=us[e.timbre],f=u.n;if(Array.from({length:f},(e,t)=>f===1?0:(t-(f-1)/2)*u.spread).forEach((e,t)=>{let i=f===1?0:(t-(f-1)/2)/((f-1)/2),c=d.mount===`nose`?f===1?0:a*.55*i:i*Math.max(a*.7,s*.62),l=d.mount===`nose`?6:-2-Math.abs(i)*4,u=d.mount===`nose`?-o*.45:-.4,p=l+d.len,m=fs(ms(d.w/2,d.w>3?6:4),l,ms(d.w/2+d.flare,d.w>3?6:4),p,`gun`,0,u),h=Math.cos(e),g=Math.sin(e),_=e=>[c+e[0]*h+(e[1]-l)*g,l+(e[1]-l)*h-e[0]*g,e[2]];for(let e of m)n.push({tag:e.tag,pts:e.pts.map(_)});r.push({at:_([0,p,u]),angle:e})}),e.timbre===`WOBBLE`)for(let e of[10,13])n.push(...fs(ms(2.6,6),e,ms(2.6,6),e+1.2,`glow`,0,-o*.45));let p=e.lockMax/2,m=ds[e.lockLen],h=(e,t)=>gs(e,[[-12-t,o*.35],[-4-t,o*.35],[-9-t,o*.35+m],[-13-t,o*.35+m]],1,`fin`),g=Math.floor(p/2);for(let e=0;e<g;e++){let t=h(a*.3+e*2.6,e*1.5);n.push(...t,..._s(t))}if(p%2&&n.push(...h(0,0)),e.drop===`CLEAR`)for(let e of[-a*.3,a*.3])n.push(...fs(ms(2.4,8),-17,ms(2.8,8),-12,`engine`,e,0)),i.push([e,-17,0]);else if(e.drop===`BURST`)for(let[e,t]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8]])n.push(...fs(ms(1.5,6),-18,ms(1.7,6),-13,`engine`,e,t)),i.push([e,-18,t]);else if(e.drop===`ABSORB`)n.push(...fs([[-a*.75,-1.5],[a*.75,-1.5],[a*.6,2],[-a*.6,2]],-18,[[-a*.5,-2],[a*.5,-2],[a*.45,2.5],[-a*.45,2.5]],-12,`engine`)),i.push([0,-18,0]);else{let e=[0,-20,0],t=[0,-16,3.5],r=[0,-16,-3.5],a=[-3.5,-16,0],o=[3.5,-16,0],s=[0,-12,0];for(let[i,c]of[[a,t],[t,o],[o,r],[r,a]])n.push({pts:[e,i,c],tag:`glow`},{pts:[s,c,i],tag:`glow`});i.push(e)}return{faces:n,muzzles:r,exhausts:i}}var ys=e=>({core:e.core,timbre:e.shot.timbre,lockMax:e.lock.max,lockLen:e.lock.len,drop:e.drop}),bs=new Map;function xs(e){let t=`${e.core}|${e.timbre}|${e.lockMax}|${e.lockLen}|${e.drop}`,n=bs.get(t);return n||(n=vs(e),bs.set(t,n)),n}var Ss=1e3,Cs=1001,ws=1002,Ts=1003,Es=1004,Ds=1005,Os=1006,ks=1007,As=1008,js=1009,Ms=1010,Ns=1011,Ps=1012,Fs=1013,Is=1014,Ls=1015,Rs=1016,zs=1017,Bs=1018,Vs=1020,Hs=35902,Us=35899,Ws=1021,Gs=1022,Ks=1023,qs=1026,Js=1027,Ys=1028,Xs=1029,Zs=1030,Qs=1031,$s=1033,ec=33776,tc=33777,nc=33778,rc=33779,ic=35840,ac=35841,oc=35842,sc=35843,cc=36196,lc=37492,uc=37496,dc=37488,fc=37489,pc=37490,mc=37491,hc=37808,gc=37809,_c=37810,vc=37811,yc=37812,bc=37813,xc=37814,Sc=37815,Cc=37816,wc=37817,Tc=37818,Ec=37819,Dc=37820,Oc=37821,kc=36492,Ac=36494,jc=36495,Mc=36283,Nc=36284,Pc=36285,Fc=36286,Ic=2300,Lc=2301,Rc=2302,zc=2303,Bc=2400,Vc=2401,Hc=2402,Uc=3200,Wc=`srgb`,Gc=`srgb-linear`,Kc=`linear`,qc=`srgb`,Jc=7680,Yc=35044,Xc=35048,Zc=2e3;function Qc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $c(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function el(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function tl(){let e=el(`canvas`);return e.style.display=`block`,e}var nl={};function rl(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function il(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function q(...e){e=il(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function J(...e){e=il(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function al(...e){let t=e.join(` `);t in nl||(nl[t]=!0,q(...e))}function ol(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var sl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},cl=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ll=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ul=Math.PI/180,dl=180/Math.PI;function fl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ll[e&255]+ll[e>>8&255]+ll[e>>16&255]+ll[e>>24&255]+`-`+ll[t&255]+ll[t>>8&255]+`-`+ll[t>>16&15|64]+ll[t>>24&255]+`-`+ll[n&63|128]+ll[n>>8&255]+`-`+ll[n>>16&255]+ll[n>>24&255]+ll[r&255]+ll[r>>8&255]+ll[r>>16&255]+ll[r>>24&255]).toLowerCase()}function pl(e,t,n){return Math.max(t,Math.min(n,e))}function ml(e,t){return(e%t+t)%t}function hl(e,t,n){return(1-n)*e+n*t}function gl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function _l(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var vl=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pl(this.x,e.x,t.x),this.y=pl(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pl(this.x,e,t),this.y=pl(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pl(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pl(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yl=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:q(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pl(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pl(this.x,e.x,t.x),this.y=pl(this.y,e.y,t.y),this.z=pl(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pl(this.x,e,t),this.y=pl(this.y,e,t),this.z=pl(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pl(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pl(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bl=new Y,xl=new yl,Sl=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return al(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return al(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return al(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Sl,wl=new Sl().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Sl().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function El(){let e={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ol(e.r),e.g=Ol(e.g),e.b=Ol(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=kl(e.r),e.g=kl(e.g),e.b=kl(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Kc:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return al(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return al(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Gc]:{primaries:t,whitePoint:r,transfer:Kc,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wc},outputColorSpaceConfig:{drawingBufferColorSpace:Wc}},[Wc]:{primaries:t,whitePoint:r,transfer:qc,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wc}}}),e}var Dl=El();function Ol(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function kl(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Al,jl=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Al===void 0&&(Al=el(`canvas`)),Al.width=e.width,Al.height=e.height;let t=Al.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Al}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=el(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ol(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ol(t[e]/255)*255):t[e]=Ol(t[e]);return{data:t,width:e.width,height:e.height}}return q(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ml=0,Nl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Pl(r[t].image)):e.push(Pl(r[t]))}else e=Pl(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Pl(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?jl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(q(`Texture: Unable to serialize Texture.`),{})}var Fl=0,Il=new Y,Ll=class e extends cl{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Cs,i=Cs,a=Os,o=As,s=Ks,c=js,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=fl(),this.name=``,this.source=new Nl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new vl(0,0),this.repeat=new vl(1,1),this.center=new vl(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Sl,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){q(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x-=Math.floor(e.x);break;case Cs:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y-=Math.floor(e.y);break;case Cs:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ll.DEFAULT_IMAGE=null,Ll.DEFAULT_MAPPING=300,Ll.DEFAULT_ANISOTROPY=1;var Rl=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pl(this.x,e.x,t.x),this.y=pl(this.y,e.y,t.y),this.z=pl(this.z,e.z,t.z),this.w=pl(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pl(this.x,e,t),this.y=pl(this.y,e,t),this.z=pl(this.z,e,t),this.w=pl(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pl(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends cl{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Os,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rl(0,0,e,t),this.scissorTest=!1,this.viewport=new Rl(0,0,e,t),this.textures=[];let r=new Ll({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Os,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Nl(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Bl=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vl=class extends Ll{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ts,this.minFilter=Ts,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Hl=class extends Ll{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ts,this.minFilter=Ts,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ul=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Wl.setFromMatrixColumn(e,0).length(),i=1/Wl.setFromMatrixColumn(e,1).length(),a=1/Wl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kl,e,ql)}lookAt(e,t,n){let r=this.elements;return Xl.subVectors(e,t),Xl.lengthSq()===0&&(Xl.z=1),Xl.normalize(),Jl.crossVectors(n,Xl),Jl.lengthSq()===0&&(Math.abs(n.z)===1?Xl.x+=1e-4:Xl.z+=1e-4,Xl.normalize(),Jl.crossVectors(n,Xl)),Jl.normalize(),Yl.crossVectors(Xl,Jl),r[0]=Jl.x,r[4]=Yl.x,r[8]=Xl.x,r[1]=Jl.y,r[5]=Yl.y,r[9]=Xl.y,r[2]=Jl.z,r[6]=Yl.z,r[10]=Xl.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],ae=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*ae,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*ae,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*ae,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Wl.set(r[0],r[1],r[2]).length(),o=Wl.set(r[4],r[5],r[6]).length(),s=Wl.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Gl.copy(this);let c=1/a,l=1/o,u=1/s;return Gl.elements[0]*=c,Gl.elements[1]*=c,Gl.elements[2]*=c,Gl.elements[4]*=l,Gl.elements[5]*=l,Gl.elements[6]*=l,Gl.elements[8]*=u,Gl.elements[9]*=u,Gl.elements[10]*=u,t.setFromRotationMatrix(Gl),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Zc,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Zc,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wl=new Y,Gl=new Ul,Kl=new Y(0,0,0),ql=new Y(1,1,1),Jl=new Y,Yl=new Y,Xl=new Y,Zl=new Ul,Ql=new yl,$l=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(pl(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-pl(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(pl(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-pl(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(pl(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-pl(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:q(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$l.DEFAULT_ORDER=`XYZ`;var eu=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},tu=0,nu=new Y,ru=new yl,iu=new Ul,au=new Y,ou=new Y,su=new Y,cu=new yl,lu=new Y(1,0,0),uu=new Y(0,1,0),du=new Y(0,0,1),fu={type:`added`},pu={type:`removed`},mu={type:`childadded`,child:null},hu={type:`childremoved`,child:null},gu=class e extends cl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=fl(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new $l,r=new yl,i=new Y(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ul},normalMatrix:{value:new Sl}}),this.matrix=new Ul,this.matrixWorld=new Ul,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ru.setFromAxisAngle(e,t),this.quaternion.multiply(ru),this}rotateOnWorldAxis(e,t){return ru.setFromAxisAngle(e,t),this.quaternion.premultiply(ru),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(iu.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?au.copy(e):au.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ou.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?iu.lookAt(ou,au,this.up):iu.lookAt(au,ou,this.up),this.quaternion.setFromRotationMatrix(iu),r&&(iu.extractRotation(r.matrixWorld),ru.setFromRotationMatrix(iu),this.quaternion.premultiply(ru.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(J(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),mu.child=e,this.dispatchEvent(mu),mu.child=null):J(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pu),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),iu.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),iu.multiply(e.parent.matrixWorld)),e.applyMatrix4(iu),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),mu.child=e,this.dispatchEvent(mu),mu.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ou,e,su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ou,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};gu.DEFAULT_UP=new Y(0,1,0),gu.DEFAULT_MATRIX_AUTO_UPDATE=!0,gu.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _u=class extends gu{constructor(){super(),this.isGroup=!0,this.type=`Group`}},vu={type:`move`},yu=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vu)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _u;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xu={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Cu(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var wu=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wc){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dl.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Dl.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dl.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Dl.workingColorSpace){if(e=ml(e,1),t=pl(t,0,1),n=pl(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Cu(i,r,e+1/3),this.g=Cu(i,r,e),this.b=Cu(i,r,e-1/3)}return Dl.colorSpaceToWorking(this,r),this}setStyle(e,t=Wc){function n(t){t!==void 0&&parseFloat(t)<1&&q(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:q(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);q(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wc){let n=bu[e.toLowerCase()];return n===void 0?q(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ol(e.r),this.g=Ol(e.g),this.b=Ol(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wc){return Dl.workingToColorSpace(Tu.copy(this),e),Math.round(pl(Tu.r*255,0,255))*65536+Math.round(pl(Tu.g*255,0,255))*256+Math.round(pl(Tu.b*255,0,255))}getHexString(e=Wc){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dl.workingColorSpace){Dl.workingToColorSpace(Tu.copy(this),t);let n=Tu.r,r=Tu.g,i=Tu.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Dl.workingColorSpace){return Dl.workingToColorSpace(Tu.copy(this),t),e.r=Tu.r,e.g=Tu.g,e.b=Tu.b,e}getStyle(e=Wc){Dl.workingToColorSpace(Tu.copy(this),e);let t=Tu.r,n=Tu.g,r=Tu.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(xu),this.setHSL(xu.h+e,xu.s+t,xu.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xu),e.getHSL(Su);let n=hl(xu.h,Su.h,t),r=hl(xu.s,Su.s,t),i=hl(xu.l,Su.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tu=new wu;wu.NAMES=bu;var Eu=class extends gu{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $l,this.environmentIntensity=1,this.environmentRotation=new $l,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Du=new Y,Ou=new Y,ku=new Y,Au=new Y,ju=new Y,Mu=new Y,Nu=new Y,Pu=new Y,Fu=new Y,Iu=new Y,Lu=new Rl,Ru=new Rl,zu=new Rl,Bu=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Du.subVectors(e,t),r.cross(Du);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Du.subVectors(r,t),Ou.subVectors(n,t),ku.subVectors(e,t);let a=Du.dot(Du),o=Du.dot(Ou),s=Du.dot(ku),c=Ou.dot(Ou),l=Ou.dot(ku),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Au)!==null&&Au.x>=0&&Au.y>=0&&Au.x+Au.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Au)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Au.x),s.addScaledVector(a,Au.y),s.addScaledVector(o,Au.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Lu.setScalar(0),Ru.setScalar(0),zu.setScalar(0),Lu.fromBufferAttribute(e,t),Ru.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Lu,i.x),a.addScaledVector(Ru,i.y),a.addScaledVector(zu,i.z),a}static isFrontFacing(e,t,n,r){return Du.subVectors(n,t),Ou.subVectors(e,t),Du.cross(Ou).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Du.subVectors(this.c,this.b),Ou.subVectors(this.a,this.b),Du.cross(Ou).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ju.subVectors(r,n),Mu.subVectors(i,n),Pu.subVectors(e,n);let s=ju.dot(Pu),c=Mu.dot(Pu);if(s<=0&&c<=0)return t.copy(n);Fu.subVectors(e,r);let l=ju.dot(Fu),u=Mu.dot(Fu);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ju,a);Iu.subVectors(e,i);let f=ju.dot(Iu),p=Mu.dot(Iu);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Mu,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Nu.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Nu,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ju,a).addScaledVector(Mu,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vu=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Uu.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Uu.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Uu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Uu):Uu.fromBufferAttribute(r,t),Uu.applyMatrix4(e.matrixWorld),this.expandByPoint(Uu);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Wu.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Wu.copy(e.boundingBox)),Wu.applyMatrix4(e.matrixWorld),this.union(Wu)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Uu),Uu.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zu),Qu.subVectors(this.max,Zu),Gu.subVectors(e.a,Zu),Ku.subVectors(e.b,Zu),qu.subVectors(e.c,Zu),Ju.subVectors(Ku,Gu),Yu.subVectors(qu,Ku),Xu.subVectors(Gu,qu);let t=[0,-Ju.z,Ju.y,0,-Yu.z,Yu.y,0,-Xu.z,Xu.y,Ju.z,0,-Ju.x,Yu.z,0,-Yu.x,Xu.z,0,-Xu.x,-Ju.y,Ju.x,0,-Yu.y,Yu.x,0,-Xu.y,Xu.x,0];return!td(t,Gu,Ku,qu,Qu)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Gu,Ku,qu,Qu))?!1:($u.crossVectors(Ju,Yu),t=[$u.x,$u.y,$u.z],td(t,Gu,Ku,qu,Qu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Uu).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Uu).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Hu[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hu[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hu[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hu[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hu[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hu[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hu[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hu[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hu)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hu=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Uu=new Y,Wu=new Vu,Gu=new Y,Ku=new Y,qu=new Y,Ju=new Y,Yu=new Y,Xu=new Y,Zu=new Y,Qu=new Y,$u=new Y,ed=new Y;function td(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ed.fromArray(e,a);let o=i.x*Math.abs(ed.x)+i.y*Math.abs(ed.y)+i.z*Math.abs(ed.z),s=t.dot(ed),c=n.dot(ed),l=r.dot(ed);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var nd=new Y,rd=new vl,id=0,ad=class extends cl{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=Ls,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rd.fromBufferAttribute(this,t),rd.applyMatrix3(e),this.setXY(t,rd.x,rd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nd.fromBufferAttribute(this,t),nd.applyMatrix3(e),this.setXYZ(t,nd.x,nd.y,nd.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nd.fromBufferAttribute(this,t),nd.applyMatrix4(e),this.setXYZ(t,nd.x,nd.y,nd.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nd.fromBufferAttribute(this,t),nd.applyNormalMatrix(e),this.setXYZ(t,nd.x,nd.y,nd.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nd.fromBufferAttribute(this,t),nd.transformDirection(e),this.setXYZ(t,nd.x,nd.y,nd.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_l(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gl(t,this.array)),t}setX(e,t){return this.normalized&&(t=_l(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gl(t,this.array)),t}setY(e,t){return this.normalized&&(t=_l(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_l(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gl(t,this.array)),t}setW(e,t){return this.normalized&&(t=_l(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_l(t,this.array),n=_l(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_l(t,this.array),n=_l(n,this.array),r=_l(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=_l(t,this.array),n=_l(n,this.array),r=_l(r,this.array),i=_l(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},od=class extends ad{constructor(e,t,n){super(new Uint16Array(e),t,n)}},sd=class extends ad{constructor(e,t,n){super(new Uint32Array(e),t,n)}},cd=class extends ad{constructor(e,t,n){super(new Float32Array(e),t,n)}},ld=new Vu,ud=new Y,dd=new Y,fd=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ld.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ud.subVectors(e,this.center);let t=ud.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ud,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ud.copy(e.center).add(dd)),this.expandByPoint(ud.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pd=0,md=new Ul,hd=new gu,gd=new Y,_d=new Vu,vd=new Vu,yd=new Y,bd=class e extends cl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=fl(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Qc(e)?sd:od)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Sl().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return md.makeRotationFromQuaternion(e),this.applyMatrix4(md),this}rotateX(e){return md.makeRotationX(e),this.applyMatrix4(md),this}rotateY(e){return md.makeRotationY(e),this.applyMatrix4(md),this}rotateZ(e){return md.makeRotationZ(e),this.applyMatrix4(md),this}translate(e,t,n){return md.makeTranslation(e,t,n),this.applyMatrix4(md),this}scale(e,t,n){return md.makeScale(e,t,n),this.applyMatrix4(md),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gd).negate(),this.translate(gd.x,gd.y,gd.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new cd(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&q(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];_d.setFromBufferAttribute(n),this.morphTargetsRelative?(yd.addVectors(this.boundingBox.min,_d.min),this.boundingBox.expandByPoint(yd),yd.addVectors(this.boundingBox.max,_d.max),this.boundingBox.expandByPoint(yd)):(this.boundingBox.expandByPoint(_d.min),this.boundingBox.expandByPoint(_d.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&J(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fd);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)J(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Y,1/0);else if(e){let n=this.boundingSphere.center;if(_d.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];vd.setFromBufferAttribute(n),this.morphTargetsRelative?(yd.addVectors(_d.min,vd.min),_d.expandByPoint(yd),yd.addVectors(_d.max,vd.max),_d.expandByPoint(yd)):(_d.expandByPoint(vd.min),_d.expandByPoint(vd.max))}_d.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)yd.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(yd));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)yd.fromBufferAttribute(a,t),o&&(gd.fromBufferAttribute(e,t),yd.add(gd)),r=Math.max(r,n.distanceToSquared(yd))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&J(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){J(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ad(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new vl,f=new vl,p=new vl,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ad(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yd.fromBufferAttribute(e,t),yd.normalize(),e.setXYZ(t,yd.x,yd.y,yd.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ad(a,r,i)}if(this.index===null)return q(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},xd=new Y,Sd=new Y,Cd=new Sl,wd=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xd.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cd.getNormalMatrix(e),r=this.coplanarPoint(xd).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Td=0,Ed=class extends cl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=fl(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wu(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jc,this.stencilZFail=Jc,this.stencilZPass=Jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){q(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wu().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new wd().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new vl().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vl().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Dd=new Y,Od=new Y,kd=new Y,Ad=new Y,jd=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dd)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dd.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dd.copy(this.origin).addScaledVector(this.direction,t),Dd.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Od.copy(e).add(t).multiplyScalar(.5),kd.copy(t).sub(e).normalize(),Ad.copy(this.origin).sub(Od);let i=e.distanceTo(t)*.5,a=-this.direction.dot(kd),o=Ad.dot(this.direction),s=-Ad.dot(kd),c=Ad.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Od).addScaledVector(kd,d),f}intersectSphere(e,t){if(e.radius<0)return null;Dd.subVectors(e.center,this.origin);let n=Dd.dot(this.direction),r=Dd.dot(Dd)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dd)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,A;if(y>=b&&y>=x?(w=s,D=u,k=p,A=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,A=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,A=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let re=S/w,ie=C/w,ae=1/w,oe=T-re*D,j=E-ie*D,se=O-re*k,ce=ee-ie*k,le=te-re*A,ue=ne-ie*A,de=le*ce-ue*se,M=oe*ue-j*le,fe=se*j-ce*oe;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=ae*(de*D+M*k+fe*A);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Md=class extends Ed{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new wu(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $l,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nd=new Ul,Pd=new jd,Fd=new fd,Id=new Y,Ld=new Y,Rd=new Y,zd=new Y,Bd=new Y,Vd=new Y,Hd=new Y,Ud=new Y,Wd=class extends gu{constructor(e=new bd,t=new Md){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Vd.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Bd.fromBufferAttribute(s,e),a?Vd.addScaledVector(Bd,r):Vd.addScaledVector(Bd.sub(t),r))}t.add(Vd)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fd.copy(n.boundingSphere),Fd.applyMatrix4(i),Pd.copy(e.ray).recast(e.near),!(Fd.containsPoint(Pd.origin)===!1&&(Pd.intersectSphere(Fd,Id)===null||Pd.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Nd.copy(i).invert(),Pd.copy(e.ray).applyMatrix4(Nd),(n.boundingBox===null||Pd.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Pd)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Kd(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Kd(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Kd(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Kd(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Gd(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ud.copy(s),Ud.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ud);return l<n.near||l>n.far?null:{distance:l,point:Ud.clone(),object:e}}function Kd(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ld),e.getVertexPosition(c,Rd),e.getVertexPosition(l,zd);let u=Gd(e,t,n,r,Ld,Rd,zd,Hd);if(u){let e=new Y;Bu.getBarycoord(Hd,Ld,Rd,zd,e),i&&(u.uv=Bu.getInterpolatedAttribute(i,s,c,l,e,new vl)),a&&(u.uv1=Bu.getInterpolatedAttribute(a,s,c,l,e,new vl)),o&&(u.normal=Bu.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};Bu.getNormal(Ld,Rd,zd,t.normal),u.face=t,u.barycoord=e}return u}var qd=class extends Ll{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Ts,l=Ts,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jd=class extends ad{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yd=new Ul,Xd=new Ul,Zd=[],Qd=new Vu,$d=new Ul,ef=new Wd,tf=new fd,nf=class extends Wd{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,$d)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vu),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yd),Qd.copy(e.boundingBox).applyMatrix4(Yd),this.boundingBox.union(Qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fd),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yd),tf.copy(e.boundingSphere).applyMatrix4(Yd),this.boundingSphere.union(tf)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ef.geometry=this.geometry,ef.material=this.material,ef.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tf.copy(this.boundingSphere),tf.applyMatrix4(n),e.ray.intersectsSphere(tf)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Yd),Xd.multiplyMatrices(n,Yd),ef.matrixWorld=Xd,ef.raycast(e,Zd);for(let e=0,n=Zd.length;e<n;e++){let n=Zd[e];n.instanceId=i,n.object=this,t.push(n)}Zd.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new qd(new Float32Array(r*this.count),r,this.count,Ys,Ls));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rf=new fd,af=new vl(.5,.5),of=new Y,sf=class{constructor(e=new wd,t=new wd,n=new wd,r=new wd,i=new wd,a=new wd){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zc,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rf.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rf.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rf)}intersectsSprite(e){return rf.center.set(0,0,0),rf.radius=.7071067811865476+af.distanceTo(e.center),rf.applyMatrix4(e.matrixWorld),this.intersectsSphere(rf)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(of.x=r.normal.x>0?e.max.x:e.min.x,of.y=r.normal.y>0?e.max.y:e.min.y,of.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(of)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cf=class extends Ll{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lf=class extends Ll{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},uf=class extends Ll{constructor(e,t,n=Is,r,i,a,o=Ts,s=Ts,c,l=qs,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},df=class extends uf{constructor(e,t=Is,n=301,r,i,a=Ts,o=Ts,s,c=qs){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ff=class extends Ll{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pf=class e extends bd{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new cd(c,3)),this.setAttribute(`normal`,new cd(l,3)),this.setAttribute(`uv`,new cd(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mf=class e extends bd{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Y,l=new vl;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new cd(a,3)),this.setAttribute(`normal`,new cd(o,3)),this.setAttribute(`uv`,new cd(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hf=class e extends bd{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new cd(p,3)),this.setAttribute(`normal`,new cd(m,3)),this.setAttribute(`uv`,new cd(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function gf(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(vf(i))i.isRenderTargetTexture?(q(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(vf(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function _f(e){let t={};for(let n=0;n<e.length;n++){let r=gf(e[n]);for(let e in r)t[e]=r[e]}return t}function vf(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function yf(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dl.workingColorSpace}var xf={clone:gf,merge:_f},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wf=class extends Ed{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gf(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new wu().setHex(r.value);break;case`v2`:this.uniforms[n].value=new vl().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Rl().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Sl().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ul().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tf=class extends wf{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ef=class extends Ed{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Df=class extends Ed{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Of(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function kf(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Af=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},jf=class extends Af{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:i=e,o=2*t-n;break;case Hc:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Vc:a=e,s=2*n-t;break;case Hc:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Mf=class extends Af{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Nf=class extends Af{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pf=class extends Af{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Lf(n,t,g,y,r);i[p]=Ff(x,o,_,b,m)}return i}};function Ff(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function If(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Lf(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ff(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=If(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Rf=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Of(t,this.TimeBufferType),this.values=Of(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Of(e.times,Array),values:Of(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),kf(e.settings)&&(n.settings={inTangents:Of(e.settings.inTangents,Array),outTangents:Of(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ic:t=this.InterpolantFactoryMethodDiscrete;break;case Lc:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break;case zc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return q(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return Rc;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;kf(this.settings)&&(zf(this.settings.inTangents,e),zf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(J(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(J(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){J(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){J(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&$c(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){J(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Rc,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,kf(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function zf(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Rf.prototype.ValueTypeName=``,Rf.prototype.TimeBufferType=Float32Array,Rf.prototype.ValueBufferType=Float32Array,Rf.prototype.DefaultInterpolation=Lc;var Bf=class extends Rf{constructor(e,t,n){super(e,t,n)}};Bf.prototype.ValueTypeName=`bool`,Bf.prototype.ValueBufferType=Array,Bf.prototype.DefaultInterpolation=Ic,Bf.prototype.InterpolantFactoryMethodLinear=void 0,Bf.prototype.InterpolantFactoryMethodSmooth=void 0;var Vf=class extends Rf{constructor(e,t,n,r){super(e,t,n,r)}};Vf.prototype.ValueTypeName=`color`;var Hf=class extends Rf{constructor(e,t,n,r){super(e,t,n,r)}};Hf.prototype.ValueTypeName=`number`;var Uf=class extends Af{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)yl.slerpFlat(i,0,a,c-o,a,c,s);return i}},Wf=class extends Rf{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Uf(this.times,this.values,this.getValueSize(),e)}};Wf.prototype.ValueTypeName=`quaternion`,Wf.prototype.InterpolantFactoryMethodSmooth=void 0;var Gf=class extends Rf{constructor(e,t,n){super(e,t,n)}};Gf.prototype.ValueTypeName=`string`,Gf.prototype.ValueBufferType=Array,Gf.prototype.DefaultInterpolation=Ic,Gf.prototype.InterpolantFactoryMethodLinear=void 0,Gf.prototype.InterpolantFactoryMethodSmooth=void 0;var Kf=class extends Rf{constructor(e,t,n,r){super(e,t,n,r)}};Kf.prototype.ValueTypeName=`vector`;var qf=new Y,Jf=new yl,Yf=new Y,Xf=class extends gu{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ul,this.projectionMatrix=new Ul,this.projectionMatrixInverse=new Ul,this.coordinateSystem=Zc,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qf,Jf,Yf),Yf.x===1&&Yf.y===1&&Yf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qf,Jf,Yf.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qf,Jf,Yf),Yf.x===1&&Yf.y===1&&Yf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qf,Jf,Yf.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zf=new Y,Qf=new vl,$f=new vl,ep=class extends Xf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zf.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zf.x,Zf.y).multiplyScalar(-e/Zf.z),Zf.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zf.x,Zf.y).multiplyScalar(-e/Zf.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,$f),t.subVectors($f,Qf)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ul*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tp=class extends Xf{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},np=-90,rp=1,ip=class extends gu{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ep(np,rp,e,t);r.layers=this.layers,this.add(r);let i=new ep(np,rp,e,t);i.layers=this.layers,this.add(i);let a=new ep(np,rp,e,t);a.layers=this.layers,this.add(a);let o=new ep(np,rp,e,t);o.layers=this.layers,this.add(o);let s=new ep(np,rp,e,t);s.layers=this.layers,this.add(s);let c=new ep(np,rp,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ap=class extends ep{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},op=`\\[\\]\\.:\\/`,sp=RegExp(`[\\[\\]\\.:\\/]`,`g`),cp=`[^\\[\\]\\.:\\/]`,lp=`[^`+op.replace(`\\.`,``)+`]`,up=`((?:WC+[\\/:])*)`.replace(`WC`,cp),dp=`(WCOD+)?`.replace(`WCOD`,lp),fp=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,cp),pp=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,cp),mp=RegExp(`^`+up+dp+fp+pp+`$`),hp=[`material`,`materials`,`bones`,`map`],gp=class{constructor(e,t,n){let r=n||_p.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_p=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(sp,``)}static parseTrackName(e){let t=mp.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hp.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){q(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){J(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){J(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){J(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){J(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){J(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){J(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;J(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){J(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_p.Composite=gp,_p.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_p.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_p.prototype.GetterByBindingType=[_p.prototype._getValue_direct,_p.prototype._getValue_array,_p.prototype._getValue_arrayElement,_p.prototype._getValue_toArray],_p.prototype.SetterByBindingTypeAndVersioning=[[_p.prototype._setValue_direct,_p.prototype._setValue_direct_setNeedsUpdate,_p.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_p.prototype._setValue_array,_p.prototype._setValue_array_setNeedsUpdate,_p.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_p.prototype._setValue_arrayElement,_p.prototype._setValue_arrayElement_setNeedsUpdate,_p.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_p.prototype._setValue_fromArray,_p.prototype._setValue_fromArray_setNeedsUpdate,_p.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function vp(e,t,n,r){let i=yp(r);switch(n){case Ws:return e*t;case Ys:return e*t/i.components*i.byteLength;case Xs:return e*t/i.components*i.byteLength;case Zs:return e*t*2/i.components*i.byteLength;case Qs:return e*t*2/i.components*i.byteLength;case Gs:return e*t*3/i.components*i.byteLength;case Ks:return e*t*4/i.components*i.byteLength;case $s:return e*t*4/i.components*i.byteLength;case ec:case tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nc:case rc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ac:case sc:return Math.max(e,16)*Math.max(t,8)/4;case ic:case oc:return Math.max(e,8)*Math.max(t,8)/2;case cc:case lc:case dc:case fc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uc:case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case vc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case kc:case Ac:case jc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Mc:case Nc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pc:case Fc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function yp(e){switch(e){case js:case Ms:return{byteLength:1,components:1};case Ps:case Ns:case Rs:return{byteLength:2,components:1};case zs:case Bs:return{byteLength:2,components:4};case Is:case Fs:case Ls:return{byteLength:4,components:1};case Hs:case Us:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?q(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function bp(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xp(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Sp={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new wu(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Sl},alphaMap:{value:null},alphaMapTransform:{value:new Sl},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Sl}},envmap:{envMap:{value:null},envMapRotation:{value:new Sl},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Sl}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Sl}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Sl},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Sl},normalScale:{value:new vl(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Sl},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Sl}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Sl}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Sl}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wu(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new wu(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Sl},alphaTest:{value:0},uvTransform:{value:new Sl}},sprite:{diffuse:{value:new wu(16777215)},opacity:{value:1},center:{value:new vl(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Sl},alphaMap:{value:null},alphaMapTransform:{value:new Sl},alphaTest:{value:0}}},Cp={basic:{uniforms:_f([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Sp.meshbasic_vert,fragmentShader:Sp.meshbasic_frag},lambert:{uniforms:_f([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new wu(0)},envMapIntensity:{value:1}}]),vertexShader:Sp.meshlambert_vert,fragmentShader:Sp.meshlambert_frag},phong:{uniforms:_f([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new wu(0)},specular:{value:new wu(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Sp.meshphong_vert,fragmentShader:Sp.meshphong_frag},standard:{uniforms:_f([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new wu(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Sp.meshphysical_vert,fragmentShader:Sp.meshphysical_frag},toon:{uniforms:_f([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new wu(0)}}]),vertexShader:Sp.meshtoon_vert,fragmentShader:Sp.meshtoon_frag},matcap:{uniforms:_f([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Sp.meshmatcap_vert,fragmentShader:Sp.meshmatcap_frag},points:{uniforms:_f([X.points,X.fog]),vertexShader:Sp.points_vert,fragmentShader:Sp.points_frag},dashed:{uniforms:_f([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Sp.linedashed_vert,fragmentShader:Sp.linedashed_frag},depth:{uniforms:_f([X.common,X.displacementmap]),vertexShader:Sp.depth_vert,fragmentShader:Sp.depth_frag},normal:{uniforms:_f([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Sp.meshnormal_vert,fragmentShader:Sp.meshnormal_frag},sprite:{uniforms:_f([X.sprite,X.fog]),vertexShader:Sp.sprite_vert,fragmentShader:Sp.sprite_frag},background:{uniforms:{uvTransform:{value:new Sl},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Sp.background_vert,fragmentShader:Sp.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Sl}},vertexShader:Sp.backgroundCube_vert,fragmentShader:Sp.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Sp.cube_vert,fragmentShader:Sp.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Sp.equirect_vert,fragmentShader:Sp.equirect_frag},distance:{uniforms:_f([X.common,X.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Sp.distance_vert,fragmentShader:Sp.distance_frag},shadow:{uniforms:_f([X.lights,X.fog,{color:{value:new wu(0)},opacity:{value:1}}]),vertexShader:Sp.shadow_vert,fragmentShader:Sp.shadow_frag}};Cp.physical={uniforms:_f([Cp.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Sl},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Sl},clearcoatNormalScale:{value:new vl(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Sl},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Sl},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Sl},sheen:{value:0},sheenColor:{value:new wu(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Sl},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Sl},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Sl},transmissionSamplerSize:{value:new vl},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Sl},attenuationDistance:{value:0},attenuationColor:{value:new wu(0)},specularColor:{value:new wu(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Sl},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Sl},anisotropyVector:{value:new vl},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Sl}}]),vertexShader:Sp.meshphysical_vert,fragmentShader:Sp.meshphysical_frag};var wp={r:0,b:0,g:0},Tp=new Ul,Ep=new Sl;Ep.set(-1,0,0,0,1,0,0,0,1);function Dp(e,t,n,r,i,a){let o=new wu(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Wd(new pf(1,1,1),new wf({name:`BackgroundCubeMaterial`,uniforms:gf(Cp.backgroundCube.uniforms),vertexShader:Cp.backgroundCube.vertexShader,fragmentShader:Cp.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ep),l.material.toneMapped=Dl.getTransfer(i.colorSpace)!==qc,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Wd(new hf(2,2),new wf({name:`BackgroundMaterial`,uniforms:gf(Cp.background.uniforms),vertexShader:Cp.background.vertexShader,fragmentShader:Cp.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Dl.getTransfer(i.colorSpace)!==qc,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(wp,bf(e)),n.buffers.color.setClear(wp.r,wp.g,wp.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Op(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function kp(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ap(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(q(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&q(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function jp(e){let t=this,n=null,r=0,i=!1,a=!1,o=new wd,s=new Sl,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Mp=4,Np=6,Pp=20,Fp=256,Ip=new tp,Lp=new wu,Rp=null,zp=0,Bp=0,Vp=!1,Hp=new Y,Up=new Y,Wp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Hp}=i;Rp=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Bp=this._renderer.getActiveMipmapLevel(),Vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rp,zp,Bp),this._renderer.xr.enabled=Vp,e.scissorTest=!1,qp(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rp=this._renderer.getRenderTarget(),zp=this._renderer.getActiveCubeFace(),Bp=this._renderer.getActiveMipmapLevel(),Vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Os,minFilter:Os,generateMipmaps:!1,type:Rs,format:Ks,colorSpace:Gc,depthBuffer:!1},r=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gp(r)),this._blurMaterial=Yp(r,e,t),this._ggxMaterial=Jp(r,e,t)}return r}_compileMaterial(e){let t=new Wd(new bd,e);this._renderer.compile(t,Ip)}_sceneToCubeUV(e,t,n,r,i){let a=new ep(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Lp),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wd(new pf,new Md({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Lp),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;qp(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;qp(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ip)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Mp?n-d+Mp:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,qp(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ip),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,qp(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ip)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];qp(t,3*l*(r>this._lodMax-Mp?r-this._lodMax+Mp:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ip)}};function Gp(e){let t=[],n=[],r=e,i=e-Mp+1+Np;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Up.set(1,r,n):e===1?Up.set(-n,1,-r):e===2?Up.set(-n,r,1):e===3?Up.set(-1,r,-n):e===4?Up.set(-n,-1,r):Up.set(n,r,-1),Up.toArray(l,(e*6+t)*3)}}let u=new bd;u.setAttribute(`position`,new ad(c,3)),u.setAttribute(`outputDirection`,new ad(l,3)),n.push(new Wd(u,null)),r>Mp&&r--}return{lodMeshes:n,sizeLods:t}}function Kp(e,t,n){let r=new Bl(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function qp(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Jp(e,t,n){return new wf({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yp(e,t,n){return new wf({name:`SphericalGaussianBlur`,defines:{SAMPLES:Pp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xp(){return new wf({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zp(){return new wf({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $p=class extends Bl{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pf(5,5,5),i=new wf({name:`CubemapFromEquirect`,uniforms:gf(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Wd(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Os),new ip(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function em(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new $p(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Wp(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Wp(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function tm(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&al(`WebGLRenderer: `+e+` extension not supported.`),t}}}function nm(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?sd:od)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function rm(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function im(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:J(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function am(e,t,n){let r=new WeakMap,i=new Rl;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Vl(h,p,m,u);g.type=Ls,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new vl(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function om(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var sm={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function cm(e,t,n,r,i,a){let o=new Bl(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new bd;l.setAttribute(`position`,new cd([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new cd([0,2,0,0,2,0],2));let u=new Tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Wd(l,u),f=new tp(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Bl(t,n,{type:Rs,depthBuffer:!1,stencilBuffer:!1}),c=new Bl(t,n,{type:Rs,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Dl.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=sm[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var lm=new Ll,um=new uf(1,1),dm=new Vl,fm=new Hl,pm=new cf,mm=[],hm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function ym(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=mm[i];if(a===void 0&&(a=new Float32Array(i),mm[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bm(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xm(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Sm(e,t){let n=hm[t];n===void 0&&(n=new Int32Array(t),hm[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bm(n,t))return;e.uniform2fv(this.addr,t),xm(n,t)}}function Tm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bm(n,t))return;e.uniform3fv(this.addr,t),xm(n,t)}}function Em(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bm(n,t))return;e.uniform4fv(this.addr,t),xm(n,t)}}function Dm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bm(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xm(n,t)}else{if(bm(n,r))return;vm.set(r),e.uniformMatrix2fv(this.addr,!1,vm),xm(n,r)}}function Om(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bm(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xm(n,t)}else{if(bm(n,r))return;_m.set(r),e.uniformMatrix3fv(this.addr,!1,_m),xm(n,r)}}function km(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bm(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xm(n,t)}else{if(bm(n,r))return;gm.set(r),e.uniformMatrix4fv(this.addr,!1,gm),xm(n,r)}}function Am(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bm(n,t))return;e.uniform2iv(this.addr,t),xm(n,t)}}function Mm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bm(n,t))return;e.uniform3iv(this.addr,t),xm(n,t)}}function Nm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bm(n,t))return;e.uniform4iv(this.addr,t),xm(n,t)}}function Pm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bm(n,t))return;e.uniform2uiv(this.addr,t),xm(n,t)}}function Im(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bm(n,t))return;e.uniform3uiv(this.addr,t),xm(n,t)}}function Lm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bm(n,t))return;e.uniform4uiv(this.addr,t),xm(n,t)}}function Rm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(um.compareFunction=n.isReversedDepthBuffer()?518:515,a=um):a=lm,n.setTexture2D(t||a,i)}function zm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fm,i)}function Bm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||pm,i)}function Vm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||dm,i)}function Hm(e){switch(e){case 5126:return Cm;case 35664:return wm;case 35665:return Tm;case 35666:return Em;case 35674:return Dm;case 35675:return Om;case 35676:return km;case 5124:case 35670:return Am;case 35667:case 35671:return jm;case 35668:case 35672:return Mm;case 35669:case 35673:return Nm;case 5125:return Pm;case 36294:return Fm;case 36295:return Im;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Um(e,t){e.uniform1fv(this.addr,t)}function Wm(e,t){let n=ym(t,this.size,2);e.uniform2fv(this.addr,n)}function Gm(e,t){let n=ym(t,this.size,3);e.uniform3fv(this.addr,n)}function Km(e,t){let n=ym(t,this.size,4);e.uniform4fv(this.addr,n)}function qm(e,t){let n=ym(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Jm(e,t){let n=ym(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ym(e,t){let n=ym(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xm(e,t){e.uniform1iv(this.addr,t)}function Zm(e,t){e.uniform2iv(this.addr,t)}function Qm(e,t){e.uniform3iv(this.addr,t)}function $m(e,t){e.uniform4iv(this.addr,t)}function eh(e,t){e.uniform1uiv(this.addr,t)}function th(e,t){e.uniform2uiv(this.addr,t)}function nh(e,t){e.uniform3uiv(this.addr,t)}function rh(e,t){e.uniform4uiv(this.addr,t)}function ih(e,t,n){let r=this.cache,i=t.length,a=Sm(n,i);bm(r,a)||(e.uniform1iv(this.addr,a),xm(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?um:lm;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ah(e,t,n){let r=this.cache,i=t.length,a=Sm(n,i);bm(r,a)||(e.uniform1iv(this.addr,a),xm(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fm,a[e])}function oh(e,t,n){let r=this.cache,i=t.length,a=Sm(n,i);bm(r,a)||(e.uniform1iv(this.addr,a),xm(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||pm,a[e])}function sh(e,t,n){let r=this.cache,i=t.length,a=Sm(n,i);bm(r,a)||(e.uniform1iv(this.addr,a),xm(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||dm,a[e])}function ch(e){switch(e){case 5126:return Um;case 35664:return Wm;case 35665:return Gm;case 35666:return Km;case 35674:return qm;case 35675:return Jm;case 35676:return Ym;case 5124:case 35670:return Xm;case 35667:case 35671:return Zm;case 35668:case 35672:return Qm;case 35669:case 35673:return $m;case 5125:return eh;case 36294:return th;case 36295:return nh;case 36296:return rh;case 35678:case 36198:case 36298:case 36306:case 35682:return ih;case 35679:case 36299:case 36307:return ah;case 35680:case 36300:case 36308:case 36293:return oh;case 36289:case 36303:case 36311:case 36292:return sh}}var lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ch(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function ph(e,t){e.seq.push(t),e.map[t.id]=t}function mh(e,t,n){let r=e.name,i=r.length;for(fh.lastIndex=0;;){let a=fh.exec(r),o=fh.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ph(n,l===void 0?new lh(s,e,t):new uh(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new dh(s),ph(n,e)),n=e}}}var hh=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);mh(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function gh(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _h=37297,vh=0;function yh(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var bh=new Sl;function xh(e){Dl._getMatrix(bh,Dl.workingColorSpace,e);let t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(Dl.getTransfer(e)){case Kc:return[t,`LinearTransferOETF`];case qc:return[t,`sRGBTransferOETF`];default:return q(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Sh(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+yh(e.getShaderSource(t),r)}return i}function Ch(e,t){let n=xh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var wh={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Th(e,t){let n=wh[t];return n===void 0?(q(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Eh=new Y;function Dh(){return Dl.getLuminanceCoefficients(Eh),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Eh.x.toFixed(4)}, ${Eh.y.toFixed(4)}, ${Eh.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Oh(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(jh).join(`
`)}function kh(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ah(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function jh(e){return e!==``}function Mh(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ph=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(e){return e.replace(Ph,Lh)}var Ih=new Map;function Lh(e,t){let n=Sp[t];if(n===void 0){let e=Ih.get(t);if(e!==void 0)n=Sp[e],q(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Fh(n)}var Rh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(e){return e.replace(Rh,Bh)}function Bh(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Hh={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Uh(e){return Hh[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wh={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Gh(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Wh[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Kh={302:`ENVMAP_MODE_REFRACTION`};function qh(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Kh[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Jh={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yh(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Jh[e.combine]||`ENVMAP_BLENDING_NONE`}function Xh(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Zh(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Uh(n),l=Gh(n),u=qh(n),d=Yh(n),f=Xh(n),p=Oh(n),m=kh(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(jh).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(jh).join(`
`),_.length>0&&(_+=`
`)):(g=[Vh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(jh).join(`
`),_=[Vh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Sp.tonemapping_pars_fragment,n.toneMapping===0?``:Th(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Sp.colorspace_pars_fragment,Ch(`linearToOutputTexel`,n.outputColorSpace),Dh(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(jh).join(`
`)),o=Fh(o),o=Mh(o,n),o=Nh(o,n),s=Fh(s),s=Mh(s,n),s=Nh(s,n),o=zh(o),s=zh(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=gh(i,i.VERTEX_SHADER,y),S=gh(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Sh(i,x,`vertex`),n=Sh(i,S,`fragment`);J(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):q(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new hh(i,h),T=Ah(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,_h)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vh++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Qh=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eg(e),t.set(e,n)),n}},eg=class{constructor(e){this.id=Qh++,this.code=e,this.usedTimes=0}};function tg(e){return e===1030||e===37490||e===36285}function ng(e,t,n,r,i,a){let o=new eu,s=new $h,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&q(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=Cp[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!x,j=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,N=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=_e&&!!i.iridescenceMap,P=_e&&!!i.iridescenceThicknessMap,we=ve&&!!i.sheenColorMap,F=ve&&!!i.sheenRoughnessMap,I=!!i.specularMap,L=!!i.specularColorMap,Te=!!i.specularIntensityMap,R=N&&!!i.transmissionMap,Ee=N&&!!i.thicknessMap,z=!!i.gradientMap,B=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,V=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(V=e.toneMapping);let H={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dl.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:j,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&tg(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Ce,iridescenceThicknessMap:P,sheen:ve,sheenColorMap:we,sheenRoughnessMap:F,specularMap:I,specularColorMap:L,specularIntensityMap:Te,transmission:N,transmissionMap:R,thicknessMap:Ee,gradientMap:z,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:B,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:j&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:P&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:F&&m(i.sheenRoughnessMap.channel),specularMapUv:I&&m(i.specularMap.channel),specularColorMapUv:L&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:R&&m(i.transmissionMap.channel),thicknessMapUv:Ee&&m(i.thicknessMap.channel),alphaMapUv:B&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||B),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:V,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Dl.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Dl.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return H.vertexUv1s=c.has(1),H.vertexUv2s=c.has(2),H.vertexUv3s=c.has(3),c.clear(),H}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Cp[t];n=xf.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Zh(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function rg(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ig(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ag(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function og(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ig),r.length>1&&r.sort(t||ag),i.length>1&&i.sort(t||ag)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function sg(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new og,e.set(t,[i])):n>=r.length?(i=new og,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function cg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Y,color:new wu};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new wu,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new wu,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new wu,groundColor:new wu};break;case`RectAreaLight`:n={color:new wu,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function lg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vl};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vl};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vl,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ug=0;function dg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function fg(e){let t=new cg,n=lg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new Ul,o=new Ul;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(dg);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ug++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function pg(e){let t=new fg(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function mg(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new pg(e),t.set(n,[a])):r>=i.length?(a=new pg(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_g=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],vg=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],yg=new Ul,bg=new Y,xg=new Y;function Sg(e,t,n){let r=new sf,i=new vl,a=new vl,o=new Rl,s=new Ef,c=new Df,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new wf({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vl},radius:{value:4}},vertexShader:hg,fragmentShader:gg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new bd;m.setAttribute(`position`,new ad(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Wd(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(q(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){q(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){q(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Bl(i.x,i.y,{format:Zs,type:Rs,minFilter:Os,magFilter:Os,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new uf(i.x,i.y,Ls),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=qs,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ts,d.map.depthTexture.magFilter=Ts}else l.isPointLight?(d.map=new $p(i.x),d.map.depthTexture=new df(i.x,Is)):(d.map=new Bl(i.x,i.y),d.map.depthTexture=new uf(i.x,i.y,Is)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=qs,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Os,d.map.depthTexture.magFilter=Os):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ts,d.map.depthTexture.magFilter=Ts);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),bg.setFromMatrixPosition(l.matrixWorld),e.position.copy(bg),xg.copy(e.position),xg.add(_g[t]),e.up.copy(vg[t]),e.lookAt(xg),e.updateMatrixWorld(),n.makeTranslation(-bg.x,-bg.y,-bg.z),yg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(yg,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Bl(i.x,i.y,{format:Zs,type:Rs}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Cg(e,t){function n(){let t=!1,n=new Rl,r=null,i=new Rl(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=sl[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new wu(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let ae=null,oe={},j=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Rl().fromArray(j),le=new Rl().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:J(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:J(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:J(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:J(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function N(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==ee&&(A&&e.lineWidth(t),ee=t)}function Se(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function Ce(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function P(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function we(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function F(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function I(){try{e.compressedTexImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function R(){try{e.texSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function B(){try{e.texStorage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){J(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){J(`WebGLState:`,e)}}function V(t){return d[t]===void 0?e.getParameter(t):d[t]}function H(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function je(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new wu(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:N,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:P,bindTexture:we,unbindTexture:F,compressedTexImage2D:I,compressedTexImage3D:L,texImage2D:Oe,texImage3D:ke,pixelStorei:H,getParameter:V,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:B,texStorage3D:De,texSubImage2D:Te,texSubImage3D:R,compressedTexSubImage2D:Ee,compressedTexSubImage3D:z,scissor:Ae,viewport:je,reset:Pe}}function wg(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vl,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):el(`canvas`)}function g(e,t,n){let r=1,i=I(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),q(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&q(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];q(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||q(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Kc:Dl.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,q(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function k(){return O}function te(e){O=e}function ne(){let e=O;return e>=i.maxTextures&&q(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&we(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)q(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)q(`WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?fe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?fe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let j={[Ss]:e.REPEAT,[Cs]:e.CLAMP_TO_EDGE,[ws]:e.MIRRORED_REPEAT},se={[Ts]:e.NEAREST,[Es]:e.NEAREST_MIPMAP_NEAREST,[Ds]:e.NEAREST_MIPMAP_LINEAR,[Os]:e.LINEAR,[ks]:e.LINEAR_MIPMAP_NEAREST,[As]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&q(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,j[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,j[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,j[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function M(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function fe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Dl.getPrimaries(Dl.workingColorSpace),r=o.colorSpace===``?null:Dl.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=F(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);le(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Js,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&M(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=vp(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=vp(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=I(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=I(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Dl.getPrimaries(Dl.workingColorSpace),r=o.colorSpace===``?null:Dl.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=F(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);le(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=I(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ce(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);P(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ce(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),le(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let u=l.__webglTexture,d=Ce(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)P(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function _e(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ge(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ge(i.__webglFramebuffer[0],t,0):ge(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),he(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),he(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,i){let a=r.get(t);n!==void 0&&me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&_e(t)}function N(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&P(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ce(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),he(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),le(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),le(c,a),me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),le(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&_e(t)}function ye(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let be=[],xe=[];function Se(t){if(t.samples>0){if(P(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(be.length=0,xe.length=0,be.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(be.push(l),xe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ce(e){return Math.min(i.maxSamples,e.samples)}function P(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function we(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function F(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Dl.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&q(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):J(`WebGLTextures: Unsupported texture color space:`,n)),t}function I(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=ee,this.getTextureUnits=k,this.setTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=ve,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Tg(e,t){function n(n,r=``){let i,a=Dl.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Og=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ff(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wf({vertexShader:Eg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wd(new hf(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kg=class extends cl{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Og,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new vl,C=null,w=null,T=new ep;T.viewport=new Rl;let E=new ep;E.viewport=new Rl;let D=[T,E],O=new ap,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new yu,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new yu,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new yu,b[e]=t),t.getHandSpace()};function te(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&q(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,A),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Js:qs,a=_.stencil?Vs:Is);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Bl(d.textureWidth,d.textureHeight,{format:Ks,type:js,depthTexture:new uf(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bl(f.framebufferWidth,f.framebufferHeight,{format:Ks,type:js,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let re=new Y,ie=new Y;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;oe(O,i);for(let e=0;e<a.length;e++)oe(a[e],i);a.length===2?ae(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),j(e,O,i)};function j(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dl*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let se=null;function ce(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ep,o.layers.enable(n),o.viewport=new Rl,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ff,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let le=new bp;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Ag=new Ul,jg=new Sl;jg.set(-1,0,0,0,1,0,0,0,1);function Mg(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,bf(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(jg),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ng(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return J(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?q(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):q(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fg=null;function Ig(){return Fg===null&&(Fg=new qd(Pg,16,16,Zs,Rs),Fg.name=`DFG_LUT`,Fg.minFilter=Os,Fg.magFilter=Os,Fg.wrapS=Cs,Fg.wrapT=Cs,Fg.generateMipmaps=!1,Fg.needsUpdate=!0),Fg}var Lg=class{constructor(e={}){let{canvas:t=tl(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=js}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([$s,Qs,Xs]),g=new Set([js,Is,Ps,Vs,zs,Bs]),_=new Uint32Array(4),v=new Int32Array(4),y=new Y,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=Wc;let te=0,ne=0,A=null,re=-1,ie=null,ae=new Rl,oe=new Rl,j=null,se=new wu(0),ce=0,le=t.width,ue=t.height,de=1,M=null,fe=null,pe=new Rl(0,0,le,ue),me=new Rl(0,0,le,ue),he=!1,ge=new sf,_e=!1,ve=!1,N=new Ul,ye=new Y,be=new Rl,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return A===null?de:1}let P=n;function we(e,n){return t.getContext(e,n)}let F,I,L,Te,R,Ee,z,B,De,Oe,ke,V,H,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),P===null){let t=`webgl2`;if(P=we(t,e),P===null)throw we(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Be()}catch(e){throw t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),J(`WebGLRenderer: `+e.message),e}function Be(){F=new tm(P),F.init(),Le=new Tg(P,F),I=new Ap(P,F,e,Le),L=new Cg(P,F),I.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=P.createFramebuffer(),ee=P.createFramebuffer(),k=P.createFramebuffer(),Te=new im(P),R=new rg,Ee=new wg(P,F,L,R,I,Le,Te),z=new em(T),B=new xp(P),Re=new Op(P,B),De=new nm(P,B,Te,Re),Oe=new om(P,De,B,Re,Te),Pe=new am(P,I,Ee),je=new jp(R),ke=new ng(T,z,F,I,Re,je),V=new Mg(T,R),H=new sg,Ae=new mg(F),Ne=new Dp(T,z,L,Oe,p,s),Me=new Sg(T,Oe,I),ze=new Ng(P,Te,I,L),Fe=new kp(P,F,Te),Ie=new rm(P,F,Te),Te.programs=ke.programs,T.capabilities=I,T.extensions=F,T.properties=R,T.renderLists=H,T.shadowMap=Me,T.state=L,T.info=Te}m!==1009&&(w=new cm(m,t.width,t.height,o,r,i));let Ve=new kg(T,P);this.xr=Ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=F.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=F.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){Ve.isPresenting?q(`WebGLRenderer: Can't change size while VR device is presenting.`):(le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)J(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){q(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ae)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),L.viewport(ae.copy(pe).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),L.scissor(oe.copy(me).multiplyScalar(de).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){L.setScissorTest(he=e)},this.setOpaqueSort=function(e){M=e},this.setTransparentSort=function(e){fe=e},this.getClearColor=function(e){return e.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(A!==null){let t=A.texture.format;e=h.has(t)}if(e){let e=A.texture.type,t=g.has(e),n=Ne.getClearColor(),r=Ne.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Ne.dispose(),H.dispose(),Ae.dispose(),R.dispose(),z.dispose(),Oe.dispose(),Re.dispose(),ze.dispose(),ke.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Ze),Ve.removeEventListener(`sessionend`,Qe),$e.stop()};function He(e){e.preventDefault(),rl(`WebGLRenderer: Context Lost.`),E=!0}function Ue(){rl(`WebGLRenderer: Context Restored.`),E=!1;let e=Te.autoReset,t=Me.enabled,n=Me.autoUpdate,r=Me.needsUpdate,i=Me.type;Be(),Te.autoReset=e,Me.enabled=t,Me.autoUpdate=n,Me.needsUpdate=r,Me.type=i}function We(e){J(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),R.remove(e)}function qe(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Re.setup(i,r,s,n,c);let h,g=Fe;if(c!==null&&(h=B.get(c),g=Ie,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(F.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?B.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Je(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ae.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=je.init(this.clippingPlanes,ve),_e===!0&&je.setGlobalState(this.clippingPlanes,t),D!==null&&Me.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Je(o,n,t,e),r.add(o)}else Je(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}F.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ye=null;function Xe(e){Ye&&Ye(e)}function Ze(){$e.stop()}function Qe(){$e.start()}let $e=new bp;$e.setAnimationLoop(Xe),typeof self<`u`&&$e.setContext(self),this.setAnimationLoop=function(e){Ye=e,Ve.setAnimationLoop(e),e===null?$e.stop():$e.start()},Ve.addEventListener(`sessionstart`,Ze),Ve.addEventListener(`sessionend`,Qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){J(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ve.enabled===!0&&Ve.isPresenting===!0,r=w!==null&&(A===null||n)&&w.begin(T,A);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,A),x=Ae.get(e,C.length),x.init(t),x.state.textureUnits=Ee.getTextureUnits(),C.push(x),N.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(N,Zc,t.reversedDepth),ve=this.localClippingEnabled,_e=je.init(this.clippingPlanes,ve),b=H.get(e,S.length),b.init(),S.push(b),Ve.enabled===!0&&Ve.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&et(e,t,-1/0,T.sortObjects)}et(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(M,fe),Se=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Se&&Ne.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&je.beginShadows();let i=x.state.shadowsArray;if(Me.render(i,e,t),_e===!0&&je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];nt(n,r,e,a)}Se&&Ne.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];tt(b,e,n,n.viewport)}}else r.length>0&&nt(n,r,e,t),Se&&Ne.render(e),tt(b,e,t)}A!==null&&ne===0&&(Ee.updateMultisampleRenderTarget(A),Ee.updateRenderTargetMipmap(A)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Re.resetDefaultState(),re=-1,ie=null,C.pop(),C.length>0?(x=C[C.length-1],Ee.setTextureUnits(x.state.textureUnits),_e===!0&&je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function et(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ge)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(N);let i=Oe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,be.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ge))){let i=Oe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),be.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(N)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,be.z,s,t)}}else a.visible&&b.push(e,i,a,n,be.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)et(i[e],t,n,r)}function tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&je.setGlobalState(T.clippingPlanes,n),r&&L.viewport(ae.copy(r)),i.length>0&&rt(i,t,n),a.length>0&&rt(a,t,n),o.length>0&&rt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function nt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=F.has(`EXT_color_buffer_half_float`)||F.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Bl(1,1,{generateMipmaps:!0,type:e?Rs:js,minFilter:As,samples:Math.max(4,I.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dl.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ae;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(se),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),Se&&Ne.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&je.setGlobalState(T.clippingPlanes,r),rt(e,n,r),Ee.updateMultisampleRenderTarget(a),Ee.updateRenderTargetMipmap(a),F.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,it(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ee.updateMultisampleRenderTarget(a),Ee.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(se,ce),d!==void 0&&(r.viewport=d),T.toneMapping=u}function rt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&it(o,t,n,s,l,c)}}function it(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function at(e,t,n){t.isScene!==!0&&(t=xe);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=z.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return st(e,s),d}else s.uniforms=ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=je.uniform),st(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=hh.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function st(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function lt(e,t,n,r,i){t.isScene!==!0&&(t=xe),Ee.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Dl.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=z.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=x.state.lights;if(_e===!0&&(ve===!0||e!==ie)){let t=e===ie&&r.id===re;je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==je.numPlanes||v.numIntersection!==je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==re&&(re=r.id,w=!0),v.needsLights){let e=ct(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ie!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,ye.setFromMatrixPosition(e.matrixWorld)),I.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Ee),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Ee),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Ee),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Ee)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,Ee))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,Ee),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,Ee),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,Ee));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Pe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=Ig()),w){if(O.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(ee,E),a&&r.fog===!0&&V.refreshFogUniforms(ee,a),V.refreshMaterialUniforms(ee,r,de,ue,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}hh.upload(P,ot(v),ee,Ee)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(hh.upload(P,ot(v),ee,Ee),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ze.update(n,S),ze.bind(n,S)}}return S}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){A=e,te=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ae.copy(e.viewport),oe.copy(e.scissor),j=e.scissorTest,L.viewport(ae),L.scissor(oe),L.setScissorTest(j),re=-1;return}if(o.__webglFramebuffer===void 0)Ee.setupRenderTarget(e);else if(o.__hasExternalTextures)Ee.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ee.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ee.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ae.copy(e.viewport),oe.copy(e.scissor),j=e.scissorTest}else ae.copy(pe).multiplyScalar(de).floor(),oe.copy(me).multiplyScalar(de).floor(),j=he;if(n!==0&&(r=O),L.bindFramebuffer(P.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(ae),L.scissor(oe),L.setScissorTest(j),i){let r=R.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}re=-1};function ft(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=I.textureFormatReadable(e.format),t.__typeReadable=I.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){J(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,Le.convert(c),Le.convert(l),a)}finally{let e=A===null?null:R.get(A).__webglFramebuffer;L.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,Le.convert(l),Le.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=A===null?null:R.get(A).__webglFramebuffer;L.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ol(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ee.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Le.convert(t.format),_=Le.convert(t.type),v;t.isData3DTexture?(Ee.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ee.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Ee.setTexture2D(t,0),v=P.TEXTURE_2D),L.activeTexture(P.TEXTURE0),L.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(P.UNPACK_ROW_LENGTH),b=L.getParameter(P.UNPACK_IMAGE_HEIGHT),x=L.getParameter(P.UNPACK_SKIP_PIXELS),S=L.getParameter(P.UNPACK_SKIP_ROWS),C=L.getParameter(P.UNPACK_SKIP_IMAGES);L.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(P.UNPACK_SKIP_PIXELS,l),L.pixelStorei(P.UNPACK_SKIP_ROWS,u),L.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);L.bindFramebuffer(P.READ_FRAMEBUFFER,null),L.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(P.READ_FRAMEBUFFER,ee),L.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);L.bindFramebuffer(P.READ_FRAMEBUFFER,null),L.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(P.UNPACK_ROW_LENGTH,y),L.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(P.UNPACK_SKIP_PIXELS,x),L.pixelStorei(P.UNPACK_SKIP_ROWS,S),L.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Ee.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ee.setTextureCube(e,0):e.isData3DTexture?Ee.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ee.setTexture2DArray(e,0):Ee.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){te=0,ne=0,A=null,L.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Zc}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Dl._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dl._getUnpackColorSpace()}},Rg=new Map;function zg(e){let t=Rg.get(e);if(!t){let n=e.replace(`#`,``),r=parseInt(n.length===3?n.replace(/./g,e=>e+e):n,16);t=[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255],Rg.set(e,t)}return t}var Bg=10,Vg={on:!1,ky:1,cy:0,zx:0,zy:0,zc:0};function Hg(e,t,n,r){Vg.on=!0,Vg.ky=1-r,Vg.cy=t*r,Vg.zx=0,Vg.zy=r,Vg.zc=-n-t*r}function Ug(e){Hg(0,0,e,0)}function Wg(e,t,n,r){let i=Math.abs(n-e)<.001?0:(r-t)/(n-e);Vg.on=!0,Vg.ky=1,Vg.cy=0,Vg.zx=0,Vg.zy=-i,Vg.zc=-(t-i*e)}function Gg(e,t){Vg.on=!0,Vg.ky=0,Vg.cy=e,Vg.zx=0,Vg.zy=1,Vg.zc=-t}function Kg(){Vg.on=!1}function qg(e,t){return Vg.on?[t*Vg.ky+Vg.cy,-(e*Vg.zx+t*Vg.zy+Vg.zc)]:[t,0]}var Jg=`
attribute vec4 color4;
varying vec4 vCol;
void main(){ vCol = color4; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Yg=`
varying vec4 vCol;
void main(){ gl_FragColor = vCol; }`,Xg=class{mesh;geo=new bd;pos;col;cap=0;n=0;m=[1,0,0,1,0,0];stack=[];path=[];cur=null;constructor(e,t){this.grow(16384);let n=new wf({vertexShader:Jg,fragmentShader:Yg,transparent:!0,depthTest:!1,depthWrite:!1,side:2,blending:e?2:1});this.mesh=new Wd(this.geo,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t}grow(e){let t=new Float32Array(e*3),n=new Float32Array(e*4);this.pos&&(t.set(this.pos.subarray(0,this.n*3)),n.set(this.col.subarray(0,this.n*4))),this.pos=t,this.col=n,this.cap=e,this.geo.setAttribute(`position`,new ad(t,3).setUsage(Xc)),this.geo.setAttribute(`color4`,new ad(n,4).setUsage(Xc))}begin(){this.n=0,this.m=[1,0,0,1,0,0],this.stack.length=0,this.path=[],this.cur=null}end(){let e=this.geo.getAttribute(`position`),t=this.geo.getAttribute(`color4`);e.clearUpdateRanges(),t.clearUpdateRanges(),e.addUpdateRange(0,this.n*3),t.addUpdateRange(0,this.n*4),e.needsUpdate=!0,t.needsUpdate=!0,this.geo.setDrawRange(0,this.n)}tri(e,t,n,r,i,a,o,s,c,l){this.n+3>this.cap&&this.grow(this.cap*2);let u=this.pos,d=this.col,f=this.n*3;if(Vg.on){let{ky:o,cy:s,zx:c,zy:l,zc:d}=Vg;u[f++]=e,u[f++]=t*o+s,u[f++]=e*c+t*l+d,u[f++]=n,u[f++]=r*o+s,u[f++]=n*c+r*l+d,u[f++]=i,u[f++]=a*o+s,u[f++]=i*c+a*l+d}else u[f++]=e,u[f++]=t,u[f++]=0,u[f++]=n,u[f++]=r,u[f++]=0,u[f++]=i,u[f++]=a,u[f++]=0;let p=this.n*4;for(let e=0;e<3;e++)d[p++]=o,d[p++]=s,d[p++]=c,d[p++]=l;this.n+=3}save(){this.stack.push([...this.m])}restore(){let e=this.stack.pop();e&&(this.m=e)}translate(e,t){let n=this.m;n[4]+=n[0]*e+n[2]*t,n[5]+=n[1]*e+n[3]*t}rotate(e){let t=this.m,n=Math.cos(e),r=Math.sin(e),[i,a,o,s]=t;t[0]=i*n+o*r,t[1]=a*n+s*r,t[2]=-i*r+o*n,t[3]=-a*r+s*n}scale(e,t=e){let n=this.m;n[0]*=e,n[1]*=e,n[2]*=t,n[3]*=t}tx(e,t){let n=this.m;return[n[0]*e+n[2]*t+n[4],n[1]*e+n[3]*t+n[5]]}lineScale(){let e=this.m;return Math.sqrt(Math.abs(e[0]*e[3]-e[1]*e[2]))}beginPath(){return this.path=[],this.cur=null,this}moveTo(e,t){return this.cur={pts:[this.tx(e,t)],closed:!1},this.path.push(this.cur),this}lineTo(e,t){return this.cur?(this.cur.pts.push(this.tx(e,t)),this):this.moveTo(e,t)}closePath(){if(this.cur){this.cur.closed=!0;let e=this.cur.pts[0];this.cur={pts:[e],closed:!1},this.path.push(this.cur)}return this}arc(e,t,n,r,i,a=!1){return this.ellipse(e,t,n,n,0,r,i,a)}ellipse(e,t,n,r,i,a,o,s=!1){let c=o-a,l=Math.abs(c)>=Math.PI*2-1e-6;s&&!l&&(c=c>0?c-Math.PI*2:c),s&&l&&(c=-Math.PI*2);let u=Math.max(n,r)*this.lineScale(),d=Math.max(8,Math.min(72,Math.ceil(u*Math.abs(c)/5))),f=Math.cos(i),p=Math.sin(i),m=[];for(let i=0;i<=(l?d-1:d);i++){let o=a+c*i/d,s=Math.cos(o)*n,l=Math.sin(o)*r;m.push(this.tx(e+s*f-l*p,t+s*p+l*f))}return this.cur&&!l&&this.cur.pts.length>=1&&!this.cur.closed?this.cur.pts.push(...m):(this.cur={pts:m,closed:l},this.path.push(this.cur),l&&(this.cur=null)),this}rect(e,t,n,r){return this.moveTo(e,t).lineTo(e+n,t).lineTo(e+n,t+r).lineTo(e,t+r).closePath(),this}poly(e,t,n,r,i){this.beginPath();for(let a=0;a<r;a++){let o=i+a*Math.PI*2/r,s=e+Math.cos(o)*n,c=t+Math.sin(o)*n;a?this.lineTo(s,c):this.moveTo(s,c)}return this.closePath()}stroke(e,t,n=1,r,i=0){if(n<=.001)return this;let[a,o,s]=zg(e),c=this.lineScale(),l=t*c/2;for(let e of this.path)if(!(e.pts.length<2)){if(r)for(let t of Zg(e.pts,e.closed,r[0]*c,r[1]*c,i*c))this.strip(t,!1,l,a,o,s,n);else this.strip(e.pts,e.closed,l,a,o,s,n)}return this}glow(e,t,n=1,r,i=0){return this.stroke(e,t*4,.22*n,r,i),this.stroke(e,t,n,r,i)}fill(e,t=1){if(t<=.001)return this;let[n,r,i]=zg(e);for(let e of this.path){let a=e.pts;for(let e=1;e+1<a.length;e++)this.tri(a[0][0],a[0][1],a[e][0],a[e][1],a[e+1][0],a[e+1][1],n,r,i,t)}return this}fillRect(e,t,n,r,i,a=1){this.beginPath().rect(e,t,n,r).fill(i,a)}strip(e,t,n,r,i,a,o){let s=e.length,c=s;if(t&&s>2&&e[0][0]===e[s-1][0]&&e[0][1]===e[s-1][1]&&c--,c<2)return;let l=Array(c),u=Array(c),d=(t,n)=>{let r=e[n][0]-e[t][0],i=e[n][1]-e[t][1],a=Math.hypot(r,i)||1;return[-i/a,r/a]};for(let r=0;r<c;r++){let i=t||r>0,a=t||r<c-1,o=i?d((r-1+c)%c,r):null,s=a?d(r,(r+1)%c):null,f,p,m=n;if(o&&s){f=o[0]+s[0],p=o[1]+s[1];let e=Math.hypot(f,p);if(e<1e-6)f=s[0],p=s[1];else{f/=e,p/=e;let t=f*s[0]+p*s[1];m=Math.min(n/Math.max(t,.001),n*Bg*.5)}}else{let e=o||s;f=e[0],p=e[1]}l[r]=[e[r][0]+f*m,e[r][1]+p*m],u[r]=[e[r][0]-f*m,e[r][1]-p*m]}let f=t?c:c-1;for(let e=0;e<f;e++){let t=(e+1)%c;this.tri(l[e][0],l[e][1],u[e][0],u[e][1],l[t][0],l[t][1],r,i,a,o),this.tri(u[e][0],u[e][1],u[t][0],u[t][1],l[t][0],l[t][1],r,i,a,o)}}};function Zg(e,t,n,r,i){let a=t?[...e,e[0]]:e,o=n+r;if(o<=0)return[a];let s=(i%o+o)%o,c=[],l=s<n?[a[0]]:null;for(let e=0;e+1<a.length;e++){let[t,r]=a[e],[i,u]=a[e+1],d=Math.hypot(i-t,u-r),f=0;for(;f<d;){let e=s<n,a=(e?n:o)-s,p=Math.min(a,d-f);f+=p,s+=p;let m=d?f/d:1,h=[t+(i-t)*m,r+(u-r)*m];e?(l.push(h),s>=n-1e-9&&(c.push(l),l=null,s=n)):s>=o-1e-9&&(s=0,l=[h])}}return l&&l.length>1&&c.push(l),c.filter(e=>e.length>1)}var Qg=[],$g={partsStride:1},e_=`"Chakra Petch",sans-serif`,t_=(e,t,n,r,i,a=`center`,o=`middle`,s=1)=>{let[c,l]=qg(e,t);Qg.push({x:e,y:c,h:l,text:n,col:r,font:i,align:a,base:o,alpha:s})},n_=0,r_=0;function i_(e,t,n){n_||n?Hg(e,t,n??0,n_):Kg()}var a_=(e,t,n,r,i=26)=>t_(e,t,String(n),r,`700 ${i}px ${e_}`,`center`,`middle`,.9);function o_(){let e=K.secObj;return K.state===`title`||!e?N.accent:e.type===`warn`?N.warn:e.type===`boss`?N.enemy:Se(K.stage.floor)}function s_(e,t,n=0){n&&Ug(n);let r=o_(),i=K.kickP,a=-o.DEPTH_GRID_AHEAD,s=o.DEPTH_GRID_STEP;e.bgFill.fillRect(-W*3,a,W*7,G+80-a,K.state===`title`?`#0c1131`:K.stage.bg,.55*t);let c=e.bgAdd;for(let e=-14;e<=14;e++){let n=W/2+e*s;c.beginPath().moveTo(n,a).lineTo(n,G+80).stroke(r,1.4,(.1+i*.08)*t)}let l=K.scroll*.5%s;for(let e=a+l;e<G+80;e+=s){let n=I((e-a)/-a,0,1);c.beginPath().moveTo(-W*3,e).lineTo(W*4,e).stroke(r,1.2+n*1.2,(.04+.2*n)*(1+i*.9)*t)}Kg()}function c_(e,t,n){t>0&&s_(e,t),n>0&&(s_(e,n,-s.GRID_Z),s_(e,n*.5,s.GRID_Z));let r=1-n;if(r<=0)return;let i=e.bgFill,a=K.state===`title`?`#0c1131`:K.stage.bg;for(let e=0;e<24;e++){let t=-40+(G+80)*e/24,n=-40+(G+80)*(e+1)/24;i.fillRect(-40,t,W+80,n-t+.5,l_(a,`#05060f`,(e+.5)/24),r)}let o=e.bgAdd,c=o_(),l=K.kickP,u=W/2+Math.sin(K.time*.35)*40,d=-320,f=(1-t)*r;if(f>0){for(let e=-9;e<=9;e++)o.beginPath().moveTo(u,d).lineTo(W/2+e*95,G+40).stroke(c,1,(.07+l*.06)*f);let e=K.scroll/520%1;for(let t=0;t<16;t++){let n=(t+e)/16,r=d+(G+40-d)*n**2.3;o.beginPath().moveTo(-20,r).lineTo(W+20,r).stroke(c,.6+n*1.6,(.03+.22*n)*(1+l*.9)*f)}}for(let e of Yo){let t=2+K.speed*(1+K.warp*2)*e.z*.03;o.beginPath().moveTo(e.x,e.y).lineTo(e.x,e.y-t).stroke(N.text,e.z*1.6,e.z*.55*r)}for(let e=0;e<24;e++){let t=(e*44+K.scroll*.5)%(G+44)-22,n=Math.max(l,K.snP*.7),i=(.12+n*.5*(1-e/30))*r,a=e%2?c:N.text,s=6+n*18*(.5+.5*Math.sin(e*1.7));o.fillRect(0,t,s,3,a,i),o.fillRect(W-s,t,s,3,a,i)}}function l_(e,t,n){let r=parseInt(e.slice(1),16),i=parseInt(t.slice(1),16),a=e=>Math.round((r>>e&255)*(1-n)+(i>>e&255)*n);return`#`+(1<<24|a(16)<<16|a(8)<<8|a(0)).toString(16).slice(1)}function u_(e){if(!n_)return;let t=e.bgAdd,n=-s.GRID_Z;Ug(n);let r=(e,r,i,a,o)=>{let c=I((i-n)/(s.GRID_Z*2),0,1);t.beginPath().arc(e,r,a*(1+c*.6),0,Math.PI*2).fill(o,s.SHADOW_A*n_*(1-c*.6))};for(let e of K.ebul)r(e.x,e.y,e.z??0,e.r,N.enemy);for(let e of K.enemies)e.y>-20&&r(e.x,e.y,e.z??0,e.r*s.SHADOW_ENEMY_R,N.enemy);Kg()}function d_(e){if(!n_||!K.player)return;let t=e.aoeAdd,n=K.player;Gg(jr,s.GRID_Z);for(let e of K.ebul){if(e.vy<=1||e.y>=jr)continue;let r=(jr-e.y)/e.vy;if(r>s.MARK_SEC)continue;let i=e.x+e.vx*r,a=I((e.z??0)+(K.rail?(e.vz??0)*r:0),-s.GRID_Z,s.GRID_Z),o=r/s.MARK_SEC,c=Math.hypot(i-n.x,a-n.z)<e.r+x.BULLET_HIT_PAD+4,l=c?N.warn:N.enemy,u=(.35+.65*(1-o))*n_;t.beginPath().arc(i,Nr(a),e.r+s.MARK_R*o,0,Math.PI*2).glow(l,c?2:1.4,u),c&&t.beginPath().arc(i,Nr(a),2.5,0,Math.PI*2).fill(l,u)}Kg()}var f_=o.AOE_EXTEND;function p_(e,t){switch(e.beginPath(),t.kind){case`circle`:case`chase`:e.arc(t.x,t.y,t.r,0,Math.PI*2);break;case`donut`:e.arc(t.x,t.y,t.r2,0,Math.PI*2),e.arc(t.x,t.y,t.r1,0,Math.PI*2);break;case`lane`:e.rect(t.x-t.w/2,-f_,t.w,Oa(t)+f_*2);break;case`row`:e.rect(-f_,t.y-t.h/2,W+f_*2,t.h);break;case`cone`:e.moveTo(t.ox,t.oy),e.arc(t.ox,t.oy,t.len,t.ang-t.hw,t.ang+t.hw),e.closePath();break;case`checker`:{let[n,r]=ka(t),i=W/n,a=Oa(t)/r;for(let o=0;o<n;o++)for(let n=0;n<r;n++)(o+n)%2===t.par&&e.rect(o*i,n*a,i,a);break}}}function m_(e,t,n,r,i){e.beginPath().rect(t.gx-t.gw/2,t.gy-t.gh/2,t.gw,t.gh).glow(n,r,i)}var h_=e=>e>jr+s.CAM_BACK*.8;function g_(e,t,n){if(n<Aa(t)||n>=t.e)return;let r=ja(t,n);if(r>G+40)return;let i=e.aoeAdd,a=t.gx-t.gw/2,o=t.gx+t.gw/2;i.fillRect(-f_,r-16,a+f_,32,N.enemy,.5),i.fillRect(o,r-16,W+f_-o,32,N.enemy,.5),i.fillRect(-f_,r-5,a+f_,10,N.white,.9),i.fillRect(o,r-5,W+f_-o,10,N.white,.9)}function __(e,t,n,r){if(n<Aa(t)||n>=t.e)return r;let i=ja(t,n);if(h_(i))return r;let a=e.aoeNorm,o=I(1-Math.abs(jr-i)/s.WALL_FAR,0,1);return e.aoeFill.draw(t,{mode:`beam`,col1:N.enemy,a1:.15+.35*o,col2:N.white,a2:.08*o,hatchOff:0},r++,i),Gg(i,s.GRID_Z),m_(a,t,N.white,2,.5+.5*o),Gg(jr,s.GRID_Z),r}function v_(e,t){let n=e.aoeNorm,r=0;for(let i of K.aoes){i.rail?Gg(jr,s.GRID_Z):Kg(),i.kind===`wall`&&(i.rail?r=__(e,i,t,r):g_(e,i,t));let a=Oa(i),o=I((t-i.c)/(i.d-i.c),0,1),c=F.beat,l=Math.max(0,1-((t-i.c-c/2)%c+c)%c/1.4),u=Math.ceil((i.d-t)/c),d=i.kind===`safe`?N.enemy:N.warn;if(t<i.d)switch(e.aoeFill.draw(i,{mode:`pre`,col1:d,a1:.05+o*.12+l*.08,col2:d,a2:.1+o*.14,hatchOff:t*3},r++),i.kind!==`safe`&&i.kind!==`wall`&&(p_(n,i),n.glow(d,1.6,.6+l*.4,[12,8],-t*5)),i.kind){case`circle`:case`chase`:n.beginPath().arc(i.x,i.y,i.r*o,0,Math.PI*2).fill(N.warn,.14+o*.14),i.kind===`chase`&&t<i.lock&&n.beginPath().moveTo(i.x-i.r-12,i.y).lineTo(i.x+i.r+12,i.y).moveTo(i.x,i.y-i.r-12).lineTo(i.x,i.y+i.r+12).glow(N.enemy,1.5,.8),a_(i.x,i.y-i.r*.6,u,N.warn);break;case`safe`:n.beginPath().arc(i.x,i.y,i.r,0,Math.PI*2).glow(N.player,2.5,.7+l*.3),n.beginPath().arc(i.x,i.y,i.r+60*(1-o),0,Math.PI*2).glow(N.player,1,.5*(1-o)),a_(i.x,i.y-10,U(`aoeLabel.safe`),N.player,18),a_(i.x,i.y+16,u,N.player,24);break;case`donut`:a_(i.x,i.y-i.r1*.6,u,N.player,22);break;case`lane`:{let e=.6+l*.4;n.fillRect(i.x-i.w*o/2,-f_,i.w*o,a+f_*2,N.warn,.14+o*.14);for(let t=K.scroll*.4%90-90;t<a;t+=90)b_(n,i.x,t,!1,e);let[,t]=Sa(i);a_(i.x,I(t-70,30,a-30),u,N.warn);break}case`row`:{let e=.6+l*.4;n.fillRect(-f_,i.y-i.h*o/2,W+f_*2,i.h*o,N.warn,.14+o*.14);for(let t=K.time*120%90-90;t<W;t+=90)b_(n,t,i.y,!0,e);let[t]=Sa(i);a_(I(t+(t<W/2?70:-70),30,W-30),i.y,u,N.warn);break}case`cone`:a_(i.ox+Math.cos(i.ang)*240,i.oy+Math.sin(i.ang)*240,u,N.warn);break;case`checker`:{let[e,t]=ka(i),n=W/e,r=a/t;for(let a=0;a<e;a++)for(let e=0;e<t;e++)(a+e)%2===i.par&&a_(a*n+n/2,e*r+r/2,u,N.warn,20);break}case`wall`:if(i.rail){m_(n,i,N.player,2,.6+l*.4),a_(i.gx,i.gy-10,U(`aoeLabel.gate`),N.player,18),a_(i.gx,i.gy+16,u,N.player,24);break}n.beginPath().moveTo(i.gx-i.gw/2,0).lineTo(i.gx-i.gw/2,G).moveTo(i.gx+i.gw/2,0).lineTo(i.gx+i.gw/2,G).glow(N.player,2,.6+l*.4),a_(i.gx,G*.3,U(`aoeLabel.gate`),N.player,18),a_(i.gx,G*.3+26,u,N.player,24)}else if(i.e!=null){if(i.kind!==`wall`){let n=t<i.e?1:Math.max(0,1-(t-i.e)/4);e.aoeFill.draw(i,{mode:`beam`,col1:N.enemy,a1:.4*n,col2:N.white,a2:(.25+.15*Math.sin(t*6))*n,hatchOff:0},r++)}}else{let n=(t-i.d)/8;e.aoeFill.draw(i,{mode:`after`,col1:i.kind===`safe`?N.warn:N.white,a1:Math.max(0,.6*(1-n*1.6)),col2:N.white,a2:0,hatchOff:0},r++)}}Kg()}function y_(e,t){let n=e.aoeAdd,r=s.GRID_Z,i=F.beat,a=Math.max(0,1-(t%i+i)%i/1.4);for(let o of K.obstacles){let c=La(o,t),l=o.x-o.w/2,u=Nr(o.z+o.h/2),d=I(1-(o.hit-t)/(s.OBST_LEAD_BEATS*i),0,1);if(c<jr&&(Gg(jr,r),n.beginPath().rect(l,u,o.w,o.h).glow(N.warn,1.2,(.25+.4*a)*d,[10,8],-t*4)),h_(c))continue;let f=s.OBST_DEPTH/2,p=.35+.65*d;Gg(c-f,r),n.beginPath().rect(l,u,o.w,o.h).glow(N.enemy,1.2,p*.6),Gg(c+f,r),e.aoeNorm.fillRect(l,u,o.w,o.h,N.enemy,.12+.18*d),n.beginPath().rect(l,u,o.w,o.h).glow(N.enemy,2,p);for(let e of[o.z+o.h/2,o.z-o.h/2])Ug(e),n.beginPath().moveTo(l,c-f).lineTo(l,c+f).moveTo(l+o.w,c-f).lineTo(l+o.w,c+f).glow(N.enemy,1.2,p*.8)}Kg()}function b_(e,t,n,r,i){let a=(e,i)=>r?[t+i,n+e]:[t+e,n+i],o=t=>{e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.closePath().fill(N.warn,i)};o([a(-12,0),a(0,12),a(0,18),a(-12,6)]),o([a(0,12),a(12,0),a(12,6),a(0,18)])}function x_(e,t,n){let r=e.items,i=Qt(`weaponLetters`);for(let e of K.items){i_(e.x,e.y,e.z);let t=1+K.kickP*.18;if(e.kind===`heal`){let n=(e.big?15:11)*t;r.beginPath().arc(e.x,e.y,n,0,Math.PI*2).fill(N.heal,.18).glow(N.heal,2),r.beginPath().moveTo(e.x-n*.5,e.y).lineTo(e.x+n*.5,e.y).moveTo(e.x,e.y-n*.5).lineTo(e.x,e.y+n*.5).stroke(N.white,e.big?4:3)}else{let n=e.w??0,a=Ce[n],o=Ti(e),s=Math.ceil((1-o)*4);o>0&&r.poly(e.x,e.y,30+K.kickP*6,6,Math.PI/6).glow(Ce[(n+1)%3],2,.3+.6*o),r.poly(e.x,e.y,18*t,6,Math.PI/6).fill(N.ink,.75).glow(a,2.4),t_(e.x,e.y+1,i[n],a,`700 18px ${e_}`);let c=Math.min(s,4);for(let t=0;t<4;t++)t<c?r.fillRect(e.x-17+t*9,e.y+26,6,6,a):r.fillRect(e.x-17+t*9,e.y+26,6,6,N.dim,.3)}}Kg()}var S_=(e,t)=>e.teleAt==null||e.fireAt==null?-1:I((t-e.teleAt)/(e.fireAt-e.teleAt),0,1);function C_(e,t,n,r,i){e.beginPath().arc(t,n,r*(1.15+1.6*(1-i)),0,Math.PI*2).glow(N.warn,1.6,.35+.65*i)}function w_(e,t){let n=e.enemies,r=K.player;for(let e of K.enemies){if(e.y<-60)continue;i_(e.x,e.y,e.z);let i=e.flash>0,a=S_(e,t);switch(a>=0&&e.type!==`lancer`&&C_(n,e.x,e.y,e.r,a),e.type){case`drone`:{let t=i?N.white:N.enemy,r=e.small?.65:1;n.save(),n.translate(e.x,e.y),n.rotate(Math.sin(e.rot)*.3),n.scale(r,r),n.beginPath().moveTo(0,16).lineTo(15,-10).lineTo(0,-4).lineTo(-15,-10).closePath().glow(t,2),n.beginPath().arc(0,2,3+K.kickP*2,0,Math.PI*2).fill(t),n.restore();break}case`carrier`:{let t=i?N.warn:N.white,r=Se(K.kit.color,N.player);n.poly(e.x,e.y,e.r*(1+K.kickP*.1),6,e.rot).glow(t,2),n.poly(e.x,e.y,9,6,-e.rot*2).fill(r),n.beginPath().moveTo(e.x-e.r-14,e.y).lineTo(e.x-e.r-4,e.y).moveTo(e.x+e.r+4,e.y).lineTo(e.x+e.r+14,e.y).glow(r,1.5,.8);break}case`spinner`:{let t=i?N.white:N.accent,r=1+K.kickP*.15;n.poly(e.x,e.y,e.r*r,4,e.rot).glow(t,2),n.poly(e.x,e.y,e.r*.55*r,4,-e.rot*1.7+Math.PI/4).glow(N.player,1.5,.8);break}case`lancer`:{let t=i?N.white:N.enemy,r=e.ang??Math.PI/2;e.ang!=null&&!e.dash&&n.beginPath().moveTo(e.x,e.y).lineTo(e.x+Math.cos(r)*1200,e.y+Math.sin(r)*1200).glow(a>=0?N.warn:N.enemy,1+a,.55+.45*Math.max(0,a),[6,8]),n.save(),n.translate(e.x,e.y),n.rotate(r-Math.PI/2),n.beginPath().moveTo(0,22).lineTo(9,-12).lineTo(0,-6).lineTo(-9,-12).closePath().glow(t,2),n.restore();break}case`mine`:{let t=e.life-e.t<1.2&&!ts(K.time,12),r=i||t?N.white:N.warn,o=1+Math.max(0,a)*.45;n.beginPath().arc(e.x,e.y,e.r*o*(1+K.kickP*.15),0,Math.PI*2).glow(r,2);for(let t=0;t<8;t++){let i=e.rot+t*Math.PI/4;n.beginPath().moveTo(e.x+Math.cos(i)*e.r,e.y+Math.sin(i)*e.r).lineTo(e.x+Math.cos(i)*(e.r+7),e.y+Math.sin(i)*(e.r+7)).glow(r,1.5,.8)}n.beginPath().arc(e.x,e.y,4,0,Math.PI*2).fill(r);break}case`seg`:{let t=i?N.white:e.head?N.enemy:N.accent;n.beginPath().arc(e.x,e.y,e.r,0,Math.PI*2).glow(t,2),e.head&&(n.fillRect(e.x-6,e.y+2,3,3,t),n.fillRect(e.x+3,e.y+2,3,3,t));break}case`bastion`:{let t=i?N.white:N.enemy;n.poly(e.x,e.y,e.r,6,Math.PI/6).fill(N.ink,.6).glow(t,2.5),n.poly(e.x,e.y,e.r*.6,6,e.rot).glow(N.lime,1.5,.8);let a=Math.atan2(r.y-e.y,r.x-e.x);n.beginPath().moveTo(e.x,e.y).lineTo(e.x+Math.cos(a)*e.r*1.3,e.y+Math.sin(a)*e.r*1.3).glow(N.lime,3);break}case`splitter`:{let t=i?N.white:N.accent;n.poly(e.x,e.y,e.r,4,e.rot).glow(t,2);for(let r=0;r<3;r++){let i=e.rot*2+r*2.094;n.beginPath().arc(e.x+Math.cos(i)*7,e.y+Math.sin(i)*7,2.5,0,Math.PI*2).fill(t)}break}}}if(K.boss){i_(K.boss.x,K.boss.y,K.boss.z);let e=S_(K.boss,t);e>=0&&K.boss.vuln&&!K.boss.dying&&C_(n,K.boss.x,K.boss.y,K.boss.r*.8,e),T_(n,K.boss)}Kg()}function T_(e,t){let n=t.cfg,r=K.kickP,i=t.r,a=K.bossPhase2?t.morph==null?1:1-(1-t.morph)**3:0,o=t.morph!=null&&t.morph<1?1+Math.sin(t.morph*Math.PI)*.28:1,s=t.flash>0?N.white:N.enemy,c=a>.5?Se(n.col2,N.white):Se(n.inner),l=(1+r*.07)*o,u=K.time,d=t.rot,f=()=>t.dying?(Math.random()*2-1)*6:0;switch(e.save(),e.translate(t.x+f(),t.y+f()),e.scale(l,l),n.look){case`shield`:e.poly(0,0,i*.72,5,d).fill(N.ink,.55).glow(s,2.5);for(let t=0;t<5;t++){let n=d*(1+a)+t*Math.PI*.4,r=i*(1.02+.45*a);e.save(),e.rotate(n),e.translate(r,0),e.beginPath().moveTo(-8,-22).lineTo(10,-16).lineTo(10,16).lineTo(-8,22).closePath().glow(c,2),e.restore()}if(a>0)for(let t=0;t<5;t++){let n=d+t*Math.PI*.4+.63;e.beginPath().moveTo(Math.cos(n)*i*.7,Math.sin(n)*i*.7).lineTo(Math.cos(n)*i*(.7+.35*a),Math.sin(n)*i*(.7+.35*a)).glow(s,2,a)}e.beginPath().arc(0,0,18,0,Math.PI*2).fill(N.white),e.beginPath().arc(Math.cos(u*1.3)*5,Math.sin(u*1.7)*3,7+5*a,0,Math.PI*2).fill(a>.5?N.enemy:N.ink);break;case`tide`:{let t=4+Math.round(4*a);for(let n=0;n<t;n++){let r=(n-(t-1)/2)*(i*1.5/t);e.beginPath().moveTo(r,i*.4);for(let t=1;t<=10;t++){let o=i*.4+t*i*(.12+.06*a);e.lineTo(r+Math.sin(u*3+n+t*.6)*(8+6*a)*(t/10),o)}e.glow(c,1.6,.85)}e.poly(0,0,i*.85,6,d*.5).fill(N.ink,.55).glow(s,2.5);for(let t=0;t<3;t++)e.beginPath().arc(0,0,i*(.3+t*.16)+Math.sin(u*4-t)*3,0,Math.PI*2).glow(c,1.2,.6);e.beginPath().arc(0,0,12+r*6,0,Math.PI*2).fill(N.white);break}case`disco`:if(e.save(),e.rotate(Math.PI/4*(1-a)),a<1&&e.poly(0,0,i*.95,4,0).fill(N.ink,.55).glow(s,2.5,1-a*.6),e.restore(),a>0){e.beginPath().arc(0,0,i*.8,0,Math.PI*2).fill(N.ink,.6).glow(c,2.5,a);let t=i*.8;for(let n=-6;n<=6;n++)for(let r=-6;r<=6;r++){let i=n*12+u*30%12,o=r*12;((n+r+Math.floor(u*8))%5+5)%5==0&&i*i+o*o<t*t&&e.fillRect(i-4,o-4,8,8,c,.7*a)}for(let t=0;t<6;t++){let n=u*.8+t*1.05,r=i*(1.1+.2*Math.sin(u*3+t));e.fillRect(Math.cos(n)*r-2,Math.sin(n)*r-2,4,4,N.white,.5+.5*Math.sin(u*9+t))}}for(let t=-1;t<=1;t++)e.beginPath().moveTo(t*22-10,-i*.95).lineTo(t*22,-i*(1.25+.1*r)).lineTo(t*22+10,-i*.95).glow(N.warn,2);e.beginPath().arc(0,0,11+r*5,0,Math.PI*2).fill(N.white);break;case`sun`:{let t=i*(.3+.35*r+.7*a);for(let n=0;n<14;n++){let r=d*.4+n*Math.PI*2/14,a=t*(n%2?.6:1);e.beginPath().moveTo(Math.cos(r)*i*.92,Math.sin(r)*i*.92).lineTo(Math.cos(r)*(i*.92+a),Math.sin(r)*(i*.92+a)).glow(c,2,.9)}e.poly(0,0,i*.85,7,d).fill(N.ink,.5).glow(s,2.5),a>0&&e.beginPath().arc(0,0,i*(1.5+.1*r),0,Math.PI*2).glow(c,2,a,[10,8],-u*40),e.beginPath().arc(0,0,i*(.35+.15*a)+r*6,0,Math.PI*2).fill(a>.5?N.white:N.warn);break}case`pixel`:{let n=[`0010000100`,`0001001000`,`0011111100`,`0110110110`,`1111111111`,`1011111101`,`1010000101`,`0001101100`],r=i*.2*(1+.35*a);for(let i=0;i<n.length;i++)for(let o=0;o<10;o++)if(n[i][o]===`1`){let n=a>0&&Math.random()<.08*a?(Math.random()*2-1)*8:0,s=i===3&&(o===3||o===6)||t.flash>0?N.white:(o+i+Math.floor(u*4))%7==0&&a>0?N.enemy:c;e.fillRect((o-5)*r+n,(i-4)*r,r-2,r-2,s)}break}case`orrery`:{let t=3+Math.round(2*a);for(let n=0;n<t;n++){let t=i*(.95+n*.28),r=t*(.35+.25*a),o=.4+n*.5+a*u*.3,s=u*(1.6-n*.25)+n;e.save(),e.rotate(o),e.beginPath().ellipse(0,0,t,r,0,0,Math.PI*2).glow(c,1,.5),e.beginPath().arc(Math.cos(s)*t,Math.sin(s)*r,6+n%2*3,0,Math.PI*2).fill(n%2?N.white:c),e.restore()}e.poly(0,0,i*.7,8,d).fill(N.ink,.55).glow(s,2.5),e.beginPath().arc(0,0,14+r*6,0,Math.PI*2).fill(N.warn);break}case`chorus`:{e.poly(0,0,i*.7,5,d).fill(N.ink,.55).glow(s,2.5);let n=3+Math.round(2*a),o=t.flash>0||t.counterUntil>K.now;for(let t=0;t<n;t++){let r=-Math.PI/2+(t-(n-1)/2)*.75,a=i*1.25,s=Math.cos(r)*a,l=Math.sin(r)*a+i*.3;e.beginPath().moveTo(0,0).lineTo(s,l).glow(c,1,.4),e.beginPath().arc(s,l,13,0,Math.PI*2).fill(N.ink,.7).glow(c,2),e.fillRect(s-5,l-4,3,3,N.white),e.fillRect(s+2,l-4,3,3,N.white),e.beginPath().ellipse(s,l+4,4,o?5:1.5,0,0,Math.PI*2).fill(N.white)}e.beginPath().arc(0,0,12+r*6,0,Math.PI*2).fill(N.white);break}case`gravity`:for(let t=0;t<4;t++){let n=(u*.6+t/4)%1;e.beginPath().arc(0,0,i*(1.6-1.2*n),0,Math.PI*2).glow(c,1.4,n*.8)}e.poly(0,0,i*.8,6,d).fill(N.ink,.5).glow(s,2.5,1-a*.5),a>0?(e.save(),e.rotate(.35),e.beginPath().ellipse(0,0,i*1.2,i*.32,0,0,Math.PI*2).glow(N.warn,2.5,a),e.restore(),e.beginPath().arc(0,0,i*.42*a,0,Math.PI*2).fill(`#000000`).glow(N.white,2,a)):e.beginPath().arc(0,0,13+r*6,0,Math.PI*2).fill(N.white);break;case`lattice`:{e.save(),e.rotate(a*Math.PI/4+d*.2*a);let t=i*(.85+.5*a),n=t*2/6;e.beginPath().rect(-t,-t,t*2,t*2).fill(N.ink,.5).glow(s,2.5),e.beginPath();for(let r=1;r<6;r++)e.moveTo(-t+r*n,-t).lineTo(-t+r*n,t),e.moveTo(-t,-t+r*n).lineTo(t,-t+r*n);e.glow(c,1,.6);let o=Math.floor(u*6)%25;e.fillRect(-t+(o%5+.5)*n+n*.15,-t+(Math.floor(o/5)+.5)*n+n*.15,n*.7,n*.7,c),e.restore(),e.beginPath().arc(0,0,12+r*6,0,Math.PI*2).fill(N.white);break}default:if(a>0)for(let t of[-1,1])e.save(),e.scale(t,1),e.beginPath().moveTo(i*.6,-10).lineTo(i*(.6+1.1*a),-i*.9*a).lineTo(i*(.6+.9*a),i*.1).lineTo(i*(.6+1.2*a),i*.6*a).lineTo(i*.6,20).glow(c,2.2,a),e.restore();for(let t=0;t<8;t++){let n=d*.7+t*Math.PI/4;e.poly(Math.cos(n)*i*1.4,Math.sin(n)*i*1.4,8,4,d*2).glow(c,1.5,.8)}e.poly(0,0,i,8,d).fill(N.ink,.45).glow(s,2.5),e.poly(0,0,i*.66,3,-d*1.6).glow(c,2),e.poly(0,0,i*.66,3,-d*1.6+Math.PI).glow(c,1.2,.6),a>0&&e.beginPath().arc(0,0,i*1.7,0,Math.PI*2).glow(N.white,1.5,.5*a),e.beginPath().arc(0,0,13+r*7+10*a,0,Math.PI*2).fill(N.white)}if(t.dying&&t.cracks)for(let n of t.cracks)e.beginPath().moveTo(0,0).lineTo(Math.cos(n)*i*.5,Math.sin(n)*i*.5).lineTo(Math.cos(n+.2)*i*1.1,Math.sin(n+.2)*i*1.1).glow(N.white,2.5);t.counterUntil>K.now&&e.beginPath().arc(0,0,i*1.2,0,Math.PI*2).glow(N.lime,3,.9),e.restore()}function E_(e,t){let n=e.e,r=n.x+e.ox,i=n.y+e.oy,a=e.x0+e.cx,o=e.y0-260,s=1-t;return[s*s*e.x0+2*s*t*a+t*t*r,s*s*e.y0+2*s*t*o+t*t*i]}function D_(e,t){let n=e.laserAdd;for(let e of K.lasers){n_||K.player.z||e.e.z?Wg(e.y0,K.player.z,e.e.y+e.oy,e.e.z??0):Kg();let r=I((t-e.t0)/(e.t1-e.t0),0,1),i=1-e.fade/.25;n.beginPath();for(let t=0;t<=12;t++){let[i,a]=E_(e,Math.max(0,r-.45)+(r-Math.max(0,r-.45))*t/12);t?n.lineTo(i,a):n.moveTo(i,a)}n.glow(e.crit?N.lime:e.perfect?N.white:N.warn,(e.perfect?3.5:2.5)*K.kit.laserWidth,i);let[a,o]=E_(e,r);if(n.beginPath().arc(a,o,4,0,Math.PI*2).fill(N.white,i),n_){let t=e.e.y+e.oy,s=K.player.z,c=e.e.z??0,l=n=>Math.abs(t-e.y0)<.001?c:s+(c-s)*(n-e.y0)/(t-e.y0),u=e.perfect?N.white:N.warn;for(let t=0;t<=12;t++){let[a,o]=E_(e,Math.max(0,r-.45)+(r-Math.max(0,r-.45))*t/12);Hg(a,o,l(o),n_),n.beginPath().arc(a,o,2+t*.35,0,Math.PI*2).fill(u,i*n_*(.25+.6*t/12))}Hg(a,o,l(o),n_),n.beginPath().arc(a,o,7,0,Math.PI*2).glow(u,2,i*n_)}}let r=e.locks;K.locks.forEach((e,t)=>{let n=e.e.x+e.ox,i=e.e.y+e.oy,a=16+Math.sin(K.time*10+t)*2;i_(n,i,e.e.z),r.poly(n,i,a,4,K.time*3+t*.4).glow(N.warn,1.6),t_(n+a+2,i-a,String(t+1),N.warn,`700 12px ${e_}`,`left`,`alphabetic`)}),Kg()}var O_={x:0,t:0,deg:0};function k_(e){let t=Math.min(.1,Math.max(0,K.time-O_.t));if(O_.t=K.time,t>0){let n=I((e-O_.x)/t/g.BANK_SPEED,-1,1)*g.BANK_MAX;O_.deg+=(n-O_.deg)*Math.min(1,t*g.BANK_EASE)}return O_.x=e,O_.deg}var A_=(e,t)=>rs({elev:e,roll:t,yaw:0,persp:g.PERSP});function j_(e){let t=K.player;if(!t.alive||t.inv>0&&!ts(K.time,20))return;let n=e.player;K.locking&&((n_||t.z)&&Ug(t.z),n.save(),n.translate(t.x,t.y),n.beginPath().moveTo(-14,-30).lineTo(-140-t.y*.4,-t.y).moveTo(14,-30).lineTo(140+t.y*.4,-t.y).stroke(N.warn,1,.35,[4,6]),n.restore()),i_(t.x,t.y,t.z);let r=Se(K.kit.color,N.player);t.trail.forEach((t,n)=>e.playerAdd.beginPath().arc(t.x,t.y+16+n*6,6-n*.5,0,Math.PI*2).fill(r,.12*(1-n/8)));let i=xs(ys(K.kit.build)),a=Math.PI/180,o=g.ELEV,s=(o.flat+(o.depth-o.flat)*r_)*(1-n_)+o.rail*n_,c=is(i,{elev:s*a,roll:k_(t.x)*a,yaw:0,persp:g.PERSP}),l=g.SCALE;for(let e of c){let i=ss(e,r,N.accent,N.ink);n.beginPath(),e.pts.forEach(([e,r],i)=>i?n.lineTo(t.x+e*l,t.y-r*l):n.moveTo(t.x+e*l,t.y-r*l)),n.closePath().fill(i.fill).stroke(i.edge,e.tag===`glow`?1.4:.9,i.edgeA*(e.tag===`glow`?.6+K.kickP*.4:1))}K.kit.layers>=5&&n.beginPath().arc(t.x,t.y-2,32+K.kickP*4,Math.PI*1.15,Math.PI*1.85).glow(r,1.4,.55),(K.heat>=j.HEAT.WARN||K.now<K.overT)&&n.beginPath().arc(t.x,t.y+14,9+K.kickP*3,0,Math.PI*2).glow(N.enemy,2,K.now<K.overT?.9:.45);let u=A_(s*a,k_(t.x)*a);for(let e of i.exhausts){let r=u(e),i=t.x+r.x*l,a=t.y-r.u*l;n.beginPath().moveTo(i-3,a).lineTo(i,a+8+Math.random()*8).lineTo(i+3,a).glow(N.warn,1.4,.8)}n.beginPath().arc(t.x,t.y,3.5,0,Math.PI*2).fill(N.white),K.locking&&t_(t.x,t.y+44,U(`hud.lockCount`,{n:K.locks.length}),N.warn,`700 13px ${e_}`,`center`,`alphabetic`),Kg()}function M_(e){let t=e.partsAdd;for(let e=0;e<K.parts.length;e+=$g.partsStride){let n=K.parts[e];i_(n.x,n.y,n.z);let r=n.life/n.max;n.kind===`shard`?t.beginPath().moveTo(n.x,n.y).lineTo(n.x-Math.cos(n.rot)*n.len,n.y-Math.sin(n.rot)*n.len).stroke(n.col,1.6,r):t.beginPath().arc(n.x,n.y,Math.max(.1,n.r),0,Math.PI*2).stroke(n.col,2,r)}for(let e of K.floaters)i_(e.x,e.y,e.z),t_(e.x,e.y,e.text,e.col,`700 16px ${e_}`,`center`,`alphabetic`,Math.min(1,e.life*2));Kg()}function N_(e,t){Qg.length=0,n_=t.rail??0,r_=t.depth??0,Kg(),c_(e,t.depth??0,n_),K.state!==`title`&&K.player&&(u_(e),v_(e,t.ns),y_(e,t.ns),d_(e),x_(e,t.ns,t.now),w_(e,t.ns),D_(e,t.now),j_(e),M_(e))}var P_=class{perfNowMs;audio=null;constructor(e=()=>performance.now()){this.perfNowMs=e}attach(e){this.audio=e}get usingAudio(){return this.audio!==null}now(){return this.audio?this.audio.currentTime:this.perfNowMs()/1e3}eventTime(e){let t=Math.max(0,this.perfNowMs()-e)/1e3;return this.now()-t}},F_=class{maxCatchupSec;dt;simTime=0;started=!1;constructor(e,t){if(this.maxCatchupSec=t,!(e>0))throw Error(`FixedLoop: hz must be positive`);this.dt=1/e}reset(e){this.simTime=e,this.started=!0}advance(e,t){if(!this.started||e<this.simTime-this.dt)return this.reset(e),0;let n=Math.min(e,this.simTime+this.maxCatchupSec),r=0;for(;this.simTime+this.dt<=n+1e-9;)this.simTime+=this.dt,t(this.dt,this.simTime),r++;return r}lag(e){return Math.max(0,e-this.simTime)}},I_=!1;function L_(t,n){return K.state===`play`&&z.ready?(!I_&&t>e.STALL_SEC?(I_=!0,z.ac.suspend(),t>e.AUTO_PAUSE_SEC&&Ao(!0)):I_&&t<=n&&R_(),!1):(I_&&R_(),!0)}function R_(){I_=!1,!K.paused&&z.ready&&z.ac.resume()}function z_(){let e=()=>{K.state===`play`&&!K.paused&&Ao(!0)};document.addEventListener(`visibilitychange`,()=>{document.hidden&&e()}),addEventListener(`blur`,e)}var B_=[`up`,`down`,`left`,`right`,`slow`,`fire`,`lock`,`drop`,`pause`,`talk`],V_={up:[`ArrowUp`,`KeyW`],down:[`ArrowDown`,`KeyS`],left:[`ArrowLeft`,`KeyA`],right:[`ArrowRight`,`KeyD`],slow:[`ShiftLeft`,`ShiftRight`],fire:[`KeyZ`,`KeyJ`],lock:[`KeyX`,`KeyK`],drop:[`KeyC`,`KeyL`],pause:[`Escape`,`KeyP`],talk:[`Enter`,`KeyV`]},H_={up:[12],down:[13],left:[14],right:[15],slow:[4,6],fire:[0,7],lock:[2,5],drop:[3],pause:[9],talk:[8]},U_={pause:`Escape`},W_=e=>Object.fromEntries(B_.map(t=>[t,[...e[t]]])),G_=()=>W_(V_),K_=()=>W_(H_);function q_(e,t){return B_.filter(n=>e[n].includes(t))}function J_(e,t,n,r){let i=W_(e);if(Object.values(U_).includes(r)&&U_[t]!==r)return i;let a=U_[t];if(a!==void 0&&i[t][n]===a)return i;for(let e of B_)i[e]=i[e].filter(e=>e!==r);let o=i[t];return n<o.length?o[n]=r:o.push(r),i[t]=[...new Set(o)].slice(0,2),i}function Y_(e,t,n){let r=e&&typeof e==`object`?e:{},i=new Set,a={};for(let e of B_){let o=(Array.isArray(r[e])?r[e]:[]).filter(n).filter((e,t,n)=>!i.has(e)&&n.indexOf(e)===t).slice(0,2);a[e]=o.length?o:t[e].filter(e=>!i.has(e));for(let t of a[e])i.add(t)}return a}var X_=e=>typeof e==`string`&&/^[A-Za-z0-9]{1,24}$/.test(e),Z_=e=>Number.isInteger(e)&&e>=0&&e<32;function Q_(e){let t={ArrowUp:`↑`,ArrowDown:`↓`,ArrowLeft:`←`,ArrowRight:`→`};return t[e]?t[e]:e.startsWith(`Key`)?e.slice(3):e.startsWith(`Digit`)?e.slice(5):e===`ShiftLeft`||e===`ShiftRight`?`Shift`:e===`Escape`?`Esc`:e}function $_(e){return[`A`,`B`,`X`,`Y`,`LB`,`RB`,`LT`,`RT`,`Back`,`Start`,`LS`,`RS`,`↑`,`↓`,`←`,`→`,`Home`][e]??`#${e}`}function ev(e,t,n,r=new Ul,i=o.DEPTH_DOLLY,c=[0,0]){if(e===`vertical`){let e=Math.min(t/W,n/G),i=2*e/t,a=2*e/n;return r.set(i,0,0,-W/2*i,0,-a,0,G/2*a,0,0,0,0,0,0,0,1)}if(e===`horizontal`){let e=Math.min(t/G,n/W),i=2*e/t,a=2*e/n;return r.set(0,-i,0,G/2*i,-a,0,0,W/2*a,0,0,0,0,0,0,0,1)}let l=t/n,u=(e,t=Math.tan(e/2*Math.PI/180))=>2*Math.atan(t*Math.max(1,o.WIDE_ASPECT/l))*180/Math.PI;if(e===`rail`){let e=G-s.PLAYER_Y_FROM_BOTTOM,t=new ep(u(s.CAM_FOV),l,1,o.DEPTH_FAR);t.up.set(0,0,-1);let[n,i]=c;return t.position.set(W/2+n*s.CAM_FOLLOW_X,e+s.CAM_BACK,-s.CAM_EYE_Z-i*s.CAM_FOLLOW_Z),t.lookAt(W/2+n*s.CAM_LOOK_FOLLOW,e-s.CAM_LOOK_AHEAD,-i*s.CAM_LOOK_FOLLOW),t.updateMatrixWorld(),r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse)}let d=Math.min(o.DEPTH_DOLLY_MAX,Math.max(o.DEPTH_DOLLY_MIN,i)),f=G+o.DEPTH_BACK-o.DEPTH_LOOK_Y,p=-o.DEPTH_HEIGHT,m=Math.hypot(f,p),h=(G-a.PLAYER_START_Y_FROM_BOTTOM-o.DEPTH_LOOK_Y)*-f/m,g=new ep(u(0,Math.tan(o.DEPTH_FOV/2*Math.PI/180)*(h+m)/(h+m*d)),l,1,o.DEPTH_FAR*d);return g.up.set(0,0,-1),g.position.set(W/2,o.DEPTH_LOOK_Y+f*d,p*d),g.lookAt(W/2,o.DEPTH_LOOK_Y,0),g.updateMatrixWorld(),r.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse)}function tv(e,t,n,r=new Ul){let i=e.elements,a=t.elements,o=r.elements;for(let e=0;e<16;e++)o[e]=i[e]+(a[e]-i[e])*n;return r}function nv(e,t,n,r,i,a=0){let o=e.elements,s=-a,c=o[0]*t+o[4]*n+o[8]*s+o[12],l=o[1]*t+o[5]*n+o[9]*s+o[13],u=o[3]*t+o[7]*n+o[11]*s+o[15];return{px:(c/u+1)/2*r,py:(1-l/u)/2*i,w:u}}function rv(e,t,n,r,i,a,o,s=0,c=!1){let l=nv(e,t,n,a,o,s),u=nv(e,t+1,n,a,o,s),d=c?nv(e,t,n,a,o,s+1):nv(e,t,n+1,a,o,s),f=u.px-l.px,p=d.px-l.px,m=u.py-l.py,h=d.py-l.py,g=f*h-p*m;if(Math.abs(g)<1e-9)return[0,0,0];let _=(h*r-p*i)/g,v=(-m*r+f*i)/g;return c?[_,0,v]:[_,v,0]}function iv(e,t){return e===`horizontal`?{left:t.up,right:t.down,up:t.right,down:t.left,rise:!1,sink:!1}:e===`rail`?{left:t.left,right:t.right,up:!1,down:!1,rise:t.up,sink:t.down}:{left:t.left,right:t.right,up:t.up,down:t.down,rise:!1,sink:!1}}function av(e,t,n){for(let r=e.length-1;r>=0;r--){let i=e[r];if(t>=i.start)return i.view??n}return n}function ov(e,t,n){let r=Math.floor(t),i=av(e,r,n),a=av(e,r+1,n);if(i===a)return{from:i,to:a,t:0};let s=(t-r-(1-o.MORPH_BAR_FRAC))/o.MORPH_BAR_FRAC,c=Math.min(1,Math.max(0,s));return{from:i,to:a,t:c*c*(3-2*c)}}var sv=`button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, [tabindex="0"]`;function cv(){let e=document.getElementById(`ui`);return e?[...e.querySelectorAll(sv)].filter(e=>{let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&!e.closest(`[hidden]`)&&getComputedStyle(e).visibility!==`hidden`}):[]}var lv=e=>{let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}};function uv(e){let t=[...new Set(e.map(e=>e.closest(`.ov`)).filter(e=>!!e))];if(!t.length)return e;let n=t[t.length-1];return e.filter(e=>e.closest(`.ov`)===n)}function dv(e){let t=document.activeElement,n=uv(cv());if(!n.length)return;if(!t||!n.includes(t)){n[0].focus();return}if(t instanceof HTMLInputElement&&t.type===`range`&&(e===`left`||e===`right`)){e===`left`?t.stepDown():t.stepUp(),t.dispatchEvent(new Event(`input`,{bubbles:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0}));return}let r=lv(t),i=t.getBoundingClientRect(),a={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[e];if(!a)return;let o=null,s=1/0;for(let e of[0,1,2]){for(let c of n){if(c===t)continue;let n=lv(c),l=n.x-r.x,u=n.y-r.y,d=l*a[0]+u*a[1];if(d<=1)continue;let f=c.getBoundingClientRect(),p=i,m=a[0]===0?Math.max(0,f.left-p.right,p.left-f.right):Math.max(0,f.top-p.bottom,p.top-f.bottom);if(e===0&&m>0||e===1&&m>d)continue;let h=d+m*3;h<s&&(s=h,o=c)}if(o)break}o&&(o.focus(),o.scrollIntoView({block:`nearest`}))}function fv(){let e=document.activeElement,t=uv(cv());if(!e||!t.includes(e))t[0]?.focus();else if(e instanceof HTMLSelectElement){let t=[...e.options],n=e.selectedIndex;for(let e=0;e<t.length&&(n=(n+1)%t.length,t[n].disabled);e++);e.selectedIndex=n,e.dispatchEvent(new Event(`change`,{bubbles:!0}))}else e.click()}function pv(){let e=document.activeElement;(e&&e!==document.body?e:uv(cv())[0]??document.body).dispatchEvent(new KeyboardEvent(`keydown`,{code:`Escape`,key:`Escape`,bubbles:!0}))}var mv=Object.fromEntries(B_.map(e=>[e,new Set])),hv=Object.fromEntries(B_.map(e=>[e,!1])),gv={left:!1,right:!1,up:!1,down:!1},_v=!1,vv=e=>mv[e].size>0||hv[e],yv=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`],bv=()=>({keys:{},pad:{}}),xv=()=>vv(`fire`);function Sv(e){return K.state!==`play`||!K.sections.length?`vertical`:av(K.sections,Math.floor(Math.max(0,Vr(e))/F.bar),K.stage.view)}var Cv=`vertical`;function wv(e=Cv){Cv=e;let t=iv(e,{left:vv(`left`)||gv.left,right:vv(`right`)||gv.right,up:vv(`up`)||gv.up,down:vv(`down`)||gv.down});Uo.left=t.left,Uo.right=t.right,Uo.up=t.up,Uo.down=t.down,Uo.rise=!!t.rise,Uo.sink=!!t.sink,Uo.slow=vv(`slow`)||_v}var Tv,Ev;function Dv(e){e===`pause`?K.state===`play`&&K.stage.range?ko():Ao(!K.paused):K.state!==`play`||K.paused||(e===`talk`&&$i(),e===`fire`&&(K.firing=!0),e===`lock`&&(K.locking=!0),e===`drop`&&sa(po))}function Ov(e,t){K.state===`play`&&(e===`fire`&&!vv(`fire`)&&(K.firing=!1),e===`lock`&&K.locking&&!vv(`lock`)&&aa(Tv.eventTime(t)))}var kv=[],Av=``,jv=null;function Mv(e){jv=e}function Nv(){let e=typeof navigator<`u`&&navigator.getGamepads?navigator.getGamepads():[];for(let t of e)if(t&&t.connected)return t;return null}function Pv(){let e=Nv();if(!e){if(kv.some(Boolean))for(let e of B_)hv[e]=!1;kv=[],gv.left=gv.right=gv.up=gv.down=!1;return}let n=e.timestamp||performance.now(),r=e.buttons.map(e=>e.pressed||e.value>.5),i=t.PAD_DEADZONE,a=e.axes[0]??0,o=e.axes[1]??0;gv.left=a<-i,gv.right=a>i,gv.up=o<-i,gv.down=o>i;let s=e=>r[e]&&!kv[e],c=e=>!r[e]&&kv[e],l=bv().pad;if(jv){let e=r.findIndex((e,t)=>e&&!kv[t]);if(e>=0){let t=jv;jv=null,t(e)}kv=r;return}if(Ev.splashVisible){(s(0)||s(9))&&Ev.pressStart(),kv=r;return}let u=K.state!==`play`||K.paused||Ev.blocking;if(u){let e=r[12]||gv.up?`up`:r[13]||gv.down?`down`:r[14]||gv.left?`left`:r[15]||gv.right?`right`:``;e&&e!==Av&&dv(e),Av=e,s(0)&&fv(),s(1)&&pv()}for(let e of B_){let t=l[e].some(e=>r[e]),i=hv[e];if(hv[e]=t,t&&!i&&l[e].some(s)){if(!u||e===`pause`){if(e===`pause`&&K.state!==`play`)continue;Dv(e)}}else!t&&i&&l[e].some(c)&&Ov(e,n)}kv=r,wv()}function Fv(e,n,r,i,o){Tv=e,Ev=n,bv=o,addEventListener(`keydown`,e=>{if(!e.isTrusted||(yv.includes(e.code)&&e.preventDefault(),e.repeat))return;let t=q_(bv().keys,e.code);for(let n of t)mv[n].add(e.code);if(wv(),n.blocking)return;let r=document.activeElement?.tagName??``;if(t.includes(`fire`)){if(K.state===`title`&&![`INPUT`,`BUTTON`,`SELECT`,`SUMMARY`].includes(r)){e.preventDefault(),wo(0,`new`);return}if(K.state===`result`&&n.resultVisible){e.preventDefault(),n.primary();return}}for(let e of t)Dv(e)}),addEventListener(`keyup`,e=>{let t=B_.filter(t=>mv[t].has(e.code));for(let n of t)mv[n].delete(e.code);wv();for(let n of t)Ov(n,e.timeStamp)});let c=null,l=new Set,u=0,d=0;r.addEventListener(`pointerdown`,e=>{K.state!==`play`||K.paused||(c!==null&&e.pointerType===`touch`?(l.add(e.pointerId),_v=!0,wv()):(c=e.pointerId,u=e.clientX,d=e.clientY,K.firing=!0,r.setPointerCapture(e.pointerId)))}),r.addEventListener(`pointermove`,e=>{if(e.pointerId!==c||K.state!==`play`||!K.player.alive)return;let n=K.player,r=a.TOUCH_MOVE_GAIN*(_v?t.TOUCH_SLOW_GAIN:1),[o,l,f]=i(e.clientX-u,e.clientY-d,n.x,n.y,n.z);n.x=I(n.x+o*r,a.PLAYER_MIN_X,W-a.PLAYER_MIN_X),K.rail?n.z=I(n.z+f*r,-s.Z_MAX,s.Z_MAX):n.y=I(n.y+l*r,a.PLAYER_MIN_Y,Ar),u=e.clientX,d=e.clientY});let f=e=>{l.delete(e.pointerId)?(_v=l.size>0,wv()):e.pointerId===c&&(c=null,l.clear(),_v=!1,wv(),K.firing=!1)};r.addEventListener(`pointerup`,f),r.addEventListener(`pointercancel`,f);let p=t=>{n.lockBtn.classList.remove(`on`),K.locking&&aa(e.eventTime(t.timeStamp))};n.lockBtn.addEventListener(`pointerdown`,e=>{e.preventDefault(),K.state===`play`&&(K.locking=!0,n.lockBtn.classList.add(`on`))}),n.lockBtn.addEventListener(`pointerup`,p),n.lockBtn.addEventListener(`pointercancel`,p),n.dropBtn.addEventListener(`pointerdown`,e=>{e.preventDefault(),sa(po)}),n.pauseBtn.addEventListener(`pointerdown`,e=>{e.preventDefault(),Dv(`pause`)}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&Ao(!0)}),addEventListener(`blur`,()=>{for(let e of B_)mv[e].clear(),hv[e]=!1;_v=!1,wv(),K.state===`play`&&(K.firing=!1)})}function Iv(e){let t=(e??``).trim();return/^https?:\/\/\S+$/.test(t)?t:``}var Lv={version:`0.11.5`,commit:`56e6783`,date:`2026-10-29`,test:!0,feedbackUrl:Iv(void 0)},Rv=()=>[Lv.version,Lv.commit,Lv.date].filter(Boolean).join(` · `),zv=`pulse-vector/share`;function Bv(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t>>>0}function Vv(e){let t=[e.v,e.codename,e.stage,e.round,+!!e.clear,e.score,e.perfects,e.maxCombo,e.build].join(`|`),n=Bv(zv+t),r=Bv(t+n.toString(16));return(n%46656*46656+r%46656).toString(36).toUpperCase().padStart(6,`0`).slice(-6)}var Hv=e=>e.stage>0?`PV_ST${String(e.stage).padStart(2,`0`)}`:`PV_EX`;function Uv(e,t){let n=new URL(e);return n.search=``,n.hash=``,n.searchParams.set(`build`,t),n.toString()}function Wv(e){let t=new URLSearchParams(e).get(`build`);return t&&t.trim()?t.trim():null}function Gv(e,t,n){return`https://x.com/intent/post?${new URLSearchParams({text:e,url:t,hashtags:n.join(`,`)}).toString()}`}var Kv=class{fallback=new Map;get(e){try{return localStorage.getItem(e)}catch{return this.fallback.get(e)??null}}set(e,t){try{localStorage.setItem(e,t)}catch{this.fallback.set(e,t)}}remove(e){try{localStorage.removeItem(e)}catch{this.fallback.delete(e)}}};function qv(e,t){let n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e4)}async function Jv(e){let t=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches,n=new File([e.image],e.fileName,{type:e.image.type||`image/png`});if(t&&navigator.canShare?.({files:[n]}))try{return await navigator.share({files:[n],text:[e.text,...e.hashtags.map(e=>`#${e}`)].join(` `),url:e.url}),`shared`}catch(e){if(e?.name===`AbortError`)return`cancel`}try{return qv(e.image,e.fileName),window.open(Gv(e.text,e.url,e.hashtags),`_blank`,`noopener`),`posted`}catch{return`failed`}}var Yv={id:`web`,storage:new Kv,fullGame:!1,storeUrl:Iv(void 0),shareBase:()=>location.origin+location.pathname,takeLaunchBuild(){let e=Wv(location.search);if(e){let e=new URL(location.href);e.searchParams.delete(`build`),history.replaceState(null,``,e.toString())}return e},share:Jv,saveImage:qv};function Xv(e){return e.trim().replace(/[Ａ-Ｚａ-ｚ０-９]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248))}function Zv(e){let t=[...e];return t.length>=1&&t.length<=12&&/^[A-Za-z0-9ァ-ヶー]+$/.test(e)}var Qv=[`timbre`,`core`,`heart`,`lockMax`,`order`,`rate`,`len`,`oct`,`drop`],$v=[`timbre:PLUCK`,`timbre:SUPERSAW`,`timbre:WOBBLE`,`core:STANDARD`,`heart:PULSE`,`lockMax:6`,`lockMax:8`,`lockMax:12`,`order:ASC`,`order:ORDER`,`rate:8`,`rate:16`,`len:S`,`len:M`,`oct:1`,`drop:CLEAR`,`drop:BURST`,`drop:ABSORB`],ey={shield:[`timbre:RHODES`,`heart:DEEP`],tide:[`timbre:SAW`,`order:DESC`],disco:[`timbre:BRASS`,`rate:T`],sun:[`order:RANDOM`,`lockMax:4`],pixel:[`timbre:SQUARE`,`oct:2`],orrery:[`order:PINGPONG`],chorus:[`timbre:BELL`,`heart:GLASS`],gravity:[`core:HEAVY`,`len:L`],lattice:[`core:LIGHT`],vesper:[`drop:FREEZE`]},ty=Object.values(ey).flat(),ny=e=>Object.keys(ey).find(t=>ey[t].includes(e)),ry=[`perfect`,`nomiss`,`combo`],iy=()=>({parts:[],samples:{},generic:0,challenges:[],cleared:[]}),ay=e=>new Set([...$v,...e.parts]),oy=e=>oe.filter(t=>e.cleared.length>=M.TUNE_AT[t]);function sy(e){let t=e.lock;return[`timbre:${e.shot.timbre}`,`core:${e.core}`,`heart:${e.heart}`,`lockMax:${t.max}`,`order:${t.order}`,`rate:${t.rate}`,`len:${t.len}`,`oct:${t.oct}`,`drop:${e.drop}`,...oe.filter(t=>e.tune[t]!==0).map(e=>`tune:${e}`)]}var cy=new Set(wr.flatMap(e=>oe.map(t=>`${t}:${e.tune[t]}`)));function ly(e,t){let n=ay(t),r=oy(t);return sy(e).filter(t=>{if(!t.startsWith(`tune:`))return!n.has(t);let i=t.slice(5);return!r.includes(i)&&!cy.has(`${i}:${e.tune[i]}`)})}function uy(e){return ry.map(t=>({id:`${e}:${t}`,stage:e,kind:t,n:t===`perfect`?M.CH_PERFECT.BASE+e*M.CH_PERFECT.STEP:t===`combo`?M.CH_COMBO.BASE+e*M.CH_COMBO.STEP:0}))}var dy=(e,t)=>e.kind===`perfect`?t.perfects>=e.n:e.kind===`combo`?t.maxCombo>=e.n:t.hits<=e.n;function fy(e,t,n){let r=oy(e);e.cleared.includes(t.stage)||e.cleared.push(t.stage);let i=ey[t.boss]??[],a={drop:null,dup:!1,samples:0,generic:0,challenges:[],axes:[]};if(i.length&&n()<M.DROP_RATE){let t=i[Math.floor(n()*i.length)%i.length];a.drop=t,ay(e).has(t)?(a.dup=!0,a.samples=M.DUP_SAMPLES):e.parts.push(t)}else i.length&&(a.samples=M.SAMPLE_MIN+Math.floor(n()*(M.SAMPLE_MAX-M.SAMPLE_MIN+1))%(M.SAMPLE_MAX-M.SAMPLE_MIN+1));a.samples&&(e.samples[t.boss]=(e.samples[t.boss]??0)+a.samples);for(let n of uy(t.stage))t.assist||e.challenges.includes(n.id)||!dy(n,t)||(e.challenges.push(n.id),a.challenges.push(n),a.generic+=M.CHALLENGE_SAMPLES);return e.generic+=a.generic,a.axes=oy(e).filter(e=>!r.includes(e)),a}function py(e,t){let n=e.samples[t]??0,r=Math.min(n,M.SYNTH_COST),i=M.SYNTH_COST-r;return i<=e.generic?{boss:r,generic:i}:null}var my=(e,t,n)=>!!ey[t]?.includes(n)&&!ay(e).has(n)&&py(e,t)!==null;function hy(e,t,n){if(!my(e,t,n))return!1;let r=py(e,t);return e.samples[t]=(e.samples[t]??0)-r.boss,e.generic-=r.generic,e.parts.push(n),!0}var gy=e=>typeof e==`number`&&Number.isFinite(e)?Math.max(0,Math.floor(e)):0;function _y(e,t){let n=e&&typeof e==`object`?e:{},r=e=>Array.isArray(e)?e:[],i=[...new Set(r(n.parts).filter(e=>ty.includes(e)))],a={},o=n.samples&&typeof n.samples==`object`?n.samples:{};for(let e of Object.keys(ey))gy(o[e])&&(a[e]=gy(o[e]));return{parts:i,samples:a,generic:gy(n.generic),challenges:[...new Set(r(n.challenges).filter(e=>{if(typeof e!=`string`)return!1;let[n,r]=e.split(`:`);return/^\d+$/.test(n)&&Number(n)<t&&ry.includes(r)}))],cleared:[...new Set(r(n.cleared).filter(e=>Number.isInteger(e)&&e>=0&&e<t))].sort((e,t)=>e-t)}}var vy=`pv-save`,yy=`pv-settings`,by=`pv-best`,xy=vr(wr[0]);function Sy(){return{version:7,settings:{moveSpeed:0,offsetMs:0,invincible:!1,reduceFlash:!1,calibrated:!1,volume:{bgm:t.VOLUME_DEFAULT,sfx:t.VOLUME_DEFAULT,shot:t.VOLUME_DEFAULT},colors:`standard`,quality:`auto`,keys:G_(),pad:K_()},progress:{tuned:!1,codename:``,track:`sim`},garage:{build:xy},collection:iy(),extraBest:{score:0,round:0,bpm:0}}}var Cy=(e,t)=>{let n=typeof e==`string`?Number(e):e;return typeof n==`number`&&Number.isFinite(n)?n:t},wy=(e,t,n)=>Math.min(n,Math.max(t,e)),Ty=e=>wy(Math.round(Cy(e,t.VOLUME_DEFAULT)),0,t.VOLUME_MAX);function Ey(e){let n=Sy(),r=e?.settings??{},i=e?.extraBest??{},a=e?.progress??{},o=e?.garage??{},s=typeof o.build==`string`?br(o.build):null,c=_y(e?.collection,Object.keys(ey).length),l=a.tuned===!0,u=t.OFFSET_STEP_MS;return{version:7,settings:{moveSpeed:wy(Math.round(Cy(r.moveSpeed,n.settings.moveSpeed)),0,t.MOVE_SPEED_COUNT-1),offsetMs:wy(Math.round(Cy(r.offsetMs,0)/u)*u,t.OFFSET_MIN_MS,t.OFFSET_MAX_MS),invincible:r.invincible===!0,reduceFlash:r.reduceFlash===!0,calibrated:r.calibrated===!0,volume:{bgm:Ty(r.volume?.bgm),sfx:Ty(r.volume?.sfx),shot:Ty(r.volume?.shot)},colors:be.includes(r.colors)?r.colors:`standard`,quality:ge.includes(r.quality)?r.quality:`auto`,keys:Y_(r.keys,V_,X_),pad:Y_(r.pad,H_,Z_)},progress:{tuned:l,codename:typeof a.codename==`string`&&Zv(a.codename)?a.codename:``,track:l&&a.track===`main`?`main`:`sim`},garage:{build:s?.ok&&!ly(s.build,c).length?vr(s.build):xy},collection:c,extraBest:{score:Math.max(0,Math.floor(Cy(i.score,0))),round:Math.max(0,Math.floor(Cy(i.round,0))),bpm:Math.max(0,Math.floor(Cy(i.bpm,0)))}}}var Dy={0:e=>({version:1,settings:{moveSpeed:Cy(e.spd,0),offsetMs:Cy(e.off,0),invincible:!1},extraBest:e.best??{}}),1:e=>({...e,version:2,settings:{...e.settings??{},reduceFlash:!1,calibrated:!1}}),2:e=>({...e,version:3,settings:{...e.settings??{},dropKind:`CLEAR`}}),3:e=>({...e,version:4,progress:{tuned:!1,codename:``,track:`sim`}}),4:e=>{let{dropKind:t,...n}=e.settings??{},r=er(wr[0]);return l.includes(t)&&(r.drop=t),{...e,version:5,settings:n,garage:{build:vr(r)}}},5:e=>({...e,version:6,collection:iy()}),6:e=>({...e,version:7})};function Oy(e){let t=e,n=Cy(t.version,0);if(n>7)throw Error(`save: version ${n} is newer than this build (7)`);for(;n<7;){let e=Dy[n];if(!e)throw Error(`save: no migration from version ${n}`);t=e(t),n=Cy(t.version,n+1)}return Ey(t)}function ky(e){if(!e)return null;try{let t=JSON.parse(e);return t&&typeof t==`object`?t:null}catch{return null}}function Ay(e){let t=ky(e.get(vy));if(t)try{return Oy(t)}catch{return Sy()}let n=ky(e.get(yy)),r=ky(e.get(by));return n||r?Oy({version:0,...n??{},best:r??{}}):Sy()}function jy(e,t){let n=ky(e.get(vy));return n&&Cy(n.version,0)>7?!1:(e.set(vy,JSON.stringify(Ey(t))),!0)}function My(){let e=getComputedStyle(document.documentElement);return{display:e.getPropertyValue(`--f-display`).trim()||`sans-serif`,jp:e.getPropertyValue(`--f-jp`).trim()||`sans-serif`}}function Ny(e,t,n,r,i,a=``){let o=r;for(e.font=`${a} ${o}px ${i}`;o>8&&e.measureText(t).width>n;)--o,e.font=`${a} ${o}px ${i}`}function Py(e){let{rec:t,build:n,color:r}=e,i=he.W,a=he.H,o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`),c=My();s.fillStyle=N.ink,s.fillRect(0,0,i,a),s.strokeStyle=`rgba(133,144,192,0.08)`,s.lineWidth=1;for(let e=0;e<=i;e+=40)s.beginPath(),s.moveTo(e+.5,0),s.lineTo(e+.5,a),s.stroke();for(let e=0;e<=a;e+=40)s.beginPath(),s.moveTo(0,e+.5),s.lineTo(i,e+.5),s.stroke();s.fillStyle=r,s.fillRect(0,0,8,a),s.strokeStyle=`rgba(133,144,192,0.35)`,s.strokeRect(24.5,24.5,i-49,a-49),s.textBaseline=`alphabetic`,s.textAlign=`left`,s.fillStyle=N.accent,s.font=`600 22px ${c.display}`,s.fillText(U(`share.brand`),56,78);let l=U(t.round===2?`share.round2`:`share.round1`),u=s.measureText(U(`share.brand`)).width;s.fillStyle=N.dim,s.fillText(`/  ${l}`,56+u+14,78),s.fillStyle=N.text;let d=t.stage>0?U(`share.stage`,{n:String(t.stage).padStart(2,`0`),name:e.song}):U(`share.extra`,{name:e.song});Ny(s,d,544,28,c.jp),s.fillText(d,56,124),s.fillStyle=t.clear?N.lime:N.enemy,s.font=`700 26px ${c.display}`,s.fillText(U(t.clear?`share.clear`:`share.over`),56,166),s.fillStyle=N.player;let f=t.codename||U(`share.noName`);Ny(s,f,544,60,c.display,`700`),s.fillText(f,56,250),s.fillStyle=N.dim,s.font=`600 20px ${c.display}`,s.fillText(U(`share.score`),56,312),s.fillStyle=N.white;let p=t.score.toLocaleString(`en-US`);Ny(s,p,544,104,c.display,`700`),s.fillText(p,56,410);let m=(e,t,n)=>{s.fillStyle=N.dim,s.font=`600 18px ${c.display}`,s.fillText(e,n,468),s.fillStyle=N.warn,s.font=`700 44px ${c.display}`,s.fillText(t,n,518)};m(U(`share.perfect`),String(t.perfects),56),m(U(`share.combo`),String(t.maxCombo),286);let h=i-56-640;s.fillStyle=N.dim,s.font=`600 18px ${c.display}`,s.fillText(U(`share.pattern`,{timbre:n.shot.timbre}),640,78);let g=h/j.STEPS;n.shot.steps.forEach((e,t)=>{let n=640+t*g+2,i=g-4;if(e===0)s.strokeStyle=`rgba(133,144,192,0.4)`,s.strokeRect(n+.5,150.5,i-1,18);else{let t=e===2?64:36;s.fillStyle=r,s.globalAlpha=e===2?1:.6,s.fillRect(n,168-t,i,t),s.globalAlpha=1}}),s.fillStyle=`rgba(223,230,255,0.25)`;for(let e=1;e<4;e++)s.fillRect(640+e*4*g-1,96,2,80);let _=(e,t,n)=>{s.fillStyle=N.dim,s.font=`600 17px ${c.display}`,s.fillText(e,640,n),s.fillStyle=N.text,Ny(s,t,h-110,24,c.jp),s.fillText(t,750,n)};_(U(`share.core`),n.core,220),_(U(`share.lock`),U(`share.lockVal`,{max:n.lock.max,order:U(`garage.orders.${n.lock.order}`),rate:U(`garage.rates.${n.lock.rate}`)}),256),_(U(`share.drop`),n.drop,292),s.fillStyle=N.dim,s.font=`600 17px ${c.display}`,s.fillText(U(`share.tune`),640,340);let v=h-110-90;return oe.forEach((e,t)=>{let i=364+t*40;s.fillStyle=N.dim,s.font=`14px ${c.jp}`,s.textAlign=`right`,s.fillText(U(`garage.tune.${e}.l`),738,i+5),s.textAlign=`left`,s.fillText(U(`garage.tune.${e}.r`),750+v+12,i+5),s.fillStyle=`rgba(133,144,192,0.5)`,s.fillRect(750,i,v,2);let a=j.TUNE_RANGE;for(let e=-a;e<=a;e++)s.fillRect(750+(e+a)/(2*a)*v-1,i-(e===0?7:4),2,e===0?16:10);let o=n.tune[e];s.fillStyle=o===0?N.text:r,s.beginPath(),s.arc(750+(o+a)/(2*a)*v,i+1,8,0,Math.PI*2),s.fill()}),s.fillStyle=`rgba(10,14,38,0.9)`,s.fillRect(25,a-105,i-50,80),s.fillStyle=N.dim,s.font=`600 15px ${c.display}`,s.fillText(U(`share.code`),56,a-74),s.fillStyle=N.text,Ny(s,t.build,i-112-260,20,`ui-monospace, Consolas, monospace`),s.fillText(t.build,56,a-44),s.textAlign=`right`,s.fillStyle=N.warn,s.font=`700 20px ${c.display}`,s.fillText(U(`share.sig`,{sig:Vv(t)}),i-56,a-72),s.fillStyle=N.accent,s.font=`600 18px ${c.display}`,s.fillText(`#${U(`share.hashtag`)}  #${Hv(t)}`,i-56,a-44),s.textAlign=`left`,o}var Fy=e=>new Promise((t,n)=>e.toBlob(e=>e?t(e):n(Error(`toBlob`)),`image/png`)),Iy=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},Ly=(e,t,n)=>{let r=Iy(`button`,e,t);return r.type=`button`,r.addEventListener(`click`,n),r},Ry=class{onClose;root=Iy(`div`,`ov share-ov`);img=Iy(`img`,`share-img`);msg=Iy(`p`,`note`);inp=null;blob=null;constructor(e){this.onClose=e,this.root.hidden=!0,this.img.alt=``;let t=Iy(`div`,`row`);t.append(Ly(`btn`,U(`share.send`),()=>void this.send()),Ly(`btn sub`,U(`share.save`),()=>void this.save()),Ly(`btn sub`,U(`share.copyUrl`),()=>this.copy()),Ly(`btn sub`,U(`share.close`),()=>this.close())),this.root.append(Iy(`div`,`eyebrow`,U(`share.eyebrow`)),this.img,Iy(`p`,`note`,U(`share.help`)),t,this.msg),this.root.addEventListener(`keydown`,e=>{e.code===`Escape`&&(e.stopPropagation(),this.close())})}get visible(){return!this.root.hidden}open(e){this.inp=e;let t=Py(e);this.img.src=t.toDataURL(`image/png`),this.blob=Fy(t),this.msg.textContent=``,this.root.hidden=!1}close(){this.root.hidden=!0,this.onClose()}get url(){return Uv(Yv.shareBase(),this.inp.rec.build)}fileName(){let e=this.inp.rec;return U(`share.fileName`,{stage:Hv(e),score:e.score})}async send(){if(!this.inp||!this.blob)return;let e=this.inp.rec,t=e.stage>0?U(`share.stage`,{n:String(e.stage).padStart(2,`0`),name:this.inp.song}):U(`share.extra`,{name:this.inp.song}),n=await Yv.share({image:await this.blob,fileName:this.fileName(),text:U(`share.post`,{name:e.codename||U(`share.noName`),stage:t,score:e.score.toLocaleString(`en-US`)}),url:this.url,hashtags:[U(`share.hashtag`),Hv(e)]});this.msg.textContent=U(`share.done.${n}`)}async save(){this.blob&&(Yv.saveImage(await this.blob,this.fileName()),this.msg.textContent=U(`share.done.saved`))}copy(){this.inp&&navigator.clipboard?.writeText(this.url).then(()=>this.msg.textContent=U(`share.done.copied`),()=>this.msg.textContent=U(`share.done.failed`))}},zy=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},By=(e,t,n)=>{let r=zy(`button`,e,t);return r.type=`button`,r.addEventListener(`click`,n),r},Vy=[`general`,`sound`,`display`,`controls`],Hy=class{hooks;general;root=zy(`div`,`ov garage studio settings`);body=zy(`div`,`sbody`);tabRow=zy(`div`,`stabs`);tab=`general`;waiting=null;constructor(e,t){this.hooks=e,this.general=t,this.root.hidden=!0;let n=zy(`div`,`ghead shead`),r=zy(`div`);r.append(zy(`div`,`eyebrow`,U(`settings.eyebrow`)),zy(`p`,`big`,U(`settings.title`))),n.append(r);let i=zy(`div`,`row gfoot`);i.append(By(`btn sub`,U(`garage.back`),()=>this.close())),this.root.append(n,this.tabRow,this.body,i),this.root.addEventListener(`keydown`,e=>{this.waiting?.kind===`key`?(e.preventDefault(),e.stopPropagation(),e.code!==`Escape`&&this.assign(e.code),this.stopWaiting()):e.code===`Escape`&&(e.stopPropagation(),this.waiting?this.stopWaiting():this.close())})}get visible(){return!this.root.hidden}open(){this.waiting=null,this.render(),this.root.hidden=!1}close(){this.stopWaiting(),this.root.hidden=!0,this.hooks.close()}render(){this.tabRow.textContent=``;for(let e of Vy){let t=By(`stab`+(e===this.tab?` sel`:``),U(`settings.tabs.${e}`),()=>{this.tab=e,this.stopWaiting(),this.render()});t.setAttribute(`aria-pressed`,String(e===this.tab)),this.tabRow.append(t)}this.body.textContent=``,this.tab===`general`?this.body.append(...this.general):this.tab===`sound`?this.renderSound():this.tab===`display`?this.renderDisplay():this.renderControls()}renderSound(){let e=this.hooks.settings(),n=zy(`div`,`setlist`);for(let r of[`bgm`,`sfx`,`shot`]){let i=zy(`label`,`setrow`),a=zy(`input`);Object.assign(a,{type:`range`,min:`0`,max:String(t.VOLUME_MAX),step:`1`,value:String(e.volume[r])});let o=zy(`output`,void 0,String(e.volume[r]));a.addEventListener(`input`,()=>{e.volume[r]=Number(a.value),o.textContent=a.value,this.hooks.changed()}),i.append(zy(`span`,void 0,U(`settings.volume.${r}`)),a,o),n.append(i)}this.body.append(n,zy(`p`,`note`,U(`settings.volumeNote`)),zy(`p`,`note`,U(`settings.iosNote`)))}renderDisplay(){let e=this.hooks.settings(),t=zy(`section`,`gsec`);t.append(zy(`h3`,void 0,U(`settings.colors`)));let n=zy(`div`,`gseg`);for(let t of be){let r=By(`gopt`+(t===e.colors?` sel`:``),``,()=>{e.colors=t,this.hooks.changed(),this.render()}),i=zy(`span`,`cswatch`);for(let e of[ye[t].player,ye[t].enemy]){let t=zy(`i`);t.style.background=e,i.append(t)}r.append(zy(`b`,void 0,U(`settings.colorNames.${t}`)),i,zy(`small`,void 0,U(`settings.colorSub.${t}`))),n.append(r)}t.append(n);let r=zy(`section`,`gsec`);r.append(zy(`h3`,void 0,U(`settings.quality`)));let i=zy(`div`,`gseg`);for(let t of ge){let n=By(`gopt`+(t===e.quality?` sel`:``),``,()=>{e.quality=t,this.hooks.changed(),this.render()});n.append(zy(`b`,void 0,U(`settings.qualityNames.${t}`))),i.append(n)}r.append(i,zy(`p`,`note`,U(`settings.qualityNow`,{level:U(`settings.qualityLevels.${this.hooks.qualityLevel()}`)})),zy(`p`,`note`,U(`settings.qualityNote`))),this.body.append(t,r)}renderControls(){let e=this.hooks.settings(),t=zy(`div`,`bindtable`);t.append(zy(`span`,`bh`),zy(`span`,`bh`,U(`settings.keyboard`)),zy(`span`,`bh`,U(`settings.gamepad`)));for(let n of B_){t.append(zy(`span`,`bact`,U(`settings.actions.${n}`)));let r=zy(`span`,`bslots`),i=zy(`span`,`bslots`);for(let t=0;t<2;t++){let a=e.keys[n][t],o=this.waiting?.kind===`key`&&this.waiting.a===n&&this.waiting.slot===t,s=By(`bslot`+(o?` wait`:``),o?U(`settings.pressKey`):a?Q_(a):`—`,()=>this.startWaiting(`key`,n,t));U_[n]&&a===U_[n]&&(s.disabled=!0),r.append(s);let c=e.pad[n][t],l=this.waiting?.kind===`pad`&&this.waiting.a===n&&this.waiting.slot===t;i.append(By(`bslot`+(l?` wait`:``),l?U(`settings.pressButton`):c===void 0?`—`:$_(c),()=>this.startWaiting(`pad`,n,t)))}t.append(r,i)}let n=By(`btn sub small`,U(`settings.resetControls`),()=>{e.keys=G_(),e.pad=K_(),this.hooks.changed(),this.render()});this.body.append(zy(`p`,`note`,U(`settings.controlsHelp`)),t,n,zy(`p`,`note`,U(`settings.touchHelp`)))}startWaiting(e,t,n){this.waiting={kind:e,a:t,slot:n},Mv(e===`pad`?e=>{this.assign(e),this.stopWaiting()}:null),this.render(),this.body.querySelector(`.bslot.wait`)?.focus()}assign(e){let t=this.waiting;if(!t)return;let n=this.hooks.settings();t.kind===`key`&&typeof e==`string`&&(n.keys=J_(n.keys,t.a,t.slot,e)),t.kind===`pad`&&typeof e==`number`&&(n.pad=J_(n.pad,t.a,t.slot,e)),this.hooks.changed()}stopWaiting(){this.waiting&&(this.waiting=null,Mv(null),this.root.hidden||this.render())}},Uy=[57,60,64],Wy=[57,60,64,69,72,76,81,84,88,93,96,100],Gy={KICK:.7,HAT:.55};function Ky(e,t=Math.random){let n=xr(e),r=e.lock.max,i=Array.from({length:r},(e,t)=>t);if(n.order===`DESC`)i.reverse();else if(n.order===`ORDER`){i=i.map((e,t)=>t%2?Math.min(r-1,t+1):Math.max(0,t-1)).filter((e,t,n)=>n.indexOf(e)===t);for(let e=0;e<r;e++)i.includes(e)||i.push(e)}else if(n.order===`RANDOM`)for(let e=r-1;e>0;e--){let n=Math.floor(t()*(e+1));[i[e],i[n]]=[i[n],i[e]]}let a=i.map((t,r)=>({note:Wy[t%Wy.length]+(e.lock.oct===2&&r%2?12:0),at:r*n.rateSteps,idx:t}));return n.order===`PINGPONG`&&a.push({note:Wy[(r-1)%Wy.length]+12,at:r*n.rateSteps,idx:r-1}),a}var qy=class{events=[];timer=null;b=null;t0=0;s16=.125;step=0;bars=1;loop=!1;lockBar=1;volley=[];get playing(){return this.timer!==null}get looping(){return this.playing&&this.loop}start(e,t,n,r=!1){if(!z.ready)return;this.stop(),this.b=e,this.loop=n,this.bars=n?2:1,this.lockBar=n?1:r?0:-1,this.s16=60/t/4;let i=z.ac.currentTime;this.t0=i+_.START_LEAD,this.step=0,this.events.length=0,this.volley=Ky(e),Ge();for(let[e,t]of Object.entries(Gy)){let n=z.layerGain(e);n.cancelScheduledValues(i),n.setValueAtTime(t,i)}this.timer=setInterval(()=>this.schedule(),_.SCHED_MS),this.schedule()}stop(){this.timer&&clearInterval(this.timer),this.timer=null}stepAt(e){return!this.playing||e<this.t0?null:Math.floor((e-this.t0)/this.s16)%16}schedule(){let e=this.b;if(!e)return;let t=z.ac.currentTime+_.LOOKAHEAD,n=this.bars*16;for(;this.t0+this.step*this.s16<t;){if(!this.loop&&this.step>=n){this.stop();return}let t=this.step%n,r=Math.floor(t/16),i=t%16,a=this.t0+this.step*this.s16;i%4==0&&(je(a,`soft`),this.push({t:a,kind:`beat`,v:i/4})),i%4==2&&Ne(a,.5,!1,`soft`);let o=e.shot.steps[i];if(o&&(Ke(a,e.shot.timbre,o,Uy,!1),this.push({t:a,kind:`shot`,v:o})),r===this.lockBar&&i===0){Ye(a);for(let e of this.volley){let t=a+e.at*this.s16;Xe(t,e.note),this.push({t,kind:`lock`,v:e.idx,note:e.note})}}this.step++}}push(e){this.events.push(e);let t=z.ac.currentTime-2;for(;this.events.length&&this.events[0].t<t;)this.events.shift()}},Jy=Math.PI/180,Yy={S:1.5,M:2.5,L:4},Xy=class{audition;canvas=document.createElement(`canvas`);ctx=this.canvas.getContext(`2d`);b=null;color=N.player;raf=0;shots=[];seen=new WeakSet;yawUser=0;elevUser=0;drag=null;last=0;dpr=1;constructor(e){this.audition=e,this.canvas.className=`gship`,this.canvas.addEventListener(`pointerdown`,e=>{this.drag={x:e.clientX,y:e.clientY,yaw:this.yawUser,elev:this.elevUser},this.canvas.setPointerCapture(e.pointerId)}),this.canvas.addEventListener(`pointermove`,e=>{this.drag&&(this.yawUser=this.drag.yaw+(e.clientX-this.drag.x)*.6,this.elevUser=Math.max(-30,Math.min(45,this.drag.elev-(e.clientY-this.drag.y)*.3)))});let t=()=>this.drag=null;this.canvas.addEventListener(`pointerup`,t),this.canvas.addEventListener(`pointercancel`,t),this.canvas.addEventListener(`dblclick`,()=>{this.yawUser=0,this.elevUser=0})}set(e,t){this.b=e,this.color=t}start(){if(this.raf)return;let e=t=>{this.raf=requestAnimationFrame(e),this.draw(t/1e3)};this.raf=requestAnimationFrame(e)}stop(){cancelAnimationFrame(this.raf),this.raf=0,this.shots.length=0}fit(){let e=this.canvas.getBoundingClientRect();this.dpr=Math.min(2,devicePixelRatio||1);let t=Math.max(1,Math.round(e.width*this.dpr)),n=Math.max(1,Math.round(e.height*this.dpr));(this.canvas.width!==t||this.canvas.height!==n)&&(this.canvas.width=t,this.canvas.height=n)}draw(e){let t=this.b;if(!t)return;this.fit();let n=this.ctx,r=this.canvas.width,i=this.canvas.height,a=Math.min(.05,Math.max(0,e-this.last));this.last=e;let o=z.ready?z.ac.currentTime:e;n.clearRect(0,0,r,i);let s=r/2,c=i*.1,l=(i-c)*.74,u=Math.min(r,i-c)/78;n.save(),n.strokeStyle=`rgba(127,243,255,0.08)`,n.lineWidth=this.dpr;for(let e=-6;e<=6;e++)n.beginPath(),n.moveTo(s+e*u*6,i-c),n.lineTo(s+e*u*1.2,0),n.stroke();n.restore();let d=0,f=this.audition.events;for(let e of f)e.kind===`beat`&&e.t<=o&&(d=Math.max(d,Math.max(0,1-(o-e.t)*4)**2));es.reduced&&(d*=.3);let p=xs(ys(t)),m=this.drag?0:Math.sin(e/g.TURN_SEC*Math.PI*2)*g.TURN_DEG,h={elev:(g.ELEV.flat+this.elevUser)*Jy,roll:0,yaw:(m+this.yawUser)*Jy,persp:g.PERSP},_=rs(h),v=se[t.shot.timbre];for(let t of f)if(!(t.t>o||this.seen.has(t))&&(this.seen.add(t),t.kind===`shot`))for(let n of p.muzzles){let r=_(n.at),i=n.angle+h.yaw,a=v.speed/1e3*u*60;this.shots.push({x:s+r.x*u,y:l-r.u*u,vx:Math.sin(i)*a,vy:-Math.cos(i)*a,r:v.r*u*.18*(t.v===2?1.6:1),born:e})}n.save(),n.globalCompositeOperation=`lighter`,this.shots=this.shots.filter(t=>t.y>-20&&e-t.born<2);for(let e of this.shots)e.x+=e.vx*a,e.y+=e.vy*a,n.fillStyle=this.color,n.shadowColor=this.color,n.shadowBlur=e.r*2,n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill();let y=t.lock.max,b=f.filter(e=>e.kind===`lock`);if(b.some(e=>o-e.t<1.2))for(let e=0;e<y;e++){let a=s+(e-(y-1)/2)*Math.min(u*9,r*.8/y),c=i*.12+Math.abs(e-(y-1)/2)*u*1.2,d=b.find(t=>t.v===e&&t.t<=o&&o-t.t<.35);n.strokeStyle=d?`#ffffff`:N.warn,n.shadowColor=N.warn,n.shadowBlur=d?u*3:u,n.lineWidth=this.dpr*1.5,n.beginPath();let f=u*(d?2.4:1.8);n.moveTo(a,c-f),n.lineTo(a+f,c),n.lineTo(a,c+f),n.lineTo(a-f,c),n.closePath(),n.stroke(),d&&(n.globalAlpha=1-(o-d.t)/.35,n.lineWidth=this.dpr*Yy[t.lock.len],n.beginPath(),n.moveTo(s,l-u*8),n.lineTo(a,c),n.stroke(),n.globalAlpha=1)}n.restore(),cs(n,p,h,s,l,u,this.color,N.accent,N.ink,d),n.save(),n.globalCompositeOperation=`lighter`;for(let e of p.exhausts){let t=_(e),r=s+t.x*u,i=l-t.u*u;n.fillStyle=N.warn,n.globalAlpha=.7,n.beginPath(),n.moveTo(r-u*1.6,i),n.lineTo(r,i+u*(5+Math.random()*4)),n.lineTo(r+u*1.6,i),n.fill()}n.restore();let x=this.audition.stepAt(o),S=r/16;for(let e=0;e<16;e++){let r=t.shot.steps[e],a=e*S,o=i-c;n.fillStyle=e===x?`#ffffff`:r===2?this.color:r===1?`rgba(127,243,255,0.45)`:`rgba(127,243,255,0.08)`,r&&e!==x&&(n.globalAlpha=r===2?.9:.6);let s=S*.12,l=r===2?c*.8:r===1?c*.55:c*.25;n.fillRect(a+s,o+(c-l),S-s*2,l),n.globalAlpha=1,e%4==0&&(n.fillStyle=`rgba(255,255,255,0.25)`,n.fillRect(a+s,i-this.dpr*2,S-s*2,this.dpr*2))}}},Z=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},Zy=(e,t,n)=>{let r=Z(`button`,e,t);return r.type=`button`,r.addEventListener(`click`,n),r};function Qy(e){let[t,n]=e.split(`:`);return t===`order`?U(`parts.order`,{v:U(`garage.orders.${n}`)}):t===`rate`?U(`parts.rate`,{v:U(`garage.rates.${n}`)}):t===`len`?U(`parts.len`,{v:U(`garage.lens.${n}`)}):t===`lockMax`?U(`parts.lockMax`,{v:n}):t===`oct`?U(`parts.oct`,{v:n}):t===`heart`?U(`parts.heart`,{v:n}):t===`tune`?U(`garage.tune.${n}.name`):n}var $y=e=>In.findIndex(t=>t.boss.id===e),eb=e=>U(`bosses.${e}.name`),tb=[`synth`,`archive`,`challenge`,`rules`],nb=class{hooks;root=Z(`div`,`ov garage studio`);body=Z(`div`,`sbody`);tabRow=Z(`div`,`stabs`);generic=Z(`b`);msg=Z(`p`,`note smsg`);tab=`synth`;boss=Object.keys(ey)[0];reveal=!1;constructor(e){this.hooks=e,this.root.hidden=!0;let t=Z(`div`,`ghead shead`),n=Z(`div`,`sgeneric`);n.append(Z(`span`,void 0,U(`studio.generic`)),this.generic);let r=Z(`div`);r.append(Z(`div`,`eyebrow`,U(`studio.eyebrow`)),Z(`p`,`big`,U(`studio.title`))),t.append(r,n);let i=Z(`div`,`row gfoot`);i.append(Zy(`btn sub`,U(`garage.back`),()=>this.close()),this.msg),this.root.append(t,this.tabRow,this.body,i),this.root.addEventListener(`keydown`,e=>{e.code===`Escape`&&(e.stopPropagation(),this.close())})}get visible(){return!this.root.hidden}open(){this.msg.textContent=``,this.render(),this.root.hidden=!1}close(){this.root.hidden=!0,this.hooks.close()}render(){let e=this.hooks.collection();this.generic.textContent=String(e.generic),this.tabRow.textContent=``;for(let e of tb){let t=Zy(`stab`+(e===this.tab?` sel`:``),U(`studio.tabs.${e}`),()=>{this.tab=e,this.render()});t.setAttribute(`aria-pressed`,String(e===this.tab)),this.tabRow.append(t)}this.body.textContent=``,this.body.scrollTop=0,this.tab===`synth`?this.renderSynth(e):this.tab===`archive`?this.renderArchive(e):this.tab===`challenge`?this.renderChallenges(e):this.renderRules()}renderSynth(e){let t=ay(e),n=Z(`div`,`ssplit`),r=Z(`div`,`slist`);for(let[n,i]of Object.entries(ey)){let a=i.filter(e=>t.has(e)).length,o=Zy(`sboss`+(n===this.boss?` sel`:``)+(a===i.length?` done`:``),``,()=>{this.boss=n,this.render()}),s=$y(n);o.append(Z(`b`,void 0,String(s+1).padStart(2,`0`)),Z(`span`,void 0,eb(n)),Z(`small`,void 0,`${U(`studio.samples`,{n:e.samples[n]??0})}  ·  ${U(`studio.partsOwned`,{n:a,m:i.length})}`)),r.append(o)}let i=Z(`div`,`sdetail`),a=this.boss,o=e.samples[a]??0,s=Z(`div`,`sdhead`);s.append(Z(`h3`,void 0,eb(a)),Z(`small`,void 0,U(`studio.stageOf`,{n:$y(a)+1,song:U(`songs.${Pn[$y(a)].id}.name`)})));let c=Z(`div`,`smeter`),l=Z(`i`);l.style.width=`${Math.min(100,o/M.SYNTH_COST*100)}%`,c.append(l),i.append(s,Z(`p`,`sval`,U(`studio.progress`,{n:o,cost:M.SYNTH_COST})),c);for(let e of ey[a])i.append(this.partRow(e,t.has(e),a));i.append(Z(`p`,`note`,U(`studio.help`,{cost:M.SYNTH_COST,dup:M.DUP_SAMPLES}))),n.append(r,i),this.body.append(n)}partRow(e,t,n){let r=this.hooks.collection(),i=t||this.reveal,a=Z(`div`,`spart`+(t?` own`:``)),o=Z(`div`,`sphead`),s=ny(e);if(o.append(Z(`b`,void 0,i?Qy(e):U(`studio.unknown`)),Z(`small`,void 0,`${U(`studio.kinds.${e.split(`:`)[0]}`)}  ·  ${s?U(`studio.from`,{boss:eb(s),n:$y(s)+1}):U(`studio.fromStart`)}`)),a.append(o,Z(`p`,`sflavor`,U(i?`flavor.${e}`:`studio.sealed`))),n&&!t){let t=py(r,n),i=Zy(`btn small`,t?U(`studio.synth`,{boss:t.boss,generic:t.generic}):U(`studio.synthNeed`,{n:M.SYNTH_COST}),()=>{hy(this.hooks.collection(),n,e)&&(this.hooks.changed(),this.msg.textContent=U(`studio.made`,{part:Qy(e)}),this.render())});i.disabled=!my(r,n,e),a.append(i)}return a}renderArchive(e){let t=ay(e),n=[...$v,...Object.values(ey).flat()],r=new Map;for(let e of Qv){let t=U(`studio.kinds.${e}`);r.has(t)||r.set(t,[]),r.get(t).push(...n.filter(t=>t.startsWith(e+`:`)))}let i=Z(`div`,`sarchive`);for(let[e,n]of r){let r=Z(`section`,`gsec`),a=n.filter(e=>t.has(e)).length;r.append(Z(`h3`,void 0,U(`studio.group`,{kind:e,n:a,m:n.length})));for(let e of n)r.append(this.partRow(e,t.has(e)));i.append(r)}this.body.append(i)}renderChallenges(e){let t=new Set(e.challenges),n=Z(`div`,`schall`);In.forEach((r,i)=>{let a=Z(`div`,`schrow`+(e.cleared.includes(i)?` cleared`:``)),o=Z(`div`,`schhead`);o.append(Z(`b`,void 0,String(i+1).padStart(2,`0`)),Z(`span`,void 0,`${U(`songs.${Pn[i].id}.name`)}  ／  ${eb(r.boss.id)}`),Z(`small`,void 0,U(e.cleared.includes(i)?`studio.cleared`:`studio.notCleared`)));let s=Z(`div`,`schips`);for(let e of uy(i)){let n=t.has(e.id);s.append(Z(`span`,`schip`+(n?` ok`:``),(n?`✓ `:``)+U(`reward.ch.${e.kind}`,{n:e.n})))}a.append(o,s),n.append(a)}),this.body.append(Z(`p`,`note`,U(`studio.challengeHelp`,{n:M.CHALLENGE_SAMPLES})),n)}renderRules(){let e=Z(`dl`,`srules`),t=(t,n)=>e.append(Z(`dt`,void 0,U(`studio.rules.${t}`)),Z(`dd`,void 0,n));t(`where`,U(`studio.rulesVal.where`)),t(`drop`,U(`studio.rulesVal.pct`,{p:Math.round(M.DROP_RATE*100)})),t(`samples`,U(`studio.rulesVal.range`,{min:M.SAMPLE_MIN,max:M.SAMPLE_MAX})),t(`dup`,U(`studio.rulesVal.n`,{n:M.DUP_SAMPLES})),t(`synth`,U(`studio.rulesVal.n`,{n:M.SYNTH_COST})),t(`challenge`,U(`studio.rulesVal.n`,{n:M.CHALLENGE_SAMPLES})),t(`tune`,oe.map(e=>U(`studio.rulesVal.tune`,{axis:U(`garage.tune.${e}.name`),n:M.TUNE_AT[e]})).join(`　`)),this.body.append(e)}},Q=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},rb=(e,t,n)=>{let r=Q(`button`,e,t);return r.type=`button`,r.addEventListener(`click`,n),r},ib=[`base`,`shot`,`lock`,`tune`],ab=class{hooks;root=Q(`div`,`ov garage`);b;stage=0;parts=Q(`div`,`gparts`);stats=Q(`div`,`gstats`);bar=Q(`div`,`gbar`);codeIn=Q(`input`);codeMsg=Q(`p`,`note`);saveBtn;rangeBtn;dirty=!1;trial=!1;tab=`base`;view=Q(`div`,`gview`);audition=new qy;preview=new Xy(this.audition);listenBtn;review=Q(`div`,`greview`);savedB;constructor(e){this.hooks=e,this.root.hidden=!0,this.b=this.loadSaved();let t=Q(`div`,`ghead`);t.append(Q(`div`,`eyebrow`,U(`garage.eyebrow`)),Q(`p`,`big`,U(`garage.title`))),this.saveBtn=rb(`btn`,U(`garage.save`),()=>this.save()),this.rangeBtn=rb(`btn sub`,U(`garage.range`),()=>{this.rangeProblems().length||(this.audition.stop(),this.preview.stop(),this.hooks.range(er(this.b),this.stage))});let n=rb(`btn sub`,U(`garage.back`),()=>this.close()),r=Q(`div`,`row gfoot`);r.append(this.saveBtn,this.rangeBtn,n),this.savedB=er(this.b),this.listenBtn=rb(`btn small glisten`,U(`garage.listen`),()=>this.toggleListen());let i=Q(`div`,`row gvrow`);i.append(this.listenBtn,Q(`small`,`note`,U(`garage.dragHint`))),this.view.append(this.preview.canvas,i,this.review),this.root.append(t,this.bar,this.view,this.parts,this.stats,r),this.codeIn.addEventListener(`keydown`,e=>{e.stopPropagation(),e.code===`Enter`&&this.importCode()}),Object.assign(this.codeIn,{type:`text`,spellcheck:!1,autocomplete:`off`}),this.root.addEventListener(`keydown`,e=>{e.code===`Escape`&&(e.stopPropagation(),this.close())})}get visible(){return!this.root.hidden}problems(){let e=ur(this.b);return ly(this.b,this.hooks.collection()).length&&e.push(`locked`),e}rangeProblems(){return this.problems().filter(e=>!(this.trial&&e===`locked`))}has(e,t){return ay(this.hooks.collection()).has(`${e}:${t}`)}lockSub(e,t){let n=ny(`${e}:${t}`);return n?U(`garage.lockedFrom`,{boss:U(`bosses.${n}.name`)}):U(`garage.locked`)}loadSaved(){let e=br(this.hooks.load());return e.ok?e.build:er(wr[0])}open(e=!1){this.savedB=this.loadSaved(),e||(this.b=er(this.savedB),this.dirty=!1,this.trial=!1),this.codeMsg.textContent=``,this.render(),this.root.hidden=!1,this.preview.start(),this.showListen()}openShared(e){this.b=er(e),this.dirty=!0,this.savedB=this.loadSaved(),this.loadedMsg(),this.render(),this.root.hidden=!1,this.preview.start(),this.showListen()}loadedMsg(){let e=ly(this.b,this.hooks.collection());this.trial=e.length>0,this.codeMsg.textContent=this.trial?U(`garage.codeLocked`,{parts:e.map(Qy).join(`、`)}):U(`garage.codeLoaded`)}close(){this.audition.stop(),this.preview.stop(),this.root.hidden=!0,this.hooks.close()}bpm(){let e=zn(this.stage);return e.bpm||e.song.bpm}toggleListen(){this.audition.looping?this.audition.stop():this.audition.start(this.b,this.bpm(),!0),this.showListen()}showListen(){this.listenBtn.textContent=U(this.audition.looping?`garage.listenStop`:`garage.listen`),this.listenBtn.classList.toggle(`on`,this.audition.looping)}save(){this.problems().length||(this.hooks.save(vr(this.b)),this.savedB=er(this.b),this.dirty=!1,this.codeMsg.textContent=U(`garage.saved`),this.renderStats())}change(e){e(this.b),this.dirty=!0,this.trial&&!ly(this.b,this.hooks.collection()).length&&(this.trial=!1),this.codeMsg.textContent=``,this.render(),this.audition.looping?this.audition.start(this.b,this.bpm(),!0):this.audition.start(this.b,this.bpm(),!1,this.tab===`lock`)}importCode(){let e=br(this.codeIn.value);e.ok?(this.b=e.build,this.dirty=!0,this.render(),this.loadedMsg()):this.codeMsg.textContent=e.reason===`invalid`?U(`garage.codeInvalid`,{why:e.problems.map(e=>U(`garage.problem.${e}`)).join(` / `)}):U(`garage.code_${e.reason}`)}render(){this.renderParts(),this.renderStats()}seg(e,t,n,r,i,a){let o=Q(`div`,`gseg`);for(let s of e){let e=!!a&&!this.has(a,s),c=rb(`gopt`+(s===t?` sel`:``)+(e?` locked`:``),``,()=>{e||this.change(()=>r(s))});c.disabled=e&&s!==t,c.append(Q(`b`,void 0,n(s))),e?c.append(Q(`small`,void 0,this.lockSub(a,s))):i&&c.append(Q(`small`,void 0,i(s))),o.append(c)}return o}section(e,...t){let n=Q(`section`,`gsec`);return n.append(Q(`h3`,void 0,e),...t),n}tabRow(){let e=this.b,t=e.lock,n={base:`${e.core} · ${e.drop}`,shot:e.shot.timbre,lock:`${t.max} · ${U(`garage.orders.${t.order}`)} · ${U(`garage.rates.${t.rate}`)}`,tune:oe.map(t=>(e.tune[t]>0?`+`:``)+e.tune[t]).join(` `)},r=Q(`div`,`gtabs`);for(let e of ib){let t=rb(`gtab`+(e===this.tab?` sel`:``),``,()=>{this.tab=e,this.renderParts(),this.parts.scrollTop=0});t.setAttribute(`aria-pressed`,String(e===this.tab)),t.append(Q(`b`,void 0,U(`garage.tabs.${e}`)),Q(`small`,void 0,n[e])),r.append(t)}return r}renderParts(){let e=this.b,t=this.parts,n=t.scrollTop;t.textContent=``,t.append(this.tabRow());let r=this.tab,i=this.seg(k,e.core,e=>e,t=>e.core=t,e=>U(`garage.coreSub`,{layers:ce[e].layers,voices:ce[e].voices}),`core`),a=Q(`div`,`row glook`),o=Q(`label`,`chk`,U(`garage.heart`)),s=Q(`select`);for(let e of te){let t=this.has(`heart`,e),n=Q(`option`,void 0,t?U(`garage.hearts.${e}`):`${e}  ${this.lockSub(`heart`,e)}`);n.value=e,n.disabled=!t,s.append(n)}s.value=e.heart,s.addEventListener(`change`,()=>this.change(()=>e.heart=s.value)),o.append(s);let c=Q(`div`,`gswatch`);if(ae.forEach((t,n)=>{let r=rb(`gcol`+(n===e.color?` sel`:``),``,()=>this.change(()=>e.color=n));r.style.background=Se(t,N.player),r.title=U(`garage.color`),r.setAttribute(`aria-label`,`${U(`garage.color`)} ${n+1}`),c.append(r)}),a.append(o,Q(`span`,`glab`,U(`garage.color`)),c),r===`base`){let n=Q(`div`,`row`);wr.forEach((e,t)=>n.append(rb(`btn sub small`,Tr[t],()=>this.change(()=>this.b=er(e))))),t.append(this.section(U(`garage.presets`),n,Q(`p`,`note`,U(`garage.presetHelp`)))),t.append(this.section(U(`garage.core`),i,Q(`p`,`note`,U(`garage.cores.${e.core}`)),a)),t.append(this.section(U(`garage.drop`),this.seg(l,e.drop,e=>e,t=>e.drop=t,e=>U(`garage.dropSub`,{v:j.DROP_VOICES[e]}),`drop`),Q(`p`,`note`,U(`garage.drops.${e.drop}`))))}let u=this.seg(ee,e.shot.timbre,e=>e,t=>e.shot.timbre=t,e=>U(`garage.timbreSub`,{v:se[e].voices}),`timbre`);u.classList.add(`gtimbre`);let d=Q(`div`,`gsteps`);e.shot.steps.forEach((t,n)=>{let r=rb(`gstep s`+t+(n%4==0?` beat`:``),t===2?`>`:t===1?`•`:``,()=>this.change(()=>e.shot.steps[n]=(t+1)%3));r.setAttribute(`aria-label`,U(`garage.stepAria`,{n:n+1,v:U(`garage.stepKind.${t}`)})),d.append(r)});let f=Q(`div`,`row gtools`);for(let[t,n]of Object.entries(Qt(`garage.patterns`)))f.append(rb(`btn sub small`,U(`garage.patternNames.${t}`),()=>this.change(()=>e.shot.steps=[...n].map(e=>e===`X`?2:+(e===`x`)))));r===`shot`&&t.append(this.section(U(`garage.shot`),u,Q(`p`,`note`,U(`garage.timbres.${e.shot.timbre}`)),d,Q(`p`,`note`,U(`garage.stepHelp`)),f));let p=e.lock,m=Q(`div`,`glock`),h=(e,t)=>{let n=Q(`div`,`glrow`);n.append(Q(`span`,`glab`,e),t),m.append(n)};h(U(`garage.lockMax`),this.seg(ne,p.max,String,e=>p.max=e,void 0,`lockMax`)),h(U(`garage.lockOrder`),this.seg(A,p.order,e=>U(`garage.orders.${e}`),e=>p.order=e,void 0,`order`)),h(U(`garage.lockRate`),this.seg(re,p.rate,e=>U(`garage.rates.${e}`),e=>p.rate=e,void 0,`rate`)),h(U(`garage.lockLen`),this.seg(ie,p.len,e=>U(`garage.lens.${e}`),e=>p.len=e,void 0,`len`)),h(U(`garage.lockOct`),this.seg([1,2],p.oct,String,e=>p.oct=e,void 0,`oct`)),r===`lock`&&t.append(this.section(U(`garage.lock`),m,Q(`p`,`note`,U(`garage.orderHelp.${p.order}`))));let g=Q(`div`,`gtune`),_=oy(this.hooks.collection());for(let t of oe){let n=_.includes(t),r=Q(`div`,`gtrow`+(n?``:` locked`)),i=Q(`input`);Object.assign(i,{type:`range`,min:String(-j.TUNE_RANGE),max:String(j.TUNE_RANGE),step:`1`,value:String(e.tune[t])}),i.disabled=!n&&e.tune[t]===0,i.setAttribute(`aria-label`,U(`garage.tune.${t}.name`)),i.addEventListener(`input`,()=>this.change(()=>e.tune[t]=Number(i.value))),r.append(Q(`span`,`gsym l`,U(`garage.tune.${t}.l`)),i,Q(`span`,`gsym r`,U(`garage.tune.${t}.r`)));let a=e.tune[t],o=n?a===0?U(`garage.tuneNeutral`):U(`garage.tune.${t}.${a<0?`ld`:`rd`}`,{n:Math.abs(a)}):U(`garage.tuneLocked`,{n:M.TUNE_AT[t]});r.append(Q(`small`,`gtdesc`,o)),g.append(r)}r===`tune`&&t.append(this.section(U(`garage.tuneTitle`),g)),t.scrollTop=n}renderStats(){let e=this.b,t=this.stats;t.textContent=``,this.bar.textContent=``;let n=this.problems(),r=lr(e),i=Q(`div`,`gvoice`+(r.total>r.cap?` over`:``)),a=Math.max(r.cap,r.total);for(let e=0;e<a;e++){let t=Q(`i`);t.className=e<r.shot?`sh`:e<r.shot+r.lock?`lk`:e<r.total?`dr`:``,e>=r.cap&&t.classList.add(`x`),i.append(t)}let o=Q(`div`,`gvhead`);if(o.append(Q(`b`,void 0,U(`garage.voices`,{n:r.total,cap:r.cap})),Q(`small`,void 0,U(`garage.voiceSplit`,{shot:r.shot,lock:r.lock,drop:r.drop}))),this.bar.append(o,i),n.length){let e=Q(`ul`,`gprob`);for(let t of n)e.append(Q(`li`,void 0,U(`garage.problem.${t}`)));this.bar.append(e)}let s=rr(e.shot.steps),c=ir(e.shot.steps),l=c>=j.NOTE_MAX-1e-9&&j.D_BAR/Math.max(1,s)>j.NOTE_MAX;t.append(this.stat(U(`garage.notes`),U(`garage.notesVal`,{n:s,max:j.NOTES_MAX,acc:nr(e.shot.steps)})),this.stat(U(`garage.notePower`),U(`garage.notePowerVal`,{n:c.toFixed(2),acc:(c*j.ACCENT_MULT).toFixed(2)})+(l?U(`garage.capped`):``)));let u=Q(`select`);Pn.forEach((e,t)=>{let n=zn(t),r=Q(`option`,void 0,U(`garage.stageOpt`,{n:t+1,name:U(`songs.${e.id}.name`),bpm:n.bpm||n.song.bpm}));r.value=String(t),u.append(r)}),u.value=String(this.stage),u.addEventListener(`change`,()=>{this.stage=Number(u.value),this.renderStats()});let d=Q(`label`,`chk`,U(`garage.bpm`));d.append(u),t.append(d);let f=this.bpm(),p=hr(e,f),m=this.metrics(this.savedB,f),h=this.metrics(e,f),g=(e,t=0,n=``)=>this.diff(m[e],h[e],t,n);t.append(this.stat(U(`garage.hp`),String(h.hp),!1,g(`hp`)),this.stat(U(`garage.move`),`×${h.move.toFixed(2)}`,!1,g(`move`,2)),this.stat(U(`garage.heat`),p.toOverheat===1/0?U(`garage.heatSafe`):U(`garage.heatSec`,{s:p.toOverheat.toFixed(1)}),p.toOverheat!==1/0,g(`heat`,1)),this.stat(U(`garage.dps`),U(`garage.dpsVal`,{dps:p.dps.toFixed(1),peak:p.peakDps.toFixed(1)}),!1,g(`dps`,1)),this.stat(U(`garage.armorEff`),`${Math.round(h.armor)}%`,!1,g(`armor`,0,`%`)),this.stat(U(`garage.lockDmg`),U(`garage.lockDmgVal`,{n:h.lock.toFixed(0),max:e.lock.max}),!1,g(`lock`))),t.append(Q(`p`,`note gdiffnote`,U(`garage.diffNote`))),this.renderReview(f),this.preview.set(e,Se(xr(e).color,N.player)),this.codeIn.value=vr(e);let _=Q(`div`,`row`);_.append(rb(`btn sub small`,U(`garage.copy`),()=>{navigator.clipboard?.writeText(vr(this.b)).then(()=>this.codeMsg.textContent=U(`garage.copied`),()=>{})}),rb(`btn sub small`,U(`garage.load`),()=>this.importCode()),rb(`btn sub small`,U(`garage.shareUrl`),()=>{navigator.clipboard?.writeText(this.hooks.shareUrl(vr(this.b))).then(()=>this.codeMsg.textContent=U(`garage.urlCopied`),()=>{})})),t.append(Q(`h3`,void 0,U(`garage.code`)),this.codeIn,_,this.codeMsg),t.prepend(Q(`h3`,void 0,U(`garage.estimate`))),this.saveBtn.disabled=n.length>0,this.rangeBtn.disabled=this.rangeProblems().length>0,this.saveBtn.textContent=this.dirty?U(`garage.save`):U(`garage.savedBtn`)}stat(e,t,n=!1,r){let i=Q(`div`,`gstat`+(n?` warn`:``)),a=Q(`b`,void 0,t);return r&&a.append(r),i.append(Q(`span`,void 0,e),a),i}metrics(e,t){let n=xr(e),r=hr(e,t);return{hp:ce[e.core].layers*25,move:n.move,heat:r.toOverheat===1/0?999:r.toOverheat,dps:r.dps,armor:pr(e)*100,lock:gr(e,b.LASER_DMG)}}diff(e,t,n,r){let i=10**n,a=Math.round((t-e)*i)/i;if(a===0)return null;let o=a>0,s=Math.abs(t-e)>500?o?`▲`:`▼`:`${o?`▲`:`▼`}${Math.abs(a).toFixed(n)}${r}`;return Q(`i`,`gdiff `+(o?`up`:`down`),s)}renderReview(e){let t=this.review;t.textContent=``;let n=Or(this.b,e),r=Or(this.savedB,e);t.append(this.radar(n,r));let i=kr(n),a=Q(`div`,`gtags`),o=(e,t,n)=>{let r=Q(`p`,`gtag `+n);r.append(Q(`b`,void 0,e)),r.append(t.length?t.map(e=>U(`garage.scene.${e}`)).join(` / `):U(`garage.sceneNone`)),a.append(r)};o(U(`garage.strong`),i.strong,`strong`),o(U(`garage.weak`),i.weak,`weak`),t.append(a)}radar(e,t){let n=`http://www.w3.org/2000/svg`,r=document.createElementNS(n,`svg`);r.setAttribute(`viewBox`,`-130 -112 260 230`),r.setAttribute(`class`,`gradar`);let i=Er.length,a=(e,t)=>{let n=-Math.PI/2+e/i*Math.PI*2;return[Math.cos(n)*80*t,Math.sin(n)*80*t]},o=(e,t)=>{let i=document.createElementNS(n,`polygon`);i.setAttribute(`points`,e.map((e,t)=>a(t,Math.max(.06,e)).join(`,`)).join(` `)),i.setAttribute(`class`,t),r.append(i)};for(let e of[.33,.66,1])o(Er.map(()=>e),`ring`);return Er.forEach((e,t)=>{let[i,o]=a(t,1),s=document.createElementNS(n,`line`);s.setAttribute(`x1`,`0`),s.setAttribute(`y1`,`0`),s.setAttribute(`x2`,String(i)),s.setAttribute(`y2`,String(o)),s.setAttribute(`class`,`spoke`),r.append(s);let[c,l]=a(t,1.24),u=document.createElementNS(n,`text`);u.setAttribute(`x`,String(c)),u.setAttribute(`y`,String(l+4)),u.setAttribute(`text-anchor`,Math.abs(c)<8?`middle`:c>0?`start`:`end`),u.textContent=U(`garage.axes.${e}`),r.append(u)}),o(Er.map(e=>t[e]),`old`),o(Er.map(t=>e[t]),`cur`),r}},ob=e=>{let t=[...e].sort((e,t)=>e-t),n=t.length;return n%2?t[(n-1)/2]:(t[n/2-1]+t[n/2])/2};function sb(e,t,n){if(!t.length)return null;let r=[];for(let i of e){let e=1/0;for(let r of t){let t=i-(r+n.latency);Math.abs(t)<Math.abs(e)&&(e=t)}Math.abs(e)<n.beatSec/2&&r.push(e)}if(r.length<n.minTaps)return null;let i=ob(r),a=r.filter(e=>Math.abs(e-i)<=n.outlierSec);if(a.length<n.minTaps)return null;let o=ob(a),s=ob(a.map(e=>Math.abs(e-o))),c=Math.round(o*1e3/n.stepMs)*n.stepMs;return{offsetMs:Math.min(n.maxMs,Math.max(n.minMs,c)),spreadMs:Math.round(s*1e3),used:a.length}}var cb=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},lb=[`Space`,`KeyZ`,`KeyJ`,`Enter`],ub=class{audio;onClose;root=cb(`div`,`ov calib`);head=cb(`p`,`big`);body=cb(`p`,`lede`);pulse=cb(`div`,`pulse`);count=cb(`p`,`count`);row=cb(`div`,`row`);clicks=[];taps=[];running=!1;raf=0;result=null;constructor(e,t){this.audio=e,this.onClose=t,this.root.hidden=!0,this.root.append(cb(`div`,`eyebrow`,U(`calib.eyebrow`)),this.head,this.body,this.pulse,this.count,this.row),this.root.addEventListener(`pointerdown`,e=>{this.running&&e.target.tagName!==`BUTTON`&&this.tap(e.timeStamp)}),addEventListener(`keydown`,e=>{this.running&&!e.repeat&&lb.includes(e.code)&&(e.preventDefault(),e.stopImmediatePropagation(),this.tap(e.timeStamp))})}buttons(e){this.row.textContent=``;for(let[t,n]of e){let e=cb(`button`,`btn`,t);e.type=`button`,e.addEventListener(`click`,e=>{e.stopPropagation(),n()}),this.row.append(e)}}open(e=!1){this.root.hidden=!1,this.stop(),this.head.textContent=U(e?`calib.offerTitle`:`calib.title`),this.body.textContent=U(`calib.intro`),this.count.textContent=``,this.pulse.style.opacity=`0`,this.buttons([[U(`calib.start`),()=>void this.start()],[U(e?`calib.later`:`calib.cancel`),()=>this.close(null)]])}async waitAudioClock(){let e=z.ac,t=performance.now()+2e3,n=e.currentTime,r=0;for(;performance.now()<t;)if(await new Promise(e=>requestAnimationFrame(e)),e.state===`running`&&e.currentTime>n&&r++,n=e.currentTime,r>=3)return}async start(){if(this.stop(),this.audio.ensureAudio(),this.head.textContent=U(`calib.runTitle`),this.body.textContent=U(`calib.run`),this.count.textContent=``,this.buttons([[U(`calib.cancel`),()=>this.close(null)]]),await this.waitAudioClock(),this.root.hidden)return;let e=60/i.BPM,t=this.audio.now()+.6;this.root.dataset.firstClick=String(performance.now()+(t-this.audio.now())*1e3),this.clicks=[],this.taps=[],this.result=null;let n=i.COUNT_IN+i.TAPS;for(let r=0;r<n;r++){let n=t+r*e;et(n,r%4==0?i.NOTE_DOWN:i.NOTE),r>=i.COUNT_IN&&this.clicks.push(n)}this.running=!0;let r=t+n*e+.4,a=()=>{if(!this.running)return;let o=this.audio.now(),s=(o-(z.ready?z.latency():0)-t)/e,c=Math.floor(s),l=s-c;this.pulse.style.opacity=s>=0&&c<n?String((1-l)**3):`0`,this.pulse.classList.toggle(`down`,c%4==0);let u=i.COUNT_IN-c;this.count.textContent=s<0?``:u>0?U(`calib.countIn`,{n:u}):U(`calib.taps`,{n:this.taps.length,total:i.TAPS}),o>=r?this.finish():this.raf=requestAnimationFrame(a)};this.raf=requestAnimationFrame(a)}tap(e){let t=this.audio.eventTime(e);this.clicks.length&&t>this.clicks[0]-30/i.BPM&&this.taps.push(t)}finish(){this.stop();let e=z.ready?z.latency():0;this.result=sb(this.taps,this.clicks,{latency:e,beatSec:60/i.BPM,outlierSec:i.OUTLIER_SEC,minTaps:i.MIN_TAPS,stepMs:t.OFFSET_STEP_MS,minMs:t.OFFSET_MIN_MS,maxMs:t.OFFSET_MAX_MS}),this.pulse.style.opacity=`0`,this.count.textContent=``;let n=this.result;n?(this.head.textContent=U(`calib.resultTitle`,{sign:n.offsetMs>0?`+`:``,ms:n.offsetMs}),this.body.textContent=U(`calib.result`,{spread:n.spreadMs,n:n.used}),this.buttons([[U(`calib.apply`),()=>this.close(n.offsetMs)],[U(`calib.retry`),()=>void this.start()],[U(`calib.cancel`),()=>this.close(null)]])):(this.head.textContent=U(`calib.failTitle`),this.body.textContent=U(`calib.fail`,{n:this.taps.length,min:i.MIN_TAPS}),this.buttons([[U(`calib.retry`),()=>void this.start()],[U(`calib.cancel`),()=>this.close(null)]]))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}close(e){this.stop(),this.root.hidden=!0,this.onClose(e)}get visible(){return!this.root.hidden}},db=`"Chakra Petch",sans-serif`,fb=`"DotGothic16",monospace`,pb=e=>1-(1-Math.min(1,Math.max(0,e)))**3,mb=(e,t)=>Math.abs(Math.sin(e*12.9898+t*78.233)*43758.5453)%1,hb=(e,t)=>Math.floor(e*t*2)%2==0;function gb(e,t,n){let r=[...t],i=[0],a=0;return r.forEach((t,r)=>{let o=e.measureText(t).width;a+o>n&&r>i[i.length-1]&&(i.push(r),a=0),a+=o}),i}function _b(e,t,n){let{x:r,y:i,w:a,h:o,now:s}=n;if(e.textBaseline=`alphabetic`,t.phase===`done`)return;if(t.phase===`wait`){if(!hb(s,4)&&!n.reduced)return;e.globalAlpha=.9,e.fillStyle=N.warn,e.fillRect(r,i+o/2-1,18,2),e.textAlign=`left`,e.font=`700 11px ${db}`,e.fillText(n.incoming,r+24,i+o/2+4),e.globalAlpha=1;return}let c=t.open,l=i+o/2,u=1,d=o;if(n.reduced)u=c;else if(c<.45){let t=a*pb(c/.45);e.globalAlpha=.25,e.fillStyle=N.player,e.fillRect(r+(a-t)/2,l-3,t,6),e.globalAlpha=1,e.fillStyle=N.white,e.fillRect(r+(a-t)/2,l-1,t,2);return}else d=Math.max(2,o*pb((c-.45)/.55));let p=l-d/2;e.globalAlpha=u,e.fillStyle=`rgba(6,8,24,.8)`,e.fillRect(r,p,a,d),e.fillStyle=`rgba(127,243,255,.05)`;for(let t=p+2;t<p+d;t+=4)e.fillRect(r,t,a,1);e.fillStyle=N.player,e.fillRect(r,p,2,d);let m=(t,n,r,i)=>{e.fillRect(t,n,8*r,1),e.fillRect(t,n,1,8*i)};e.fillStyle=`rgba(127,243,255,.6)`,m(r+a-1,p,-1,1),m(r+a-1,p+d-1,-1,-1);let h=t.phase===`open`?1-(c-.45)/.55:t.phase===`close`?1-c:0;if(!n.reduced&&h>0){e.globalAlpha=h*.5,e.fillStyle=N.white,e.fillRect(r,p,a,d);let t=Math.floor(s*30);for(let n=0;n<3;n++){let i=mb(t,n);e.globalAlpha=h*.8,e.fillStyle=n%2?N.accent:N.player,e.fillRect(r+mb(t,n+7)*a*.3,p+i*d,a*(.3+mb(n,t)*.6),1+n%2*2)}e.globalAlpha=u}let g=t.phase===`line`?1:t.phase===`close`?Math.max(0,(c-.6)/.4):0;if(g<=0||d<o*.9){e.globalAlpha=1;return}e.globalAlpha=u*g;let _=r+10,v=i+9,y=f.FACE_W,b=o-18;e.fillStyle=`rgba(127,243,255,.08)`,e.fillRect(_,v,y,b),e.fillStyle=`rgba(127,243,255,.35)`,e.fillRect(_,v,y,1),e.fillRect(_,v+b-1,y,1),e.fillRect(_,v,1,b),e.fillRect(_+y-1,v,1,b),e.fillStyle=`rgba(127,243,255,.15)`,e.fillRect(_+1,v+b/2,y-2,1);let x=Fi(t.text),S=Math.exp(-n.sinceStep/.07),C=t.typing&&!x?.3+.7*S:x?0:.05,w=e=>Math.sin(Math.PI*e)*(Math.sin(e*Math.PI*6+s*9)*.55+Math.sin(e*Math.PI*14-s*13)*.3+Math.sin(e*Math.PI*26+s*21)*.15),T=(t,n,r,i)=>{e.globalAlpha=u*g*r,e.strokeStyle=n,e.lineWidth=i,e.beginPath();for(let n=0;n<34;n++){let r=n/33,i=_+4+r*(y-8)+t,a=v+b/2-w(r)*C*b*.42;n===0?e.moveTo(i,a):e.lineTo(i,a)}e.stroke()};n.reduced||T(1.5,N.accent,.45,1.5),T(0,N.player,1,1.5),e.globalAlpha=u*g;let E=_+y+12;e.textAlign=`left`,e.fillStyle=N.dim,e.font=`700 10px ${db}`,e.fillText(n.label,E,i+21);let D=e.measureText(n.label).width,O=x?0:Math.round(1+C*3);for(let t=0;t<4;t++)e.fillStyle=t<O?N.player:`rgba(133,144,192,.3)`,e.fillRect(E+D+8+t*4,i+21-(3+t*2),2,3+t*2);e.font=`400 15px ${fb}`,e.fillStyle=N.text;let ee=r+a-14-E,k=[...t.text],te=gb(e,t.text,ee).slice(0,2),ne=E,A=i+44;te.forEach((n,r)=>{let a=r+1<te.length?te[r+1]:k.length,o=k.slice(n,Math.min(a,t.shown)).join(``);if(!o&&r>0)return;let s=i+44+r*20;e.fillText(o,E,s),ne=E+e.measureText(o).width,A=s}),t.typing||t.phase===`line`&&hb(s,2)&&!t.more?(e.fillStyle=N.player,e.fillRect(ne+2,A-12,7,14)):t.more&&hb(s,2)&&(e.fillStyle=N.player,e.font=`700 10px ${db}`,e.textAlign=`right`,e.fillText(`▼`,r+a-10,i+o-8)),e.globalAlpha=1}var vb=a.W-32,yb=f.BOX_H,bb=.03,xb=class{canvas=document.createElement(`canvas`);ctx=this.canvas.getContext(`2d`);talk=null;raf=0;done=null;s16=60/f.FREE_BPM/4;grid=Li(0,this.s16);constructor(){this.canvas.className=`commp`}now(){return z.ready?z.ac.currentTime:performance.now()/1e3}get playing(){return this.talk!==null}play(e){this.stop();let t=this.now(),n=Li(0,this.s16*4)(t+bb);this.talk=Ii(e,n),z.ready&&vt(n);let r=new Promise(e=>this.done=e),i=()=>{this.raf=requestAnimationFrame(i),this.frame()};return this.raf=requestAnimationFrame(i),r}press(){let e=this.talk;e&&Bi(e,this.now(),e=>this.grid(e+bb))&&z.ready&&yt(e.closeAt)}stop(){cancelAnimationFrame(this.raf),this.raf=0,this.talk=null,this.done?.(),this.done=null}frame(){let e=this.talk;if(!e)return;let t=this.now();zi(e,t,e=>this.grid(e+bb))&&z.ready&&yt(e.closeAt);for(let n of Vi(e,t+f.LOOKAHEAD,this.grid)){if(n.t<t||!z.ready)continue;let e=Hi(n.ch);bt(n.t,e.note,e.f1,e.f2)}let n=this.canvas.getBoundingClientRect(),r=Math.min(2,devicePixelRatio||1),i=Math.max(1,Math.round(n.width*r)),a=Math.max(1,Math.round(n.width*r*yb/vb));(this.canvas.width!==i||this.canvas.height!==a)&&(this.canvas.width=i,this.canvas.height=a);let o=this.ctx;o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,i,a);let s=i/vb;o.setTransform(s,0,0,s,0,0);let c=Ri(e,t);_b(o,c,{now:t,sinceStep:(t%this.s16+this.s16)%this.s16,x:0,y:0,w:vb,h:yb,label:U(`operator.label`),incoming:U(`operator.incoming`),reduced:es.reduced}),c.phase===`done`&&this.stop()}},Sb=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},Cb=(e,t)=>new Promise(n=>{let r=performance.now()+e*1e3,i=()=>t.on||performance.now()>=r?n():requestAnimationFrame(i);i()});function wb(e,t,n){let r=Sb(`div`,`codename`),i=Sb(`input`);Object.assign(i,{type:`text`,maxLength:24,value:e,spellcheck:!1,autocomplete:`off`});let a=Sb(`p`,`note`,U(`ending.codenameHint`)),o=Sb(`button`,`btn`,U(`ending.codenameOk`));o.type=`button`;let s=()=>{let e=Xv(i.value);Zv(e)?t(e):(a.textContent=U(`ending.codenameBad`),a.classList.add(`bad`))};o.addEventListener(`click`,s),i.addEventListener(`keydown`,e=>{e.stopPropagation(),e.code===`Enter`&&s(),e.code===`Escape`&&n&&n()});let c=Sb(`div`,`row`);if(c.append(o),n){let e=Sb(`button`,`btn sub`,U(`calib.cancel`));e.type=`button`,e.addEventListener(`click`,n),c.append(e)}return r.append(i,a,c),setTimeout(()=>i.focus(),0),r}var Tb=class{root=Sb(`div`,`ov ending`);skip={on:!1};comm=new xb;constructor(){this.root.hidden=!0,this.root.addEventListener(`pointerdown`,e=>{e.target.closest(`button, input`)||(this.comm.playing?this.comm.press():this.skip.on=!0)}),addEventListener(`keydown`,e=>{this.root.hidden||!this.comm.playing||e.repeat||(e.code===`Enter`||e.code===`Space`||e.code===`KeyV`)&&(e.preventDefault(),this.comm.press())})}async talk(e,t){this.root.append(this.comm.canvas),await this.comm.play(Qt(e).map(e=>Zt(e,{name:t}))),this.comm.canvas.remove()}get visible(){return!this.root.hidden}async play(e){let t=this.root;t.hidden=!1,t.textContent=``,t.className=`ov ending`,t.append(Sb(`p`,`big clear`,U(`ending.fakeTitle`)),Sb(`p`,`lede`,U(`ending.fakeSub`)),Sb(`p`,`note hint`,U(`ending.skip`))),await this.step(v.FAKE_SEC),t.textContent=``;let n=Sb(`div`,`roll`);for(let e of Qt(`ending.roll`))n.append(Sb(`p`,e?void 0:`gap`,e||` `));n.style.animationDuration=`${v.ROLL_SEC}s`,t.append(n,Sb(`p`,`note hint`,U(`ending.skip`))),await this.step(v.ROLL_SEC),t.textContent=``,t.classList.add(es.reduced?`calm`:`glitch`),t.append(Sb(`p`,`big`,`▓▒░ ▒▓░▒ ░▓▒`)),K.noiseMax=v.NOISE_SEC,K.noiseT=v.NOISE_SEC,z.ready&&z.glitch(z.ac.currentTime,es.reduced?.6:2);let r=performance.now();if(await new Promise(e=>{let t=()=>{let n=(performance.now()-r)/1e3;if(K.noiseT=Math.max(0,v.NOISE_SEC-n),n>=v.NOISE_SEC)return e();requestAnimationFrame(t)};t()}),K.noiseT=0,t.textContent=``,t.classList.remove(`glitch`,`calm`),t.append(Sb(`p`,`big`,U(`ending.complete`))),await this.talk(e.full?`operator.ending.full`:`operator.ending.web`,U(`operator.callR1`)),!e.full){t.append(Sb(`p`,`lede`,U(`ending.completeWeb`)));let n=Sb(`div`,`row`);if(e.storeUrl){let t=Sb(`a`,`btn`,U(`ending.store`));t.href=e.storeUrl,t.target=`_blank`,t.rel=`noopener`,n.append(t)}n.append(this.button(U(`ending.toTitle`),()=>this.close(e))),t.append(n)}else t.append(Sb(`p`,`lede`,U(`ending.completeFull`)),Sb(`p`,`lede`,U(`ending.codenameTitle`))),t.append(wb(``,n=>{e.onRegister(n),t.textContent=``,t.append(Sb(`div`,`eyebrow`,n),Sb(`p`,`big clear`,U(`ending.unlocked`)),Sb(`p`,`lede`,U(`ending.unlockedSub`)));let r=Sb(`div`,`row`);r.append(this.button(U(`ending.toTitle`),()=>this.close(e))),t.append(r),this.talk(`operator.ending.registered`,n)}))}button(e,t){let n=Sb(`button`,`btn`,e);return n.type=`button`,n.addEventListener(`click`,t),n}async step(e){this.skip.on=!1,await Cb(e,this.skip),this.skip.on=!1}close(e){this.comm.stop(),this.comm.canvas.remove(),this.root.hidden=!0,e.onDone()}},$=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=n),r},Eb={data:Ay(Yv.storage)},Db=()=>jy(Yv.storage,Eb.data),Ob=class{splash=$(`div`,`ov splash`);title=$(`div`,`ov title-ov`);result=$(`div`,`ov result-ov`);pause=$(`div`,`ov pause`);notice=$(`div`,`ov notice`);calib=null;ending=new Tb;progRow=$(`div`,`row prog`);webDone=$(`div`,`webdone`);trackSel=$(`select`);codeName=$(`span`,`codename-label`);stageMeta=[];flashChk=$(`input`);noticeChk=$(`input`);lockBtn=$(`button`,`tbtn lockbtn`,U(`touch.lock`));dropBtn=$(`button`,`tbtn dropbtn`,U(`touch.drop`));pauseBtn=$(`button`,`tbtn pausebtn`,U(`touch.pause`));settingsPanel=null;applySettings=()=>{};qualityLevel=()=>0;invChk=$(`input`);spdSel=$(`select`);garage=new ab({load:()=>Eb.data.garage.build,save:e=>{Eb.data.garage.build=e,Db()},close:()=>{this.rangeBuild=null,this.title.hidden=!1},range:(e,t)=>{this.rangeBuild=e,this.garage.root.hidden=!0,wo(t,`new`,Ln(t))},collection:()=>Eb.data.collection,shareUrl:e=>Uv(Yv.shareBase(),e)});share=new Ry(()=>this.result.hidden=!1);launchCode=null;titleMsg=$(`p`,`note launch-msg`);studio=new nb({collection:()=>Eb.data.collection,changed:()=>Db(),close:()=>this.title.hidden=!1});rangeBuild=null;offRange=$(`input`);offOut=$(`output`);exBest=$(`small`);res={eyebrow:$(`div`,`eyebrow`),title:$(`p`,`big`),name:$(`p`,`subname`),stats:{},lastLabel:$(`dt`),reward:$(`div`,`reward`),primary:$(`button`,`btn`),replay:$(`button`,`btn sub`,U(`result.replay`)),secondary:$(`button`,`btn sub`,U(`result.title`)),share:$(`button`,`btn sub`,U(`share.button`))};lastClear=!1;primaryAction=null;coarse=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches;constructor(e){es.setting=Eb.data.settings.reduceFlash,this.buildSplash(),this.buildTitle(),this.buildResult(),this.buildPause(),this.buildNotice();for(let e of[this.lockBtn,this.dropBtn,this.pauseBtn])e.type=`button`,e.hidden=!0;this.codenameBox.hidden=!0,e.append(this.splash,this.title,this.result,this.pause,this.dropBtn,this.lockBtn,this.pauseBtn,this.notice,this.ending.root,this.codenameBox,this.garage.root,this.studio.root,this.share.root,this.settingsPanel.root),this.result.hidden=!0,this.pause.hidden=!0,this.title.hidden=!0,this.splash.hidden=!0,this.root=e,this.setFull(!0)}setFull(e){this.root.classList.toggle(`full`,e)}root;attachAudio(e){this.audio=e,this.calib=new ub(e,e=>{let t=Eb.data.settings;t.calibrated=!0,e!==null&&(t.offsetMs=e,this.offRange.value=String(e),this.showOffset()),Db(),K.state===`title`&&this.showTitle()}),this.root.append(this.calib.root)}setReduceFlash(e){Eb.data.settings.reduceFlash=e,es.setting=e,this.flashChk.checked=e,this.noticeChk.checked=e,Db()}buildNotice(){let e=this.notice;e.append($(`div`,`eyebrow`,U(`notice.eyebrow`)),$(`p`,`big`,U(`notice.title`)));for(let t of Qt(`notice.body`))e.append($(`p`,`lede`,t));let t=$(`label`,`chk`);this.noticeChk.type=`checkbox`,this.noticeChk.checked=Eb.data.settings.reduceFlash,this.noticeChk.addEventListener(`change`,()=>this.setReduceFlash(this.noticeChk.checked)),t.append(this.noticeChk,U(`notice.reduceFlash`));let n=$(`button`,`btn`,U(`notice.ok`));n.type=`button`;let r=()=>{e.hidden||(e.hidden=!0,removeEventListener(`keydown`,i),this.openSplash())},i=e=>{(e.code===`Enter`||e.code===`Space`)&&(e.preventDefault(),e.stopImmediatePropagation(),r())};n.addEventListener(`click`,r),addEventListener(`keydown`,i);let a=$(`div`,`row`);a.append(n),e.append(t,a)}setLaunchBuild(e){this.launchCode=e}showTitle(){let e=this.launchCode;if(this.launchCode=null,this.titleMsg.textContent=``,this.titleMsg.hidden=!0,e){let t=br(e);if(t.ok&&this.unlocked){this.garage.openShared(t.build);return}this.titleMsg.textContent=U(t.ok?Yv.fullGame?`launch.notTuned`:`launch.webOnly`:`launch.invalid`),this.titleMsg.hidden=!1}this.title.hidden=!1}get blocking(){return!this.splash.hidden||!this.notice.hidden||!!this.calib?.visible||this.ending.visible||!this.codenameBox.hidden||this.garage.visible||this.studio.visible||this.share.visible||!!this.settingsPanel?.visible}codenameBox=$(`div`,`ov codename-ov`);get unlocked(){return Yv.fullGame&&Eb.data.progress.tuned}get round(){return this.unlocked&&Eb.data.progress.track===`main`?2:1}refreshProgress(){let e=Eb.data.progress;this.progRow.hidden=!this.unlocked,this.webDone.hidden=Yv.fullGame||!e.tuned,this.trackSel.value=e.track,this.codeName.textContent=e.codename?U(`progress.codename`,{name:e.codename}):``;let t=this.round===2;Pn.forEach((e,n)=>{let r=t?zn(n):In[n];this.stageMeta[n].textContent=U(`title.stageMeta`,{genre:U(`songs.${e.id}.genre`),bpm:r.bpm||r.song.bpm})})}buildWebDone(){let e=this.webDone;if(e.hidden=!0,e.append($(`b`,void 0,U(`ending.complete`)),$(`p`,void 0,U(`ending.completeWeb`))),Yv.storeUrl){let t=$(`a`,`btn small`,U(`ending.store`));t.href=Yv.storeUrl,t.target=`_blank`,t.rel=`noopener`,e.append(t)}return e}buildProgress(){let e=this.progRow;for(let[e,t]of[[`sim`,`progress.trackSim`],[`main`,`progress.trackMain`]]){let n=$(`option`,void 0,U(t));n.value=e,this.trackSel.append(n)}this.trackSel.addEventListener(`change`,()=>{Eb.data.progress.track=this.trackSel.value===`main`?`main`:`sim`,Db(),this.refreshProgress()});let t=$(`button`,`btn sub small`,U(`progress.codenameChange`));t.type=`button`,t.addEventListener(`click`,()=>this.openCodename());let n=$(`button`,`btn small`,U(`progress.garage`));n.type=`button`,n.addEventListener(`click`,()=>this.openGarage());let r=$(`button`,`btn sub small`,U(`progress.studio`));return r.type=`button`,r.addEventListener(`click`,()=>{this.title.hidden=!0,this.studio.open()}),e.append(n,r,this.trackSel,this.codeName,t),e}openGarage(){this.unlocked&&(this.title.hidden=!0,this.garage.open())}onRangeExit(){this.setFull(!0),this.lockBtn.hidden=!0,this.dropBtn.hidden=!0,this.pauseBtn.hidden=!0,this.pause.hidden=!0,this.garage.open(!0)}openCodename(){let e=this.codenameBox;e.textContent=``;let t=()=>{e.hidden=!0,this.title.hidden=!1};e.append($(`p`,`big`,U(`ending.codenameTitle`)),wb(Eb.data.progress.codename,e=>{Eb.data.progress.codename=e,Db(),this.refreshProgress(),t()},t)),this.title.hidden=!0,e.hidden=!1}audio=null;pressing=!1;titleMusic=!1;get splashVisible(){return!this.splash.hidden}buildSplash(){let e=this.splash;e.style.setProperty(`--exit`,`${_.EXIT_SEC}s`);let t=$(`h1`,`slogo`,U(`title.logo1`));t.append($(`span`,void 0,U(`title.logo2`)));let n=$(`p`,`spress`,U(this.coarse?`splash.pressTouch`:`splash.press`)),r=$(`div`,`sfoot`);if(Lv.test&&r.append($(`span`,`stest`,U(`splash.test`))),r.append($(`span`,`sver`,U(`splash.version`,{v:Rv()}))),Lv.feedbackUrl){let e=$(`a`,`sfeed`,U(`splash.feedback`));e.href=Lv.feedbackUrl,e.target=`_blank`,e.rel=`noopener`,r.append(e)}r.append($(`span`,`scopy`,U(`splash.copyright`))),e.append($(`div`,`eyebrow`,U(`splash.tagline`)),t,n,r),e.addEventListener(`pointerdown`,e=>{e.target.closest(`a`)||this.pressStart()}),addEventListener(`keydown`,e=>{if(this.notice.hidden){if(this.splashVisible){if(/^(Shift|Control|Alt|Meta|Tab|F\d+)/.test(e.code)||e.code===`Escape`)return;e.preventDefault(),e.stopImmediatePropagation(),e.repeat||this.pressStart()}else e.code===`Escape`&&K.state===`title`&&!this.title.hidden&&!this.blocking&&(e.stopImmediatePropagation(),this.title.hidden=!0,this.openSplash())}})}openSplash(){this.pressing=!1,this.splash.classList.remove(`go`),this.splash.hidden=!1,document.activeElement?.blur?.()}pressStart(){if(!(this.pressing||this.splash.hidden)){if(this.pressing=!0,this.audio?.ensureAudio(),this.titleMusic=!0,z.ready){let e=Za(z.ac.currentTime);je(e,`soft`),Fe(e),qa()||Ja(e)}this.splash.classList.add(`go`),setTimeout(()=>{this.splash.hidden=!0,this.splash.classList.remove(`go`),!Eb.data.settings.calibrated&&this.calib?this.calib.open(!0):this.showTitle()},_.EXIT_SEC*1e3)}}tick(e){let t=this.titleMusic&&K.state===`title`&&z.ready&&!this.garage.visible&&!this.studio.visible&&!this.ending.visible&&!this.calib?.visible;if(t&&!qa()?Ja(Za(z.ac.currentTime)):!t&&qa()&&Ya(),this.splash.hidden)return;let n=(1-((Xa(e)??e*_.BPM/60)%1+1)%1)**3*(es.reduced?.3:1);this.splash.style.setProperty(`--pulse`,n.toFixed(3))}buildTitle(){let e=this.title,n=$(`div`,`tmain`),r=$(`div`,`tside`);e.append(n,r),this.titleMsg.hidden=!0,n.append($(`div`,`eyebrow`,U(`title.eyebrow`)));let i=$(`h1`,void 0,U(`title.logo1`));i.append($(`span`,void 0,U(`title.logo2`))),n.append(i,$(`p`,`lede`,U(`title.lede`)));let a=$(`dl`,`keys`);for(let[e,t]of Qt(`title.keys`)){let n=$(`dd`);n.innerHTML=t,a.append($(`dt`,void 0,e),n)}n.append($(`h3`,`thead`,U(`title.controls`)),a);let o=$(`div`,`grid`);Pn.forEach((e,t)=>{let n=$(`button`,`stg`+(t===0?` tut`:``));n.type=`button`;let r=$(`small`,void 0,U(`title.stageMeta`,{genre:U(`songs.${e.id}.genre`),bpm:e.bpm}));this.stageMeta[t]=r,n.append($(`b`,void 0,String(t+1).padStart(2,`0`)),$(`span`,void 0,U(`songs.${e.id}.name`)),r),n.addEventListener(`click`,()=>wo(t,`new`)),o.append(n)});{let e=$(`button`,`stg ex`);e.type=`button`,e.title=U(`title.exTitle`),e.append($(`b`,void 0,`∞`),$(`span`,void 0,U(`title.exName`)),this.exBest),e.addEventListener(`click`,()=>wo(`ex`,`new`)),o.append(e)}let s=Eb.data.settings,c=$(`div`,`row`),l=$(`label`,`chk`);this.invChk.type=`checkbox`,this.invChk.checked=s.invincible,this.invChk.addEventListener(`change`,()=>{Eb.data.settings.invincible=this.invChk.checked,this.showInv(),Db()}),l.append(this.invChk,U(`title.invincible`));let u=$(`label`,`chk`,U(`title.moveSpeed`));Qt(`title.moveSpeedOptions`).forEach((e,t)=>{let n=$(`option`,void 0,e);n.value=String(t),this.spdSel.append(n)}),this.spdSel.value=String(s.moveSpeed),this.spdSel.addEventListener(`change`,()=>{Eb.data.settings.moveSpeed=+this.spdSel.value,Db()}),u.append(this.spdSel),c.append(l,u);let d=$(`div`,`row`),f=$(`label`,`chk`,U(`title.offset`));Object.assign(this.offRange,{type:`range`,min:String(t.OFFSET_MIN_MS),max:String(t.OFFSET_MAX_MS),step:String(t.OFFSET_STEP_MS),value:String(s.offsetMs)}),this.offRange.addEventListener(`input`,()=>{Eb.data.settings.offsetMs=+this.offRange.value,this.showOffset(),Db()}),f.append(` `,this.offRange,` `,this.offOut);let p=$(`button`,`btn sub small`,U(`title.calibrate`));p.type=`button`,p.addEventListener(`click`,()=>{this.calib&&(this.title.hidden=!0,this.calib.open(!1))});let m=$(`label`,`chk`);this.flashChk.type=`checkbox`,this.flashChk.checked=s.reduceFlash,this.flashChk.addEventListener(`change`,()=>this.setReduceFlash(this.flashChk.checked)),m.append(this.flashChk,U(`title.reduceFlash`)),d.append(f,p),c.append(m),this.showOffset(),this.showInv(),this.settingsPanel=new Hy({settings:()=>Eb.data.settings,changed:()=>{Db(),this.applySettings()},close:()=>this.title.hidden=!1,qualityLevel:()=>this.qualityLevel()},[c,d,$(`p`,`note`,U(`title.soundNote`))]);let h=$(`div`,`row`),g=$(`button`,`btn sub small`,U(`title.settings`));g.type=`button`,g.addEventListener(`click`,()=>{this.title.hidden=!0,this.settingsPanel.open()});let _=$(`button`,`btn sub small`,U(`title.toSplash`));_.type=`button`,_.addEventListener(`click`,()=>{this.title.hidden=!0,this.openSplash()}),h.append(g,_,this.invState),r.append(this.titleMsg,this.buildWebDone(),this.buildProgress(),$(`h3`,`thead`,U(`title.stages`)),o,$(`p`,`note`,U(`title.exNote`)),h),this.refreshProgress(),this.showBest()}invState=$(`span`,`note inv-state`);showInv(){this.invState.textContent=Eb.data.settings.invincible?U(`title.invOn`):``}attachSettings(e,t){this.applySettings=e,this.qualityLevel=t}showOffset(){let e=+this.offRange.value;this.offOut.textContent=U(`title.offsetValue`,{sign:e>0?`+`:``,ms:e})}showBest(){let e=Eb.data.extraBest;this.exBest.textContent=e.score?U(`title.exBest`,{score:e.score.toLocaleString(),round:e.round,bpm:e.bpm}):U(`title.exBestNone`)}buildResult(){let e=this.result,t=this.res,n=$(`dl`,`stats`),r=(e,r)=>{let i=$(`dd`,void 0,`0`);t.stats[e]=i,n.append(typeof r==`string`?$(`dt`,void 0,r):r,i)};r(`score`,U(`result.score`)),r(`kills`,U(`result.kills`)),r(`combo`,U(`result.maxCombo`)),r(`perfect`,U(`result.perfect`)),r(`graze`,U(`result.graze`)),r(`hits`,U(`result.hits`)),r(`counter`,U(`result.counter`)),r(`last`,t.lastLabel);let i=$(`div`,`row`);for(let e of[t.primary,t.replay,t.share,t.secondary])e.type=`button`;i.append(t.primary,t.replay,t.share,t.secondary),t.share.addEventListener(`click`,()=>this.openShare());let a=$(`div`,`rmain`);a.append(t.eyebrow,t.title,t.name,n),e.append(a,t.reward,i,$(`p`,`note`,U(`result.note`))),t.primary.addEventListener(`click`,()=>this.primary()),t.secondary.addEventListener(`click`,()=>Oo()),t.replay.addEventListener(`click`,()=>this.toggleReplay())}buildPause(){let e=$(`div`,`row prow`),t=$(`button`,`btn`,U(`pause.resume`)),n=$(`button`,`btn sub`,U(`pause.retry`)),r=$(`button`,`btn sub`,U(`pause.toStages`));for(let e of[t,n,r])e.type=`button`;t.addEventListener(`click`,()=>Ao(!1)),n.addEventListener(`click`,()=>Do()),r.addEventListener(`click`,()=>Oo()),e.append(t,n,r),this.pause.append($(`p`,`big`,U(`pause.title`)),e,$(`p`,`note`,U(`pause.note`)))}toggleReplay(){let e=this.res.replay,t=()=>{e.textContent=U(`result.replay`),e.classList.remove(`on`)};Ht()?(Ut(!0),t()):Wt(t)&&(e.textContent=U(`result.replayStop`),e.classList.add(`on`))}primary(){!this.res.primary.disabled&&this.primaryAction&&this.primaryAction()}readSettings(){let e=Eb.data.settings;return{spd:e.moveSpeed,offsetSec:e.offsetMs/1e3,invincible:e.invincible,round:this.round,codename:Eb.data.progress.codename,build:this.rangeBuild??this.savedBuild()}}savedBuild(){let e=br(Eb.data.garage.build||xy);return e.ok?e.build:wr[0]}onStart(){this.setFull(!1),this.title.hidden=!0,this.result.hidden=!0,this.pause.hidden=!0,this.lockBtn.hidden=!this.coarse,this.dropBtn.hidden=!this.coarse,this.pauseBtn.hidden=!this.coarse,this.res.replay.textContent=U(`result.replay`),this.res.replay.classList.remove(`on`);try{document.activeElement?.blur()}catch{}}onTitle(){this.setFull(!0),this.result.hidden=!0,this.title.hidden=!1,this.lockBtn.hidden=!0,this.dropBtn.hidden=!0,this.pauseBtn.hidden=!0,this.res.replay.textContent=U(`result.replay`),this.res.replay.classList.remove(`on`)}onPause(e){this.pause.hidden=!e}onResult(e){if(this.setFull(!0),e.ending){this.result.hidden=!0,this.lockBtn.hidden=!0,this.dropBtn.hidden=!0,this.pauseBtn.hidden=!0,Yv.fullGame||(Eb.data.progress.tuned=!0,Db(),this.refreshProgress()),this.ending.play({full:Yv.fullGame,storeUrl:Yv.storeUrl,onRegister:e=>{let t=Eb.data.progress;t.tuned=!0,t.codename=e,t.track=`main`,Db(),this.refreshProgress()},onDone:()=>Oo()});return}let{clear:t,last:n}=e,r=this.res,i=K.stage;this.lastClear=t,this.lastEndless=e.endless,r.share.hidden=!!i.range;let a=U(`songs.${i.song.id}.name`);r.eyebrow.textContent=t?n?U(`result.eyebrowAllClear`):U(`result.eyebrowClear`,{n:K.stageIdx+1}):U(`result.eyebrowLost`),r.title.textContent=U(t?n?`result.titleAllClear`:`result.titleClear`:`result.titleOver`),r.title.className=`big `+(t?`clear`:`over`),r.name.textContent=U(`result.stageName`,{n:K.stageIdx+1,name:a}),r.stats.score.textContent=K.score.toLocaleString(),r.stats.kills.textContent=String(K.kills),r.stats.combo.textContent=String(K.maxCombo),r.stats.perfect.textContent=String(K.perfects),r.stats.graze.textContent=String(K.grazes),r.stats.hits.textContent=String(K.hits),r.stats.counter.textContent=String(K.counters);let o=K.secObj;if(r.lastLabel.textContent=U(t?`result.lastHp`:`result.lastReached`),r.stats.last.textContent=t?String(K.player.hp):o?.type===`boss`||o?.type===`warn`?U(`result.reachedBoss`):o?.n?U(`result.reachedSector`,{n:o.n}):U(`result.reachedStart`),r.primary.disabled=!1,r.reward.textContent=``,r.reward.hidden=!0,t&&K.round===2&&!e.endless&&!i.range){let e=fy(Eb.data.collection,{stage:K.stageIdx,boss:i.boss.id,perfects:K.perfects,hits:K.hits,maxCombo:K.maxCombo,assist:K.invincible},Math.random);Db(),this.showReward(e)}if(e.endless){let e=Eb.data.extraBest,t=K.score>e.score;t&&(Eb.data.extraBest={score:K.score,round:i.round,bpm:i.bpm},Db(),this.showBest()),r.eyebrow.textContent=U(t?`result.eyebrowExRecord`:`result.eyebrowExLost`),r.name.textContent=U(`result.exName`,{round:i.round,bpm:i.bpm,name:a}),r.lastLabel.textContent=U(`result.lastBest`),r.stats.last.textContent=Math.max(e.score,K.score).toLocaleString(),r.primary.textContent=U(`result.retry`),this.primaryAction=()=>wo(`ex`,`new`)}else t&&!n?(r.primary.textContent=U(`result.nextStage`),this.primaryAction=()=>wo(K.stageIdx+1,`next`)):t?(r.primary.textContent=U(`result.playAgain`),this.primaryAction=()=>wo(0,`new`)):(r.primary.textContent=U(`result.retry`),this.primaryAction=()=>wo(K.stageIdx,`retry`));this.result.hidden=!1,this.lockBtn.hidden=!0,this.dropBtn.hidden=!0,this.pauseBtn.hidden=!0}lastEndless=!1;openShare(){let e=K.stage,t=K.kit.build,n={v:1,codename:Eb.data.progress.codename,stage:this.lastEndless?0:K.stageIdx+1,round:K.round===2?2:1,clear:this.lastClear,score:K.score,perfects:K.perfects,maxCombo:K.maxCombo,build:vr(t)};this.result.hidden=!0,this.share.open({rec:n,build:t,song:U(`songs.${e.song.id}.name`),color:Se(ae[t.color])})}showReward(e){let t=this.res.reward,n=Eb.data.collection,r=U(`bosses.${K.stage.boss.id}.name`),i=(e,n)=>t.append($(`p`,e,n));e.drop&&!e.dup?i(`rw new`,U(`reward.drop`,{part:Qy(e.drop)})):e.drop?i(`rw`,U(`reward.dup`,{part:Qy(e.drop),n:e.samples,boss:r})):e.samples&&i(`rw`,U(`reward.samples`,{n:e.samples,boss:r,total:n.samples[K.stage.boss.id]??0}));for(let t of e.axes)i(`rw new`,U(`reward.axis`,{axis:U(`garage.tune.${t}.name`)}));let a=new Set(n.challenges);for(let t of uy(K.stageIdx)){let n=e.challenges.some(e=>e.id===t.id),r=U(`reward.ch.${t.kind}`,{n:t.n});i(`rw ch`+(a.has(t.id)?` ok`:``),n?U(`reward.chNow`,{ch:r,n:e.generic/Math.max(1,e.challenges.length)}):a.has(t.id)?U(`reward.chDone`,{ch:r}):U(`reward.chTodo`,{ch:r}))}K.invincible&&i(`rw ch`,U(`reward.assist`)),t.hidden=!1}get resultVisible(){return!this.result.hidden}},kb=e=>Math.round(e*10)/10,Ab=e=>Math.round(e*64)/64,jb=class{real;cmds=[];prev=[];state={fillStyle:``,strokeStyle:``,font:``,textAlign:``,textBaseline:``,globalAlpha:1,lineWidth:1};constructor(e){this.real=e}begin(){this.cmds=[]}commit(e){let t=this.cmds,n=this.prev,r=!e&&t.length===n.length;for(let e=0;r&&e<t.length;e++)t[e]!==n[e]&&(r=!1);return this.prev=t,!r&&(this.replay(t),!0)}set fillStyle(e){this.prop(`fillStyle`,e)}set strokeStyle(e){this.prop(`strokeStyle`,e)}set font(e){this.prop(`font`,e)}set textAlign(e){this.prop(`textAlign`,e)}set textBaseline(e){this.prop(`textBaseline`,e)}set globalAlpha(e){this.prop(`globalAlpha`,Ab(e))}set lineWidth(e){this.prop(`lineWidth`,e)}setTransform(e,t,n,r,i,a){this.cmds.push(`T`,e,t,n,r,kb(i),kb(a))}translate(e,t){this.cmds.push(`t`,kb(e),kb(t))}scale(e,t){this.cmds.push(`s`,Math.round(e*1e4)/1e4,Math.round(t*1e4)/1e4)}clearRect(e,t,n,r){this.cmds.push(`c`,e,t,n,r)}fillRect(e,t,n,r){this.cmds.push(`r`,kb(e),kb(t),kb(n),kb(r))}fillText(e,t,n){this.cmds.push(`x`,e,kb(t),kb(n))}beginPath(){this.cmds.push(`b`)}moveTo(e,t){this.cmds.push(`m`,kb(e),kb(t))}lineTo(e,t){this.cmds.push(`l`,kb(e),kb(t))}stroke(){this.cmds.push(`k`)}measureText(e){return this.real.font=this.state.font,this.real.measureText(e)}prop(e,t){this.state[e]=t,this.cmds.push(`p`,e,t)}replay(e){let t=this.real,n=t=>e[t];for(let r=0;r<e.length;)switch(e[r]){case`p`:t[e[r+1]]=e[r+2],r+=3;break;case`T`:t.setTransform(n(r+1),n(r+2),n(r+3),n(r+4),n(r+5),n(r+6)),r+=7;break;case`t`:t.translate(n(r+1),n(r+2)),r+=3;break;case`s`:t.scale(n(r+1),n(r+2)),r+=3;break;case`c`:t.clearRect(n(r+1),n(r+2),n(r+3),n(r+4)),r+=5;break;case`r`:t.fillRect(n(r+1),n(r+2),n(r+3),n(r+4)),r+=5;break;case`x`:t.fillText(e[r+1],n(r+2),n(r+3)),r+=4;break;case`b`:t.beginPath(),r+=1;break;case`m`:t.moveTo(n(r+1),n(r+2)),r+=3;break;case`l`:t.lineTo(n(r+1),n(r+2)),r+=3;break;case`k`:t.stroke(),r+=1;break;default:throw Error(`HudRecorder: unknown command ${String(e[r])}`)}}},Mb=`"Chakra Petch",sans-serif`,Nb=`"DotGothic16",monospace`,Pb=class{canvas=document.createElement(`canvas`);ctx=new jb(this.canvas.getContext(`2d`));dirty=!0;sw=W;fx=0;resize(e,t){this.canvas.width=e,this.canvas.height=t,this.dirty=!0}draw(e,t,n,r,i,a){let o=this.ctx;this.sw=t,this.fx=(t-W)/2,o.begin(),o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,this.canvas.width,this.canvas.height),o.globalAlpha=1;for(let t of r){let n=i(t.x,t.y,t.h??0);n.s>.05&&Number.isFinite(n.x+n.y)&&(o.setTransform(e*n.s,0,0,e*n.s,n.x*e,n.y*e),o.globalAlpha=t.alpha,o.fillStyle=t.col,o.font=t.font,o.textAlign=t.align,o.textBaseline=t.base,o.fillText(t.text,0,0))}o.globalAlpha=1,o.setTransform(e,0,0,e,0,0),K.state!==`title`&&n[2]-n[0]<t-1&&(o.fillStyle=`rgba(133,144,192,.22)`,o.fillRect(n[0]-1,n[1],1,n[3]-n[1]),o.fillRect(n[2],n[1],1,n[3]-n[1])),K.state!==`title`&&K.player&&this.drawHud(a);let s=o.commit(this.dirty);return this.dirty=!1,s}drawTempo(e,t,n){let r=this.ctx,i=y,a=e-i.W,o=a+i.LINE_X,s=(i.W-i.LINE_X)/(F.bar*i.AHEAD_BARS),c=t+i.H/2;r.fillStyle=`rgba(133,144,192,.12)`,r.fillRect(a,c-.5,i.W,1);let l=Math.floor((n-i.LINE_X/s)/F.beat)*F.beat;for(let t=l;t<=n+F.bar*i.AHEAD_BARS;t+=F.beat){if(t<0)continue;let l=o+(t-n)*s;if(l<a||l>e)continue;let u=t%F.bar===0,d=t-n,f=d<=0&&d>-i.FLASH_STEPS,p=d<0?I(1+d/(i.LINE_X/s),0,1):1;r.globalAlpha=f?1:(u?.85:.5)*p,r.fillStyle=f?u?N.warn:N.white:u?N.warn:N.dim;let m=u?3:2,h=u?i.H:i.H*.6;r.fillRect(Math.round(l-m/2),c-h/2,m,h)}let u=(n%F.beat+F.beat)%F.beat/F.beat,d=Math.floor((n%F.bar+F.bar)%F.bar/F.beat)===0;r.globalAlpha=.35+.65*(n>=0?(1-u)**3:0),r.fillStyle=d?N.warn:N.player,r.fillRect(o-1,t-3,2,i.H+6),r.globalAlpha=1}drawRange(){let e=this.ctx,t=K.kit,n=K.now,r=j.RANGE_DPS_SEC,i=0,a=0,o=0;for(let e of K.dmgLog)e.t<n-r||(i+=e.d,e.armored&&(a+=e.d,o+=e.raw));let s=lr(t.build),c=this.fx+24,l=150,u=(t,n,r,i)=>{e.textAlign=`left`,e.fillStyle=N.dim,e.font=`500 11px ${Mb}`,e.fillText(t,c,l),e.textAlign=`right`,e.fillStyle=i,e.font=`700 13px ${Mb}`,e.fillText(n,c+200,l),e.fillStyle=`rgba(133,144,192,.18)`,e.fillRect(c,l+5,200,4),e.fillStyle=i,e.fillRect(c,l+5,200*I(r,0,1),4),l+=30};e.textAlign=`left`,e.fillStyle=N.player,e.font=`700 13px ${Mb}`,e.fillText(U(`range.title`),c,l-22),u(U(`range.dps`),(i/r).toFixed(1),i/r/60,N.player),u(U(`range.armor`),o>0?`${Math.round(a/o*100)}%`:`--`,o>0?a/o:0,N.warn),u(U(`range.heat`),`${Math.round(K.heat*100)}%`,K.heat,K.heat>=j.HEAT.WARN?N.enemy:N.dim),u(U(`range.voices`),`${s.total} / ${s.cap}`,s.total/s.cap,N.lime),e.textAlign=`left`,e.fillStyle=N.dim,e.font=`400 12px ${Nb}`,e.fillText(U(`range.exit`),c,l+4)}drawOperator(){let e=K.comm;if(!e)return;let t=K.now,n=K.tipTemp||K.tipBase,r=K.boss?eo()?140:122:94,i=n?r+50+n.l.length*22+10:K.boss?r:94,a=F.s16,o=((t-K.t0)%a+a)%a;_b(this.ctx,Ri(e,t),{now:t,sinceStep:o,x:this.fx+16,y:i,w:W-32,h:f.BOX_H,label:U(`operator.label`),incoming:U(`operator.incoming`),reduced:es.reduced})}drawLastWord(){let e=K.lastWord;if(!e)return;let t=K.now-e.t0;if(t<0||t>m.SEC)return;let n=this.ctx,r=[...e.text],i=Math.min(1,t/m.CLEAR_SEC),a=Math.floor(t*12),o=es.reduced?e.text:r.map((e,t)=>{let n=Math.abs(Math.sin((t+1)*12.9898+a*78.233)*43758.5453)%1;return n>i?`#%&*/<>?@[]{}=+0123456789ｱｲｳｴｵｶｷｸ`[Math.floor(n*997)%33]:e}).join(``),s=t>m.SEC-.6?(m.SEC-t)/.6:Math.min(1,t/.2),c=es.reduced?0:Math.sin(a*7.1)*3*(1-i);n.globalAlpha=Math.max(0,s),n.textAlign=`center`,n.font=`400 20px ${Nb}`,n.fillStyle=N.enemy,n.fillText(o,this.fx+W/2+c,300),n.globalAlpha=Math.max(0,s)*.35,n.fillStyle=N.player,n.fillText(o,this.fx+W/2+c+2,301),n.globalAlpha=1}drawMixer(){let e=this.ctx,t=K.player,n=K.layers||Mt(t.hp/t.maxHp*100,K.comboL,At(K.kit.layers)),r=this.sw-24,i=r-64;e.textAlign=`right`,e.textBaseline=`middle`,e.fillStyle=N.dim,e.font=`500 10px ${Mb}`,e.fillText(U(`hud.mixerHead`),r,G-142),e.font=`500 11px ${Mb}`,R.forEach((t,r)=>{let a=t===`ARP`||t===`LEAD`,o=G-124+r*14+(a?4:0),s=n[t],c=K.meter[t]||0;e.fillStyle=s>.01?a?N.warn:N.text:`rgba(133,144,192,.4)`,e.fillText(t,i-8,o),e.fillStyle=`rgba(133,144,192,.16)`,e.fillRect(i,o-3,64,6),s>.01?(e.fillStyle=a?N.warn:N.heal,e.fillRect(i,o-3,64*Math.min(1,s)*(.25+.75*c),6)):(e.fillStyle=a?`rgba(133,144,192,.5)`:N.enemy,e.globalAlpha=.7,e.fillRect(i,o-1,64,2),e.globalAlpha=1)})}drawTip(){let e=this.ctx,t=K.tipTemp||K.tipBase;if(!t)return;let n=K.boss?eo()?140:122:94,r=50+t.l.length*22;e.fillStyle=`rgba(6,8,24,.8)`;let i=this.fx;e.fillRect(i+16,n,W-32,r),e.fillStyle=N.warn,e.fillRect(i+16,n,3,r),e.textAlign=`left`,e.textBaseline=`alphabetic`,e.fillStyle=N.warn,e.font=`700 12px ${Mb}`,e.fillText(t.label,i+32,n+20),e.fillStyle=N.text,e.font=`400 19px ${Nb}`,e.fillText(t.h,i+32,n+42),e.fillStyle=N.dim,e.font=`400 15px ${Nb}`,t.l.forEach((t,r)=>e.fillText(t,i+32,n+66+r*22))}drawHud(e){let t=this.ctx,n=this.sw;if(t.textBaseline=`alphabetic`,t.fillStyle=N.text,t.font=`700 26px ${Mb}`,t.textAlign=`left`,t.fillText(String(K.score).padStart(8,`0`),24,42),t.fillStyle=N.dim,t.font=`500 12px ${Mb}`,t.fillText(U(`hud.score`),24,58),K.combo>0){t.fillStyle=K.comboL?N.warn:N.text,t.font=`700 15px ${Mb}`;let e=U(`hud.combo`,{n:K.combo});t.fillText(e,80,58);let n=K.combo<b.COMBO_ARP?U(`hud.comboNext`,{layer:`ARP`,n:b.COMBO_ARP}):K.combo<b.COMBO_LEAD?U(`hud.comboNext`,{layer:`LEAD`,n:b.COMBO_LEAD}):``,r=t.measureText(e).width;n&&(t.fillStyle=N.dim,t.font=`500 11px ${Mb}`,t.fillText(n,88+r,58))}let r=K.secObj,i=r?.type===`sector`?U(`hud.sector`,{n:String(r.n).padStart(2,`0`)}):r?.type===`boss`||r?.type===`warn`?U(`hud.sectorBoss`):r?.type===`outro`?U(`hud.clear`):U(`hud.start`);t.textAlign=`right`,t.fillStyle=N.dim,t.font=`500 12px ${Mb}`;let a=K.stage.endless?U(`hud.exStage`,{round:K.stage.round,bpm:K.stage.bpm}):U(`hud.stage`,{n:K.stageIdx+1});if(t.fillText(`${a}  ·  ${i}`,n-24,30),this.drawTempo(n-24,38,e),K.round===1&&!K.stage.endless&&!K.stage.range){t.font=`700 11px ${Mb}`;let e=t.measureText(U(`progress.sim`)).width+10;t.fillStyle=N.dim,t.fillRect(n-24-e,72,e,1),t.fillRect(n-24-e,87,e,1),t.fillRect(n-24-e,72,1,16),t.fillRect(n-25,72,1,16),t.fillText(U(`progress.sim`),n-29,84)}this.drawOperator(),this.drawLastWord();let o=K.player,s=K.kit,l=Se(s.color,N.player);if(t.textAlign=`left`,t.fillStyle=l,t.font=`700 16px ${Mb}`,t.fillText(o.weapon>=0?Tr[o.weapon]:s.timbre,24,G-124),t.fillStyle=N.dim,t.font=`500 11px ${Mb}`,t.fillText(o.weapon>=0?s.timbre:s.build.core,110,G-124),o.weapon>=0){let e=110+t.measureText(s.timbre).width+10;for(let n=0;n<fe.MAX;n++)t.fillStyle=n<o.level?l:`rgba(133,144,192,.25)`,t.fillRect(e+n*13,G-133,9,9)}let u=K.now<K.overT,d=G-118;t.fillStyle=`rgba(255,107,154,.12)`,t.fillRect(24,d,218,4),t.fillStyle=u?ts(K.time,6)?N.enemy:N.white:K.heat>=j.HEAT.WARN?N.enemy:N.dim,t.fillRect(24,d,218*(u?1:K.heat),4),t.fillStyle=`rgba(255,255,255,.35)`,t.fillRect(24+218*j.HEAT.WARN,d-2,1,8),u&&(t.fillStyle=N.enemy,t.font=`700 11px ${Mb}`,t.fillText(U(`hud.overheat`),252,d+6));let f=G-104,p=Math.ceil(o.hp/o.maxHp*20),m=o.hp/o.maxHp<=.3;for(let e=0;e<20;e++)t.fillStyle=e<p?m?ts(K.time,6)?N.enemy:N.white:N.heal:`rgba(109,255,176,.12)`,t.fillRect(24+e*11,f,9,12);t.fillStyle=m?N.enemy:N.text,t.font=`700 17px ${Mb}`,t.fillText(U(`hud.hp`,{n:o.hp}),252,f+12);let h=Ir(),g=220/h,_=G-84,v=c[K.dropKind].cost;for(let e=0;e<h;e++){let n=I(K.lockCharge-e,0,1);t.fillStyle=`rgba(255,179,71,.14)`,t.fillRect(24+e*g,_,g-3,8),n>0&&(t.fillStyle=n>=1?N.warn:`rgba(255,179,71,.55)`,t.fillRect(24+e*g,_,(g-3)*n,8)),e===v-1&&(t.fillStyle=N.player,t.fillRect(24+(e+1)*g-3,_-3,2,14))}t.fillStyle=N.warn,t.font=`700 13px ${Mb}`,t.fillText(U(`hud.lock`,{n:Math.floor(K.lockCharge),cap:h}),252,_+8),t.font=`700 12px ${Mb}`,K.drop==null?K.lockCharge>=v&&(t.fillStyle=N.player,t.globalAlpha=.6+.4*K.kickP,t.fillText(U(`hud.dropReady`,{kind:K.dropKind}),24,G-62),t.globalAlpha=1):(t.fillStyle=N.player,t.fillText(U(K.drop.len===F.bar?`hud.dropQueuedBar`:`hud.dropQueuedBeat`,{kind:K.drop.kind}),24,G-62)),K.invincible&&(t.fillStyle=N.warn,t.font=`400 13px ${Nb}`,t.fillText(U(`hud.invincible`),24,G-42)),K.noiseT>0&&ts(K.time,12)&&(t.fillStyle=N.enemy,t.font=`700 13px ${Mb}`,t.fillText(U(`hud.signalNoise`),124,G-42)),this.drawMixer(),K.stage.range&&this.drawRange();let y=K.boss;if(y&&r){let n=K.fillStart==null?0:I((e-K.fillStart)*K.fillR/(2*F.bar),0,1),i=32;for(let t of y.segLog??[])t.k<=e&&(i=t.seg);let a=y.vuln?i/32:n,o=this.fx+24,s=W-48,c=s/32,l=K.curBar-r.start,u=eo(),d=y.vuln?u?l%2==0?U(`hud.call`):U(`hud.response`):Vn(r,l)?U(`hud.chorus`):U(`hud.verse`):``;t.fillStyle=N.enemy,t.font=`700 13px ${Mb}`,t.textAlign=`left`,t.textBaseline=`alphabetic`,t.fillText(U(`bosses.${y.cfg.id}.name`),o,88),t.textAlign=`right`,t.fillStyle=N.dim;let f=U(K.bossPhase2?`hud.phase2`:`hud.phase1`);t.fillText(d?U(`hud.tagJoin`,{tag:d,phase:f}):f,o+s,88);let p=y.vuln?Math.round(a*32):Math.floor(a*32);for(let e=0;e<32;e++){let n=e<p;t.fillStyle=!y.vuln&&e===p-1?N.white:n?K.bossPhase2?N.warn:N.enemy:`rgba(255,107,154,.12)`,t.fillRect(o+e*c+1,96,c-2,10)}if(u&&y.vuln&&K.callPat){let n=l%2==1,r=F.bar,i=s/r,a=(Math.floor(e)%r+r)%r;for(let e=0;e<r;e++){let r=K.callPat.includes(e);t.fillStyle=r?n?N.lime:N.enemy:`rgba(133,144,192,.18)`,t.globalAlpha=e===a?1:r?.75:1,t.fillRect(o+e*i+2,114,i-4,r?8:3),t.globalAlpha=1}t.fillStyle=N.white,t.fillRect(o+a*i+i/2-1,111,2,14)}}this.drawTip();let x=K.callout;if(x){t.globalAlpha=Math.max(0,Math.min(1,x.t*4,(x.dur-x.t)*3));let e=G*.36;if(x.text===U(`callout.warning`)){t.fillStyle=`rgba(255,179,71,.14)`,t.fillRect(0,e,n,110),t.strokeStyle=N.warn,t.lineWidth=2,t.beginPath();for(let r=-40+K.time*120%40;r<n;r+=40)t.moveTo(r,e),t.lineTo(r+20,e+10),t.moveTo(r,e+110),t.lineTo(r+20,e+100);t.stroke()}t.textAlign=`center`,t.fillStyle=x.col,t.font=`700 44px ${Mb}`,t.fillText(x.text,n/2,e+58),x.sub&&(t.fillStyle=N.text,t.font=`400 17px ${Nb}`,t.fillText(x.sub,n/2,e+90)),t.globalAlpha=1}}},Fb={circle:0,chase:0,safe:1,donut:2,lane:3,row:4,cone:5,checker:6,wall:7},Ib=8,Lb=`
varying vec2 vW;
void main(){ vW = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Rb=`
uniform int uKind;
uniform vec4 uA;
uniform vec4 uB;
uniform vec2 uField;
uniform vec2 uGrid;
uniform float uClip;
uniform vec3 uCol1; uniform float uA1;
uniform vec3 uCol2; uniform float uA2;
uniform float uHatch; uniform float uHatchOff;
uniform float uAdd;
varying vec2 vW;
bool inField(vec2 p){ return p.x >= 0.0 && p.x <= uField.x && p.y >= 0.0 && p.y <= uField.y; }
bool region(vec2 p){
  // 帯（3, 4）と壁（7, 8）は、場の外へも続く（どこへ逃げても範囲の外へは出られないことを見せる）
  if (uClip > 0.5 && uKind != 3 && uKind != 4 && uKind != 8 && !inField(p)) return false;
  if (uKind == 0) return distance(p, uA.xy) < uA.z;
  if (uKind == 1) return inField(p) && distance(p, uA.xy) > uA.z;
  if (uKind == 2) { float d = distance(p, uA.xy); return d > uA.z && d < uA.w; }
  if (uKind == 3) return abs(p.x - uA.x) < uA.y * 0.5;
  if (uKind == 4) return abs(p.y - uA.x) < uA.y * 0.5;
  if (uKind == 5) {
    vec2 d = p - uA.xy; float a = atan(d.y, d.x) - uA.z; a = atan(sin(a), cos(a));
    return abs(a) < uA.w && length(d) < uB.x;
  }
  if (uKind == 6) {
    if (!inField(p)) return false;
    float i = floor(p.x / (uField.x / uGrid.x)); float j = floor(p.y / (uField.y / uGrid.y));
    return mod(i + j, 2.0) == uA.x;
  }
  if (uKind == 7) return p.y >= 0.0 && p.y <= uField.y && (p.x < uA.x - uA.y * 0.5 || p.x > uA.x + uA.y * 0.5);
  if (uKind == 8) return abs(p.x - uA.x) > uA.y * 0.5 || abs(p.y - uA.z) > uA.w * 0.5;
  return false;
}
void main(){
  if (!region(vW)) discard;
  if (uAdd > 0.5) { gl_FragColor = vec4(uCol1 * uA1 + uCol2 * uA2, 1.0); return; }
  float a1 = uA1;
  float a2 = 0.0;
  if (uHatch > 0.5) {
    // 斜線：(x,0)→(x+H,H) 方向、間隔 26、太さ 2
    float k = mod(vW.x - vW.y - uHatchOff, 26.0);
    a2 = (k < 1.0 || k > 25.0) ? uA2 : 0.0;
  }
  float a = a1 + a2 * (1.0 - a1);
  if (a <= 0.0) discard;
  vec3 c = (uCol1 * a1 * (1.0 - a2) + uCol2 * a2) / a;
  gl_FragColor = vec4(c, a);
}`,zb=class{W;H;order;group=new _u;pool=[];used=0;geo;constructor(e,t,n){this.W=e,this.H=t,this.order=n;let r=o.AOE_EXTEND;this.geo=new hf(e+r*2,t+r*2),this.geo.translate(e/2,t/2,0)}begin(){this.used=0}end(){for(let e=0;e<this.pool.length;e++)this.pool[e].visible=e<this.used}get(){if(this.used<this.pool.length)return this.pool[this.used++];let e=new wf({vertexShader:Lb,fragmentShader:Rb,transparent:!0,depthTest:!1,depthWrite:!1,side:2,uniforms:{uKind:{value:0},uA:{value:new Rl},uB:{value:new Rl},uField:{value:new vl(this.W,this.H)},uGrid:{value:new vl(4,7)},uClip:{value:0},uCol1:{value:new wu},uA1:{value:0},uCol2:{value:new wu},uA2:{value:0},uHatch:{value:0},uHatchOff:{value:0},uAdd:{value:0}}}),t=new Wd(this.geo,e);return t.frustumCulled=!1,t.matrixAutoUpdate=!1,this.group.add(t),this.pool.push(t),this.used++,t}draw(e,t,n,r=jr){let i=this.get();i.renderOrder=this.order+n*.001;let a=i.material,o=a.uniforms;e.rail?i.matrix.set(1,0,0,0,0,0,1,r,0,1,0,-s.GRID_Z,0,0,0,1):i.matrix.identity(),i.matrixWorldNeedsUpdate=!0,o.uField.value.set(this.W,e.rail?Mr:this.H);let c=ka(e);o.uGrid.value.set(c[0],c[1]),o.uClip.value=+!!e.rail,o.uKind.value=e.rail&&e.kind===`wall`?Ib:Fb[e.kind]??0;let l=o.uA.value,u=o.uB.value;switch(e.kind){case`circle`:case`chase`:case`safe`:l.set(e.x,e.y,e.r,0);break;case`donut`:l.set(e.x,e.y,e.r1,e.r2);break;case`lane`:l.set(e.x,e.w,0,0);break;case`row`:l.set(e.y,e.h,0,0);break;case`cone`:l.set(e.ox,e.oy,e.ang,e.hw),u.set(e.len,0,0,0);break;case`checker`:l.set(e.par,0,0,0);break;case`wall`:l.set(e.gx,e.gw,e.gy??0,e.gh??0)}let d=t.mode===`beam`,f=d?2:1;a.blending!==f&&(a.blending=f,a.needsUpdate=!0),o.uAdd.value=+!!d;let p=zg(t.col1),m=zg(t.col2);o.uCol1.value.setRGB(p[0],p[1],p[2]),o.uCol2.value.setRGB(m[0],m[1],m[2]),o.uA1.value=t.a1,o.uA2.value=t.a2,o.uHatch.value=+(t.mode===`pre`),o.uHatchOff.value=t.hatchOff}},Bb=n.ENEMY,Vb=n.PLAYER;function Hb(){return new mf(1,20)}function Ub(e,t){return new Md({color:16777215,transparent:!0,opacity:t,depthTest:!1,depthWrite:!1,side:2,blending:e?2:1})}function Wb(){let e=new hf(1,1);return e.translate(0,.5,0),e}var Gb=class{group=new _u;eGlow;eCore;pLine;pHead;m=new Ul;q=new yl;v=new Y;s=new Y;c=new wu;z=new Y(0,0,1);zero=new Y;stand=new Ul;constructor(e){this.pLine=new nf(Wb(),Ub(!0,1),Vb*2),this.pHead=new nf(new hf(1,1),Ub(!1,1),Vb),this.eGlow=new nf(Hb(),Ub(!0,.35),Bb),this.eCore=new nf(Hb(),Ub(!1,1),Bb),[this.pLine,this.pHead,this.eGlow,this.eCore].forEach((t,n)=>{t.frustumCulled=!1,t.renderOrder=e+n*.01,t.count=0,this.group.add(t)}),this.pLine.setColorAt(0,this.c.set(1,1,1))}put(e,t,n,r,i,a,o,s=0,c=0){this.q.setFromAxisAngle(this.z,i),this.s.set(a,o,1),!s&&!c?(this.v.set(n,r,0),this.m.compose(this.v,this.q,this.s)):(this.m.compose(this.zero,this.q,this.s),c&&this.m.premultiply(this.stand.set(1,0,0,0,0,1-c,0,0,0,c,1,0,0,0,0,1)),this.m.setPosition(n,r,-s)),e.setMatrixAt(t,this.m)}update(e,t,n,r=0){let i=zg(N.enemy);this.eGlow.material.color.setRGB(i[0],i[1],i[2]);let a=Math.min(t.length,Bb);for(let e=0;e<a;e++){let n=t[e],i=n.z??0,a=n.acc?1.35:1;this.put(this.eGlow,e,n.x,n.y,0,n.r*1.9*a,n.r*1.9*a,i,r),this.put(this.eCore,e,n.x,n.y,0,n.r*.75*a,n.r*.75*a,i,r)}this.eGlow.count=a,this.eCore.count=a,this.eGlow.instanceMatrix.needsUpdate=!0,this.eCore.instanceMatrix.needsUpdate=!0;let o=zg(n),s=0,c=0,l=(e,t,n,r,i)=>{if(s>=Vb*2)return;let a=Math.hypot(e.vx,e.vy)||1,o=Math.atan2(e.vx/a,-e.vy/a);this.put(this.pLine,s,e.x,e.y,o,n,t,e.z??0),this.pLine.setColorAt(s,this.c.setRGB(r[0]*i,r[1]*i,r[2]*i)),s++},u=zg(N.white),d=(e,t)=>{c<Vb&&this.put(this.pHead,c++,e.x,e.y,0,t,t,e.z??0,r)};for(let t of e){let e=t.acc?1.5:1;switch(t.kind){case`PLUCK`:l(t,18,2.5*e,o,.9);break;case`SQUARE`:l(t,16,9*e,o,.35),l(t,16,4*e,u,.8);break;case`SAW`:case`SUPERSAW`:l(t,t.kind===`SAW`?16:12,2.5*e,o,.85);break;case`BRASS`:l(t,30,12*e,o,.3),l(t,30,5*e,u,.9);break;case`BELL`:l(t,10,2*e,o,.7),d(t,5*e);break;case`WOBBLE`:l(t,12,5*e,o,.8);break;case`RHODES`:l(t,8,6*e,o,.6),d(t,6*e)}t.acc&&t.kind!==`SQUARE`&&t.kind!==`BRASS`&&l(t,10,1.5,u,.9)}this.pLine.count=s,this.pHead.count=c,this.pLine.instanceMatrix.needsUpdate=!0,this.pLine.instanceColor&&(this.pLine.instanceColor.needsUpdate=!0),this.pHead.instanceMatrix.needsUpdate=!0}},Kb=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,qb=`
uniform sampler2D tWorld;
uniform sampler2D tHud;
uniform vec2 uRes;      // 画面のピクセル数
uniform float uQ;       // HUD の単位 1 あたりのピクセル数
uniform vec4 uRect;     // ゲーム画面の矩形（ピクセル。x0, y0, x1, y1）。横長の画面の縦視点では左右が情報パネル
uniform vec3 uBeatCol; uniform float uBeatA; uniform float uBeatW;
uniform vec3 uHeartCol; uniform float uHeartA;
uniform vec3 uFlashCol; uniform float uFlashA;
uniform float uK;       // ノイズの強さ 0..1
uniform float uAmp;
uniform vec3 uSlices[10]; uniform int uSliceN;
uniform vec4 uLines[4];
uniform vec3 uLineCol[2];
uniform vec2 uNoiseOff;
uniform float uLofi;    // 1周目（調律試験）のローファイ：0 = なし、1 = あり
uniform vec3 uLofiP;    // 色の段数、走査線の濃さ、横のにじみ（ピクセル）
varying vec2 vUv;

float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// p はピクセル座標（左上が原点、y は下向き）
vec3 composite(vec2 p){
  vec2 uv = vec2(p.x / uRes.x, 1.0 - p.y / uRes.y);
  vec3 c = texture2D(tWorld, uv).rgb;
  if (uLofi > 0.5) {
    // ローファイ：横にわずかににじませ、色の段数を落とし、薄い走査線を入れる（ゲーム画面だけ。HUD にはかけない）
    vec2 dx = vec2(uLofiP.z / uRes.x, 0.0);
    c = (c * 2.0 + texture2D(tWorld, uv - dx).rgb + texture2D(tWorld, uv + dx).rgb) * 0.25;
    c = floor(c * uLofiP.x + 0.5) / uLofiP.x;
    c *= 1.0 - uLofiP.y * step(2.0, mod(p.y, 3.0));
  }
  vec2 f = (p - uRect.xy) / uQ;
  vec2 fs = (uRect.zw - uRect.xy) / uQ;
  // ビネット
  float d = distance(f, vec2(fs.x * 0.5, fs.y * 0.55));
  float va = clamp((d - fs.y * 0.25) / (fs.y * 0.5), 0.0, 1.0) * 0.75;
  c = mix(c, vec3(4.0, 5.0, 16.0) / 255.0, va);
  // 拍の光（画面の縁、加算）
  float e = min(min(f.x - 2.0, fs.x - 2.0 - f.x), min(f.y - 2.0, fs.y - 2.0 - f.y));
  if (abs(e) < uBeatW * 0.5) c += uBeatCol * uBeatA;
  // 心音の縁
  float e2 = min(min(f.x, fs.x - f.x), min(f.y, fs.y - f.y));
  if (e2 < 9.0 && e2 > -1.0) c = mix(c, uHeartCol, uHeartA);
  // HUD
  vec4 h = texture2D(tHud, uv);
  c = mix(c, h.rgb, h.a);
  // フラッシュ
  c = mix(c, uFlashCol, uFlashA);
  return c;
}

void main(){
  vec2 p = vec2(vUv.x * uRes.x, (1.0 - vUv.y) * uRes.y);
  if (uK <= 0.0) { gl_FragColor = vec4(composite(p), 1.0); return; }
  float k = uK;
  bool sliced = false;
  vec3 c;
  for (int i = 0; i < 10; i++) {
    if (i >= uSliceN) break;
    vec3 s = uSlices[i];
    if (p.y >= s.x && p.y < s.x + s.y) { c = composite(p - vec2(s.z, 0.0)); sliced = true; }
  }
  if (!sliced) {
    c = composite(p);
    c += composite(p - vec2(8.0 * k * uQ * uAmp, 0.0)) * 0.16 * k;
    c += composite(p - vec2(-8.0 * k * uQ * uAmp, 2.0 * uQ)) * 0.16 * k;
  }
  for (int i = 0; i < 4; i++) {
    vec4 l = uLines[i];
    if (p.y >= l.x && p.y < l.x + l.y) c = mix(c, uLineCol[i - (i / 2) * 2], 0.3 * k);
  }
  float n = hash(floor((p + uNoiseOff) / (2.0 * uQ)));
  c = mix(c, vec3(n), 0.24 * k);
  if (mod(p.y, 3.0 * uQ) < 1.2 * uQ) c = mix(c, vec3(0.0), 0.18 * k);
  gl_FragColor = vec4(c, 1.0);
}`;function Jb(e,t){return new wf({vertexShader:Kb,fragmentShader:qb,depthTest:!1,depthWrite:!1,uniforms:{tWorld:{value:e},tHud:{value:t},uRes:{value:new vl(1,1)},uQ:{value:1},uRect:{value:new Rl(0,0,1,1)},uBeatCol:{value:new wu},uBeatA:{value:0},uBeatW:{value:5},uHeartCol:{value:new wu},uHeartA:{value:0},uFlashCol:{value:new wu},uFlashA:{value:0},uK:{value:0},uAmp:{value:1},uSlices:{value:Array.from({length:10},()=>new Y)},uSliceN:{value:0},uLines:{value:Array.from({length:4},()=>new Rl)},uLineCol:{value:[new wu,new wu]},uNoiseOff:{value:new vl},uLofi:{value:0},uLofiP:{value:new Y(d.LEVELS,d.SCAN,d.BLUR)}}})}Dl.enabled=!1;var Yb=class{gl;scene=new Eu;camera=new Xf;views={vertical:new Ul,horizontal:new Ul,depth:new Ul,rail:new Ul};base=new Ul;mat=new Ul;shakeM=new Ul;sw=W;rect=[0,0,1,1];rt;postScene=new Eu;postCam=new tp(-1,1,1,-1,0,1);post;hud=new Pb;hudTex;L;bullets;pw=1;ph=1;q=1;cssScale=1;blend={from:`vertical`,to:`vertical`,t:0};constructor(e){this.gl=new Lg({canvas:e,antialias:!0,alpha:!1,powerPreference:`high-performance`}),this.gl.outputColorSpace=Gc,this.gl.autoClear=!0,this.camera.matrixAutoUpdate=!1,this.rt=new Bl(1,1,{depthBuffer:!1,samples:4}),this.hudTex=new lf(this.hud.canvas),this.hudTex.generateMipmaps=!1,this.hudTex.minFilter=Os,this.hudTex.magFilter=Os,this.post=Jb(this.rt.texture,this.hudTex);let t=new Wd(new hf(2,2),this.post);t.frustumCulled=!1,this.postScene.add(t);let n=0,r=e=>{let t=new Xg(e,n++);return this.scene.add(t.mesh),t},i=r(!1),a=r(!0),o=new zb(W,G,n++);this.scene.add(o.group);let s=r(!1),c=r(!0),l=r(!1),u=r(!1),d=r(!0),f=r(!1);this.bullets=new Gb(n++),this.scene.add(this.bullets.group);let p=r(!0),m=r(!1),h=r(!0);this.L={bgFill:i,bgAdd:a,aoeFill:o,aoeNorm:s,aoeAdd:c,items:l,enemies:u,laserAdd:d,locks:f,playerAdd:p,player:m,partsAdd:h}}resize(e,t,n){this.pw=Math.max(1,Math.round(e*n)),this.ph=Math.max(1,Math.round(t*n)),this.cssScale=this.pw/Math.max(1,e),this.q=this.ph/G,this.sw=this.pw/this.q,this.rebuildViews(),this.gl.setPixelRatio(1),this.gl.setSize(this.pw,this.ph,!1),this.rt.setSize(this.pw,this.ph),this.hud.resize(this.pw,this.ph),this.hudTex.dispose();let r=this.post.uniforms;r.uRes.value.set(this.pw,this.ph),r.uQ.value=this.q}updateView(e){let t=K.state!==`title`&&!!K.player&&!!K.sections?.length;this.blend=t?ov(K.sections,Math.max(0,e.heardStep)/F.bar,K.stage.view):{from:`vertical`,to:`vertical`,t:0},this.updateFollow(e.now);let n=this.blend;tv(this.views[n.from],this.views[n.to],n.t,this.base);let r=e=>{if(e===`depth`||e===`rail`)return[0,0,this.pw,this.ph];let t=nv(this.views[e],0,0,this.pw,this.ph),n=nv(this.views[e],W,G,this.pw,this.ph);return[Math.min(t.px,n.px),Math.min(t.py,n.py),Math.max(t.px,n.px),Math.max(t.py,n.py)]},i=r(n.from),a=r(n.to);this.rect=i.map((e,t)=>e+(a[t]-e)*n.t)}dolly=o.DEPTH_DOLLY;follow=[0,0];lastNow=0;updateFollow(e){let t=Math.min(.1,Math.max(0,e-this.lastNow));this.lastNow=e;let n=K.state===`title`?null:K.player,r=n?n.x-W/2:0,i=n?n.z:0,a=1-Math.exp(-t*s.CAM_SMOOTH);this.follow[0]+=(r-this.follow[0])*a,this.follow[1]+=(i-this.follow[1])*a,this.weightOf(`rail`)>0&&ev(`rail`,this.pw,this.ph,this.views.rail,this.dolly,this.follow)}rebuildViews(){for(let e of[`vertical`,`horizontal`,`depth`,`rail`])ev(e,this.pw,this.ph,this.views[e],this.dolly,this.follow)}setDepthDolly(e){return this.dolly=Math.min(o.DEPTH_DOLLY_MAX,Math.max(o.DEPTH_DOLLY_MIN,e)),this.rebuildViews(),this.dolly}get view(){return this.blend}get depthWeight(){return this.weightOf(`depth`)}weightOf(e){let t=this.blend;return(t.from===e?1-t.t:0)+(t.to===e?t.t:0)}dragToWorld(e,t,n,r,i){let a=this.weightOf(`rail`)>.5;return rv(this.base,n,r,e*this.cssScale,t*this.cssScale,this.pw,this.ph,i,a)}render(e){let t=this.L;this.updateView(e),e.depth=this.depthWeight,e.rail=this.weightOf(`rail`);let n=[t.bgFill,t.bgAdd,t.aoeNorm,t.aoeAdd,t.items,t.enemies,t.laserAdd,t.locks,t.playerAdd,t.player,t.partsAdd];for(let e of n)e.begin();t.aoeFill.begin(),N_(t,e);for(let e of n)e.end();t.aoeFill.end();let r=K.state!==`title`&&!!K.player;this.bullets.update(r?K.pbul:[],r?K.ebul:[],Se(K.kit.color,N.player),e.rail??0);let i=es.reduced?0:K.shake,a=(Math.random()*2-1)*i*.5,o=(Math.random()*2-1)*i*.5,s=1+(es.reduced?0:K.kickP*.008),c=a*2*this.q/this.pw,l=-o*2*this.q/this.ph;this.shakeM.set(s,0,0,c,0,s,0,l,0,0,1,0,0,0,0,1),this.mat.multiplyMatrices(this.shakeM,this.base);let u=this.camera;u.projectionMatrix.copy(this.mat),this.gl.setRenderTarget(this.rt),this.gl.setClearColor(329231,1),this.gl.render(this.scene,u),this.gl.setRenderTarget(null);let d=this.q,f=(e,t,n)=>{let r=nv(this.mat,e,t,this.pw,this.ph,n),i=nv(this.mat,e+1,t,this.pw,this.ph,n);return{x:r.px/d,y:r.py/d,s:r.w>0&&i.w>0?Math.hypot(i.px-r.px,i.py-r.py)/d:0}},p=this.rect.map(e=>e/d);this.hud.draw(d,this.sw,p,r?Qg:[],f,e.heardStep)&&(this.hudTex.needsUpdate=!0),this.setPostUniforms(e,r),this.gl.render(this.postScene,this.postCam)}setPostUniforms(e,t){let n=this.post.uniforms,r=(e,t)=>{let n=zg(t);e.setRGB(n[0],n[1],n[2])},i=this.rect;n.uRect.value.set(i[0],i[1],i[2],i[3]);let a=0;if(t&&K.state===`play`&&e.heardStep>=0){let t=e.heardStep/F.beat%1,i=Math.floor(e.heardStep%F.bar/F.beat)===0;a=(1-t)**3*(i?.5:.28)*(es.reduced?.35:1),r(n.uBeatCol.value,i?N.warn:o_()),n.uBeatW.value=i?8:5}n.uBeatA.value=a<.01?0:a;let o=t&&K.heart&&K.player.alive;r(n.uHeartCol.value,N.enemy),n.uHeartA.value=o?.12+K.kickP*(es.reduced?.08:.35):0,r(n.uFlashCol.value,K.flashCol),n.uFlashA.value=K.flash>0?K.flash*(es.reduced?.25:.5):0;let s=K.noiseMax?Math.min(1,Math.max(0,K.noiseT/K.noiseMax)):0;if(n.uK.value=s,n.uLofi.value=t&&K.round===1&&!K.stage.endless?1:0,n.uLofiP.value.z=d.BLUR*this.q,s>0){let e=es.reduced?.3:1;n.uAmp.value=e;let t=this.q,i=Math.min(10,Math.ceil(s*10*e)),a=n.uSlices.value;for(let n=0;n<i;n++){let r=Math.random()*this.ph,i=Math.min(this.ph-r,(4+Math.random()*46)*t);a[n].set(r,i,(Math.random()-.5)*70*s*t*e)}n.uSliceN.value=i;let o=n.uLines.value;for(let e=0;e<4;e++)o[e].set(Math.random()*this.ph,(1+Math.random()*3)*t,0,0);let c=n.uLineCol.value;r(c[0],N.player),r(c[1],N.enemy),n.uNoiseOff.value.set(Math.random()*96*t,Math.random()*96*t)}}},Xb=document.getElementById(`stage`),Zb=document.getElementById(`wrap`),Qb=document.getElementById(`ui`),$b=document.getElementById(`game`);$b.setAttribute(`aria-label`,U(`a11y.canvas`)),document.title=U(`meta.title`);var ex=new P_,tx=new F_(e.LOGIC_HZ,e.MAX_CATCHUP_SEC),nx=new Yb($b),rx=new Ob(document.getElementById(`ui`)),ix=new ve(Eb.data.settings.quality);rx.setLaunchBuild(Yv.takeLaunchBuild());function ax(){let e=Xb.clientWidth,t=Xb.clientHeight,n=e>=t?o.WIDE_ASPECT:W/G,r=t,i=r*n;i>e&&(i=e,r=i/n),Zb.style.width=i+`px`,Zb.style.height=r+`px`;let a=Math.min(i,r*W/G);Qb.style.width=a+`px`,Qb.style.left=(i-a)/2+`px`,nx.resize(i,r,Math.min(window.devicePixelRatio||1,ix.dpr)),$g.partsStride=ix.partsStride}addEventListener(`resize`,ax),addEventListener(`orientationchange`,ax),window.visualViewport?.addEventListener(`resize`,ax),ax();function ox(){let e=z.init();ex.usingAudio||(ex.attach(e),tx.reset(e.currentTime)),e.state===`suspended`&&e.resume()}rx.attachAudio({ensureAudio:ox,now:()=>ex.now(),eventTime:e=>ex.eventTime(e)}),xo({ensureAudio:ox,readSettings:()=>rx.readSettings(),isFireHeld:xv,onStart:()=>rx.onStart(),onResult:e=>rx.onResult(e),onTitle:()=>rx.onTitle(),onPause:e=>rx.onPause(e),onRangeExit:()=>rx.onRangeExit()}),Fv(ex,rx,$b,(e,t,n,r,i)=>nx.dragToWorld(e,t,n,r,i),()=>({keys:Eb.data.settings.keys,pad:Eb.data.settings.pad}));var sx=Eb.data.settings.quality;function cx(){let e=Eb.data.settings,n=t.VOLUME_MAX;z.setVolumes({bgm:e.volume.bgm/n,sfx:e.volume.sfx/n,shot:e.volume.shot/n}),xe(e.colors),e.quality!==sx&&(sx=e.quality,ix.set(e.quality),ax())}cx(),rx.attachSettings(cx,()=>ix.level);var lx=()=>{ox(),cx(),removeEventListener(`touchend`,lx),removeEventListener(`pointerdown`,lx)};addEventListener(`touchend`,lx),addEventListener(`pointerdown`,lx),z_();var ux=0,dx=0;function fx(e){requestAnimationFrame(fx);let t=dx?(e-dx)/1e3:0;dx=e,K.state===`play`&&!K.paused&&ix.sample(t)&&ax();try{Pv(),px(),rx.tick(ex.now())}catch(e){ux++<5&&console.error(`[frame]`,e)}}function px(){let e=ex.now();tx.advance(e,(e,t)=>{wv(Sv(t)),Qo(e,t)}),L_(tx.lag(e),tx.dt)&&tx.reset(Math.max(tx.simTime,e-tx.dt));let t=K.state!==`title`&&K.t0!==0;Lo(Math.min(1,Math.max(0,(e-tx.simTime)/tx.dt)),()=>nx.render({now:e,ns:t?Br(e):0,heardStep:t?Vr(e):0}))}requestAnimationFrame(fx);