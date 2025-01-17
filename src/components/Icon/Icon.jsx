import clsx from 'clsx';
import icon from '../../images/sprite.svg';

const Icon = ({ iconId, className, ...restProps }) => {
  return (
    <svg className={clsx(className)} role="img" {...restProps}>
      <use href={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;
