import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomepageScreen from "./Pages/HomepageScreen";
import CatalogueScreen from "./Pages/CatalogueScreen";
import SearchResultsScreen from "./Pages/SearchResultsScreen";
import TestScreen from "./Pages/TestScreen";
import MyLibraryScreen from "./Pages/MyLibraryScreen";
import BookInfoScreen from "./Pages/BookInfoScreen";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/searchResults" component={SearchResultsScreen} />
          <Route path="/catalogue" component={CatalogueScreen} />
          <Route path="/myLibrary" component={MyLibraryScreen} />
          <Route path="/books" component={BookInfoScreen} />
          <Route path="/test" component={TestScreen} />
          <Route path="/" exact component={HomepageScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
