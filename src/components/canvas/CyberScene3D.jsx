import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CyberScene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070c, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 70;
    camera.position.y = 10;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. 3D PARTICLE FIELD (Cyber Stardust / Data Nodes)
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00ff88); // Cyber Emerald
    const color2 = new THREE.Color(0x00e5ff); // Cyber Cyan
    const color3 = new THREE.Color(0xa855f7); // Cyber Violet

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 180;

      const mixed = Math.random();
      const c = mixed < 0.4 ? color1 : mixed < 0.75 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. 3D CYBER HOLOGRAPHIC CORE (Interactive Wireframe Polyhedron)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(28, 6, -10); // Offset to the right side of the hero
    scene.add(coreGroup);

    // Outer wireframe icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(14, 1);
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoWireMat);
    coreGroup.add(icoMesh);

    // Inner glowing core
    const innerGeom = new THREE.OctahedronGeometry(8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // Orbital Rings
    const ringGeom = new THREE.RingGeometry(18, 18.3, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeom, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    coreGroup.add(ring2);

    // 3. RECEDING CYBERNETIC GROUND GRID
    const gridHelper = new THREE.GridHelper(260, 60, 0x00ff88, 0x141c2e);
    gridHelper.position.y = -35;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.25;
    scene.add(gridHelper);

    // MOUSE INTERACTION & PARALLAX
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // RESIZE LISTENER
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Reposition core on smaller screens
      if (window.innerWidth < 1024) {
        coreGroup.position.set(0, 16, -20);
        coreGroup.scale.set(0.7, 0.7, 0.7);
      } else {
        coreGroup.position.set(28, 6, -10);
        coreGroup.scale.set(1, 1, 1);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);

    // ANIMATION LOOP
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth camera parallax
      targetX += (mouseX * 12 - targetX) * 0.05;
      targetY += (-mouseY * 8 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = 10 + targetY;
      camera.lookAt(0, 0, 0);

      // Rotate particle field slowly
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      // Rotate core elements
      icoMesh.rotation.x = elapsedTime * 0.2;
      icoMesh.rotation.y = elapsedTime * 0.3;

      innerMesh.rotation.x = -elapsedTime * 0.35;
      innerMesh.rotation.y = -elapsedTime * 0.45;

      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.2;

      // Animate grid pulse
      gridHelper.position.z = (elapsedTime * 5) % 8.6;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      icoGeometry.dispose();
      icoWireMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
