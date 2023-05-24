import React, { Fragment } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Books from "./components/Books";
import BookCart from "./components/BookCart";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <Books />
              </Fragment>
            )}
          />
          <Route path="/book-cart" component={BookCart} />
          <Route path="/book/details/:id" component={BookDetails} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
