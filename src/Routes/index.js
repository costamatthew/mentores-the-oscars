import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};
