import React from 'react'
import Event from './Event/Event'
const EventList = (props) => {
    return(
            <div className="content">
                <div className="eventItem">
                    <Event place={props.place} date={props.date}/>
                </div>
            </div>
    )
}

export default EventList