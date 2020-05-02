import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataCities } from '../container/DataArrays'
import { toggleCity } from '../redux/action'

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
				<option value="odessa" data-icon="../container/imagSelect/odessa.jpg">odessa</option>
				<option value="kiev" data-icon="../container/imagSelect/kiev.jpg">kiev</option>
				<option value="kharkiv" data-icon="../container/imagSelect/kharkiv.jpg">kharkov</option>
				<option value="lviv" data-icon="../container/imagSelect/lviv.jpg">lviv</option>
			</select>
    	</div>
)}



	export default CitiesSelect
  