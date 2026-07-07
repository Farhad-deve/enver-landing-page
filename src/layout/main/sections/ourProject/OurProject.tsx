import styles from "./ourProject.module.css"

const OurProject = () => {
  return (
    <>
        <section id="our-project" className='px-section flex flex-col gap-2r'>
            <div className='flex flex-col justify-between gap-1r md-flex-row md-items-start'>
                <h1 className={`text-white font-f-i-s font-700 leading-150p md-leading-120p text-clamp2r-3vw-4r ${styles.textHeading}`}>Why Enver Is The Best Choice?</h1>
                <p className={`text-white-70 font-f-n-s text-clamp1r-1-2r leading-150p ${styles.textDescription}`}>
                    Watch this one minute video so you understand why you should use our services!
                </p>
            </div>

            <div className='relative'>
                <picture>
                    <source media="(min-width: 768px)" srcSet="/assets/images/desktop/our-project-desktop.png" />

                    <img src="/assets/images/mobile/our-project-mobile.png" alt="Our Project" className='w-full' />
                </picture>

                <div className='absolute w-full h-full flex justify-center items-center top-0 left-0'>
                    <button className={`bg-light-blue border-none rounded-full flex justify-center items-center p-1r md-p-2-5r transition-a-03s-ease ${styles.btnPlay}`}>
                        <img src="/assets/icons/button-play.svg" alt="Play Button" />
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurProject