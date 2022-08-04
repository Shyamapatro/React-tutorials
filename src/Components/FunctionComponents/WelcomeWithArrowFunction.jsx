import React from 'react'
// In Arrayfunction the main difference is function 
// component contains reference (this) but arrow function contains only parent reference

var WelcomeWithArrowFunction= ()=> {
  return (

    <div>Welcome Message Using ArrowFunction</div>
  )
}

export default WelcomeWithArrowFunction;