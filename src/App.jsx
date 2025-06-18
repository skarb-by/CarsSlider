import { lazy } from 'react'
import { Suspense } from 'react'
import { Loading } from './components/Loading/Loading'
const Content = lazy(() => import('./components/Content/Content.jsx'))
function App() {
	return (
		<div className='App'>
			<Suspense fallback={<Loading />}>
				<Content />
			</Suspense>
		</div>
	)
}

export default App
