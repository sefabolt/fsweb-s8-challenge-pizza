import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order setOrderData={setOrderData} />
      </Route>
      <Route path="/success">
        <Success orderData={orderData} />
      </Route>
    </Switch>
  );
}

export default App;