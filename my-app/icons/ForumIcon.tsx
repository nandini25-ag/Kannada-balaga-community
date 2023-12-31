import IconProps from './IconProps';

const ForumIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M4 32.2V6.1q0-.7.65-1.4T6 4h25.95q.75 0 1.4.675Q34 5.35 34 6.1v17.8q0 .7-.65 1.4t-1.4.7H12l-6.7 6.7q-.35.35-.825.175T4 32.2ZM7 7v16V7Zm7.05 29q-.7 0-1.375-.7T12 33.9V29h25V12h5q.7 0 1.35.7.65.7.65 1.45v28q0 .5-.475.675-.475.175-.825-.175L36.05 36ZM31 7H7v16h24Z' />
    </svg>
  );
};

export default ForumIcon;
