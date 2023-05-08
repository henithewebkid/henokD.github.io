import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Dasher Delivery",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2019- Feb 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - current",
    points: [
      " maintaining the company’s e-commerce website and Created additional corporate revenue stream by designing, developing and maintaining the company’s Ecommerce website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arafat proved me wrong.",
    name: "Henok Demmise",
    designation: "web Admin",
    company: "Rainbow Foam and plastic plc",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAADAAMBAAAAAAAAAAAAAAAAAQIDBQYE/8QANhAAAgIBAgQDBQcCBwAAAAAAAAECEQMEIQUSMUEiYXEGEyNRgTIzUpGhseEUJBU0QkNiwfD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EABsRAQEBAQEAAwAAAAAAAAAAAAABETECEyFB/9oADAMBAAIRAxEAPwDpFEpIpIpI9teWI5R0VQNE0IAGFIB0FBEhQ20gtAKgC0JsoKE0FhZUS0Q0ZBUVGKgMvKBdGcncoDybTuPcYAKrFTKACKfzCmWIoXQKXyGAC5V8g5UMAJ5UHIhgELkFVFAUIBgBYABlogHQBAAAFFCY7NbxzWZNJpF7j7zJLlXzA9OXW6bBJxy5oRkldNhh12m1ElHDmjNvekzlIcKy5XzZsjT71uycnDdRp5LJp8jtdOzMfJ53G/j9ZrtAPDwbWS1uiU8n3kHyy9T3UzbzABQwEAxAAABRYABlQIYAIAaAoRruLRUpYLX2bf7Gyo1nEYtaiM27i40vIx6v014m14oahKSguR31qe6+hWXI5eCMLrq+ZBOeKLUuT1oj3eHKlka3vwvucrqbHg+NY8OWSVOc7f5I2B5eHprTbrZt15nqOuccnrooAEaZAACAAGAAhkopMigNxgFSLcoAhWebiCvRzvtTPTRqeN8Qhp8McUZKU5SXMk+kReE610MmGfM1OCyLbcyYVCeojCM0+aSTp7I12bT4s8lkg3v1aLrHpMEuVvnkqRzyR023HYxhGEVGOyWyQUjUcL43hz4Ix1WRY8y2beyl52beMlKPNFpp9GmdHHMKQUAAKhgBQxABAhk2KyoydQJTHZF0N0rZptR7Q40q02Jyf4p7I9fGNT/TcOySi6lPwR+v8WclGWxvzN6lr16niOs1N8+aSj+GHhX6Gvyp88XfZmWMrsx5UpSVq6N2fSQYs0k37uSTj1sh6j30m5/aX5fQeOC5nfdbhFJ46rrseeTrW3jJjjWNeas9Gn1GfTu8GWcPJPb8jHtQXSPVhvNFx5uUcerh1dKcf+0b04OTs7XQ6j+p0eLN3lHf17nn6mLHoEMRhoAAFRjHYgNIdlJkDRCNL7Uza0+CC6Obb/L+TnMb3aN17UZG9Tgh2jBv6t/waKD+JL0RvzwZo7Ng1bfoRzeP1Ki/iV/xsqIxd76tiw7yivluW1Ur7Cwx5bffoTFZlbaS3bFk8PWSb7pdiXKt02vQwZJbNlqMydxT+Z03s5mc9FPG/wDbnt6P/wAzlcXixRfkdB7L5PFqIeUX+5m8V0IWKxGFOwFYFTUgKwKihpkoYVy/tLNPiMYr/TjV/qaRS+NKvkbPj80+LZX+FJfojURfxn6FGeLcsifmVF/3LXyiiIPxx9RQl/dz+hR6ZUnv0onokTKVzS7Fb9Sol2Yc7+GzLJ+dmDNvF2ZqrwzrFF9jc8Aze64lGN+HLFx+vVGozXg1WfGoeBZJJJLZbmTRZli1eGV1GOSL37bgd9QhtkmQwEAEAAGkCGAAcJxWTfEdRbb+JL9zyQ+9foAEajNHqiYf5qfqAFHphFOGZtJtJU/luY29gAfpeEYcv2JegAEbDjsY/wCILwrfDjfTvR5NNu2n0oAJFd7p99Piv8C/YyAAQAAAf//Z",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Muhammed Nageso",
    designation: "COO",
    company: "Alfa Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "yigezu bash",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "HooBank",
    description: "Simple and beautiful landing page for HooBank",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://hoobanklandingpagesite.netlify.app/",
  },
  {
    name: "RoboFriends",
    description:
      "Web application that enables users to search for robots, using third library api.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://arafatmamia.github.io/Robfriends/",
  },
  {
    name: "Nike Shoe",
    description:
      "A comprehensive mobile  platform that allows users to search for a shoes,and  buy what they like",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ArafatMamia/nike-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
