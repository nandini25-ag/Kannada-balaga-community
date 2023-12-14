import IconProps from './IconProps';

const ArrowForwardIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      height='48'
      width='48'
      fill='currentColor'
    >
      <path d='m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z' />
    </svg>
  );
};
export default ArrowForwardIcon;
