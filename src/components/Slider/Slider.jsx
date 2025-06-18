import { useState, useCallback, useEffect } from 'react'
import { IconButton } from '../IconButton/IconButton'
import './Slider.css'

const Slider = ({ data }) => {
	const [activeId, setActiveId] = useState(0)

	useEffect(() => {
		if (activeId >= data.length) {
			setActiveId(0)
		}
	}, [data, activeId])
	const prev = useCallback(() => {
		setActiveId(prev => (prev > 0 ? prev - 1 : prev))
	}, [])

	const next = useCallback(() => {
		setActiveId(prev => (prev < data.length - 1 ? prev + 1 : prev))
	}, [data.length])

	return (
		<div className='slider-wrap'>
			<div className='slider__actions'>
				<IconButton direction='left' onClick={prev} disable={activeId === 0} />
				<IconButton
					direction='right'
					onClick={next}
					disable={activeId === data.length - 1}
				/>
			</div>

			<div className='slider'>
				{Array.isArray(data) && data.length > 0 ? (
					data.map((slide, idx) => (
						<div
							className={`slide${idx === activeId ? ' active' : ''}`}
							key={slide.title}
							onClick={() => {
								setActiveId(idx)
							}}
						>
							<div className='slide__title'>{slide.title}</div>

							<img
								src={slide.img}
								alt={slide.title}
								loading='lazy'
								className={`slide__image${idx === activeId ? ' active' : ''}`}
							/>
						</div>
					))
				) : (
					<p>No slides available</p>
				)}
			</div>
		</div>
	)
}
export default Slider
