import React from 'react';
import renderer from 'react-test-renderer';
import FirstPage from './firstPage';

describe('First Page component', () => {
    it('renders correctly', () => {
        const renderedImage = renderer.create(
            <FirstPage />
        );
        expect(renderedImage.toJSON()).toMatchSnapshot();
    })
})