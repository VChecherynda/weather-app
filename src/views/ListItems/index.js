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
    console.log('card prop ====>',this.prop);
    return (
      <div>
        { this.state.doneLoading &&
          <main className="main">
            {
              cities.map((city,index) => (
                <div className="card weather-forecast">
                  <Card key={index} card={city} />
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