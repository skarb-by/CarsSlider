import './Title.css'
import { memo } from 'react'

const TitleComponent = ({ title }) => <h1 className='title'>{title}</h1>

export default memo(TitleComponent)
