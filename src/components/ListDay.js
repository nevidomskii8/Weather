import React from 'react'
import moment from 'moment'
import { objNameDays } from '../container/DataArrays'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDay } from '../redux/action'


export const ListDay = () => {
	const reducerProps = useSelector(state => state),
     dispatch = useDispatch(),
     createDay = day => moment().add(day, 'days').calendar().split(' ')[0],
     dailyArray = [moment().format('dddd'), createDay(1), createDay(2),
                 createDay(3), createDay(4), createDay(5), createDay(6)],
     cls = 'listDay active',
     checkId = +reducerProps.appDate.dayId,
     dailyData = {...reducerProps.appDate.stateReducer.daily}
     let temperature = [].fill(0)
    if (dailyData.data) temperature = dailyData.data.map(obj => obj.apparentTemperatureHigh)  
    

     return (
        dailyArray.map((day, index) => {            
            if (day === moment().format('dddd')) {
                return (
                    <div 
                        key={index}
                        onClick={event => {dispatch(toggleDay(event.target.id))}} 
                        id={index} 
                        className={index === checkId ? cls : 'listDay'}
                    >
                        {objNameDays.Today[reducerProps.toggleLang]}
                        <br/>
                        {
                            temperature[index] > 0 
                            ? "+" + Math.round(temperature[index])
                            : "-" + Math.round(temperature[index])
                        }
                    </div>  
                )
            }
            return (
                <div 
                    key={index}
                    onClick={event => {dispatch(toggleDay(event.target.id))}} 
                    id={index} 
                    className={index === checkId ? cls : 'listDay'}
                    >
                    {objNameDays[day][reducerProps.toggleLang]}
                    <br/>
                    {
                        temperature[index] > 0 
                        ? "+" + Math.round(temperature[index])
                        : "-" + Math.round(temperature[index])
                    }
                </div>
                    )
        })
    )
}