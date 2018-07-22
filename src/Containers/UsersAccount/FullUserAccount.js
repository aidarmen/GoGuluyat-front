import React, {Component} from 'react'
import UserAccountHeader from '../../Components/RegistredHeader/UserAccountHeader'
class UsersAccount extends Component {
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
            <UserAccountHeader list={this.list}/>
        )
    }
}

export default UsersAccount