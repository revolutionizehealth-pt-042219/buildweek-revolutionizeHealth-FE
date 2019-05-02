// -- ** -- DEPENDENCIES -- ** --
// REACT
import React, { Component } from "react";
import compose from "recompose/compose";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import {
  Card,
  CardContent,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  FormHelperText
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

// STYLED COMPONENTS
import styled from "styled-components";

// -- ** -- USER ACTIONS / PAGE INTERACTION -- ** --
// IMPORT ACTION CREATORS
// -1-
// Add Procedure
// -2-
// Edit Procedure
// -3-
// Delete Procedure

// -- ** -- DATA -- ** --
// COLOR VARIABLES
import colors from "../../styles/colorVariables";

// -- *** -- *** START CODE *** -- *** -- //
// -- *** -- *** START CODE *** -- *** -- //

// -- ** -- STYLING -- ** -- //
// -1-
// Material UI --> withStyles()
const styles = theme => ({
  procedureCard: {
    display: "flex",
    marginBottom: "20px",
    backgroundColor: colors.procedureBackground
  },

  content_left_InfoTitle: {
    color: colors.userProcedure_textColor,
    marginRight: "10px"
  },

  // CONTENT RIGHT
  procedureContent_right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },

  tableWrapper_paper: {
    // width: '100%',
    // overflowX: 'auto'
  },

  table: {
    // maxWidth: '300px',
  }

  // - end - //
});

// -2-
// Styled Components
const MediaQueries_CardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const MediaQueries_Content_left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  @media (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MediaQueries_InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-right: 10px;
  }
`;

const MediaQueries_procedureActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px) {
    margin-top: 20px;
  }
`;

const InfoTitle = styled.h3``; // KEEP --> due to rendering H3 tag

// -- ** -- RENDERING -- ** -- //
class Procedure extends Component {
  render() {
    const { classes } = this.props;

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
        <Card className={classes.procedureCard}>
          <MediaQueries_CardContent>
            {/* <div className={classes.procedureContent_left}> */}
            <MediaQueries_Content_left className="content_left">
              <MediaQueries_InfoSection>
                <InfoTitle className={classes.content_left_InfoTitle}>
                  Procedure:
                </InfoTitle>
                <Chip label={this.props.procedure.procedure_name} />
              </MediaQueries_InfoSection>
              <MediaQueries_InfoSection>
                <InfoTitle className={classes.content_left_InfoTitle}>
                  Performed By:
                </InfoTitle>
                <Chip label={this.props.procedure.docotor} />
              </MediaQueries_InfoSection>
              <MediaQueries_InfoSection>
                <InfoTitle className={classes.content_left_InfoTitle}>
                  At:
                </InfoTitle>
                <Chip label={this.props.procedure.hosptial_name} />
              </MediaQueries_InfoSection>
            </MediaQueries_Content_left>

            <div className={classes.procedureContent_right}>
              <Paper className={classes.tableWrapper_paper}>
                <Table className={classes.table}>
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

                        <TableCell align="center">
                          {"$" + row.ins_PMT}
                        </TableCell>

                        <TableCell align="center">
                          {"$" + row.ins_adjustment}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>

              <MediaQueries_procedureActions>
                <Button size="small" variant="outlined" color="secondary">
                  EDIT PROCEDURE
                </Button>
                <Button size="small" variant="outlined" color="secondary">
                  DELETE PROCEDURE
                </Button>
              </MediaQueries_procedureActions>
            </div>
          </MediaQueries_CardContent>
        </Card>
      </>
    );
  }
}

// -- ** -- EXPORTING -- ** -- //
// Map State To Props

// Connect
// export default connect(
//   null,
//   {}
// )(Procedure);

export default compose(
  withStyles(styles),
  connect(
    null,
    {}
  )
)(Procedure);
