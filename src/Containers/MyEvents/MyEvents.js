import React, {Component} from 'react'
import Logo from '../../Components/Logo/Logo'
import EventList from '../../Components/EventList/EventList';
class MyEvents extends Component {

    list = [
        {
            place: "Go Кино",
            date: "21.03.44"
        },
        {
            place: "Go Кино",
            date: "21.03.4444"
        },
        {
            place: "Go Кино",
            date: "21.03.7777"
        },
        {
            place: "Go Кино",
            date: "21.03.8888"
        },
        {
            place: "Go Кино",
            date: "21.03.9999"
        },
        {
            place: "Go Кино",
            date: "21.03.444"
        }
    ]

    events = this.list.map((el) => {
        return  <EventList place={el.place} date={el.date} key={el.date + 88554}/>
    })
    render() {
        return (
            <div className="container-fluid">
                <div className="header">

                    <div>
                        <Logo />
                    </div>
                    <div>
                        <input type="text" className="form-control" id="usr" style={{width: "400px"}} placeholder="Введите куда бы вы хотели?"/>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350"
                            className="img-circle" alt="Cinque Terre"
                            width="100" height="100"/>
                    </div>
                </div>
                <div className="controlPane">
                    <div className="controlPaneItem active">
                        <p className="regular">Мои объявления</p>
                    </div>
                    <div className="controlPaneItem">
                        <p className="regular">Другие объявления</p>
                    </div>
                    <div className="controlPaneItem">
                        <p>Мои встречи</p>
                    </div>
                </div>
                <p className={"destinguishTitle"}>Запланированные</p>
                <div className="main">
                    {this.events}
                </div>

                <p className={"destinguishTitle"}>Прошедшие</p>
                <div className="main">
                    {this.events}
                </div>
            </div>
        )
    }
}

export default MyEvents