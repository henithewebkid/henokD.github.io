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
  carrent2,
  kodiprefessional,
  hemophilia,
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
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Back-End Development",
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
    title: "WordPress and theme Developer (UK)",
    company_name: "RSOP ",
    icon: tesla,
    iconBg: "#383E56",
    date: "feb 2022- oct 2023",
    points: [
      "Developed and implemented a custom WordPress plugin, expanding website functionality and enhancing user experience.",
      "Executed comprehensive optimization strategies to improve the website's SEO performance, resulting in increased visibility and organic traffic growth.",
      "Provided expert technical support to users of WordPress themes and plugins, ensuring seamless functionality and resolving issues promptly.",
      "Implemented robust security measures to safeguard the WordPress website, protecting it against potential cyber threats and vulnerabilities.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Chainlinx Technologies",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - current",
    points: [
      "Customized and optimized the different theme to enhance website performance, resulting in a substantial 20% surge in traffic.",
      "Developed and integrated custom PHP functionalities within the different theme to improve website security, ensuring robust protection against potential cyber threats.",
      "Implemented SEO best practices within the different theme, leading to a significant 10% increase in organic traffic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Henok proved me wrong.",
    name: "arefat",
    designation: "web Admin",
    company: "Rainbow Foam and plastic plc",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAADAAMBAAAAAAAAAAAAAAAAAQIDBQYE/8QANhAAAgIBAgQDBQcCBwAAAAAAAAECEQMEIQUSMUEiYXEGEyNRgTIzUpGhseEUJBU0QkNiwfD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EABsRAQEBAQEAAwAAAAAAAAAAAAABETECEyFB/9oADAMBAAIRAxEAPwDpFEpIpIpI9teWI5R0VQNE0IAGFIB0FBEhQ20gtAKgC0JsoKE0FhZUS0Q0ZBUVGKgMvKBdGcncoDybTuPcYAKrFTKACKfzCmWIoXQKXyGAC5V8g5UMAJ5UHIhgELkFVFAUIBgBYABlogHQBAAAFFCY7NbxzWZNJpF7j7zJLlXzA9OXW6bBJxy5oRkldNhh12m1ElHDmjNvekzlIcKy5XzZsjT71uycnDdRp5LJp8jtdOzMfJ53G/j9ZrtAPDwbWS1uiU8n3kHyy9T3UzbzABQwEAxAAABRYABlQIYAIAaAoRruLRUpYLX2bf7Gyo1nEYtaiM27i40vIx6v014m14oahKSguR31qe6+hWXI5eCMLrq+ZBOeKLUuT1oj3eHKlka3vwvucrqbHg+NY8OWSVOc7f5I2B5eHprTbrZt15nqOuccnrooAEaZAACAAGAAhkopMigNxgFSLcoAhWebiCvRzvtTPTRqeN8Qhp8McUZKU5SXMk+kReE610MmGfM1OCyLbcyYVCeojCM0+aSTp7I12bT4s8lkg3v1aLrHpMEuVvnkqRzyR023HYxhGEVGOyWyQUjUcL43hz4Ix1WRY8y2beyl52beMlKPNFpp9GmdHHMKQUAAKhgBQxABAhk2KyoydQJTHZF0N0rZptR7Q40q02Jyf4p7I9fGNT/TcOySi6lPwR+v8WclGWxvzN6lr16niOs1N8+aSj+GHhX6Gvyp88XfZmWMrsx5UpSVq6N2fSQYs0k37uSTj1sh6j30m5/aX5fQeOC5nfdbhFJ46rrseeTrW3jJjjWNeas9Gn1GfTu8GWcPJPb8jHtQXSPVhvNFx5uUcerh1dKcf+0b04OTs7XQ6j+p0eLN3lHf17nn6mLHoEMRhoAAFRjHYgNIdlJkDRCNL7Uza0+CC6Obb/L+TnMb3aN17UZG9Tgh2jBv6t/waKD+JL0RvzwZo7Ng1bfoRzeP1Ki/iV/xsqIxd76tiw7yivluW1Ur7Cwx5bffoTFZlbaS3bFk8PWSb7pdiXKt02vQwZJbNlqMydxT+Z03s5mc9FPG/wDbnt6P/wAzlcXixRfkdB7L5PFqIeUX+5m8V0IWKxGFOwFYFTUgKwKihpkoYVy/tLNPiMYr/TjV/qaRS+NKvkbPj80+LZX+FJfojURfxn6FGeLcsifmVF/3LXyiiIPxx9RQl/dz+hR6ZUnv0onokTKVzS7Fb9Sol2Yc7+GzLJ+dmDNvF2ZqrwzrFF9jc8Aze64lGN+HLFx+vVGozXg1WfGoeBZJJJLZbmTRZli1eGV1GOSL37bgd9QhtkmQwEAEAAGkCGAAcJxWTfEdRbb+JL9zyQ+9foAEajNHqiYf5qfqAFHphFOGZtJtJU/luY29gAfpeEYcv2JegAEbDjsY/wCILwrfDjfTvR5NNu2n0oAJFd7p99Piv8C/YyAAQAAAf//Z",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Henok does.",
    name: "Muhammed Nageso",
    designation: "COO",
    company: "Alfa Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Henok optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "yigezu bash",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Royale School Of Photography",
    description:
      "Royale School Of Photography is your gateway to mastering photography skills. platform offers diverse courses, workshops, and tools to enhance creativity and techniques.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: kodiprefessional,
    source_code_link: "https://www.royalepreprod.com/",
  },
  {
    name: "Financity Wordpress Theme",
    description:
      "Financity is a professional WordPress theme built for financial advisors and consultants. With a clean and modern design, it's perfect for showcasing your services.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: kodiprefessional,
    source_code_link: "https://financity.com",
  },
];
