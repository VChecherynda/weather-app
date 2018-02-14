import React, { Component } from 'react';
import './style.css';

class Dialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectValue: props.listOfCities[0].value,
    }
  }

  componentDidMount() {
    this.props.getWeatherAtCity(this.state.selectValue);
  }

  onChangeCity = (e) =>  {
    this.setState({
      selectValue: e.target.value,
    });
  }

  render() {
    const { listOfCities, isOpen, getWeatherAtCity, dialogHandlerClose } = this.props;

    return (
      <div>
        {isOpen &&
          <div className="dialog-container">
            <div className="dialog">
              <div className="dialog-title">Add new city</div>
              <div className="dialog-body">
                <select id="selectCityToAdd" onChange={this.onChangeCity}>
                  {listOfCities.map((el,index) => (
                    <option
                      value={el.value}
                      key={index}
                    >
                      {el.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dialog-buttons">
                <button
                  id="butAddCity"
                  onClick={() => getWeatherAtCity(this.state.selectValue)}
                  className="button"
                >
                  Add
                </button>
                <button
                  id="butAddCancel"
                  onClick={() => dialogHandlerClose()}
                  className="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Dialog;