import React from 'react'

const Event = (props) => {
    return(
        <div className="eventInfo">
            <h3 className="eventSlogo">Go</h3>
            <h2 className="eventName">{props.place}</h2>
            <div className={'buttonWrapper'}><button className="orangeButton">Подробнее</button></div>
            <div className={'buttonWrapper'}><button className="orangeButton">Отменить</button></div>
            <p className="timeStamp">{props.date}</p>
        </div>
    )
}

export default Event