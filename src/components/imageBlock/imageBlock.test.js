import React from 'react';
import renderer from 'react-test-renderer';
import ImageBlock from './imageBlock';
import crypto from '../../images/crypto.png';

describe('ImageBlock component', () => {
    it('renders correctly', () => {
        const imageProps = { coinFrom: "ARK", coinName: "Test Coin Name", img: "https://url.com/testurl.jpg" };
        const renderedImage = renderer.create(
            <ImageBlock
                coinFrom={imageProps.coinFrom}
                coinName={imageProps.coinName}
                img={imageProps.img}
            />
        );
        expect(renderedImage.toJSON()).toMatchSnapshot();
    })
})