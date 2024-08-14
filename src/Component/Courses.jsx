import React, { useState, useEffect } from 'react';

const Courses = () => {
  const texts = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Web Development",
    "Cyber Security",
    "Data Analysis",
    "UI / UX Design",
    "Graphics Design"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <h1>{texts[currentIndex]}</h1>
    </div>
  );
};

export default Courses;
