// REACT
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserComponent from "./UserComponent/UserComponent";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// Colors
import colors from "../styles/colorVariables";

// MATERIAL UI
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import compose from "recompose/compose";
import { withStyles } from "@material-ui/styles";

import MenuIcon from "@material-ui/icons/Menu";

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// Styled Components
const HeaderContainer = styled.div``;

const StyledAppBar = styled(AppBar)`
  padding: 0px;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-grow: 1;

  justify-content: center;
`;

// Material UI Styling
const styles = theme => ({
  MaterialUI_withStyles_header: {
    backgroundColor: colors.header
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
  }

  toggle_Menu = e => {
    e.preventDefault();

    this.setState(prevState => ({
      ...prevState,
      showMenu: !prevState.showMenu
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <HeaderContainer>
        <StyledAppBar
          position="static"
          // className="AppBar_materialUI MaterialUI_withStyles_header"
          className={classes.MaterialUI_withStyles_header}
        >
          <StyledToolbar className="ToolBar_materialUI">
            {this.state.showMenu ? (
              <div>
                <Button onClick={this.toggle_Menu} variant="outlined">
                  Close Menu
                </Button>

                <Button variant="outlined" component={Link} to="/">
                  Homepage
                </Button>

                {localStorage.getItem("token") && (
                  <div>
                    <Button variant="outlined" component={Link} to="/user">
                      User Profile
                    </Button>
                    <Button variant="outlined"> Add Procedure </Button>
                  </div>
                )}
                {!localStorage.getItem("token") && (
                  <Button component={Link} to="/login" variant="outlined">
                    Login
                  </Button>
                )}
              </div>
            ) : (
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.toggle_Menu} />
              </IconButton>
            )}

            {/* <HeaderTitle>USER COMPONENT TITLE</HeaderTitle> */}
          </StyledToolbar>
        </StyledAppBar>
      </HeaderContainer>
    );
  }
}

// Map State To Props

// Connect
// export default connect(
//   null,
//   {}
// )(Header)

export default compose(
  withStyles(styles),
  connect(
    null,
    {}
  )
)(Header);
