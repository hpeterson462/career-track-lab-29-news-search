import React from 'react';
import { render, screen } from '@testing-library/react';
import AllArticles from './AllArticles.jsx';
import { getApi } from '../../services/api.js';

jest.mock('../../../services/api.js');
describe('AllArticles container', () => {
  it('displays a loading screen at the start', () => {
    render(<AllArticles />);

    screen.getByAltText('dog carrying newspaper')
  });

  it('displays a list of articles', async () => {
    getApi.mockResolvedValue([
      {
        id: '1234',
        title: 'Test Article',
        author: 'Mr. Someone',
        description: 'blah blah blah'
      }
    ]);

    render(<AllArticles />);

    const articleList = await screen.findByTestId('articles');

    expect(articleList).not.toBeEmptyDOMElement();
  });
});
