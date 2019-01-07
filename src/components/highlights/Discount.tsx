import * as React from 'react';
const Fade = require('react-reveal/Fade');
const Slide = require('react-reveal/Slide');
import MyButton from '../utils/MyButton';

export interface DiscountProps {
}
export interface DiscountState {
    discountStart: number,
    discountEnd: number
}

export default class Discount extends React.Component<DiscountProps, DiscountState> {
    public state: DiscountState = {
        discountStart: 0,
        discountEnd: 30
    };

    public percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            });
        }
    };

    componentDidUpdate() {
        setTimeout(()=>{
            this.percentage();
        },30);
    }

    public render() {
    return (
      <div className='center_wrapper'>
        <div className="discount_wrapper">
            <Fade
                onReveal={()=> this.percentage()}
            >
                <div className="discount_percentage">
                    <span>{this.state.discountStart}%</span>
                    <span>off</span>
                </div>
            </Fade>
            <Slide right>
                <div className="discount_description">
                    <h3>Purchase tickets before  20th JUNE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis labore maxime reprehenderit sed maiores inventore iusto aut necessitatibus nihil atque, dolorum cumque porro temporibus ea doloremque laudantium, sapiente quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur aliquam laborum sequi dignissimos corporis saepe autem vitae nesciunt minima ratione, incidunt recusandae non maxime minus fugiat doloribus tenetur doloremque.</p>
                    <MyButton
                        text='Purchase tickets'
                        bck='#ffa800'
                        color='#ffffff'
                        link='https://google.com'
                    />
                </div>
            </Slide>
        </div>
      </div>
    );
  }
}
