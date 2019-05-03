// -- ** -- DEPENDENCIES -- ** --
// REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

// STYLED COMPONENTS
import styled from "styled-components";

// COMPONENT

// -- ** -- USER ACTIONS / PAGE INTERACTION -- ** --
// IMPORT ACTION CREATORS
// -1-
// Add Procedure

// -- ** -- DATA -- ** --
import colors from "../../styles/colorVariables";
import { FormHelperText } from "@material-ui/core";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// -- ** -- STYLING -- ** -- //
// -1-
// Material UI --> withStyles()
const styles = theme => ({
  homepageTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    margin: "0px",
    marginTop: "20px",
    marginBottom: "20px"
  },

  button: {
    marginRight: "20px"
  }
});

// -2-
// Styled Components

const MediaQueries_WelcomeMessage = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const MediaQueried_callToAction = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;

  .actionText {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .actionButtons {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .actionText {
      margin-bottom: 15px;
    }
    .actionButtons {
      margin-bottom: 15px;
    }
  }
`;

// -- ** -- RENDERING -- ** -- //
class WelcomeMessage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MediaQueries_WelcomeMessage>
        <h1 className={classes.homepageTitle}>Welcome to Revo Health!</h1>

        <MediaQueried_callToAction>
          <div className="actionText">
            Browse Our Community Contributions...Maybe Contribute Yourself :)
          </div>
          <div className="actionButtons">
            <Button variant="outlined" component={Link} to="/register">
              Join the Community
            </Button>
            <Button variant="outlined" component={Link} to="/addProcedure">
              Add A Procedure
            </Button>
          </div>
        </MediaQueried_callToAction>
      </MediaQueries_WelcomeMessage>
    );
  }
}

// -- ** -- EXPORTING -- ** -- //
export default compose(
  withStyles(styles),
  connect(
    null,
    {}
  )
)(WelcomeMessage);
