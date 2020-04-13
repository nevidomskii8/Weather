import React, { useEffect, useState } from 'react'
import { ListDay } from './components/ListDay'
import { CurrentWeather } from './components/CurrentWeather'
import { DayWeather } from './components/DayWeather'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './redux/action'


function App() {
	const loading = useSelector(state => state.loading),
	 reducerProps = useSelector(state => state.stateReducer),
     dispatch = useDispatch(),
	 [showDay, setShowDay] = useState(0),
	 [toggleLang, setToggleLang] = useState(false)


	useEffect(() => {
		dispatch(fetchWeather())
	}, [dispatch])

	return (
		loading ?
			<div className="progress">
				<div className="indeterminate"/>
			</div> :
			<div className="container">
				<nav>
					<ul>
						<ListDay
							lang={toggleLang}
							onClick={event => setShowDay(event.target.id)}
							state={reducerProps}
						/>
					</ul>
				</nav>
				<button
					onClick={() => {
						console.log(reducerProps)
						setToggleLang(!toggleLang)}}
					className="btn"
				>
					{toggleLang ? 'Ru' : 'Eng'}
				</button>
				<div className="shower-forecast">
					{!loading ? <CurrentWeather lang={toggleLang} state={reducerProps} /> : null}
					{
						!loading && reducerProps.daily 
						? <DayWeather lang={toggleLang} state={reducerProps.daily.data[showDay]} /> 
						: 'ERROR'
					}
				</div>
			</div>
	); 
}


export default App;