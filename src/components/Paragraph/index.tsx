import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, FC } from 'react';
import parseMarkdownStr from '../../utils/parseMarkdownStr';

type IProps = {
  /** title样式 */
  titleStyles?: CSSProperties;
  /** title类名 */
  titleClassName?: string;
  /** body样式 */
  bodyStyles?: CSSProperties;
  /** body类名 */
  bodyClassName?: string;
  /** 超过几行隐藏并展示省略，默认3行 */
  overline?: number;
  /** 标题 */
  title?: string;
  /** 展示的文案，只能是字符串 */
  text: string;
  /** 展开文案后的收起按钮，如果有则展示，点击后收起 */
  closeBtn?: any;
  /** 查看更多文案，默认为中文的 查看更多 */
  showMoreText?: string;
  /**样式 */
  className?: string;
};

/** 行高 */
const DEFAULT_LINE_HEIGHT = 22;

/** 展开按钮样式类 */
const expandedBtnClassnames = classnames(
  "flex items-baseline absolute bottom-[-1px] right-[2px] h-[22px] font-bold text-slate-600 cursor-pointer before:block before:absolute before:content-[''] before:left-[-16px] before:top-[-16px] before:right-[-16px] before:bottom-[-16px]",
);

const Paragraph: FC<IProps> = ({
  titleStyles,
  bodyStyles,
  overline = 3,
  text,
  title,
  titleClassName,
  bodyClassName,
  closeBtn,
  showMoreText = '查看更多',
  className,
}) => {
  /** 展示文案dom，主要用来计算scrollHieght */
  const bodyRef = useRef<HTMLDivElement | null>(null);
  /** 当前body的maxHeight值，动态设置maxHeight达到文案的隐藏展示效果 */
  const [bodyMaxHieght, setBodyMaxHieght] = useState(overline * DEFAULT_LINE_HEIGHT);
  /** 文案下dom总高度 */
  const [bodyScrollHeight, setBodyScrollHeight] = useState<number>(0);
  /** 是否需要展示更多按钮，当scrollHeight大于overline * 行高时为true */
  const [shouldShowMore, setShouldShowMore] = useState(false);
  /** 是否展开，用于判断展开文案和小点点的隐藏 */
  const [isExpanded, setIsExpanded] = useState(false);

  const triggerClickShowMore = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setBodyMaxHieght(bodyScrollHeight);
    } else {
      setIsExpanded(false);
      setBodyMaxHieght(DEFAULT_LINE_HEIGHT * overline);
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      const scrollHieght = bodyRef.current.scrollHeight;
      // 加DEFAULT_LINE_HEIGHT / 2为了兼容safari
      if (scrollHieght > DEFAULT_LINE_HEIGHT * overline + DEFAULT_LINE_HEIGHT / 2) {
        setShouldShowMore(true);
      } else {
        setShouldShowMore(false);
      }
      setBodyScrollHeight(scrollHieght);
    }
  }, [overline]);

  const titleClassnames = classnames('text-17 leading-22 font-bold mb-[8px]', titleClassName);
  const bodyClassnames = classnames(
    `relative text-${
      bodyStyles?.fontSize ?? 15
    } leading-22 overflow-hidden ease-in-out duration-300`,
    bodyClassName,
  );

  return (
    <div className={classnames('relative flex overflow-hidden flex-col', className)}>
      {title && (
        <h3 className={titleClassnames} style={titleStyles}>
          {title}
        </h3>
      )}
      <div
        className={bodyClassnames}
        style={{ ...bodyStyles, maxHeight: `${bodyMaxHieght}px` }}
        ref={bodyRef}
      >
        <div className='break-words' dangerouslySetInnerHTML={{ __html: parseMarkdownStr(text) }} />
        {shouldShowMore && !isExpanded ? (
          <div
            style={{ WebkitTapHighlightColor: 'transparent' }}
            aria-hidden='true'
            onClick={triggerClickShowMore}
            className={expandedBtnClassnames}
          >
            {isExpanded ? null : (
              <div
                style={{
                  background:
                    'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7))',
                }}
                className='tracking-[2px] w-[70px] flex justify-end'
              >
                ....
              </div>
            )}
            <div className='bg-white pr-2'>{showMoreText}</div>
          </div>
        ) : (
          closeBtn && (
            <div
              className={expandedBtnClassnames}
              aria-hidden='true'
              onClick={triggerClickShowMore}
            >
              {closeBtn}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Paragraph;
