import{n as l,t as k}from"./chunk-KOOFp351.js";import{$t as kf,A as II,Bt as gR,C as Ga,D as Hf,E as Gv,Et as Z,G as Nm,Ht as gl,Kt as ip,Lt as ev,Pt as ce$1,S as Ff,St as Xv,Tt as Yv,Ut as hR,V as Mf,W as NI,_t as Vv,at as Rf,dt as Uf,et as Pf,fn as om,in as mR,ln as nI,m as Bv,n as $f,nn as lo,on as me,sn as ml,t as $a,ut as Ua,wt as Yf,xt as Wv,y as D}from"./chunk-CfyvXMws.js";import{b as x,c as j,d as g,g as o,i as q,l as v,n as H,r as K,s as h,t as w,u as x$1,x as y,y as O}from"./main-QUTDFA7X.js";import{t as Ut$1}from"./chunk-BG3Kl_Z-.js";import{t as e}from"./chunk-CSmo16Y9.js";import{o as j$1}from"./chunk-BNPJmYzC.js";import{t as Q}from"./chunk-KS_w8ewY.js";var ce=class P{frames=0;elapsed=0;cooldown=0;pixelRatio=1;initialize(e){let t=e<700?1.25:1.75;return this.pixelRatio=Math.min(window.devicePixelRatio||1,t),this.pixelRatio}constrain(e){return this.pixelRatio=Math.min(this.pixelRatio,e<700?1.25:1.75,window.devicePixelRatio||1),this.pixelRatio}sample(e){if(e<=0||e>.25||(this.frames++,this.elapsed+=e,this.frames<90))return!1;let t=this.elapsed/this.frames;return this.frames=0,this.elapsed=0,this.cooldown>0?(this.cooldown--,!1):t>.025&&this.pixelRatio>.75?(this.pixelRatio=Math.max(.75,this.pixelRatio-.25),this.cooldown=2,!0):!1}static ɵfac=function(t){return new(t||P)};static ɵprov=Z({token:P,factory:P.ɵfac})};var Re=class{constructor(e,t,i=!0){this.T=e;this.root=new e.Group,this.root.name=`operator-sculpture`,this.root.visible=!1;let s=this.finish(`ink-hair`,526344,.75,0),o=this.finish(`porcelain`,15329765,.82,0),r=this.finish(`graphite`,1579032,.82,.08),n=this.finish(`brushed-silver`,11184810,.4,.85),a=this.finish(`expression`,328965,1,0),c=y=>{let k=new e.Group;return k.name=y,this.root.add(k),k},p=c(`mascot-face`),d=c(`mascot-hair`),h=c(`mascot-expression`),l=c(`mascot-headphones`),m=c(`mascot-jacket`),v=c(`mascot-collar`),g=c(`mascot-mount`),E=[[-.46,.012,.025],[-.4,.095,.12],[-.28,.26,.27],[-.04,.46,.43],[.3,.57,.51],[.6,.6,.52],[.92,.56,.45],[1.13,.36,.29],[1.23,.012,.035]],b=y=>.28*e.MathUtils.clamp((.2-y)/.66,0,1)**2,f=this.profile(E),w=f.attributes.position;for(let y=0;y<w.count;y++)w.setZ(y,w.getZ(y)+b(w.getY(y)));f.computeVertexNormals(),this.mesh(p,f,o);let z=new e.CatmullRomCurve3(E.map(([y,k,T])=>new e.Vector3(k,y,T))),x=(y,k)=>{let T=0,F=1;for(let M=0;M<16;M++){let C=(T+F)/2;z.getPoint(C).y<k?T=C:F=C}let G=z.getPoint((T+F)/2);return new e.Vector3(y,k,G.z*Math.sqrt(Math.max(0,1-(y/G.x)**2))+b(k)+.008)};this.mesh(d,this.profile([[-.23,.14,.1],[-.13,.55,.26],[.1,.82,.43],[.52,.96,.59],[1,.99,.62],[1.4,.85,.51],[1.76,.54,.28],[1.89,.02,.025]],20,28),s,[0,0,-.35]);let u=new e.Shape;u.moveTo(-.53,-.08),u.bezierCurveTo(-.59,-.19,-.68,-.34,-.83,-.27),u.bezierCurveTo(-.73,-.25,-.72,-.15,-.78,-.12),u.bezierCurveTo(-.93,-.19,-1.07,-.07,-1.04,.04),u.bezierCurveTo(-1,-.02,-.94,.06,-.98,.12),u.bezierCurveTo(-1.15,.05,-1.24,.24,-1.16,.36),u.bezierCurveTo(-1.16,.25,-1.02,.31,-1.06,.41),u.bezierCurveTo(-1.22,.4,-1.29,.57,-1.2,.72),u.bezierCurveTo(-1.21,.6,-1.05,.65,-1.04,.74),u.bezierCurveTo(-1.22,.79,-1.25,.91,-1.15,1.07),u.bezierCurveTo(-1.17,.94,-.98,1,-.96,1.13),u.bezierCurveTo(-1.12,1.13,-1.22,1.33,-1.1,1.48),u.bezierCurveTo(-1.11,1.32,-.87,1.4,-.83,1.49),u.bezierCurveTo(-.99,1.58,-.96,1.77,-.85,1.85),u.bezierCurveTo(-.91,1.66,-.61,1.61,-.53,1.74),u.bezierCurveTo(-.66,1.87,-.58,2,-.45,2.06),u.bezierCurveTo(-.54,1.92,-.27,1.77,-.13,1.82),u.bezierCurveTo(-.24,2.03,-.1,2.13,.04,2.08),u.bezierCurveTo(-.12,2.04,.15,1.87,.26,1.82),u.bezierCurveTo(.43,1.96,.7,1.97,.75,1.73),u.bezierCurveTo(.64,1.87,.53,1.78,.58,1.68),u.bezierCurveTo(.78,1.76,.98,1.66,.96,1.52),u.bezierCurveTo(.86,1.62,.83,1.45,.91,1.38),u.bezierCurveTo(1.08,1.33,1.2,1.41,1.18,1.54),u.bezierCurveTo(1.31,1.29,1.14,1.15,1.03,1.17),u.bezierCurveTo(1.1,1.02,1.26,1.07,1.26,1.22),u.bezierCurveTo(1.37,.99,1.18,.86,1.08,.85),u.bezierCurveTo(1.16,.73,1.32,.85,1.3,.96),u.bezierCurveTo(1.42,.65,1.18,.56,1.08,.59),u.bezierCurveTo(1.14,.41,1.28,.5,1.28,.6),u.bezierCurveTo(1.32,.36,1.13,.27,1.04,.3),u.bezierCurveTo(1.13,.15,1.22,.22,1.23,.31),u.bezierCurveTo(1.21,.07,.99,.06,.94,.14),u.bezierCurveTo(.97,-.04,1.08,0,1.11,.07),u.bezierCurveTo(1.09,-.15,.87,-.2,.81,-.1),u.bezierCurveTo(.8,-.25,.91,-.24,.94,-.19),u.bezierCurveTo(.86,-.4,.66,-.29,.54,-.11),u.bezierCurveTo(.58,.14,.62,.4,.59,.64),u.bezierCurveTo(.56,1.03,-.48,1.06,-.56,.64),u.bezierCurveTo(-.61,.39,-.56,.13,-.53,-.08),u.closePath(),this.mesh(d,this.hairMantle(u),s,[0,0,-.06]),[[.36,.19,[[.21,1.47,.03],[-.11,1.78,.56],[-.93,1.32,.58],[-.86,.75,.48]]],[.27,.13,[[.25,1.34,.2],[-.12,1.16,.73],[-.62,.4,.7],[-.44,.48,.55]]],[.24,.11,[[.43,1.22,.25],[.22,1.11,.77],[.04,.35,.73],[-.23,.43,.61]]],[.34,.18,[[.25,1.5,.03],[.75,1.68,.53],[1.02,.9,.56],[.72,.66,.51]]],[.16,.1,[[.53,1.01,.53],[.72,.8,.69],[.46,.54,.67],[.61,.37,.47]]],[.12,.09,[[-.7,.72,.03],[-.57,.51,.08],[-.67,.19,.04],[-.55,.12,-.06]]],[.11,.08,[[.7,.57,.04],[.61,.33,.08],[.66,.1,.02],[.54,.02,-.1]]]].forEach(([y,k,T])=>this.mesh(d,this.lock(T,y,k),s));for(let y of[-1,1]){let k=[.1,.24,.39,.52].map(T=>x(y*T,.3-T*.025));this.mesh(h,new e.TubeGeometry(new e.CatmullRomCurve3(k),16,.016,6,!1),a)}this.mesh(h,new e.TubeGeometry(new e.CatmullRomCurve3([x(-.2,-.205),x(0,-.207),x(.2,-.215)]),16,.013,6,!1),a),d.updateWorldMatrix(!0,!0);let V=new e.Raycaster,S=Array.from({length:33},(y,k)=>{let T=k/32*Math.PI,F=Math.cos(T)*.94,G=.61+Math.sin(T)*1.02;V.set(new e.Vector3(F,G,3),new e.Vector3(0,0,-1));let M=V.intersectObject(d,!0)[0];return new e.Vector3(F,G,Math.max(.18,(M?.point.z??.15)+.045))}),W=S.map((y,k)=>{let T=0,F=0;for(let G=-3;G<=3;G++){let M=4-Math.abs(G);T+=S[e.MathUtils.clamp(k+G,0,32)].z*M,F+=M}return new e.Vector3(y.x,y.y,T/F)}),B=Math.max(0,...S.map((y,k)=>y.z-W[k].z))+.01;W.forEach(y=>y.z+=B);let j=new e.CatmullRomCurve3(W);this.mesh(l,new e.TubeGeometry(j,64,.03,8,!1),o);let O=new e.CatmullRomCurve3(j.getPoints(32).map(y=>new e.Vector3(y.x,y.y-.008,y.z-.025)));this.mesh(l,new e.TubeGeometry(O,64,.045,8,!1),r);for(let y of[-1,1]){let k=new e.Group;k.position.set(y*.79,.35,.18),k.rotation.set(0,y*.48,y*.12),k.updateMatrix();let T=(M,C,X)=>{let _=this.mesh(l,M,C,X);return _.applyMatrix4(k.matrix),_};T(this.plate(.34,.7,.16,.12),s,[0,0,-.13]),T(this.plate(.27,.61,.07,.08),n,[0,0,.025]),T(this.plate(.17,.49,.022,.05),r,[0,0,.096]);let F=new e.CatmullRomCurve3([j.getPoint(y===1?0:1),new e.Vector3(y*.91,.74,.18),new e.Vector3(y*.8,.7,.18)]);this.mesh(l,new e.TubeGeometry(F,8,.015,6,!1),n);let G=this.mesh(l,new e.CylinderGeometry(.027,.027,.018,16),a,[0,-.21,.125]);G.rotation.x=Math.PI/2,G.applyMatrix4(k.matrix)}this.mesh(v,this.profile([[-.82,.24,.17],[-.62,.24,.18],[-.47,.19,.16],[-.3,.16,.15]],12,24),o,[0,0,.02]);let N=[[-1.45,.76,.27],[-1.32,.9,.34],[-1.05,.95,.37],[-.81,.72,.31],[-.6,.31,.19],[-.53,.23,.15]];this.mesh(m,this.profile(N),r);let L=new e.CatmullRomCurve3(N.map(([y,k,T])=>new e.Vector3(k,y,T))),U=(y,k=.04)=>{let T=y.attributes.position,F=[],G=[],M=(A,I,q,Y)=>{if(Y===0){for(let te of[A,I,q])F.push(te.x,te.y,te.z),G.push(te.x,te.y);return}let Q=A.clone().add(I).multiplyScalar(.5),K=I.clone().add(q).multiplyScalar(.5),$=q.clone().add(A).multiplyScalar(.5);M(A,Q,$,Y-1),M(Q,I,K,Y-1),M($,K,q,Y-1),M(Q,K,$,Y-1)};for(let A=0;A<T.count;A+=3){let I=new e.Vector3().fromBufferAttribute(T,A),q=new e.Vector3().fromBufferAttribute(T,A+1),Y=new e.Vector3().fromBufferAttribute(T,A+2);M(I,q,Y,Math.abs(I.z-q.z)<1e-6&&Math.abs(I.z-Y.z)<1e-6?2:0)}y.setAttribute(`position`,new e.Float32BufferAttribute(F,3)),y.setAttribute(`uv`,new e.Float32BufferAttribute(G,2)),y.deleteAttribute(`normal`),y.clearGroups();let C=y.attributes.position;for(let A=0;A<C.count;A++){let I=C.getX(A),q=C.getY(A),Y=0,Q=1;for(let te=0;te<16;te++){let oe=(Y+Q)/2;L.getPoint(oe).y<q?Y=oe:Q=oe}let K=L.getPoint((Y+Q)/2),$=K.z*Math.sqrt(Math.max(0,1-(I/K.x)**2));C.setZ(A,C.getZ(A)+Math.max(.1,$)+k+.045*e.MathUtils.smoothstep(Math.abs(I),.2,.6))}y.computeVertexNormals();let X=y.attributes.normal,_=new Map,ee=A=>[C.getX(A),C.getY(A),C.getZ(A)].map(I=>Math.round(I*1e5)).join(`,`);for(let A=0;A<C.count;A++){let I=ee(A),q=_.get(I)??new e.Vector3;q.add(new e.Vector3().fromBufferAttribute(X,A)),_.set(I,q)}_.forEach(A=>A.normalize());for(let A=0;A<C.count;A++){let I=_.get(ee(A));X.setXYZ(A,I.x,I.y,I.z)}return y};for(let y of[-1,1])this.mesh(v,U(this.polygon([[.18,-.49],[.39,-.59],[.64,-.87],[.41,-.94],[.49,-1.11],[.16,-1.35],[.24,-.85]].map(([T,F])=>[y*T,F]),.045)),o);this.mesh(v,U(this.polygon([[-.21,-.6],[.21,-.6],[.17,-1.05],[0,-1.32],[-.17,-1.05]],.025),.015),o),this.mesh(g,new e.CylinderGeometry(.77,.81,.12,48),r,[0,-1.52,0]);let R=this.mesh(g,new e.TorusGeometry(.77,.009,6,64),n,[0,-1.48,0]);if(R.rotation.x=Math.PI/2,!i)return;let D=new Set;for(let y of this.root.children){let k=new Map;for(let T of y.children){T.updateMatrix(),D.add(T.geometry);let F=T.geometry.clone().applyMatrix4(T.matrix),G=F.index?F.toNonIndexed():F;G!==F&&F.dispose();let M=T.material;k.has(M)||k.set(M,[]),k.get(M).push(G)}y.clear();for(let[T,F]of k){let G=t(F);if(F.forEach(C=>C.dispose()),!G)throw new Error(`Incompatible sculpture geometry.`);let M=new e.Mesh(G,T);M.castShadow=M.receiveShadow=!0,y.add(M)}}D.forEach(y=>y.dispose())}T;root;materials=[];setMode(e){for(let t of this.materials){let i=t.material;i.wireframe=e===`wireframe`,i.color.copy(t.color),e===`wireframe`&&i.color.setHex(12303291),e===`chrome`&&i.color.setHex(12171705),i.transparent=e===`xray`,i.opacity=e===`xray`?.13:1,i.depthWrite=e!==`xray`,i.roughness=e===`chrome`?.2:t.roughness,i.metalness=e===`chrome`?1:t.metalness,i.needsUpdate=!0}}finish(e,t,i,s){let o=new this.T.MeshPhysicalMaterial({color:t,roughness:i,metalness:s,envMapIntensity:s>.5?.6:e===`ink-hair`?.17:.08,specularIntensity:s>.5?.5:e===`ink-hair`?.3:.1});return o.name=e,this.materials.push({material:o,color:o.color.clone(),roughness:i,metalness:s}),o}mesh(e,t,i,s=[0,0,0]){let o=new this.T.Mesh(t,i);return o.position.set(s[0],s[1],s[2]),e.add(o),o}polygon(e,t){let i=new this.T.Shape;return e.forEach(([s,o],r)=>r?i.lineTo(s,o):i.moveTo(s,o)),i.closePath(),new this.T.ExtrudeGeometry(i,{depth:t,steps:1,bevelEnabled:!0,bevelSegments:2,bevelSize:.012,bevelThickness:.012})}hairMantle(e){let t=this.T,i=new t.ExtrudeGeometry(e,{depth:.22,bevelEnabled:!0,bevelSize:.018,bevelThickness:.045,bevelSegments:2,curveSegments:6}),s=e.getPoints(6),o=[],r=[],n=[],a=new Map,c=l=>{let m=1/0;for(let V=1;V<s.length;V++){let S=s[V-1],W=s[V],B=W.x-S.x,j=W.y-S.y,O=t.MathUtils.clamp(((l.x-S.x)*B+(l.y-S.y)*j)/(B*B+j*j||1),0,1);m=Math.min(m,Math.hypot(l.x-S.x-B*O,l.y-S.y-j*O))}let v=.14*Math.sin(Math.min(1,m/.2)*Math.PI/2),g=t.MathUtils.smoothstep(Math.abs(l.x),.65,1.2),E=Math.max(g,t.MathUtils.smoothstep(l.y,1.4,2.05)),b=(-.16-.32*g+.08*Math.sin(l.y*1.7+l.x*.4))*E,x=.265+v+b-(.025+.62*t.MathUtils.smoothstep(m,.02,.3))*(1-t.MathUtils.clamp((l.z+.045)/.31,0,1)),u=[l.x,l.y,x].map(V=>Math.round(V*1e6)).join(`,`),H=a.get(u);return H===void 0&&(H=o.length/3,a.set(u,H),o.push(l.x,l.y,x),n.push((l.x+1.5)/3,(l.y+.5)/3)),H},p=(l,m,v,g)=>{if(g===0){r.push(c(l),c(m),c(v));return}let E=l.clone().add(m).multiplyScalar(.5),b=m.clone().add(v).multiplyScalar(.5),f=v.clone().add(l).multiplyScalar(.5);p(l,E,f,g-1),p(E,m,b,g-1),p(f,b,v,g-1),p(E,b,f,g-1)},d=i.attributes.position;for(let l=0;l<d.count;l+=3){let m=new t.Vector3().fromBufferAttribute(d,l),v=new t.Vector3().fromBufferAttribute(d,l+1),g=new t.Vector3().fromBufferAttribute(d,l+2),E=[m,v,g].every(f=>Math.abs(f.z-.265)<1e-5),b=[m,v,g].every(f=>Math.abs(f.z+.045)<1e-5);p(m,v,g,E?2:b?1:0)}i.dispose();let h=new t.BufferGeometry;return h.setAttribute(`position`,new t.Float32BufferAttribute(o,3)),h.setAttribute(`uv`,new t.Float32BufferAttribute(n,2)),h.setIndex(r),h.computeVertexNormals(),h}plate(e,t,i,s){let o=new this.T.Shape,r=-e/2,n=-t/2;return o.moveTo(r+s,n),o.lineTo(r+e-s,n),o.quadraticCurveTo(r+e,n,r+e,n+s),o.lineTo(r+e,n+t-s),o.quadraticCurveTo(r+e,n+t,r+e-s,n+t),o.lineTo(r+s,n+t),o.quadraticCurveTo(r,n+t,r,n+t-s),o.lineTo(r,n+s),o.quadraticCurveTo(r,n,r+s,n),new this.T.ExtrudeGeometry(o,{depth:i,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2,curveSegments:8})}profile(e,t=36,i=48){let s=this.T,o=new s.CatmullRomCurve3(e.map(([c,p,d])=>new s.Vector3(p,c,d))),r=[],n=[],a=[];for(let c=0;c<=t;c++){let p=o.getPoint(c/t);for(let d=0;d<=i;d++){let h=d/i*Math.PI*2;if(r.push(Math.sin(h)*p.x,p.y,Math.cos(h)*p.z),n.push(d/i,c/t),c<t&&d<i){let l=c*(i+1)+d;a.push(l,l+1,l+i+1,l+1,l+i+2,l+i+1)}}}return this.surface(r,n,a,t,i)}lock(e,t,i){let s=this.T,o=new s.CubicBezierCurve3(...e.map(d=>new s.Vector3(...d))),r=[],n=[],a=[],c=16,p=8;for(let d=0;d<=c;d++){let h=d/c,l=o.getPoint(h),m=o.getTangent(h),v=new s.Vector3(-m.y,m.x,0).normalize(),g=Math.max(.002,(1-h)**.85*(.7+Math.sin(Math.PI*h)*.6));for(let E=0;E<=p;E++){let b=E/p*Math.PI*2;if(r.push(l.x+v.x*Math.cos(b)*t*g,l.y+v.y*Math.cos(b)*t*g,l.z+Math.sin(b)*i*g),n.push(E/p,h),d<c&&E<p){let f=d*9+E;a.push(f,f+1,f+p+1,f+1,f+p+2,f+p+1)}}}return this.surface(r,n,a,c,p)}surface(e,t,i,s,o){for(let a of[0,s]){let c=a*(o+1),p=e.length/3,d=[0,0,0];for(let h=0;h<o;h++)for(let l=0;l<3;l++)d[l]+=e[(c+h)*3+l]/o;e.push(...d),t.push(.5,.5);for(let h=0;h<o;h++)i.push(p,c+h+(a===0?1:0),c+h+(a===0?0:1))}let r=this.T,n=new r.BufferGeometry;return n.setAttribute(`position`,new r.Float32BufferAttribute(e,3)),n.setAttribute(`uv`,new r.Float32BufferAttribute(t,2)),n.setIndex(i),n.computeVertexNormals(),n}};var pe={width:4.38,height:2.74};var ke=.049;var Pe={halfWidth:pe.width/2+ke,halfHeight:pe.height/2+ke,back:-.139,front:.091};var Te=[[.019,Pe.front],[.031,Pe.front],[ke,.055],[ke,-.085],[.028,Pe.back],[.009,Pe.back],[0,-.121],[0,.033]];var Ne=[[-1,-1],[1,-1],[1,1],[-1,1]];var Nt=[2502198,7505815,2107440,3029316,1580582,2502973,922908,3624025];var Ut=[2698029,8550509,2237735,3684153,2104866,3157554,1250587,4145737];function Pt(P){let e=[],t=[],i=new P.Color(2437700),s=Nt.map((a,c)=>[new P.Color(a),new P.Color(Ut[c])]),o=(a,c)=>{e.push(...a),t.push(c.r,c.g,c.b)},r=(a,c,p)=>Te.map(([d,h])=>[a[0]*(pe.width/2+d)+c,a[1]*(pe.height/2+d)+p,h]);Ne.forEach((a,c)=>{let p=Ne[(c+1)%Ne.length],d=.001,h=Math.sign(p[0]-a[0])*d,l=Math.sign(p[1]-a[1])*d,m=r(a,h,l),v=r(p,-h,-l);for(let g=0;g<Te.length;g++){let E=(g+1)%Te.length,[b,f]=s[g],w=a[0]<0?b:f,z=p[0]<0?b:f;o(m[g],w),o(m[E],w),o(v[E],z),o(m[g],w),o(v[E],z),o(v[g],z)}for(let g=1;g<Te.length-1;g++)o(m[0],i),o(m[g+1],i),o(m[g],i),o(v[0],i),o(v[g],i),o(v[g+1],i)});let n=new P.BufferGeometry;return n.setAttribute(`position`,new P.Float32BufferAttribute(e,3)),n.setAttribute(`color`,new P.Float32BufferAttribute(t,3)),n.computeVertexNormals(),n}var Ce=class{constructor(e,t,i,s,o=1){this.T=e;this.scene=t;this.screenshotAnisotropy=o;let r=this.finish({color:8886696,metalness:.88,roughness:.3,clearcoat:.5}),n=this.finish({color:1383715,metalness:.9,roughness:.32}),a=this.finish({color:527634,metalness:.5,roughness:.46,envMapIntensity:.35});this.signal=new e.MeshBasicMaterial({color:13887458,toneMapped:!1}),this.secondary=new e.MeshBasicMaterial({color:10267303,toneMapped:!1}),this.hemisphere=new e.HemisphereLight(12046824,1383976,1.05),t.add(this.hemisphere),this.key=new e.DirectionalLight(14742015,4.5),this.key.position.set(-3,7,5),this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024),Object.assign(this.key.shadow.camera,{left:-6,right:15,top:6,bottom:-5,far:30}),this.key.shadow.bias=-5e-4,this.key.shadow.normalBias=.025;let c=this.rim=new e.DirectionalLight(11389416,3.2);c.position.set(8,3,-4),this.accentLight=new e.PointLight(this.signal.color,8,9,2),this.accentLight.position.set(2,.3,2.5),t.add(this.key,c,this.accentLight),this.core=new e.Group,this.core.name=`runtime-instrument`,t.add(this.core);let d=new e.Mesh(new e.LatheGeometry([[0,-1.26],[.23,-1.24],[.34,-1.04],[.4,-.8],[.4,.55],[.32,.94],[.18,1.12],[0,1.14]].map(([M,C])=>new e.Vector2(M,C)),64),n),h=new e.Group;this.coreBody={parent:this.core,procedural:h},this.core.add(h),h.add(d),this.rotor=new e.Group,this.rotor.rotation.set(.16,-.22,-.47),this.core.add(this.rotor);let l=new e.Group;this.coreRotor={parent:this.rotor,procedural:l},this.rotor.add(l);let m=new e.Mesh(new e.TorusGeometry(1.55,.105,16,128,Math.PI*1.55),this.finish({color:8819613,metalness:.87,roughness:.34,clearcoat:.27,envMapIntensity:.72}));m.rotation.z=-.55,l.add(m);let v=new e.Mesh(new e.TorusGeometry(1.2,.045,12,112,Math.PI*1.35),n);v.rotation.set(.35,.48,1.7),l.add(v);let g=new e.Mesh(new e.TorusGeometry(1.56,.009,6,128,Math.PI*1.49),this.signal);g.rotation.z=-.52,l.add(g);let E=new e.Mesh(new e.TorusGeometry(1.21,.008,6,112,Math.PI*1.28),this.secondary);E.rotation.copy(v.rotation),l.add(E);let b=new e.BoxGeometry(.17,.025,.21);for(let M=0;M<19;M++){let C=-.5+M*.25,X=new e.Mesh(b,M%4===0?a:r);X.position.set(Math.cos(C)*1.55,Math.sin(C)*1.55,.055),X.rotation.z=C,l.add(X)}for(let M=0;M<8;M++){let C=new e.Mesh(new e.CylinderGeometry(.42,.42,.035,64),r);C.position.y=-.93+M*.26,h.add(C)}let f=new e.Mesh(new e.CylinderGeometry(.66,.64,.28,64),r);f.rotation.x=Math.PI/2,f.position.set(0,.1,.38),h.add(f);let w=new e.Mesh(new e.CircleGeometry(.56,64),a);w.position.set(0,.1,.53),h.add(w);let z=this.finish({color:1454653,metalness:.15,roughness:.08,transmission:0,clearcoat:1,envMapIntensity:.7});this.lens=new e.Mesh(new e.SphereGeometry(.47,48,32),z),this.lens.scale.set(1,1,.42),this.lens.position.set(0,.1,.58),h.add(this.lens);for(let M=0;M<3;M++){let C=new e.Mesh(new e.TorusGeometry(.2+M*.105,.007,6,80,Math.PI*1.65),M===1?this.secondary:this.signal);C.position.set(0,.1,.8+M*.003),C.rotation.z=M*1.9,h.add(C)}let x=new e.Mesh(new e.CircleGeometry(.052,24),this.signal);x.position.set(0,.1,.805),h.add(x);let u=this.finish({color:198153,metalness:.05,roughness:.85,specularIntensity:.15,envMapIntensity:.04}),H=new e.Mesh(new e.CylinderGeometry(.98,1.24,.16,80),u);H.position.y=-1.9,h.add(H);let V=new e.Mesh(new e.TorusGeometry(1.18,.008,6,96,Math.PI*1.65),this.secondary);V.rotation.x=Math.PI/2,V.position.y=-1.96,h.add(V),this.shadowTexture=this.createShadow(),this.mascot=new Re(e,s);let S=new e.Group;for(let M of[...this.mascot.root.children])S.add(M);this.mascot.root.add(S),this.operator={parent:this.mascot.root,procedural:S},t.add(this.mascot.root),this.identityContact=new e.Mesh(new e.PlaneGeometry(3.2,2.8),new e.MeshBasicMaterial({map:this.shadowTexture,transparent:!0,depthWrite:!1,opacity:.6})),this.identityContact.name=`operator-contact`,this.identityContact.rotation.x=-Math.PI/2,this.identityContact.visible=!1,t.add(this.identityContact),this.contact=new e.Mesh(new e.PlaneGeometry(6,5),new e.MeshBasicMaterial({map:this.shadowTexture,transparent:!0,depthWrite:!1,opacity:.65})),this.contact.rotation.x=-Math.PI/2,this.contact.position.y=-2.14,t.add(this.contact);let W=this.floor=new e.Mesh(new e.PlaneGeometry(60,35),new e.ShadowMaterial({opacity:.23}));W.rotation.x=-Math.PI/2,W.position.set(5,-2.17,-3),W.receiveShadow=!0,t.add(W),this.gallery=new e.Group,this.gallery.name=`project-archive`,t.add(this.gallery);let{width:B,height:j}=pe,O=this.archiveHitFrame(B,j),N=new e.MeshBasicMaterial({visible:!1}),L=new e.PlaneGeometry(4.34,2.72),U=Pt(e),R=new e.Shape;R.moveTo(-.65,-1.94),R.lineTo(-.39,-1.94),R.lineTo(.43,-1.19),R.lineTo(.13,-1.19),R.closePath();let D=new e.ExtrudeGeometry(R,{depth:.19,bevelSize:.018,bevelThickness:.019,bevelSegments:2}).translate(0,0,-.52),y$1=this.roundedPlate(1.45,.42,.021,.09).rotateX(-Math.PI/2).translate(-.18,-1.96,-.31),k=s([D,y$1]);D.dispose(),y$1.dispose();let T=this.finish({color:1647405,metalness:.72,roughness:.43}),F=this.finish({vertexColors:!0,metalness:.71,roughness:.26,clearcoat:.26,envMapIntensity:.47}),G=this.roundedPlate(2.45,1.5,.045,.06);i.forEach((M,C)=>{let X=y(M.id),_=new e.Group;_.position.set(8+C*3.6,.15,-C*2.6),_.rotation.y=-.13;let ee=new e.Mesh(O,N);ee.name=`archive-frame`,ee.userData.projectIndex=C;let A=new e.Mesh(L,u);A.position.z=-.035,A.userData.projectIndex=C;let I=new e.Group;I.name=`archive-titanium-frame`,I.add(new e.Mesh(U,F));let q=new e.Mesh(k,T);X&&X.width/X.height>1.95&&(I.scale.y=ee.scale.y=A.scale.y=.81,q.scale.y=1.32,q.position.y=(q.scale.y-1)*1.96),_.add(I,ee,A,q);let Y=new e.Group;_.add(Y);let Q=new e.Group;Y.add(Q);for(let Z=0;Z<3;Z++){let Ie=new e.Mesh(G,Z===2?n:r);Ie.position.set((Z-1)*.17,.12+Z*.06,.08+Z*.12),Ie.rotation.set(-.06,-.22,-.15+Z*.13),Q.add(Ie)}let K=new e.Mesh(new e.BoxGeometry(.012,1.4,.018),C%2?this.secondary:this.signal);K.position.set(-1.05,.24,.4),K.rotation.z=.11,Q.add(K);let $=new e.Mesh(new e.PlaneGeometry(1,1),new e.MeshBasicMaterial({transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,fog:!1})),te={value:1};M.slug===`becool-browser`&&$.material.color.setRGB(1.14,1.14,1.14),$.material.onBeforeCompile=Z=>{Z.uniforms.screenReveal=te,Z.vertexShader=`varying float screenX;
`+Z.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
 screenX = uv.x;`),Z.fragmentShader=`varying float screenX;
 uniform float screenReveal;
`+Z.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
 if (screenX > screenReveal) discard;`)},$.position.set(0,.04,.08),$.name=`archive-screenshot`,$.visible=!1,_.add($);let oe=new e.PointLight(C%2?this.secondary.color:this.signal.color,2,7,2);oe.position.set(0,1.5,2),_.add(oe),_.name=M.slug,this.gallery.add(_),this.plates.push({group:_,surface:A,shell:{parent:_,procedural:I},hitTargets:[A,ee],light:oe,placeholder:Y,folio:{parent:Y,procedural:Q},image:$,reveal:te,previewVisible:!!X,label:new e.Vector3(0,-1.73,.24),hover:0,focus:0})}),this.core.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),this.gallery.traverse(M=>{let C=M;C.isMesh&&(M.castShadow=!(C.material instanceof e.MeshBasicMaterial))})}T;scene;screenshotAnisotropy;core;rotor;lens;coreBody;coreRotor;operator;gallery;plates=[];signal;secondary;contact;key;cinematicTravel;mascot;identityContact;floor;hemisphere;rim;finishes=[];accentLight;shadowTexture;studioIdentity=!1;selectMonitorTone(e,t){this.plates.forEach((i,s)=>{i.light.color.set(s===e?t:8950685)})}setScreenshot(e,t,i){let s=this.plates[e];if(!s)return;let[o,r]=O(i,4.28,2.68);s.image.scale.set(o,r,1),t.anisotropy!==this.screenshotAnisotropy&&(t.anisotropy=this.screenshotAnisotropy,t.needsUpdate=!0),s.image.material.map||(s.image.material.needsUpdate=!0),s.image.material.map=t,s.image.visible=!0,s.placeholder.visible=!1}setMode(e){this.mascot.setMode(e);for(let t of this.finishes){let i=t.material;i.wireframe=e===`wireframe`,i.color.copy(e===`wireframe`?this.signal.color:t.color),i.transparent=e===`xray`||t.transparent,i.opacity=e===`xray`?.13:t.opacity,i.depthWrite=e!==`xray`,i.transmission=e===`beauty`?t.transmission:0,i.roughness=e===`chrome`?.065:t.roughness,i.metalness=e===`chrome`?1:t.metalness,e===`chrome`&&i.color.setHex(12963281),i.needsUpdate=!0}this.contact.visible=e===`beauty`||e===`chrome`}identityLighting(e){this.studioIdentity=e,this.cinematicTravel=void 0,this.scene.environmentIntensity=1,this.accentLight.intensity=e?0:8,this.hemisphere.color.setHex(e?13948632:12043730),this.hemisphere.intensity=e?1.05:.75,this.hemisphere.groundColor.setHex(e?1842463:526605),this.rim.color.setHex(e?14935527:11389416),this.rim.intensity=e?5.2:2.8,this.rim.position.set(...e?[-3.5,3.5,-1.2]:[8,3,-4]),this.key.color.setHex(e?15856111:15986404),this.key.intensity=e?3.5:4.2,this.key.position.set(...e?[-3,6,6]:[-3,7,5]),this.contact.material.opacity=e?.56:.65,this.identityContact.material.opacity=e?.56:.6}cinematicLighting(e){let t=e?.skyTravel;if(this.studioIdentity||t===this.cinematicTravel)return;if(!e){this.identityLighting(!1);return}this.cinematicTravel=t;let{skyTravel:i,transit:s,flyby:o,beacon:r,handoff:n}=e,a=1-this.T.MathUtils.smoothstep(i,0,.92),c=this.T.MathUtils.smoothstep(i,.62,1)*(1-this.T.MathUtils.smoothstep(i,1.12,1.62));this.scene.environmentIntensity=1-a*.52-c*.17,this.rim.color.setRGB(.25+r*.73,.55+a*.16,.81-r*.68),this.rim.position.set(8+a*.8+r*2,4.1-a*2.7+o*1.6,-4.7-a*2.4),this.rim.intensity=1.95-a*.35+c*.85+o*.7+n*.42+r*2.7,this.key.position.set(-3-a*4.4,7-a*1.2,5-a*1.7),this.key.intensity=3.65-s*.85+a*.86-r*.62,this.key.color.setRGB(.9+a*.09+r*.08,.85-r*.07,.78-a*.08-r*.21),this.accentLight.intensity=8-a*7.4,this.hemisphere.intensity=.75-a*.42-s*.2-r*.16}dispose(){this.shadowTexture.dispose(),this.key.shadow.dispose()}finish(e){let t=new this.T.MeshPhysicalMaterial(e);return this.finishes.push({material:t,color:t.color.clone(),roughness:t.roughness,metalness:t.metalness,transmission:t.transmission,opacity:t.opacity,transparent:t.transparent}),t}roundedShape(e,t,i){let s=new this.T.Shape,o=-e/2,r=-t/2;return s.moveTo(o+i,r),s.lineTo(o+e-i,r),s.quadraticCurveTo(o+e,r,o+e,r+i),s.lineTo(o+e,r+t-i),s.quadraticCurveTo(o+e,r+t,o+e-i,r+t),s.lineTo(o+i,r+t),s.quadraticCurveTo(o,r+t,o,r+t-i),s.lineTo(o,r+i),s.quadraticCurveTo(o,r,o+i,r),s}roundedPlate(e,t,i,s){return new this.T.ExtrudeGeometry(this.roundedShape(e,t,s),{depth:i,steps:1,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:2,curveSegments:6})}archiveHitFrame(e,t){let i=this.roundedShape(e+.12,t+.12,.13),s=this.roundedShape(e,t,.06);return i.holes.push(new this.T.Path(s.getPoints().reverse())),new this.T.ExtrudeGeometry(i,{depth:.105,steps:1,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,curveSegments:8})}createShadow(){let t=new Uint8Array(16384);for(let s=0;s<64;s++)for(let o=0;o<64;o++){let r=Math.hypot((o-32)/32,(s-32)/32),n=(s*64+o)*4;t[n+3]=Math.round(Math.max(0,1-r)**2*220)}let i=new this.T.DataTexture(t,64,64);return i.magFilter=this.T.LinearFilter,i.minFilter=this.T.LinearFilter,i.needsUpdate=!0,i}};var He=class{constructor(e){this.renderer=e;this.gl=e.getContext(),this.timer=this.gl.getExtension(`EXT_disjoint_timer_query_webgl2`);let t=this.gl.getExtension(`WEBGL_debug_renderer_info`);this.driver=t?String(this.gl.getParameter(t.UNMASKED_RENDERER_WEBGL)):`Not exposed`,typeof PerformanceObserver<`u`&&PerformanceObserver.supportedEntryTypes?.includes(`longtask`)&&(this.observer=new PerformanceObserver(i=>{this.disposed||this.recordTasks(i.getEntries())}),this.observer.observe({type:`longtask`})),document.addEventListener(`visibilitychange`,this.visibilityChanged)}renderer;gl;timer;frames=[];allFrames=[];foregroundFrames=[];backgroundFrames=[];longGaps=[];longTasks=[];foregroundTasks=[];taskVisibility={visible:0,hidden:0,unknown:0};createdAt=performance.now();visibilityState=document.visibilityState;visibilityMeasuredAt=this.createdAt;visibilityMs={visible:0,hidden:0};visibilityHistory=[{atMs:0,state:this.visibilityState}];visibilityChanges=0;observer;longTaskCount=0;longTaskMs=0;frameIntervals=0;frameMs=0;foregroundIntervals=0;foregroundFrameMs=0;disposed=!1;cpu=[];gpu=[];pending;active;start=0;count=0;gaps=0;driver;begin(e){if(this.count++,Number.isFinite(e)&&e>0){let t=e*1e3;this.add(this.allFrames,t),this.add(this.visibilityState===`visible`?this.foregroundFrames:this.backgroundFrames,t),this.frameIntervals++,this.frameMs+=t,this.visibilityState===`visible`&&(this.foregroundIntervals++,this.foregroundFrameMs+=t),e<=.25?this.add(this.frames,t):(this.gaps++,this.longGaps.length===64&&this.longGaps.shift(),this.longGaps.push({atMs:+(performance.now()-this.createdAt).toFixed(2),durationMs:t,visibility:this.visibilityState}))}this.pending&&this.timer&&!this.gl.isContextLost()&&this.gl.getQueryParameter(this.pending,this.gl.QUERY_RESULT_AVAILABLE)&&(this.gl.getParameter(this.timer.GPU_DISJOINT_EXT)||this.add(this.gpu,this.gl.getQueryParameter(this.pending,this.gl.QUERY_RESULT)/1e6),this.gl.deleteQuery(this.pending),this.pending=void 0),this.timer&&!this.pending&&this.count%10===0&&!this.gl.isContextLost()&&(this.active=this.gl.createQuery()??void 0,this.active&&this.gl.beginQuery(this.timer.TIME_ELAPSED_EXT,this.active)),this.start=performance.now()}end(){this.add(this.cpu,performance.now()-this.start),this.active&&this.timer&&!this.gl.isContextLost()&&(this.gl.endQuery(this.timer.TIME_ELAPSED_EXT),this.pending=this.active,this.active=void 0),this.count%30===0&&this.publish()}dispose(){this.disposed||(this.disposed=!0,document.removeEventListener(`visibilitychange`,this.visibilityChanged),this.observer&&(this.recordTasks(this.observer.takeRecords()),this.observer.disconnect()),this.gl.isContextLost()||(this.pending&&this.gl.deleteQuery(this.pending),this.active&&this.timer&&(this.gl.endQuery(this.timer.TIME_ELAPSED_EXT),this.gl.deleteQuery(this.active))),this.publish())}add(e,t){e.length===240&&e.shift(),e.push(t)}stats(e){let t=[...e].sort((n,a)=>n-a),i=e.length?e.reduce((n,a)=>n+a,0)/e.length:0,s=Math.floor(t.length/2),o=t.length%2?t[s]:(t[s-1]+t[s])/2,r=n=>t.length?+t[Math.ceil(t.length*n)-1].toFixed(2):null;return{samples:e.length,meanMs:i?+i.toFixed(2):null,medianMs:t.length?+o.toFixed(2):null,p95Ms:r(.95),p99Ms:r(.99)}}recordTasks(e){for(let t of e){this.longTaskCount++,this.longTaskMs+=t.duration,this.add(this.longTasks,t.duration);let i=t.startTime-this.createdAt,s=`unknown`;for(let o=this.visibilityHistory.length-1;o>=0;o--)if(this.visibilityHistory[o].atMs<=i){s=this.visibilityHistory[o].state;break}this.taskVisibility[s]++,s===`visible`&&this.add(this.foregroundTasks,t.duration)}}measureVisibility(){let e=performance.now();return this.visibilityMs[this.visibilityState]+=Math.max(0,e-this.visibilityMeasuredAt),this.visibilityMeasuredAt=e,e}visibilityChanged=()=>{let e=this.measureVisibility();this.visibilityState=document.visibilityState,this.visibilityChanges++,this.visibilityHistory.length===64&&this.visibilityHistory.shift(),this.visibilityHistory.push({atMs:e-this.createdAt,state:this.visibilityState})};publish(){this.measureVisibility(),this.renderer.domElement.dataset.sceneProfile=JSON.stringify({frames:this.stats(this.frames),allFrames:this.stats(this.allFrames),foregroundFrames:this.stats(this.foregroundFrames),backgroundFrames:this.stats(this.backgroundFrames),visibility:{visibleMs:+this.visibilityMs.visible.toFixed(2),hiddenMs:+this.visibilityMs.hidden.toFixed(2),transitions:this.visibilityHistory,omittedTransitions:Math.max(0,this.visibilityChanges+1-this.visibilityHistory.length)},session:{elapsedMs:+(performance.now()-this.createdAt).toFixed(2),frameIntervals:this.frameIntervals,averageFps:this.frameMs?+(this.frameIntervals*1e3/this.frameMs).toFixed(2):null,foregroundAverageFps:this.foregroundFrameMs?+(this.foregroundIntervals*1e3/this.foregroundFrameMs).toFixed(2):null},longGaps:{count:this.gaps,retained:this.longGaps},longTasks:{supported:!!this.observer,count:this.longTaskCount,totalMs:+this.longTaskMs.toFixed(2),recent:this.stats(this.longTasks),foreground:this.stats(this.foregroundTasks),visibilityCounts:this.taskVisibility},environment:{browser:navigator.userAgent,viewport:[window.innerWidth,window.innerHeight],dpr:window.devicePixelRatio,visibility:document.visibilityState},cpuRender:this.stats(this.cpu),gpu:this.stats(this.gpu),gpuTimerSupported:!!this.timer,ignoredLongGaps:this.gaps,driver:this.driver,pixelRatio:this.renderer.getPixelRatio(),drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,resources:k({},this.renderer.info.memory)})}};function Tt(P,e,t){let i=e.phase+P*e.speed,s=Math.sin(i)*e.radius;t.set(Math.cos(i)*e.radius,-s*Math.sin(e.inclination),s*Math.cos(e.inclination))}var kt=`
  struct NebulaSample {
    float nearFog;
    float farFog;
    float density;
    vec3 light;
  };

  NebulaSample livingNebula(sampler3D noiseTex, vec2 uv, vec2 skyUv, vec2 pointerOffsetUv,
    float aspect, float time, float quality, vec4 chapterWeights, vec4 ripple, vec4 vehicle) {
    vec2 metric = vec2(max(aspect, .0001), 1.0);
    float detail = clamp((quality - .56) / .44, 0.0, 1.0);
    vec2 displacement = vec2(0.0);
    float rippleWeight = 0.0;
    float vehicleWeight = 0.0;

    if (ripple.w > 0.0) {
      vec2 offset = (uv - ripple.xy) * metric;
      float distance = length(offset);
      float front = (distance - ripple.z) / .058;
      float support = max(0.0, 1.0 - front * front);
      rippleWeight = support * support * support * smoothstep(0.0, .035, distance) * ripple.w;
      displacement += offset / max(distance, .001) * rippleWeight * .035;
    }
    if (dot(vehicle.zw, vehicle.zw) > .00000001) {
      float energy = length(vehicle.zw);
      vec2 direction = vehicle.zw / energy;
      vec2 sideways = vec2(-direction.y, direction.x);
      vec2 offset = (uv - vehicle.xy) * metric;
      float along = -dot(offset, direction);
      float t = clamp(along / .32, 0.0, 1.0);
      float rear = 1.0 - t;
      float lateral = dot(offset, sideways) / mix(.030, .083, t);
      float support = max(0.0, 1.0 - lateral * lateral);
      vehicleWeight = smoothstep(0.0, .14, t) * rear * rear * support * support * energy;
      displacement += (-direction * .85 + sideways * lateral * .55) * vehicleWeight * .041;
    }

    vec2 warp = displacement / metric;
    vec2 parallax = skyUv - uv;
    float clock = time * quality;
    vec2 farUv = uv + parallax * .52 + pointerOffsetUv * .25 + warp * .30;
    float farNoise = texture(noiseTex, vec3(farUv * metric * .31 +
      vec2(clock * .006, -clock * .004), .72 + clock * .004)).r;
    // Use the far veil to advect the near filaments within the same two reads.
    float eddy = farNoise - .5;
    vec2 advection = vec2(eddy, eddy * abs(eddy) - .06) * mix(.045, .074, detail);
    vec2 nearUv = uv + parallax * 1.80 + pointerOffsetUv + warp;
    float nearNoise = texture(noiseTex, vec3(nearUv * metric * vec2(.48,.72) +
      advection + vec2(-clock * .013, clock * .009), .37 + clock * .009)).r;

    float farVeil = smoothstep(.24, .86, farNoise);
    float primary = 1.0 - abs(2.0 * nearNoise - 1.0);
    float secondary = 1.0 - abs(farNoise + nearNoise - 1.0);
    float ridge = mix(primary, max(primary, secondary * .82), .35 * detail);
    float filament = smoothstep(.42, .96, ridge);
    float excitation = min(.65, rippleWeight * .45 + vehicleWeight * .55);
    float nearField = filament * filament * mix(.38, 1.0, farVeil) +
      excitation * (.28 + .42 * farVeil);
    float farFog = farVeil * .72;
    float nearFog = min(1.0, nearField * .88);
    float density = 1.0 - (1.0 - farFog) * (1.0 - nearFog);

    // Weights are already nonnegative and continuous along the authored path.
    float total = dot(chapterWeights, vec4(1.0));
    vec4 weights = chapterWeights / max(1.0, total);
    float home = max(0.0, 1.0 - total);
    vec3 veil = vec3(.016,.022,.034) * home +
      vec3(.014,.028,.052) * weights.x + vec3(.012,.034,.042) * weights.y +
      vec3(.025,.020,.048) * weights.z + vec3(.038,.020,.012) * weights.w;
    vec3 filaments = vec3(.042,.058,.088) * home +
      vec3(.036,.074,.132) * weights.x + vec3(.030,.086,.104) * weights.y +
      vec3(.064,.048,.118) * weights.z + vec3(.102,.052,.028) * weights.w;
    vec3 light = veil * farFog + filaments * (nearFog + excitation * .35);
    return NebulaSample(nearFog, farFog, density, (light * .22) / (.22 + light));
  }
`;var Ct=`
  const mat3 ridgeAxes = mat3(
     .80, -.48,  .36,
     .36,  .80,  .48,
    -.48, -.36,  .80
  );
  const mat3 strataAxes = mat3(
    -.36,  .80, -.48,
    -.48, -.36,  .80,
     .80,  .48,  .36
  );

  vec3 planetaryTerrain(sampler3D noiseTex, vec3 normal, vec3 viewDir,
    vec3 sunDir, vec2 spin, float surfaceDetail) {
    vec3 p = vec3(normal.x * spin.x + normal.z * spin.y, normal.y,
                  -normal.x * spin.y + normal.z * spin.x);
    float province = texture(noiseTex, p * .32 + vec3(.13,.47,.29)).r;
    vec3 ridgePoint = (ridgeAxes * p) * .93 + vec3(.61,.19,.73);
    ridgePoint += .09 * (province - .5);
    float ridgeNoise = 2.0 * texture(noiseTex, ridgePoint).r - 1.0;
    float ridge = 1.0 - abs(ridgeNoise);
    ridge *= ridge;
    vec3 strataPoint = strataAxes * p;
    float grain = texture(noiseTex, strataPoint * 2.9 + vec3(.37,.83,.11)).r;
    float fine = .5;
    if (surfaceDetail > .5) {
      fine = texture(noiseTex, strataPoint * 8.3 + vec3(.71,.23,.59)).r;
    }

    float relief = .62 * province + .30 * ridge + .08 * grain;
    float basin = 1.0 - smoothstep(.27,.49,relief + .06 * (grain - .5));
    float weathering = smoothstep(.28,.44,relief) * (1.0 - smoothstep(.54,.72,relief));
    float rust = weathering * smoothstep(.36,.70,.65 * grain + .35 * (1.0 - province));
    float ore = smoothstep(.56,.88,ridge) * smoothstep(.48,.76,relief) *
      smoothstep(.31,.74,.75 * grain + .25 * fine);
    vec3 albedo = mix(vec3(.153,.172,.195), vec3(.055,.066,.083), basin);
    albedo = mix(albedo, vec3(.230,.124,.082), rust * .77);
    albedo = mix(albedo, vec3(.370,.408,.433), ore);
    albedo *= .91 + .17 * grain + .10 * (fine - .5);

    // Vary the slope in the planet frame, then project it onto the tangent plane.
    vec3 slope = (.19 * ridge + .10) * (ridgeAxes * vec3(ridgeNoise, grain - .5, province - .5));
    slope += .15 * (strataAxes * vec3(grain - .5, fine - .5, ridgeNoise));
    slope -= p * dot(p, slope);
    vec3 bumped = p + slope;
    vec3 shadingNormal = normalize(vec3(bumped.x * spin.x - bumped.z * spin.y, bumped.y,
                                        bumped.x * spin.y + bumped.z * spin.x));
    float daylight = dot(normal, sunDir);
    float gate = smoothstep(-.09,.13,daylight);
    float direct = mix(max(0.0,dot(shadingNormal, sunDir)),max(0.0,daylight),.28) * gate;
    float twilight = smoothstep(-.18,.02,daylight) * (1.0 - smoothstep(.02,.22,daylight));
    vec3 halfDir = sunDir + viewDir;
    halfDir *= inversesqrt(max(dot(halfDir,halfDir), .00001));
    float facing = max(0.0,dot(shadingNormal,halfDir));
    float roughLobe = facing * facing;
    roughLobe *= roughLobe;
    float sheen = mix(.007 * roughLobe,.060 * roughLobe * roughLobe,ore) * direct;
    float fill = (.052 + .052 * max(0.0,dot(normal,vec3(0.0,-.6,.8)))) * (.73 + .27 * relief);
    return albedo * (vec3(1.05,.99,.94) * (direct + sheen) +
      vec3(.28,.19,.15) * twilight * .23 + vec3(.62,.80,1.0) * fill);
  }

  vec3 planetaryAir(vec3 tangentNormal, vec3 viewDir, vec3 sunDir,
    float signedAltitude, float surfaceCover, float energy) {
    const float sigma = .135;
    const float scaleHeight = .023;
    float depth = clamp(-signedAltitude,0.0,1.0);
    float muV = sqrt(depth * (2.0 - depth));
    // The near column has the same limit on both sides of the horizon.
    float nearColumn = signedAltitude <= 0.0
      ? inversesqrt(muV * muV + sigma * sigma)
      : exp(-min(signedAltitude / scaleHeight, 40.0)) / sigma;
    float cover = clamp(surfaceCover,0.0,1.0);
    float column = nearColumn * (2.0 - cover);
    float viewLight = dot(viewDir,sunDir);
    float muS = (1.0 - depth) * dot(tangentNormal,sunDir) + muV * viewLight;
    float day = smoothstep(-.14,.18,muS);
    float twilight = smoothstep(-.23,-.02,muS) * (1.0 - smoothstep(-.02,.22,muS));
    float rayleigh = .55 + .45 * viewLight * viewLight;
    const float g = .55;
    float denom = max(1.0 + g * g + 2.0 * g * viewLight,.08);
    float mie = .14 * (1.0 - g * g) / (denom * sqrt(denom));
    vec3 opticalDepth = (vec3(.015,.029,.054) * rayleigh + vec3(.012,.013,.015) * mie) * column;
    vec3 scatter = (1.0 - exp(-opticalDepth)) * day * .46;
    float warmColumn = 1.0 - exp(-.055 * column);
    vec3 edge = vec3(.124,.060,.028) * warmColumn * twilight;
    vec3 airglow = vec3(.0010,.0016,.0030) * (sigma * nearColumn);
    float excitation = clamp(energy,0.0,1.0) * smoothstep(.24,.95,sigma * nearColumn);
    vec3 ionGlow = vec3(.024,.064,.101) * excitation * (.43 + .57 * day);
    float reach = smoothstep(-.32,-.10,signedAltitude) *
      (1.0 - smoothstep(.097,.17,signedAltitude));
    return (scatter + edge + airglow + ionGlow) * reach;
  }
`;var Ue=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.9999, 1.0);
  }
`;var fe=[21,3.6,-129];var re=[13.6,1,-63.5];var Ae=[.24,.86,.46];var _e=`
  uniform vec3 uEye;
  uniform mat3 uBasis;
  uniform float uAspect;
  uniform float uJourney;
  uniform float uPortrait;
  uniform float uLens;
  uniform float uTransit;
  uniform float uHandoff;
  uniform float uPlanetVisibility;
  uniform vec4 uWorld;
  uniform vec2 uTilt;
  const vec3 planet = vec3(${re.map(P=>P.toFixed(1)).join(`, `)});
  const float planetRadius = 7.7;
  const vec3 beacon = vec3(${fe.map(P=>P.toFixed(1)).join(`, `)});

`;var Ht=`
  // Sub-degree rotations use a first-order basis without re-rendering the volume.
  vec3 turnView(vec3 ray, vec2 angle) {
    return ray + vec3(-angle.x * ray.z, angle.y * ray.z, dot(ray.xy, vec2(angle.x, -angle.y)));
  }
  vec2 viewSlope() { return vec2(uAspect * uLens, uLens); }
`;var At=`
  vec2 relayPoint(vec3 ray, float setback) {
    float distance = (beacon.z + setback - uEye.z) / min(ray.z, -0.01);
    vec2 p = uEye.xy + ray.xy * distance - beacon.xy;
    return (p + vec2(-uPortrait * 0.68, uPortrait * 6.2)) *
      (1.0 + uPortrait * vec2(0.21, 0.43));
  }

  // Layered, inclined annular reactor. Each ring is projected at its own depth.
  vec2 reactorPlane(vec3 ray, float setback) {
    vec2 p = relayPoint(ray, setback) - vec2(0.0, 0.8);
    const float c = 0.965926, sn = 0.258819;
    return vec2(c * p.x + sn * p.y, -sn * p.x + c * p.y) * vec2(1.12, 0.98);
  }

  float reactorBand(float r, float inner, float outer) {
    return smoothstep(inner - 0.045, inner + 0.045, r) *
      (1.0 - smoothstep(outer - 0.045, outer + 0.045, r));
  }

`;var Lt=`
  precision highp sampler3D;
  uniform sampler3D uNoise;
  uniform float uBeacon;
  uniform float uSurfaceTime;
  uniform vec4 uRingTransfer;
  uniform vec4 uOrbitalFront;
  uniform vec4 uMoon;
  uniform vec2 uPlanetSpin;
  varying vec2 vUv;
  ${_e}
  ${At}
  ${Ct}

  const vec3 planetSun = normalize(vec3(-.62,.59,-.35));

  float field(vec3 point) {
    return texture(uNoise, point).r;
  }

  float dustDensity(vec3 point) {
    vec3 warp = vec3(
      field(point * 0.009 + vec3(0.4, 0.1, 0.0)),
      field(point * 0.014 + vec3(0.0, 0.5, 0.2)),
      field(point * 0.013 + vec3(0.1, 0.2, 0.6))
    ) - 0.5;
    vec3 q = point + warp * 7.0;
    float medium = field(q * 0.033);
    q += (medium - 0.5) * vec3(2.5, 3.1, 1.7);
    float fine = field(q * 0.089 + vec3(0.37, 0.18, 0.46));
    float detail = medium * 0.67 + fine * 0.28;
    #if STEPS > 15
      detail += field(q * 0.20) * 0.05;
    #else
      detail += fine * 0.05;
    #endif
    return detail;
  }

  // Keep the cached volume atmospheric. The reactor's precise mechanical
  // silhouette is drawn in the full-resolution composite, not this low-res pass.
  vec3 relay(vec3 ray, vec3 sky) {
    vec2 p = reactorPlane(ray, -1.0);
    float r = length(p);
    float ambient = exp(-dot(p * vec2(0.105, 0.092), p * vec2(0.105, 0.092)));
    float rim = exp(-abs(r - 8.0) * 0.53);
    float core = exp(-dot(p * vec2(0.38, 0.18), p * vec2(0.38, 0.18)));
    return sky + vec3(0.064, 0.025, 0.009) * ambient +
      vec3(0.037, 0.014, 0.004) * rim + vec3(0.028, 0.010, 0.003) * core;
  }

  // An open, atmospheric gallery: no walls, floor or ceiling geometry.
  // Two broad dust sheets give the floating screens depth without competing
  // with their screenshots or with the editorial text on the left.
  vec3 galleryVoid(vec2 uv) {
    vec2 p = (uv - vec2(mix(0.70, 0.51, uPortrait), 0.49)) * vec2(uAspect, 1.0);
    float broad = field(vec3(p * vec2(0.18, 0.27) + vec2(0.31, 0.47), 0.36));
    float wisps = field(vec3(p * vec2(0.39, 0.58) + vec2(broad * 0.06, 0.19), 0.68));
    float clouds = smoothstep(0.25, 0.78, broad * 0.70 + wisps * 0.30);
    vec2 spread = p * vec2(1.22, 1.72);
    float halo = exp(-dot(spread, spread));
    float curve = p.y + p.x * 0.25 - (broad - 0.5) * 0.32 + 0.16;
    float ribbon = exp(-curve * curve * 13.0) * exp(-p.x * p.x * 1.55);
    vec3 shade = vec3(0.0011, 0.0017, 0.0031);
    shade += vec3(0.0042, 0.0084, 0.0145) * halo * (0.38 + clouds * 0.62);
    shade += vec3(0.0034, 0.0087, 0.0124) * ribbon * clouds;
    return shade;
  }

  void main() {
    vec2 screen = vUv * 2.0 - 1.0;
    vec3 ray = normalize(uBasis * vec3(screen.x * uAspect * uLens, screen.y * uLens, 1.0));
    vec3 toPlanet = planet - uEye;
    float along = dot(toPlanet, ray);
    float impact = sqrt(max(0.0, dot(toPlanet, toPlanet) - along * along));
    float flyby = along > 0.0 ? uPlanetVisibility : 0.0;
    float disc = 1.0 - smoothstep(planetRadius - .085, planetRadius + .085, impact);
    float cover = disc * flyby;
    float hit = cover > 0.001
              ? along - sqrt(max(0.0, planetRadius * planetRadius - impact * impact)) : 80.0;
    float warmFacing = max(0.0, dot(normalize(beacon - uEye), ray));
    // The beacon sits far past the density sheets. Integrate its angular lobe once per ray.
    vec3 scattering = vec3(0.13, 0.048, 0.012) * pow(warmFacing, 22.0);

    // The arrival folds, the bridge of thin dust, and the distant lane are
    // bounded in world space. Looking away can leave them entirely behind.
    vec3 energy = vec3(0.0);
    float transmission = 1.0;
    float stepSize = mix(46.0, clamp(hit - 1.1, 2.0, 46.0), cover) / float(STEPS);
    for (int i = 0; i < STEPS; i++) {
      float distance = 1.1 + (float(i) + 0.44) * stepSize;
      vec3 p = uEye + ray * distance;
      float arrivalZ = (p.z + 19.0) / 13.5;
      float arrivalX = (p.x - 7.0) / 17.0;
      float arrival = exp(-dot(vec2(arrivalX, arrivalZ), vec2(arrivalX, arrivalZ)) * 1.25);
      float laneZ = (p.z + 81.0) / 13.0;
      float laneX = (p.x - 3.0) / 21.0;
      float lane = exp(-dot(vec2(laneX, laneZ), vec2(laneX, laneZ)) * 1.4);
      float bridge = exp(-abs(p.z + 47.0) * 0.055) * (0.12 + uHandoff * 0.14);
      if (arrival + lane + bridge < 0.035) continue;

      float grain = dustDensity(p);
      float curl = p.x - 5.5 + (grain - 0.5) * 6.9;
      float valley = p.y + 2.4 - 0.032 * curl * curl - (p.z + 15.0) * 0.23 + curl * 0.16;
      float ribbon = exp(-abs(valley) * (0.59 + grain * 0.66));
      float ridge = exp(-abs(valley - 1.55 + grain * 1.88) * 1.52);
      float dustLane = 1.0 - exp(-abs(valley + 0.46 + grain * 1.35) * 2.9) * 0.81;
      float sheet = arrival * (ribbon * dustLane + ridge * 0.64) + bridge * ribbon;
      if (lane > 0.001) {
        float filament = exp(-abs(p.y + p.x * 0.28 - sin(p.z * 0.23) * 2.7 + grain * 2.2) * 0.72);
        sheet += lane * filament * 0.62;
      }
      float knots = smoothstep(0.34, 0.69, grain);
      float density = sheet * (0.008 + knots * 0.17) * stepSize;
      density *= 1.0 - smoothstep(hit - 0.45, hit + 0.45, distance) * cover;
      float extinction = density + sheet * smoothstep(0.5, 0.75, grain) * stepSize * 0.19;
      vec3 nearTint = mix(vec3(0.027, 0.046, 0.14), vec3(0.11, 0.27, 0.39), knots);
      vec3 cold = mix(vec3(0.022, 0.028, 0.10), vec3(0.10, 0.17, 0.30), knots);
      vec3 tint = mix(cold, nearTint, arrival / max(0.001, arrival + lane + bridge));
      tint += uHandoff * bridge * vec3(0.10, 0.25, 0.36);
      float rimLight = smoothstep(-8.0, 19.0, p.x) * smoothstep(-0.4, 1.3, valley);
      tint += arrival * ridge * mix(vec3(0.04, 0.17, 0.22), vec3(0.54, 0.22, 0.09), rimLight);
      tint += scattering * (lane * 0.55 + ridge * arrival);
      energy += tint * density * transmission;
      transmission *= exp(-extinction);
    }

    if (hit < 80.0) {
      vec3 normal = normalize(uEye + ray * hit - planet);
      #if STEPS > 15
        const float detail = 1.0;
      #else
        const float detail = 0.0;
      #endif
      energy += planetaryTerrain(uNoise, normal, -ray, planetSun, uPlanetSpin, detail) * transmission * cover;
    }
    if (flyby > 0.0) {
      float altitude = impact / planetRadius - 1.0;
      if (altitude > -.34 && altitude < .18) {
        vec3 tangentNormal = (ray * along - toPlanet) / impact;
        float orbitalReach = smoothstep(.28,.96,dot(tangentNormal, uOrbitalFront.xyz) / 9.7);
        float excitation = orbitalReach * uOrbitalFront.w;
        energy += planetaryAir(tangentNormal, -ray, planetSun, altitude, disc, excitation) * transmission * flyby;
      }
      // Intersect the real ring plane and compare against the surface depth.
      vec3 axis = normalize(vec3(${Ae.join(`, `)}));
      float planeFacing = dot(ray, axis);
      float orbitDepth = abs(planeFacing) > .001 ? dot(toPlanet, axis) / planeFacing : -1.0;
      if (orbitDepth > 0.0 && orbitDepth < 128.0 && (cover < 0.01 || orbitDepth < hit)) {
        vec3 ringPoint = ray * orbitDepth - toPlanet;
        float radial = length(ringPoint);
        if (radial > 8.25 && radial < 12.90) {
          float shelf = smoothstep(8.25, 8.85, radial) * (1.0 - smoothstep(10.55, 10.86, radial));
          float skirt = smoothstep(10.92, 11.12, radial) * (1.0 - smoothstep(11.85, 12.20, radial));
          float rimDust = 1.0 - smoothstep(.03, .19, abs(radial - 12.55));
          float strata = .76 + .14 * sin(radial * 15.0) + .10 * sin(radial * 27.0 + 1.6);
          float density = (shelf * .83 + skirt * .58 + rimDust * .27) * strata;
          // Two azimuthal waves shear slowly with radius, without placing extra particles.
          float ringX = abs(ringPoint.x) < .0001 ? .0001 : ringPoint.x;
          float sector = atan(ringPoint.z, ringX);
          float drift = uSurfaceTime * (.12 + (12.9 - radial) * .035);
          float stream = sin(9.0 * (sector - drift) + radial * 2.7);
          float eddy = .86 + .10 * stream + .04 * sin(21.0 * (sector - drift) - radial * 7.2);
          float towardSun = dot(ringPoint, planetSun);
          float shadow = step(towardSun, 0.0) *
            (1.0 - smoothstep(55.0, 65.0, dot(ringPoint, ringPoint) - towardSun * towardSun));
          float sideLight = smoothstep(-.28, .73, towardSun / radial);
          vec3 ore = mix(vec3(.070,.105,.152), vec3(.205,.156,.101), sideLight);
          vec3 receiver = ringPoint - uRingTransfer.xyz;
          float receiving = (1.0 - smoothstep(.15, 10.0, dot(receiver, receiver))) * uRingTransfer.w;
          float alongOrbit = dot(ringPoint, uOrbitalFront.xyz) / (radial * 9.7);
          float front = smoothstep(.94,.999,alongOrbit) *
            (1.0 - smoothstep(.60,1.95,abs(radial - 9.7))) * uOrbitalFront.w;
          ore += vec3(.080,.17,.21) * (receiving * .42 + front * (.48 + .24 * stream));
          energy += ore * density * (.30 + sideLight * .70) * eddy
            * (1.0 - shadow * .76) * flyby * transmission;
        }
      }
      vec3 moon = uMoon.xyz - uEye;
      float moonAlong = dot(moon, ray);
      float moonDistance2 = max(0.0, dot(moon, moon) - moonAlong * moonAlong);
      if (moonAlong > 0.0 && moonDistance2 < uMoon.w * uMoon.w) {
        float moonHit = moonAlong - sqrt(max(0.0, uMoon.w * uMoon.w - moonDistance2));
        if (moonHit > 0.0 && (cover < .01 || moonHit < hit)) {
          vec3 moonNormal = normalize(ray * moonHit - moon);
          float facets = field(moonNormal * .30 + .31);
          float lit = smoothstep(-.14, .80, dot(moonNormal, planetSun));
          vec3 lunarTint = mix(vec3(.035,.045,.067),vec3(.25,.22,.19),lit * (.60 + .40 * facets));
          float coverage = 1.0 - smoothstep(uMoon.w - .12,uMoon.w,sqrt(moonDistance2));
          energy = mix(energy,lunarTint * transmission,coverage * flyby);
        }
      }
    }

    // A warm point in the arrival cloud introduces the closing beacon's palette.
    vec3 sunStation = mix(vec3(16.0, 18.5, -51.0), vec3(7.0, 6.0, -51.0), uPortrait);
    float arrivalFacing = max(0.0, dot(normalize(sunStation - uEye), ray));
    float arrivalLight = (pow(arrivalFacing, 22500.0) * 1.6 + pow(arrivalFacing, 165.0) * 0.18)
                         * (1.0 - smoothstep(0.25, 0.75, uJourney));
    energy += vec3(1.0, 0.41, 0.10) * arrivalLight * transmission;

    float angle = 1.0 - warmFacing;
    energy += vec3(0.58, 0.19, 0.064) * exp(-angle * 180.0) * 0.02 * transmission;
    if (uBeacon > 0.0) energy = mix(energy, relay(ray, energy), uBeacon);
    // One close fold crosses the viewing frustum as the camera clears the Home cloud.
    // Its intersection is in world units, so it expands and slips past on either scroll direction.
    if (uTransit > 0.0) {
      float nearDepth = (-23.0 - uEye.z) / min(-0.12, ray.z);
      if (nearDepth > 0.8 && nearDepth < 20.0) {
        vec3 nearPoint = uEye + ray * nearDepth;
        float fold = nearPoint.y + 0.9 + nearPoint.x * 0.42
                   + (field(nearPoint * 0.08) - 0.5) * 2.4;
        float reach = uTransit * smoothstep(0.8, 3.2, nearDepth)
                    * exp(-abs(nearPoint.x - 5.0) * 0.18);
        energy *= 1.0 - reach * 0.83 * (1.0 - smoothstep(-1.4, 0.7, fold));
        energy += vec3(0.012, 0.15, 0.16) * reach * exp(-abs(fold) * 0.78) * 0.43;
      }
    }
    vec3 night = vec3(0.00057, 0.00076, 0.00124);
    float veil = mix(mix(0.38, 1.0, smoothstep(0.02, 0.66, vUv.x)),
                     mix(0.42, 1.0, 1.0 - smoothstep(0.38, 0.98, vUv.y)), uPortrait);
    float quiet = 1.0 - 0.29 * smoothstep(2.50, 2.98, uJourney);
    float textShade = 1.0 - 0.84 * uPortrait * flyby * smoothstep(0.35, 0.84, vUv.y);
    float gallery = smoothstep(0.62, 0.98, uJourney) * (1.0 - smoothstep(1.07, 1.59, uJourney));
    if (gallery > 0.0) energy = mix(energy, galleryVoid(vUv) + energy * 0.36, gallery);
    vec3 exposed = (energy * veil * quiet * textShade + night)
                 * (1.0 - 0.28 * smoothstep(0.59, 1.46, length(screen)));
    gl_FragColor = vec4(sqrt(1.0 - exp(-exposed * 1.09)), 1.0);
  }
`;var Vt=`
  uniform sampler2D uNebula;
  precision highp sampler3D;
  uniform sampler3D uNoise;
  uniform float uBeacon;
  uniform vec3 uAir;
  uniform vec3 uSceneResponse;
  uniform float uReactorTransfer;
  uniform vec4 uEnergyRipple;
  uniform vec4 uVehicleWake;
  uniform vec3 uPointer;
  uniform vec3 uWake;
  uniform vec3 uExhibitTone;
  uniform float uMotionScale;
  uniform float uTime;
  varying vec2 vUv;
  ${_e}
  ${At}
  ${Ht}

  // A suspended reactor, with a rear chassis, beveled segmented front
  // casing and an inset copper power channel. No old pillars or platform.
  vec3 reactorFrame(vec3 ray, vec3 color, float time) {
    vec2 back = reactorPlane(ray, -1.8);
    vec2 front = reactorPlane(ray, 1.0);
    float rb = length(back), r = length(front);
    if (min(r, rb) > 11.0) return color;
    float theta = atan(front.y, front.x + 0.00001);
    vec2 n = front / max(r, 0.001);
    float directional = 0.5 + 0.5 * dot(n, normalize(vec2(-0.7, 0.9)));
    float rearMask = reactorBand(rb, 6.72, 8.82);
    float rearRim = exp(-abs(rb - 8.70) * 9.0);
    vec3 rear = vec3(0.038, 0.043, 0.052) + vec3(0.09, 0.063, 0.040) * rearRim;
    color = mix(color, rear, rearMask);

    // Six machined segments reveal the darker rear chassis through their seams.
    float sector = fract((theta + 3.14159265) * 0.95492966 + 0.5);
    float gap = smoothstep(0.015, 0.035, min(sector, 1.0 - sector));
    float armor = reactorBand(r, 6.82, 8.55) * gap;
    float bevel = exp(-abs(r - 8.45) * 10.0) + exp(-abs(r - 6.91) * 8.0);
    float panel = reactorBand(r, 7.18, 8.17);
    float seam = exp(-abs(r - 7.92) * 20.0);
    float brushed = 0.5 + 0.5 * sin(r * 76.0 + sin(theta * 27.0) * 0.65);
    vec3 graphite = mix(vec3(0.056, 0.067, 0.080), vec3(0.164, 0.175, 0.186), directional);
    graphite *= 1.0 - panel * 0.21;
    graphite += vec3(0.14, 0.106, 0.071) * bevel * (0.42 + directional * 0.58);
    graphite += vec3(0.010, 0.009, 0.008) * brushed * panel;
    graphite *= 1.0 - seam * 0.40;
    color = mix(color, graphite, armor);

    // An exposed inner ring holds the core without enclosing the open center.
    float inner = reactorBand(r, 6.12, 6.48);
    color = mix(color, vec3(0.10, 0.083, 0.065) + directional * vec3(0.14, 0.11, 0.08), inner);
    float warmTrack = reactorBand(r, 6.49, 6.62);
    float outerTrack = reactorBand(r, 8.18, 8.28) * gap;
    float cycle = 0.5 + 0.5 * cos(theta * 3.0 - time * 1.65);
    float copper = 0.35 + 0.55 * cycle;
    vec3 amber = vec3(1.0, 0.57, 0.23);
    color += amber * (warmTrack * (0.18 + 0.34 * copper) + outerTrack * copper * 0.23);
    color += amber * exp(-abs(r - 6.55) * 3.3) * (0.025 + cycle * 0.025);
    color += amber * warmTrack * (uSceneResponse.z * .75 + uReactorTransfer * .42) *
      (.12 + .25 * smoothstep(.54, .94, cos(theta - (1.0 - uSceneResponse.z) * 6.28318)));

    // Tiny recessed fasteners, confined to the casing rather than the sky.
    float boltAngle = min(abs(sector - 0.15), abs(sector - 0.85)) * 1.0472;
    float boltDist = length(vec2((r - 7.67), boltAngle * 7.67));
    float bolt = 1.0 - smoothstep(0.115, 0.18, boltDist);
    float boltRim = exp(-abs(boltDist - 0.12) * 31.0);
    color = mix(color, vec3(0.035, 0.038, 0.042), bolt * armor);
    color += vec3(0.16, 0.13, 0.09) * boltRim * armor * directional;
    return color;
  }

  vec3 relayLight(vec3 ray, vec2 disturbance, float time) {
    vec2 p = relayPoint(ray, -1.0) - vec2(0.0, 0.8);
    float r = length(reactorPlane(ray, 1.0));
    float aperture = 1.0 - smoothstep(5.55, 6.05, r);
    if (aperture <= 0.0) return vec3(0.0);
    float y = p.y + clamp(disturbance.y * 3.5, -0.35, 0.35);
    float x = p.x + clamp(disturbance.x * 5.0, -0.48, 0.48);
    float height = clamp((y + 5.7) / 11.4, 0.0, 1.0);
    float envelope = smoothstep(-5.8, -4.7, y) * (1.0 - smoothstep(4.2, 5.8, y));
    float rising = y - time * 3.1;
    float broad = texture(uNoise, vec3(x * 0.18 + 0.34, rising * 0.075, 0.43)).r;
    float fine = texture(uNoise, vec3(x * 0.39 + broad * 0.12, (y - time * 4.4) * 0.14, 0.68)).r;
    float curl = texture(uNoise, vec3(0.21, (y - time * 2.2) * 0.11, 0.82)).r;
    float drift = (curl - 0.5) * (0.42 + height * 0.84) + sin(y * 0.82 - time * 1.9) * 0.16;
    float across = x - drift;
    float width = mix(1.36, 0.46, height) * (0.76 + broad * 0.54);
    float turbulence = smoothstep(0.25, 0.77, broad * 0.62 + fine * 0.38);
    float pulse = 0.88 + 0.12 * sin(time * 2.4 + broad * 3.0);
    float body = exp(-pow(abs(across) / max(width, 0.12), 1.65)) * envelope;
    float hot = exp(-pow(abs(across) / max(width * 0.39, 0.12), 1.7)) * envelope;
    float tongue = exp(-abs(across + sin(rising * 1.45 + curl * 3.1) * width * 0.65) * 3.2)
      * smoothstep(0.34, 0.84, fine) * envelope;
    float haze = exp(-abs(across) * 0.52 - abs(y) * 0.14) * (0.035 + turbulence * 0.065);
    vec3 flame = vec3(0.88, 0.24, 0.045) * body * (0.13 + turbulence * 0.24);
    flame += vec3(1.0, 0.66, 0.29) * hot * (0.12 + turbulence * 0.32);
    flame += vec3(1.0, 0.84, 0.56) * tongue * 0.16;
    vec2 cells = vec2((x - drift * 0.55) * 1.9, (y - time * 3.7) * 1.35);
    vec2 id = floor(cells);
    float seed = fract(sin(dot(id, vec2(17.17, 51.73))) * 13221.7);
    vec2 point = fract(cells) - vec2(0.22 + seed * 0.55, 0.2 + fract(seed * 4.7) * 0.6);
    float ember = 1.0 - smoothstep(0.035, 0.145, length(point * vec2(1.55, 0.63)));
    ember *= step(0.58, seed) * exp(-abs(x) * 0.88) * envelope * (0.20 + seed * 0.36);
    flame += vec3(1.0, 0.72, 0.34) * ember;
    return (flame * (pulse + uSceneResponse.z * .32 + uReactorTransfer * .22) +
      vec3(1.0, 0.47, 0.16) * haze) * aperture;
  }

  ${kt}

  void main() {
    vec2 metric = vec2(uAspect, 1.0);
    vec2 fromPointer = (vUv - uPointer.xy) * metric;
    float radius = length(fromPointer);
    float reach = 1.0 - smoothstep(0.018, mix(0.132, 0.218, uWake.z), radius);
    float home = max(0.0, 1.0 - dot(uWorld, vec4(1.0)));
    float pulse = reach * reach * uPointer.z * uWake.z * (1.0 - uWorld.z * 0.23);
    vec2 flow = vec2(
      uAir.x * (vUv.y - 0.36) + uAir.z * (vUv.x * vUv.y - 0.25),
      uAir.y * (vUv.x - 0.44)
    );
    vec2 wake = (uWake.xy * 0.16 - fromPointer * 0.86) * pulse / metric;
    vec2 slope = viewSlope();
    vec3 sightline = turnView(vec3((vUv * 2.0 - 1.0) * slope, 1.0), uTilt);
    vec2 skyUv = sightline.xy / (slope * sightline.z) * 0.5 + 0.5;
    vec3 color = texture2D(uNebula, skyUv + home * (flow * 0.068 * uMotionScale - wake * 0.48)).rgb;
    float highlight = smoothstep(0.22, 0.64, max(color.r, color.g));
    float lightSide = mix(smoothstep(0.28, 0.83, vUv.x), 1.0 - smoothstep(0.30, 0.79, vUv.y), uPortrait);
    vec3 shade = mix(vec3(0.39, 0.43, 0.56), vec3(0.85, 0.90, 1.0), lightSide);
    color *= mix(vec3(0.86, 0.90, 1.0), shade, home);
    color += highlight * vec3(0.030, 0.014, 0.003) * mix(1.0, lightSide, home);

    // Only the drifting sheets use the ripple and vehicle wake. The authored
    // cached sky, planet and relay keep their existing projection.
    vec2 depthShift = (skyUv - vUv) * metric * (1.0 + (1.0 - home) * 0.26);
    float t = uTime * uMotionScale;
    NebulaSample nebula = livingNebula(uNoise, vUv, skyUv, wake, uAspect, uTime, uMotionScale,
      uWorld, uEnergyRipple, uVehicleWake);
    float nearFog = nebula.nearFog;
    float farFog = nebula.farFog;
    float density = nebula.density;
    float right = smoothstep(0.16, 0.83, vUv.x);
    float floor = 1.0 - smoothstep(0.12, 0.57, vUv.y);
    float atlas = smoothstep(0.05, 0.27, vUv.x) * (1.0 - smoothstep(0.49, 0.68, vUv.x)) * floor;
    float pockets = home * (right * 0.75 + floor * 0.28) + uWorld.x * (floor * 0.82 + right * 0.19) +
      uWorld.y * right * floor * 0.92 + uWorld.z * (atlas * 1.44 + floor * right * 0.28) +
      uWorld.w * (right * 0.36 + floor * 0.57);
    float edge = smoothstep(0.022, 0.079, radius);
    float crossing = uTransit + uHandoff * .6;
    color *= 1.0 - density * pockets * .035;
    color += nebula.light * (.24 + pockets * (.64 + crossing * .14));
    color += vec3(.10,.145,.208) * pulse * (.22 + edge * .31) * mix(.48,1.0,nearFog);
    float gallery = uWorld.x;
    if (gallery > 0.0) {
      // Project-colored atmospheric light, not architectural lighting.
      vec2 pocket = (skyUv - vec2(mix(0.71, 0.5, uPortrait), 0.48)) * metric;
      pocket += vec2(uAir.x * 0.026, uAir.y * 0.018) * uMotionScale + depthShift * 0.35;
      vec2 spread = pocket * vec2(1.52, 2.38);
      float halo = exp(-dot(spread, spread));
      float cloud = smoothstep(0.28, 0.78, nearFog * 0.65 + farFog * 0.35);
      float ribbonY = pocket.y + pocket.x * 0.24 + (farFog - 0.5) * 0.28;
      float ribbon = exp(-ribbonY * ribbonY * 19.0) * exp(-pocket.x * pocket.x * 1.7);
      color += gallery * (
        (vec3(0.010, 0.016, 0.024) + uExhibitTone * 0.045) * halo * (0.36 + cloud * 0.64) +
        uExhibitTone * (0.023 + uSceneResponse.x * .045) * ribbon * cloud
      );
    }
    if (uPlanetVisibility > .0 && pulse > .01) {
      vec3 toward = planet - uEye;
      vec3 ray = normalize(uBasis * sightline);
      vec3 offset = cross(toward, ray);
      float limb = abs(length(offset) - planetRadius);
      float airglow = 1.0 - smoothstep(.06, 1.1, limb);
      color += vec3(.030,.18,.22) * airglow * pulse * uPlanetVisibility;
    }
    if (uWorld.z > .0) {
      float filament = abs((vUv.y - .25) + (vUv.x - .5) * (uSceneResponse.y - 1.0) * .23 +
        (nearFog - .5) * .12);
      float thread = 1.0 - smoothstep(.004, .065, filament);
      color += vec3(.065,.16,.24) * thread * atlas * uWorld.z * (.18 + uSceneResponse.z * .46);
    }
    if (uBeacon > 0.0) {
      vec3 ray = uBasis * sightline;
      vec3 reactor = reactorFrame(ray, color, t);
      reactor += relayLight(ray, wake, t);
      color = mix(color, reactor, uBeacon);
    }
    if (uEnergyRipple.w > 0.0) {
      float distance = length((vUv - uEnergyRipple.xy) * metric);
      float front = 1.0 - smoothstep(.002,.019,abs(distance - uEnergyRipple.z));
      vec3 rippleTint = mix(vec3(.55,.29,.13), vec3(.19,.44,.62), clamp(uWorld.x + uWorld.y + uWorld.z,0.0,1.0));
      color += rippleTint * front * uEnergyRipple.w * (.074 + .15 * density);
    }
    float grain = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    gl_FragColor = vec4(color + (grain - 0.5) * 0.006, 1.0);
  }
`;var Ft=`
  attribute vec3 aStar;
  uniform float uPixelRatio;
  uniform float uSpeed;
  uniform float uTime;
  uniform vec3 uPointer;
  uniform vec3 uWake;
  varying vec4 vStar;
  varying vec2 vDirection;
  ${_e}
  ${Ht}
  void main() {
    float phase = dot(position, vec3(0.071, 0.15, 0.094));
    float nearDust = aStar.z * aStar.z;
    // The far field barely drifts while closer dust follows a separate, faster current.
    float current = 1.24 + uWorld.y * .15 + uWorld.z * .08 - uWorld.w * .24;
    vec3 local = position - uEye + vec3(
      sin(uTime * 0.19 + phase), cos(uTime * 0.14 - phase), sin(uTime * 0.11 + phase)
    ) * mix(0.065, current, nearDust);
    vec3 look = local * uBasis;
    vec2 slope = viewSlope();
    // Dust receives additional depth-dependent travel. Distant stars mostly
    // inherit the small change in viewing angle.
    look.xy -= vec2(-uTilt.x, uTilt.y) * (0.6 + nearDust * 5.2);
    look = turnView(look, -uTilt);
    vec2 projected = look.xy / (max(0.12, look.z) * slope);
    if (aStar.y > 0.56 && aStar.z > 0.4 && look.z > 1.7) {
      float phaseOrbit = phase + uTime * 0.12;
      vec2 orbit = vec2(cos(phaseOrbit), sin(phaseOrbit));
      vec2 galleryDust = vec2(0.40 + orbit.x * 0.58, -0.06 + orbit.y * 0.35 - orbit.x * 0.14);
      vec2 orbitDust = vec2(0.58 + orbit.x * 0.60, 0.23 + orbit.y * 0.26 - orbit.x * 0.19);
      vec2 atlas = vec2(-0.37 + orbit.x * 0.40, -0.18 + orbit.y * 0.20 + orbit.x * 0.13);
      vec2 relay = vec2(0.43 + orbit.x * 0.22, -0.24 + orbit.y * 0.42);
      projected += (galleryDust - projected) * uWorld.x * 0.13 + (orbitDust - projected) * uWorld.y * 0.14 +
        (atlas - projected) * uWorld.z * 0.38 + (relay - projected) * uWorld.w * 0.26;
    }
    vec2 metric = vec2(uAspect, 1.0);
    vec2 fromPointer = (projected * 0.5 + 0.5 - uPointer.xy) * metric;
    float push = 1.0 - smoothstep(0.015, mix(0.14, 0.26, uWake.z), length(fromPointer));
    push *= push * uPointer.z * nearDust * uWake.z;
    projected += (fromPointer * 1.22 + uWake.xy * 0.25) * push / metric;
    float radial = length(projected);
    float entry = smoothstep(1.7, 6.3, look.z);
    float edge = 1.0 - smoothstep(0.77, 1.31, radial * 0.82);
    float band = max(uTransit, smoothstep(2.13, 2.88, uJourney) * (1.0 - smoothstep(3.2, 3.76, uJourney)));
    float distanceFade = aStar.z > 0.85 ? mix(0.50, 1.0, band) : 1.0;
    vec3 toPlanet = planet - uEye;
    vec3 ray = normalize(local);
    float along = dot(toPlanet, ray);
    float cover = dot(toPlanet, toPlanet) - along * along;
    float occ = along > 0.0 && along < length(local) && cover < planetRadius * planetRadius
                ? uPlanetVisibility : 0.0;
    float streak = abs(uSpeed) * (0.17 + band * 0.75) * aStar.z
                 * (1.0 - smoothstep(12.0, 57.0, look.z)) * smoothstep(0.17, 0.82, radial);
    vec2 axis = projected * vec2(uAspect, -1.0) + vec2(0.0001, 0.0);
    vDirection = normalize(axis);
    float breath = 0.94 + sin(phase + uTime * 0.30) * 0.06 + push * 0.29;
    float gallery = smoothstep(0.68, 0.99, uJourney) * (1.0 - smoothstep(1.08, 1.56, uJourney));
    float finale = smoothstep(3.36, 4.0, uJourney);
    vStar = vec4(aStar.x * entry * edge * distanceFade * (1.0 - occ) * breath *
                 (1.0 - gallery * mix(0.38, 0.18, nearDust)) * (1.0 - finale * mix(0.65, 0.22, nearDust)),
                 aStar.y, aStar.z, streak);
    float size = 1.05 + aStar.y * 4.1 + aStar.z * 6.7 / max(look.z, 3.0);
    gl_PointSize = uPixelRatio * (size + streak * 11.0);
    gl_Position = vec4(projected, look.z > 0.0 ? 0.9997 : 2.0, 1.0);
    if (gl_VertexID == 0 && uPortrait < 0.24) {
      // One existing vertex becomes a brief trace with a seeded interval.
      float cycle = floor(uTime / 23.0);
      float seed = fract(sin((cycle + 3.0) * 43.19) * 7438.12);
      float age = mod(uTime, 23.0) - (4.0 + 14.0 * seed);
      if (age > 0.0 && age < 0.95) {
        vec2 origin = vec2(0.72, 0.72 - 0.09 * seed);
        origin = mix(origin, vec2(-0.38, -0.54), uWorld.z);
        origin.y += uWorld.x * 0.065 - uWorld.w * 0.29;
        vec2 direction = normalize(vec2(-0.82, -0.36 + seed * 0.21));
        vec3 point = turnView(vec3((origin + direction * age * 0.22) * slope, 1.0), -uTilt);
        gl_Position = vec4(point.xy / (point.z * slope), 0.9998, 1.0);
        gl_PointSize = 24.0 * uPixelRatio;
        vStar = vec4(smoothstep(0.0, 0.16, age) * (1.0 - smoothstep(0.32, 0.95, age)) * 0.66,
                     0.9, 0.1, 0.9);
        vDirection = normalize(direction * vec2(uAspect, -1.0));
      }
    }
  }
`;var jt=`
  varying vec4 vStar;
  varying vec2 vDirection;
  void main() {
    vec2 p = (gl_PointCoord - 0.5) * 2.0;
    float along = dot(p, vDirection);
    float across = dot(p, vec2(-vDirection.y, vDirection.x)) * (1.0 + 4.0 * vStar.w);
    float radius = length(vec2(along, across));
    float core = exp(-radius * radius * 7.1);
    float halo = exp(-radius * radius * 3.1) * vStar.y * 0.31;
    vec3 ice = mix(vec3(0.49, 0.7, 0.86), vec3(0.93, 0.96, 1.0), vStar.y);
    gl_FragColor = vec4(ice, (core + halo) * (1.0 - smoothstep(0.68, 1.0, radius)) * vStar.x);
  }
`;var _t={radius:23.5,inclination:.43,phase:3.69,speed:-.01};function qt(P){return()=>(P=Math.imul(P,1664525)+1013904223>>>0,P/4294967296)}function de(P,e){let t=Math.max(0,1-Math.abs(P-e));return t*t*(3-2*t)}var Le=class{skyPass;passCamera;target;noise;quad;starGeometry;volume;composite;starMaterial;group;eye;basis;route;orientation;forward;right;up;worldUp;projectedView;ringTransfer;orbitalFront;moon;moonOffset;planetSpin;planetPulseAt=Number.NEGATIVE_INFINITY;staticPlanetPulse=!1;reactorTransfer={value:0};pointer;wake;air;sceneResponse;vehicleWake;exhibitTone;targetExhibitTone;aspect={value:1};portrait={value:0};journey={value:0};speed={value:0};lens={value:.54};transit={value:0};handoff={value:0};planetVisibility={value:0};beacon={value:0};motionScale={value:1};clock={value:0};surfaceTime={value:0};world;tilt;lastSkyTravel=NaN;lastSurfaceFrame=-1;tier;constructor(e,t,i=new e.Vector4(0,0,0,0)){this.eye={value:new e.Vector3},this.basis={value:new e.Matrix3},this.pointer={value:new e.Vector3(.5,.5,0)},this.wake={value:new e.Vector3},this.air={value:new e.Vector3},this.sceneResponse={value:new e.Vector3},this.vehicleWake={value:new e.Vector4(0,0,0,0)},this.world={value:new e.Vector4},this.tilt={value:new e.Vector2},this.targetExhibitTone=new e.Color(`#a9d9f3`),this.exhibitTone={value:this.targetExhibitTone.clone()},this.forward=new e.Vector3,this.right=new e.Vector3,this.up=new e.Vector3,this.worldUp=new e.Vector3(0,1,0),this.projectedView=new e.Vector3,this.ringTransfer={value:new e.Vector4(0,0,0,0)},this.orbitalFront={value:new e.Vector4(0,0,0,0)},this.moon={value:new e.Vector4(0,0,0,.83)},this.moonOffset=new e.Vector3,this.planetSpin={value:new e.Vector2(1,0)},this.route=new e.CatmullRomCurve3([new e.Vector3(0,.35,0),new e.Vector3(-2.6,.8,-29),new e.Vector3(-2.4,.3,-47),new e.Vector3(-9.5,1.4,-70),new e.Vector3(3.2,.5,-93)]),this.orientation=new e.CatmullRomCurve3([new e.Vector3(-.25,.04,-.1),new e.Vector3(-.31,.1,.03),new e.Vector3(.3,.01,-.06),new e.Vector3(-.07,-.04,.07),new e.Vector3(.16,-.025,0)],!1,`catmullrom`,.42);let s=qt(33029),o=32,r=Uint8Array.from({length:o**3},()=>s()*256);this.noise=new e.Data3DTexture(r,o,o,o),this.noise.format=e.RedFormat,this.noise.wrapS=this.noise.wrapT=this.noise.wrapR=e.RepeatWrapping,this.noise.minFilter=this.noise.magFilter=e.LinearFilter,this.noise.needsUpdate=!0,this.target=new e.WebGLRenderTarget(1,1,{depthBuffer:!1}),this.quad=new e.PlaneGeometry(2,2);let n={uEye:this.eye,uBasis:this.basis,uAspect:this.aspect,uJourney:this.journey,uPortrait:this.portrait,uLens:this.lens,uTransit:this.transit,uHandoff:this.handoff,uPlanetVisibility:this.planetVisibility,uWorld:this.world,uTilt:this.tilt};this.volume=new e.ShaderMaterial({vertexShader:Ue,fragmentShader:Lt,uniforms:l(k({},n),{uNoise:{value:this.noise},uBeacon:this.beacon,uSurfaceTime:this.surfaceTime,uRingTransfer:this.ringTransfer,uOrbitalFront:this.orbitalFront,uMoon:this.moon,uPlanetSpin:this.planetSpin}),defines:{STEPS:24},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.passCamera=new e.Camera,this.skyPass=new e.Scene;let a=new e.Mesh(this.quad,this.volume);a.frustumCulled=!1,this.skyPass.add(a),this.composite=new e.ShaderMaterial({vertexShader:Ue,fragmentShader:Vt,uniforms:l(k({uNebula:{value:this.target.texture}},n),{uBeacon:this.beacon,uAir:this.air,uSceneResponse:this.sceneResponse,uReactorTransfer:this.reactorTransfer,uEnergyRipple:{value:i},uVehicleWake:this.vehicleWake,uTime:this.clock,uNoise:{value:this.noise},uPointer:this.pointer,uWake:this.wake,uExhibitTone:this.exhibitTone,uMotionScale:this.motionScale}),depthTest:!1,depthWrite:!1,toneMapped:!1});let c=new e.Mesh(this.quad,this.composite);c.frustumCulled=!1,c.renderOrder=-100,this.starGeometry=new e.BufferGeometry;let p=[],d=[];for(let l=0;l<2600;l++){let m=l%9,v=m<4,g=m<7,E=v?32+s()*190:g?7+s()*155:4+s()*104,b=v?218:g?102:44;p.push((s()-.5)*b,(s()-.5)*b*.64,-E);let f=s()**4;d.push(.19+f*.73,f,v?.12:g?.49:1)}this.starGeometry.setAttribute(`position`,new e.Float32BufferAttribute(p,3)),this.starGeometry.setAttribute(`aStar`,new e.Float32BufferAttribute(d,3)),this.starMaterial=new e.ShaderMaterial({vertexShader:Ft,fragmentShader:jt,uniforms:l(k({},n),{uPixelRatio:{value:1},uSpeed:this.speed,uTime:this.clock,uPointer:this.pointer,uWake:this.wake}),transparent:!0,depthWrite:!1,toneMapped:!1});let h=new e.Points(this.starGeometry,this.starMaterial);h.frustumCulled=!1,h.renderOrder=-100,this.group=new e.Group,this.group.name=`Cinematic space`,this.group.visible=!1,this.group.add(c,h),t.add(this.group)}prepare(e,t,i,s,o,r=!1,n=0,a=0,c,p=0,d=0,h=0,l,m=0,v=!1){let{skyTravel:g}=o,E=e.domElement;if(!s){this.group.visible&&delete E.dataset.spaceQuality,this.group.visible=!1,this.speed.value=0,this.vehicleWake.value.set(0,0,0,0),this.planetPulseAt=Number.NEGATIVE_INFINITY;return}let b=t<850||r,f=b?`compact`:`full`,w=f!==this.tier;if(w&&(this.tier=f,this.volume.defines.STEPS=b?15:24,this.volume.needsUpdate=!0,this.starGeometry.setDrawRange(0,b?1350:2600)),E.dataset.spaceQuality!==f&&(E.dataset.spaceQuality=f),this.group.visible=!0,this.exhibitTone.value.lerp(this.targetExhibitTone,1-Math.exp(-n*9)),this.motionScale.value=b?.56:1,this.air.value.set(Math.sin(a*.23),Math.sin(a*.15+1.1),Math.sin(a*.31)),this.clock.value=a,this.sceneResponse.value.set(p,d,h),this.reactorTransfer.value=m*de(g,4)*(.74-.26*Math.cos(a*2.55)),(v||o.planetVisibility<.8)&&(this.planetPulseAt=Number.NEGATIVE_INFINITY),o.planetVisibility>0){let U=-1.1+Math.min(1,Math.max(0,(1.25-t/i)*1.5))*.08+.1*Math.sin(a*.3),R=Math.sin(U),D=Math.cos(U),[y,k,T]=Ae,F=-(y*R+T*D)/k,G=9.7/Math.hypot(R,F,D);this.ringTransfer.value.set(R*G,F*G,D*G,m*de(g,2))}else this.ringTransfer.value.w=0;if(l){let{x:L,y:U,directionX:R,directionY:D,energy:y}=l;this.vehicleWake.value.set(L,U,R*y,D*y)}else this.vehicleWake.value.set(0,0,0,0);if(c){this.tilt.value.set(c.yaw,c.pitch),this.pointer.value.set(c.x,c.y,c.presence);let L=b?.62:1;this.wake.value.set(c.velocityX*L,c.velocityY*L,Math.max(0,Math.min(1,Math.hypot(c.velocityX,c.velocityY)*2-.003))*L)}else this.tilt.value.set(0,0),this.pointer.value.z=0,this.wake.value.set(0,0,0);let z=g-this.lastSkyTravel,x=n>0&&Math.abs(z)<.2?Math.max(-1,Math.min(1,z/n/2.9)):0;this.speed.value+=(x-this.speed.value)*(1-Math.exp(-n*10));let u=Math.min(b?.55:.78,(b?404:702)/Math.max(t,i)),H=Math.max(1,Math.round(t*u)),V=Math.max(1,Math.round(i*u)),S=this.target.width!==H||this.target.height!==V,W=Math.min(1.6,e.getPixelRatio());this.starMaterial.uniforms.uPixelRatio.value=W;let B=t/i,j=g!==this.lastSkyTravel||this.aspect.value!==B,O=o.planetVisibility>.2?Math.floor(a*(b?5:9)):-1;if(!S&&!w&&!j&&O===this.lastSurfaceFrame)return;if(S&&this.target.setSize(H,V),j){this.lastSkyTravel=g;let L=Math.min(1,Math.max(0,(1.25-B)*1.5));this.portrait.value=L,this.aspect.value=B,this.journey.value=g,this.frameCamera(o,L),this.world.value.set(de(g,1),de(g,2),de(g,3),de(g,4))}this.lastSurfaceFrame=O,this.surfaceTime.value=a,o.planetVisibility>0&&this.framePlanet(a);let N=e.getRenderTarget();e.setRenderTarget(this.target),e.render(this.skyPass,this.passCamera),e.setRenderTarget(N)}pulsePlanet(e,t){this.planetPulseAt=e,this.staticPlanetPulse=!t,this.lastSurfaceFrame=-2}framePlanet(e){Tt(e,_t,this.moonOffset);let t=this.moonOffset;this.moon.value.set(re[0]+t.x,re[1]+t.y,re[2]+t.z,.83),this.planetSpin.value.set(Math.cos(e*.018),Math.sin(e*.018));let i=this.ringTransfer.value,s=Math.min(1,Math.max(0,e-this.planetPulseAt)),o=(1-s)**2,r=e*.29%(Math.PI*2),n=this.staticPlanetPulse&&o>0?0:r+o*s*5.4,a=Math.cos(n),c=Math.sin(n),[p,d,h]=Ae,l=1/Math.hypot(p,d,h);this.orbitalFront.value.set(i.x*a+(d*i.z-h*i.y)*c*l,i.y*a+(h*i.x-p*i.z)*c*l,i.z*a+(p*i.y-d*i.x)*c*l,Math.min(1,i.w*.42+o*.68))}frameCamera(e,t){let i=e.skyTravel/4;this.route.getPoint(i,this.eye.value),this.orientation.getPoint(i,this.forward);let s=e.transit*(1-.33*t);this.eye.value.x+=s*1.3-e.flyby*e.pass*1.8,this.eye.value.z-=s*1.5;let o=this.forward.z+s*.045-e.flyby*.026;this.forward.x+=t*(.3+e.flyby*.04)+s*.11,this.forward.y+=t*(.12+e.flyby*.09)-s*.045,this.lens.value=.54+s*.07-e.flyby*.025,this.transit.value=e.transit,this.handoff.value=e.handoff,this.planetVisibility.value=e.planetVisibility,this.beacon.value=e.beacon,this.forward.z=-1,this.forward.normalize(),this.right.crossVectors(this.forward,this.worldUp).normalize().applyAxisAngle(this.forward,o),this.up.crossVectors(this.right,this.forward),this.basis.value.set(this.right.x,this.up.x,this.forward.x,this.right.y,this.up.y,this.forward.y,this.right.z,this.up.z,this.forward.z)}reactorCenter(e,t,i){let s=this.portrait.value;this.projectSkyPoint(e,t,i,fe[0]+s*.68,fe[1]-s*6.2+.8/(1+s*.43),fe[2]+1)}planetRingAnchor(e,t,i){let s=this.ringTransfer.value;this.projectSkyPoint(e,t,i,re[0]+s.x,re[1]+s.y,re[2]+s.z)}projectSkyPoint(e,t,i,s,o,r){let n=this.projectedView.set(s,o,r).sub(this.eye.value),a=n.dot(this.right),c=n.dot(this.up),{x:p,y:d}=this.tilt.value,h=(n.dot(this.forward)-p*a+d*c)/(1+p*p+d*d),l=this.lens.value*Math.max(.01,h);e.set((1+(a+p*h)/(l*this.aspect.value))*t/2,(1-(c-d*h)/l)*i/2)}setExhibitTone(e){this.targetExhibitTone.set(e)}dispose(){this.group.removeFromParent(),this.skyPass.clear(),this.quad.dispose(),this.starGeometry.dispose(),this.volume.dispose(),this.composite.dispose(),this.starMaterial.dispose(),this.target.dispose(),this.noise.dispose()}};var qe=[.016,.04,.035,.04,.035];function Yt(P){let e=Math.min(3,Math.max(0,Math.floor(P))),t=Math.min(1,Math.max(0,P-e));return qe[e]+(qe[e+1]-qe[e])*t*t*(3-2*t)}function Gt(P){return Math.max(-1,Math.min(1,P))}var Ve=class{x=.5;y=.5;velocityX=0;velocityY=0;presence=0;yaw=0;pitch=0;targetX=.5;targetY=.5;sampleX=0;sampleY=0;stamp;age=0;move(e,t,i,s){let o=this.stamp===void 0?0:(s-this.stamp)/1e3;if(o>0&&o<.15){let r=(e-this.targetX)*i,n=t-this.targetY,a=Math.min(1/Math.max(.008,o),2.6/Math.max(.001,Math.hypot(r,n)));this.sampleX=r*a,this.sampleY=n*a}else this.sampleX=this.sampleY=0,this.stamp===void 0&&this.presence<.05&&(this.x=e,this.y=t);this.targetX=e,this.targetY=t,this.stamp=s,this.age=0}advance(e){let t=1-Math.exp(-11*e);this.x+=(this.targetX-this.x)*t,this.y+=(this.targetY-this.y)*t;let i=this.stamp===void 0?0:Math.exp(-21*this.age),s=Math.exp(-6*e),o=i*(s-Math.exp(-21*e))*6/15;this.velocityX=this.velocityX*s+this.sampleX*o,this.velocityY=this.velocityY*s+this.sampleY*o,this.age+=e;let r=this.stamp===void 0?0:1;this.presence+=(r-this.presence)*(1-Math.exp(-5*e))}leave(){this.stamp=void 0}touch(e,t){this.leave(),this.x=this.targetX=e,this.y=this.targetY=t,this.sampleX=this.sampleY=this.velocityX=this.velocityY=0,this.presence=.78}advanceTilt(e,t,i){let s=Yt(e)*i*(this.stamp===void 0?0:this.presence),o=-Gt((this.x-.5)*1.72+this.velocityX*.27)*s,r=Gt((this.y-.5)*1.72+this.velocityY*.27)*s*.72,n=1-Math.exp(-9*t);this.yaw+=(o-this.yaw)*n,this.pitch+=(r-this.pitch)*n,!s&&Math.abs(this.yaw)+Math.abs(this.pitch)<1e-5&&(this.yaw=this.pitch=0)}reset(){this.leave(),this.x=this.y=this.targetX=this.targetY=.5,this.velocityX=this.velocityY=this.sampleX=this.sampleY=this.presence=0,this.yaw=this.pitch=0}};var ve=[0,8,15.8,22.8,29];var It=`
  struct EnergyPathSample {
    vec2 point;
    vec2 tangent;
    float envelope;
  };

  vec2 energyUnit(vec2 vector, vec2 fallback) {
    float squared = dot(vector, vector);
    return squared > 1e-12 ? vector * inversesqrt(squared) : fallback;
  }

  EnergyPathSample energyPath(vec2 from, vec2 to, vec2 bend, vec3 seed, float clock, float drive) {
    float phase = fract(clock + seed.x);
    float t = phase * phase * (2.5 - 1.5 * phase);
    float arch = 4.0 * t * (1.0 - t);
    vec2 chord = to - from;
    vec2 point = from + t * chord + 0.5 * arch * bend;
    vec2 axis = energyUnit(chord, energyUnit(bend, vec2(0.0, 1.0)));
    vec2 tangent = energyUnit(chord + (2.0 - 4.0 * t) * bend, axis);

    // The transverse axis stays fixed even when the path turns back on itself.
    vec2 normal = vec2(-axis.y, axis.x);
    float width = min(0.016, 0.12 * (length(chord) + length(bend)));
    float flutter = sin(6.2831853 * (t * 1.5 + seed.z));
    float lateral = mix(seed.y * 2.0 - 1.0, flutter, 0.28);
    point += normal * (width * arch * sqrt(max(arch, 0.0)) * lateral);

    float inject = smoothstep(0.0, 0.16, phase);
    float dissipate = 1.0 - smoothstep(0.72, 1.0, phase);
    float d = clamp(drive, 0.0, 1.0);
    float threshold = seed.z * 0.34;
    float gate = smoothstep(threshold, threshold + 0.27, d);
    float envelope = inject * dissipate * gate * d * (0.63 + 0.37 * d);
    return EnergyPathSample(point, tangent, envelope);
  }
`;var Dt=196;var je=[{shape:[1,.72,.58],tilt:-.44,rise:.12,tint:16759423,opacity:.65},{shape:[1.34,.48,.32],tilt:.08,rise:0,tint:10147052,opacity:.47},{shape:[1.42,.59,.55],tilt:.46,rise:.02,tint:12046316,opacity:.51},{shape:[1.16,.81,.24],tilt:-.36,rise:0,tint:10544629,opacity:.54},{shape:[.68,.94,.33],tilt:.04,rise:.55,tint:16361603,opacity:.6}];var Ge=class{points;palette;shapes;uniforms;count=0;orbitalTime=0;activeRoute=[-1,-1];source;constructor(e,t){this.palette=je.map(r=>new e.Color(r.tint)),this.shapes=je.map(({shape:r})=>new e.Vector3(r[0],r[1],r[2])),this.source=new e.Vector2,this.uniforms={time:{value:0},orbitalTime:{value:0},scale:{value:1},dpr:{value:1},aspect:{value:1},orbit:{value:new e.Vector2},shape:{value:new e.Vector3},pointer:{value:new e.Vector3},wake:{value:new e.Vector2},tint:{value:new e.Color},alpha:{value:0},response:{value:new e.Vector3},uEnergyRipple:{value:t},fieldMode:{value:0},vehicle:{value:new e.Vector3},vehicleVelocity:{value:new e.Vector2},heading:{value:new e.Vector2},transferSource:{value:this.source},transferA:{value:new e.Vector4},transferB:{value:new e.Vector4},transferPower:{value:new e.Vector3}};let i=new Float32Array(Dt*3);for(let r=0;r<i.length;r++){let n=Math.sin((r+1)*127.139)*43758.5453;i[r]=n-Math.floor(n)}let s=new e.BufferGeometry;s.setAttribute(`position`,new e.BufferAttribute(i,3));let o=new e.ShaderMaterial({transparent:!0,depthWrite:!1,blending:e.AdditiveBlending,toneMapped:!1,uniforms:this.uniforms,vertexShader:`
        uniform float time, orbitalTime, scale, dpr, aspect, alpha, fieldMode;
        uniform vec3 shape, pointer, response, vehicle;
        uniform vec4 uEnergyRipple;
        uniform vec2 orbit, wake, heading, vehicleVelocity;
        uniform vec2 transferSource;
        uniform vec4 transferA, transferB;
        uniform vec3 transferPower;
        varying float strength, exhaust, stretch;
        varying vec2 tangent;

        ${It}

        float wakeLength(float speedRatio, float energy) {
          return mix(.14,.30,speedRatio) * (.35 + .65 * energy);
        }

        // Radial cushion and tapered slipstream in viewport-height units.
        vec3 vehicleWake(vec2 pointUv, vec2 vehicleUv, vec2 velocity, vec2 fallbackDirection,
          float aspect, float energy) {
          vec2 offset = (pointUv - vehicleUv) * vec2(aspect,1.0);
          float distanceSquared = dot(offset,offset);
          if (distanceSquared >= .32 * .32) return vec3(0.0);

          const float shoveRadius = .085;
          float radialU = min(1.0,sqrt(distanceSquared) / shoveRadius);
          float radialEdge = 1.0 - radialU;
          // Cancel distance against the cubic envelope so the center stays finite.
          vec2 displacement = offset * (.018 * energy * 6.75 / shoveRadius * radialEdge * radialEdge);
          float shoveWeight = energy * (1.0 - smoothstep(0.0,1.0,radialU));
          float wakeWeight = 0.0;

          float speed = length(velocity);
          vec2 direction = speed > .002 ? velocity / speed : fallbackDirection;
          float speedRatio = clamp(speed / .18,0.0,1.0);
          float lengthBehind = wakeLength(speedRatio,energy);
          float along = dot(offset,direction);
          float behind = -along;
          if (behind > 0.0 && behind < lengthBehind) {
            float t = behind / lengthBehind;
            float longitudinal = smoothstep(0.0,.18,t) * (1.0 - smoothstep(.18,1.0,t));
            float halfWidth = mix(.065,.012,t) * (.65 + .35 * speedRatio);
            vec2 lateral = offset - direction * along;
            float across = length(lateral) / halfWidth;
            if (across < 1.0) {
              float edge = 1.0 - across;
              float center = 1.0 - smoothstep(0.0,1.0,across);
              float weight = energy * (.35 + .65 * speedRatio) * longitudinal;
              displacement += (.026 * weight) *
                (lateral * (6.75 / halfWidth * edge * edge) - direction * (.35 * center));
              wakeWeight = weight * center;
            }
          }
          displacement *= min(1.0,.04 / max(length(displacement),.0001));
          return vec3(displacement,shoveWeight + wakeWeight * (1.0 - shoveWeight));
        }

        void main() {
          vec3 seed = position;
          float angle = seed.x * 6.283185 + orbitalTime * (.16 + seed.y * .18);
          float inward = fract(seed.y - orbitalTime * .30);
          float tidal = 1.0 - step(.5, abs(fieldMode - 2.0));
          float wakeMode = step(2.5, fieldMode);
          float radius = 2.25 + mix(seed.y, inward, max(response.z, tidal * .63)) * 2.85;
          float lift = fract(seed.z + time * .07) - .5;
          vec2 wheel = vec2(cos(angle), sin(angle));
          mat2 tilt = mat2(cos(orbit.x), sin(orbit.x), -sin(orbit.x), cos(orbit.x));
          vec3 p = vec3(wheel * radius, (seed.z - .5) * 4.2) * shape;
          p.xy = tilt * (p.xy + wheel.yx * tidal * lift * .52);
          p.y += orbit.y * lift * 3.1;
          vec4 clip = projectionMatrix * modelViewMatrix * vec4(p * scale, 1.);
          vec2 metric = vec2(aspect, 1.);
          vec2 screen = clip.xy / clip.w * .5 + .5;
          vec2 difference = (screen - pointer.xy) * metric;
          float nearPointer = pointer.z * exp(-dot(difference, difference) * 37.);
          vec2 swirl = vec2(-difference.y, difference.x) * (1.0 - abs(response.x)) * .75;
          clip.xy += (wake * (.043 + .038 * wakeMode) + (swirl - difference * response.x * 1.05) / metric)
            * nearPointer * clip.w;
          exhaust = 0.0;
          tangent = normalize(tilt * vec2(-wheel.y, wheel.x) + vec2(.001,0.));
          stretch = .27 + step(.5,fieldMode) * .22 + response.y * .15;
          float ripple = 0.0;
          if (uEnergyRipple.w > 0.0) {
            vec2 radial = (screen - uEnergyRipple.xy) * metric;
            float distance = length(radial);
            ripple = (1.0 - smoothstep(.01,.043,abs(distance - uEnergyRipple.z))) * uEnergyRipple.w;
            vec2 outward = radial / max(distance,.012);
            clip.xy += outward / metric * ripple * .055 * clip.w;
            stretch += ripple * .26;
          }
          if (vehicle.z > 0.0) {
            vec3 interaction = vehicleWake(screen,vehicle.xy,vehicleVelocity,heading,aspect,vehicle.z);
            clip.xy += 2.0 * interaction.xy / metric * clip.w;
            exhaust = interaction.z * .42;
            if (seed.x < .16) {
              float speedRatio = clamp(length(vehicleVelocity) / .18,0.0,1.0);
              float age = fract(seed.y + time * (.42 + seed.z * .23));
              vec2 sideways = vec2(-heading.y,heading.x);
              vec2 tail = vehicle.xy + (sideways * (seed.z - .5) * mix(.056,.018,age)
                - heading * mix(.024,wakeLength(speedRatio,vehicle.z),age)) / metric;
              float envelope = smoothstep(0.0,.14,age) * (1.0 - smoothstep(.36,1.0,age));
              float trail = smoothstep(.015,.32,vehicle.z) * envelope;
              clip.xy = mix(clip.xy,(tail * 2.0 - 1.0) * clip.w,trail);
              exhaust = max(exhaust,trail * (.48 + .40 * vehicle.z));
              tangent = normalize(mix(tangent,heading,trail * .86) + vec2(.001,0.0));
              stretch = mix(stretch,.75,trail);
            }
          }
          float transfer = 0.0;
          float pathPresence = 0.0;
          // The exhaust keeps its existing seed range during Rally. Alternate
          // cohorts crossfade between neighboring chapters without changing lanes.
          if (transferPower.z > 0.0 && seed.x >= .17 && seed.x < .56) {
            bool laneA = seed.z < .5;
            float weight = laneA ? transferPower.x : transferPower.y;
            if (weight > 0.0) {
              vec4 path = laneA ? transferA : transferB;
              float energy = transferPower.z * weight;
              vec3 pathSeed = vec3(seed.y,seed.z,fract(seed.x * 19.0));
              EnergyPathSample arc = energyPath(transferSource,path.xy,path.zw,pathSeed,time * .40585,energy);
              transfer = arc.envelope;
              pathPresence = smoothstep(0.0,.30,weight);
              clip.xy = mix(clip.xy,(2.0 * arc.point / metric - 1.0) * clip.w,pathPresence);
              tangent = energyUnit(mix(tangent,arc.tangent,pathPresence),arc.tangent);
              stretch = mix(stretch,.77,pathPresence);
            }
          }
          gl_Position = clip;
          gl_PointSize = (1.65 + 2.2 * seed.z * seed.z * seed.z + 1.3 * nearPointer +
            .7 * response.y + 3.9 * exhaust + ripple * 1.6 + transfer * 2.8) * dpr;
          float fade = mix(1., smoothstep(0., .16, .5 - abs(lift)), orbit.y);
          strength = alpha * fade * (.26 + .59 * seed.y + .58 * nearPointer + .53 * response.y) +
            exhaust * .67 + ripple * .42;
          strength = strength * (1.0 - pathPresence * .94) + transfer * 1.16;
        }`,fragmentShader:`
        uniform vec3 tint;
        varying float strength, exhaust, stretch;
        varying vec2 tangent;
        void main() {
          vec2 offset = gl_PointCoord - .5;
          float across = dot(offset,vec2(-tangent.y,tangent.x));
          float r = dot(offset, offset) * (1.0 - stretch) + across * across * stretch * 3.5;
          float fringe = 1. - smoothstep(.012, .24, r);
          float core = 1. - smoothstep(.001, .037, r);
          vec3 color = mix(tint,vec3(.28,.80,1.0),min(1.0,exhaust * 2.2));
          gl_FragColor = vec4(mix(color, vec3(1.), core * .45), (fringe * .62 + core * .38) * strength);
        }`});this.points=new e.Points(s,o),this.points.name=`journey-particles`,this.points.frustumCulled=!1,this.points.visible=!1}route(e,t,i,s,o,r,n,a){let c=this.uniforms,p=e%2;if(c.transferPower.value.setComponent(p,t),t<=0){this.activeRoute[p]=-1;return}let d=(p===0?c.transferA:c.transferB).value,h=a&&this.activeRoute[p]===e?1-Math.exp(-18*n):1;d.set(d.x+(i-d.x)*h,d.y+(s-d.y)*h,o,r),this.activeRoute[p]=e}frame(e,t,i,s,o,r,n,a,c,p,d,h,l,m=0){if(this.points.visible=c&&e.visible,this.uniforms.transferPower.value.z=m,(!this.points.visible||m<=0)&&(this.activeRoute.fill(-1),this.uniforms.transferPower.value.set(0,0,0)),!this.points.visible)return 0;let v=Math.min(3,Math.max(0,Math.floor(t))),g=Math.max(0,Math.min(1,t-v)),E=g*g*(3-2*g),b=je[v],f=je[v+1],z=Math.round((r<760||a<.91?76:Dt)*p.density);this.count!==z&&(this.count=z,this.points.geometry.setDrawRange(0,z)),this.points.position.copy(e.position);let x=this.uniforms;return x.time.value=o,this.orbitalTime+=h*p.orbit*(p.particleMode===1?1.65:1),x.orbitalTime.value=this.orbitalTime,x.fieldMode.value=p.particleMode,x.scale.value=e.scale.x,x.aspect.value=r/Math.max(1,n),x.dpr.value=a,x.orbit.value.set(b.tilt+(f.tilt-b.tilt)*E+(i-1)*.23*Math.max(0,1-Math.abs(t-3)),b.rise+(f.rise-b.rise)*E),x.shape.value.copy(this.shapes[v]).lerp(this.shapes[v+1],E),x.tint.value.copy(this.palette[v]).lerp(this.palette[v+1],E),x.alpha.value=(b.opacity+(f.opacity-b.opacity)*E)*(.55+p.energy*.75),x.response.value.set(p.force,d,Math.max(0,t-3)),x.pointer.value.set(s.x,s.y,s.presence),x.wake.value.set(s.velocityX,s.velocityY),l?(x.vehicle.value.set(l.x,l.y,l.energy),x.vehicleVelocity.value.set(l.velocityX,l.velocityY),x.heading.value.set(l.directionX,l.directionY)):x.vehicle.value.z=0,z}dispose(){this.points.removeFromParent(),this.points.geometry.dispose(),this.points.material.dispose()}};var Jt=4.25;var Wt=[148/800,652/800,148/800,652/800];var Bt=[91/400,91/400,295/400,295/400];var Qt={"developer-os-portfolio":`#aab2ff`,"barber-booking-website":`#f2bf82`,"geox-community-portal":`#96e8be`,"becool-browser":`#8cd5ee`};var ye=class P{zone=D(me);assets=D(g);audio=D(h);performance=D(ce);stages=D(K);previews=D(v);monitorFlight=D(x);rally=D(w);rallyCar;T;animation;renderer;scene;space;shot=j(0);chapterPositions=[];chapterAnchors;exhibits;puzzle;particles;journeyField=e;projectPulse=0;cubeTap;rippleImpact;ripple;cubeInspection;inspectionLook;inspectionWeight=0;cubePulse=0;inspectionFrame;puzzleLayout;puzzleRay;reactorCenter;energyAnchor;puzzleMapPose;puzzleReactorWeight=0;puzzleFrame;caseRoom;modelSlots;requestedModels=new Set;selectedSkillBranch=0;skillPathAccent=`#b4e1f8`;camera;world;environment;profiler;raycaster;observer;host;viewportSize={width:0,height:0};labels=[];motion;finePointer;atmosphereListeners;atmosphere=new Ve;cameraTimeline;exhibitTween;exhibitProgress={value:1};animateExhibit=!1;shownExhibit;pulseTween;previewTweens=new Map;mediaVersion=0;skipMediaMotion=!1;disposed=!1;ready=!1;hidden=!1;exhibitOnScreen=!0;elemental;elementalRequest;elementalExit;studio;portfolioHero=!1;singleExhibit=!1;reduced=!1;framing=`desktop`;hoverTarget=-1;currentStage=`boot`;currentProject=0;currentMode=`beauty`;lastTime=0;elapsed=0;coreYOffset=0;pointer={x:0,y:0};parallax={x:0,y:0};pointerOnControl=!1;press;pulse={value:0};pose={x:0,y:2.2,z:12,tx:0,ty:0,tz:0,objectY:0,scale:1,identityTurn:-.16};projected;async initialize(e,t=[]){this.host=e,this.labels=t;try{let i=await this.assets.loadRuntime();if(this.disposed||(this.T=i.three,this.animation=i.gsap,this.zone.runOutsideAngular(()=>{this.motion=window.matchMedia(`(prefers-reduced-motion: reduce)`),this.reduced=this.motion.matches,this.renderer=new this.T.WebGLRenderer({antialias:!0,alpha:this.portfolioHero||this.singleExhibit,powerPreference:e.clientWidth<700?`low-power`:`high-performance`}),this.renderer.setClearColor(1383459,this.portfolioHero||this.singleExhibit?0:1),this.renderer.toneMapping=this.T.ACESFilmicToneMapping,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!this.portfolioHero&&e.clientWidth>=700,this.renderer.shadowMap.type=this.T.PCFShadowMap,this.renderer.setPixelRatio(this.performance.initialize(e.clientWidth)),new URLSearchParams(window.location.search).has(`profile3d`)&&(this.profiler=new He(this.renderer));let s=this.renderer.domElement;s.style.display=`block`,s.setAttribute(`aria-hidden`,`true`),s.setAttribute(`data-scene`,`runtime-core`),s.addEventListener(`webglcontextlost`,this.contextLost),e.appendChild(s),this.assets.phase.set(`geometry`),this.build(i.RoomEnvironment,i.mergeGeometries),this.resize()}),this.assets.phase.set(`shaders`),await this.renderer.compileAsync(this.scene,this.camera),this.disposed||this.assets.phase()===`error`))return;this.ready=!0,this.zone.runOutsideAngular(()=>{if(this.motion.addEventListener(`change`,this.motionChanged),this.hidden=document.hidden,document.addEventListener(`visibilitychange`,this.visibilityChanged),e.addEventListener(`pointermove`,this.pointerMoved),e.addEventListener(`pointerleave`,this.pointerLeft),e.addEventListener(`pointerdown`,this.pointerDown),e.addEventListener(`pointerup`,this.pointerPressed),e.addEventListener(`pointercancel`,this.pointerLeft),this.portfolioHero){this.finePointer=matchMedia(`(any-hover: hover) and (any-pointer: fine)`);let s=(this.atmosphereListeners=new AbortController).signal;window.addEventListener(o,o=>{let r=o.detail;r?.kind===`project`&&!this.reduced&&(this.projectPulse=1),(r?.kind===`discovery`||r?.kind===`cube`&&r.action===`turn`)&&(this.reduced||(this.cubePulse=1))},{signal:s}),window.addEventListener(`pointermove`,this.moveAtmosphere,{capture:!0,passive:!0,signal:s}),window.addEventListener(`pointerdown`,this.startCubeTap,{capture:!0,passive:!0,signal:s}),window.addEventListener(`pointerup`,this.finishCubeTap,{capture:!0,passive:!0,signal:s}),window.addEventListener(`pointercancel`,()=>{this.cubeTap=void 0,this.leaveAtmosphere()},{signal:s}),window.addEventListener(`keydown`,this.leaveAtmosphere,{capture:!0,signal:s}),window.addEventListener(`blur`,()=>{this.clearRipple(),this.leaveAtmosphere()},{signal:s}),document.documentElement.addEventListener(`pointerleave`,this.leaveAtmosphere,{signal:s}),this.finePointer.addEventListener(`change`,this.leaveAtmosphere,{signal:s})}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.monitorTone(),this.mode(this.currentMode),this.updateLoop(),this.render()}),this.assets.phase.set(`ready`)}catch(i){this.disposed||(console.warn(`Developer OS graphics preparation failed.`,i),this.assets.fail(),this.releaseGraphics())}}build(e,t){let i=this.T;this.scene=new i.Scene,this.scene.fog=new i.FogExp2(1647404,.021),this.camera=new i.PerspectiveCamera(38,1,.1,65),this.raycaster=new i.Raycaster,this.projected=new i.Vector3;let s=new e,o=new i.PMREMGenerator(this.renderer);try{this.environment=o.fromScene(s,.04),this.scene.environment=this.environment.texture;let r=this.renderer?.capabilities?.getMaxAnisotropy()??1;this.world=new Ce(i,this.scene,this.stages.projects,t,Math.min(4,r)),this.modelSlots=new x$1(i,this.assets),this.portfolioHero&&(this.ripple=new i.Vector4(0,0,0,0),this.space=new Le(i,this.scene,this.ripple),this.puzzle=new Q(i,this.ripple),this.particles=new Ge(i,this.ripple),this.energyAnchor=new i.Vector2,this.world.core.visible=!1,this.puzzleRay=new i.Vector3,this.scene.add(this.puzzle.root,this.particles.points)),this.singleExhibit&&this.buildCaseRoom()}finally{s.dispose(),o.dispose()}}buildCaseRoom(){let e=this.T,t=[];for(let s=-5;s<=5;s++)t.push(s,-2.04,2.8,s,-2.04,-6);for(let s=-6;s<=2;s++)t.push(-5,-2.04,s,5,-2.04,s);for(let s of[-2.4,-3.65,-4.9])t.push(-3.05,-2.04,s,-3.05,2.3,s),t.push(-3.05,2.3,s,3.05,2.3,s),t.push(3.05,2.3,s,3.05,-2.04,s);let i=new e.BufferGeometry;i.setAttribute(`position`,new e.Float32BufferAttribute(t,3)),this.caseRoom=new e.LineSegments(i,new e.LineBasicMaterial({transparent:!0,opacity:.17,depthWrite:!1,toneMapped:!1})),this.caseRoom.position.x=8,this.caseRoom.name=`case-room`,this.scene.add(this.caseRoom)}requestModel(e,t){!this.modelSlots||this.requestedModels.has(e)||(this.requestedModels.add(e),this.modelSlots.request(e,t,i=>{this.renderer?.domElement.setAttribute(`data-model-`+e,i),this.render()}))}requestOperatorModel(){this.world&&this.requestModel(`os01-bust`,[this.world.operator,...this.exhibits?.operators??[]])}monitorTone(){let t=Qt[this.stages.projects[this.currentProject]?.slug??``]??`#a9d9f3`;this.world?.selectMonitorTone(this.currentProject,t),this.space?.setExhibitTone(t),this.caseRoom?.material.color.set(t)}stage(e,t,i=!1){this.portfolioHero&&e===`boot`&&(e=`core`),this.portfolioHero&&e===`projects`&&this.rally.setArena(),e!==`projects`&&this.currentStage===`projects`&&this.previews.cancelPending(),this.mediaVersion++;let s=this.currentStage,o=this.currentProject;this.currentStage=e,this.currentProject=t,this.animateExhibit=this.singleExhibit&&!i,this.ready&&this.world&&(e===`projects`?(this.monitorTone(),(this.portfolioHero||this.singleExhibit)&&(this.requestModel(`gallery-monitor-shell`,this.world.plates.map(r=>r.shell)),this.requestModel(`gallery-folio`,this.world.plates.map(r=>r.folio)))):this.portfolioHero&&this.stages.chapter()===`home`&&(this.requestModel(`home-core-body`,[this.world.coreBody]),this.requestModel(`home-core-rotor`,[this.world.coreRotor])),this.zone.runOutsideAngular(()=>{this.cameraTimeline?.kill(),this.renderer.domElement.dataset.sceneStage=`transition`,this.skipMediaMotion=!1;let r=e===`projects`,n=!this.portfolioHero&&e===`core`;this.world.identityLighting(n),this.world.mascot.root.visible=n,r?this.world.gallery.visible=!0:this.world.core.visible=!this.puzzle;let a=this.framing===`mobile`,c=this.framing===`portrait-tablet`,p=this.framing===`tablet`||c,d=r&&s===e,h=this.portfolioHero,l=h&&this.viewportSize.width>=1e3,m=d&&t!==o,v=this.world.plates.length,E=(t-o+v)%v<=v/2?1:-1,b=this.reduced||i||e===`boot`||this.singleExhibit?0:this.portfolioHero?m?.27:0:d?.24:s===e?.65:1.1,f=l?Jt:c?1.6:p?2.55:3.05,w=Math.max(0,t-1)*(f-1.5),z=this.singleExhibit?.55:0,x=a||h?8:8+t*f;this.stages.transitioning.set(b>0),this.cameraTimeline=this.animation.timeline({defaults:{duration:b,ease:e===`core`||d?`power3.out`:`power3.inOut`},onUpdate:()=>{this.reduced&&this.render()},onComplete:()=>{this.world&&(h&&this.world.plates.forEach((u,H)=>{u.group.visible=H===t||l&&H===(t+1)%v}),this.world.gallery.visible=r,this.world.core.visible=!r&&!this.puzzle,this.world.mascot.root.visible=n,this.world.identityContact.visible=n&&(this.currentMode===`beauty`||this.currentMode===`chrome`),this.world.contact.visible=this.world.core.visible&&(this.currentMode===`beauty`||this.currentMode===`chrome`)),this.stages.transitioning.set(!1),this.renderer&&(this.renderer.domElement.dataset.sceneStage=e,this.renderer.domElement.dataset.sceneProject=String(t)),this.render()}}),this.cameraTimeline.to(this.pose,{x:r?l?x-this.galleryOffset()+.45:this.singleExhibit?x+.32:a?8:c?6.75+t*.9:6.4+t*1.65+w-z:c?.5:0,y:e===`boot`?2.2:r?1.05:a?.8:1.15,z:this.singleExhibit?a?7.8:7.2:e===`boot`?12:a?r?10:11:p?11.8:r?l?this.galleryDistance():10+t*.15:8.8,tx:r?l?x-this.galleryOffset():this.singleExhibit?x:a?8:c?7.2+t*.9:7.35+t*1.5+w-z:c?.5:0,ty:r?l?-.28:this.singleExhibit?a?1.3:-.45:a?.5:.12:-.1,objectY:a?-1.18:p?.7:-.27,scale:a?.47:c?.43:p?.53:.62,identityTurn:e===`core`?.035:-.05},0),this.world.plates.forEach((u,H)=>{let V=l&&t===v-1&&H===0?1:H-t,S=V===0,W=l&&V===1,B=h&&m&&b>0;if(B&&!u.group.visible&&(S||W)){let O=S?E:1;u.group.position.set(8+O*(S?3.45:f+2),-.92,-3.4),u.group.rotation.y=O*-.37,u.group.scale.setScalar(S?.74:.67)}let j=h?S?.96:.73:a?Math.min(.78,(this.host.clientWidth-56)/this.host.clientHeight*2*Math.tan(22*Math.PI/180)*10/4.5):c?S?this.singleExhibit?.64:.5:.3:p?S?.76:.46:S?.98:.62;this.cameraTimeline.to(u.group.position,{x:h?S?8:W?8+f-.43:8-E*5.8:a?8+V*.35:8+H*f,y:a&&!h?this.host.clientHeight<740?1.3:1.65:-2.17+1.95*j,z:S?0:l?-3.15:-1.85},0).to(u.group.rotation,{y:S?l?-.105:this.singleExhibit?-.12:-.035:V>0?-.29:.18},0).to(u,{focus:S?1:0},0).to(u.group.scale,{x:j,y:j,z:j},0),u.group.visible=h?S||W||B&&u.group.visible:!a&&!this.singleExhibit||S}),(this.hidden||!this.exhibitOnScreen)&&this.cameraTimeline.pause(),b||this.skipTransition(),r&&this.preparePreview(t)}))}skipTransition(){this.skipMediaMotion=!0,this.cameraTimeline?.progress(1),this.previewTweens.forEach(e=>e.progress(1)),this.exhibitTween?.progress(1),this.elemental?.finishEntrance(),this.elementalExit?.progress(1),this.stages.transitioning.set(!1),this.render()}retryPreview(){this.currentStage===`projects`&&this.preparePreview(this.currentProject)}preparePreview(e){let t=this.stages.projects[e]?.id;if(t===void 0||!this.world)return;if(this.singleExhibit&&!y(t)){this.previews.cancelPending(),this.openExhibit(e);return}let i=++this.mediaVersion;this.previews.load(this.T,t,this.framing===`mobile`).then(s=>{if(!s||this.disposed||!this.ready||i!==this.mediaVersion||!this.world)return;let o=y(t);if(!o)return;let r=this.world.plates[e];if(this.singleExhibit){r.image.material.map!==s&&this.world.setScreenshot(e,s,o.width/o.height),r.image.material.opacity=1,this.openExhibit(e);return}if(this.portfolioHero){this.previewTweens.get(e)?.kill(),r.image.material.map!==s&&this.world.setScreenshot(e,s,o.width/o.height),r.image.material.opacity=1,r.reveal.value=1,this.render();return}r.image.material.map!==s&&(this.previewTweens.get(e)?.kill(),r.image.material.opacity=0,this.world.setScreenshot(e,s,o.width/o.height),this.zone.runOutsideAngular(()=>{let n=this.animation.to(r.image.material,{opacity:1,duration:this.reduced||this.skipMediaMotion?0:.16,ease:`power2.out`,onUpdate:()=>{this.reduced&&this.render()},onComplete:()=>this.render()});(this.hidden||!this.exhibitOnScreen)&&n.pause(),this.previewTweens.set(e,n)})),this.render()}).catch(()=>{this.disposed||this.render()}).then(()=>this.prepareNeighborPreview(e,i))}async prepareNeighborPreview(e,t){let i=this.world;if(!i||!this.portfolioHero||this.viewportSize.width<1e3||this.currentStage!==`projects`||t!==this.mediaVersion)return;let s=(e+1)%i.plates.length,o=this.stages.projects[s].id,r=y(o),n=i.plates[s];if(!(!r||n.image.material.map))try{let a=await this.previews.load(this.T,o,!1);if(!a||!this.ready||this.world!==i||this.currentStage!==`projects`||t!==this.mediaVersion)return;i.setScreenshot(s,a,r.width/r.height),n.image.material.opacity=1,this.render()}catch{}}openExhibit(e){if(this.shownExhibit===e){this.render();return}this.shownExhibit=e,this.exhibitTween?.kill(),this.exhibitProgress.value=this.animateExhibit&&!this.reduced?0:1,this.renderer.domElement.dataset.exhibitOpening=String(this.exhibitProgress.value<1),this.render(),this.exhibitProgress.value!==1&&this.zone.runOutsideAngular(()=>{this.exhibitTween=this.animation.to(this.exhibitProgress,{value:1,duration:.38,ease:`power3.out`,onUpdate:this.render,onComplete:()=>{this.renderer.domElement.dataset.exhibitOpening=`false`}}),(this.hidden||!this.exhibitOnScreen)&&this.exhibitTween.pause()})}mode(e){this.currentMode=e,this.world?.setMode(e),this.world&&this.currentStage===`projects`&&(this.world.contact.visible=!1),this.world&&(this.world.identityContact.visible=!this.portfolioHero&&this.currentStage===`core`&&(e===`beauty`||e===`chrome`)),this.render()}energize(){!this.ready||this.disposed||(this.audio.tone(`select`),this.pulseCore())}pulseCore(){this.pulseTween?.kill(),!this.reduced&&this.zone.runOutsideAngular(()=>{this.pulse.value=.14,this.pulseTween=this.animation.to(this.pulse,{value:0,duration:1.2,ease:`power3.out`})})}resize(){if(!this.host||!this.renderer||!this.camera)return;if(this.studio){let{host:s,camera:o}=this.studio,r=Math.max(1,s.clientWidth),n=Math.max(1,s.clientHeight);this.renderer.setSize(r,n),o.aspect=r/n,o.updateProjectionMatrix(),this.render();return}let e=Math.max(this.host.clientWidth,1),t=Math.max(this.host.clientHeight,1);if(e===this.viewportSize.width&&t===this.viewportSize.height)return;this.viewportSize={width:e,height:t},this.atmosphere.reset();let i=this.framing;this.framing=e<700?`mobile`:e<1100?e/t<.85?`portrait-tablet`:`tablet`:`desktop`,this.coreYOffset=e<700?Math.min(1.8,Math.max(0,(740-t)/75)):0,this.renderer.setPixelRatio(this.performance.constrain(e)),this.renderer.shadowMap.enabled=!this.portfolioHero&&e>=700&&this.performance.pixelRatio>.75,this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e<700?44:38,this.camera.updateProjectionMatrix(),this.ready&&((i!==this.framing||this.currentStage===`projects`)&&this.stage(this.currentStage,this.currentProject),this.render())}setChapterPositions(e,t,i,s=j(0)){this.chapterPositions=e,this.chapterAnchors=t,this.puzzleLayout=i,this.shot=s,this.ready&&!this.reduced&&this.stages.chapter()===`home`&&e[1]>.24&&e[1]<.92&&this.previews.state(this.stages.projects[this.currentProject].id)===`idle`&&this.preparePreview(this.currentProject),this.reduced&&this.render()}selectSkillBranch(e){e!==this.selectedSkillBranch&&!this.reduced&&(this.cubePulse=.9),this.selectedSkillBranch=e,this.exhibits?.selectBranch(e,this.skillPathAccent),this.renderer&&(this.renderer.domElement.dataset.skillBranch=String(e)),this.render()}galleryDistance(){return Math.max(7.65,12.25/this.camera.aspect)}galleryOffset(){return this.galleryDistance()*this.camera.aspect*.105}frameJourney(){let e=this.world,t=this.camera,i=this.viewportSize.width>=1e3,s=this.viewportSize.width<=850&&this.viewportSize.width<this.viewportSize.height,o=q.indexOf(this.stages.chapter());if((this.exhibits||this.puzzle)&&this.chapterAnchors?.length===4){this.frameExhibits(o);return}let r=this.chapterPositions[1],n=this.chapterPositions[2],a=!this.reduced&&Number.isFinite(r)&&Number.isFinite(n),c=this.T.MathUtils.smoothstep,p=a?1-c(r,.09,.73):+(o>=1),d=a?n<=.07:o>=2,h=i?p:0,l=this.T.MathUtils.lerp,m=8-this.galleryOffset();t.position.set(l(-.18,m+.2,h),l(.58,.72,h),l(s?9.6:8.6,this.galleryDistance(),h)+Math.sin(Math.PI*h)*.65),t.lookAt(l(0,m,h),l(.02,-.37,h),0);let v=s?.52:t.aspect*1.38;e.core.position.set(v-.94*p,(s?-1.15:.12)+p*1.65,-p*2.6),e.core.scale.setScalar((s?.5:.88)*(1-.31*p)),e.core.rotation.y+=-.38-.22*p,e.rotor.rotation.z=-.65,e.core.visible=!this.puzzle&&p<.99,e.gallery.visible=h>.001&&!d,e.contact.visible=e.core.visible&&(this.currentMode===`beauty`||this.currentMode===`chrome`),e.contact.position.set(e.core.position.x,e.core.position.y-2.08*e.core.scale.x,e.core.position.z),e.contact.scale.copy(e.core.scale)}frameExhibits(e){let t=this.camera,i=this.world,s=this.chapterAnchors,{width:o,height:r}=this.viewportSize,n=o<820&&o<r,a=this.T.MathUtils.lerp,c=this.T.MathUtils.smoothstep,p=!this.reduced&&!!this.puzzleLayout,d=p?this.shot.approach:0,h=p?this.shot.transit*(n?.55:1):0,l=p&&!n,m=l?this.shot.exhibits:0;for(let R=1;!l&&R<ve.length;R++){if(R===1&&p){m+=d;continue}if(this.reduced||n){m+=+(e>=R);continue}if(R===4&&this.puzzleLayout?.maxScroll!==void 0){let{scroll:k,maxScroll:T,sections:F,header:G}=this.puzzleLayout,M=Math.min(F[4]-G,T),C=F[3]-G,X=Math.min(r*.38,Math.max(1,M-C)*.42);m+=c(k,M-X,M);continue}let D=this.chapterPositions[R],y=R>1&&this.puzzleLayout?Math.max(.09,this.puzzleLayout.header/r):.09;m+=1-c(D,y,R===1?.73:.64)}let v=Math.floor(m),g=Math.min(v+1,ve.length-1),E=m-v,b=Math.tan(this.T.MathUtils.degToRad(t.fov/2)),f=R=>{if(R===0)return{x:0,y:.02,distance:n?9.6:8.6};let D=s[R-1],y=[0,4.95,3.6,4.7,2.65][R],k=[0,3.45,4,n?8:6.55,3.3][R],T=R===1&&!n?.94:R===4?.62:.81,F=Math.max(y/Math.max(1,D.width*.9),k/Math.max(1,D.height*T)),G=Math.max(5,F*r/(2*b)),M=(D.left+D.width/2-o/2)/r*2*b*G;return{x:ve[R]-M,y:R===1?-.47:0,distance:G}},w=f(this.puzzle?Math.min(v,1):v),z=v===g||this.puzzle&&v>=1?w:f(g),x=a(w.x,z.x,E),u=a(w.y,z.y,E),H=a(w.distance,z.distance,E)+h*.42;t.position.set(x+a(-.18,.21,Math.min(1,m))-h*.16,u+.56+h*.075,H),t.lookAt(x-h*.06,u-h*.04,0),h>.001&&t.rotateZ(h*-.007);let V=Math.min(m,1),S=(n?-1.15:.12)+V*1.65;i.core.position.set((n?.52:t.aspect*1.38)-V*.94,S,-V*2.6),i.core.scale.setScalar((n?.5:.88)*(1-.31*V)),i.core.rotation.y+=-.38-.22*V,i.rotor.rotation.z=-.65,i.core.visible=!this.puzzle&&m<.99,i.contact.visible=i.core.visible&&(this.currentMode===`beauty`||this.currentMode===`chrome`),i.contact.position.set(i.core.position.x,S-2.08*i.core.scale.x,i.core.position.z),i.contact.scale.copy(i.core.scale);let W=(R,D)=>(.5-(R.top+R.height*.47)/r)*2*b*D,B=R=>{let D=s[R-1];return D.bottom>12&&D.top<r&&Math.abs(m-R)<1},j=p&&d>0&&d<1,O=p?this.shot.galleryExit:0;i.gallery.visible=O<1&&(j||B(1));let N=j&&!n?Math.sin(Math.PI*d)*.12:0;i.gallery.position.x=O*4.6,i.gallery.position.y=W(s[0],H)+N*H*b*2-O*1.1,i.gallery.position.z=j?-2.9*(1-d):-O*4.8,this.puzzle&&this.puzzleLayout&&(i.mascot.root.visible=!1,this.framePuzzle(e,m,p)),this.exhibits?.objects.forEach((R,D)=>{let y=D+2;R.visible=B(y),R.visible&&(R.position.y=W(s[D+1],H),D===1&&(R.position.y-=s[D+1].height/r*b*H*.035),D===0&&(R.rotation.y=(y-m)*-.36),D===1&&R.rotation.set(0,-.18+(y-m)*.24,0),D===2&&(R.rotation.z=(y-m)*-.36))});let L=this.exhibits;e===2&&L?.aboutDisplay.parent.visible&&(this.requestOperatorModel(),this.requestModel(`about-display`,[L.aboutDisplay])),e===3&&L?.skillsBackplate.parent.visible&&(this.requestOperatorModel(),this.requestModel(`skills-backplate`,[L.skillsBackplate])),e===4&&L?.beacon.parent.visible&&this.requestModel(`contact-beacon`,[L.beacon]);let U=this.renderer.domElement.dataset;U.sceneChapter!==q[e]&&(U.sceneChapter=q[e])}framePuzzle(e,t,i){let s=this.puzzleLayout,o=this.camera,{width:r,height:n}=this.viewportSize,a=this.puzzle,c=e===0&&this.rally.mobile(),{assembly:p,solve:d,aboutReveal:h}=j$1(s,e,this.reduced),l=this.puzzleFrame;if(l?.layout===s&&l.active===e&&l.reduced===this.reduced&&l.width===r&&l.height===n&&l.position===t&&l.compactDrive===c&&l.assembly===p&&l.solve===d&&l.aboutReveal===h&&l.shot===this.shot)return;this.puzzleFrame={layout:s,active:e,reduced:this.reduced,width:r,height:n,position:t,compactDrive:c,assembly:p,solve:d,aboutReveal:h,shot:this.shot};let[m,v,g,E]=this.chapterAnchors,b=r<820,f=this.T.MathUtils.lerp,w=(I,q,Y,Q,K=.9)=>({x:I.left+I.width/2,y:I.top+I.height/2+Y,size:Math.min(I.width*q,I.height*K,Q)}),z=this.T.MathUtils.clamp(m.width*.15,52,128),x=[w(s.hero,b?.9:.97,b?0:-9,r<700?260:510),{x:m.left+m.width*(r<1e3?.84:.16),y:m.bottom-z*(r<1e3?.87:.68),size:z},w(v,b?.25:.26,b?0:76,b?125:172),w(g,b?.24:.22,0,b?70:112,.38),w(E,b?.45:.55,0,b?128:228,b?.79:.86)];x[2].x=v.left+v.width*(b?.29:.65),x[3].y=g.top+g.height*.485;let u=this.T.MathUtils.smoothstep;!this.reduced&&(t>=3||d>4)&&(t=3+u(d,3.78,5));let H=Math.floor(t),V=Math.min(H+1,4),S=t-H,W=x[H],B=x[V],j=f(W.x,B.x,S),O=f(W.y,B.y,S),N=f(W.size,B.size,S);c&&(j=r*.76,O=s.header+126,N=Math.min(112,r*.27));let L=i&&H===0?Math.sin(Math.PI*S):0,U=Math.sin(Math.PI*S);if(O+=U*n*(H===3?.04:.075),N*=1-U*.18,t>0){let I=u(t,0,.45);j=f(j,this.T.MathUtils.clamp(j,N*.54,r-N*.54),I),O=f(O,this.T.MathUtils.clamp(O,s.header+N*.54,n-N*.54),I)}a.root.visible=N>=2,a.pose(p,d);let R=(1-u(t,0,.52))*(1-u(L,0,.42)),D=u(t,1.72,2)*(1-u(t,2,2.28))*(1-u(h,0,.44))*.28,y=1-u(Math.abs(d-Math.round(d)),0,.07);a.setChapter(t,(R+D)*y);let k=[-.63,-.46,-.4-.36*h,-.57,-.54],T=[.38,.38,.32+.1*h,.46,.34],F=[0,0,.045,0,-.095];a.root.rotation.set(f(T[H],T[V],S),f(k[H],k[V],S)-L*.67,f(F[H],F[V],S)+L*.17),o.updateMatrixWorld();let G=this.puzzleRay.set(j/r*2-1,1-O/n*2,.5).unproject(o).sub(o.position),M=o.position.z+L*2.1;a.root.position.copy(o.position).addScaledVector(G,-M/G.z);let C=u(t,2.72,3)*(1-u(t,3.05,3.38));this.puzzleReactorWeight=i?u(t,3.46,4):0,this.puzzleMapPose=a.root.visible&&(C>0||this.puzzleReactorWeight>0)?{x:j,y:O,weight:C,base:a.root.position.clone()}:void 0;let X=2*M*Math.tan(this.T.MathUtils.degToRad(o.fov/2))/n;a.root.scale.setScalar(N*X/f(4.87,4.5,p));let _=this.renderer.domElement.dataset;a.root.visible&&!_.puzzleReady&&(_.puzzleReady=`true`);let ee=p.toFixed(5),A=d.toFixed(5);_.puzzleAssembly!==ee&&(_.puzzleAssembly=ee),_.puzzleTurns!==A&&(_.puzzleTurns=A),this.refreshRallyArena()}refreshRallyArena(){if(!this.puzzle?.root.visible||!this.camera||this.studio||this.stages.stage()!==`core`||this.stages.chapter()!==`home`){this.rally.setArena();return}let e=this.host?.closest(`.experience`)?.querySelector(`.journey-hero`);if(!e){this.rally.setArena();return}let{width:t,height:i}=this.viewportSize,s=e.ownerDocument,o=Math.max(12,(s.querySelector(`app-navbar`)?.getBoundingClientRect().bottom??0)+10),r=Math.min(i,e.getBoundingClientRect().bottom)-12;if(t<=600&&r-o>250){let a=Math.min(48,t/8,(r-o)/7);this.rally.setArena({left:a*1.4,right:t-a*1.4,top:o+84+a,bottom:r-72-a,scale:a},!0);return}let n=[...e.querySelectorAll(`.intro-copy, .hero-footer`),...s.querySelectorAll(`app-ping`)].map(a=>a.getBoundingClientRect()).filter(a=>a.width>0&&a.height>0);this.rally.setArena(H({left:12,right:t-12,top:o,bottom:r},[...n,this.puzzle.screenBounds(this.camera,t,i)],t<700))}setRallyMode(e){e&&this.refreshRallyArena(),this.updateLoop(),this.render()}frameRally(e){let t=this.rally.drive;if(!t||this.stages.chapter()!==`home`){this.rallyCar&&(this.rallyCar.root.visible=!1);return}this.rallyCar||(this.rallyCar=new Ut$1(this.T,this.host.ownerDocument,this.assets),this.scene.add(this.rallyCar.root)),this.rally.step(e),this.rallyCar.root.visible=!0;let{width:i,height:s}=this.viewportSize;this.rallyCar.place(t,this.camera,i,s,this.elapsed,e,this.reduced)}render=e=>{if(this.disposed||this.hidden||!this.ready||!this.renderer||!this.scene||!this.camera||!this.world)return;let t=e===void 0||!this.lastTime?0:(e-this.lastTime)/1e3,i=Math.min(t,.06);if(e!==void 0&&(this.lastTime=e),this.elapsed+=i,this.studio){let{host:w,scene:z,camera:x,yaw:u,pitch:H,zoom:V}=this.studio,S=this.world.mascot.root,W={width:Math.max(1,w.clientWidth),height:Math.max(1,w.clientHeight)};this.profiler?.begin(t),this.elemental?this.elemental.draw(this.renderer,W,0,!0,this.scene.environment,this.studio):(S.rotation.set(H,u,0),x.position.set(0,.16,Math.max(7,5.5/x.aspect)/V),x.lookAt(0,.02,0),this.renderer.render(z,x)),this.profiler?.end();return}if(this.elemental&&this.currentStage===`core`){this.profiler?.begin(t),this.elemental.draw(this.renderer,this.viewportSize,i,this.reduced,this.scene.environment),this.profiler?.end();return}let s=1-Math.exp(-4*i);this.parallax.x+=(this.pointer.x-this.parallax.x)*s,this.parallax.y+=(this.pointer.y-this.parallax.y)*s;let o=this.reduced?0:.12;this.camera.position.set(this.pose.x+this.parallax.x*o,this.pose.y-this.parallax.y*o,this.pose.z),this.camera.lookAt(this.pose.tx,this.pose.ty,this.pose.tz);let r=this.framing===`mobile`,n=r?-.8:this.framing===`portrait-tablet`?1.65:this.framing===`tablet`?1.9:2.85,a=this.pose.objectY-this.coreYOffset;this.world.core.position.set(n,a,0),this.world.core.scale.setScalar(this.pose.scale),this.world.contact.position.x=n,this.world.contact.position.y=a-2.14*this.pose.scale,this.world.contact.scale.setScalar(this.pose.scale),this.world.rotor.rotation.y=-.22+(this.reduced?0:Math.sin(this.elapsed*.18)*.09),this.world.core.rotation.y=(this.reduced?.035:Math.sin(this.elapsed*.14)*.055)+this.pulse.value;let c=this.framing===`portrait-tablet`,p=this.viewportSize.height<740,d=r?p?.4:.53:c?.52:this.framing===`tablet`?.62:.7,h=this.world.mascot.root,l=r||this.framing===`desktop`?a-2.14*this.pose.scale+1.59*d:c?-1:-.85;if(h.position.set(r?1:c?1.5:this.framing===`tablet`?.65:.78,l,r?0:.5),h.scale.setScalar(d),h.rotation.y=this.pose.identityTurn+(this.reduced?0:Math.sin(this.elapsed*.16)*.012+this.parallax.x*.02),this.world.identityContact.position.set(h.position.x,h.position.y-1.59*d,h.position.z),this.world.identityContact.scale.setScalar(d),this.portfolioHero&&this.currentStage===`core`){let w=this.stages.chapter()===`home`;if(this.world.contact.visible=!this.puzzle&&!w&&(this.currentMode===`beauty`||this.currentMode===`chrome`),w){let{width:z,height:x}=this.viewportSize,u=z<=850&&z<x;this.world.core.position.set(u?0:this.camera.aspect*1.4,u?1.38:0,0),this.world.core.scale.setScalar(u?.44:.7)}}if(this.portfolioHero&&this.currentStage!==`boot`&&this.frameJourney(),this.singleExhibit&&this.currentStage===`projects`){let w=this.world.plates[this.currentProject],z=1-this.exhibitProgress.value,x=Math.tan(this.T.MathUtils.degToRad(this.camera.fov/2)),u=Math.max(4.15,5.65/this.camera.aspect)/(2*x);this.camera.position.set(8.03,.38,u),this.camera.lookAt(8,-.22,0),w.group.position.set(8+z*.32,z*-.12,z*-.9),w.group.rotation.set(-z*.1,-.105-z*.37,z*-.025),w.group.scale.setScalar(1)}this.world.floor.position.y=this.currentStage===`core`?Math.min(this.world.contact.position.y,this.world.identityContact.position.y)-.025:-2.17,this.world.floor.visible=!this.portfolioHero&&!this.singleExhibit,this.world.plates.forEach((w,z)=>{w.hover+=((this.hoverTarget===z?1:0)-w.hover)*(this.reduced?1:s),w.light.intensity=w.focus*.92+w.hover*.28,this.portfolioHero||(w.image.position.x=this.reduced?0:this.parallax.x*w.hover*.025,w.image.position.z=.08+w.hover*.018)});let m=this.rally.active(),v=!this.reduced;if(this.portfolioHero&&this.world.cinematicLighting(v?this.shot:void 0),this.atmosphere.advance(i),this.portfolioHero&&this.puzzleLayout&&v){let w=this.currentStage===`projects`&&this.hoverTarget>=0,z=this.finePointer?.matches?m||this.pointerOnControl||this.press?.3:w?.55:1:0;this.atmosphere.advanceTilt(this.shot.skyTravel,i,z);let{yaw:x,pitch:u}=this.atmosphere;if(x||u){let H=1.4+.45*this.T.MathUtils.smoothstep(this.shot.skyTravel,.45,1);this.camera.translateX(-x*H),this.camera.translateY(u*H),this.camera.rotateY(x),this.camera.rotateX(u),this.camera.updateMatrixWorld()}}this.portfolioHero&&(this.rally.drive||this.rallyCar)&&this.frameRally(i);let g=this.rallyCar?.root.visible?this.rallyCar.wake:void 0;this.projectPulse=Math.max(0,this.projectPulse-i*1.65),this.cubePulse=this.reduced?0:Math.max(0,this.cubePulse-i*1.35);let E=this.journeyField,b=v&&this.puzzleLayout&&this.chapterAnchors&&this.puzzle?.root.visible&&!this.cubeInspection&&this.inspectionWeight===0?Math.min(1,(.32+E.energy*.32)*(.68+E.flow*.32)+(m?0:(this.ripple?.w??0)*.68)):0;this.profiler?.begin(t),this.space?.prepare(this.renderer,this.viewportSize.width,this.viewportSize.height,v,this.shot,this.performance.pixelRatio<1,i,this.elapsed,this.atmosphere,this.projectPulse,this.selectedSkillBranch,this.cubePulse,g,b,m||!!this.cubeInspection||this.inspectionWeight>0);let f=!1;if(this.puzzle){let w=this.puzzleMapPose;if(w&&this.puzzle.root.visible&&this.puzzleRay){let{width:S,height:W}=this.viewportSize;this.camera.updateMatrixWorld();let B=this.puzzleReactorWeight,{x:j,y:O,weight:N}=w;if(B>0&&this.space){this.reactorCenter??=new this.T.Vector2,this.space.reactorCenter(this.reactorCenter,S,W);let U=this.reactorCenter;j=this.T.MathUtils.lerp(j,U.x,B),O=this.T.MathUtils.lerp(O,U.y,B),N=Math.max(N,B)}let L=this.puzzleRay.set(j/S*2-1,1-O/W*2,.5).unproject(this.camera).sub(this.camera.position);Math.abs(L.z)>1e-5?(L.multiplyScalar((w.base.z-this.camera.position.z)/L.z).add(this.camera.position),this.puzzle.root.position.lerpVectors(w.base,L,N)):this.puzzle.root.position.copy(w.base)}let z=this.renderer.domElement,x=this.viewportSize.width>=850&&(this.performance.pixelRatio>=1||this.stages.chapter()===`home`);f=this.frameCubeInspection(i),this.frameRipple(f||m);let u=this.T.MathUtils.smoothstep(this.shot.skyTravel,3.55,4);this.puzzle.pulse(Math.max(this.cubePulse,b*u*(.12-.05*Math.cos(this.elapsed*2.55)))),this.puzzle.tuneJourneySurface(this.shot.skyTravel,this.journeyField),this.puzzle.animate(i,x,this.reduced,this.atmosphere,this.camera,z.width,z.height,this.journeyField.flow),b>0&&!f&&this.frameEnergyTransfer(this.puzzle.root,i,b);let H=this.particles?.frame(this.puzzle.root,this.shot.skyTravel,this.selectedSkillBranch,this.atmosphere,this.elapsed,this.viewportSize.width,this.viewportSize.height,this.renderer.getPixelRatio(),v&&!f,this.journeyField,Math.max(this.projectPulse,this.cubePulse),i,g,f?0:b)??0,V=String(H);z.dataset.journeyParticles!==V&&(z.dataset.journeyParticles=V)}if(this.renderer.render(this.scene,this.camera),f&&this.inspectionFrame&&this.puzzle){let{position:w,rotation:z,scale:x}=this.inspectionFrame;this.puzzle.root.position.copy(w),this.puzzle.root.quaternion.copy(z),this.puzzle.root.scale.setScalar(x)}this.profiler?.end(),this.projectLabels(),t>0&&this.performance.sample(t)&&(this.renderer.setPixelRatio(this.performance.pixelRatio),this.performance.pixelRatio<=.75&&(this.renderer.shadowMap.enabled=!1))};frameEnergyTransfer(e,t,i){let s=this.particles,o=this.camera,r=this.energyAnchor,n=this.projected,{width:a,height:c}=this.viewportSize,p=a/c;o.updateMatrixWorld(),e.getWorldPosition(n).project(o),s.source.set((n.x+1)*.5*p,(n.y+1)*.5);let d=this.shot.skyTravel,h=Math.min(3,Math.floor(d)),l=this.T.MathUtils.smoothstep(d,h,h+1);for(let m=h;m<=h+1;m++){let v=m===h?1-l:l,g=0,E=0;if(v>0){if(m===0){let f=Math.min(.33,p*.39),w=this.elapsed*.48,z=Math.cos(w),x=Math.sin(w);r.set((s.source.x+z*f)*c,(1-s.source.y-x*f*.8)*c),g=-x*f*.7,E=z*f*.53}else if(m===1){let f=this.world.plates[this.currentProject];f&&this.world.gallery.visible?(f.group.localToWorld(n.set(-1.35,-1.17*f.surface.scale.y,.18)).project(o),r.set((n.x+1)*a/2,(1-n.y)*c/2),E=-.064,f.light.intensity+=v*i*f.focus*(.66-.29*Math.cos(this.elapsed*2.55))):v=0}else if(m===2)this.space.planetRingAnchor(r,a,c),v*=this.shot.planetVisibility,g=Math.min(.12,p*.18),E=-.085;else if(m===3){let f=this.chapterAnchors[2],w=this.selectedSkillBranch;r.set(f.left+f.width*(Wt[w]??Wt[0]),f.top+f.height*(Bt[w]??Bt[0])),E=w<2?-.055:.055}else this.space.reactorCenter(r,a,c),r.y+=Math.min(a,c)*.078,v*=this.shot.beacon,g=-Math.min(.34,p*.48),E=-.095;let b=Math.min(r.x/a,1-r.x/a,r.y/c,1-r.y/c);v*=this.T.MathUtils.smoothstep(b,-.04,.07)}s.route(m,v,r.x/c,1-r.y/c,g,E,t,m===1||m===3)}}inspectCube(e){e&&this.cubeInspection&&e.pieces!==this.cubeInspection.pieces&&!this.reduced&&(this.cubePulse=Math.max(this.cubePulse,.37)),this.cubeInspection=e,e&&(this.inspectionLook=e),this.reduced&&this.render()}pulsePlanet(e){!this.ready||this.reduced||this.hidden||this.studio||this.cubeInspection||this.inspectionWeight>0||this.rally.active()||this.stages.chapter()!==`about`||this.shot.planetVisibility<.8||(this.space?.pulsePlanet(this.elapsed,e),this.render())}setJourneyField(e$1){if(!e$1||e$1===this.journeyField)return;let t=e$1.burst>0&&e$1.burst!==this.journeyField.burst;if(this.journeyField=e$1,this.renderer&&(this.renderer.domElement.dataset.journeyField=String(e$1.force)),e$1===e&&(this.cubePulse=0),t&&!this.reduced&&this.puzzle?.root.visible&&this.projected&&this.camera){let i=this.projected.copy(this.puzzle.root.position).project(this.camera);this.atmosphere.touch((i.x+1)/2,(i.y+1)/2),this.cubePulse=1}this.reduced&&this.render()}frameCubeInspection(e){let t=this.puzzle,i=this.puzzleFrame,s=this.camera;if(!i||!t.root.visible)return!1;let o=this.cubeInspection;if(!o&&this.inspectionWeight===0)return!1;let r=this.T,n=+!!o;this.inspectionWeight=this.reduced?n:r.MathUtils.damp(this.inspectionWeight,n,13,e),!o&&this.inspectionWeight<.002&&(this.inspectionWeight=0),t.pose(o?1:i.assembly,i.solve,o?.pieces);let a=this.inspectionWeight;if(!a)return this.inspectionLook=void 0,!1;let c=t.root,{width:p,height:d}=this.viewportSize,h=this.inspectionFrame??={position:new r.Vector3,rotation:new r.Quaternion,scale:1,target:new r.Vector3,orientation:new r.Quaternion,angles:new r.Euler};h.position.copy(c.position),h.rotation.copy(c.quaternion),h.scale=c.scale.x,s.updateMatrixWorld();let l=s.position.distanceTo(c.position);h.target.set(0,p<761?.29:.27,.5).unproject(s).sub(s.position).normalize().multiplyScalar(l).add(s.position),c.position.lerp(h.target,a);let m=Math.min(p*.79,d*.48),v=2*l*Math.tan(r.MathUtils.degToRad(s.fov/2))*m/(d*4.5)*(this.inspectionLook?.zoom??1);return c.scale.setScalar(r.MathUtils.lerp(h.scale,v,a)),h.angles.set(this.inspectionLook?.pitch??.36,this.inspectionLook?.yaw??-.53,0),c.quaternion.slerp(h.orientation.setFromEuler(h.angles),a),!0}projectLabels(){if(!this.labels.length||!this.camera||!this.projected)return;let{width:e,height:t}=this.viewportSize;this.world?.plates.forEach((i,s)=>{let o=this.labels[s];if(!o)return;this.projected.copy(i.label),i.group.localToWorld(this.projected),this.projected.project(this.camera);let r=(this.projected.x+1)*e/2,n=(1-this.projected.y)*t/2,a=this.currentStage===`projects`&&s===this.currentProject&&i.group.visible&&this.projected.z<1&&r>(this.framing===`mobile`?90:e*.47)&&r<e-90&&n>160&&n<t-100;o.style.visibility=a?`visible`:`hidden`,o.style.transform=`translate3d(${r.toFixed(1)}px,${n.toFixed(1)}px,0) translate(-50%,-50%)`})}hitTest(e){if(this.singleExhibit||this.elemental||!this.host||!this.camera||!this.world||!this.raycaster)return-1;let t=this.portfolioHero?void 0:this.host.getBoundingClientRect(),i=(e.clientX-(t?.left??0))/(t?.width??this.viewportSize.width)*2-1,s=(e.clientY-(t?.top??0))/(t?.height??this.viewportSize.height)*2-1;if(this.raycaster.setFromCamera(new this.T.Vector2(i,-s),this.camera),this.currentStage===`projects`&&this.world.gallery.visible){let o=this.world.plates.filter(n=>n.group.visible).flatMap(n=>n.hitTargets),r=this.raycaster.intersectObjects(o,!1)[0];return r?r.object.userData.projectIndex:-1}return!this.puzzle&&this.currentStage===`core`&&this.stages.chapter()===`home`&&this.raycaster.intersectObjects([this.world.coreBody.procedural,this.world.coreRotor.procedural],!0).length?-2:-1}pointerMoved=e=>{if(!this.host)return;if(this.press&&Math.hypot(e.clientX-this.press.x,e.clientY-this.press.y)>8&&(this.press=void 0),!this.portfolioHero&&e.pointerType===`mouse`&&!this.reduced){let i=this.host.getBoundingClientRect();this.pointer.x=(e.clientX-i.left)/i.width*2-1,this.pointer.y=(e.clientY-i.top)/i.height*2-1}let t=this.hitTest(e);t!==-1&&t!==this.hoverTarget&&this.audio.tone(`hover`),this.hoverTarget=t,this.host.style.cursor=t!==-1?`pointer`:``,this.reduced&&this.render()};moveAtmosphere=e=>{let t=this.cubeTap;t&&t.id===e.pointerId&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>8&&(this.cubeTap=void 0);let{width:i,height:s}=this.viewportSize;if(!this.ready||this.hidden||this.reduced||this.studio||!this.finePointer?.matches||e.pointerType!==`mouse`||!i||!s||e.clientX<0||e.clientX>i||e.clientY<0||e.clientY>s||e.target instanceof Element&&e.target.closest(`dialog, [role="dialog"], [popover], app-ping`)){this.leaveAtmosphere();return}this.pointerOnControl=e.target instanceof Element&&!!e.target.closest(`a, button, input, summary, [role="button"]`),this.atmosphere.move(e.clientX/i,1-e.clientY/s,i/s,e.timeStamp)};leaveAtmosphere=()=>{this.atmosphere.leave()};startCubeTap=e=>{this.cubeTap=void 0,e.isPrimary&&e.button===0&&!this.rippleImpact&&this.cubeHit(e)&&(this.cubeTap={id:e.pointerId,x:e.clientX,y:e.clientY,time:e.timeStamp,scroll:window.scrollY})};finishCubeTap=e=>{let t=this.cubeTap;if(!t||t.id!==e.pointerId||(this.cubeTap=void 0,e.timeStamp-t.time>380||Math.abs(window.scrollY-t.scroll)>2||Math.hypot(e.clientX-t.x,e.clientY-t.y)>8||this.rippleImpact))return;let i=this.cubeHit(e);i&&(this.rippleImpact={local:i,time:this.elapsed,scroll:t.scroll})};cubeHit(e){let{width:t,height:i}=this.viewportSize,s=this.puzzle;if(!(!this.ready||!s?.root.visible||!this.camera||!this.raycaster||this.reduced||this.hidden||this.studio||this.cubeInspection||this.inspectionWeight>0||this.rally.active()||!t||!i||e.target instanceof Element&&e.target.closest(`a,button,input,select,textarea,summary,label,dialog,[role="dialog"],[popover],app-ping,[role="button"]`))&&!(this.currentStage===`projects`&&this.hitTest(e)>=0))return this.raycaster.setFromCamera(new this.T.Vector2(e.clientX/t*2-1,1-e.clientY/i*2),this.camera),s.hit(this.raycaster)}frameRipple(e){let t=this.rippleImpact;if(!t)return;let i=(this.elapsed-t.time)/.72;if(e||this.reduced||!this.puzzle?.root.visible||i>=1||Math.abs(window.scrollY-t.scroll)>2){this.clearRipple();return}this.camera.updateMatrixWorld();let s=this.puzzle.root.localToWorld(this.projected.copy(t.local)).project(this.camera),o=.008+.32*i*(2-i),r=Math.min(1,i*24)*(1-i)**2;this.ripple.set((s.x+1)/2,(s.y+1)/2,o,r)}clearRipple(){this.cubeTap=void 0,this.rippleImpact=void 0,this.ripple?.set(0,0,0,0)}pointerLeft=()=>{this.pointer.x=this.pointer.y=0,this.hoverTarget=-1,this.press=void 0,this.host&&(this.host.style.cursor=``),this.reduced&&this.render()};pointerDown=e=>{if(e.button!==0||e.isPrimary===!1)return;let t=this.hitTest(e);t!==-1&&(this.press={x:e.clientX,y:e.clientY,id:e.pointerId,time:e.timeStamp,target:t})};pointerPressed=e=>{let t=this.press;if(this.press=void 0,!t||t.id!==e.pointerId||e.timeStamp-t.time>750||Math.hypot(e.clientX-t.x,e.clientY-t.y)>8)return;let i=this.hitTest(e);i===t.target&&(i>=0?(this.audio.tone(`select`),this.zone.run(()=>{i===this.currentProject&&this.portfolioHero&&this.currentStage===`projects`?this.monitorFlight.openCase(this.stages.projects[i],this.stages.projectNavigationState()):this.stages.activateProject(i)})):i===-2&&this.energize())};visibilityChanged=()=>{this.hidden=document.hidden,this.hidden&&(this.clearRipple(),this.atmosphere.reset()),this.audio.visibility(this.hidden),this.updateLoop(),!this.hidden&&(this.reduced||this.singleExhibit||this.studio)&&this.render()};motionChanged=e=>{this.reduced=e.matches,this.reduced&&(this.clearRipple(),this.atmosphere.reset(),this.skipTransition(),this.pulseTween?.progress(1)),this.updateLoop(),this.render()};contextLost=e=>{e.preventDefault(),this.ready=!1,this.assets.fail(),this.releaseGraphics()};setExhibitOnScreen(e){e===this.exhibitOnScreen||this.disposed||(this.exhibitOnScreen=e,this.updateLoop())}updateLoop(){this.lastTime=0;let e=this.hidden||!this.exhibitOnScreen||!!this.studio;e?(this.atmosphere.reset(),this.cameraTimeline?.pause(),this.pulseTween?.pause(),this.previewTweens.forEach(i=>i.pause()),this.exhibitTween?.pause()):(this.cameraTimeline?.resume(),this.pulseTween?.resume(),this.previewTweens.forEach(i=>i.resume()),this.exhibitTween?.resume());let t=this.portfolioHero&&this.rally.active();this.renderer?.setAnimationLoop(e||this.reduced&&!t||this.singleExhibit?null:this.render)}useSingleExhibit(){this.singleExhibit=!0}usePortfolioHero(){this.portfolioHero=!0}openStudio(e){if(!this.ready||!this.world||!this.scene||!this.renderer)return!1;this.portfolioHero&&this.rally.setArena(),this.closeElemental(),this.requestOperatorModel();let t=this.T,i=new t.Scene;i.background=new t.Color(`#10161e`),i.environment=this.scene.environment;let s=new t.DirectionalLight(`#fff2e9`,3);s.position.set(-2,3,5);let o=new t.DirectionalLight(`#85d7ff`,2.6);o.position.set(2,1,-3);let r=this.world.mascot.root;return r.position.set(0,0,0),r.scale.setScalar(1),r.visible=!0,i.add(r,s,o,new t.HemisphereLight(`#e0efff`,`#42577b`,2)),this.studio={host:e,scene:i,camera:new t.PerspectiveCamera(34,1,.1,30),yaw:-.12,pitch:0,zoom:1},e.appendChild(this.renderer.domElement),this.renderer.domElement.dataset.studio=`active`,this.observer?.observe(e),this.updateLoop(),this.resize(),!0}poseStudio(e,t,i){this.studio&&(Object.assign(this.studio,{yaw:e,pitch:t,zoom:i}),this.render())}closeStudio(){if(!this.studio||!this.world||!this.scene||!this.renderer)return;this.observer?.unobserve(this.studio.host),this.studio=void 0,this.puzzleFrame=void 0,this.puzzleMapPose=void 0,this.scene.add(this.world.mascot.root),this.world.mascot.root.visible=!1,this.host?.appendChild(this.renderer.domElement),delete this.renderer.domElement.dataset.studio,this.closeElemental();let{width:e,height:t}=this.viewportSize;this.renderer.setSize(e,t),this.updateLoop(),this.render()}async openElemental(e,t=!1){if(!this.ready||this.disposed)return!1;this.elementalRequest?.abort();let i=new AbortController;this.elementalRequest=i;try{let s=this.elemental;if(s){if(!this.reduced&&!t&&await this.withdrawElemental(s,i.signal),i.signal.aborted)return!1;this.releaseElemental(),this.pulseCore()}let o=await e.load(i.signal);return i.signal.aborted||this.disposed||!this.ready?(o.dispose(),!1):(t&&o.finishEntrance(),this.elemental=o,this.renderer.domElement.dataset.elementalStage=`ready`,this.render(),!0)}catch{return!1}finally{this.elementalRequest===i&&(this.elementalRequest=void 0)}}withdrawElemental(e,t){return this.zone.runOutsideAngular(()=>new Promise(i=>{let s={value:0},o=()=>{t.removeEventListener(`abort`,r),this.elementalExit=void 0,i()},r=()=>{this.elementalExit?.kill(),e.withdraw(0),o()};this.elementalExit=this.animation.to(s,{value:1,duration:.34,ease:`power2.inOut`,onUpdate:()=>e.withdraw(s.value),onComplete:o}),t.addEventListener(`abort`,r,{once:!0})}))}controlElemental(e){this.elemental&&(e===`reset`?this.elemental.reset():e===`effects`?this.elemental.toggleEffects():this.elemental.rotate(e===`left`?-1:1),this.reduced&&this.render())}closeElemental(){this.elementalRequest?.abort(),this.elementalRequest=void 0,this.releaseElemental()}releaseElemental(){this.elemental?.dispose(),this.elemental=void 0,this.renderer&&delete this.renderer.domElement.dataset.elementalStage,this.reduced&&this.render()}releaseGraphics(){this.clearRipple(),this.atmosphereListeners?.abort(),this.atmosphereListeners=void 0,this.atmosphere.reset(),this.closeStudio(),this.closeElemental(),this.mediaVersion++,this.previews.clear(),this.previewTweens.forEach(i=>i.kill()),this.previewTweens.clear(),this.profiler?.dispose(),this.profiler=void 0,this.renderer?.setAnimationLoop(null),this.cameraTimeline?.kill(),this.pulseTween?.kill(),this.exhibitTween?.kill(),this.modelSlots?.dispose(),this.modelSlots=void 0,this.requestedModels.clear(),this.stages.transitioning.set(!1);let e=new Set,t=new Set;this.portfolioHero&&this.rally.setArena(),this.rallyCar?.dispose(),this.rallyCar=void 0,this.space?.dispose(),this.space=void 0,this.scene?.traverse(i=>{let s=i;s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>t.add(o))}),e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose()),this.puzzle?.dispose(),this.particles?.dispose(),this.particles=void 0,this.puzzle=void 0,this.puzzleFrame=void 0,this.puzzleMapPose=void 0,this.world?.dispose(),this.environment?.dispose(),this.renderer?.domElement.removeEventListener(`webglcontextlost`,this.contextLost),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.scene?.clear(),this.labels.forEach(i=>{i.style.visibility=`hidden`}),this.renderer=void 0,this.scene=void 0,this.world=void 0,this.exhibits=void 0,this.environment=void 0}ngOnDestroy(){this.disposed=!0,this.ready=!1,this.observer?.disconnect(),this.motion?.removeEventListener(`change`,this.motionChanged),typeof document<`u`&&document.removeEventListener(`visibilitychange`,this.visibilityChanged),this.host?.removeEventListener(`pointermove`,this.pointerMoved),this.host?.removeEventListener(`pointerleave`,this.pointerLeft),this.host?.removeEventListener(`pointerdown`,this.pointerDown),this.host?.removeEventListener(`pointerup`,this.pointerPressed),this.host?.removeEventListener(`pointercancel`,this.pointerLeft),this.releaseGraphics()}static ɵfac=function(t){return new(t||P)};static ɵprov=Z({token:P,factory:P.ɵfac})};var $t=[`mount`];var Zt=[`projectLabel`];var Kt=(P,e)=>e.slug;function ei(P,e){if(P&1){let t=Yv();$a(0,`button`,5,1),Pf(`click`,function(){let s=gl(t).$index,o=Xv(2);return ml(o.select(s))}),$a(2,`span`,6),II(3),Ua(),$a(4,`strong`),II(5),Ua(),$a(6,`small`),II(7),$a(8,`span`,7),II(9,`↗`),Ua()()()}if(P&2){let t=e.$implicit,i=e.$index,s=Xv(2);Hf(`archive-label--image`,s.previews.state(t.id)===`ready`),Rf(`title`,s.language.t(`experience.project.open`)),Mf(`aria-pressed`,s.stages.projectIndex()===i)(`aria-description`,t.name+` · `+s.previewDescription(t.id)),Nm(3),Uf(`0`,i+1,` / `,t.cover),Nm(2),$f(t.name),Nm(2),Ga(``,s.language.t(`project.details`),` `)}}function ti(P,e){if(P&1&&($a(0,`div`,3),Gv(1,ei,10,9,`button`,4,Kt),Ua()),P&2){let t=Xv();Mf(`aria-label`,t.language.t(`experience.project`)),Nm(),Wv(t.stages.projects)}}var Ot=class P{exhibitIndex=hR(null);exhibitInstant=hR(!1);portfolioHero=hR(!1);archiveLabels=hR(!0);skillBranch=hR(0);cubeInspection=hR();journeyField=hR();mount=gR.required(`mount`);labels=mR(`projectLabel`);scene=D(ye);assets=D(g);rally=D(w);stages=D(K);language=D(ip);previews=D(v);constructor(){let e=D(ce$1);om(()=>{let t=this.mount().nativeElement;if(this.exhibitIndex()!==null&&this.scene.useSingleExhibit(),this.portfolioHero()&&this.scene.usePortfolioHero(),this.scene.initialize(t,this.labels().map(i=>i.nativeElement)),this.exhibitIndex()!==null&&typeof IntersectionObserver<`u`){let i=new IntersectionObserver(([s])=>this.scene.setExhibitOnScreen(s.intersectionRatio>=.5),{threshold:.5});i.observe(t),e.onDestroy(()=>i.disconnect())}}),lo(()=>{this.assets.phase()===`ready`&&this.scene.mode(this.exhibitIndex()===null?this.stages.renderMode():`beauty`)}),lo(()=>{this.assets.phase()===`ready`&&this.portfolioHero()&&this.scene.selectSkillBranch(this.skillBranch())}),lo(()=>{this.portfolioHero()&&this.scene.inspectCube(this.cubeInspection())}),lo(()=>{let t=this.journeyField();this.portfolioHero()&&t&&this.scene.setJourneyField(t)}),lo(()=>{if(this.portfolioHero()&&this.assets.phase()===`ready`){let t=this.rally.active();Yf(()=>this.scene.setRallyMode(t))}}),lo(()=>{if(this.assets.phase()===`ready`){let t=this.exhibitIndex(),i=t===null?this.stages.stage():`projects`,s=t??this.stages.projectIndex(),o=this.exhibitInstant();Yf(()=>{this.scene.stage(i,s,t===null?this.stages.consumeResumeMotion():o)})}})}setChapterPositions(e,t,i,s){this.scene.setChapterPositions(e,t,i,s)}openStudio(e){return this.scene.openStudio(e)}poseStudio(e,t,i){this.scene.poseStudio(e,t,i)}closeStudio(){this.scene.closeStudio()}openElemental(e,t=!1){return this.scene.openElemental(e,t)}closeElemental(){this.scene.closeElemental()}controlElemental(e){this.scene.controlElemental(e)}energize(){this.scene.energize()}pulsePlanet(e){this.scene.pulsePlanet(e)}skipTransition(){this.scene.skipTransition()}select(e){this.stages.activateProject(e)}retryPreview(){this.scene.retryPreview()}previewDescription(e){let t=y(e);return t?t.alt[this.language.activeLanguage()]:this.language.t(`experience.preview.missing`)}static ɵfac=function(t){return new(t||P)};static ɵcmp=ev({type:P,selectors:[[`app-webgl-viewport`]],viewQuery:function(t,i){t&1&&Ff(i.mount,$t,5)(i.labels,Zt,5),t&2&&nI(2)},inputs:{exhibitIndex:[1,`exhibitIndex`],exhibitInstant:[1,`exhibitInstant`],portfolioHero:[1,`portfolioHero`],archiveLabels:[1,`archiveLabels`],skillBranch:[1,`skillBranch`],cubeInspection:[1,`cubeInspection`],journeyField:[1,`journeyField`]},features:[NI([ye,ce])],decls:3,vars:1,consts:[[`mount`,``],[`projectLabel`,``],[1,`webgl-mount`],[`role`,`group`,1,`archive-labels`],[`type`,`button`,1,`archive-label`,3,`archive-label--image`,`title`],[`type`,`button`,1,`archive-label`,3,`click`,`title`],[1,`archive-file`],[`aria-hidden`,`true`]],template:function(t,i){t&1&&(kf(0,`div`,2,0),Vv(2,ti,3,1,`div`,3)),t&2&&(Nm(2),Bv(i.exhibitIndex()===null&&i.archiveLabels()?2:-1))},styles:[`[_nghost-%COMP%]{position:fixed;inset:0;display:block;overflow:hidden;z-index:0}.webgl-mount[_ngcontent-%COMP%]{position:absolute;inset:0;display:block;overflow:hidden}.archive-labels[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none}.archive-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;visibility:hidden;width:244px;min-height:44px;padding:6px 12px;background:#0b1018f5;border:1px solid rgba(255,255,255,.1294117647);border-radius:4px;text-align:left;color:#edf2f5;cursor:pointer;pointer-events:auto;line-height:1.4}.archive-label[_ngcontent-%COMP%]:hover, .archive-label[_ngcontent-%COMP%]:focus-visible{background:#111d27;outline:2px solid var(--%NS%scene-accent, var(--%NS%accent));outline-offset:3px}.archive-file[_ngcontent-%COMP%]{display:block;font:10px/1.6 Consolas,monospace;color:var(--%NS%scene-accent, var(--%NS%accent))}.archive-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:none;font-size:13px;font-weight:500}.archive-label--image[_ngcontent-%COMP%]{min-height:44px}.archive-label--image[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:none}.archive-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;font-size:10px;color:#e1e7eb;margin-top:3px}.archive-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{float:right;color:var(--%NS%scene-accent, var(--%NS%accent));font-size:14px}@media(max-width:699px){.archive-labels[_ngcontent-%COMP%]{display:none}}`]})};export{Ot as t};