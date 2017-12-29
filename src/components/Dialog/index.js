import React, { Component } from 'react';
import './style.css';

class Dialog extends Component {
  render() {
    const { isOpen } = this.props;

    return (
      <div>
        {isOpen &&
          <div class="dialog-container dialog-container">
            <div class="dialog">
              <div class="dialog-title">Add new city</div>
              <div class="dialog-body">
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
              <div class="dialog-buttons">
                <button id="butAddCity" class="button">Add</button>
                <button id="butAddCancel" class="button">Cancel</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Dialog;