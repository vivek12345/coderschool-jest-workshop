import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

test('should render properly', () => {
  const wrapper = shallow(<Button>Text</Button>);
  expect(wrapper).toMatchSnapshot();
});
