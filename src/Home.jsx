import React from 'react'

import web from '../src/images/image1.jpg'

import Common from './Common'
const Home=()=>{
  return<>
   <Common imgsrc={web}
       name="Grow your business with"
       visit='/service'
       btname="Get Started"
   />
  </>
  
}
export default Home;