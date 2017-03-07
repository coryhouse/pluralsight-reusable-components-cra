import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

// Snapshot test
describe('ProgressBar', () => {
  test('should render red with 20%', () => {
    const component = renderer.create(<ProgressBar percent={20} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render light green with 60%', () => {
    const component = renderer.create(<ProgressBar percent={60} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render dark green with 100%', () => {
    const component = renderer.create(<ProgressBar percent={100} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
