import Navbar from "../src/components/Navbar";
import BackgroundVideo from "../src/components/BackgroundVideo";
import shoesVideo from "../src/assets/video/shoes_video.mp4";
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
        <h1 className="test">asorgnvdónvard</h1>
    </div>
  );
}

export default App;
