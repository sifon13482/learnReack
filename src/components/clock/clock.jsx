// import React { useState, useEffect } from 'react';

import { useEffect, useState } from "react";

export const Clock = () => { 
  // Инициализация текущего времени с текущей датой и временем
  const [time, setTime] = useState(new Date());

  // Обновление времени каждую секунду
  useEffect(() => {
    const interval = setInterval(() => { setTime(new Date()) }, 1000);
        // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  },); []

  // Извлечение часов, минут и секунд из текущего времени
  const hours = time.getHours(); 
  const minutes = time.getMinutes(); 
  const seconds = time.getSeconds();

  // Форматирование времени как строки
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div>
      {/* Отображение строки времени */}
      <h1>{timeString}</h1>
    </div>
  )
}