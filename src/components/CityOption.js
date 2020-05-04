import React from 'react'
import { dataCities } from '../container/DataArrays'


export const  CityOption = () => {
    return  Object.keys(dataCities).map(key => {
        return (
                    <option value={key}>{key} </option>
                )
    })
}
