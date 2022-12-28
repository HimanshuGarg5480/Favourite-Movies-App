import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',backgroundColor:'blue',padding:'0.5'}}>
        <h1>Movie App</h1>
        <h3 style={{marginLeft:'2rem',marginTop:'1rem'}}>Faviorate</h3>
      </div>
    )
  }
}
