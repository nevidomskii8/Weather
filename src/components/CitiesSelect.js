import React from 'react'
import { useDispatch } from 'react-redux'
import { dataCities } from '../container/DataArrays'
import { toggleCity } from '../redux/action'
import { CityOption } from './CityOption'

function CitiesSelect() {
	 const dispatch = useDispatch(),
	 selectHandler = event => {
		dispatch(toggleCity(dataCities[event.target.value]))
	 }
	return (
		<div className="input-field col s12 m6">
			<select className="icons" onChange={selectHandler}>
				<CityOption/>
			</select>
    	</div>
)}



	export default CitiesSelect
  