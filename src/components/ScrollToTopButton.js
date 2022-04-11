import { Icon } from "@iconify/react";
import { useEffect, useState } from "react"


export default function ScrollToTopButton() {
  const [show, setShow] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    })
  })
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    show && <span className="btn border-none bg-neutral-500/40 hover:bg-neutral-500/50 btn-circle fixed bottom-14 hover:bottom-[3.75rem] transition-all right-10 text-white"
      onClick={handleClick}
    >
      <Icon icon={'fluent:chevron-up-12-filled'} width={24} height={24}/>
    </span>
  )
}