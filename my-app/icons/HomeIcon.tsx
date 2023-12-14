import IconProps from './IconProps';

const HomeIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox=' 0 0 48 48'
      fill='currentColor'
      className={className}
    >
      <path d='M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm0 3q-1.25 0-2.125-.875T8 39V19.5q0-.7.325-1.35.325-.65.875-1.05l13-9.75q.4-.3.85-.45.45-.15.95-.15.5 0 .95.15.45.15.85.45l13 9.75q.55.4.875 1.05.325.65.325 1.35V39q0 1.25-.875 2.125T37 42H26.5V29.5h-5V42Zm13-17.65Z' />
    </svg>
  );
};
export default HomeIcon;
