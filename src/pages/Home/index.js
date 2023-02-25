import React from 'react'
import Layout from '../../components/Layout'
import Intro from '../Home/Intro'
import MarketingStatergies from './MarketingStatergies'
import WhyMarketing from './WhyMarketing'

const Home = () => {
  return (
    <Layout>
      <div className='px-32'>
      <Intro/>
      <MarketingStatergies/>
      <WhyMarketing/>
      </div>
    </Layout>
  )
}

export default Home