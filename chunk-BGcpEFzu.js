import{D as C,j as Ci}from"./chunk-Bsp-KO1n.js";import{i as _$1,n as N$1}from"./chunk-BNPJmYzC.js";var w=new C;function x(d,t,r,i,l,s){let n=2*Math.PI*l/4,a=Math.max(s-2*l,0),c=Math.PI/4;w.copy(t),w[i]=0,w.normalize();let e=.5*n/(n+a),f=1-w.angleTo(d)/c;return Math.sign(w[r])===1?f*e:a/(n+a)+e+e*(1-f)}var S=class d extends Ci{constructor(t=1,r=1,i=1,l=2,s=.1){let n=l*2+1;if(s=Math.min(t/2,r/2,i/2,s),super(1,1,1,n,n,n),this.type=`RoundedBoxGeometry`,this.parameters={width:t,height:r,depth:i,segments:l,radius:s},n===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new C,e=new C,f=new C(t,r,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,m=this.attributes.normal.array,p=this.attributes.uv.array,v=h.length/6,o=new C,g=.5/n;for(let y=0,u=0;y<h.length;y+=3,u+=2)switch(c.fromArray(h,y),e.copy(c),e.x-=Math.sign(e.x)*g,e.y-=Math.sign(e.y)*g,e.z-=Math.sign(e.z)*g,e.normalize(),h[y+0]=f.x*Math.sign(c.x)+e.x*s,h[y+1]=f.y*Math.sign(c.y)+e.y*s,h[y+2]=f.z*Math.sign(c.z)+e.z*s,m[y+0]=e.x,m[y+1]=e.y,m[y+2]=e.z,Math.floor(y/v)){case 0:o.set(1,0,0),p[u+0]=x(o,e,`z`,`y`,s,i),p[u+1]=1-x(o,e,`y`,`z`,s,r);break;case 1:o.set(-1,0,0),p[u+0]=1-x(o,e,`z`,`y`,s,i),p[u+1]=1-x(o,e,`y`,`z`,s,r);break;case 2:o.set(0,1,0),p[u+0]=1-x(o,e,`x`,`z`,s,t),p[u+1]=x(o,e,`z`,`x`,s,i);break;case 3:o.set(0,-1,0),p[u+0]=1-x(o,e,`x`,`z`,s,t),p[u+1]=1-x(o,e,`z`,`x`,s,i);break;case 4:o.set(0,0,1),p[u+0]=1-x(o,e,`x`,`y`,s,t),p[u+1]=1-x(o,e,`y`,`x`,s,r);break;case 5:o.set(0,0,-1),p[u+0]=x(o,e,`x`,`y`,s,t),p[u+1]=1-x(o,e,`y`,`x`,s,r)}}static fromJSON(t){return new d(t.width,t.height,t.depth,t.segments,t.radius)}};function Q(d,t){let r={uStellarTime:{value:0},uStellarQuality:{value:0},uFrontierPulse:{value:0},uStellarChapter:{value:0},uStellarPointer:{value:new d.Vector3},uStellarViewport:{value:new d.Vector2(1,1)}},i=new d.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.46,fog:!1});return i.onBeforeCompile=l=>{Object.assign(l.uniforms,r),l.vertexShader=l.vertexShader.replace(`#include <common>`,`
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
      `),l.fragmentShader=l.fragmentShader.replace(`#include <common>`,`
        #include <common>
        uniform float uStellarTime;
        uniform float uStellarQuality;
        uniform float uFrontierPulse;
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
      `)},{material:i,uniforms:r}}var H=class{offsets;velocity;projected;view;panelView;clip;center;axis;moving=!1;projectionDirty=!0;constructor(t,r){this.offsets=new t.InstancedBufferAttribute(new Float32Array(r*3),3),this.offsets.setUsage(t.DynamicDrawUsage),this.velocity=new Float64Array(r*3),this.projected=new Float64Array(r*7),this.view=new t.Matrix4,this.panelView=new t.Matrix4,this.clip=new t.Matrix4,this.center=new t.Vector3,this.axis=new t.Vector3}invalidate(){this.projectionDirty=!0}reset(){this.moving&&(this.offsets.array.fill(0),this.velocity.fill(0),this.offsets.needsUpdate=!0,this.moving=!1)}advance(t,r,i,l,s,n,a,c){if(t<=0||!this.moving&&c<8e-5)return;c>=8e-5&&this.projectionDirty&&this.project(r,i,l,s);let e=Math.exp(-25*t),f=n*s,h=this.offsets.array,m=!1,p=!1;for(let v=0;v<l.length;v++){let o=v*7,g=this.projected[o]-f,y=this.projected[o+1]-a,u=Math.hypot(g,y),C=Math.max(0,1-u/.185),j=c*C*C*this.projected[o+6],L=1/Math.max(u,.035);for(let E=0;E<3;E++){let F=E*2+o+2,z=E===2?j*.088:(g*this.projected[F]+y*this.projected[F+1])*L*j*.052,M=v*3+E,D=h[M]-z,I=this.velocity[M]+25*D,T=z+(D+I*t)*e,U=(this.velocity[M]-25*I*t)*e,P=Math.abs(z)<8e-5&&Math.abs(T)<8e-5&&Math.abs(U)<.002,G=h[M];h[M]=P?0:T,this.velocity[M]=P?0:U,m||=!P,p||=h[M]!==G}}this.moving=m,p&&(this.offsets.needsUpdate=!0)}project(t,r,i,l){r.updateWorldMatrix(!0,!1),this.view.multiplyMatrices(t.matrixWorldInverse,r.matrixWorld);for(let s=0;s<i.length;s++){let n=s*7,a=this.panelView.multiplyMatrices(this.view,i[s]).elements,c=-(a[8]*a[12]+a[9]*a[13]+a[10]*a[14])/(Math.hypot(a[8],a[9],a[10])*Math.hypot(a[12],a[13],a[14]));if(this.projected[n+6]=Math.min(1,Math.max(0,(c-.08)/.28)),this.projected[n+6]!==0){this.clip.multiplyMatrices(t.projectionMatrix,this.panelView),this.center.set(0,0,0).applyMatrix4(this.clip),this.projected[n]=(this.center.x+1)*.5*l,this.projected[n+1]=(this.center.y+1)*.5;for(let e=0;e<2;e++){this.axis.set(e===0?1:0,e===1?1:0,0).applyMatrix4(this.clip);let f=(this.axis.x-this.center.x)*l,h=this.axis.y-this.center.y,m=Math.max(1e-5,Math.hypot(f,h));this.projected[n+2+e*2]=f/m,this.projected[n+3+e*2]=h/m}}}this.projectionDirty=!1}};var R=.962;var A=.856;var _=.056;var q=R/2+.009;var N=[[0,1,3328994],[0,-1,9001447],[1,1,16758335],[1,-1,15821357],[2,1,16338720],[2,-1,14102338]];var B=class{root;bodies;faces;stellar;magnetism;tileMounts=[];panelPoses=[];position;rotation;pivot;matrix;axes;basis;transforms;scale;previousAssembly=-1;previousSolve=-1;field=0;constructor(t){this.root=new t.Group,this.root.name=`journey-puzzle`,this.root.visible=!1,this.position=new t.Vector3,this.rotation=new t.Quaternion,this.pivot=new t.Quaternion,this.matrix=new t.Matrix4,this.axes=[new t.Vector3(1,0,0),new t.Vector3(0,1,0),new t.Vector3(0,0,1)],this.basis=this.axes.map(()=>new t.Vector3),this.scale=new t.Vector3(1,1,1);let{pieces:r}=N$1(0);this.transforms=r.map(()=>new t.Matrix4),this.bodies=new t.InstancedMesh(new S(R,R,R,1,.065),new t.MeshStandardMaterial({color:2106928,roughness:.33,metalness:.54,fog:!1}),r.length);let i=new S(A,A,_,1,.021),{material:l,uniforms:s}=Q(t,A);this.stellar=s,this.faces=new t.InstancedMesh(i,l,54),this.magnetism=new H(t,this.faces.count);let n=[],a=new t.Vector3,c=this.axes[2];r.forEach(({home:e},f)=>{for(let[h,m,p]of N){if(e[h]!==m)continue;a.copy(this.axes[h]).multiplyScalar(m),this.rotation.setFromUnitVectors(c,a);let v=new t.Matrix4().compose(a.multiplyScalar(q),this.rotation,this.scale);this.faces.setColorAt(this.tileMounts.length,new t.Color(p));let o=(f*29+h*17+m*7+101)%97/97,y=e[(h+1)%3]===0&&e[(h+2)%3]===0?1:o>.67?.88:o>.32?.58:.28;n.push(o,y),this.tileMounts.push({piece:f,matrix:v}),this.panelPoses.push(new t.Matrix4)}}),i.setAttribute(`aStellar`,new t.InstancedBufferAttribute(new Float32Array(n),2)),i.setAttribute(`aMagneticOffset`,this.magnetism.offsets),this.bodies.instanceMatrix.setUsage(t.DynamicDrawUsage),this.faces.instanceMatrix.setUsage(t.DynamicDrawUsage),this.bodies.frustumCulled=this.faces.frustumCulled=!1,this.root.add(this.bodies,this.faces),this.pose(1,0)}setChapter(t,r){this.stellar.uStellarChapter.value=t,this.field=r,this.magnetism.invalidate()}pulse(t){this.stellar.uFrontierPulse.value=t}animate(t,r,i,l,s,n,a,c){this.stellar.uStellarTime.value=l?0:t,this.stellar.uStellarQuality.value=i&&!l?1:0;let e=l?0:Math.min(1,Math.hypot(s.velocityX,s.velocityY))*s.presence,f=Math.max(0,Math.min(1,this.stellar.uStellarChapter.value/.52)),h=1-f*f*(3-2*f),m=i&&!l?h*s.presence*.16:0,p=Math.min(1,e+m)*(i?1:.48)*(.2+this.field*.8);if(this.stellar.uStellarPointer.value.set(s.x,s.y,p),this.stellar.uStellarViewport.value.set(Math.max(1,a),Math.max(1,c)),l||!this.root.visible){this.magnetism.reset();return}let v=Math.max(0,(Math.sqrt(e)-.11)/.89),o=i?v*this.field:0;h>0&&o>=8e-5&&r>0&&(n.updateMatrixWorld(),this.magnetism.invalidate()),this.magnetism.advance(r,n,this.root,this.panelPoses,a/Math.max(1,c),s.x,s.y,o)}inspectionPieces;pose(t,r,i){if(t===this.previousAssembly&&r===this.previousSolve&&i===this.inspectionPieces)return;this.previousAssembly=t,this.previousSolve=r,this.inspectionPieces=i;let{pieces:l,turn:s,angle:n}=i?{pieces:i,turn:void 0,angle:0}:N$1(r);s&&n&&this.pivot.setFromAxisAngle(this.axes[s.axis],n);let a=_$1(1.18,1,t);l.forEach(({cell:c,basis:e},f)=>{let[h,m,p]=c;this.basis.forEach((o,g)=>o.fromArray(e[g])),this.rotation.setFromRotationMatrix(this.matrix.makeBasis(this.basis[0],this.basis[1],this.basis[2])),this.position.set(h*a,m*a,p*a),s&&n&&c[s.axis]===s.layer&&(this.position.applyQuaternion(this.pivot),this.rotation.premultiply(this.pivot));let v=this.transforms[f].compose(this.position,this.rotation,this.scale);this.bodies.setMatrixAt(f,v)}),this.tileMounts.forEach(({piece:c,matrix:e},f)=>{let h=this.panelPoses[f].multiplyMatrices(this.transforms[c],e);this.faces.setMatrixAt(f,h)}),this.magnetism.invalidate(),this.bodies.instanceMatrix.needsUpdate=!0,this.faces.instanceMatrix.needsUpdate=!0}screenBounds(t,r,i){let l=1/0,s=-1/0,n=1/0,a=-1/0,c=q+_/2;this.root.updateWorldMatrix(!0,!1);for(let e of this.transforms)for(let f of[-c,c])for(let h of[-c,c])for(let m of[-c,c]){let p=this.position.set(f,h,m).applyMatrix4(e).applyMatrix4(this.root.matrixWorld).project(t),v=(p.x+1)*r/2,o=(1-p.y)*i/2;l=Math.min(l,v),s=Math.max(s,v),n=Math.min(n,o),a=Math.max(a,o)}return{left:l,right:s,top:n,bottom:a}}dispose(){this.bodies.dispose(),this.faces.dispose()}};export{B as t};