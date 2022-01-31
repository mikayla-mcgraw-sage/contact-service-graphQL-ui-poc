import React from 'react';
import './App.css';

const CONTACT_QUERY=`
query Sessions {
  sessions(room: "Earth") {
    title
    room
    track
    id
    level
  }
}
`

export default  function App() {
const[contacts, setContacts] = React.useState([]);

React.useEffect(() => {
  fetch('http://localhost:4000/', {
    method: "POST",
    headers:{ "Content-Type" : "application/json"
    },
    body: JSON.stringify({query: CONTACT_QUERY})
  }).then(response => response.json())
  .then(data => setContacts(data.data.sessions))
}, [])

  return (
    <div>
    <h1>Contact List:</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>"<b>Title:</b> {contact.title}. <b>Room:</b> {contact.room}"</li>
        ))}
      </ul>
    </div>
  );
}


