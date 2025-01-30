import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { DiGithubAlt, DiMongodb } from 'react-icons/di'
import { FaDocker } from 'react-icons/fa'
import {
  FaCss3Alt,
  FaGitAlt,
  FaGitlab,
  FaGolang,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiExpress,
  SiJest,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si'

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Skills
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        <span className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaHtml5 className="text-2xl" /> HTML
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaCss3Alt className="text-2xl" /> CSS
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <IoLogoJavascript className="text-2xl" /> JavaScript
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <BiLogoTypescript className="text-2xl" /> TypeScript
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaGolang className="text-2xl" /> Golang
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaReact className="text-2xl" /> React
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiExpress className="text-2xl" /> Express
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaNodeJs className="text-2xl" /> NodeJS
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiTailwindcss className="text-2xl" /> Tailwind
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiJest className="text-2xl" /> Jest
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaGitAlt className="text-2xl" /> Git
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <DiGithubAlt className="text-2xl" /> Github
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaGitlab className="text-2xl" /> Gitlab
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiPostman className="text-2xl" /> Postman
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <DiMongodb className="text-2xl" /> MongoDB
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <BiLogoPostgresql className="text-2xl" /> PostgreSQL
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <SiMysql className="text-2xl" /> MySQL
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <FaDocker className="text-2xl" /> Docker
        </span>
      </div>
    </section>
  )
}

export default Skills
