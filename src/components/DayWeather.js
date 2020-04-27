import React from 'react'
import { targetValueDaily } from '../container/DataArrays'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { iconsArray } from '../container/dataImeges'

export const DayWeather = () => {
    const reducerProps = useSelector(state => state),
     currentState = {...reducerProps.appDate.stateReducer.daily.data[reducerProps.appDate.dayId]},
     img = iconsArray[currentState.icon]

    currentState.time = moment(currentState.time * 1000).format('ll')
    currentState.sunriseTime = moment(currentState.sunriseTime * 1000).format('LTS')
    currentState.sunsetTime = moment(currentState.sunsetTime * 1000).format('LTS')
    return (
         <div className="collection dayWeather" style={{backgroundImage: `url(${img})`}}>
            {Object.keys(targetValueDaily).map((key, index) => {
                return (
                    <div
                        key={index}
                        className={key}
                    >
                        {targetValueDaily[key][reducerProps.toggleLang]}
                        <span>
                             {currentState[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
