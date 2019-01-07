import * as React from 'react';

import MyButton from '../utils/MyButton';
const Zoom = require('react-reveal/Zoom');

export interface PricingProps {
}
export interface PricingState {
    prices: number[],
    positions: string[],
    desc: string[],
    linkto: string[],
    delay: number[]
}

export default class Pricing extends React.Component<PricingProps, PricingState> {
    public state: PricingState = {
        prices: [100,150,250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        ],
        linkto: [
            'https://google.com/',
            'https://google.com/',
            'https://google.com/'
        ],
        delay: [500, 0, 500]
    }
    showBoxes = () => (
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className='pricing_item' >
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text='Purchase'
                                bck='#ffa800'
                                color='#fff'
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )
    public render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>
            <div className="pricing_wrapper">
                {this.showBoxes()}
            </div>
        </div>
      </div>
    );
  }
}
