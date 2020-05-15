import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button'


const buttonClicked = e => {
  e.preventDefault()
  alert("Hello")
}

export const basicButton = () => <Button variant="primary">Basic Button</Button>
export const functionButtpn = () => (<Button onClick={buttonClicked}>Function Button</Button>)
export const linkButton = () => <Button href="/route">Linked Button</Button>

export default {
  component: Button,
  title: 'Button',
};
