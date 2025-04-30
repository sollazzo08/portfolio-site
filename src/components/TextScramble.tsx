'use client';
import { useEffect, useRef } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#_';

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function scrambleText(el: HTMLElement, text: string, duration = 1400) {
  const length = text.length;
  const frameRate = 55;
  const totalFrames = Math.floor(duration / frameRate);
  let frame = 0;

  const interval = setInterval(() => {
    let output = '';
    for (let i = 0; i < length; i++) {
      if (frame >= totalFrames) {
        output += text[i];
      } else {
        const shouldReveal = Math.random() < frame / totalFrames;
        output += shouldReveal ? text[i] : randomChar();
      }
    }
    el.textContent = output;
    frame++;

    if (frame > totalFrames) clearInterval(interval);
  }, frameRate);
}

type Props = {
  text: string;
  className?: string;
};

export default function TextScramble({ text, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) scrambleText(ref.current, text);
  }, [text]);

  return <div ref={ref} className={className}></div>;
}
