import * as React from 'react';
const Slide = require('react-reveal/Slide');

export interface TimeUntilProps {
}

export interface TimeUntilState {
  deadline: string,
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

export default class TimeUntil extends React.Component<TimeUntilProps, TimeUntilState> {
  
  public state: TimeUntilState = {
    deadline: 'Feb, 7, 2019',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  getTimeUntil (deadline: string) {
    const curTime: number = new Date().getTime();
    const time: number = Date.parse(deadline) - curTime;

    if (time < 0) {
      console.log('Date passed');
    }
    else {
      const seconds = Math.floor((time/1000)%60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor(time/(1000*60*60)%24);
      const days = Math.floor(time/(1000*60*60*24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }
  componentDidMount() {
    setInterval(()=>{ this.getTimeUntil(this.state.deadline)}, 1000);
  }
  public render() {
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className="countdown_top">
            Event starts in
          </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
      
    );
  }
}

