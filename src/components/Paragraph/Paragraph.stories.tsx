import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph from './index';

const longText = `鲜美的龙虾，经过上汤烹调。置于伊面之上，鲜美汤汁流入其中。即使是最朴素的蛋面，也充斥着龙虾的鲜香。仅需$29.00！即可享受美食的快乐！
鲜美的龙虾，经过上汤烹调。置于伊面之上，鲜美汤汁流入其中。即使是最鲜美的龙虾，经过上汤烹调。置于伊面之上，鲜美汤汁流入其中。即使是最朴素的蛋面，也充斥着龙虾的鲜香。仅需$29.00！即可享受美食的快乐！
`;
const longTextEn = `Visually-stunning, easy to customize site templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: longText,
};

export const WithTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithTitle.args = {
  title: '港式海鲜酒家的经典菜肴之一, 龙虾伊面',
  text: longText,
};

export const WithLongText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLongText.args = {
  title: '港式海鲜酒家的经典菜肴之一, 龙虾伊面',
  text: `${longText}${longText}${longText}`,
};

export const OverLineIsTwo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OverLineIsTwo.args = {
  title: '港式海鲜酒家的经典菜肴之一, 龙虾伊面',
  text: `${longText}${longText}${longText}`,
  overline: 2,
};

export const WithEnglish = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithEnglish.args = {
  title: 'Modern website templates, crafted with Tailwind CSS',
  text: `${longTextEn}${longTextEn}${longTextEn}${longTextEn}${longTextEn}`,
  overline: 4,
};

export const WithStyles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithStyles.args = {
  title: 'Modern website templates, crafted with Tailwind CSS',
  text: `${longTextEn}${longTextEn}${longTextEn}${longTextEn}${longTextEn}`,
  bodyStyles: {
    backgroundColor: 'yellow',
    color: 'green',
  },
  titleStyles: {
    color: 'red'
  }
};

export const WithMarkdownSyntax = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMarkdownSyntax.args = {
  title: 'Modern website templates, crafted with Tailwind CSS',
  text: '**Visually-stunning**, easy to ~customize site templates~ built ~~with React and Next.js~~. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS',
};

export const WithExpandedBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithExpandedBtn.args = {
  title: 'Modern website templates, crafted with Tailwind CSS',
  text: `${longTextEn}${longTextEn}${longTextEn}${longTextEn}${longTextEn}`,
  expandedBtn: '收起',
};
