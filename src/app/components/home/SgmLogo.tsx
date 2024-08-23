'use client';
import { useExplode } from '@/app/hooks/useExplode';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Group, Material, Mesh } from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
};

interface SgmLogoProps extends GroupProps {
}

export function SgmLogo(props: SgmLogoProps) {
  const { nodes, materials } = useGLTF('/models/sgm_logo1.glb') as GLTFResult;
  const group = useRef<Group>(null);
  useExplode(group, {
    distance: 6,
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh geometry={nodes.Plane_cell.geometry} material={materials['Grass 01']} position={[0.727, -0.432, 0.315]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell001.geometry} material={materials['Grass 01']} position={[-0.773, -0.409, 0.123]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell002.geometry} material={materials['Grass 01']} position={[1.951, 0.06, 0.331]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell003.geometry} material={materials['Grass 01']} position={[0.27, -0.399, 0.125]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell004.geometry} material={materials['Grass 01']} position={[0.966, 0.039, 0.094]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell005.geometry} material={materials['Grass 01']} position={[0.747, -0.376, 0.136]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell006.geometry} material={materials['Grass 01']} position={[-1.426, -0.159, 0.346]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell007.geometry} material={materials['Grass 01']} position={[-1.123, 0.491, 0.355]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell008.geometry} material={materials['Grass 01']} position={[1.418, 0.348, 0.096]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell009.geometry} material={materials['Grass 01']} position={[-1.955, 0.249, 0.138]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell010.geometry} material={materials['Grass 01']} position={[-0.434, -0.26, 0.147]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell011.geometry} material={materials['Grass 01']} position={[1.727, 0.067, 0.094]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell012.geometry} material={materials['Grass 01']} position={[1.276, -0.032, 0.12]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell013.geometry} material={materials['Grass 01']} position={[1.668, 0.046, 0.338]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell014.geometry} material={materials['Grass 01']} position={[0.149, -0.161, 0.329]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell015.geometry} material={materials['Grass 01']} position={[-0.864, 0.423, 0.125]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell016.geometry} material={materials['Grass 01']} position={[1.184, 0.44, 0.347]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell017.geometry} material={materials['Grass 01']} position={[0.977, 0.413, 0.109]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell018.geometry} material={materials['Grass 01']} position={[1.595, -0.395, 0.306]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell019.geometry} material={materials['Grass 01']} position={[1.676, 0.381, 0.133]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell020.geometry} material={materials['Grass 01']} position={[-0.09, -0.059, 0.29]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell021.geometry} material={materials['Grass 01']} position={[-1.571, -0.509, 0.11]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell022.geometry} material={materials['Grass 01']} position={[-1.475, -0.452, 0.34]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell023.geometry} material={materials['Grass 01']} position={[-1.16, -0.291, 0.301]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell024.geometry} material={materials['Grass 01']} position={[-0.164, 0.302, 0.338]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell025.geometry} material={materials['Grass 01']} position={[-2.197, -0.371, 0.124]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell026.geometry} material={materials['Grass 01']} position={[0.121, -0.109, 0.129]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell027.geometry} material={materials['Grass 01']} position={[1.931, 0.012, 0.127]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell028.geometry} material={materials['Grass 01']} position={[-2.009, -0.509, 0.11]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell029.geometry} material={materials['Grass 01']} position={[-1.997, -0.515, 0.362]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell030.geometry} material={materials['Grass 01']} position={[-2.199, -0.371, 0.327]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell031.geometry} material={materials['Grass 01']} position={[1.368, 0.521, 0.352]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell032.geometry} material={materials['Grass 01']} position={[1.497, 0.05, 0.143]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell033.geometry} material={materials['Grass 01']} position={[0.932, -0.271, 0.178]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell034.geometry} material={materials['Grass 01']} position={[0.112, -0.446, 0.343]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell035.geometry} material={materials['Grass 01']} position={[-1.363, -0.12, 0.111]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell036.geometry} material={materials['Grass 01']} position={[-1.636, 0.432, 0.335]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell037.geometry} material={materials['Grass 01']} position={[1.854, 0.316, 0.107]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell038.geometry} material={materials['Grass 01']} position={[1.881, 0.324, 0.35]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell039.geometry} material={materials['Grass 01']} position={[1.996, 0.197, 0.119]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell040.geometry} material={materials['Grass 01']} position={[1.9, 0.494, 0.111]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell041.geometry} material={materials['Grass 01']} position={[-1.839, -0.367, 0.34]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell042.geometry} material={materials['Grass 01']} position={[1.182, 0.428, 0.096]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell043.geometry} material={materials['Grass 01']} position={[-0.028, 0.034, 0.303]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell044.geometry} material={materials['Grass 01']} position={[-1.511, 0.48, 0.112]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell045.geometry} material={materials['Grass 01']} position={[-1.221, -0.454, 0.153]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell046.geometry} material={materials['Grass 01']} position={[-0.739, -0.285, 0.337]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell047.geometry} material={materials['Grass 01']} position={[1.989, 0.486, 0.312]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell048.geometry} material={materials['Grass 01']} position={[-1.845, 0.465, 0.143]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell049.geometry} material={materials['Grass 01']} position={[-1.028, -0.02, 0.338]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell050.geometry} material={materials['Grass 01']} position={[1.732, -0.435, 0.337]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell051.geometry} material={materials['Grass 01']} position={[1.55, 0.3, 0.317]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell052.geometry} material={materials['Grass 01']} position={[1.666, -0.439, 0.122]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell053.geometry} material={materials['Grass 01']} position={[-1.85, -0.042, 0.289]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell054.geometry} material={materials['Grass 01']} position={[-1.342, 0.039, 0.167]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell055.geometry} material={materials['Grass 01']} position={[-1.322, 0.038, 0.357]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell056.geometry} material={materials['Grass 01']} position={[-1.111, 0.462, 0.123]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell057.geometry} material={materials['Grass 01']} position={[1.032, 0.055, 0.334]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell058.geometry} material={materials['Grass 01']} position={[-1.427, -0.311, 0.145]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell059.geometry} material={materials['Grass 01']} position={[-0.225, 0.28, 0.13]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell060.geometry} material={materials['Grass 01']} position={[-1.852, -0.36, 0.126]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell061.geometry} material={materials['Grass 01']} position={[-2.281, -0.527, 0.13]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell062.geometry} material={materials['Grass 01']} position={[-1.201, 0.33, 0.119]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell063.geometry} material={materials['Grass 01']} position={[-2.067, -0.066, 0.135]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell064.geometry} material={materials['Grass 01']} position={[-2.278, -0.519, 0.346]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell065.geometry} material={materials['Grass 01']} position={[-0.45, 0.407, 0.29]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell066.geometry} material={materials['Grass 01']} position={[1.281, -0.01, 0.337]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell067.geometry} material={materials['Grass 01']} position={[-0.427, -0.26, 0.346]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell068.geometry} material={materials['Grass 01']} position={[0.966, 0.397, 0.324]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell069.geometry} material={materials['Grass 01']} position={[1.805, 0.477, 0.325]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell070.geometry} material={materials['Grass 01']} position={[-1.959, 0.264, 0.346]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell071.geometry} material={materials['Grass 01']} position={[-2.083, -0.023, 0.315]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell072.geometry} material={materials['Grass 01']} position={[0.377, 0.423, 0.157]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell074.geometry} material={materials['Grass 01']} position={[2.109, 0.419, 0.296]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell075.geometry} material={materials['Grass 01']} position={[-1.672, 0.212, 0.126]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell076.geometry} material={materials['Grass 01']} position={[1.733, -0.225, 0.312]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell077.geometry} material={materials['Grass 01']} position={[-0.931, 0.312, 0.082]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell078.geometry} material={materials['Grass 01']} position={[0.854, -0.098, 0.316]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell079.geometry} material={materials['Grass 01']} position={[-0.909, 0.348, 0.277]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell080.geometry} material={materials['Grass 01']} position={[1.735, -0.252, 0.158]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell081.geometry} material={materials['Grass 01']} position={[2.072, 0.457, 0.115]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell082.geometry} material={materials['Grass 01']} position={[-1.702, 0.13, 0.318]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell083.geometry} material={materials['Grass 01']} position={[1.384, 0.396, 0.335]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell084.geometry} material={materials['Grass 01']} position={[0.255, 0.305, 0.119]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell085.geometry} material={materials['Grass 01']} position={[-0.777, -0.533, 0.277]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell086.geometry} material={materials['Grass 01']} position={[-1.252, 0.342, 0.329]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell087.geometry} material={materials['Grass 01']} position={[-0.855, 0.491, 0.352]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell088.geometry} material={materials['Grass 01']} position={[-0.018, -0.382, 0.178]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell089.geometry} material={materials['Grass 01']} position={[1.37, 0.518, 0.097]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell090.geometry} material={materials['Grass 01']} position={[-2.001, 0.049, 0.147]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell091.geometry} material={materials['Grass 01']} position={[0.42, -0.262, 0.35]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell092.geometry} material={materials['Grass 01']} position={[-1.064, -0.222, 0.087]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell093.geometry} material={materials['Grass 01']} position={[0.55, -0.554, 0.084]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell094.geometry} material={materials['Grass 01']} position={[1.153, -0.247, 0.113]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell095.geometry} material={materials['Grass 01']} position={[-0.523, 0.368, 0.115]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell096.geometry} material={materials['Grass 01']} position={[0.596, 0.5, 0.113]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell097.geometry} material={materials['Grass 01']} position={[1.236, -0.383, 0.33]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell098.geometry} material={materials['Grass 01']} position={[-0.128, -0.348, 0.347]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell099.geometry} material={materials['Grass 01']} position={[-0.376, -0.014, 0.305]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell100.geometry} material={materials['Grass 01']} position={[0.206, 0.304, 0.087]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell101.geometry} material={materials['Grass 01']} position={[1.163, -0.406, 0.222]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell102.geometry} material={materials['Grass 01']} position={[0.174, 0.336, 0.289]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell103.geometry} material={materials['Grass 01']} position={[-0.914, -0.56, 0.069]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell104.geometry} material={materials['Grass 01']} position={[-0.646, 0.017, 0.324]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell105.geometry} material={materials['Grass 01']} position={[1.144, -0.283, 0.328]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell106.geometry} material={materials['Grass 01']} position={[-0.074, 0.076, 0.086]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell107.geometry} material={materials['Grass 01']} position={[-1.803, -0.062, 0.083]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell108.geometry} material={materials['Grass 01']} position={[0.48, 0.467, 0.332]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell109.geometry} material={materials['Grass 01']} position={[0.892, 0.263, 0.137]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell110.geometry} material={materials['Grass 01']} position={[0.407, 0.333, 0.351]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell111.geometry} material={materials['Grass 01']} position={[0.433, -0.031, 0.335]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell112.geometry} material={materials['Grass 01']} position={[-1.039, -0.052, 0.123]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell113.geometry} material={materials['Grass 01']} position={[-0.619, 0.083, 0.128]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell114.geometry} material={materials['Grass 01']} position={[-0.573, 0.175, 0.309]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell115.geometry} material={materials['Grass 01']} position={[0.74, -0.152, 0.119]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell116.geometry} material={materials['Grass 01']} position={[0.415, -0.057, 0.116]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell117.geometry} material={materials['Grass 01']} position={[-1.19, -0.547, 0.379]} rotation={[Math.PI, -0.004, Math.PI]} />
      <mesh geometry={nodes.Plane_cell118.geometry} material={materials['Grass 01']} position={[-0.151, -0.085, 0.067]} rotation={[Math.PI, -0.004, Math.PI]} />
			</group>
  )
}

useGLTF.preload('/models/sgm_logo1.glb')
