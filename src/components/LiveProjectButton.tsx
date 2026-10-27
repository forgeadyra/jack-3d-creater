interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href = '#',
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] ${className}`}
    >
      {label}
    </a>
  );
}
