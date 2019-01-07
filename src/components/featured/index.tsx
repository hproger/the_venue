import * as React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

interface FeaturedProps {
}

const Featured: React.SFC<FeaturedProps> = (props) => {
  return (
      <div style={{position: 'relative'}}>
        <Carrousel/>
        <div className="text_slider">
            <div className="wrapper">Ariana Grande</div>
        </div>
        <TimeUntil/>
      </div>
  );
};

export default Featured;