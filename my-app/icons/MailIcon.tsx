import IconProps from './IconProps';

const MailIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm34-26.25-16.2 10.6q-.2.1-.375.175-.175.075-.425.075t-.425-.075q-.175-.075-.375-.175L7 13.75V37h34ZM24 21.9 40.8 11H7.25ZM7 13.75v.35-1.975.025V11v1.15-.05 2-.35V37Z' />
    </svg>
  );
};
export default MailIcon;