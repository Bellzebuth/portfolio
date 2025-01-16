import { CiLink } from 'react-icons/ci'

function Project({
  title,
  description,
  technologies,
  link,
  github,
}: {
  title: string
  description: string
  technologies: string
  link: string
  github: string
}) {
  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-purple-hover transition-all duration-300 p-6 md:rounded-xl">
      <div className="flex gap-2 overflow-x-scroll py-2">
        {technologies.split(',').map((tech, index) => (
          <span
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-800/30 dark:text-pink-500"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {link && (
          <a
            href={link}
            className="flex gap-2 mt-4 hover:text-pink-800 hover:dark:text-pink-500 cursor-pointer transition-all duration-300"
          >
            <CiLink className="text-2xl self-center" />
            <span className="text-xs self-center">View Project</span>
          </a>
        )}
        <a
          href={github}
          className="flex gap-2 mt-4 hover:text-pink-800 hover:dark:text-pink-500 cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
    </div>
  )
}

export default Project
