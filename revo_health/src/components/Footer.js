// REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import { AppBar, Toolbar } from "@material-ui/core";

// IMPORT ACTION CREATORS

// Colors
import colors from "../styles/colorVariables";

// MATERIAL UI
import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const FooterContainer = styled.div`
  .footerContent_1 {
    width: 33%;

    // .UI_links {
    //   display: flex;
    //   margin-bottom: 20px;
    // }

    // div {
    //   margin-right: 20px;
    // }
  }
`;

const StyledAppBar = styled(AppBar)`
  padding: 0px;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: column;

  display: flex;
  justify-content: space-around;
`;

const FooterTitle = styled.div``;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  }

  .legalStatement_terms_and_conditions {
    display: flex; 

    margin-bottom: 20px;
  }
`;

// Material UI Styling
const styles = theme => ({
  MaterialUI_withStyles_footer: {
    backgroundColor: colors.footer
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <FooterContainer className="footerContainer">
        <StyledAppBar
          position="static"
          // className="AppBar_materialUI"
          className={classes.MaterialUI_withStyles_footer}
        >
          <StyledToolbar className="ToolBar_materialUI">
            <FooterTitle>FOOTER COMPONENT TITLE</FooterTitle>
            <FooterContentContainer>
              <FooterContent className="footerContent_1">
                <div className="UI_links">
                  <div>UI: Design Link 1</div>
                  <div>UI: Design Link 1</div>
                </div>

                <div className="legalStatement_terms_and_conditions">
                  Any use of this site constitutes your agreement to the Terms
                  and Conditions and Privacy Policy linked below.
                </div>
              </FooterContent>
              <FooterContent className="footerContent_2">
                Footer Content Middle
              </FooterContent>
              <FooterContent className="footerContent_3">
                Footer Content Right
              </FooterContent>
            </FooterContentContainer>
          </StyledToolbar>
        </StyledAppBar>
      </FooterContainer>
    );
  }
}

// Map State To Props

// Connect
// export default connect(
//   null,
//   {}
// )(Footer);

export default compose(
  withStyles(styles),
  connect(
    null,
    {}
  )
)(Footer);
