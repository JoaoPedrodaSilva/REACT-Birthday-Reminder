import React from 'react'
import Person from './Person.js'

const List = ({people}) => {
if(people.length > 0) {
        return (
        <React.Fragment>        
            <Person person={people[0]} />
            <Person person={people[1]} />
            <Person person={people[2]} />
            <Person person={people[3]} />
            <Person person={people[4]} />
        </React.Fragment>
        )
    }  
}

export default List