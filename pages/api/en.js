// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const DATA = {
  links: {
    github: "https://github.com/BasicPixel",
    repo: "https://github.com/BasicPixel/typistt",
    twitter: "https://twitter.com/pQudah",
    dev: "https://dev.to/basicpixel",
    telegram: "https://t.me/qudah",
  },
  navbar: {
    name: "BasicPixel",
    about: "About",
    projects: "Projects",
    connect: "Connect",
  },
  home: {
    heading: "I am BasicPixel. I build things for the web.",
  },
  about: {
    body: [
      {
        content:
          "Assalamu Alaikum 👋! I am Osama AlQudah (or BasicPixel), a 16-year-old self-taught full-stack web developer from Jordan.",
      },
      {
        content:
          "I am experienced in front-end and back-end web development with modern web frameworks and libraries, such as Next.js, Django etc...",
      },
      {
        content:
          "My first experience with programming was late 2020, when I first took Harvard's CS50, then CS50's Web track. Then I worked on several projects and took many of freeCodeCamp's curriculums and othe online courses. Currently learning mobile development with Flutter, as well as several Computer Science topics.",
      },
    ],
  },
  projects: [
    {
      name: "bloggr",
      desc: "Markdown-supported blog where anyone can post anonymously with simplicity and power.",
      demo: "https://bloggr.vercel.app/",
      repo: "https://github.com/BasicPixel/bloggr",
      stack: "Next.js, TailwindCSS, Django REST Framework",
    },
    {
      name: "iffa-quotes",
      desc: "App for random Islamic quotes (in Arabic) with the ability to submit quotes",
      demo: "https://iffa-quotes.vercel.app/",
      repo: "https://github.com/BasicPixel/iffa-quotes-frontend",
      stack: "React, TailwindCSS, Django REST Framework",
    },
    {
      name: "typistt",
      desc: "Simple typing practice / test website with different modes and settings",
      demo: "https://typistt.vercel.app/",
      repo: "https://github.com/BasicPixel/typistt",
      stack: "React, Tailwind",
    },
    {
      name: "marknote",
      desc: "(Currently offline) A minimalistic markdown note-taking application.",
      demo: "https://marknote-frontend.vercel.app/",
      repo: "https://github.com/BasicPixel/marknote",
      stack: "React, Django REST Framework",
    },
    {
      name: "task50",
      desc: "Simple and elegant temporary to-do list. My first ever project.",
      demo: "https://basicpixel.github.io/task50/",
      repo: "https://github.com/BasicPixel/task50",
      stack: "HTML, CSS, JS",
    },
    {
      name: "py-yt-downloader",
      desc: "Python CLI / GUI YouTube downloader. supports both videos and playlists.",
      demo: "https://github.com/BasicPixel/py-yt-downloader",
      repo: "https://github.com/BasicPixel/py-yt-downloader",
      stack: "Python",
    },
    {
      name: "django-commerce",
      desc: "Fake e-commerce website made with Django.",
      demo: "https://django-techshop.herokuapp.com/",
      repo: "https://github.com/BasicPixel/django-commerce",
      stack: "Django",
    },
    {
      name: "django-mail",
      desc: "Django fake mail client.",
      demo: "https://cs50w-mail.herokuapp.com/",
      repo: "https://github.com/BasicPixel/django-mail",
      stack: "Django",
    },
    {
      name: "mdwiki",
      desc: "Django wikipedia-like website with Markdown support.",
      demo: "https://django-md-wiki.herokuapp.com/",
      repo: "https://github.com/BasicPixel/mdwiki",
      stack: "Django",
    },
  ],
  connect: {
    title: "Connect",
    info: "Feel free to contact me via email or Telegram, or check my code on GitHub, read my blog posts on DEV or follow me on Twitter.",
    email: "osama.mo.qudah@gmail.com",
    telegram: "Telegram",
    twitter: "Twitter",
    blog: "Blog",
    github: "Github",
  },
  footer: {
    body: ["Made with ", " and Next.js and Tailwind."],
  },
};

export default function handler(req, res) {
  res.status(200).json(DATA);
}
