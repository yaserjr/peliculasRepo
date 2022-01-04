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
  const Total_Paginas = 2;

  let pelicula = peliculasJson;

  const buscarPelicula = async() => {
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
    
    let respuesta = await fetch(url,{
      "method": 'GET',
    //  "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'     ,   
        "Origin": 'https://lucasmoy.dev/'
      } 
    });
   
    let json = await respuesta.json(); 
    debugger;
  }
  buscarPelicula();

  //con esta funcion determinamos el numero de peliculas a mostrar por pagina
  const cargarPeliculas = () =>{
    pelicula = pelicula.slice((paginaActual-1)*Total_Paginas,paginaActual*Total_Paginas);
  }

  //con esta funcion determinamos el numero total de paginas
  const getTotalDePaginas = () => {
    let cantidadTotalPaginas = peliculasJson.length;
    return Math.ceil(cantidadTotalPaginas/Total_Paginas);//Math.ceil redondea para arriba ejem: 2.1 = 3;Math.round redondea para abajo ejem: 2.1 = 2
  }

  cargarPeliculas();

  return (
    <PageWrapper>

   {
      pelicula.map(pelicula => 
    <Pelicula titulo={pelicula.titulo} img={pelicula.img} calificacion={pelicula.calificacion} duracion={pelicula.duracion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} >
    {pelicula.descripcion}
    </Pelicula>   
   ) 
   }
   <Paginacion pagina={paginaActual} total={getTotalDePaginas()} onChange={(pagina) => {setPaginaActual(pagina)}}/>
    </PageWrapper>
    
      
  );
}





export default App;
