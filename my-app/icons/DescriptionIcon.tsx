import IconProps from './IconProps';

const DescriptionIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M17.45 35.5h13.1q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425h-13.1q-.65 0-1.075.425-.425.425-.425 1.075 0 .65.425 1.075.425.425 1.075.425Zm0-8.5h13.1q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q31.2 24 30.55 24h-13.1q-.65 0-1.075.425-.425.425-.425 1.075 0 .65.425 1.075Q16.8 27 17.45 27ZM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h16.8q.6 0 1.175.25.575.25.975.65l9.15 9.15q.4.4.65.975T40 16.2V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-29.2V7H11v34h26V16.3h-7.95q-.65 0-1.075-.425-.425-.425-.425-1.075ZM11 7v9.3V7v34V7Z' />
    </svg>
  );
};

export default DescriptionIcon;
