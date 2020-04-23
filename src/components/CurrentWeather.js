import React from 'react'
import { targetValueCurrent } from '../container/DataArrays'
import moment from 'moment'
import { useSelector } from 'react-redux'

export const CurrentWeather = props => {
    const reducerProps = useSelector(state => state),
     current = {...reducerProps.appDate.stateReducer.currently}
    current.time = moment(current.time * 1000).format('LTS')
    return (
        <div className="collection">
            {Object.keys(targetValueCurrent ).map((key, index) => {
                return (
                    <div 
                        key={index} 
                        className="collection-item"
                    >
                        {targetValueCurrent[key][reducerProps.toggleLang]}
                        <span className="badge">
                            {current[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}