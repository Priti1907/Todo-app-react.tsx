import React from 'react';
import { render} from '@testing-library/react';
import App from './App';

describe('snapshot testing for App page', () => {
  it('should render', () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
  });
});








