import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import RuleList from "./RuleList";
import RuleForm from "./RuleForm";
import NotFound from "./NotFound";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <Switch>
            <Route exact path="/" component={RuleList} />
            <Route path="/new" component={RuleForm} />
            <Route path="/edit/:id" component={RuleForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Layout;