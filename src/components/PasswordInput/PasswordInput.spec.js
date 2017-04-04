import React from 'react';
import renderer from 'react-test-renderer';
// Note that this import can be commented out if
// we declare the jestSetup in package.json because
// Enzyme functions are globally available for tests.
import {shallow} from 'enzyme';
import PasswordInput from './PasswordInput';

// Behavioral test
test('toggles input type when show/hide password clicked', () => {
  const wrapper = shallow(<PasswordInput
    htmlId="test"
    name="test"
    value=""
    onChange={() => {}}
    showVisibilityToggle
    />
  );

  // Password input should have a type of password initially.
  expect(wrapper.find({type: 'password'})).toHaveLength(1);
  wrapper.find('a').simulate('click');

  // Password input should have a type of text after clicking toggle.
  let passwordInput = wrapper.find({type: 'text'});
  expect(passwordInput).toHaveLength(1);
});

test('hides password quality by default', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    value="Uisi38#8iad" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('shows password quality when enabled and a password is entered', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    showQuality
    value="Uisi38#8iad" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('hides password quality when enabled but no password is entered', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    showQuality
    value="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
