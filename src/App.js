import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, Notification, SignUp, Denonciation, DenonciationProcess, Education, Profil } from "./pages";
import { routes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";

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
          <Route path={routes.notification} element={<Notification />} />
          <Route path={routes.profil} element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
