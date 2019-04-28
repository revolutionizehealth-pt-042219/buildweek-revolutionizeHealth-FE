// REACT
import React, { Component } from "react";

// REDUX
import { connect } from "react-redux";

// IMPORT ACTION CREATORS

// COMPONENT

// MATERIAL UI
import {
  Card,
  CardContent,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button

  // Typography,
} from "@material-ui/core";

import { Icon } from "@material-ui/core";

// Styled Compoennts
import styled from "styled-components";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

const StyledCard = styled(Card)`
  display: flex;

  margin-bottom: 20px;
`;

const StyledCardContent = styled(CardContent)`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IntoTitle = styled.h3`
  color: blue;
  margin-right: 15px;
`;

const ProcedureContentleft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProcedureContentright = styled.div`
  display: flex;
  align-items: center;
`;

const ProcedureActions = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

class HomepageProcedures extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.dummyProcedures);
    console.log(this.props.dummyProcedures.length);
    console.log(this.props.dummyProcedures[2].procedure_name);

    //WHAT USER??
    const UserIndex = 2;

    // SET UP DATA FOR TABLE
    function createData(
      procedure,
      doctor,
      hospital,

      procedureCost,
      outOfPocket_PMT,
      ins_PMT,
      ins_adjustment
    ) {
      return {
        procedure,
        doctor,
        hospital,

        procedureCost,
        outOfPocket_PMT,
        ins_PMT,
        ins_adjustment
      };
    }

    const rows = [];

    for (let i = 0; i < this.props.dummyProcedures.length; i++) {
      console.log(i);

      let dataToPush = createData(
        this.props.dummyProcedures[i].procedure_name,
        this.props.dummyProcedures[i].docotor,
        this.props.dummyProcedures[i].hosptial_name,

        this.props.dummyProcedures[i].procedure_cost,
        this.props.dummyProcedures[i].out_of_pocket,
        this.props.dummyProcedures[i].insurance_payment,
        this.props.dummyProcedures[i].insurance_adjustment
      );

      rows.push(dataToPush);
    }

    return (
      <>
        <StyledCard>
          <StyledCardContent className="styled_CardContent">
            {/* <ProcedureContentleft>
              <InfoSection className="infoSection">
                <IntoTitle>pro:</IntoTitle>
                <Chip label={this.props.dummyProcedures.procedure_name} />
              </InfoSection>

              <InfoSection className="infoSection">
                <IntoTitle>Performed by:</IntoTitle>
                <Chip label={this.props.dummyProcedures.docotor} />
              </InfoSection>
              <InfoSection className="infoSection">
                <IntoTitle>At:</IntoTitle>
                <Chip label={this.props.dummyProcedures.hosptial_name} />
              </InfoSection>
            </ProcedureContentleft> */}
            <ProcedureContentright>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Procedure</TableCell>
                    <TableCell align="center">Doctor</TableCell>
                    <TableCell align="center">Hospital</TableCell>
                    <TableCell align="center">Cost</TableCell>
                    <TableCell align="center">Out of Pocket PMT</TableCell>
                    <TableCell align="center">Insurance PMT</TableCell>
                    <TableCell align="center">Insurance Adjustment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.procedure}
                      </TableCell>
                      <TableCell scope="row">{row.doctor}</TableCell>
                      <TableCell scope="row">{row.hospital}</TableCell>

                      <TableCell scope="row">
                        {"$" + row.procedureCost}
                      </TableCell>
                      <TableCell align="center">
                        {"$" + row.outOfPocket_PMT}
                      </TableCell>
                      <TableCell align="center">{"$" + row.ins_PMT}</TableCell>
                      <TableCell align="center">
                        {"$" + row.ins_adjustment}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ProcedureContentright>

            <ProcedureActions>
              {/* <Button size="small" variant="outlined" color="secondary">
                EDIT PROCEDURE
              </Button> */}
            </ProcedureActions>
          </StyledCardContent>
        </StyledCard>
      </>
    );
  }
}

// Map State To Props
const mapStateToProps = state => {
  return {
    dummyPatients: state.dummyPatients,
    dummyProcedures: state.dummyProcedures
  };
};

// Connect
export default connect(
  mapStateToProps,
  {}
)(HomepageProcedures);
