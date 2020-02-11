import React from 'react'

const App = () => {
  return (
    <>
    <h1 className="title">Sugoi Sushi</h1>
    <div className="home">
      <div className="dine">
        <img src="./imgs/chicken.jpg" alt="chicken sushi"/>
        <h2 className="dine__head">Dine In</h2>
      </div>
      <div className="take">
        <img src="./imgs/sashimi.jpg" alt="fish sushi"/>
        <h2 className="take__head">Take Away</h2>
      </div>
    </div>
    </>
  )
}

export default App
