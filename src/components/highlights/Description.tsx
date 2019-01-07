import * as React from 'react';
const Fade = require('react-reveal/Fade');

interface DescriptionProps {
}

const Description: React.SFC<DescriptionProps> = (props) => {
  return (
      <Fade>
          <div className="center_wrapper">
            <h2>Highlights</h2>
            <div className="highlight_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti soluta id possimus quos animi tenetur quam ut at quis recusandae, quisquam unde laboriosam odit consequatur doloremque assumenda ipsam voluptas.
            </div>
          </div>
      </Fade>
  );
};

export default Description;