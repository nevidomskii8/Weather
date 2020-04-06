import React from 'react'
import { targetValueDaily } from '../container/DataArrays'
import moment from 'moment'

export const DayWeather = props => {

    const currentState = {...props.state}
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
                        {targetValueDaily[key][+props.lang]}
                        <span className="badge">
                            {currentState[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
