import React from 'react';
import renderer from 'react-test-renderer';
import LiveResults from './liveResults';

describe('liveResults component', () => {
    it('renders correctly', () => {

        const renderedLive = renderer.create(
            <LiveResults
                dollar={7505.4}
                exchange="Binance"
                flag="1"
                price="0.0000379"
                to="BTC"
            />
        );
        expect(renderedLive.toJSON()).toMatchSnapshot();
    })
})
