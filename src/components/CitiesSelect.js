import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataCities } from '../container/DataArrays'
import { toggleCity } from '../redux/action'
import { CityOption } from './CityOption'

function CitiesSelect() {
	const reducerProps = useSelector(state => state),
 	 coordinates = reducerProps.appDate.selectedCity,
 	 dispatch = useDispatch(),
	 selectHandler = event => {
		dispatch(toggleCity(dataCities[event.target.value]))
	 },
	 indexCity = Object.values(dataCities).indexOf(coordinates),
	 city = Object.keys(dataCities)[indexCity]

	return (
		<div className="input-field col s12 m6">
			<select className="icons" onChange={selectHandler}>
				<option defaultValue={city}>{city}</option>
				<CityOption/>
			</select>
    	</div>
)}



	export default CitiesSelect
  