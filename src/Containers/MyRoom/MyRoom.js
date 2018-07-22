import React, {Component} from 'react'
import Header from '../../Components/RegistredHeader/UserAccountHeader'
import ControlPane from '../../Components/ControlPane/ControlPane'

class MyRoom extends Component{

    list = [
        {
            place: "Go Кино",
            date: "21.03.1998"
        },
        {
            place: "Go Кино",
            date: "21.03.1998"
        },
        {
            place: "Go Кино",
            date: "21.03.1998"
        },
        {
            place: "Go Кино",
            date: "21.03.1998"
        },
        {
            place: "Go Кино",
            date: "21.03.1998"
        },
        {
            place: "Go Кино",
            date: "21.03.1998"
        }

    ]

    render() {
        return(
            <div className={"container-fluid"}>
                <Header list={this.list}/>
                <ControlPane />
            </div>
        )
    }

}

export default MyRoom