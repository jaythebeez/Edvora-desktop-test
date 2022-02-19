import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path='*' element={<LandingPage />}/>
          </Routes>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
