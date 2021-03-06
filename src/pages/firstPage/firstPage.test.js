import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FirstPage } from './firstPage';

describe('First Page component', () => {
    const renderer = new ShallowRenderer;
    it('renders correctly', () => {
        const renderedImage = renderer.render(
            <FirstPage initialSearch={jest.fn} />
        );
        expect(renderedImage).toMatchSnapshot();
    })
})