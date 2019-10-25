import React, { Component } from 'react'
import Manatee from '../Manatee'
import "./styles.css"

export default class ManateeTank extends Component {
    state = {
        manatees:["Joe","Trae","Denis","Tony"]
    }
    render() {
        return (
            <div className="ManateeTank">
                {this.state.manatees.map(person=><Manatee name={person}/>)}
            </div>
        )
    }
}
