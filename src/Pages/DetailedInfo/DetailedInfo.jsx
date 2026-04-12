import React, {useState} from 'react'
import  Details  from '../../modules/Details/Details'
import ModalWindow from "../../modules/ModalWindow/ModalWindow";

const DetailedInfo = () => {
  const [active, setActive] = useState(false)
  return (
    <>
    <div> 
       {active &&
      <ModalWindow
          active={() => {setActive(false)}} 
          />
          }
      </div>
      <div> <Details active={() => {setActive(true)}} /></div>
        
      </>
  )
}

export default DetailedInfo