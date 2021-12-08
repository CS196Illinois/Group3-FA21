import React from 'react'
import './Style.css';
  
const Progress_bar = ({bgcolor, progress, height}) => {
     
  const Parentdiv = {
    height: height,
    width: '95 %',
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    margin: 30
  }
      
  const Childdiv = {
    height: '95%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 20,
    textAlign: 'right',
    transition: 2,
  }
      
  const progresstext = {
    padding: 5,
    color: 'black',
    fontWeight: 900
  }
        
  return (
    <div style = {Parentdiv}>
      <div style = {Childdiv}>
        <span style = {progresstext}> {`${progress}%`} </span>
      </div>
    </div>
  )
}
  
export default Progress_bar;