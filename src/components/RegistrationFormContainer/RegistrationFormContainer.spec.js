import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import RegistrationFormContainer from './RegistrationFormContainer';

it('should show 2 error message when submit button is clicked on empty form', () => {
  const wrapper = mount(<RegistrationFormContainer onSubmit={() => {}} />);
  wrapper.find({type: 'submit'}).simulate('click');
  let errors = wrapper.find('.error');
  expect(errors).toHaveLength(2);
});
