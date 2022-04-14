import React from 'react'

const Person = ({person}) => {
    const removePerson = () => {
        alert('Remove me')    
    }

    return (
        <React.Fragment>
            <div className='person' key={person.id}>            
                <img className='image' src={person.image} alt={person.name} />            
                <div>
                    <h4 className='name'>{person.name}</h4>
                    <h5 className='age'>{person.age} years old</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Person
