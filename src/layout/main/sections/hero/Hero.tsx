import Button from "../../../../components/buttons/Button";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section className="px-section py-section relative flex flex-col gap-2r overflow-hidden md-flex-row md-items-center min-h-screen">
        {/* Linear Gradients */}
        <div
          className={`absolute top-0 left-0 w-full h-full ${styles.linearGradients}`}
        >
          {/* Top Gradient */}
          <div
            className={`${styles.linearGradientTop} pointer-events-none absolute`}
          ></div>

          {/* Bottom Gradient */}
          <div
            className={`${styles.linearGradientBottom} pointer-events-none absolute`}
          ></div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start gap-1-5r">
          <h1 className="text-white font-f-i-s leading-150p">
            Build Your Awesome Platform
          </h1>
          <p className="text-white-70 font-f-n-s leading-150p">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>

          <a href="#our-services">
            <Button type="solid">
              Our Services
              <img
                src="/public/assets/icons/arrow-right-up.png"
                alt="arrow-right-up-icon"
                className="pointer-events-none"
              />
            </Button>
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div>
            {/* Guy in Orange T-Shirt */}
            <div className="relative">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/public/assets/images/desktop/Guy-in-orange-T-shirt-desktop.png"
                />

                <img
                  src="/public/assets/images/mobile/Guy-in-orange-T-Shirt-mob.png"
                  alt="Hero Image"
                  className={`${styles.guy} pointer-events-none`}
                />
              </picture>

              {/* Bg rectangle */}
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/public/assets/images/desktop/rotated-square-desktop.svg"
                />

                <img
                  src="/public/assets/images/mobile/rotated-square-mob.svg"
                  alt=""
                  className={`absolute ${styles.rotatedSquare} pointer-events-none`}
                />
              </picture>
            </div>

            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/public/assets/images/desktop/zigzag-line-desktop.svg"
              />

              <img
                src="/public/assets/images/mobile/zigzag-line-mob.svg"
                alt=""
                className={`absolute ${styles.zigzag} pointer-events-none`}
              />
            </picture>

            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/public/assets/images/desktop/two-circle-desktop.svg"
              />

              <img
                src="/public/assets/images/mobile/two-circle-mob.svg"
                alt=""
                className={`absolute ${styles.twoCircle} pointer-events-none`}
              />
            </picture>

            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/public/assets/images/desktop/two-triangle-desktop.svg"
              />

              <img
                src="/public/assets/images/mobile/two-triangle-mob.svg"
                alt=""
                className={`absolute ${styles.twoTriangle} pointer-events-none`}
              />
            </picture>

            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/public/assets/images/desktop/plus-desktop.svg"
              />

              <img
                src="/public/assets/images/mobile/plus-mob.svg"
                alt=""
                className={`absolute ${styles.plus} pointer-events-none`}
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
