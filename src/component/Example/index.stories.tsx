import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Example from ".";

const meta: Meta<typeof Example> = {
  title: "Components/Example",
  component: Example,
  tags: ['autodocs'],
  argTypes: {
    text: { control: "text" },
    flag: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "ああああ",
    flag: true,
    action: () => {},
  },
};

