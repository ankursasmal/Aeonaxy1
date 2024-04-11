import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GettingStarted from './components/GettingStarted.jsx';
import ExampleRoute from './components/ExampleRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
     { path: "/",
      element:<GettingStarted/>,
    },
    { path: "/:{rout}",
      element:<GettingStarted/>,
    },
     
    { path: "/My Private channel/getting Started",
    element:<GettingStarted/>,
  },
  { path: "/example",
  element:<ExampleRoute/>,
},
 
]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
