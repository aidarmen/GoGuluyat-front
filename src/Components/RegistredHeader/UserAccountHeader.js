import React from 'react'
import Logo from '../../Components/Logo/Logo'
import EventList from '../../Components/EventList/EventList'
const UserAccountHeader = (props) => {
    let events = null
    if(props.list) {
        events = props.list.map((el) => {
            return  <EventList place={el.place} date={el.date} key={el.date + Math.random()}/>
        })
    }
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
                <div className="controlPaneItem">
                    <p className="regular">Мои объявления</p>
                </div>
                <div className="controlPaneItem">
                    <p className="regular">Другие объявления</p>
                </div>
                <div className="controlPaneItem active">
                    <p>Мои встречи</p>
                </div>
            </div>
            <p className={"destinguishTitle"}>Запланированные</p>
            <div className="main">
                 {events}
            </div>

            <p className={"destinguishTitle"}>Прошедшие</p>
            <div className="main">
                {events}
            </div>
        </div>
    )
}

export default UserAccountHeader