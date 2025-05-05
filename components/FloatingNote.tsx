import React from 'react';
import { Music } from 'lucide-react';

interface FloatingNoteProps {
  top: string;
  left: string;
  size: number;
  delay: number;
  className?: string;
}

const FloatingNote: React.FC<FloatingNoteProps> = ({ top, left, size, delay, className }) => {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={{
        top,
        left,
        animationDelay: `${delay}s`,
        animationDuration: '15s',
      }}
    >
      <Music size={size} />
    </div>
  );
};

export default FloatingNote;