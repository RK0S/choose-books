import {Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { routeConfig } from './../../../../shared/config/routeConfig/routeConfig';



const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{
					Object.values(routeConfig).map(({element, path}) => (
						<Route
							key={path}
							path={path}
							element={element}
						/>
					))
				}
                <Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Suspense>
	)
}

export default AppRouter