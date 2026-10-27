import { useEffect, useRef, useState } from 'react';
import { ROW_ONE, ROW_TWO } from '../data/marquee';

function Row({ images, direction, offset }: {
  images: string[];
  direction: 1 | -1;
  offset: number;
}) {
  // Tripled so the strip never runs out of tiles while it travels.
  const tiles = [...images, ...images, ...images];
  const translate = direction * (offset - 200);

  return (
    <div className="flex gap-3 w-max" style={{
      transform: `translateX(${translate}px)`,
      willChange: 'transform',
    }}>
      {tiles.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="shrink-0 overflow-hidden rounded-2xl"
          style={{ width: 420, height: 270 }}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current;
      if (!node) return;

      const sectionTop = node.offsetTop;
      const next =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(next);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <Row images={ROW_ONE} direction={1} offset={offset} />
        <Row images={ROW_TWO} direction={-1} offset={offset} />
      </div>
    </section>
  );
}
