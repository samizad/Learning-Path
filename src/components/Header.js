import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
   
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color={showAdd?'red': 'green'} text={showAdd?'Close': 'Add'} onClick={onAdd} />
               
            </header>
            
        </div>
    )
}
///style  style={headingStyle} for styling// css in js
const headingStyle = {
    color:'red',
    backgroundColor:'green',
}
Header.defaultProps = {
    title:'Task Tracker'
}
Header.prototypes = {
    title:PropTypes.string.isRequired,
}

export default Header


