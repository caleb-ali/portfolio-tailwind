import puzzle from "../assets/puzzle.jpg";
import metabnb from "../assets/metabnb1.jpg";
import weather from "../assets/weather.jpg";

export const projectcards  = [

  {
      id: 1,
      link:"https://caleb-quiz-app.vercel.app/",
      title: "Quiz App",
      description: "A simple quiz app that displays result",
      technology: "HTML + CSS + Javascript",
      image: puzzle
  },

  {
      id: 2,
      title: "Metabnb",
      link:"https://metabnb-iota.vercel.app/",
      description: "Metaverse rental site",
      technology: "React + Tailwind CSS",
      image:metabnb
  },

  {
      id: 3,
      title: "Weather App",
      link:"https://my-weather-app-plum.vercel.app",
      description: "Weather app that displays weather in various cities",
      technology: "React + Tailwind CSS + openweathermap API",
      image:weather
  },
  
];