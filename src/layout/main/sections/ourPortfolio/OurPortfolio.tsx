import Carousel from "../../../../components/carousels/Carousel";
import styles from "./ourPortfolio.module.css";

const OurPortfolio = () => {
  return (
    <>
      <section className="px-section py-4r relative overflow-hidden flex flex-col ">
        <div>
          <h1
            className={`text-clamp2r-3vw-4r text-white font-f-i-s leading-150p md-leading-120p ${styles.textHeading}`}
          >
            Our Awesome Portfolio
          </h1>

          <picture>
            <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/two-circle-desktop.svg" />

            <img src="/public/assets/images/mobile/two-circle-mob.svg" alt="Two Circle" className={`absolute pointer-events-none ${styles.imgCircle}`} />
          </picture>

          <picture>
            <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/zigzag-line-desktop.svg" />

            <img src="/public/assets/images/mobile/zigzag-line-mob.svg" alt="Zigzag Line" className={`absolute pointer-events-none ${styles.zigzag}`} />
          </picture>
        </div>

        <div className="py-2r">
            <div className="hidden lg-flex gap-1r justify-between py-4r">
                <img src="/public/assets/images/carousel-image-2.png" alt="" className={`pointer-events-none ${styles.image2}`} />
                <img src="/public/assets/images/carousel-image-1.png" alt="" className={`pointer-events-none ${styles.image1}`} />
                <img src="/public/assets/images/carousel-image-3.png" alt="" className={`pointer-events-none ${styles.image3}`} />
            </div>

            <Carousel images={[
                '/public/assets/images/carousel-image-2.png',
                '/public/assets/images/carousel-image-1.png',
                '/public/assets/images/carousel-image-3.png'
            ]} />
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
