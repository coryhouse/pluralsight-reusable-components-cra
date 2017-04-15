import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('getProgressWidth should return 50 with width of 100 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar width={100} percent={50} />);
    const width = wrapper.instance().getProgressWidth(100, 50);
    expect(width).toEqual(50);
  });

  test('should render red with 20%', () => {
    const tree = renderer.create(<ProgressBar width={100} percent={20} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render light green with 60%', () => {
    const tree = renderer.create(<ProgressBar width={100} percent={60} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render dark green with 100%', () => {
    const tree = renderer.create(<ProgressBar width={100} percent={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
