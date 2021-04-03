import React from 'react'

const Recipie = (props)=> {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.ingredients.map(ing=>(
                    <li> {ing.text}</li>
                ))}
            </ul>
            <p>{props.calories}</p>
            <img src ={props.image} alt ="hi"/>
            
        </div>
    )
}

export default Recipie