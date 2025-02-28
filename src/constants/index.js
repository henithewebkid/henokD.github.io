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
    title: "Responsive Design",
    icon: web,
  },
  {
    title: "SEO (Search Engine Optimization)",
    icon: mobile,
  },
  {
    title: "Web Performance Optimization (WPO)",
    icon: backend,
  },
  {
    title: "API Integration ",
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
      "rovided expert technical support to users of WordPress themes and plugins, ensuring seamless functionality and resolving issues promptly.",
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
      " Customized and optimized the different theme to enhance website performance, resulting in a substantial 20% surge in traffic.",
      " Developed and integrated custom PHP functionalities within the different theme to improve website security, ensuring robust protection against potential cyber threats.",
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
    company: "kd mattress",
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
      "Royale School Of Photography is your gateway to mastering photography skills.  platform offers diverse courses, workshops, and resources for all levels. Explore detailed course descriptions, instructor profiles, and student testimonials. unleash your creativity and excel in photography.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.rsop.co.uk/",
  },
  {
    name: "financity Wordpress theme",
    description:
      "a versatile WordPress theme designed for financial businesses, accounting firms, banks, investment companies, and financial advisory services. It's a great choice for building professional websites that require a sleek and modern design with the necessary tools for delivering financial content and services.",
    tags: [
      {
        name: "wordpress theme",
        color: "blue-text-gradient",
      },
      {
        name: "theme development",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://themeforest.net/item/financity-business-financial-wordpress-theme/20757434",
  },
  {
    name: "Kodiprofessional",
    description:
      "Explore Dubai's premier WooCommerce website, offering a curated selection of luxury products and services, blending traditional charm with modern convenience.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "eccommerce",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kodiprefessional,
    source_code_link: "https://kodiprofessional.ae/",
  },
  {
    name: "hemophilia",
    description:
      "Discover the comprehensive Hemophilia resource website, providing essential information, support, and community for those affected by the condition",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hemophilia,
    source_code_link: "https://hemophilia.et/",
  },
  {
    name: "Keste Damena Shop",
    description:
      "Keste Damena – Your One-Stop E-Commerce Destination for Quality & Comfort",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.kestedamena.com/",
  },
  {
    name: "Loving to Learn- california",
    description:
      "A Community Resource/Referral Agency Helping You Get Answers to Problems in Life!",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: kodiprefessional,
    source_code_link: "https://lovingtolearn.biz/",
  },
];


export { services, technologies, experiences, testimonials, projects }; 
