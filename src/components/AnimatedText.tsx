import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Invisible placeholder keeps natural text flow and line breaking. */}
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span
        aria-hidden="true"
        style={{ position: 'absolute', left: 0, top: 0, opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordIdx) => {
        const chars = [...word, wordIdx < words.length - 1 ? ' ' : ''].filter(Boolean);

        return (
          <span
            key={`${word}-${wordIdx}`}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {chars.map((char, i) => {
              const start = charIndex / totalChars;
              const end = (charIndex + 1) / totalChars;
              charIndex += 1;

              return (
                <Char
                  key={`${char}-${i}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
