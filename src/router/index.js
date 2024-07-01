import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Game from "../components/puzzle/Game";
import Game9 from "../components/puzzle/Game9";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Page Not Found</h1>,
      children: [
        {
            index: true,
            element: <Game size={16}/>
        },
        
      
        {
          path: "puzlle16",
          element: <Game size={16}/>
        },
        {
          path: "puzlle9",
          element: <Game9 size={9}/>
        },

      ]
    }
  
  ]);