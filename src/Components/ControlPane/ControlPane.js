import React from 'react'
import Item from './ControlPaneItems/ControlPaneItems'

const ControlPane = (props) => {
    return(
        <div className={"row"} style={{padding: '10px 0'}}>
            <div className={"centerContainer"}>
                <div className="col-sm-3">
                    <Item title={"Мои объявления"}/>
                </div>
                <div className="col-sm-3">
                    <Item title={"Другие объявления"}/>
                </div>
                <div className="col-sm-3">
                    <Item title={"Мои встречи"}/>
                </div>
            </div>
        </div>
    )
}

export default ControlPane