import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <Container className="mt-4">
      <RouterProvider router={routes}></RouterProvider>
    </Container>
  );
}

export default App;
