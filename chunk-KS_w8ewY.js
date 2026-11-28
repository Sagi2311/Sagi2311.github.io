import{D as C,j as Ci}from"./chunk-Bsp-KO1n.js";import{i as _$1,n as N}from"./chunk-BNPJmYzC.js";var S=new C;function d(g,e,s,r,o,t){let l=2*Math.PI*o/4,i=Math.max(t-2*o,0),c=Math.PI/4;S.copy(e),S[r]=0,S.normalize();let a=.5*l/(l+i),h=1-S.angleTo(g)/c;return Math.sign(S[s])===1?h*a:i/(l+i)+a+a*(1-h)}var w=class g extends Ci{constructor(e=1,s=1,r=1,o=2,t=.1){let l=o*2+1;if(t=Math.min(e/2,s/2,r/2,t),super(1,1,1,l,l,l),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:s,depth:r,segments:o,radius:t},l===1)return;let i=this.toNonIndexed();this.index=null,this.attributes.position=i.attributes.position,this.attributes.normal=i.attributes.normal,this.attributes.uv=i.attributes.uv;let c=new C,a=new C,h=new C(e,s,r).divideScalar(2).subScalar(t),f=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,y=f.length/6,n=new C,x=.5/l;for(let v=0,u=0;v<f.length;v+=3,u+=2)switch(c.fromArray(f,v),a.copy(c),a.x-=Math.sign(a.x)*x,a.y-=Math.sign(a.y)*x,a.z-=Math.sign(a.z)*x,a.normalize(),f[v+0]=h.x*Math.sign(c.x)+a.x*t,f[v+1]=h.y*Math.sign(c.y)+a.y*t,f[v+2]=h.z*Math.sign(c.z)+a.z*t,p[v+0]=a.x,p[v+1]=a.y,p[v+2]=a.z,Math.floor(v/y)){case 0:n.set(1,0,0),m[u+0]=d(n,a,`z`,`y`,t,r),m[u+1]=1-d(n,a,`y`,`z`,t,s);break;case 1:n.set(-1,0,0),m[u+0]=1-d(n,a,`z`,`y`,t,r),m[u+1]=1-d(n,a,`y`,`z`,t,s);break;case 2:n.set(0,1,0),m[u+0]=1-d(n,a,`x`,`z`,t,e),m[u+1]=d(n,a,`z`,`x`,t,r);break;case 3:n.set(0,-1,0),m[u+0]=1-d(n,a,`x`,`z`,t,e),m[u+1]=1-d(n,a,`z`,`x`,t,r);break;case 4:n.set(0,0,1),m[u+0]=1-d(n,a,`x`,`y`,t,e),m[u+1]=1-d(n,a,`y`,`x`,t,s);break;case 5:n.set(0,0,-1),m[u+0]=d(n,a,`x`,`y`,t,e),m[u+1]=1-d(n,a,`y`,`x`,t,s)}}static fromJSON(e){return new g(e.width,e.height,e.depth,e.segments,e.radius)}};function _(g,e,s=new g.Vector4(0,0,0,0)){let r={uStellarTime:{value:0},uStellarQuality:{value:0},uFrontierPulse:{value:0},uJourneyFlux:{value:0},uStellarChapter:{value:0},uStellarPointer:{value:new g.Vector3},uEnergyRipple:{value:s},uStellarViewport:{value:new g.Vector2(1,1)},uStellarStyle:{value:new g.Vector3}},o=new g.MeshStandardMaterial({color:16777215,roughness:.34,metalness:.46,fog:!1});return o.onBeforeCompile=t=>{Object.assign(t.uniforms,r),t.vertexShader=t.vertexShader.replace(`#include <common>`,`
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
        vStellarPanel = position.xy / ${e.toFixed(3)};
        vStellarCell = aStellar;
        vStellarFront = max(normal.z, 0.0);
        vStellarLift = min(1.0, abs(aMagneticOffset.z) * 13.0);
      `),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`
        #include <common>
        uniform float uStellarTime;
        uniform float uStellarQuality;
        uniform float uFrontierPulse;
        uniform float uJourneyFlux;
        uniform float uStellarChapter;
        uniform vec3 uStellarPointer;
        uniform vec4 uEnergyRipple;
        uniform vec2 uStellarViewport;
        uniform vec3 uStellarStyle;
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
        if (uStellarStyle.x + uStellarStyle.y > 0.0) {
          float mode = uStellarStyle.x;
          float warp = uStellarStyle.y + mode * 0.16;
          flow += vec2(sin(flow.y * (8.0 + mode * 3.0) + time * .27),
            cos(flow.x * 11.0 - time * .32)) * warp * .15;
          flow *= 1.0 + mode * .25;
        }

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
        if (abs(uStellarStyle.z - 3.0) < .1) faceExposure *= .59;

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
        if (uStellarStyle.x > .5) {
          vec3 tint = mix(vec3(.72,.54,1.0), vec3(.43,1.0,.89), step(1.5,uStellarStyle.x));
          hot = mix(hot, tint, .53);
        }
        if (uStellarStyle.z > 3.5) {
          // Thin-film highlight on the inlay, using the existing material pass.
          float viewEdge = 1.0 - abs(dot(normal, normalize(vViewPosition)));
          vec3 film = .62 + .38 * cos(6.28318 * (viewEdge * .82 + vec3(.08,.38,.68)));
          hot += film * (0.21 + viewEdge * .28);
        }

        float plasma =
          (0.12 + density * 0.38 + halo * 0.40) *
          finalCharge +
          (vein * (0.70 + orbital * 0.12) + flare * 1.02 + wake * (0.56 + homeEnergy * 0.18)) *
          finalCharge * finalCharge;

        float wave = uFrontierPulse * (0.5 + 0.5 * sin(edge * 17.0 - (1.0 - uFrontierPulse) * 11.0));
        plasma += wave * (0.04 + 0.12 * halo);
        // Tighter inlay contrast makes the filament read beneath the reflective surface.
        plasma += uJourneyFlux * (vein * .21 + halo * .06 + cursorGlow * .24) * finalCharge;
        if (uEnergyRipple.w > 0.0) {
          vec2 impact = gl_FragCoord.xy / uStellarViewport - uEnergyRipple.xy;
          impact.x *= uStellarViewport.x / uStellarViewport.y;
          float distance = length(impact);
          float front = 1.0 - smoothstep(.006, .035, abs(distance - uEnergyRipple.z));
          float contact = (1.0 - smoothstep(.015, .085, distance)) *
            (1.0 - smoothstep(.035, .18, uEnergyRipple.z));
          plasma += (.24 * front + .42 * contact) * uEnergyRipple.w * (.57 + .43 * density);
        }

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
      `)},{material:o,uniforms:r}}var R=class{offsets;velocity;projected;view;panelView;clip;center;axis;moving=!1;projectionDirty=!0;constructor(e,s){this.offsets=new e.InstancedBufferAttribute(new Float32Array(s*3),3),this.offsets.setUsage(e.DynamicDrawUsage),this.velocity=new Float64Array(s*3),this.projected=new Float64Array(s*7),this.view=new e.Matrix4,this.panelView=new e.Matrix4,this.clip=new e.Matrix4,this.center=new e.Vector3,this.axis=new e.Vector3}invalidate(){this.projectionDirty=!0}reset(){this.moving&&(this.offsets.array.fill(0),this.velocity.fill(0),this.offsets.needsUpdate=!0,this.moving=!1)}advance(e,s,r,o,t,l,i,c){if(e<=0||!this.moving&&c<8e-5)return;c>=8e-5&&this.projectionDirty&&this.project(s,r,o,t);let a=Math.exp(-25*e),h=l*t,f=this.offsets.array,p=!1,m=!1;for(let y=0;y<o.length;y++){let n=y*7,x=this.projected[n]-h,v=this.projected[n+1]-i,u=Math.hypot(x,v),z=Math.max(0,1-u/.185),j=c*z*z*this.projected[n+6],q=1/Math.max(u,.035);for(let E=0;E<3;E++){let A=E*2+n+2,C=E===2?j*.088:(x*this.projected[A]+v*this.projected[A+1])*q*j*.052,M=y*3+E,T=f[M]-C,D=this.velocity[M]+25*T,I=C+(T+D*e)*a,k=(this.velocity[M]-25*D*e)*a,V=Math.abs(C)<8e-5&&Math.abs(I)<8e-5&&Math.abs(k)<.002,J=f[M];f[M]=V?0:I,this.velocity[M]=V?0:k,p||=!V,m||=f[M]!==J}}this.moving=p,m&&(this.offsets.needsUpdate=!0)}project(e,s,r,o){s.updateWorldMatrix(!0,!1),this.view.multiplyMatrices(e.matrixWorldInverse,s.matrixWorld);for(let t=0;t<r.length;t++){let l=t*7,i=this.panelView.multiplyMatrices(this.view,r[t]).elements,c=-(i[8]*i[12]+i[9]*i[13]+i[10]*i[14])/(Math.hypot(i[8],i[9],i[10])*Math.hypot(i[12],i[13],i[14]));if(this.projected[l+6]=Math.min(1,Math.max(0,(c-.08)/.28)),this.projected[l+6]!==0){this.clip.multiplyMatrices(e.projectionMatrix,this.panelView),this.center.set(0,0,0).applyMatrix4(this.clip),this.projected[l]=(this.center.x+1)*.5*o,this.projected[l+1]=(this.center.y+1)*.5;for(let a=0;a<2;a++){this.axis.set(a===0?1:0,a===1?1:0,0).applyMatrix4(this.clip);let h=(this.axis.x-this.center.x)*o,f=this.axis.y-this.center.y,p=Math.max(1e-5,Math.hypot(h,f));this.projected[l+2+a*2]=h/p,this.projected[l+3+a*2]=f/p}}}this.projectionDirty=!1}};var H=.962;var F=.856;var B=.056;var G=H/2+.009;var L=[{roughness:.34,metalness:.46,flux:1},{roughness:.17,metalness:.18,flux:1},{roughness:.42,metalness:.76,flux:.62},{roughness:.21,metalness:.29,flux:.49},{roughness:.25,metalness:.65,flux:.84}];var W=[[0,1,3328994],[0,-1,9001447],[1,1,16758335],[1,-1,15821357],[2,1,16338720],[2,-1,14102338]];var Q=class{root;bodies;faces;stellar;magnetism;tileMounts=[];panelPoses=[];position;rotation;pivot;matrix;axes;basis;transforms;scale;previousAssembly=-1;previousSolve=-1;field=0;plasmaTime=0;constructor(e,s){this.root=new e.Group,this.root.name=`journey-puzzle`,this.root.visible=!1,this.position=new e.Vector3,this.rotation=new e.Quaternion,this.pivot=new e.Quaternion,this.matrix=new e.Matrix4,this.axes=[new e.Vector3(1,0,0),new e.Vector3(0,1,0),new e.Vector3(0,0,1)],this.basis=this.axes.map(()=>new e.Vector3),this.scale=new e.Vector3(1,1,1);let{pieces:r}=N(0);this.transforms=r.map(()=>new e.Matrix4),this.bodies=new e.InstancedMesh(new w(H,H,H,1,.065),new e.MeshStandardMaterial({color:2106928,roughness:.33,metalness:.54,fog:!1}),r.length),this.bodies.boundingSphere=new e.Sphere(new e.Vector3,4);let o=new w(F,F,B,1,.021),{material:t,uniforms:l}=_(e,F,s);this.stellar=l,this.faces=new e.InstancedMesh(o,t,54),this.magnetism=new R(e,this.faces.count);let i=[],c=new e.Vector3,a=this.axes[2];r.forEach(({home:h},f)=>{for(let[p,m,y]of W){if(h[p]!==m)continue;c.copy(this.axes[p]).multiplyScalar(m),this.rotation.setFromUnitVectors(a,c);let n=new e.Matrix4().compose(c.multiplyScalar(G),this.rotation,this.scale);this.faces.setColorAt(this.tileMounts.length,new e.Color(y));let x=(f*29+p*17+m*7+101)%97/97,u=h[(p+1)%3]===0&&h[(p+2)%3]===0?1:x>.67?.88:x>.32?.58:.28;i.push(x,u),this.tileMounts.push({piece:f,matrix:n}),this.panelPoses.push(new e.Matrix4)}}),o.setAttribute(`aStellar`,new e.InstancedBufferAttribute(new Float32Array(i),2)),o.setAttribute(`aMagneticOffset`,this.magnetism.offsets),this.bodies.instanceMatrix.setUsage(e.DynamicDrawUsage),this.faces.instanceMatrix.setUsage(e.DynamicDrawUsage),this.bodies.frustumCulled=this.faces.frustumCulled=!1,this.root.add(this.bodies,this.faces),this.pose(1,0)}setChapter(e,s){this.stellar.uStellarChapter.value=e,this.field=s,this.magnetism.invalidate()}pulse(e){this.stellar.uFrontierPulse.value=e}tuneJourneySurface(e,s){let r=Math.max(0,Math.min(4,e)),o=L[s.finish]??L[0];this.stellar.uJourneyFlux.value=(.34+r*.12)*(.48+s.energy)*o.flux,this.stellar.uStellarStyle.value.set(s.pattern,s.warp,s.finish);let t=this.faces.material;t.roughness=Math.max(.06,Math.min(.9,o.roughness-Math.min(r,3)*.016+s.roughness)),t.metalness=Math.max(0,Math.min(1,o.metalness+s.metalness))}animate(e,s,r,o,t,l,i,c=1){r||(this.plasmaTime+=e*c*(s?1:.55)),this.stellar.uStellarTime.value=r?0:this.plasmaTime;let a=r?0:Math.min(1,Math.hypot(o.velocityX,o.velocityY))*o.presence;this.stellar.uStellarQuality.value=s&&!r&&(a>.035||this.stellar.uFrontierPulse.value>.09)?1:0;let h=Math.max(0,Math.min(1,this.stellar.uStellarChapter.value/.52)),f=1-h*h*(3-2*h),p=r?0:o.presence*(f*(s?.16:0)+this.stellar.uJourneyFlux.value*.27),m=Math.min(1,a+p)*(s?1:.48)*(.2+this.field*.8);if(this.stellar.uStellarPointer.value.set(o.x,o.y,m),this.stellar.uStellarViewport.value.set(Math.max(1,l),Math.max(1,i)),r||!this.root.visible){this.magnetism.reset();return}let y=Math.max(0,(Math.sqrt(a)-.11)/.89),n=s?y*this.field:0;f>0&&n>=8e-5&&e>0&&(t.updateMatrixWorld(),this.magnetism.invalidate()),this.magnetism.advance(e,t,this.root,this.panelPoses,l/Math.max(1,i),o.x,o.y,n)}inspectionPieces;pose(e,s,r){if(e===this.previousAssembly&&s===this.previousSolve&&r===this.inspectionPieces)return;this.previousAssembly=e,this.previousSolve=s,this.inspectionPieces=r;let{pieces:o,turn:t,angle:l}=r?{pieces:r,turn:void 0,angle:0}:N(s);t&&l&&this.pivot.setFromAxisAngle(this.axes[t.axis],l);let i=_$1(1.18,1,e);o.forEach(({cell:c,basis:a},h)=>{let[f,p,m]=c;this.basis.forEach((n,x)=>n.fromArray(a[x])),this.rotation.setFromRotationMatrix(this.matrix.makeBasis(this.basis[0],this.basis[1],this.basis[2])),this.position.set(f*i,p*i,m*i),t&&l&&c[t.axis]===t.layer&&(this.position.applyQuaternion(this.pivot),this.rotation.premultiply(this.pivot));let y=this.transforms[h].compose(this.position,this.rotation,this.scale);this.bodies.setMatrixAt(h,y)}),this.tileMounts.forEach(({piece:c,matrix:a},h)=>{let f=this.panelPoses[h].multiplyMatrices(this.transforms[c],a);this.faces.setMatrixAt(h,f)}),this.magnetism.invalidate(),this.bodies.instanceMatrix.needsUpdate=!0,this.faces.instanceMatrix.needsUpdate=!0}screenBounds(e,s,r){let o=1/0,t=-1/0,l=1/0,i=-1/0,c=G+B/2;this.root.updateWorldMatrix(!0,!1);for(let a of this.transforms)for(let h of[-c,c])for(let f of[-c,c])for(let p of[-c,c]){let m=this.position.set(h,f,p).applyMatrix4(a).applyMatrix4(this.root.matrixWorld).project(e),y=(m.x+1)*s/2,n=(1-m.y)*r/2;o=Math.min(o,y),t=Math.max(t,y),l=Math.min(l,n),i=Math.max(i,n)}return{left:o,right:t,top:l,bottom:i}}hit(e){this.root.updateWorldMatrix(!0,!0);let s=e.intersectObject(this.bodies,!1)[0];return s&&this.root.worldToLocal(s.point)}dispose(){this.bodies.dispose(),this.faces.dispose()}};export{Q as t};