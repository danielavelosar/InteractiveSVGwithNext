import  React from 'react' ;
import { ReactDOM } from 'react';

export default function Home(){

  return (
    <div>
      {/* <object data="/vercel.svg" type="image/svg+xml"></object>
        <h1>My page</h1> */}
      <svg height={100} width={100} id="mySvg">
        <circle
          id='myCircle'
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
        />
        <script>
          {`let circle = document.getElementById('myCircle');`}
          {`console.log('hello world')`}
        </script>
      </svg>
    </div>
  );

}

   