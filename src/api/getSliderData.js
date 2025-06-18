export const getSliderData = async () => {
	const res = await fetch('/data/sliderData.json')
	if (!res.ok) throw new Error('Ошибка загрузки слайдера')
	const data = await res.json()

	const shuffled = data.sort(() => 0.5 - Math.random())

	return shuffled.slice(0, 4)
}
