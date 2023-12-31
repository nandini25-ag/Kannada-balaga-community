import IconProps from './IconProps';

const BadMoodIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      height='48'
      width='48'
      fill='currentColor'
    >
      <path d='M31.3 21.35q1.15 0 1.925-.775Q34 19.8 34 18.65t-.775-1.925q-.775-.775-1.925-.775t-1.925.775q-.775.775-.775 1.925t.775 1.925q.775.775 1.925.775Zm-14.6 0q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925q-.775-.775-1.925-.775t-1.925.775Q14 17.5 14 18.65t.775 1.925q.775.775 1.925.775ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-20Zm0 17q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm-8.4-7.25h16.8q.7 0 1.025-.45.325-.45-.075-1.05-1.45-2.4-3.975-3.75Q26.85 27.15 24 27.15t-5.35 1.35q-2.5 1.35-3.95 3.75-.4.6-.1 1.05.3.45 1 .45Z' />
    </svg>
  );
};
export default BadMoodIcon;
