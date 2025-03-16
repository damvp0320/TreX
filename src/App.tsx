import Navbar from "../src/components/Navbar";
import BackgroundVideo from "../src/components/BackgroundVideo";
import shoesVideo from "../src/assets/video/shoes_video.mp4";
import Collection from "../src/components/Collection";
import ParallaxSection from "../src/components/ParallaxSection";
import ShoesSection from "../src/components/ShoesSection";
import Footer from "../src/components/Footer";
import Accesories from "../src/components/Accesories";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundVideo videoSrc={shoesVideo}>
        <h1 className="title">
          <span>TreX:</span> Estilo en cada paso
        </h1>
        <p className="subtitle">
          Zapatos de calidad para gente de calidad.
        </p>
        <button className="button">Ver Mas</button>
      </BackgroundVideo>
      
      <h1 className="tittleCollection">NUEVA COLECCIÓN TreX</h1>
      <div className="collectionContainer">
        <Collection 
          imgCollection="https://us.123rf.com/450wm/bondvit/bondvit1611/bondvit161100014/65789979-hombre-de-negocios-de-ropa-zapatos-pol%C3%ADtico-el-estilo-del-hombre-de-negocios-abroch%C3%A1ndose-la.jpg" 
          title="Hombre" 
          text="Comodidad y estilo para cualquier ocasión. Descubre la nueva colección." 
        />
        <Collection 
          imgCollection="https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024" 
          title="Sneakers" 
          text="Comodidad y estilo para cualquier ocasión. Descubre la nueva colección." 
        />
        <Collection 
          imgCollection="https://efesalud.com/wp-content/uploads/2021/10/3835469-e1483536504194.jpg" 
          title="Mujer" 
          text="Comodidad y estilo para cualquier ocasión. Descubre la nueva colección." 
        />
      </div>
      <div className="menShoesContainer">
        <ShoesSection 
          title="Colección Hombre" 
          description="Explora nuestra selección de zapatos para hombre, con comodidad y estilo en cada paso." 
          imageUrl="https://www.bxxyshoe.in/cdn/shop/files/MG_9106copy_a0e09d91-8c8c-4a54-afa1-ed954b399ee5.jpg?v=1710396911&width=1445"
        />
      </div>
      <div className="womenShoesContainer">
        <ShoesSection 
          title="Colección Mujer" 
          description="Descubre nuestra colección de zapatos para mujer, diseñados para cada ocasión." 
          imageUrl="https://images.pexels.com/photos/27100515/pexels-photo-27100515/free-photo-of-a-woman-wearing-high-heels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          reverse={true} // This will swap the image and text position
        />
      </div>
      <div className="parallaxContainer">
      <ParallaxSection />
      </div>      
      <div className="">
        <Accesories/>
      </div>
      <div className="accesoriesContainer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
