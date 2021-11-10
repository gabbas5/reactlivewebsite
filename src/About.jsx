import React from 'react'
import Common from './Common';
import web2 from '../src/images/image2.jpg';

const About=()=>{
  return<>
  <Common
      imgsrc={web2}
      name="Welcome to about page"
      visit="/contact"
      btname="Contact Now"
  />
  </>
  
}
export default About;