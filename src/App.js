import React, {useState} from 'react'
import data from './data.js'
import List from './List.js'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main className="App">
      <h3 className='title'>{people.length} BIRTHDAYS TODAY</h3>
      <List people={people} setPeople={setPeople}/>
      <button className='clear-all' onClick={() => setPeople([])}>Clear All</button>
    </main>
  )
}

export default App;
