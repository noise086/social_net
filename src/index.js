import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
  {id:1, message: 'Hello world', likescount: 3},
  {id:1, message: 'Its my third post', likescount: 10},
  {id:1, message: 'Its my second post', likescount: 13},
  {id:1, message: 'Its my first post', likescount: 23},
]
let dialogsData = [
  { id: 1, name: 'Dick' },
  { id: 2, name: 'Kaliph' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Natasha' },
  { id: 5, name: 'Vitro' },
  { id: 6, name: 'Elena' },
];
let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: 'How arw you' },
  { id: 3, message: 'Who is it' },
  { id: 4, message: "Fuck you" },
  { id: 5, message: "Go drink" },
  { id: 6, message: "Hi" },
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

