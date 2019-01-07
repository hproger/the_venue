import * as React from 'react';
import './resources/styles.css';
const Scroll = require('react-scroll');
const Element = Scroll.Element;
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
class App extends React.Component {
    render(){
        return(
            <div className="App" >
                <Header/>
                <Element name='featured'>
                    <Featured/>
                </Element>
                <Element name='venuenfo'>
                    <VenueNfo/>
                </Element>
                <Element name='highlights'>
                    <Highlights/>
                </Element>
                <Element name='pricing'>
                    <Pricing/>
                </Element>
                <Element name='location'>
                    <Location/>
                </Element>
                <Footer/>
            </div>
        );
    }
}

export default App;