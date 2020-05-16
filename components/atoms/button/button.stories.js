import React from 'react';
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text } from "@storybook/addon-knobs"
import Button from './button'
import { withDesign } from 'storybook-addon-designs'

const buttonClicked = e => {
  e.preventDefault()
  alert("Hello")
}

import knobData from "./button.knobs.json"
const { icon } = knobData

export const basicButton = () => <Button>Button text</Button>;

export const secondaryButton = () => (
	<Button variant="secondary">Button text</Button>
)
export const tertiaryButton = () => (
	<Button variant="tertiary">Button text</Button>
)
export const iconButton = () => <Button icon="bag">Button text</Button>
export const functionButtpn = () => (<Button onClick={buttonClicked}>Function Button</Button>)
export const linkButton = () => <Button href="/route">Linked Button</Button>

basicButton.story = {
  name: 'Basic button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    }
  }
}

export default {
  component: Button,
  decorators: [withDesign],
  title: 'Button',
};
