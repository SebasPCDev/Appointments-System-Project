import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import BannerI from "../../assets/BannerI.webp";
import BannerII from "../../assets/BannerII.webp";
import BannerIII from "../../assets/BannerIII.webp";
import styles from "../Carousel/carouselHome.module.css";

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src={BannerI}
          style={{ width: "100%", height: "400px" }}
          className={styles.imageCarousel}
        />
        <Carousel.Caption>
          <h3>Servicio de Vacunación</h3>
          <p>
            Ofrecemos el servicio de planificación de vacunas para tus recién
            nacidos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={BannerII}
          style={{ width: "100%", height: "400px" }}
          className={styles.imageCarousel}
        />
        <Carousel.Caption>
          <h3>Servicio de peluquería</h3>
          <p>Trae a tu mascota para que reciba la mejor atención posible</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={BannerIII}
          style={{ width: "100%", height: "400px" }}
          className={styles.imageCarousel}
        />
        <Carousel.Caption>
          <h3>¿Tu mascota se siente mal?</h3>
          <p>No dudes en traerlo con nosotros</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
