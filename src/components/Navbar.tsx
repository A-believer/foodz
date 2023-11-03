import Image from "next/image"
import logo from "../../public/icons/logo.svg"

type Props = {}

const Navbar = () => {
  return (
    <nav className='font-pp'>
        <Image src={logo} alt="logo"/>
    </nav>
  )
}

export default Navbar