import { useEffect, useState, useCallback, useMemo, memo } from 'react'

import Slider from '../Slider/Slider.jsx'
import TextComponent from '../Text/Text.jsx'
import TitleComponent from '../Title/Title.jsx'
import { getSliderData } from '../../api/getSliderData'
import { Loading } from '../Loading/Loading'

const Content = () => {
	const [sliderData, setSliderData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const loadData = useCallback(() => {
		getSliderData()
			.then(data => {
				setSliderData(data)
				setError(null)
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [])

	useEffect(() => {
		loadData()
	}, [loadData])

	const sliderContent = useMemo(() => {
		if (loading) return <Loading />
		if (error) return <p>Error: {error}</p>
		return <Slider data={sliderData} />
	}, [loading, error, sliderData])

	return (
		<div className='content'>
			<TitleComponent title='Luxury cars' />

			<TextComponent />

			{sliderContent}
		</div>
	)
}

export default memo(Content)
