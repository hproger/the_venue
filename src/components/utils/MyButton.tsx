import * as React from 'react';
import Button from '@material-ui/core/Button';

import icon_ticket from '../../resources/images/icons/icon_ticket.png';


interface MyButtonProps {
    text: string,
    bck: string,
    color: string,
    link: string
}

const MyButton: React.SFC<MyButtonProps> = (props) => {
  return (
      <Button
        href= {props.link}
        variant='contained'
        size='small'
        style={{
            background: props.bck,
            color: props.color
        }}
      >
          <img 
            src={icon_ticket} 
            className='iconImage'
            alt="icon_ticket"/>
            {props.text}
      </Button>
  );
};

export default MyButton;