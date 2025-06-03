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
  { src: '/Imagenes/ricknmorty.webp', alt: 'Serie' },
  { src: '/Imagenes/terrorrio.webp', alt: 'Película' },
  { src: '/Imagenes/thelastofus.webp', alt: 'Serie' },
  { src: '/Imagenes/yargi.webp', alt: 'Serie' },
  { src: '/Imagenes/ajlt.webp', alt: 'Serie' },
  { src: '/Imagenes/elchicodeoro.webp', alt: 'Serie' },
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
    },
    {
      title: "Five Nights at Freddy's",
      altText: "Five Nights at Freddy's",
      imageSrc: "/Imagenes/fnafMovie.jpg",
    },
    {
      title: "Un Show Más",
      altText: "Un Show Más",
      imageSrc: "/Imagenes/regularShow.jpg",
    },
    {
      title: "Oppenheimer",
      altText: "Oppenheimer",
      imageSrc: "/Imagenes/oppenheimer.webp",
    },
    {
      title: "The Office",
      altText: "The Office",
      imageSrc: "/Imagenes/theoffice.png",
    },
    {
      title: "Venom: El Ultimo Baile",
      altText: "Venom: El Ultimo Baile",
      imageSrc: "/Imagenes/venom.webp",
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
