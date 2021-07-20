import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../app/App';
import NewsSearch from '../../containers/NewsSearch';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<NewsSearch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
