// -- ** -- DEPENDENCIES -- ** --
// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";

// STYLED COMPONENTS
import styled from "styled-components";

// COMPONENT
import Header from "../Header";
import WelcomeMessage from "./WelcomeMessage";
import Map from "./Map";
import HomepageTable from "./HomepageTable";
import EnhancedTable from "./newTable";
import Footer from "../Footer";

// -- ** -- USER ACTIONS / PAGE INTERACTION -- ** --
// IMPORT ACTION CREATORS

// -2-
// Add Procedure

// -- ** -- DATA -- ** --
import colors from "../../styles/colorVariables";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// -- ** -- STYLING -- ** -- //
// -1-
// Material UI --> withStyles()
const styles = theme => ({
  homepage: {
    backgroundColor: colors.homepageBackground
  }
});

// -2-
// Styled Components
const StyledHomepageBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

// -- ** -- RENDERING -- ** -- //
class Homepage extends Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <div className={classes.homepage}>
          <WelcomeMessage />
          <StyledHomepageBody>
            {/* <HomepageTable /> */}
            <EnhancedTable />
            {/* <Map /> */}
          </StyledHomepageBody>
        </div>
        <Footer />
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(
    null,
    {}
  )
)(Homepage);
