// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENT
import FilterBar from "./FilterBar";
import ProcedureList from "./ProcedureList";
import Map from "./Map";
import Header from "../Header";
import Footer from "../Footer";
import HomepageProcedures from "./HomepageProcedures";


import EnhancedTable from '../Homepage/TableTest_homepage'

// Styled Compoennts
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const StyledHomepageBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class Homepage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="homepage-container">
          <h1>Hello from Homepage Component</h1>
          <FilterBar />
          <StyledHomepageBody>


            {/* <HomepageProcedures /> */}
            <EnhancedTable />



            <Map />
          </StyledHomepageBody>
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(
  null,
  {}
)(Homepage);
