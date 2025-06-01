import BannerDestacado from "../components/organisms/BannerDestacado";



const Home = () => {
  const contenidoDestacado = {
    title: "El Increible Mundo de Gumball",
  };

  return (
    <main>
      <BannerDestacado 
        title={contenidoDestacado.title}
        altText="El Increible Mundo de Gumball"
        width={1200}
        height={500}
      />
      {}
    </main>
  );
};

export default Home;