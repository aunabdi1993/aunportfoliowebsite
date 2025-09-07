import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aun",
  lastName: "Abdi",
  name: `Aun Abdi`,
  role: "Full-Stack Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "aabdidevelopment@gmail.com",
  location: "Europe/London"
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aunabdi1993",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aun-abdi-50785780/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Writing code, reading ideas</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
        <br />
        I'm Aun, a full-stack engineer who crafts scalable software and dives into books to fuel new perspectives.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      <br />
        Hi I'm Aun, a UK-based full-stack software engineer with a passion for building secure, scalable systems and intuitive digital products. My work spans payment platforms, API integrations, and personal projects at the intersection of technology, reading, and curiosity.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Webexpenses",
        timeframe: "2022 - Present",
        role: "Full Stack Software Engineer",
        achievements: [
          <>
            Delivered secure, scalable payment solutions by leading card programme integrations with Adyen and enhancing Wise-powered services for improved reliability.
          </>,
          <>
            Drove compliance and security through successful PCI DSS–compliant migration of sensitive card data, designing robust storage architecture and services.
          </>,
        <>
          Enhanced system performance and consistency by creating a reusable HTTP module to standardise API requests across multiple services.
        </>,
          <>
            Accelerated product delivery by collaborating across teams to replace third-party systems with in-house solutions, designing APIs and integrations under tight deadlines.
          </>,
        ],
        images: [
          {
            src: "/images/webexpenses.png",
            alt: "Webexpenses",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Wentworth Golf Club",
        timeframe: "2019-2020",
        role: "Business Analyst",
        achievements: [],
      },
    {
      company: "Civil Service Fast Stream",
      timeframe: "2016-2019",
      role: "Finance Graduate",
      achievements: [],
    },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of London, City",
        description: <>MSc Computer Science and AI | 2024-2026</>,
      },
      {
        name: "IT Career Switch",
        description: <>Online coding traineeship | 2021-2022</>,
      },
        {
          name: "University of Southampton",
          description: <>BSc Politics | 2011-2014 | Achieved 2:1</>,
        },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        tags: [
          {
            name: "Java",
            icon: "java",
          },
      {
            name: "Python",
            icon: "python",
          },
        {
            name: "Typescript",
            icon: "typescript",
          },
        {
            name: "Javascript",
            icon: "javascript",
          },
        ],
      },
      {
        title: "Frameworks",
        tags: [
          {
            name: "Springboot",
            icon: "springboot",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "node",
          },
          {
            name: "Django",
            icon: "django",
          },
        ],
      },
        {
          title: "Cloud & DevOps",
          tags: [
            {
              name: "AWS",
              icon: "aws",
            },
            {
              name: "Azure Devops",
              icon: "azure",
            },
            {
              name: "Docker",
              icon: "docker",
            },
          ],
        },
          {
            title: "Databases",
            tags: [
              {
                name: "MySQL",
                icon: "sql",
              },
             {
               name: "PostGreSQL",
               icon: "postgres",
             },
            {
                name: "MongoDB",
                icon: "mongo",
            },
            ],
          },
            {
              title: "Testing",
              tags: [
                {
                  name: "JUnit",
                  icon: "junit",
                },
                {
                  name: "Jest",
                  icon: "jest",
                },
                {
                  name: "Selenium",
                  icon: "selenium",
                },
              ],
            },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
