import { Meta, StoryObj } from '@storybook/web-components';
import './my-button';

const meta: Meta = {
  title: 'Components/MyButton',
  component: 'my-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define tus argTypes aquí
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    // Define tus args aquí
  },
  render: () => `<my-button>Content goes here</my-button>
  `,
};
