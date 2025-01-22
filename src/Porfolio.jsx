import PropTypes from "prop-types";
import PortfolioVictor from "./assets/portfolioVictor.png";
import ImgAntonio from "./assets/drAntonio.png";
import AccordionComponent from "./assets/accordion-component.png";
import GuessMyNumber from "./assets/guess-my-number.png";
import Glass from "./assets/glass.png";
import TipCalc from "./assets/tip-calculator.png";
import EatNSplit from "./assets/eatnsplit.png";
import FarAway from "./assets/faraway.png";
import FlashCards from "./assets/flashcards.png";
import EmailSubscribe from "./assets/email-subscribe.png";
import PricingGrid from "./assets/pricing.png";
import ProductModal from "./assets/product-modal.png";
import Galery from "./assets/image-grid.png";
//read more nos textos do portfolio(text expander)
const initialPortfolio = [
  {
    id: 1,
    title: "Portfolio Website",
    image: PortfolioVictor,
    tools: "React & Tailwind",
    description:
      "I created this portfolio website using React and Tailwind CSS, and it was an amazing experience! React won me over with its flexibility and the intuitive way of building dynamic interfaces. Tailwind CSS stole my heart with its simplicity and complete control over design, without needing to write tons of CSS. These tools have transformed the way I develop and made me fall even more in love with the world of web development!",
    github: "https://github.com/SouzaMVictor/portfolio-victor",
    link: "https://devvictor.vercel.app/",
  },
  {
    id: 2,
    title: "Dr. Antônio Matias",
    image: ImgAntonio,
    tools: "HTML, CSS & Javascript ",
    description:
      "My first comissioned work as web developer: a landing page for a dentist in my hometown. Might see, simple, but the experience I gained from working on it was incredible and transformative, expanding my perspective on development and helping me grow both technically and personally. ",
    github: "https://github.com/SouzaMVictor/dr-antonio-matias",
    link: "https://dr-antonio-matias.vercel.app/",
  },
  {
    id: 3,
    title: "Eat 'N Split",
    image: EatNSplit,
    tools: "React",
    description:
      "I developed this website in React to make splitting restaurant bills simple and practical. With it, you can calculate how much each person should pay. It's the perfect solution to avoid confusion when settling the bill and to ensure everyone contributes fairly. This project allowed me to explore React features, such as states and dynamic calculations, while creating something useful for everyday situations!",
    github: "https://github.com/SouzaMVictor/eat-n-split",
    link: "https://eat-n-split-seven-bay.vercel.app/",
  },
  {
    id: 4,
    title: "Far Away: Travel List",
    image: FarAway,
    tools: "React",
    description:
      "I developed a website in React that serves as a travel checklist. It allows users to add, edit, and check off items, ensuring nothing essential is forgotten before a trip. It's a simple yet incredibly useful tool for organizing travels efficiently. While developing it, I enhanced my skills in state management with React and focused on creating an intuitive and functional interface.",
    github: "https://github.com/SouzaMVictor/far-away-travel-list",
    link: "#https://far-away-travel-list-psi.vercel.app/",
  },
  {
    id: 5,
    title: "Accordion Component",
    image: AccordionComponent,
    tools: "React",
    description:
      "Practice component for a React course I was taking. With this, I was able to understand even better about state management. Also, it's easy to reuse in many other situations.",
    github: "https://github.com/SouzaMVictor/accordion-component",
    link: "https://accordion-component-alpha.vercel.app/",
  },
  {
    id: 6,
    title: "Flash Cards in React",
    image: FlashCards,
    tools: "React",
    description: "Practice game for a React course about React and it's tools.",
    github: "https://github.com/SouzaMVictor/flash-cards",
    link: "https://d5dnlg.csb.app/",
  },
  {
    id: 7,
    title: "Tip Calculator",
    image: TipCalc,
    tools: "React",
    description:
      "Simple React web app for splitting the bill and calculate how much tip the person should add based on the quality of the offered service",
    github: "https://github.com/SouzaMVictor/tip-calculator",
    link: "https://ydqkc8.csb.app/",
  },
  {
    id: 8,
    title: "Guess My Number",
    image: GuessMyNumber,
    tools: "HTML, CSS & Javascript",
    description:
      "Game where you have to guess a random number behind the question mark. Included in it's functionalities, a highscore will be saved, getting the number wrong decreases the ponctuation and so on. Pretty fun! Perfect for playing with friends.",
    github: "https://github.com/SouzaMVictor/GuessMyNumberApp",
    link: "https://guess-my-number-app.vercel.app/",
  },
  {
    id: 9,
    title: "Glassmorphism",
    image: Glass,
    tools: "HTML & CSS",
    description:
      "Hoping on a viral trend on the internet, I created this website to test my skills with HTML and CSS. It has no real usability but it's actually really pretty. The translucent box gives a fine touch to this modal!",
    github: "https://github.com/SouzaMVictor/Glassmorphism",
    link: "https://5mxxw5.csb.app/",
  },
  {
    id: 10,
    title: "Email Subscribe Card",
    image: EmailSubscribe,
    tools: "HTML & Tailwind",
    description:
      "Pratice assingment for this Tailwind Course I was taking. My very first project using Tailwind standalone! Not writing tons of CSS was really a awesome experience.",
    github: "https://github.com/SouzaMVictor/email-subscribe",
    link: "https://7d5259.csb.app/",
  },
  {
    id: 11,
    title: "Princing Grids",
    image: PricingGrid,
    tools: "HTML & Tailwind",
    description:
      "Practice assignmente for this Tailwind course I was taking. Tasks like this with tailwind makes things really easy!",
    github: "https://github.com/SouzaMVictor/pricing-cards",
    link: "#",
  },
  {
    id: 12,
    title: "Product Modal",
    image: ProductModal,
    tools: "HTML & Tailwind",
    description:
      "Practice assignment for this Tailwind course I was taking. Tasks like this with tailwind makes things really easy!",
    github: "https://github.com/SouzaMVictor/product-modal",
    link: "https://lzjz93.csb.app/",
  },
  {
    id: 13,
    title: "Image Galery",
    image: Galery,
    tools: "HTML & Tailwind",
    description:
      "Practice assignment for this Tailwind course I was taking. Tasks like this with tailwind makes things really easy!",
    github: "https://github.com/SouzaMVictor/image-gallery",
    link: "https://cd4ncp.csb.app/",
  },
  // {
  //   id: 14,
  //   title: "Login Modal",
  //   image: ImgVictor,
  //   tools: "HTML & Tailwind",
  //   description:
  //     "Practice assignment for this Tailwind course I was taking. Tasks like this with tailwind makes things really easy!",
  //   github: "https://github.com/SouzaMVictor/portfolio-victor",
  //   link: "#",
  // },
];
export function Porfolio() {
  return (
    <div className="pb-1">
      <div className="flex justify-center pt-3">
        <h2 className="text-amber-50 text-2xl font-semibold my-6 inline-block">
          Portfolio
          <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
        </h2>
      </div>
      <ul className="text-amber-50 mx-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-1">
        {initialPortfolio.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

function Product({ product }) {
  return (
    <li>
      <div className="bg-zinc-900 border-2 border-zinc-800 rounded p-4 hover:md:bg-zinc-800 duration-300 cursor-pointer hover:md:scale-105 text-amber-50">
        <img src={product.image} alt={product.title} className="rounded" />
        <span className="flex justify-center font-medium my-3">
          {product.title}
        </span>
        <p className="text-justify font-light m-2 text-zinc-300">
          {product.description}
        </p>
        <h3 className="text-amber-200">{product.tools}</h3>
        <div className="flex justify-end">
          <a className="mr-3" href={product.github} target="_blank">
            {/* github */}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href={product.link} target="_blank">
            {/* link */}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
