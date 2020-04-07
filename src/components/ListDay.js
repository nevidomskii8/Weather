import React from 'react'
import moment from 'moment'
import { objNameDays } from '../container/DataArrays'


export const ListDay = props => {
    const createDay = day => moment().add(day, 'days').calendar().split(' ')[0]
    const dailyArray = [moment().format('dddd'), createDay(1), createDay(2), createDay(3), createDay(4), createDay(5), createDay(6)]
    
    return (
        dailyArray.map((day, index) => {
            if (day === moment().format('dddd')) {
                return <li  key={index}  className="li-active">
                            <button onClick={props.onClick} id={index} className="btn">
                                {objNameDays.Today[+props.lang]}
                            </button>
                        </li>
            }
            return (<li  key={index} >
                        <button onClick={props.onClick} id={index} className="btn">
                            {objNameDays[day][+props.lang]}
                        </button>
                    </li>)
        })
    )
}