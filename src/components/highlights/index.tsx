import * as React from 'react';
import Description from './Description';
import Discount from './Discount';
interface HighlightsProps {
}

const Highlights: React.SFC<HighlightsProps> = (props) => {
  return (
    <div className='highlight_wrapper'>
        <Description/>
        <Discount/>
    </div>
  );
};

export default Highlights;