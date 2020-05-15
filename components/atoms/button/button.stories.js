import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button'


const buttonClicked = e => {
  e.preventDefault()
  alert("Hello")
}

export const basicButton = () => <Button>Basic button</Button>;

export const secondaryButton = () => (
	<Button variant="secondary">Secondary button</Button>
)
export const tertiaryButton = () => (
	<Button variant="tertiary">Tertiary button</Button>
)
export const iconButton = () => <Button icon="plus">Icon button</Button>
export const functionButtpn = () => (<Button onClick={buttonClicked}>Function Button</Button>)
export const linkButton = () => <Button href="/route">Linked Button</Button>

export default {
  component: Button,
  title: 'Button',
};
