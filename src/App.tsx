import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex justify-center align-top">
      <header className="max-w-screen-lg"></header>

      <main className="max-w-screen-lg px-1 py-2">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="max-w-screen-lg"></footer>
    </div>
  );
}

export default App;
