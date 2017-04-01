import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ProgressBar from '../src/components/ProgressBar';
import Label from '../src/components/Label';
import TextInput from '../src/components/TextInput';
import EyeIcon from '../src/components/EyeIcon'
import PasswordInputExampleAllFeatures from './Examples/PasswordInput/PasswordInputExampleAllFeatures';
import RegistrationForm from '../src/components/RegistrationForm';

storiesOf('ProgressBar', module)
  .add('20%', () => (
    <ProgressBar percent={20} width={150} />
  ))
  .add('60%', () => (
    <ProgressBar percent={60} width={150} />
  ))
  .add('100% with height of 10px', () => (
    <ProgressBar percent={100} width={150} height={10} />
  ))

storiesOf('Label', module)
  .add('Optional', () => (
    <Label htmlFor="label-optional" label="First Name" />
  ))
    .add('Required', () => (
    <Label htmlFor="label-reqd" label="First Name" required />
  ))

storiesOf('TextInput', module)
  .add('with minimal features enabled', () => (
    <TextInput htmlId="text-input-min-features" name="email" label="Email" onChange={() => {}} />
  ))
  .add('with required field', () => (
    <TextInput htmlId="text-input-reqd" name="email" label="Email" onChange={() => {}} required />
  ))
  .add('with error', () => (
    <TextInput htmlId="text-input-error" name="email" label="Email" onChange={() => {}} required error="Email is required." />
  ))
  .add('with placeholder', () => (
    <TextInput htmlId="text-input-placeholder" name="email" label="Email" onChange={() => {}} placeholder="First name" />
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
