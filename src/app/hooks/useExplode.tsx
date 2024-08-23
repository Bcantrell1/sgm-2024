'use client';
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";
import * as THREE from "three";

interface ExplodeMesh extends THREE.Mesh {
  originalPosition?: THREE.Vector3;
  directionVector?: THREE.Vector3;
  targetPosition?: THREE.Vector3;
  originalRotation?: THREE.Euler;
  targetRotation?: THREE.Euler;
}

interface ExplodeOptions {
  distance?: number;
  enableRotation?: boolean;
}

export const useExplode = (
  group: RefObject<THREE.Group>,
  { distance = 3, enableRotation = true }: ExplodeOptions
) => {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!group.current || initializedRef.current) return;
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);
    group.current.children.forEach((child) => {
      const mesh = child as ExplodeMesh;
      if (!mesh.position) {
        console.error('Mesh does not have a position property:', mesh);
        return;
      }
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);
      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
      mesh.originalRotation = mesh.rotation.clone();
      mesh.targetRotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
    });
    initializedRef.current = true;
  }, [group]);

  useEffect(() => {
    if (!group.current) return;
    group.current.children.forEach((child) => {
      const mesh = child as ExplodeMesh;
      if (!mesh.originalPosition || !mesh.directionVector) {
        console.error('Mesh is missing originalPosition or directionVector:', mesh);
        return;
      }
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(distance));
    });
  }, [distance, group]);

  const scrollData = useScroll();

  useFrame(() => {
    if (!group.current) return;
    group.current.children.forEach((child) => {
      const mesh = child as ExplodeMesh;
      if (!mesh.originalPosition || !mesh.targetPosition) {
        console.error('Mesh is missing originalPosition or targetPosition:', mesh);
        return;
      }
      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset
      );
      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset
      );
      if (enableRotation) {
        if (!mesh.originalRotation || !mesh.targetRotation) {
          console.error('Mesh is missing originalRotation or targetRotation:', mesh);
          return;
        }
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          scrollData.offset
        );
        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          scrollData.offset
        );
        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          scrollData.offset
        );
      }
    });
  });
};