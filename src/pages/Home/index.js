import React from 'react'
import Layout from '../../components/Layout'
import Intro from '../Home/Intro'
import MarketingStatergies from './MarketingStatergies'

const Home = () => {
  return (
    <Layout>
      <div className='px-32'>
      <Intro/>
      <MarketingStatergies/>
      </div>
    </Layout>
  )
}

export default Home