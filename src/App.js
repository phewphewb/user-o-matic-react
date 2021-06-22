import React from "react";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import NotAvailable from "./components/NotAvailable/NotAvailable";
import store from "./core/store";
import { useMediaQuery } from "./hooks";
import Users from "./pages/Users";
import "./styles/styles.scss";
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const DesktopRouter = () => (
  <Switch>
    <Route path="/" component={Users} />
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

function App() {
  const { isMobile } = useMediaQuery();
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Suspense fallback={<p>Loading...</p>}>
          {isMobile && <NotAvailable />}
          <DesktopRouter />
        </Suspense>
      </HashRouter>
    </Provider>
  );
}

export default App;
