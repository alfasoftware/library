import React from "react";
import Homepage from "../Containers/Homepage/Homepage";
import ScreenHeaderImage from "../Components/ScreenHeaderImage/ScreenHeaderImage";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import BodyJumbotronContainer from "../Containers/BodyJumbotronContainer/BodyJumbotronContainer";
import Background from "../assets/librarySecondHeaderBlurred.jpg";

const HomepageScreen = (props) => {
  return (
    <div>
      <LibraryNavbar />
      <ScreenHeaderImage
        title="Alfa Library"
        textColor="white"
        height="250px"
        background={Background}
      />
      <BodyJumbotronContainer />
    </div>
  );
};

export default HomepageScreen;
