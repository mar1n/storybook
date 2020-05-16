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

const { icon, innerText } = knobData;

export const basicButton = () => (
	<Button>{text(innerText.label, innerText.default, innerText.group)}</Button>
);
export const secondaryButton = () => (
	<Button variant="secondary">
		{text(innerText.label, "Secondary button", innerText.group)}
	</Button>
);
export const tertiaryButton = () => (
	<Button variant="tertiary">
		{text(innerText.label, "Tertiary button", innerText.group)}
	</Button>
);
export const iconButton = () => (
	<Button icon={select(icon.label, icon.options, icon.default, icon.group)}>
		{text(innerText.label, "Icon button", innerText.group)}
	</Button>
);
export const functionButton = () => (
	<Button onClick={buttonClicked}>
		{text(innerText.label, "Function button", innerText.group)}
	</Button>
);
export const linkedButton = () => (
	<Button href="/route">
		{text(innerText.label, "Link button", innerText.group)}
	</Button>
);

export default {
	component: Button,
	decorators: [withKnobs],
	title: "Atoms|Button"
};
