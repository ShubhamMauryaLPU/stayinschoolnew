import React from 'react'
import Hero from './Hero'
import Analytics from './Analytics'
import Transform from './Transform'
import StatsBanner from './StatsBanner'
import FeaturesGrid from './FeaturesGrid'
import Testimonials from './Testimonials'
const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
        <Hero/>
        <Analytics/>
        <FeaturesGrid/>
        <Testimonials/>
        <StatsBanner/>
        <Transform/>
    </div>
  )
}

export default HomePage