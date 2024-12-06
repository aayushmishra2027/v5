import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.
