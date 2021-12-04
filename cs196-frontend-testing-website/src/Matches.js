import React, { useState } from 'react'
import './Style.css'
import Switch from 'react-ios-switch'
import FakeDataCeo from './fakeData/FakeDataCeo'

function Matches () {
  const [showData, setData] = useState(true)

  return (
    <div className = 'usercard-space-one'>
      {showData ? <FakeDataCeo /> : <FakeDataCeo />}
      <div className = 'usercard-space-horizontal'>
        <p> </p>
      </div>
    </div>
  )
}
export default Matches