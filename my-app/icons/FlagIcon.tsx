import classNames from '../helpers/classNames';
import IconProps from './IconProps';

const FlagIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M11.5 42q-.65 0-1.075-.425Q10 41.15 10 40.5v-31q0-.65.425-1.075Q10.85 8 11.5 8h14.45q.55 0 .95.325.4.325.5.875l.7 3.1h10.4q.65 0 1.075.425Q40 13.15 40 13.8v15.5q0 .65-.425 1.075-.425.425-1.075.425H28.4q-.5 0-.925-.3-.425-.3-.525-.85l-.7-3.1H13V40.5q0 .65-.425 1.075Q12.15 42 11.5 42ZM25 19.4Zm4.75 8.4H37V15.3H25.55L24.6 11H13v12.55h15.8Z' />
    </svg>
  );
};
export default FlagIcon;
