"use client"
import Image from "next/image"
import logo from "../../public/icons/logo.svg"
import Button from "./Button"
import {motion, useCycle} from "framer-motion"
import { useRef } from "react"
import { useDimensions } from "@/utils/use-dimension"
import { MenuToggle } from "./Menutoggle"

type Props = {}

const variants: any = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsLists = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
const mobileMenu: string[] = ["Home", "Menu", "Blog", "Contact"]

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef: any = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className='font-pp flex justify-between items-center md:py-[34px] py-6 text-grey font-medium relative'>
      <Image src={logo} alt="logo" className="md:w-[140px] md:h-10 w-[59px] h-[18px] object-contain"/>
      <ul className="gap-x-8 items-center md:flex hidden">
        <li>Home</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>Contact</li>
        <li><Button/></li>
      </ul>

      
      <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`md:hidden flex flex-col absolute top-0 right-0 bottom-0 bg-white w-fit`}>
        <MenuToggle toggle={() => toggleOpen()} />
        <motion.ul className="w-fit p-6 bg-white mt-10 space-y-8 text-right shadow-2xl rounded-xl" variants={variantsLists}>
        {mobileMenu.map((menu, index) => (
          <motion.li variants={variantsLists} key={index}>{menu}</motion.li>
        ))}
        <motion.li variants={variantsLists}><Button/></motion.li>
        </motion.ul>
      </motion.div>
    </nav>
  )
}

export default Navbar