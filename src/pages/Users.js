import React from "react";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import UserDetails from "../components/User/UserDetails";
import Modal from "../components/UI/modal/Modal";
import Layout from "../components/UI/layouts/Layout";
import UserTable from "../components/User/UserTable";

const UsersPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();
  const modal = location.state && location.state.background;
  return (
    <Layout>
      <Switch location={modal || location}>
        <Route exact path={url} component={UserTable} />
        <Route exact path={url + "user/:id"} component={UserDetails} />
      </Switch>
      {modal && (
        <Route exact path={url + "user/:id"}>
          <Modal
            onClickAway={(e) => {
              e.stopPropagation();
              history.goBack();
            }}>
            <UserDetails />
          </Modal>
        </Route>
      )}
    </Layout>
  );
};
export default UsersPage;
