import React from 'react'
import PropTypes from 'prop-types'

// import React, { useState } from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">{props.aboutText}</a>
                </li>
              
              </ul>
              
              
              <div className={`form-check form-switch text-${props.mode==='default'?'black':'white'}`}>
                <input type="checkbox" className="form-check-input" onClick={props.toggleMode} id="flexswitchcheckDefault"/>
                <label className="form-check form-switch" htmlFor="flexswitchcheckDefault">Enable Dark Mode</label>
              </div>
              {/* <div className={`form-check form-switch text-${props.mode2==='default'?'black':'white'}`}>
                <input type="checkbox" className="form-check-input" onClick={props.toggleMode2} id="flexswitchcheckDefault"/>
                <label className="form-check form-switch" htmlFor="flexswitchcheckDefault">Enable Red Mode</label>
              </div> 

              <div className={`form-check text-${props.mode==='default'?'black':'white'}`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
               <label className="form-check-label" for="flexRadioDefault1">
                 Default
               </label>
              </div>
              <div className={`form-check text-${props.mode1==='default'?'black':'white'}`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label className="form-check-label" for="flexRadioDefault2">
                Dark mode
                </label>
              </div>   
              <div className={`form-check text-${props.mode2==='default'?'black':'white'}`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label className="form-check-label" for="flexRadioDefault2">
                Bright mode
                </label>
              </div>             */}

  
      </div>
    </div>
  </nav>
  )
}

Navbar.protoTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}

