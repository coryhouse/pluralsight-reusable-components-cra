import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ProgressBar from '../src/components/ProgressBar';
import TextInput from '../src/components/TextInput';
import EyeIcon from '../src/components/EyeIcon'
import PasswordInputExampleAllFeatures from './Examples/PasswordInput/PasswordInputExampleAllFeatures';
import RegistrationForm from '../src/components/RegistrationForm';

storiesOf('ProgressBar', module)
  .add('20 percent', () => (
    <ProgressBar percent={20}></ProgressBar>
  ))
  .add('60 percent', () => (
    <ProgressBar percent={60}></ProgressBar>
  ))
  .add('100 percent', () => (
    <ProgressBar percent={100}></ProgressBar>
  ))

storiesOf('TextInput', module)
  .add('with minimal features enabled', () => (
    <TextInput htmlId="text-input-min-features" name="email" label="Email" onChange={() => {}}></TextInput>
  ))
  .add('with required field', () => (
    <TextInput htmlId="text-input-reqd" name="email" label="Email" onChange={() => {}} required></TextInput>
  ))
  .add('with error', () => (
    <TextInput htmlId="text-input-error" name="email" label="Email" onChange={() => {}} required error="Email is required."></TextInput>
  ))
  .add('with placeholder', () => (
    <TextInput htmlId="text-input-placeholder" name="email" label="Email" onChange={() => {}} placeholder="First name"></TextInput>
  ))

storiesOf('EyeIcon', module)
  .add('displays', () => (
    <EyeIcon />
  ))

storiesOf('PasswordInput', module)
  .add('All features enabled', () => (
    <PasswordInputExampleAllFeatures />
  ))

storiesOf('RegistrationForm', module)
  .add('Demo', () => (
    <RegistrationForm onSubmit={user => console.log(user)} />
  ))
