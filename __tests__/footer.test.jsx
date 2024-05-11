import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../app/_components/Footer';

describe('Footer component', () => {
    test('renders footer with correct text', () => {
        const { getByText } = render(<Footer />);
        const footerText = getByText('© 2024 Marshal Burton');
        expect(footerText).toBeInTheDocument();
    });
});
