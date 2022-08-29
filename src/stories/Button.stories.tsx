import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  type: 'default',
  children: <span>Web-2</span>,
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: <span>Web-2</span>,
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  children: <span>Web-2</span>,
};

export const Block = Template.bind({});
Block.args = {
  type: 'default',
  block: true,
  children: <span>Web-2</span>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'default',
  disabled: true,
  children: <span>Web-2</span>,
};
