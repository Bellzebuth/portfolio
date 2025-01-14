const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: 'Etienne Tournier Rigaudy ',
    description:
      'I am a software engineer with expertise in full-stack web development. I have experience in building scalable, secure and reliable web applications using React, Golang, or others frameworks. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.',
    role: 'Full-Stack Developer',
    photo: '../profil.png',
    email: 'e.tournier.rigaudy@gmail.com',
    phone: '+33638748910',
  },

  // ============ SOCIAL LINKS ============
  socials: {
    github: 'https://github.com/Bellzebuth',
    linkedin: 'https://www.linkedin.com/in/etienne-tournier-rigaudy-b21012197/',
  },

  // ============ PROJECTS ============
  projects: [
    {
      title: 'Pseudocode to C',
      description:
        'Pseudocode to C is a web app that translates pseudocode into C code, aiding in the transition from high-level logic to a lower-level language.',
      technologies: 'React, Tailwind, Flask, SpaCy',
      github: 'https://github.com/dsbalico/pseudocode-to-c',
      link: 'https://pseudocode-to-c.netlify.app/',
    },

    {
      title: 'YouShare',
      description:
        'Developed to learn full-stack web development using Nuxt3, Express, and PostgreSQL in fulfillment of my internship requirements.',
      technologies: 'Nuxt, Tailwind, Express, PostgreSQL',
      github: 'https://github.com/dsbalico/YouShare',
      link: 'https://github.com/dsbalico/YouShare',
    },

    {
      title: 'Draw & Classify',
      description:
        'Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.',
      technologies: 'React, Tailwind, Tensorflow',
      github: 'https://github.com/dsbalico/letter-digit-shape-classification',
      link: 'https://letterdigitshape-classification.netlify.app/',
    },

    {
      title: 'Chatroom',
      description:
        'Chatroom is a simple online chatting web application where you can create chat rooms and have a fun conversation with a group of people.',
      technologies: 'React, Tailwind, Firebase',
      github: 'https://github.com/dsbalico/chatroom',
      link: 'https://thechatroom.netlify.app/',
    },

    {
      title: 'Sudoku Solver',
      description:
        'Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.',
      technologies: 'React, Tailwind, TypeScript',
      github:
        'https://github.com/dsbalico/sudoku-solver-using-simulated-annealing',
      link: 'https://sudoku-solver-sa.netlify.app/',
    },

    {
      title: 'Probability Pick',
      description:
        'Probability Pick is a PCSO Lotto Number Generator that calculates the likelihood of selecting winning numbers based on historical draw data.',
      technologies: 'React, Tailwind, Flask',
      github: 'https://github.com/dsbalico/pcso-lotto-number-generator',
      link: 'https://probability-pick.netlify.app/',
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: 'CY Tech (EISTI)',
      degree: 'Engineer degree in Computer Science',
      duration: '2019 - 2022',
      image: 'cy_tech.png',
    },
    {
      school: 'Preparatory class',
      degree: '',
      duration: '2016 - 2019',
      image: 'cy_tech.png',
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: 'Full-Stack Developer',
      company: 'SUPER G',
      duration: 'Dec 2022 - Dec 2024',
      image: 'superg-icon.png',
      descriptions: [
        'Worked extensively on a single application, ensuring its evolution and scalability over time, using technologies like Golang, React, and PostgreSQL.',
        'Actively contributed to the ongoing development of a web application.',
        'Mentored by senior developers on best practices and code optimization.',
      ],
    },
    {
      position: 'Full-Stack Developper',
      company: 'Safran',
      duration: 'Sept 2022 - Nov 2022',
      image: 'safran.png',
      descriptions: [
        'Developed an software to give at different departments managers the KPI (key performance indicator) they needed.',
        'Trained the new trainee to continue the project.',
      ],
    },

    {
      position: 'Full-Stack Developper (intern)',
      company: 'Safran',
      duration: 'Sept 2021 - Aug 2022',
      image: 'safran.png',
      descriptions: [
        'Developed an software to give at the production teams the KPI (key performance indicator) they needed.',
        'Earned the price of innovation of the month in the company.',
        'Adapted the application to other services as quality, selling.',
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: 'Foundations of Cybersecurity Certificate',
      description: 'Provided by Coursera & Authorized by IBM',
      icon: 'ibm',
      link: 'https://www.coursera.org/account/accomplishments/records/SF2PPLNVTH6R',
    },
    {
      title: 'Git and GitHub Essentials',
      description: 'Provided by Coursera & Authorized by IBM',
      icon: 'ibm',
      link: 'https://www.credly.com/badges/fa00026a-4db5-4269-ab4f-340f5382ac03',
    },
    {
      title: 'Crash Course on Python Certificate',
      description: 'Provided by Coursera & Authorized by Google',
      icon: 'google',
      link: 'https://www.coursera.org/account/accomplishments/verify/S9773NBEK4S6',
    },
    {
      title: 'Technical Support Fundamentals Certificate',
      description: 'Provided by Coursera & Authorized by Google',
      icon: 'google',
      link: 'https://www.coursera.org/account/accomplishments/verify/P9EH5HNYRESZ',
    },
    {
      title:
        'Introduction to Web Development with HTML, CSS, JavaScript Certificate',
      description: 'Provided by Coursera & Authorized by IBM',
      icon: 'ibm',
      link: 'https://www.credly.com/badges/7b88eb00-e1f9-4ae6-be2a-3b2ae8983c44',
    },
    {
      title: 'Introduction to Cloud Computing Certificate',
      description: 'Provided by Coursera & Authorized by IBM',
      icon: 'ibm',
      link: 'https://www.credly.com/badges/514b694a-8dc4-418d-9af4-61908dc29ca8',
    },
    {
      title:
        'Django Application Development with SQL and Databases Certificate',
      description: 'Provided by Coursera & Authorized by IBM',
      icon: 'ibm',
      link: 'https://www.credly.com/badges/a36dd8a3-1050-4c4e-bcef-97b39babf55e',
    },
    {
      title: 'Front-End Developer (React) Certificate',
      description: 'Provided by HackerRank',
      icon: 'hackerrank',
      link: 'https://www.hackerrank.com/certificates/631ac3acf267',
    },
    {
      title: 'Software Engineer Certificate',
      description: 'Provided by HackerRank',
      icon: 'hackerrank',
      link: 'https://www.hackerrank.com/certificates/efdbdd44eb7d',
    },
  ],

  // ============ FOOTER ============
  footer: '© 2024 - Etienne Tournier Rigaudy - React x Vite x TailWind',
}

export default info
