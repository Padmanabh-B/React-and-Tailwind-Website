import React from 'react'
import Layout from '../../components/Layout'
import Intro from './Intro'
import WhatWeDo from './WhatWeDo'
import WhyChooseUs from './WhyChooseUs'

const About = () => {
  return (
    <Layout>
      <div>
      <Intro/>
      <WhatWeDo/>
      <WhyChooseUs/>
      </div>


    </Layout>
  )
}

export default About