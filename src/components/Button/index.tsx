import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './index.module.css';

type Props = {
  /** 类型 */
  type?: 'default' | 'primary' | 'link';
  /** 形状 */
  shape?: 'default' | 'circle';
  /**大小 */
  size?: 'default' | 'small' | 'large';
  /** 属性将使按钮适合其父宽度 */
  block?: boolean;
  /**头部插槽 */
  prefix?: React.ReactNode;
  /**尾部插槽 */
  suffix?: React.ReactNode;
  /**是否有点击动画 */
  animated?: boolean;
};

export type ButtonProps = PropsWithChildren<
  Props & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'prefix'>
>;

const Button: FC<ButtonProps> = ({
  type = 'default',
  size = 'default',
  shape = 'default',
  block,
  prefix,
  suffix,
  disabled,
  className,
  animated = true,
  children,
  ...rest
}) => {
  // hooks start

  // hooks end

  // useEffect functions start

  // useEffect functions end

  // logic functions start
  const classes = classNames(
    styles.button,
    'disabled:bg-[#999999] disabled:border-[#999999]  disabled:cursor-not-allowed',
    className,
    {
      [styles[`button-${type}`]]: type,
      [styles[`button-size-${size}`]]: size,
      [styles[`button-shape-${shape}`]]: shape,
      [styles['button-block']]: block,
      [styles['button-no-animation']]: !animated || disabled,
    },
  );
  // logic functions end

  // render functions start
  return (
    <>
      <button className={classes} disabled={disabled} {...rest}>
        {prefix && prefix}
        {children}
        {suffix && suffix}
      </button>
    </>
  );
  // render functions end
};

export default Button;
