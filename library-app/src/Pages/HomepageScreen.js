import React from "react";
import Homepage from "../Containers/Homepage/Homepage";
import ScreenHeaderImage from "../Components/ScreenHeaderImage/ScreenHeaderImage";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import BodyJumbotronContainer from "../Containers/BodyJumbotronContainer/BodyJumbotronContainer";

const HomepageScreen = (props) => {
  return (
    <div>
      <LibraryNavbar />
      <ScreenHeaderImage title="Alfa Library" />
      <BodyJumbotronContainer />
    </div>
  );
};

export default HomepageScreen;
