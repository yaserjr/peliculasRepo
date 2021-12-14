import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';

function App() {
  let pelicula = [
    {
      img:"images/uploads/mv1.jpg",
      titulo:"Oblivion (2012)",
      calificacion:"8.1",
      duracion:"2h21’",
      director:"Joss Whedon",
      actores:"Robert Downey Jr., Chris Evans, Chris Hemsworth",
      fecha:"1 May 2015",
      descripcion:"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
    },
    {
      img:"images/uploads/mv2.jpg", 
      titulo:"Into the wild(2014)",
      calificacion:"7.8",
      duracion:"2h21’",
      director:"Anthony Russo, Joe Russo",
      actores:"Chris Evans, Samuel L. Jackson, Scarlett Johansson",
      fecha:"1 May 2015" ,
      descripcion:"As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat..."
    }
  ]
  return (
    <PageWrapper>

   { pelicula.map(pelicula => 
    <Pelicula titulo={pelicula.titulo} img={pelicula.img} calificacion={pelicula.calificacion} duracion={pelicula.duracion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} >
    {pelicula.descripcion}
    </Pelicula>   
   )
   }
    </PageWrapper>
    
      
  );
}

export default App;
