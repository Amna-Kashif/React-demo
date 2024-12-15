import React from 'react';
import ReactDom from 'react-dom/client';



let rootDiv = document.getElementById('root');

ReactDom.createRoot(rootDiv).render(
  <div style={{ textAlign: 'center', fontSize: 20,fontFamily: 'sans-serif' ,  }}>


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <img width={200} src="/public/vite.svg" alt="Vite logo" />
  <img width={200} src="src/assets/react.svg" alt="React logo" />
</div>

    <h1>Hello, Welcome to My React App!</h1>
    <p>Exploring the world of React, one component at a time.Every great app starts with a single line of code.
      Let's create something amazing together!</p>

    <p>
      Welcome to my React app! This application was built using the power of React, a JavaScript library that
       enables developers to create dynamic and interactive user interfaces with ease. With its component-based
        architecture, React allows for a more modular and reusable code structure, making it perfect for building 
        scalable web applications. In this app, you'll find a clean and efficient user experience, thanks to React's 
        ability to manage state and render updates in real-time. Whether you're just starting with React or you're an 
        experienced developer, this app demonstrates how React's features like hooks, props, and context can come together 
        to build a fully functional, modern web application. I hope you enjoy exploring the app and learning more about how 
        React can help streamline your development process.
    </p>

    <p>
  This app leverages the full potential of React to offer a highly interactive and engaging user experience. It is designed 
  to be modular, allowing for easy updates and future enhancements. By utilizing React's powerful state management tools, 
  such as useState and useContext, the app efficiently handles user interactions, ensuring that the interface remains fluid 
  and responsive. The app's architecture is designed to be scalable, meaning it can grow with the needs of the user, whether 
  that involves adding more features, managing larger datasets, or improving performance. Additionally, React’s ecosystem of 
  libraries, such as React Router for navigation and Axios for data fetching, helps in creating a seamless experience for 
  users while keeping the codebase clean and organized. This app also embraces modern JavaScript features like async/await, 
  ES6+ syntax, and arrow functions, making it not only efficient but also easy to maintain. It’s a great starting point for 
  anyone looking to learn React, as it demonstrates key concepts while still being flexible enough for more advanced development. Whether you're new to React or looking for an example of how to build a real-world application, this app serves as both a practical guide and a foundation for further exploration.
</p>


  </div>
)

