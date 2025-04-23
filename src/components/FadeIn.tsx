// components/FadeIn.tsx
import React from 'react';
import { useInView } from '../hooks/useInView';
import '../index.css';

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, isIntersecting } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isIntersecting ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
