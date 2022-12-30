import { ComponentMeta, StoryObj } from '@storybook/react';
import Collapse, { ICollapseProps } from '../index';

export default {
  title: 'Example/Collapse',
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

export const Default: StoryObj<ICollapseProps> = {
    args: {
        isOpen: true,
        children: 'Hello World',
    },
}
