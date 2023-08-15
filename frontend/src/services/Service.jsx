import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
const serviceData = [
    {
        imageUrl:"/images/weather.png",
        title:"Calculate weather",
        desc:"lorem ipusum dolor sit amet, consectetur adipiscing el"
    },
    {
        imageUrl:"/images/guide.png",
        title:"Best tour guide",
        desc:"lorem ipusum dolor sit amet, consectetur adipiscing el"
    },
    {
        imageUrl:"/images/customization.png",
        title:"Customization",
        desc:"lorem ipusum dolor sit amet, consectetur adipiscing el"
    },
]
const Service = () => {
  return (
   <>
   {serviceData.map((item,index)=>(
    <Col key={index} lg="3"><ServiceCard item={item}/></Col>
   ))}
   </>
  )
}

export default Service