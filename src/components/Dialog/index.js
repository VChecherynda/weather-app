import React, { Component } from 'react';
import './style.css';

class Dialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectValue: null,
    }
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
        {isOpen &&
          <div className="dialog-container">
            <div className="dialog">
              <div className="dialog-title">Add new city</div>
              <div className="dialog-body">
                <select id="selectCityToAdd" onChange={this.onChangeCity}>
                  <option value="1">Austin, TX</option>
                  <option value="2">Boston, MA</option>
                  <option value="2">Chicago, IL</option>
                  <option value="2">New York, NY</option>
                  <option value="2">Portland, OR</option>
                  <option value="2">San Francisco, CA</option>
                  <option value="2">Seattle, WA</option>
                </select>
              </div>
              <div className="dialog-buttons">
                <button id="butAddCity"  onClick={() => addCityCard(this.state.selectValue)} className="button">Add</button>
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