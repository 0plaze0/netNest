import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/index";
import { Home, About, Contact, Policy, Pagenotfound } from "./pages/index";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
