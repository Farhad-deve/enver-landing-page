import Logo from "../../components/logos/Logo"

const Footer = () => {
  return (
    <>
      <footer className="px-section py-4r flex flex-col gap-2r items-center justify-between font-f-n-s text-white-70 md-flex-row">
        <div>
          <Logo />
        </div>

        <nav>
          <ul className="font-700 md-font-400 flex flex-col gap-2r p-0 text-center md-flex-row">
            <li><a href="#" className="text-white-70 transition-a-03s-ease hover-text-white">Support</a></li>
            <li><a href="#" className="text-white-70 transition-a-03s-ease hover-text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-white-70 transition-a-03s-ease hover-text-white">Terms and Conditions</a></li>
          </ul>
        </nav>

        <div>
          <p className="text-white">&copy; 2020 Enver, All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer