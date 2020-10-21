import React from 'react';
import { render, screen } from '@testing-library/react';
import Articles from './Articles.jsx.js';

describe('Articles container', () => {
  it('displays a loading screen at the start', () => {
    render(<Articles />);

    screen.getByAltText('dog carrying newspaper')
  });
});