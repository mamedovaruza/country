import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import CountryShowPage from "./pages/CountryShowPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-[90%] mx-auto">
                <SearchBar />
                <CountryList />
              </main>
            }
          />
          <Route path="/countries" element={<CountryShowPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
