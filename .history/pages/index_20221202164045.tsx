import  React from 'react' ;
import {Helmet }from 'react-helmet';
import { ReactDOM } from 'react';

export default function Home(){

  return (
    <div>
      <object data="/peruMap.svg" type="image/svg+xml" id='map'></object>
      <Helmet>
        <script>
          let map = document.getElementById('map');
          console.log(map);
          let svg = map.contentDocument;
          let lima = svg.getElementById('LimaMap');
          console.log(lima);
        </script>
      </Helmet>
      
       

      {/* <svg height={100} width={100} id="mySvg">
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
        {`let circle = document.getElementById('myCircle');
        circle.addEventListener('mouseenter', () =>{onClick('blue')});
        circle.addEventListener('mouseout', () =>{onClick('red')});
        function onClick(color) {
          circle.setAttribute('fill', color);
        }`}
        </script>
      </svg> */}

    </div>
  );

}

   