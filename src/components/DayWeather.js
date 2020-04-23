import React from 'react'
import { targetValueDaily } from '../container/DataArrays'
import moment from 'moment'
import { useSelector } from 'react-redux'

export const DayWeather = props => {
    const reducerProps = useSelector(state => state),
     currentState = {...reducerProps.appDate.stateReducer.daily.data[reducerProps.appDate.dayId]}
     
    currentState.time = moment(currentState.time * 1000).format('ll')
    currentState.sunriseTime = moment(currentState.sunriseTime * 1000).format('LTS')
    currentState.sunsetTime = moment(currentState.sunsetTime * 1000).format('LTS')
    return (
        <div className="collection">
            {Object.keys(targetValueDaily).map((key, index) => {
                return (
                    <div
                        key={index}
                        className="collection-item"
                    >
                        {targetValueDaily[key][reducerProps.toggleLang]}
                        <span className="badge">
                            {currentState[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
