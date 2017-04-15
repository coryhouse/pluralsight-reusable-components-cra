import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  // With getWidthAsPercentOfTotalWidth defined inside the component
  // Note: I'm not accepting a parameter with this style because it would lead
  // to me having to keep the initialization and the func call in sync on two separate lines.
  // test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
  //   const wrapper = shallow(<ProgressBar percent={50} width={500} />);
  //   const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
  //   expect(width).toEqual(250);
  // });

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
