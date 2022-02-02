import React from 'react';
import './App.css';

const SESSION_QUERY=`
query {
  sessions{
    id
    title
    favorite
    day
    room
  }
}

`

export default  function App() {
const[sessions, setSessions] = React.useState([]);

React.useEffect(() => {
  fetch('http://localhost:4000/', {
    method: "POST",
    headers:{ "Content-Type" : "application/json"
    },
    body: JSON.stringify({query: SESSION_QUERY})
  }).then(response => response.json())
  .then(data => setSessions(data.data.sessions))
}, [])

  return (

    <div>
    <h1>Session List:</h1>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>"<b>ID: </b> {session.id} <b>Title: </b> {session.title} <b>Room: </b> {session.room} <b>Day: </b> {session.day}"</li>
        ))}
      </ul>
    </div>
  );
}


