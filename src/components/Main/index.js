import React, { Component } from 'react';

import './style.css';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      doneLoading: false
    }

  }

  componentWillReceiveProps(newProps){
    console.log("new props");
    console.log(newProps);
    if(newProps.data){
      this.setState({
        doneLoading: true
      })
    }
  }

  render() {
    console.log('main component ====>', this.props);
    const card = this.props.data;
    console.log(this.state);

    return (
      <div>
        {this.state.doneLoading && <div>
          <div className="city-key" hidden="true">Lorem</div>
            <div className="card-last-updated" hidden="">Lorem</div>
            <div className="location">{this.props.data.location.name}</div>
            <div className="date"></div>
            <div className="description">Lorem</div>
            <div className="current">
            <div className="visual">
              <div className="icon windy"></div>
              <div className="temperature">
                <span className="value">Lorem</span><span className="scale">°F</span>
              </div>
            </div>
            <div className="description">
              <div className="humidity">Lorem%</div>
              <div className="wind">
                <span className="value">25</span>
                <span className="scale">mph</span>
                <span className="direction">195°</span>
              </div>
              <div className="sunrise">5:43 am</div>
              <div className="sunset">8:21 pm</div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default Main;