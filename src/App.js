import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

// video en 2:10

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  let pelicula = peliculasJson;
  return (
    <PageWrapper>

   {
      pelicula.map(pelicula => 
    <Pelicula titulo={pelicula.titulo} img={pelicula.img} calificacion={pelicula.calificacion} duracion={pelicula.duracion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} >
    {pelicula.descripcion}
    </Pelicula>   
   ) 
   }
   <Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {setPaginaActual(pagina)}}/>
    </PageWrapper>
    
      
  );
}





export default App;
