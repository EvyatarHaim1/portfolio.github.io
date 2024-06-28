import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  var mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;
    const canvas = document.createElement("canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const sphereGeometry = new THREE.SphereGeometry(16, 16, 16);
    const sphereMaterial = new THREE.MeshNormalMaterial();
    const spehreMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(spehreMesh);

    const animate = () => {
      renderer.render(scene.camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <div id="canvas" ref={mount}></div>;
};

export default ThreeScene;
