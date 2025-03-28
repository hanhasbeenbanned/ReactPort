import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'
import App from './App.tsx'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Portfolio from './Pages/Portfolio.tsx'
import Resume from './Pages/Resume.tsx'

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <RouterProvider router={router}/>
    );
} else {
    console.error("Root element not found");
}