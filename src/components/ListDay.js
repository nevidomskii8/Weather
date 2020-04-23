import React from 'react'
import moment from 'moment'
import { objNameDays } from '../container/DataArrays'
import { useSelector } from 'react-redux'


export const ListDay = props => {
	const reducerProps = useSelector(state => state.toggleLang)
    const createDay = day => moment().add(day, 'days').calendar().split(' ')[0]
    const dailyArray = [moment().format('dddd'), createDay(1), createDay(2), createDay(3), createDay(4), createDay(5), createDay(6)]
   
    return (
        dailyArray.map((day, index) => {
            if (day === moment().format('dddd')) {
                return <li  key={index}  className="li-active">
                            <button onClick={props.onClick} id={index} className="btn">
                                {objNameDays.Today[reducerProps]}
                            </button>
                        </li>
            }
            return (<li  key={index} >
                        <button onClick={props.onClick} id={index} className="btn">
                            {objNameDays[day][reducerProps]}
                        </button>
                    </li>)
        })
    )
}