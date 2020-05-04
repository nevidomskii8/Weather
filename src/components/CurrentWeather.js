import React from 'react'
import { targetValueCurrent } from '../container/DataArrays'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { iconsArray } from '../container/dataImeges'
import { useDispatch} from 'react-redux'
import { toggleEng, toggleRu } from '../redux/action'
import CitiesSelect from './CitiesSelect'

export const CurrentWeather = () => {
    const reducerProps = useSelector(state => state),
     current = {...reducerProps.appDate.stateReducer.currently},
     toggleLang = reducerProps.toggleLang,
     img = iconsArray[current.icon],
     dispatch = useDispatch()
     
    current.time = moment(current.time * 1000).format('LTS')
    return (
        <div className="collection" style={{backgroundImage: `url(${img})`}}>
				<div className="select">
                    <CitiesSelect />
                    <button
                        onClick={() => {
                            toggleLang === 0 
                            ? dispatch(toggleEng())
                            : dispatch(toggleRu())
                        }}
                        className="btn"
                    >
                        {toggleLang ? 'Ru' : 'Eng'}	
                    </button>
                </div>
            {Object.keys(targetValueCurrent ).map((key, index) => {
                return (
                    <div
                        key={index} 
                        className={key}
                    >
                        {targetValueCurrent[key][reducerProps.toggleLang]}
                        <span>
                            {current[key]}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}