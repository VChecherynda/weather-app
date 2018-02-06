import React, { Component } from 'react';
import './style.css';

class Dialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectValue: null,
      isOpen: true,
    }
  }

  // componentDidMount() {
  //   const firstCity = document.getElementById('selectCityToAdd').options[0].value;
  //   console.log('DidMount', firstCity);
  //   this.setState({
  //     isOpen: false,
  //     selectValue: firstCity,
  //   });
  // }

  onClickAddCity = () => {
    console.log('=======',this.state.selectValue,'=======');
    const data = this.props.getWeatherData(this.state.selectValue);
 }

  onChangeCity = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  }

  render() {
    const { isOpen, addCityCard, dialogHandlerClose } = this.props;

    return (
      <div>
        <div className="dialog-container">
          <div className="dialog">
            <div className="dialog-title">Add new city</div>
            <div className="dialog-body">
              <select id="selectCityToAdd" onChange={this.onChangeCity}>
                <option value="Austin">Austin, TX</option>
                <option value="Boston">Boston, MA</option>
                <option value="Chicago">Chicago, IL</option>
                <option value="New York">New York, NY</option>
                <option value="Portland">Portland, OR</option>
                <option value="San Francisco">San Francisco, CA</option>
                <option value="Seattle">Seattle, WA</option>
              </select>
            </div>
            <div className="dialog-buttons">
              <button id="butAddCity" onClick={() => this.onClickAddCity()} className="button">Add</button>
              <button id="butAddCancel" onClick={() => dialogHandlerClose()} className="button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog;