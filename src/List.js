import React from 'react'
import Person from './Person.js'

const List = ({people, setPeople}) => {   

    return (
        <React.Fragment>
            {
                people.map(person => {
                    const removePerson = (id) => {
                        setPeople(people.filter(person => person.id !== id))
                    }
                    return (
                    <div className='person'>
                        <Person person={person} />
                        <button className='remove-person' onClick={() => removePerson(person.id)}>
                            Remove
                        </button>
                    </div>
                    )
                })
            }
            
        </React.Fragment>
    )      
}

export default List