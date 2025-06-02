import React from 'react';
import CarruselDestacado from '../components/organisms/CarruselDestacado';
import NavBar from '../components/organisms/NavBar'; // Asegúrate de tener la ruta correcta

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
    </>
  );
};

export default Home;
