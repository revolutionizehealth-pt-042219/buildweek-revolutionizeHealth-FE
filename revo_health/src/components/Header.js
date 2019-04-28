// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// MATERIAL UI
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

// Styled Components
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

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
class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <StyledAppBar className="AppBar_materialUI" position="static">
          <StyledToolbar className="ToolBar_materialUI">
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <HeaderTitle>USER COMPONENT TITLE</HeaderTitle>
          </StyledToolbar>
        </StyledAppBar>
      </HeaderContainer>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(Header);
