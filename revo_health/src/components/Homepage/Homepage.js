// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENT
import Map from "./Map";
import Header from "../Header";
import Footer from "../Footer";

import HomepageTable from './HomepageTable'

// Colors
import colors from '../../styles/colorVariables'

// MATERIAL UI
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/styles'

// Styled Compoennts
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const StyledHomepageBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Material UI Styling
const styles = theme => ({
  homepage: {
    backgroundColor: colors.homepageBackground
  }
})
class Homepage extends Component {
  render() {  
    const { classes } = this.props

    return (
      <>
        <Header />
        <div 
          // className="homepage-container"
          className={classes.homepage}
        >
          <h1>Hello from Homepage Component</h1>
          <StyledHomepageBody>

            <HomepageTable />
            <Map />

          </StyledHomepageBody>
        </div>
        <Footer />
      </>
    );
  }
}

// export default connect(
//   null,
//   {}
// )(Homepage);

export default compose(
  withStyles(styles),
  connect(null, {})
)(Homepage)