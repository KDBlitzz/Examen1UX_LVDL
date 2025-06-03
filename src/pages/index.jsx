import React from 'react';
import CarruselDestacado from '../components/organisms/CarruselDestacado';
import NavBar from '../components/organisms/NavBar'; // Asegúrate de tener la ruta correcta
import CarouselPeliculas from '../components/organisms/CarruselPeliculas-Series';
import ContinueWatchingCarousel from '../components/organisms/ContinueWatchingCarousel';


const itemsContinuarViendo = [
  {
    src: '/Imagenes/gumballcv.webp',
    title: 'El Increíble Mundo de Gumball',
    age: '7+',
    progress: 70,
  },
  {
    src: '/Imagenes/regularshowcv.webp',
    title: 'Un Show Más',
    age: '10+',
    progress: 60,
  },
  {
    src: '/Imagenes/robotsalvajecv.webp',
    title: 'Robot Salvaje',
    age: '7+',
    progress: 30,
  },
  {
    src: '/Imagenes/ricknmortycv.webp',
    title: 'Rick and Morty',
    age: '16+',
    progress: 90,
  },
  {
    src: '/Imagenes/luisenriquecv.webp',
    title: 'No Tenéis Ni **** Idea',
    age: '13+',
    progress: 75,
  },
];

const itemsDestacado = [
  { src: '/Imagenes/ricknmortyce.png', alt: 'Serie' },
  { src: '/Imagenes/terrorrio.webp', alt: 'Película' },
  { src: '/Imagenes/thelastofus.webp', alt: 'Serie' },
  { src: '/Imagenes/yargi.webp', alt: 'Serie' },
  { src: '/Imagenes/ajltce.png', alt: 'Serie' },
  { src: '/Imagenes/elchicodeoroce.png', alt: 'Serie' },
  { src: '/Imagenes/mountainhead.webp', alt: 'Película' },
  { src: '/Imagenes/duster.webp', alt: 'Serie' },
  { src: '/Imagenes/mickey17.webp', alt: 'Película' },
  { src: '/Imagenes/reyes.webp', alt: 'Serie' },
];
const itemsParati = [
  { src: '/Imagenes/bigbangtheory.webp', alt: 'The Big Bang Theory' },
  { src: '/Imagenes/gumball.webp', alt: 'El Increíble Mundo de Gumball' },
  { src: '/Imagenes/mivillanofav4.webp', alt: 'Mi Villano Favorito 4' },
  { src: '/Imagenes/robotsalvaje.webp', alt: 'Robot Salvaje' },
  { src: '/Imagenes/mountainhead.webp', alt: 'Mountain Head' },
  { src: '/Imagenes/terrorrio.webp', alt: 'Terror en el Rio' },
  { src: '/Imagenes/reyes.webp', alt: 'Reyes' },
  { src: '/Imagenes/mickey17.webp', alt: 'Mickey 17' },
  { src: '/Imagenes/ricknmorty.webp', alt: 'Rick and Morty' },
  { src: '/Imagenes/yargi.webp', alt: 'Yargi' },
];
const itemsTop10 = [
  { src: '/Imagenes/thelastofus.webp', alt: 'The Last of Us' },
  { src: '/Imagenes/ricknmorty.webp', alt: 'Rick and Morty' },
  { src: '/Imagenes/ajlt.webp', alt: 'And Just Like That' },
  { src: '/Imagenes/gumball.webp', alt: 'El Increíble Mundo de Gumball' },
  { src: '/Imagenes/elchicodeoro.webp', alt: 'El Chico de Oro' },
  { src: '/Imagenes/lapromesa.webp', alt: 'La Promesa' },
  { src: '/Imagenes/lazarus.webp', alt: 'Lazarus' },
  { src: '/Imagenes/luisenrique.webp', alt: 'No Tenéis Ni **** Idea' },
  { src: '/Imagenes/georgieymandy.webp', alt: 'Georgie y Mandy' },
  { src: '/Imagenes/masterchef.webp', alt: 'MasterChef' },
];
const Home = () => {
  const banners = [
    {
      title: "El Increíble Mundo de Gumball",
      altText: "Gumball",
      imageSrc: "/Imagenes/gumball.png",
      description: 'Conoce a los Watterson: Mamá, Papá, Anaís, Darwin y Gumball. Gumball es un gato de doce años con dotes para la "desgracia" y un grupo de raros amigos.',
    },
    {
      title: "Five Nights at Freddy's",
      altText: "Five Nights at Freddy's",
      imageSrc: "/Imagenes/fnafMovie.jpg",
      description: "Josh Hutcherson estelariza esta adaptación del videojuego que sigue al vigilante de una pizzería con muñecos animatrónicos asesinos.",
    },
    {
      title: "Un Show Más",
      altText: "Un Show Más",
      imageSrc: "/Imagenes/regularShow.jpg",
      description: "Los encargados de un parque y mejores amigos, Mordecai y Rigby, se pasan el día intentando entretenerse con lo que sea.",
    },
    {
      title: "Oppenheimer",
      altText: "Oppenheimer",
      imageSrc: "/Imagenes/oppenheimer.webp",
      description: "Christopher Nolan dirige a Cillian Murphy en este aclamado drama biográfico sobre el físico J. Robert Oppenheimer, el padre de la bomba atómica.",
    },
    {
      title: "The Office",
      altText: "The Office",
      imageSrc: "/Imagenes/theoffice.png",
      description: "Michael Scott, gerente regional de Dunder Mifflin, lidera al equipo en un hilarante viaje a través de la mala gestión y la conducta inapropiada.",
    },
    {
      title: "Venom: El Ultimo Baile",
      altText: "Venom: El Ultimo Baile",
      imageSrc: "/Imagenes/venom.webp",
      description: "¡Que comience el caos... una última vez! Tom Hardy regresa como Eddie Brock en la última entrega de la emocionante trilogía de Venom.",
    }
  ];

  return (
    <>
      <NavBar />
      <main style={{ paddingTop: '64px', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        <CarruselDestacado banners={banners} />
      </main>
      <div style={{ backgroundColor: 'black', padding: '1rem 1rem 0 1rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        <h2 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Destacado</h2>
        <CarouselPeliculas items={itemsDestacado}/>
      </div>
      <div style={{ backgroundColor: 'black', padding: '1rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        <h2 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Para ti</h2>
        <CarouselPeliculas items={itemsParati}/>
      </div>
      <div style={{ backgroundColor: 'black', padding: '1rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        <h2 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>TOP 10 Series</h2>
        <CarouselPeliculas items={itemsTop10} showRank />
      </div>
      <div style={{ backgroundColor: 'black', padding: '1rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        <h2 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>Continuar viendo</h2>
        <ContinueWatchingCarousel items={itemsContinuarViendo} />
      </div>
    </>
  );
};

export default Home;
