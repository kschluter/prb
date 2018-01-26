import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import popper from 'popper.js'
import * as Bootstrap from 'bootstrap'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>{this.props.message}</h1>
          <hr />
          <button className="btn btn-primary">Bootstrap Button</button>
        </div>
      </div>
    )
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render(<Main message="Parcel, React and Bootstrap 4" />, mountNode)
