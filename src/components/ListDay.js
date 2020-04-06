import React from 'react'
import moment from 'moment'
import { objNameDays } from '../container/DataArrays'


export const ListDay = props => {
    const createDay = day => moment().add(day, 'days').calendar().split(' ')[0]
    const dailyArray = [moment().format('dddd'), createDay(1), createDay(2), createDay(3), createDay(4), createDay(5), createDay(6)]
    
    return (
        dailyArray.map((day, index) => {
            if (day === moment().format('dddd')) {
                return <li onClick={props.onClick} key={index} id={index} className="li-active">{objNameDays.Today[+props.lang]}</li>
            }
            return (<li onClick={props.onClick} key={index} id={index}>{objNameDays[day][+props.lang]}</li>)
        })
    )
}