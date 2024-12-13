import { ThemeProvider } from "./Theme/ThemeProvider";
import { RouterProvider } from "react-router";
import { ROUTER } from "./Router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={ROUTER} />
    </ThemeProvider>
  );
}

export default App;
