import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, SignUp } from "./pages";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.notFound} element={<NotFound/>}/>
        <Route path={routes.login} element={<Login/>}/>
        <Route path={routes.signup} element={<SignUp/>}/>
        <Route path={routes.home} element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
