import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const Smurf = props => {

    const handleClick = () => {
        props.deleteSmurf(props.id)
    }

    return (
        <div className="smurf">
            <div><h3>{props.smurf.name} {props.smurf.age} {props.smurf.height}</h3></div>
            <div><button onClick={handleClick}>X</button></div>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf) 