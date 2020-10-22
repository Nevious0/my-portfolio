import React from 'react'

 const Recipe = ({title,selftext, score ,image}) => {
    return (
        <div className="card">
            <div className="card-title">
              <h2>{title}</h2>  
            </div>
            <div className='card-body'>
            <p className="card-text">{selftext}</p>
            </div>
            <img src={image} alt=""/>
            <h2><span className="badge badge-secondary"> {score}</span></h2>
        </div>
    )
}
export default Recipe;