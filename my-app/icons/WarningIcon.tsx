import IconProps from './IconProps';

const WarningIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
      className={className}
    >
      <path d='M4.6 42q-.85 0-1.3-.75-.45-.75 0-1.5l19.4-33.5q.45-.75 1.3-.75.85 0 1.3.75l19.4 33.5q.45.75 0 1.5t-1.3.75Zm19.6-22.6q-.65 0-1.075.425-.425.425-.425 1.075v8.2q0 .65.425 1.075.425.425 1.075.425.65 0 1.075-.425.425-.425.425-1.075v-8.2q0-.65-.425-1.075-.425-.425-1.075-.425Zm0 16.75q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Z' />
    </svg>
  );
};
export default WarningIcon;
