import React from 'react';
import { useSpring, animated } from 'react-spring';
import './CardBlock.css'; // Подключите стили для карточек

const CardBlock = () => {
    const cards = [1, 2, 3, 4, 5]; // Массив для создания нескольких карточек
  
    // Создаем анимации для каждой карточки
    const springs = useSpring(
      cards.map((card, index) => ({
        transform: 'translateY(0)',
        opacity: 1,
        from: { transform: 'translateY(100%)', opacity: 0 },
        config: { duration: 300, delay: index * 100 },
      }))
    );
  
    return (
      <div className="card-block">

      </div>
    );
  };

export default CardBlock;