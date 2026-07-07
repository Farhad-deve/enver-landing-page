import styles from "./services.module.css";

const Services = () => {
  return (
    <section id="services" className="px-section py-4r relative overflow-hidden">
      <div className="flex justify-center">
        <h1
          className={`text-clamp2r-3vw-4r text-white font-f-i-s md-text-center leading-150p md-leading-120p ${styles.textHeading}`}
        >
          The Service We Provide For You
        </h1>

        <picture>
          <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/two-triangle-desktop.svg" />

          <img src="/public/assets/images/mobile/two-triangle-mob.svg" alt="Two Triangle" className={`absolute pointer-events-none ${styles.imgTriangle}`} />
        </picture>

        <picture>
          <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/plus-desktop.svg" />

          <img src="/public/assets/images/mobile/plus-mob.svg" alt="Plus Icon" className={`absolute pointer-events-none ${styles.imgPlus}`} />
        </picture>
      </div>

      <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-2r font-f-n-s text-center p-1-5r md-p-2-5r">
        <div className="flex flex-col items-center justify-between gap-1r lg-px-2r xl-px-3r">
          <div className="bg-light-blue-10 w-4r h-4r rounded-full flex items-center justify-center">
            <img
              src="/public/assets/icons/development.svg"
              alt="Development Icon"
            />
          </div>
          <h2 className="text-white">Development</h2>
          <p className="text-white-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-1r lg-px-2r xl-px-3r">
          <div className="bg-light-red-10 w-4r h-4r rounded-full flex items-center justify-center">
            <img src="/public/assets/icons/ux-ui.svg" alt="UX/UI Designer" />
          </div>
          <h2 className="text-white">UX/UI Designer</h2>
          <p className="text-white-70">
            We provide UI/UX Design services, and of course with the best
            quality
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-1r lg-px-2r xl-px-3r">
          <div className="bg-light-yellow-10 w-4r h-4r rounded-full flex items-center justify-center">
            <img
              src="/public/assets/icons/graphik-designer.svg"
              alt="Graphik Designer"
            />
          </div>
          <h2 className="text-white">Graphik Designer</h2>
          <p className="text-white-70">
            We provide Graphic Design services, with the best designers
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-1r lg-px-2r xl-px-3r">
          <div className="bg-light-yellow-10 w-4r h-4r rounded-full flex items-center justify-center">
            <img
              src="/public/assets/icons/motion-graphik.svg"
              alt="Motion Graphik"
            />
          </div>
          <h2 className="text-white">Motion Graphik</h2>
          <p className="text-white-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-1r lg-px-2r xl-px-3r">
          <div className="bg-light-blue-10 w-4r h-4r rounded-full flex items-center justify-center">
            <img
              src="/public/assets/icons/photography.svg"
              alt="Photography Icon"
            />
          </div>
          <h2 className="text-white">Photography</h2>
          <p className="text-white-70">
            We provide Photography services, and of course with the best quality
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-1r lg-px-2r xl-px-3r">
          <div className="bg-light-red-10 w-4r h-4r rounded-full flex items-center justify-center">
            <img
              src="/public/assets/icons/videography.svg"
              alt="Videography Icon"
            />
          </div>
          <h2 className="text-white">Videography</h2>
          <p className="text-white-70">
            Create a platform with the best and coolest quality from us.
          </p>
        </div>

        <picture>
          <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/plus-desktop.svg" />

          <img src="/public/assets/images/mobile/plus-mob.svg" alt="Plus Icon" className={`absolute pointer-events-none ${styles.imgPlusBottom}`} />
        </picture>
      </div>
    </section>
  );
};

export default Services;
