import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article
      title="Test Article"
      author="Mr. Somebody"
      description="blah blah blah"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
