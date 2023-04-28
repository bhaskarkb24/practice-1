import React, { useState } from 'react';

export default function Num() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const showDetails = () => {
    console.log('Name:', name);
    console.log('Email', email);
    console.log('Contact', contact);
  };
  return (
    <>
      {/* <p>{name}</p>
      <button onClick={() => setName('four')}>Change</button> */}
      <br />
      <br />
      {/* <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Enter something"
      />
      <p>{input}</p> */}
      <input
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="Enter Email"
      />
      <br />
      <br />
      <input
        onChange={(e) => setContact(e.target.value)}
        name="contact"
        type="text"
        placeholder="Enter Number"
      />
      <br />
      <br />
      <button onClick={showDetails()}> Submit</button>

      {/* <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Contact:{contact}</p> */}
    </>
  );
}
