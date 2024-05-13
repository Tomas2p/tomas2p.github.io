import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  GalleryPageContent,
  BlogPageContent,
  HomePageContent,
  Images,
} from "./types/config.ts";

export const identity: Identity = {
  name: "Tomás Pino Pérez",
  nickname: "Tomas2p",
  favicon: "logo.png",
  logo: "/logo.png",
  profile_foto: "/tomas2p.png",
  email: "tomas.pino.perez03+portfolio@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  /* {
    title: "Blog",
    url: "/blog",
  }, */
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: `https://github.com/${identity.nickname}`,
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Instagram",
    url: `https://instagram.com/tomas2p11`,
    icon: "mdi:instagram",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:" + identity.email,
    icon: "mdi:email",
  },
];

export const aboutImages: Images[] = [
  {
    width: 350,
    url: "/tomas2p.png",
    alt: "",
  },
  {
    width: 150,
    url: "/tomas2p_3.jpg",
    alt: "",
  },
  {
    width: 350,
    url: "/tomas2p_2.jpg",
    alt: "",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: identity.name,
    description:
      "Full time student from Spain who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description: `I'm ${identity.name}, a full time student from Spain who also loves building cool things using code.`,
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | " + identity.name,
    description:
      "Full time student from Spain who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `I'm ${identity.name}, a full-time student from Spain who loves building cool things using code.</br></br>Apart from programming, I'm also passionate about filmmaking and have produced several short films.</br></br>Combining my technical skills with my creative vision, I enjoy bringing stories to life both on screen and through lines of code.`, // Markdown is supported
    images: aboutImages,
  },
  work: {
    description:
      "I've some experience and education in software development, gaining expertise through hands-on projects and academic studies.", // Markdown is supported
    items: [
      {
        title: "Degree in Informatic Engineering",
        company: {
          name: "Universidad de La Laguna",
          image:
            "https://www3.gobiernodecanarias.org/medusa/edublog/ceadsantacruzdetenerifemercedespinto/wp-content/uploads/sites/341/2018/10/logo-ull.jpg",
          url: "https://www.ull.es/grados/ingenieria-informatica/",
        },
        date: "2021 - Present",
      },
      /* {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      }, */
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | " + identity.name,
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "INovel Web",
      description:
        "It's a web-based reimplementation of the original INovel game.",
      image: "/projects/inovel.png",
      year: "2023",
      url: "https://github.com/tomas2p/inovel",
    },
    {
      title: "INovel++",
      description:
        "Interactive novel by terminal implemented in C++ and using text files for story creation.",
      finish: true,
      image: "/projects/inovel++.png",
      year: "2023",
      url: "https://github.com/tomas2p/inovel-game",
    },
    {
      title: "UNO++",
      description:
        "A recreation of the popular UNO game in C++ using pure terminal.",
      image: "/projects/uno++.png",
      year: "2022",
      url: "https://github.com/tomas2p/UNO_card_game",
    },
  ],
};

// Gallery (/gallery)
export const galleryPageContent: GalleryPageContent = {
  seo: {
    title: "Gallery | " + identity.name,
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on. Some of my favorite photos. ON PROGRESS",
  photos: [
    {
      title: "Hexagon",
      collection: "Rand",
      image: "/tomas2p_2.jpg",
      year: "2023",
    },
    {
      title: "Lake",
      collection: "Bethancourt",
      image: "/tomas2p.png",
      year: "2023",
    },
    {
      title: "Lake",
      collection: "Bethancourt",
      image: "/tomas2p_3.jpg",
      year: "2023",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | " + identity.name,
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
