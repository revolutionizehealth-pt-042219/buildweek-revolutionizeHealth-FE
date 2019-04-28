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

const ProcedureContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProcedureContentRight = styled.div`
  display: flex;
  align-items: center;
`;

const ProcedureActions = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

class Procedure extends Component {
  render() {
    // SET UP DATA FOR TABLE
    function createData(
      procedureCost,
      outOfPocket_PMT,
      ins_PMT,
      ins_adjustment
    ) {
      return {
        procedureCost,
        outOfPocket_PMT,
        ins_PMT,
        ins_adjustment
      };
    }

    const rows = [
      createData(
        this.props.procedure.procedure_cost,
        this.props.procedure.out_of_pocket,
        this.props.procedure.insurance_payment,
        this.props.procedure.insurance_adjustment
      )
    ];

    console.log(this.props);

    return (
      <>
        <StyledCard>
          <StyledCardContent className="styled_CardContent">
            <ProcedureContentLeft>
              <InfoSection className="infoSection">
                <IntoTitle>Procedure:</IntoTitle>
                <Chip label={this.props.procedure.procedure_name} />
              </InfoSection>
              <InfoSection className="infoSection">
                <IntoTitle>Performed by:</IntoTitle>
                <Chip label={this.props.procedure.docotor} />
              </InfoSection>
              <InfoSection className="infoSection">
                <IntoTitle>At:</IntoTitle>
                <Chip label={this.props.procedure.hosptial_name} />
              </InfoSection>
            </ProcedureContentLeft>
            <ProcedureContentRight>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Cost</TableCell>
                    <TableCell align="center">Out of Pocket PMT</TableCell>
                    <TableCell align="center">Insurance PMT</TableCell>
                    <TableCell align="center">Insurance Adjustment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
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
            </ProcedureContentRight>

            <ProcedureActions>
              <Button size="small" variant="outlined" color="secondary">
                EDIT PROCEDURE
              </Button>
            </ProcedureActions>
          </StyledCardContent>
        </StyledCard>
      </>
    );
  }
}

// Map State To Props

// Connect
export default connect(
  null,
  {}
)(Procedure);
