import user_info from '../data/user_info'
import { FaArrowCircleUp } from 'react-icons/fa'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative p-4 text-center md:flex md:justify-between md:items-center">
      <p className="flex-1 text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm font-light text-center">
        {user_info.footer}
      </p>
      <button
        onClick={() => scrollToTop()}
        className="absolute right-5 text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm font-light flex gap-2 md:self-end"
      >
        <FaArrowCircleUp className="self-center text-pink-800 dark:text-pink-500" />
        Go back to top
      </button>
    </footer>
  )
}

export default Footer
