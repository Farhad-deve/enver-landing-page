import Button from "../../../../components/buttons/Button";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <section className="px-section py-4r relative overflow-hidden flex flex-col gap-2r md-flex-row md-items-center md-justify-between  ">
        <div className="py-2r">
          <h1
            className={`text-clamp2r-3vw-4r text-white font-f-i-s leading-150p md-leading-120p ${styles.textHeading}`}
          >
            Contact us for the service you want to use
          </h1>

          <picture>
            <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/plus-desktop.svg" />

            <img src="/public/assets/images/mobile/plus-mob.svg" alt="Plus Icon" className={`absolute pointer-events-none ${styles.imgPlus}`} />
          </picture>

          <picture>
            <source media="(min-width: 768px)" srcSet="/public/assets/images/desktop/two-circle-desktop.svg" />

            <img src="/public/assets/images/mobile/two-circle-mob.svg" alt="Two Circle" className={`absolute pointer-events-none ${styles.imgCircle}`} />
          </picture>
        </div>

        <div>
          <Button type="solid">Contact Us</Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
