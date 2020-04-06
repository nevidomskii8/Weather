import React from 'react'
import { targetValueCurrent } from '../container/DataArrays'
import moment from 'moment'

export const CurrentWeather = props => {
    const current = {...props.state.currently}
    current.time = moment(current.time * 1000).format('LTS')
    return (
        <div className="collection">
            {Object.keys(targetValueCurrent ).map((key, index) => {
                return (
                    <div 
                        key={index} 
                        className="collection-item"
                    >
                        {targetValueCurrent[key][+props.lang]}
                        <span className="badge">
                            {current[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}