import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',backgroundColor:'blue',padding:'0.5'}}>
        <h1><Link to="/" style={{all:'unset'}}>Movie App</Link></h1>
        <h3 style={{marginLeft:'2rem',marginTop:'1rem'}}><Link to="/favorite" style={{all:'unset'}}>Faviorate</Link></h3>
      </div>
    )
  }
}
