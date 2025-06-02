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
      title: "Steven Universe",
      altText: "Steven Universe",
      imageSrc: "/Imagenes/steven.png",
    },
  ];

  return (
    <main>
      <CarruselDestacado banners={banners} />
    </main>
  );
};

export default Home;
