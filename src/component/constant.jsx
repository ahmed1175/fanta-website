export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];
import P1 from "../assets/fanta1.png";
import P2 from "../assets/fanta2.png";
import P3 from "../assets/fanta3.png";
export const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    image: P1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: P3,
    delay: 1.1,
  },
];
export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
import Blog1 from "../assets/blogs/1.jpg";
import Blog2 from "../assets/blogs/2.jpg";
import Blog3 from "../assets/blogs/3.jpg";
import Blog4 from "../assets/blogs/4.jpg";
export const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blog4,
  },
];

export const faqData = [
  {
    question: "What is Fanta?",
    answer:
      "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
  },
  {
    question: "What flavors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors including orange, grape, pineapple, and more!",
  },
  {
    question: "Is Fanta gluten-free?",
    answer:
      "Yes, Fanta is gluten-free, making it suitable for those with gluten intolerance.",
  },
  {
    question: "How many calories are in a can of Fanta?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
];