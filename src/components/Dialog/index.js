import React, { Component } from 'react';
import './style.css';

class Dialog extends Component {
  constructor(props){
    console.log('===props===', props)
    super(props);
    this.state = {
      selectValue: null,
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

  // onClickAddCity = () => {
  //   const data = this.props.getWeatherData(this.state.selectValue);
  // }

  onChangeCity = (e) => {
    this.setState({
      selectValue: e.target.value,
    });
  }

  render() {
    console.log('isOpen===>',this.state.modal,'=======');
    const { isOpen, addCityCard, dialogHandlerClose } = this.props;

    return (
      <div>
      {isOpen &&
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
                <button id="butAddCity" className="button">Add</button>
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