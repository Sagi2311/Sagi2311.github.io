import{$n as St,Ca as ho,Gs as xa,Io as po,Jt as Mh,Ko as qt,Ln as Re,Ls as wa,Na as ja,Tt as Ja,Xs as xl,a as $e,bs as ue,fi as as,i as $d,ms as tn,ot as Gh,qn as Se,t as $S,yo as nt,yt as Ih,z as Di}from"./chunk-Bsp-KO1n.js";import"./chunk-BNPJmYzC.js";import{t as L}from"./chunk-DV9C7V_v.js";import{t as _$1}from"./chunk-DQj9oExK.js";var D=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }
`;var I=`
  varying vec2 vUv;
  uniform float clock, intensity, pattern, warp, frequency, palette, aspect;
  uniform vec2 pointer;
  float hash(vec2 p) { return fract(sin(dot(p,vec2(91.7,217.3)))*43758.5453); }
  float noise(vec2 p) {
    vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
      mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);
  }
  void main() {
    vec2 q=(vUv-.5)*vec2(aspect,1.);
    q.y+=aspect<1.?.065:.015;
    float radius=min(.405,aspect*.438);
    vec2 disc=q/radius;
    float r2=dot(disc,disc);
    float depth=sqrt(max(0.,1.-r2));
    vec3 n=vec3(disc,depth);
    vec2 field=disc*pattern*.6+vec2(depth*.9,-depth*.65);
    float w=noise(field*.83+vec2(clock*.19,0.));
    field+=warp*vec2(w,noise(field*.7-clock*.13));
    float flow=noise(field*1.63)-noise(field*.64+clock*.1)*.68;
    float phase=(flow+depth*.48-clock*.052)*frequency;
    float thread=pow(1.-abs(sin(phase)),5.)*(.42+w*.58);
    float edge=1.-smoothstep(.965,1.006,r2);
    float rim=pow(1.-depth,3.5)*edge;
    float key=clamp(dot(n,normalize(vec3(-.55,.7,.6))),0.,1.);
    float pointerGlow=exp(-dot(q-pointer,q-pointer)*48.);
    vec3 cold=mix(vec3(.56,.14,.09),vec3(.33,.16,.68),step(.5,palette));
    cold=mix(cold,vec3(.10,.52,.60),step(1.5,palette));
    vec3 hot=mix(vec3(1.,.53,.24),vec3(.72,.8,1.),step(.5,palette));
    hot=mix(hot,vec3(.63,1.,.89),step(1.5,palette));
    vec3 glow=edge*(cold*(.13+key*.2+w*.19)+hot*thread*(.35+key*.45+pointerGlow*.65)*intensity);
    glow+=rim*(cold*.9+hot*.24);
    float corona=exp(-abs(sqrt(r2)-1.)*30.)*(.29+.71*w);
    vec3 background=vec3(.028,.039,.061)+cold*exp(-r2*.87)*.17;
    gl_FragColor=vec4(background+glow+cold*corona*.48,1.);
  }
`;var O=`
  uniform float clock, orbit, turbulence, gravity, force, dpr, aspect;
  uniform vec2 pointer;
  out float brightness;
  float rnd(float p){return fract(sin(p*83.721+31.17)*43758.5453);}
  void main() {
    float id=float(gl_VertexID)+1.;
    float radius=.09+pow(rnd(id),.64)*1.01;
    float a=rnd(id+17.)*6.28318+clock*orbit*(.85-radius*.51);
    float tier=rnd(id+31.);
    float depth=sin(a)*radius;
    vec2 p=vec2(radius*cos(a),depth*(.39+tier*.2)+(tier-.5)*.34);
    p=vec2(p.x*.93-p.y*.37,p.y*.93+p.x*.37);
    p+=turbulence*.14*vec2(sin(clock*.81+id*.11),cos(clock*.36+id*.21));
    p.y-=gravity*.33*(.2+.8*tier);
    vec2 drag=pointer-p;
    float reach=exp(-dot(drag,drag)*3.2);
    p+=drag*force*.99*reach;
    gl_Position=vec4(p.x/max(1.,aspect),p.y,0.,1.);
    brightness=clamp(.18+.50*rnd(id+88.)+.1*depth+.37*reach,.14,1.);
    gl_PointSize=(1.+brightness*3.)*dpr;
  }
`;var _=`
  in float brightness;
  out vec4 color;
  void main() {
    float rr=length(gl_PointCoord-.5);
    float core=1.-smoothstep(.04,.46,rr);
    color=vec4(mix(vec3(.27,.66,.93),vec3(1.,.74,.46),pow(brightness,2.)),brightness*core);
  }
`;var F=18e3;var B={acrylic:{color:9751256,transmission:.88,thickness:.73,ior:1.46,clearcoat:.7},titanium:{color:11911114,metalness:.95,anisotropy:.75,clearcoat:.22},obsidian:{color:1513250,metalness:.28,clearcoat:.94,clearcoatRoughness:.12},holographic:{color:8222110,metalness:.78,iridescence:1,iridescenceIOR:1.62,iridescenceThicknessRange:[135,310]}};var V=class{constructor(e,t,s){this.host=e;this.assets=t;this.onLost=s;this.renderer=new $d({antialias:!0,powerPreference:`low-power`}),this.renderer.outputColorSpace=$e,this.renderer.toneMapping=4;let a=this.renderer.domElement;a.dataset.labGraphics=`ready`,a.setAttribute(`aria-hidden`,`true`),Object.assign(a.style,{position:`absolute`,inset:`0`,width:`100%`,height:`100%`,display:`block`}),this.screen.position.z=1,this.camera.position.set(0,0,8.8),this.plasma=new Se(new as(2,2),new tn({vertexShader:D,fragmentShader:I,depthTest:!1,uniforms:{clock:{value:0},intensity:{value:1},pattern:{value:3},warp:{value:1},frequency:{value:12},palette:{value:0},pointer:{value:this.pointer},aspect:{value:1}},toneMapped:!1}));let o=new qt;o.setAttribute(`position`,new ue(new Float32Array(F*3),3)),this.particles=new wa(o,new tn({glslVersion:Gh,vertexShader:O,fragmentShader:_,depthWrite:!1,transparent:!0,blending:2,uniforms:{clock:{value:0},orbit:{value:1},turbulence:{value:.3},gravity:{value:0},force:{value:1},dpr:{value:1},pointer:{value:this.pointer},aspect:{value:1}}})),this.particles.frustumCulled=!1;for(let[i,c]of Object.entries(B))this.materials.set(i,new ja(c));this.material=new Se(new Ja(1.31,.37,112,20,2,3),this.materials.get(`titanium`)),this.material.rotation.set(.33,.62,-.38);let n=new po(16769728,5);n.position.set(4,5,5);let l=new po(8242939,4);l.position.set(-4,2,-5),this.world.add(this.plasma,this.particles,this.material,this.cube.root,n,l,new ho(13229567,3156026,1.65)),this.world.background=new St(1055011),this.world.environmentRotation.set(0,.67,0);let{signal:r}=this.life;a.addEventListener(`webglcontextlost`,i=>{i.preventDefault(),this.lost=!0,this.onLost(!0),this.syncLoop()},{signal:r}),a.addEventListener(`webglcontextrestored`,()=>{this.lost=!1,this.onLost(!1),this.syncLoop(),this.draw()},{signal:r}),document.addEventListener(`visibilitychange`,()=>this.syncLoop(),{signal:r}),this.motion.addEventListener(`change`,()=>{this.syncLoop(),this.draw()},{signal:r}),this.host.append(a),this.resize=new ResizeObserver(()=>this.layout()),this.resize.observe(e),this.visibility=new IntersectionObserver(([i])=>{this.stageVisible=i.isIntersecting,this.syncLoop(),this.stageVisible&&!this.playing&&this.draw()}),this.visibility.observe(e),this.layout()}host;assets;onLost;renderer;world=new xa;camera=new Re(38,1,.1,50);screen=new Di(-1,1,1,-1,.1,10);cube=new _$1($S);particles;plasma;material;materials=new Map;environment;rallyAsset;rallyLoading=!1;pointer=new nt(-3,-3);life=new AbortController;resize;visibility;motion=matchMedia(`(prefers-reduced-motion: reduce)`);settings;lost=!1;stageVisible=!0;playing=!1;lastTime=0;elapsed=0;width=1;height=1;dpr=1;lastCube;averageFrame=16;samples=0;quality=1;update(e){this.settings=e;let t=e.experiment===`shader`,s=e.experiment===`particles`,a=e.experiment===`material`,o=e.experiment===`rally`,n=e.experiment===`cube`||a&&e.surface===`plasma`;if(this.plasma.visible=t,this.particles.visible=s,this.material.visible=a&&!n,this.cube.root.visible=n,this.rallyAsset?this.rallyAsset.root.visible=o:o&&this.loadRally(),this.material.visible){if(!this.environment&&!this.lost){let c=new xl(this.renderer),u=new L;try{this.environment=c.fromScene(u,.06),this.world.environment=this.environment.texture}finally{u.dispose(),c.dispose()}}this.material.material=this.materials.get(e.surface);let i=this.material.material;i.roughness=e.roughness,i.metalness=e.surface===`acrylic`?0:e.metalness,i.clearcoat=e.surface===`obsidian`?e.response:i.clearcoat,e.surface===`acrylic`&&(i.transmission=e.response),e.surface===`holographic`&&(i.iridescence=e.response),e.surface===`titanium`&&(i.anisotropy=e.response)}if(n){let i=e.cube;this.cube.pose(1,5,i.pieces),this.cube.setChapter(0,0),this.cube.pulse(a?e.response*.7:0),this.cube.root.rotation.set(i.pitch,i.yaw,0),this.fitCube(i),this.lastCube=i}this.material.visible&&this.material.rotation.set(e.cube.pitch,e.cube.yaw,-.38);let l=this.plasma.material.uniforms;l.intensity.value=e.intensity,l.pattern.value=e.scale,l.frequency.value=e.frequency,l.warp.value=e.warp,l.palette.value=e.palette;let r=this.particles.material.uniforms;r.orbit.value=e.orbit,r.turbulence.value=e.turbulence,r.gravity.value=e.gravity,r.force.value=e.force,this.configureDensity(),this.syncLoop(),this.draw()}async loadRally(){if(!this.rallyLoading){this.rallyLoading=!0;try{let{RallyCar:e}=await import(`./chunk-BZ15MtDa.js`);if(this.life.signal.aborted)return;let t=new e($S,document,this.assets);if(this.rallyAsset=t,t.preparePreview(),t.root.rotation.set(.21,-.84,.015),t.root.visible=this.settings?.experiment===`rally`,this.world.add(t.root),this.fitRally(),this.syncLoop(),this.draw(),await t.ready,this.life.signal.aborted)return;this.host.dataset.preview=`ready`,this.draw()}catch{this.life.signal.aborted||(this.host.dataset.preview=`unavailable`)}finally{this.rallyLoading=!1}}}fitRally(){let e=this.rallyAsset?.root;if(!e)return;let t=this.camera.aspect;e.position.set(t>=1.3?1:0,-1.12,0),e.scale.setScalar(Math.min(2.45,t*2.44))}fitCube(e){this.cube.root.position.y=this.camera.aspect<1?-.47:-.19,this.cube.root.scale.setScalar(e.zoom*Math.min(1.15,this.camera.aspect*.88+.11))}position(e,t){let s=this.width/this.height;this.settings?.experiment===`particles`?this.pointer.set(e*Math.max(1,s),t):this.pointer.set(e*s*.5,t*.5),this.playing||this.draw()}clearPointer(){this.pointer.set(-3,-3),this.playing||this.draw()}layout(){this.width=Math.max(1,this.host.clientWidth),this.height=Math.max(1,this.host.clientHeight),this.dpr=Math.min(devicePixelRatio||1,1.5,1150/Math.max(this.width,this.height)),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height,!1);let e=this.width/this.height;this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.plasma.material.uniforms.aspect.value=e,this.particles.material.uniforms.aspect.value=e,this.particles.material.uniforms.dpr.value=this.dpr,this.lastCube&&this.fitCube(this.lastCube),this.fitRally(),this.configureDensity(),this.draw()}configureDensity(){let e=Math.floor((this.width<720?7500:F)*this.quality);this.particles.geometry.setDrawRange(0,Math.min(e,this.settings?.density??4800))}syncLoop(){let e=this.settings,t=!this.lost&&!document.hidden&&this.stageVisible&&!this.motion.matches&&!!e&&(e.experiment===`particles`||e.experiment===`shader`&&e.speed>0||e.experiment===`rally`&&!!this.rallyAsset);t!==this.playing&&(this.playing=t,this.lastTime=0,this.renderer.setAnimationLoop(t?this.step:null))}step=e=>{if(this.settings?.experiment===`rally`&&this.lastTime&&e-this.lastTime<1e3/30)return;let t=this.lastTime?Math.min(.05,(e-this.lastTime)/1e3):0;if(this.lastTime=e,t&&this.particles.visible&&(this.averageFrame+=.04*(t*1e3-this.averageFrame),++this.samples===90)){this.samples=0;let s=this.averageFrame>24?-.18:this.averageFrame<15?.08:0;this.quality=Math.max(.4,Math.min(1,this.quality+s)),this.configureDensity()}this.elapsed+=t*(this.settings?.experiment===`shader`?this.settings.speed:1),this.draw()};draw(){if(this.lost||document.hidden||!this.stageVisible||!this.settings)return;let e=this.plasma.visible||this.particles.visible;this.settings.experiment===`rally`&&this.rallyAsset?.hover(this.motion.matches?0:this.elapsed),this.plasma.material.uniforms.clock.value=this.elapsed,this.particles.material.uniforms.clock.value=this.elapsed,this.renderer.render(this.world,e?this.screen:this.camera);let t=this.renderer.info,s=this.renderer.domElement,a=JSON.stringify({geometries:t.memory.geometries,textures:t.memory.textures,draws:t.render.calls});if(s.dataset.resources!==a&&(s.dataset.resources=a),this.particles.visible){let o=String(this.particles.geometry.drawRange.count);s.dataset.particles!==o&&(s.dataset.particles=o)}else s.dataset.particles&&delete s.dataset.particles}dispose(){this.life.abort(),delete this.host.dataset.preview,this.resize.disconnect(),this.visibility.disconnect(),this.renderer.setAnimationLoop(null),this.cube.dispose(),this.plasma.geometry.dispose(),this.plasma.material.dispose(),this.particles.geometry.dispose(),this.particles.material.dispose(),this.material.geometry.dispose(),this.materials.forEach(e=>e.dispose()),this.rallyAsset?.dispose(),this.environment?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}};export{V as LabRenderer};