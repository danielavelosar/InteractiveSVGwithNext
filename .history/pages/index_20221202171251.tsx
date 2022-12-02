import  React from 'react' ;
import {Helmet }from 'react-helmet';
import { ReactDOM } from 'react';

export default function Home(){
  let title = 'hidden';


  return (
    <div>
      <object data="/recurso.svg" type="image/svg+xml" id='texto'/>
      <Helmet>
        <script>
          {`let lorem = document.getElementById('texto');
            lorem.addEventListener( 'load', () => {
            svg2 = lorem.contentDocument;
            let pruebaTexto = svg2.querySelector('#textoId');
            pruebaTexto.style.visibility = ${title};
            
          });
         
      `}

        </script>
      </Helmet>


      {/* <object data="/peruMap.svg" type="image/svg+xml" id='mapId'></object>
      <Helmet>
        <script>
          {`let mapX = document.getElementById('mapId');
            mapX.addEventListener( 'load', () => {
            svgX = mapX.contentDocument;
            let lima = svgX.querySelector('#LimaMap');
            lima.style.visibility = 'hidden';
            
          });
         
          
`}

        </script>
      </Helmet> */}
      
       

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

   