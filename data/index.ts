export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Your Vision, Our Collaboration is Transparent Communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Motivated Developer with Insatiable Curiosity for Cutting-Edge Technology",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building An AI-Companion Project",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Companion Builder",
    des: "AI-Companion Builder is a cool software that lets you create your own custom AI models of people you admire, like actors or celebrities. It's a tool to make personalized artificial intelligence companions based on your favorite individuals.",
    img: "/AI-Companion.png",
    iconLists: [
      {
        name: "/next.svg",
        link: "https://nextjs.org/",
      },
      {
        name: "/ts.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "https://shorturl.at/D9YHE",
        link: "https://stripe.com",
      },
      {
        name: "/re.svg",
        link: "https://reactjs.org/",
      },
      {
        name: "/tail.svg",
        link: "https://tailwindcss.com/",
      },
      // {
      //   name: "/clerk.svg",
      //   link: "https://clerk.com/",
      // },
    ],
    github_link: "https://github.com/sujal12344/AI-Companion-Builder",
    site_link: "https://ai-companion-builder.vercel.app/",
  },
  {
    id: 2,
    title: "Chatting Application",
    des: "A real-time chat application using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for instant messaging. The app should enable user account creation, secure real-time communication, and deliver a smooth, responsive chat experience.",
    img: "/chatApp.png",
    iconLists: [
      {
        name: "https://socket.io/images/logo-dark.svg",
        link: "https://socket.io/",
      },
      {
        name: "/re.svg",
        link: "https://reactjs.org/",
      },
      {
        name: "/tail.svg",
        link: "https://tailwindcss.com/",
      },
      // {
      //   name: "https://expressjs.com/images/favicon.png",
      //   link: "https://expressjs.com/",
      // },
      {
        name: "https://shorturl.at/aJNbK",
        link: "https://nodejs.org/",
      },
      {
        name: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
        link: "https://www.mongodb.com/",
      },
    ],
    github_link: "https://github.com/sujal12344/chat-app",
    site_link: "https://chat-app-fyek.onrender.com/",
  },
  {
    id: 3,
    title: "E-Commernce-Store",
    des: "An E-Commernce-Store where user easily buy good quality clothes and stylish shoes, glasses, bags, accessories, etc.",
    img: "/E-com.png",
    iconLists: [
      {
        name: "https://shorturl.at/D9YHE",
        link: "https://stripe.com",
      },
      {
        name: "https://shorturl.at/KgG4Z",
        link: "https://redis.io/",
      },

      {
        name: "/re.svg",
        link: "https://reactjs.org/",
      },
      {
        name: "/tail.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "https://shorturl.at/aJNbK",
        link: "https://nodejs.org/",
      },
    ],
    github_link: "https://github.com/sujal12344/E-commernce-website",
    site_link: "https://e-commernce-website.onrender.com/",
  },
  {
    id: 4,
    title: "AI-Image-generator",
    des: "The AI Image Generator is a powerful tool designed to create high-quality images using OpenAI's API. This project leverages advanced AI models to generate images based on user prompts, providing a seamless and intuitive experience.",
    img: "/AI-Image.png",
    iconLists: [
      {
        name: "/re.svg",
        link: "https://reactjs.org/",
      },
      {
        name: "/tail.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "https://vitejs.dev/logo.svg",
        link: "https://vitejs.dev/",
      },
      {
        name: "https://shorturl.at/IZSs3",
        link: "https://platform.openai.com",
      },
    ],
    github_link: "https://github.com/sujal12344/AI-Image-generator",
    site_link: "https://ai-image-generator-eta-flame.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "CryptoDetect Software",
  //   des: "CryptoDetect is a comprehensive web application designed to help users track and analyze cryptocurrency trends. Users can store their favorite cryptocurrencies in a favorites section.",
  //   img: "/Cryptodetect.png",
  //   iconLists: [
  //     {
  //       name: "/re.svg",
  //       link: "https://reactjs.org/",
  //     },
  //     {
  //       name: "/tail.svg",
  //       link: "https://tailwindcss.com/",
  //     },
  //     {
  //       name: "https://shkarina.me/Recharts.png",
  //       link: "https://recharts.org/",
  //     },
  //     {
  //       name: "https://miro.medium.com/v2/resize:fit:1020/1*M4pePOxyzZ5BfowWxLlsfg.png",
  //       link: "https://www.coingecko.com/en/api",
  //     },
  //   ],
  //   github_link: "https://github.com/sujal12344/CyptoDetect",
  //   site_link: "https://cypto-detect.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "Recipe App",
  //   des: "The Recipe App is a user-friendly platform for discovering and preparing tasty recipes. Users can easily search for and find delicious dishes, making it simple to cook up something new and delightful.",
  //   img: "/ReceipeApp.png",
  //   iconLists: [
  //     {
  //       name: "/re.svg",
  //       link: "https://reactjs.org/",
  //     },
  //     {
  //       name: "/tail.svg",
  //       link: "https://tailwindcss.com/",
  //     },
  //     {
  //       name: "https://shorturl.at/5nD9u",
  //       link: "https://daisyui.com/",
  //     },
  //     {
  //       name: "https://www.edamam.com/assets/img/small-logo.png",
  //       link: "https://www.edamam.com/",
  //     },
  //   ],
  //   github_link: "https://github.com/sujal12344/RecipeApp",
  //   site_link: "https://recipe-app-puce-psi.vercel.app/",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Contributed to blockchain-integrated NFT games like Waves Ducks and Arkimals under the Waves Protocol ecosystem.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    technologies: [
      {
        name: "React",
        icon: "/re.svg",
        url: "https://reactjs.org/",
      },
      {
        name: "TypeScript",
        icon: "/ts.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "MongoDB",
        icon: "https://github.com/mongodb.png",
        url: "https://mongodb.com",
      },
      {
        name: "SCSS",
        icon: "https://sass-lang.com/assets/img/logos/logo.svg",
        url: "https://sass-lang.com/",
      },
    ],
    companies: {
      name: "Arkimals",
      logo: "https://pbs.twimg.com/profile_images/1831043105237217280/n80yJlDp_400x400.jpg",
      url: "https://arkimals-game.com/",
    },
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "A founding engineer who contributed heavily to building the backend using various AI libraries.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    technologies: [
      {
        name: "Next.js",
        icon: "/next.svg",
        url: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        icon: "/ts.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "Prisma",
        icon: "https://github.com/prisma.png",
        url: "https://prisma.com",
      },
      {
        name: "PostgreSQL",
        icon: "https://github.com/postgresql.png",
        url: "https://postgresql.org/",
      },
      {
        name: "React",
        icon: "/re.svg",
        url: "https://reactjs.org/",
      },
      {
        name: "Tailwind CSS",
        icon: "/tail.svg",
        url: "https://tailwindcss.com/",
      },
    ],
    companies: {
      name: "PrivartanX",
      logo: "/raffl.svg",
      url: "https://parivartanx.com/",
    },
  },
  {
    id: 3,
    title: "Frontend Developer",
    desc: "Worked on the frontend of the Raffl's website using Nextjs, React.js, TypeScript, NextUI, framar-motion, and Zustand.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    technologies: [
      {
        name: "Next.js",
        icon: "/next.svg",
        url: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        icon: "/ts.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "React",
        icon: "/re.svg",
        url: "https://reactjs.org/",
      },
      {
        name: "Tailwind CSS",
        icon: "/tail.svg",
        url: "https://tailwindcss.com/",
      },
    ],
    companies: {
      name: "Raffl",
      logo: "/raffl.svg",
      url: "https://raffl.pro",
    },
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/twitter.svg",
    link: "https://x.com/Sujalkeshar220",
  },
  {
    id: 2,
    img: "/github.svg",
    link: "https://github.com/sujal12344",
  },
  {
    id: 3,
    img: "/linkedIn.svg",
    link: "https://www.linkedin.com/in/sujal-kesharwani-518798368/",
  },
  {
    id: 4,
    img: "/resume.svg",
    link: "https://childish.tiiny.site",
  },
];
