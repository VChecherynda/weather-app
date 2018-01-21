import React, { Component } from 'react';
import './style.css';

class Dialog extends Component {
  render() {
    const { isOpen, addAnotherCity, dialogHandlerClose } = this.props;

    console.log(isOpen);

    return (
      <div>
        {isOpen &&
          <div className="dialog-container">
            <div className="dialog">
              <div className="dialog-title">Add new city</div>
              <div className="dialog-body">
                <select id="selectCityToAdd">
                  <option value="2357536">Austin, TX</option>
                  <option value="2367105">Boston, MA</option>
                  <option value="2379574">Chicago, IL</option>
                  <option value="2459115">New York, NY</option>
                  <option value="2475687">Portland, OR</option>
                  <option value="2487956">San Francisco, CA</option>
                  <option value="2490383">Seattle, WA</option>
                </select>
              </div>
              <div className="dialog-buttons">
                <button id="butAddCity"  onClick={() => addAnotherCity()} className="button">Add</button>
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