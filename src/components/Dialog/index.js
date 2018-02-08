import React, { Component } from 'react';
import './style.css';

const listOfCities = [
  { value: 'Austin', label: 'Austin, TX'},
  { value: 'Boston', label: 'Boston, MA'},
  { value: 'Chicago', label: 'Chicago, IL'},
  { value: 'New York', label: 'New York, NY'},
  { value: 'Portland', label: 'Portland, OR'},
  { value: 'San Francisco', label: 'San Francisco, CA'},
  { value: 'Seattle', label: 'Seattle, WA'}
];

class Dialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectValue: listOfCities[0].value,
    }
  }

  onChangeCity = (e) =>  {
    this.setState({
      selectValue: e.target.value,
    });
  }

  render() {
    const { isOpen, getWeatherAtCity, dialogHandlerClose } = this.props;

    return (
      <div>
        {isOpen &&
          <div className="dialog-container">
            <div className="dialog">
              <div className="dialog-title">Add new city</div>
              <div className="dialog-body">
                <select id="selectCityToAdd" onChange={this.onChangeCity}>
                  {listOfCities.map((el,index) => (
                    <option value={el.value} key={index}>{el.label}</option>
                  ))}
                </select>
              </div>
              <div className="dialog-buttons">
                <button id="butAddCity" onClick={() => getWeatherAtCity(this.state.selectValue)} className="button">Add</button>
                <button id="butAddCancel" onClick={() => dialogHandlerClose()} className="button">Cancel</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Dialog;