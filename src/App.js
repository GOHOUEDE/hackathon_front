import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, SignUp } from "./pages";
import { routes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import Education from "./pages/frontOffice/Education";
import DenonciationProcess from "./pages/frontOffice/DenonciationProcess";
import Denonciation from "./pages/frontOffice/Denonciation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.notFound} element={<NotFound />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.education} element={<Education />} />
          <Route path={routes.process} element={<DenonciationProcess />} />
          <Route path={routes.denounce} element={<Denonciation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
