export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  // { name: "Testimonials", link: "#testimonials" },
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
    // site_link: "https://ai-companion.vercel.app/",
    site_link: "https://github.com/sujal12344/AI-Companion-Builder"
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/sujal12344",
  },
  {
    id: 2,
    img: "/twitter.svg",
    link: "https://x.com/sujal12344",
  },
  {
    id: 3,
    img: "/linkedIn.svg",
    link: "https://www.linkedin.com/in/sujal-kesharwani-978632258/",
  },
];
