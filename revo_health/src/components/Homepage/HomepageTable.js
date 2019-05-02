// -- ** -- DEPENDENCIES -- ** --
// REACT
import React from "react";
import compose from "recompose/compose";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  Tooltip,
  Chip,
  TablePagination
} from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

import {
  DeleteIcon,
  IconButton,
} from "@material-ui/icons/Delete";

// IMPORT ACTION CREATORS
// -1-
// Get available procedures @ componentDidMount()
  import { get_procedures } from "../../actions/a_getProcedures";

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// SORTING FUNCTIONS -- Table Head
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

function desc(a, b, orderBy) {
  console.log("SORTING FUNCTIONS -> desc");
  console.log("SORTING FUNCTIONS -> desc: ", a);
  console.log("SORTING FUNCTIONS -> desc: ", b);
  console.log("SORTING FUNCTIONS -> desc: ", orderBy);

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

// This functions gets called in the table
// goes into 'cmp' argument in stableSort ABOVE
function getSorting(order, orderBy) {
  console.log("SORTING FUNCTIONS -> getSorting");
  console.log("SORTING FUNCTIONS -> getSorting: ", order);
  console.log("SORTING FUNCTIONS -> getSorting: ", orderBy);

  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Data for TABLE HEAD
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

// Set up data for table
// set counter for unique ID's
let counter = 0;

// function to create each row of data
function createData(
  // createData -- ARGUMENTS
  procedure,
  doctor,
  hospital,

  procedureCost,
  outOfPocket_PMT,
  ins_PMT,
  ins_adjustment
) {
  counter += 1;
  return {
    // return -- OBJECT
    id: counter,
    procedure,
    doctor,
    hospital,

    procedureCost,
    outOfPocket_PMT,
    ins_PMT,
    ins_adjustment
  };
}

// Create rows for TABLE HEAD ----- aka NOT the actual table but top bar
const rows = [
  {
    id: "procedure",
    numeric: false,
    // disablePadding: true,
    label: "Procedure Name"
  },

  {
    id: "doctor",
    numeric: false,
    // disablePadding: true,
    label: "Doctor"
  },

  {
    id: "hospital",
    numeric: false,
    // disablePadding: true,
    label: "Hospital"
  },

  {
    id: "procedureCost",
    numeric: true,
    // disablePadding: true,
    label: "Cost"
  },

  {
    id: "outOfPocket_PMT",
    numeric: true,
    // disablePadding: true,
    label: "Out of Pocket Cost"
  },

  {
    id: "ins_PMT",
    numeric: true,
    // disablePadding: true,
    label: "Insurance Payment"
  },

  {
    id: "ins_adjustment",
    numeric: true,
    // disablePadding: true,
    label: "Insurance Adjustment"
  }
];

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// start --> TABLE HEAD COMPONENT
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    console.log("TABLE HEAD -> inside CreateSortHandler");
    console.log("TABLE HEAD -> CreateSortHandler -> EVENT: ", event);
    console.log("TABLE HEAD -> CreateSortHandler -> PROPERTY: ", property);

    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      // THESE PROPS ARE PASSED IN FROM THE TABLE
      order,
      orderBy,

      rowCount
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align="center"
                // padding={row.disablePadding ? "none" : "default"}
                padding="none" // remove disablePadding from rows
                sortDirection={orderBy === row.id ? order : false}
              >
                {this.props.filteredData_bool &&
                this.props.filterBy === row.id ? (
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
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

// Example of using with styles -- keep for later
// EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Styling
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

// -1-
// Material UI --> withStyles()
const styles = theme => ({});

// -2-
// Styled Components

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Start ACTUAL TABLE
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

class HomepageTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "name",
    // selected: [],

    // add data from props in Component Did Mount
    data: [],

    filteredData: false,
    filterBy: undefined,

    page: 0,
    rowsPerPage: 10
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // Table Methods
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // Sorting Function --> Table Head
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //

  handleRequestSort = (event, property) => {
    console.log("TABLE METHOD -> handleRequestSort - EVENT: ", event);
    console.log("TABLE METHOD -> handleRequestSort - PROPERTY: ", property);

    // set 'orderBy' to the name of the column you just selected (property)
    const orderBy = property;

    // logic to flip 'asc' & 'desc'
    let order = "desc";
    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    // set new state
    this.setState({ order, orderBy });
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // Remove Filter ACTION --> This is a METHOD that is passed into the table head PROPS
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //

  removeFilter = () => {
    console.log("clicked to REMOVE filter");

    this.setState(prevState => ({
      ...prevState,
      filteredData: false,
      filterBy: undefined
    }));
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // Component Did Mount --> Load Initial Data Onto State
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //

  componentDidMount() {
    console.log("INSIDE OF COMPONENT DID MOUNT");
    // Get Available Procedures Action Creator
    // this.props.get_procedures()

      // .then(this.setProcedures_onState(this.props.procedures))
  }

  setProcedures_onState = procedures => {
    console.log("INSIDE setState_w_dummyData");
    console.log(procedures);
    let fillData = [];
    for (let i = 0; i < procedures.length; i++) {
      let dataToPush = createData(
        procedures[i].procedure_name,
        procedures[i].docotor,
        procedures[i].hosptial_name,
        procedures[i].procedure_cost,
        procedures[i].out_of_pocket,
        procedures[i].insurance_payment,
        procedures[i].insurance_adjustment
      );

      // console.log(dataToPush)
      fillData.push(dataToPush);
    }

    console.log("prepared data for tableState", fillData);
    console.log("state PRE setState", this.state);

    this.setState(prevState => ({
      ...prevState,
      data: fillData
    }));

    // it WORKES if you look in the REACT DEV TOOLS but the log below will show NOTHING
    console.log("state POST setState", this.state.data);
  };

  // -- ** -- ** -- ** -- ** -- ** -- ** -- //
  // onClick Chip Filtering
  // -- ** -- ** -- ** -- ** -- ** -- ** -- //

  // -1- // Procedure Chip Filter onClick Handler
  procedure_chipFilter = item => {
    let columnToFilter = "procedure";
    this.filterStateData(columnToFilter, item);
  };

  // -2- // Doctor Chip Filter onClick Handler
  doctor_chipFilter = item => {
    let columnToFilter = "doctor";
    this.filterStateData(columnToFilter, item);
  };

  // -3- // Hospital Chip Filter onClick Handler
  hospital_chipFilter = item => {
    let columnToFilter = "hospital";
    this.filterStateData(columnToFilter, item);
  };

  // -FILTER- //
  filterStateData = (column, item) => {
    console.log(this.state.data);
    console.log(column, item);

    let newStateData = [];
    if (column === "procedure") {
      newStateData = this.state.data.filter(
        dataPoint => dataPoint.procedure === item
      );
    } else if (column === "doctor") {
      newStateData = this.state.data.filter(
        dataPoint => dataPoint.doctor === item
      );
    } else if (column === "hospital") {
      newStateData = this.state.data.filter(
        dataPoint => dataPoint.hospital === item
      );
    } else {
      alert("You made an error. Column not identified");
    }
    console.log("Filtered State Data", newStateData);

    // set new state
    this.setState(prevState => ({
      ...prevState,
      data: newStateData,
      filteredData: true,
      filterBy: column
    }));
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
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

    console.log(this.props);
    console.log(data);

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
    

      <Paper>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <div>
          <Table aria-labelledby="tableTitle">
            {/* // -- ** -- ** -- ** -- ** -- ** -- ** -- //
                        // TABLE HEAD CREATED ABOVE
                        // -- ** -- ** -- ** -- ** -- ** -- ** -- // */}
            <EnhancedTableHead
              // SORTING PROPS SENT
              // FROM table --> TO TABLE HEAD
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              filteredData_bool={this.state.filteredData}
              filterBy={this.state.filterBy}
              removeFilter={this.removeFilter}
              rowCount={data.length}
            />
            {/* // -- ** -- ** -- ** -- ** -- ** -- ** -- //
                        // END - TABLE HEAD CREATED ABOVE
                        // -- ** -- ** -- ** -- ** -- ** -- ** -- // */}

            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                // Sets up pagination
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                // MAPs over what is returned by stableSort()
                .map(n => {
                  // console.log(n)

                  return (
                    <TableRow
                      hover
                      // onClick={event => this.handleClick(event, n.id)}
                      // role="checkbox"
                      // aria-checked={isSelected}
                      // selected={isSelected}

                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell
                        component="th"
                        align="center"
                        scope="row"
                        // padding="none"
                      >
                        <Chip
                          label={n.procedure}
                          variant="outlined"
                          color="primary"
                          clickable={true}
                          // onClick={this.chipFilter}
                          onClick={() => this.procedure_chipFilter(n.procedure)}
                        />
                      </TableCell>

                      <TableCell align="center">
                        <Chip
                          label={n.doctor}
                          variant="outlined"
                          color="primary"
                          clickable={true}
                          // onClick={this.chipFilter}
                          onClick={() => this.doctor_chipFilter(n.doctor)}
                        />
                      </TableCell>

                      <TableCell align="center">
                        <Chip
                          label={n.hospital}
                          variant="outlined"
                          color="primary"
                          clickable={true}
                          // onClick={this.chipFilter}
                          onClick={() => this.hospital_chipFilter(n.hospital)}
                        />
                      </TableCell>

                      <TableCell align="center">${n.procedureCost}</TableCell>

                      <TableCell align="center">${n.outOfPocket_PMT}</TableCell>

                      <TableCell align="center">${n.ins_PMT}</TableCell>

                      <TableCell align="center">${n.ins_adjustment}</TableCell>
                    </TableRow>
                  );
                })}
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

// Map State To Props
const mapStateToProps = state => {
  return {
    procedures: state.procedures_reducer.procedures
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { get_procedures }
  )
)(HomepageTable);
