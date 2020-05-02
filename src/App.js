import React, { useEffect } from 'react'
import { ListDay } from './components/ListDay'
import { CurrentWeather } from './components/CurrentWeather'
import { DayWeather } from './components/DayWeather'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather} from './redux/action'

function App() {
	const reducerProps = useSelector(state => state),
	 appState = reducerProps.appDate.stateReducer,
	 stateLoading = reducerProps.appDate.loading,
	 coordinates = reducerProps.appDate.selectedCity,
	 dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchWeather(coordinates))
	}, [dispatch, coordinates])

	return (
		stateLoading 
			? <div className="progress">
				<div className="indeterminate"/>
			  </div> 
			: <div className="container">
					<CurrentWeather />
				<div className="dayContainer">
					<ListDay />
				</div>
				{	
					!stateLoading && appState.daily 
					? <DayWeather /> 
					: 'ERROR'
				}
			  </div>
	); 
}

export default App;
