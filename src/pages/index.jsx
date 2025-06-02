import React from 'react';
import CarruselDestacado from '../components/organisms/CarruselDestacado';
import NavBar from '../components/organisms/NavBar'; // Asegúrate de tener la ruta correcta
import CarouselPeliculas from '../components/organisms/CarruselPeliculas-Series';
import ContinueWatchingCarousel from '../components/organisms/ContinueWatchingCarousel';


const itemsContinuarViendo = [
  {
    src: '/assets/images/1.jpg',
    title: 'El Frío en los Huesos1',
    age: '16+',
    progress: 70,
  },
  {
    src: '/assets/images/2.jpg',
    title: 'El Código Enigma2',
    age: '13+',
    progress: 40,
  },
  {
    src: '/assets/images/2.jpg',
    title: 'El Código Enigma3',
    age: '13+',
    progress: 40,
  },
  {
    src: '/assets/images/2.jpg',
    title: 'El Código Enigma4',
    age: '13+',
    progress: 40,
  },
  {
    src: '/assets/images/2.jpg',
    title: 'El Código Enigma5',
    age: '13+',
    progress: 40,
  },
];

const itemsDestacado = [
  { src: '/assets/images/1.jpg', alt: 'Película 1' },
  { src: '/assets/images/2.jpg', alt: 'Película 2' },
  { src: '/assets/images/3.jpg', alt: 'Película 3' },
  { src: '/assets/images/4.jpg', alt: 'Película 4' },
  { src: '/assets/images/5.jpg', alt: 'Película 5' },
  { src: '/assets/images/6.jpg', alt: 'Película 6' },
  { src: '/assets/images/7.jpg', alt: 'Película 7' },
  { src: '/assets/images/8.jpg', alt: 'Película 8' },
  { src: '/assets/images/9.jpg', alt: 'Película 9' },
  { src: '/assets/images/10.jpg', alt: 'Película 10' },
];
const itemsParati = [
  { src: '/assets/images/1.jpg', alt: 'Película 1' },
  { src: '/assets/images/2.jpg', alt: 'Película 2' },
  { src: '/assets/images/3.jpg', alt: 'Película 3' },
  { src: '/assets/images/4.jpg', alt: 'Película 4' },
  { src: '/assets/images/5.jpg', alt: 'Película 5' },
  { src: '/assets/images/6.jpg', alt: 'Película 6' },
  { src: '/assets/images/7.jpg', alt: 'Película 7' },
  { src: '/assets/images/8.jpg', alt: 'Película 8' },
  { src: '/assets/images/9.jpg', alt: 'Película 9' },
  { src: '/assets/images/10.jpg', alt: 'Película 10' },
];
const itemsTop10 = [
  { src: '/assets/images/1.jpg', alt: 'Película 1' },
  { src: '/assets/images/2.jpg', alt: 'Película 2' },
  { src: '/assets/images/3.jpg', alt: 'Película 3' },
  { src: '/assets/images/4.jpg', alt: 'Película 4' },
  { src: '/assets/images/5.jpg', alt: 'Película 5' },
  { src: '/assets/images/6.jpg', alt: 'Película 6' },
  { src: '/assets/images/7.jpg', alt: 'Película 7' },
  { src: '/assets/images/8.jpg', alt: 'Película 8' },
  { src: '/assets/images/9.jpg', alt: 'Película 9' },
  { src: '/assets/images/10.jpg', alt: 'Película 10' },
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
      <main style={{ paddingTop: '64px' }}>
        <CarruselDestacado banners={banners} />
      </main>
      <div style={{ backgroundColor: 'black', padding: '1rem 1rem 0 1rem' }}>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Destacado</h2>
            <CarouselPeliculas items={itemsDestacado}/>
          </div>
          <div style={{ backgroundColor: 'black', padding: '1rem' }}>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Para ti</h2>
            <CarouselPeliculas items={itemsParati}/>
          </div>
          <div style={{ backgroundColor: 'black', padding: '1rem' }}>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>TOP 10 Series</h2>
            <CarouselPeliculas items={itemsTop10} showRank />
          </div>
          <div style={{ backgroundColor: 'black', padding: '1rem' }}>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>Continuar viendo</h2>
            <ContinueWatchingCarousel items={itemsContinuarViendo} />
          </div>
    </>
  );
};

export default Home;
