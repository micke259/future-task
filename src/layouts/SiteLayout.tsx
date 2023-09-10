import React, { Fragment } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const SiteLayout:React.FC = () => {
  return (
	<Fragment>
		<main>
			<Header/>
			<Outlet/>
		</main>
	</Fragment>
  )
}

export default SiteLayout