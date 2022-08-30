import classnames from 'classnames';
import type { CSSProperties, FC } from 'react';

type IProps = {
  styles?: CSSProperties;
  classNames?: string;
};

const Divider: FC<IProps> = ({ styles, classNames }) => {
  const DividerClassNames = classnames(
    "relative w-full after:absolute after:content-[''] after:block after:w-full after:h-[1px] after:left-0 after:top-0 after:scale-x-100 after:scale-y-50 after:bg-neutral-300",
    classNames,
  );

  return <div className={DividerClassNames} style={styles} />;
};

export default Divider;
