import React, { useEffect, useState } from 'react'
import { ListDay } from './components/ListDay'
import { CurrentWeather } from './components/CurrentWeather'
import { DayWeather } from './components/DayWeather'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, toggleEng, toggleRu } from './redux/action'


function App() {
	const reducerProps = useSelector(state => state),
	 appState = reducerProps.appDate.stateReducer,
	 toggleLang = reducerProps.toggleLang,
	 stateLoading = reducerProps.appDate.loading,
     dispatch = useDispatch(),
	 [showDay, setShowDay] = useState(0)

	useEffect(() => {
		dispatch(fetchWeather())
	}, [dispatch])

	return (
		stateLoading ?
			<div className="progress">
				<div className="indeterminate"/>
			</div> :
			<div className="container">
				<nav>
					<ul>
						<ListDay onClick={event => setShowDay(event.target.id)}/>
					</ul>
				</nav>
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
				<div className="shower-forecast">
					{	
						!stateLoading 
						? <CurrentWeather /> 
						: null
					}
					{
						!stateLoading && appState.daily 
						? <DayWeather state={appState.daily.data[showDay]} /> 
						: 'ERROR'
					}
				</div>
			</div>
	); 
}


export default App;