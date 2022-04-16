import React from 'react'

const Person = ({person}) => {
    const {id, name, age, image} = person
    return (
        <React.Fragment>
            <div className='person' key={id}>
                <div className='img-container'>
                    <img className='image' src={image} alt={name} />            
                </div>         
                <div>
                    <h4 className='name'>{name}</h4>
                    <h5 className='age'>{age} years old</h5>
                </div>                
            </div>
        </React.Fragment>
    )
}

export default Person
