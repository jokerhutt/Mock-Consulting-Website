import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Swipe.css";

const cardData = [
  { id: 1, url: "/Ex4.jpg" },
  { id: 2, url: "/Ex3.jpg" },
  { id: 3, url: "/Ex2.jpg" },
  { id: 4, url: "/Ex1.jpg" },
];

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="swipe-cards-container">
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((card) => card.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className={`card ${isFront ? 'front-card' : ''}`}
      style={{
        x,
        opacity,
        rotate,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: -500, right: 500 }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;