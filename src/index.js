import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/*function Card(props) {
  return <div>
    <h2 className='name'>{props.name}</h2>
    <img className='circle-img'
      src={props.img}
      alt="avatar_img"
    />
    <p className='info'>{props.tel}</p>
    <p className='info'>{props.email}</p>
  </div>
}*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
<App /></div>
  
);


