import "./App.css";
import CalcComponent from "./components/Calculator";
import TodoComponent from "./components/Todo";
import NumberGuesserComponent from "./components/NumberGuesser";
import WeatherWidgetComponent from "./components/WeatherWidget";

function App() {
  return (
    <>
      <TodoComponent></TodoComponent>
      <CalcComponent></CalcComponent>
      <NumberGuesserComponent></NumberGuesserComponent>
    </>
  );
}

export default App;

//12 Beginner Projects:

// To-Do List Application
// A simple app to add, remove, and mark tasks as complete.

// Calculator
// Start with basic arithmetic and gradually add more complex operations.

// Number Guessing Game
// Create a game where the computer generates a random number and the user tries to guess it.

// Weather App
// Use a free weather API to display current weather conditions for a given location.

// Personal Portfolio Website
// Showcase your projects and skills with a simple HTML/CSS website.

// Tic-Tac-Toe Game
// Implement the classic game with a simple UI.

// Password Generator
// Create a tool that generates strong, random passwords based on user-defined criteria.

// Quiz Application
// Develop a simple quiz with multiple-choice questions and score tracking.

// Currency Converter
// Use an API to fetch current exchange rates and convert between currencies.

// Rock Paper Scissors Game
// Implement the classic game against a computer opponent.

// Simple Blog System
// Create a basic blog where users can create, read, update, and delete posts.

// Stopwatch/Timer
// Basic start/stop reset functions

//one component per project, or at least just one

//how to determine if something needs to be state
// does it change over time? if no, then its not state
// can it be computed from other state or props? if yes, prob not state
// is it used to render or determine what to render? if yes, prob state
// does component need to "remember" this value between renders? if yes, it is state
// if the user interacts with it, like any kind of input, its prob state

//good state ex:
//form input values
//current item in a list or a tab component (an updating selected item)
//whether a modal is opened or closed
//data fetched from an api
// current page in a pagination component

//things that should not be state:
//props passed from a parent component
//computed values based on state/props
//react elements
//constants that dont change
