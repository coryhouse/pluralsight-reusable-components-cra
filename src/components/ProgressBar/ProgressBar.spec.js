import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

test('should render red with 20%', () => {
  const tree = renderer.create(<ProgressBar percent={20} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render light green with 60%', () => {
  const tree = renderer.create(<ProgressBar percent={60} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render dark green with 100%', () => {
  const tree = renderer.create(<ProgressBar percent={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});
