import compose from './compose';

/** 加粗标识符 */
const THICKENING_KEY = '**';
/** 删除线标识符 */
const STRIKETHROUGH_KEY = '~~';
/** 斜体字标识符 */
const ITALIC_KEY = '~';

const getThickeningStr = (value: string) => {
  return `<strong>${value}</strong>`;
};

const getStrikethroughStr = (value: string) => {
  return `<span style="text-decoration: line-through">${value}</span>`;
};

const getItalicStr = (value: string) => {
  return `<span style="font-style: oblique">${value}</span>`;
};

const doParsing = (text: string, key: string, htmlStr: (value: string) => string): string => {
  const stringList = text.split(key);
  if (stringList.length > 1) {
    let result = '';
    let prevIndex = 0;
    stringList.forEach((item, index) => {
      if (index === prevIndex + 1) {
        result += htmlStr(item);
      } else {
        result += item;
        prevIndex = index;
      }
    });
    return result;
  }
  return text;
};

/** 解析加粗语法(双星号)：** ** */
const parseThickening = (text: string): string => {
  if (text && typeof text === 'string') {
    return doParsing(text, THICKENING_KEY, getThickeningStr);
  }
  return '';
};

/** 解析删除线语法(双波浪线): ~~ ~~ */
const parseStrikethrough = (text: string) => {
  if (text && typeof text === 'string') {
    return doParsing(text, STRIKETHROUGH_KEY, getStrikethroughStr);
  }
  return '';
};

/** 解析斜体语法(单波浪线): ~ ~ */
const parseItalic = (text: string) => {
  if (text && typeof text === 'string') {
    return doParsing(text, ITALIC_KEY, getItalicStr);
  }
  return '';
};

const parseMarkdownStr = compose(parseItalic, parseStrikethrough, parseThickening);

export default parseMarkdownStr;
