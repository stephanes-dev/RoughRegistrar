// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughRegistrar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughRegistrar/i);
    expect(titleElement).toBeInTheDocument();
});
