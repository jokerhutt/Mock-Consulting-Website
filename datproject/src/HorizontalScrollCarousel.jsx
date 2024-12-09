import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Horizontal.css";

const Example = () => {
  return (
    <div className="example-container">
      <div className="scroll-prompt">
        <h2>Nasze Projekty</h2>
        <hr/>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-container">
        <motion.div style={{ x }} className="carousel-motion">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card-background"
      ></div>
      <div className="card-content">
        <p className="card-title">{card.title}</p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/Ex1.jpg",
    title: "MCHIMP",
    id: 1,
  },
  {
    url: "/Ex2.jpg",
    title: "GITHUB",
    id: 2,
  },
  {
    url: "/Ex3.jpg",
    title: "DATA ENG.",
    id: 3,
  },
  {
    url: "/Ex4.jpg",
    title: "APPLE",
    id: 4,
  },
];