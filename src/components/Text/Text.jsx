import { memo } from 'react'
import './Text.css'

const TextComponent = () => (
	<p className='content-text'>
		A luxury car is not just a means of transportation. It is an element of
		luxury that emphasizes the success and confidence of the owner, reflects his
		lifestyle. It also provides incomparable comfort on every trip. It's hard to
		argue that living in a small room in a communal apartment or in a luxurious
		private house with all the amenities is a completely different experience.
		The same applies to personal transport.
	</p>
)

export default memo(TextComponent)
