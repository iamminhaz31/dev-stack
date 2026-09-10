# DevStack

DevStack is a responsive React-based web-app where someone can learn about various development technologies and create their own technology stack.

## Live Site

Coming soon...

## GitHub Repository

Coming soon...

## Technologies Used

- React.js
- Tailwind CSS
- Vite
- JavaScript
- JSON
- React Toastify
- React Icons

## Features

Users have the opportunity to learn about new frontend, backend, database, language, styling and DevOps technologies.

2. Technology can be added to the user's stack and individual technology can be removed, as well as the entire stack being cleared.

3. Fully responsive for mobile, tablet and desktop.

---

# React Questions & Answers

## 1. What is JSX, and why it is used in React?

JSX is a syntax used to write HTML-like code in JavaScript. Makes it easier to write and understand React components.

## 2. What's the difference between props and state?

Data is passed from parent component to child component through props. State provides the ability to store and manipulate data within a component that's subject to change over time.

## 3. Explain the purpose of the useState hook and where you used it in this project?

React hook useState contains data and updates data in a React component.

I used useState to store the technologies, selected stack items, loading state and mobile menu state for this project.

## 4. Why did you use the useEffect hook to load the JSON data? And what does it do?

React uses the `useEffect` hook for some side effect in a component.

This project's approach is to use `useEffect` to make the technology data request when the Technologies component is rendered.

## 5. Why must each item in a list have a unique key prop in a .map()?

The `key` prop is used to distinguish between items in a list in React. It can efficiently update the correct item if the list is changing while using React.

## 6. What is conditional rendering? Demonstrate one location in which you used it.

Conditional rendering: Rendering different UI based on a condition.

For instance, in Your Stack, I display a blank message if there's no technology selected. Selected technologies are displayed where technologies have been chosen.

## 7. How to communicate data from parent component to child component and how to communicate data from child component to parent component?

Parent component passes data to child component through props.

The child component can call a function passed to it by props from the parent.

For instance the Technologies component passes the technology, isAdded, and handleAddToStack properties to TechnologyCard component.