import React from 'react'

function Welcome() {
  return (
    <div><h3>Welcome, using function Component</h3>
       <JoinUs />
       and <JoinYou />
    </div>
   
  )
}

function JoinUs(){
  return(
    <h1>Join Us</h1>
  )
}
function JoinYou(){
  return(
    <h1>Join You</h1>
  )
}
export default Welcome;
export { JoinUs,JoinYou}