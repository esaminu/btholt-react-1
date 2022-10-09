import { render } from 'react-dom';
import { useState } from "react";

import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
