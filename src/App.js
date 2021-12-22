import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';

function App() {
  let pelicula = peliculasJson;
  return (
    <PageWrapper>

   { pelicula.map(pelicula => 
    <Pelicula titulo={pelicula.titulo} img={pelicula.img} calificacion={pelicula.calificacion} duracion={pelicula.duracion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} >
    {pelicula.descripcion}
    </Pelicula>   
   ) 
   }
   <Paginacion pagina={2} total={4} onChange={(pagina) => {alert(pagina)}}/>
    </PageWrapper>
    
      
  );
}





export default App;
