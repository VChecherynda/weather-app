import React, { Component } from 'react';
import './style.css';

const list = [
  { value: 'Austin', label: 'Austin, TX'},

  { value: 'Seattle', label: 'Seattle, WA'}
];

class Dialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectValue: list[0].value,
    }
  }

  // componentDidMount() {
  //   const firstCity = document.getElementById('selectCityToAdd');
  //   console.log('DidMount', firstCity);
  //   this.setState({
  //     selectValue: firstCity,
  //   });
  // }

  // onClickAddCity = () => {
  //   const data = this.props.getWeatherCity(this.state.selectValue);
  // }

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
                  {/*<option value="Austin">Austin, TX</option>
                  <option value="Boston">Boston, MA</option>
                  <option value="Chicago">Chicago, IL</option>
                  <option value="New York">New York, NY</option>
                  <option value="Portland">Portland, OR</option>
                  <option value="San Francisco">San Francisco, CA</option>
        <option value="Seattle">Seattle, WA</option>*/}
                  {list.map(el => (
                    <option value={el.value}>{el.label}</option>
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