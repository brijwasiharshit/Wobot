import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import ContactUs from './components/Contact';
import Error from './components/Error';
import Body from './components/Body';
import RecipeInfo from './components/RecipeInfo';


const appRouter = createBrowserRouter([
  { path: '/',
  element : <App />,
  children : [
    {
      path : '/',
      element : <Body />
    },
    { path: '/about',
  element : <About />
  },
  {
    path : '/contact',
    element : <ContactUs />
  },
  {
    path : '/recipe/:id',
    element : <RecipeInfo />
  }
],
errorElement : <Error />
}

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
