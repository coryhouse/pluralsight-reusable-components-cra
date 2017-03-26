import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import RegistrationForm from './RegistrationForm';

it('should show 2 error messages when submit button is clicked on empty form', () => {
  // Note that I'm using mount so that all child components are rendered as well
  const wrapper = mount(<RegistrationForm onSubmit={() => {}} />);
  wrapper.find({type: 'submit'}).simulate('click');
  let errors = wrapper.find('.error');
  expect(errors).toHaveLength(2);
});
