import React from 'react'
import moment from 'moment'
import { objNameDays } from '../container/DataArrays'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDay } from '../redux/action'


export const ListDay = props => {
	const reducerProps = useSelector(state => state.toggleLang),
     dispatch = useDispatch(),
     createDay = day => moment().add(day, 'days').calendar().split(' ')[0],
     dailyArray = [moment().format('dddd'), createDay(1), createDay(2), createDay(3), createDay(4), createDay(5), createDay(6)]
    return (
        dailyArray.map((day, index) => {
            if (day === moment().format('dddd')) {
                return <li  key={index}  className="li-active">
                            <button 
                                onClick={event => {dispatch(toggleDay(event.target.id))}} 
                                id={index} 
                                className="btn"
                            >
                                {objNameDays.Today[reducerProps]}
                            </button>
                        </li>
            }
            return (<li  key={index} >
                        <button 
                            onClick={event => {dispatch(toggleDay(event.target.id))}} 
                            id={index} 
                            className="btn"
                        >
                            {objNameDays[day][reducerProps]}
                        </button>
                    </li>)
        })
    )
}