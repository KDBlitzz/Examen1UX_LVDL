import CarruselDestacado from '../components/organisms/CarruselDestacado';

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
    <main>
      <CarruselDestacado banners={banners} />
    </main>
  );
};

export default Home;
