import{D as C,j as Ci}from"./chunk-Bsp-KO1n.js";import{i as _$1,n as N}from"./chunk-BNPJmYzC.js";var w=new C;function x(d,t,s,o,n,a){let l=2*Math.PI*n/4,r=Math.max(a-2*n,0),c=Math.PI/4;w.copy(t),w[o]=0,w.normalize();let e=.5*l/(l+r),f=1-w.angleTo(d)/c;return Math.sign(w[s])===1?f*e:r/(l+r)+e+e*(1-f)}var S=class d extends Ci{constructor(t=1,s=1,o=1,n=2,a=.1){let l=n*2+1;if(a=Math.min(t/2,s/2,o/2,a),super(1,1,1,l,l,l),this.type=`RoundedBoxGeometry`,this.parameters={width:t,height:s,depth:o,segments:n,radius:a},l===1)return;let r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;let c=new C,e=new C,f=new C(t,s,o).divideScalar(2).subScalar(a),h=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,v=h.length/6,i=new C,g=.5/l;for(let y=0,u=0;y<h.length;y+=3,u+=2)switch(c.fromArray(h,y),e.copy(c),e.x-=Math.sign(e.x)*g,e.y-=Math.sign(e.y)*g,e.z-=Math.sign(e.z)*g,e.normalize(),h[y+0]=f.x*Math.sign(c.x)+e.x*a,h[y+1]=f.y*Math.sign(c.y)+e.y*a,h[y+2]=f.z*Math.sign(c.z)+e.z*a,p[y+0]=e.x,p[y+1]=e.y,p[y+2]=e.z,Math.floor(y/v)){case 0:i.set(1,0,0),m[u+0]=x(i,e,`z`,`y`,a,o),m[u+1]=1-x(i,e,`y`,`z`,a,s);break;case 1:i.set(-1,0,0),m[u+0]=1-x(i,e,`z`,`y`,a,o),m[u+1]=1-x(i,e,`y`,`z`,a,s);break;case 2:i.set(0,1,0),m[u+0]=1-x(i,e,`x`,`z`,a,t),m[u+1]=x(i,e,`z`,`x`,a,o);break;case 3:i.set(0,-1,0),m[u+0]=1-x(i,e,`x`,`z`,a,t),m[u+1]=1-x(i,e,`z`,`x`,a,o);break;case 4:i.set(0,0,1),m[u+0]=1-x(i,e,`x`,`y`,a,t),m[u+1]=1-x(i,e,`y`,`x`,a,s);break;case 5:i.set(0,0,-1),m[u+0]=x(i,e,`x`,`y`,a,t),m[u+1]=1-x(i,e,`y`,`x`,a,s)}}static fromJSON(t){return new d(t.width,t.height,t.depth,t.segments,t.radius)}};function G(d,t){let s={uStellarTime:{value:0},uStellarQuality:{value:0},uFrontierPulse:{value:0},uJourneyFlux:{value:0},uStellarChapter:{value:0},uStellarPointer:{value:new d.Vector3},uStellarViewport:{value:new d.Vector2(1,1)}},o=new d.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.46,fog:!1});return o.onBeforeCompile=n=>{Object.assign(n.uniforms,s),n.vertexShader=n.vertexShader.replace(`#include <common>`,`
        #include <common>
        attribute vec2 aStellar;
        attribute vec3 aMagneticOffset;
        varying vec2 vStellarPanel;
        varying vec2 vStellarCell;
        varying float vStellarFront;
        varying float vStellarLift;
      `).replace(`#include <begin_vertex>`,`
        #include <begin_vertex>
        transformed += aMagneticOffset;
        vStellarPanel = position.xy / ${t.toFixed(3)};
        vStellarCell = aStellar;
        vStellarFront = max(normal.z, 0.0);
        vStellarLift = min(1.0, abs(aMagneticOffset.z) * 13.0);
      `),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`
        #include <common>
        uniform float uStellarTime;
        uniform float uStellarQuality;
        uniform float uFrontierPulse;
        uniform float uJourneyFlux;
        uniform float uStellarChapter;
        uniform vec3 uStellarPointer;
        uniform vec2 uStellarViewport;
        varying vec2 vStellarPanel;
        varying vec2 vStellarCell;
        varying float vStellarFront;
        varying float vStellarLift;

        float stellarHash(vec2 p) {
          vec3 q = fract(vec3(p.xyx) * 0.1031);
          q += dot(q, q.yzx + 33.33);
          return fract((q.x + q.y) * q.z);
        }

        float stellarNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(stellarHash(i), stellarHash(i + vec2(1, 0)), f.x),
            mix(stellarHash(i + vec2(0, 1)), stellarHash(i + 1.0), f.x),
            f.y
          );
        }
      `).replace(`#include <color_fragment>`,`
        #include <color_fragment>

        vec2 panel = vStellarPanel;
        float phase = vStellarCell.x;
        float charge = vStellarCell.y;

        float face = smoothstep(0.24, 0.94, vStellarFront);
        float edge = max(abs(panel.x), abs(panel.y));
        float inlay = 1.0 - smoothstep(0.42, 0.49, edge);
        float trace =
          smoothstep(0.406, 0.44, edge) *
          (1.0 - smoothstep(0.456, 0.481, edge));

        float close = smoothstep(3.15, 4.0, uStellarChapter);
        float homeEnergy = 1.0 - smoothstep(0.0, 0.52, uStellarChapter);
        // Lift the smaller orbital exhibits without changing the Home or solved finish.
        float orbital = smoothstep(0.52, 1.0, uStellarChapter) *
          (1.0 - smoothstep(3.02, 3.76, uStellarChapter));
        vec2 cursor = gl_FragCoord.xy / uStellarViewport - uStellarPointer.xy;
        cursor.x *= uStellarViewport.x / uStellarViewport.y;
        float cursorGlow = uStellarPointer.z *
          (1.0 - smoothstep(0.012, 0.15, length(cursor)));

        // Keep Home's palette and plasma on every sticker.
        vec3 color = diffuseColor.rgb;
        float finalCharge = mix(charge, 0.63 + 0.07 * charge, close);
        float lit = mix(0.91, 0.83, close) + orbital * 0.10;

        float time = uStellarTime * 0.72 + phase * 18.0;

        vec2 flow = vec2(
          panel.x + panel.y * (phase - 0.5),
          panel.y - panel.x * 0.36
        );

        // A small local swirl follows the cursor without changing sticker colors
        // or adding another noise sample to the desktop shader.
        flow += vec2(-cursor.y, cursor.x) * (homeEnergy * cursorGlow * 0.72);

        float drift = stellarNoise(
          flow * 3.7 +
          vec2(phase * 12.4, -time * 0.15)
        );

        float grain = drift;

        if (uStellarQuality > 0.5 && charge > 0.54) {
          grain = stellarNoise(
            flow * 11.8 +
            vec2(2.1 * drift + time * 0.13, -drift * 3.1)
          );
        }

        float density = smoothstep(
          0.25,
          0.84,
          drift * 0.68 + grain * 0.32
        );

        float faceExposure = 0.54 + 0.14 * density;
        faceExposure += orbital * (0.012 + density * 0.027);

        diffuseColor.rgb = color * mix(
          0.22,
          faceExposure,
          face * inlay
        );
      `).replace(`#include <roughnessmap_fragment>`,`
        #include <roughnessmap_fragment>

        roughnessFactor *=
          mix(0.57, 1.34, charge) +
          0.34 * (1.0 - inlay) +
          density * (0.22 - orbital * 0.09);
      `).replace(`#include <emissivemap_fragment>`,`
        #include <emissivemap_fragment>

        float filament = drift * 0.70 + grain * 0.30;

        float veinDistance = abs(
          filament - (0.56 + 0.09 * (phase - 0.5))
        );

        float aa = clamp(fwidth(filament), 0.006, 0.052);

        float plume =
          smoothstep(0.34, 0.79, grain) *
          (0.36 + 0.64 * density);

        float vein =
          (1.0 - smoothstep(0.006, 0.037 + aa, veinDistance)) *
          plume;

        float halo =
          (1.0 - smoothstep(0.019, 0.18, veinDistance)) *
          plume;

        float flare = smoothstep(
          0.62,
          0.94,
          filament
        ) * density;

        float wake = cursorGlow + vStellarLift * 0.38;

        vec3 hot = mix(
          color,
          vec3(1.0, 0.74, 0.45),
          0.48 + vein * 0.19
        );

        float plasma =
          (0.12 + density * 0.38 + halo * 0.40) *
          finalCharge +
          (vein * (0.70 + orbital * 0.12) + flare * 1.02 + wake * (0.56 + homeEnergy * 0.18)) *
          finalCharge * finalCharge;

        float wave = uFrontierPulse * (0.5 + 0.5 * sin(edge * 17.0 - (1.0 - uFrontierPulse) * 11.0));
        plasma += wave * (0.04 + 0.12 * halo);
        // Tighter inlay contrast makes the filament read beneath the reflective surface.
        plasma += uJourneyFlux * (vein * .21 + halo * .06 + cursorGlow * .24) * finalCharge;

        // Reduce excessive emission in the solved Contact pose.
        totalEmissiveRadiance +=
          face * lit * mix(1.0, 0.84, close) * (
            inlay * (
              color * (plasma + 0.12 + close * 0.14) +
              hot * vein * finalCharge * finalCharge *
              (0.16 + density * 0.43)
            ) +
            trace * color * (
              0.07 +
              density * finalCharge * 0.17 +
              wake * 0.50
            )
          );
      `)},{material:o,uniforms:s}}var H=class{offsets;velocity;projected;view;panelView;clip;center;axis;moving=!1;projectionDirty=!0;constructor(t,s){this.offsets=new t.InstancedBufferAttribute(new Float32Array(s*3),3),this.offsets.setUsage(t.DynamicDrawUsage),this.velocity=new Float64Array(s*3),this.projected=new Float64Array(s*7),this.view=new t.Matrix4,this.panelView=new t.Matrix4,this.clip=new t.Matrix4,this.center=new t.Vector3,this.axis=new t.Vector3}invalidate(){this.projectionDirty=!0}reset(){this.moving&&(this.offsets.array.fill(0),this.velocity.fill(0),this.offsets.needsUpdate=!0,this.moving=!1)}advance(t,s,o,n,a,l,r,c){if(t<=0||!this.moving&&c<8e-5)return;c>=8e-5&&this.projectionDirty&&this.project(s,o,n,a);let e=Math.exp(-25*t),f=l*a,h=this.offsets.array,p=!1,m=!1;for(let v=0;v<n.length;v++){let i=v*7,g=this.projected[i]-f,y=this.projected[i+1]-r,u=Math.hypot(g,y),C=Math.max(0,1-u/.185),j=c*C*C*this.projected[i+6],q=1/Math.max(u,.035);for(let E=0;E<3;E++){let F=E*2+i+2,z=E===2?j*.088:(g*this.projected[F]+y*this.projected[F+1])*q*j*.052,M=v*3+E,T=h[M]-z,D=this.velocity[M]+25*T,I=z+(T+D*t)*e,k=(this.velocity[M]-25*D*t)*e,P=Math.abs(z)<8e-5&&Math.abs(I)<8e-5&&Math.abs(k)<.002,L=h[M];h[M]=P?0:I,this.velocity[M]=P?0:k,p||=!P,m||=h[M]!==L}}this.moving=p,m&&(this.offsets.needsUpdate=!0)}project(t,s,o,n){s.updateWorldMatrix(!0,!1),this.view.multiplyMatrices(t.matrixWorldInverse,s.matrixWorld);for(let a=0;a<o.length;a++){let l=a*7,r=this.panelView.multiplyMatrices(this.view,o[a]).elements,c=-(r[8]*r[12]+r[9]*r[13]+r[10]*r[14])/(Math.hypot(r[8],r[9],r[10])*Math.hypot(r[12],r[13],r[14]));if(this.projected[l+6]=Math.min(1,Math.max(0,(c-.08)/.28)),this.projected[l+6]!==0){this.clip.multiplyMatrices(t.projectionMatrix,this.panelView),this.center.set(0,0,0).applyMatrix4(this.clip),this.projected[l]=(this.center.x+1)*.5*n,this.projected[l+1]=(this.center.y+1)*.5;for(let e=0;e<2;e++){this.axis.set(e===0?1:0,e===1?1:0,0).applyMatrix4(this.clip);let f=(this.axis.x-this.center.x)*n,h=this.axis.y-this.center.y,p=Math.max(1e-5,Math.hypot(f,h));this.projected[l+2+e*2]=f/p,this.projected[l+3+e*2]=h/p}}}this.projectionDirty=!1}};var R=.962;var A=.856;var O=.056;var Q=R/2+.009;var J=[[0,1,3328994],[0,-1,9001447],[1,1,16758335],[1,-1,15821357],[2,1,16338720],[2,-1,14102338]];var _=class{root;bodies;faces;stellar;magnetism;tileMounts=[];panelPoses=[];position;rotation;pivot;matrix;axes;basis;transforms;scale;previousAssembly=-1;previousSolve=-1;field=0;constructor(t){this.root=new t.Group,this.root.name=`journey-puzzle`,this.root.visible=!1,this.position=new t.Vector3,this.rotation=new t.Quaternion,this.pivot=new t.Quaternion,this.matrix=new t.Matrix4,this.axes=[new t.Vector3(1,0,0),new t.Vector3(0,1,0),new t.Vector3(0,0,1)],this.basis=this.axes.map(()=>new t.Vector3),this.scale=new t.Vector3(1,1,1);let{pieces:s}=N(0);this.transforms=s.map(()=>new t.Matrix4),this.bodies=new t.InstancedMesh(new S(R,R,R,1,.065),new t.MeshStandardMaterial({color:2106928,roughness:.33,metalness:.54,fog:!1}),s.length);let o=new S(A,A,O,1,.021),{material:n,uniforms:a}=G(t,A);this.stellar=a,this.faces=new t.InstancedMesh(o,n,54),this.magnetism=new H(t,this.faces.count);let l=[],r=new t.Vector3,c=this.axes[2];s.forEach(({home:e},f)=>{for(let[h,p,m]of J){if(e[h]!==p)continue;r.copy(this.axes[h]).multiplyScalar(p),this.rotation.setFromUnitVectors(c,r);let v=new t.Matrix4().compose(r.multiplyScalar(Q),this.rotation,this.scale);this.faces.setColorAt(this.tileMounts.length,new t.Color(m));let i=(f*29+h*17+p*7+101)%97/97,y=e[(h+1)%3]===0&&e[(h+2)%3]===0?1:i>.67?.88:i>.32?.58:.28;l.push(i,y),this.tileMounts.push({piece:f,matrix:v}),this.panelPoses.push(new t.Matrix4)}}),o.setAttribute(`aStellar`,new t.InstancedBufferAttribute(new Float32Array(l),2)),o.setAttribute(`aMagneticOffset`,this.magnetism.offsets),this.bodies.instanceMatrix.setUsage(t.DynamicDrawUsage),this.faces.instanceMatrix.setUsage(t.DynamicDrawUsage),this.bodies.frustumCulled=this.faces.frustumCulled=!1,this.root.add(this.bodies,this.faces),this.pose(1,0)}setChapter(t,s){this.stellar.uStellarChapter.value=t,this.field=s,this.magnetism.invalidate()}pulse(t){this.stellar.uFrontierPulse.value=t}tuneJourneySurface(t,s,o){let n=Math.max(0,Math.min(4,t));this.stellar.uJourneyFlux.value=(.34+n*.12)*(.48+o)*(s===2?.62:1),this.faces.material.roughness=[.34,.17,.42][s]-Math.min(n,3)*.016,this.faces.material.metalness=[.46,.18,.76][s]}animate(t,s,o,n,a,l,r,c){this.stellar.uStellarTime.value=n?0:t;let e=n?0:Math.min(1,Math.hypot(a.velocityX,a.velocityY))*a.presence;this.stellar.uStellarQuality.value=o&&!n&&(e>.035||this.stellar.uFrontierPulse.value>.09)?1:0;let f=Math.max(0,Math.min(1,this.stellar.uStellarChapter.value/.52)),h=1-f*f*(3-2*f),p=n?0:a.presence*(h*(o?.16:0)+this.stellar.uJourneyFlux.value*.27),m=Math.min(1,e+p)*(o?1:.48)*(.2+this.field*.8);if(this.stellar.uStellarPointer.value.set(a.x,a.y,m),this.stellar.uStellarViewport.value.set(Math.max(1,r),Math.max(1,c)),n||!this.root.visible){this.magnetism.reset();return}let v=Math.max(0,(Math.sqrt(e)-.11)/.89),i=o?v*this.field:0;h>0&&i>=8e-5&&s>0&&(l.updateMatrixWorld(),this.magnetism.invalidate()),this.magnetism.advance(s,l,this.root,this.panelPoses,r/Math.max(1,c),a.x,a.y,i)}inspectionPieces;pose(t,s,o){if(t===this.previousAssembly&&s===this.previousSolve&&o===this.inspectionPieces)return;this.previousAssembly=t,this.previousSolve=s,this.inspectionPieces=o;let{pieces:n,turn:a,angle:l}=o?{pieces:o,turn:void 0,angle:0}:N(s);a&&l&&this.pivot.setFromAxisAngle(this.axes[a.axis],l);let r=_$1(1.18,1,t);n.forEach(({cell:c,basis:e},f)=>{let[h,p,m]=c;this.basis.forEach((i,g)=>i.fromArray(e[g])),this.rotation.setFromRotationMatrix(this.matrix.makeBasis(this.basis[0],this.basis[1],this.basis[2])),this.position.set(h*r,p*r,m*r),a&&l&&c[a.axis]===a.layer&&(this.position.applyQuaternion(this.pivot),this.rotation.premultiply(this.pivot));let v=this.transforms[f].compose(this.position,this.rotation,this.scale);this.bodies.setMatrixAt(f,v)}),this.tileMounts.forEach(({piece:c,matrix:e},f)=>{let h=this.panelPoses[f].multiplyMatrices(this.transforms[c],e);this.faces.setMatrixAt(f,h)}),this.magnetism.invalidate(),this.bodies.instanceMatrix.needsUpdate=!0,this.faces.instanceMatrix.needsUpdate=!0}screenBounds(t,s,o){let n=1/0,a=-1/0,l=1/0,r=-1/0,c=Q+O/2;this.root.updateWorldMatrix(!0,!1);for(let e of this.transforms)for(let f of[-c,c])for(let h of[-c,c])for(let p of[-c,c]){let m=this.position.set(f,h,p).applyMatrix4(e).applyMatrix4(this.root.matrixWorld).project(t),v=(m.x+1)*s/2,i=(1-m.y)*o/2;n=Math.min(n,v),a=Math.max(a,v),l=Math.min(l,i),r=Math.max(r,i)}return{left:n,right:a,top:l,bottom:r}}dispose(){this.bodies.dispose(),this.faces.dispose()}};export{_ as t};