import React, { Component } from 'react';

import Card from './components/Card';

class ListItems extends Component {
  constructor(props){
    super(props);
    this.state = {
      doneLoading: false
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.data){
      this.setState({
        doneLoading: true
      })
    }
  }

  render() {
    const cities = this.props.data;

    return (
      <div>
        { this.state.doneLoading &&
          <main className="main">
            {
              Object.keys(cities).map((cityName) => (
                <div className="card weather-forecast">
                  <Card key={cityName} card={cities[cityName]} />
                </div>
              ))
            }
          </main>
        }
      </div>
    )
  }
}


export default ListItems;