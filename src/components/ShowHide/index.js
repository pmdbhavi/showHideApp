import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  lastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state

    return (
      <div className="main-container">
        <div className="contain">
          <h1 className="heading">Show/Hide</h1>
          <div className="container">
            <div className="con1">
              <button type="button" onClick={this.firstName} className="button">
                Show/Hide Firstname
              </button>
              {first && <p className="para">Joe</p>}
            </div>
            <div className="con1">
              <button type="button" onClick={this.lastName} className="button">
                Show/Hide Lastname
              </button>
              {last && <p className="para">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
