// REACT
import React from "react";
import compose from "recompose/compose";
// REDUX
import { connect } from "react-redux";

import classNames from "classnames";

// MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

import { Chip } from "@material-ui/core";

// NOT NEEDED MATERIAL UI --> TAKEN OUT OF TABLE
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
// import FilterListIcon from '@material-ui/icons/FilterList';
// import { lighten } from '@material-ui/core/styles/colorManipulator';

// IMPORT ACTION CREATORS
// -1- //
import { get_procedures } from "../../actions/a_getProcedures";
// -2- //
import {
  filter_by_procedure,
  filter_by_doctor,
  filter_by_hospital,
  remove_filter
} from "../../actions/a_filterTable";

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// SORTING FUNCTIONS -- Table Head
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Data for TABLE HEAD
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

// Set counter for unique row ID's
let counter = 0;
// Function to create each row of data
function createData(
  // createData -- ARGUMENTS
  procedure_name,
  doctor_name,
  hospital_name,
  // city,
  // state,

  procedure_cost,
  out_of_pocket,
  insurance_adjustment,
  insurance_payment

  // -> add ins_PMT argument
  // -> add ins_adjustment argument
) {
  counter += 1;
  return {
    // return -- OBJECT for table row
    id: counter,
    procedure_name,
    doctor_name,
    hospital_name,
    // city,
    // state,

    procedure_cost,
    out_of_pocket,
    insurance_adjustment,
    insurance_payment
  };
}

// Create rows for TABLE HEAD
const rows = [
  {
    id: "procedure_name",
    label: "Procedure Name",
    numeric: false,
    disablePadding: true
  },
  { id: "doctor_name", label: "doctor", numeric: false, disablePadding: true },
  {
    id: "hospital_name",
    label: "hospital_name",
    numeric: false,
    disablePadding: true
  },
  // { id: 'city',                   label: 'City',                  numeric: false, disablePadding: true,  },
  // { id: 'state',                  label: 'State',                 numeric: false, disablePadding: true,  },

  {
    id: "procedure_cost",
    label: "Procedure Cost",
    numeric: true,
    disablePadding: true
  },
  {
    id: "out_of_pocket",
    label: "Out of Pocket",
    numeric: true,
    disablePadding: true
  },
  {
    id: "insurance_adjustment",
    label: "Insurance Adjustment",
    numeric: true,
    disablePadding: true
  },
  {
    id: "insurance_payment",
    label: "Insurance Payment",
    numeric: true,
    disablePadding: true
  }
];

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// start --> TABLE HEAD COMPONENT
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;
    console.log(this.props);
    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align="center"
                // padding={row.disablePadding ? 'none' : 'default'}
                padding="none"
                sortDirection={orderBy === row.id ? order : false}
              >
                {/* ADD THE FILTERED BOOL HERE TO RENDER SOMETHING */}

                {console.log(row.id)}

                {this.props.is_filtered && this.props.filterBy === row.id ? (
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="Delete"
                      onClick={this.props.removeFilter}
                    >
                      Remove Filter
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  // <Tooltip
                  //     title="Sort"
                  //     placement='bottom'
                  //     enterDelay={300}
                  // >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                  // </Tooltip>
                )}

                {/* <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                >
                    {row.label}
                </TableSortLabel> */}
              </TableCell>
            )
            // this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Start ACTUAL TABLE
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

const styles = theme => ({
  // root: {
  //     width: '100%',
  //     marginTop: theme.spacing.unit * 3,
  // },
  // table: {
  //     // minWidth: 1020,
  //     maxWidth:500
  // },
  // tableWrapper: {
  //     overflowX: 'auto',
  // },
});

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "calories",
    // data: [
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Donut', 452, 25.0, 51, 4.9),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //     createData('Honeycomb', 408, 3.2, 87, 6.5),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Jelly Bean', 375, 0.0, 94, 0.0),
    //     createData('KitKat', 518, 26.0, 65, 7.0),
    //     createData('Lollipop', 392, 0.2, 98, 0.0),
    //     createData('Marshmallow', 318, 0, 81, 2.0),
    //     createData('Nougat', 360, 19.0, 9, 37.0),
    //     createData('Oreo', 437, 18.0, 63, 4.0),
    // ],

    data: [],
    page: 0,
    rowsPerPage: 10
  };

  componentDidMount() {
    // GET PROCEDURES --> puts procedures on APPLICATION LEVEL STATE
    this.setApplicationState_procedures();

    // SET TABLE STATE.DATA to this data
    console.log(this.props.procedures);
    console.log(this.state);

    // this.NEW_data()
  }

  setApplicationState_procedures = () => {
    this.props.get_procedures();
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // Table Methods
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // onClick Chip Filtering
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // -1- //
  procedure_chipFilter = (currentPropsProcedures, item) => {
    let columnToFilter = "procedure_name";
    console.log("clicked PROCEDURE filter");

    console.log(
      "TABLE action creator: ",
      currentPropsProcedures,
      columnToFilter,
      item
    );

    // ACTION CREATOR
    this.props.filter_by_procedure(
      currentPropsProcedures,
      columnToFilter,
      item
    );
  };
  // -2- //
  doctor_chipFilter = (currentPropsProcedures, item) => {
    let columnToFilter = "doctor_name";
    console.log("clicked DOCTOR filter");
    console.log(
      "TABLE action creator: ",
      currentPropsProcedures,
      columnToFilter,
      item
    );

    // ACTION CREATOR
    this.props.filter_by_doctor(currentPropsProcedures, columnToFilter, item);
  };
  // -3- //
  hospital_chipFilter = (currentPropsProcedures, item) => {
    let columnToFilter = "hospital_name";
    console.log("clicked HOSPITAL filter");
    console.log(
      "TABLE action creator: ",
      currentPropsProcedures,
      columnToFilter,
      item
    );

    // ACTION CREATOR
    this.props.filter_by_hospital(currentPropsProcedures, columnToFilter, item);
  };
  // -4- //
  // city_chipFilter = item => {
  //     let columnToFilter = "city";
  // }
  // -5- //
  // state_chipFilter = item => {
  //     let columnToFilter = "state";
  // }

  // -- REMOVE FILTER -- //
  removeFilter = () => {
    console.log("clicked to REMOVE filter");
    this.props.remove_filter();
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // Pagination
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // END Table Methods
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //

  render() {
    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    // WHAT ARE YOUR PROPS ON THIS TABLE
    console.log(this.props);
    console.log(this.props.procedures);

    // NEW DATA
    // - V3 -
    // const newComponentState_data = (passedArray) => {
    //     let dataToReturn = []

    //     passedArray.map( procedure => {
    //         dataToReturn.push(procedure)
    //     })
    //     console.log(dataToReturn)

    //         this.setState(prevState => ({
    //         ...prevState,
    //         data: dataToReturn
    //     }))
    // }
    //     console.log(newComponentState_data(this.props.procedures))

    // const newComponentState_data = this.props.procedures.map( procedure => {
    //     return (
    // this.setState(prevState => ({
    //     ...prevState,
    //     data: [...prevState.data, procedure ]
    // }))
    //     )
    // })
    //     console.log(newComponentState_data)
    //     console.log(this.state)
    //     console.log(this.state.data)
    // - V2 -
    const createData_NEW_data = this.props.procedures.map(procedure => {
      return createData(
        procedure.procedure_name,
        procedure.doctor_name,
        procedure.hospital_name,
        // procedure.city,
        // procedure.state,

        procedure.procedure_cost,
        procedure.out_of_pocket,
        procedure.insurance_adjustment,
        procedure.insurance_payment
      );
    });
    console.log("createData_NEW_data", createData_NEW_data);

    // - V1 -

    // - NEW AND IMPROVED / FINAL - //
    console.log(this.props);
    console.log(this.props.is_filtered);
    console.log(this.props.filtered_data);

    const NEW_data = this.props.filtered_data;
    console.log("NEW_data", NEW_data);
    console.log(NEW_data.length);

    // const NEW_data = () => {
    //     if (this.props.is_filtered) {
    //         return this.props.filteredData
    //     } else {
    //         return this.props.procedures
    //     }
    // }
    // NEW_data()

    // const NEW_data = () => {
    //     if (this.props.is_filtered) {
    //         const NEW_data = this.props.filteredData
    //     } else {
    //         const NEW_data = this.props.procedures
    //     }
    // }
    // let NEW_data = []

    // this.props.is_filtered && {NEW_data = this.props.filteredData}
    // !this.props.is_filtered && {NEW_data = this.props.procedures}

    // this.props.is_filtered ? {let NEW_data = this.props.filteredData} : {NEW_data = this.props.procedures}
    // !this.props.is_filtered ? {NEW_data = this.props.procedures}

    // console.log(this.props.filtered_Data.filteredData)

    // {if (this.props.is_filtered) {
    //     const NEW_data = this.props.filteredData
    // } else {
    //     const NEW_data = this.props.procedures
    // }}

    // this.props.is_filtered && {const NEW_data}
    // !this.props.is_filtered

    // this.props.is_filtered ? (
    //     NEW_data = this.props.filteredData
    // ) : (
    //     NEW_data = this.props.procedures
    // )

    return (
      <Paper>
        <div>
          <Table>
            <EnhancedTableHead // -> THIS IS WHAT IS CREATED ABOVE
              // PROPS sent from TABLE --> TABLE HEAD
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              is_filtered={this.props.is_filtered}
              filterBy={this.props.filterBy}
              removeFilter={this.removeFilter}
            />
            <TableBody>
              {stableSort(
                // data,
                NEW_data,

                getSorting(order, orderBy)
              )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  console.log(n);

                  return (
                    <TableRow hover tabIndex={-1} key={n.id}>
                      <TableCell
                        component="th"
                        align="center"
                        scope="row"
                        padding="none"
                      >
                        <Chip
                          label={n.procedure_name}
                          variant="outlined"
                          clickable={true}
                          onClick={() =>
                            this.procedure_chipFilter(
                              this.props.procedures,
                              n.procedure_name
                            )
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={n.doctor_name}
                          variant="outlined"
                          clickable={true}
                          onClick={() =>
                            this.doctor_chipFilter(
                              this.props.procedures,
                              n.doctor_name
                            )
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={n.hospital_name}
                          variant="outlined"
                          clickable={true}
                          onClick={() =>
                            this.hospital_chipFilter(
                              this.props.procedures,
                              n.hospital_name
                            )
                          }
                        />
                      </TableCell>
                      {/* <TableCell align="center">
                                <Chip 
                                    label={n.city}
                                    variant="outlined"
                                    clickable={true}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Chip 
                                    label={n.state}
                                    variant="outlined"
                                    clickable={true}
                                />
                            </TableCell> */}

                      <TableCell align="center">{n.procedure_cost}</TableCell>
                      <TableCell align="center">{n.out_of_pocket}</TableCell>
                      <TableCell align="center">
                        {n.insurance_payment}
                      </TableCell>
                      <TableCell align="center">
                        {n.insurance_adjustment}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

// export default withStyles(styles)(EnhancedTable);

// Map State To Props
const mapStateToProps = state => {
  return {
    procedures: state.procedures_reducer.procedures,

    is_filtered: state.procedures_reducer.is_filtered,
    filterBy: state.procedures_reducer.filterBy,
    filtered_data: state.procedures_reducer.filtered_data
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      get_procedures,
      filter_by_procedure,
      filter_by_doctor,
      filter_by_hospital,
      remove_filter
    }
  )
)(EnhancedTable);
