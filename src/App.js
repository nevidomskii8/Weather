import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ListDay } from './components/ListDay'
import { CurrentWeather } from './components/CurrentWeather'
import { DayWeather } from './components/DayWeather'



function App() {
	const [state, setState] = useState({}),
	 [showDay, setShowDay] = useState(0),
	 [checkLoad, setCheckLoad] = useState(false),
	 [toggleLang, setToggleLang] = useState(false)

	const getRequest = async () => {
		try {
			const respons = await axios.get('http://localhost:5000/weather/getWeather')
			// const respons = await axios.get('https://api.darksky.net/forecast/c3f5199a4cecb62000b325a1c9f191a6/46.4825,30.7233?lang=ru&units=si')
			setState(respons.data)
			setCheckLoad(true)
			
		} catch (e) { 
			setCheckLoad(true)
		}
	}

	useEffect(() => {
		getRequest()
	}, [])

	const toggleLanguage = () => {
		setToggleLang(!toggleLang)
	}

	const dailyHandler = event => {
		setShowDay(event.target.id)
	}

	return (
		!checkLoad ?
			<div className="progress">
				<div className="indeterminate"></div>
			</div> :
			<div className="container">
				<nav>
					<ul>
						<ListDay
							lang={toggleLang}
							onClick={dailyHandler}
							state={state}
						/>
					</ul>
				</nav>
				<button
					onClick={toggleLanguage}
					className="btn"
				>
					{toggleLang ? 'Ru' : 'Eng'}
				</button>
				<div className="shower-forecast">
					{checkLoad ? <CurrentWeather lang={toggleLang} state={state} /> : null}
					{checkLoad && state.daily ? <DayWeather lang={toggleLang} state={state.daily.data[showDay]} /> : 'ERROR'}
				</div>
			</div>
	);
}

export default App;