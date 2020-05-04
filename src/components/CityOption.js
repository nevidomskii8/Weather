import React from 'react'
import { dataCities } from '../container/DataArrays'
import { useSelector } from 'react-redux'


export const  CityOption = () => {
	const reducerProps = useSelector(state => state),
     coordinates = reducerProps.appDate.selectedCity,
     indexCity = Object.values(dataCities).indexOf(coordinates),
	 city = Object.keys(dataCities)[indexCity]

    return  (
       <> 
            <option defaultValue={city}>{city}</option>
            {
                Object.keys(dataCities).map(key => {
                    return (
                            <option value={key}>{key} </option>
                        )
                    })
            }
       </>
    )
}
