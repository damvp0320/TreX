import Navbar from "../src/components/Navbar";
import BackgroundVideo from "../src/components/BackgroundVideo";
import shoesVideo from "../src/assets/video/shoes_video.mp4";
import Collection from "../src/components/Collection"
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

      <div className="containerParallax">
        
      </div>

        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
        <h1 className="test">asorgnvdónvard</h1>
    </div>
  );
}

export default App;
