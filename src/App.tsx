import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Header";

function App() {
  return (
    <>
      <header className="h-17 border-b-2 border-blue-400 fixed top-0 left-0 w-full bg-amber-100 z-10">
        <Navbar />
      </header>

      <div
        className="flex flex-col items-center min-h-[calc(100vh-158px)]"
        style={{ marginTop: "78px" }}
      >
        <main className="max-w-screen-lg px-1 py-2">
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <footer className="h-20 border-t-2 border-blue-400 bg-amber-100"></footer>
    </>
  );
}

export default App;
