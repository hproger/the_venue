import * as React from 'react';
interface LocationProps {
}

const Location: React.SFC<LocationProps> = (props) => {
  return (
    <div className='location_wrapper'>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31131.44451582149!2d83.68608188877171!3d53.34934815030879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dda37750f851bd%3A0xf5f7421c47c14d8!2z0JDRgNC70LXQutC40L3Qvg!5e0!3m2!1sru!2sru!4v1546878750888" 
            width="100%" 
            height="500px" 
            frameBorder='0'
            style={{
                border: '0'
            }}
            allowFullScreen
            ></iframe>
        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  );
};

export default Location;