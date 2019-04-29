// REACT
import React from "react";

// REDUX
import { connect } from "react-redux";

import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";

let counter = 0;

// ORRIGINAL createData
// function createData(name, calories, fat, carbs, protein) {
// 	counter += 1;
// 	return { id: counter, name, calories, fat, carbs, protein };
// }
// NEW createData
// Set up data for table
function createData(
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

// ORRIGIONAL rows
// const rows = [
//     {
//         id: "name",
//         numeric: false,
//         disablePadding: true,
//         label: "Dessert (100g serving)"
//     },
//     { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
//     { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
//     { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
//     { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" }
// ];
// NEW rows
const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Procedure Name"
  },
  { id: "Doctor", numeric: false, disablePadding: true, label: "Doctor" },
  { id: "Hospital", numeric: false, disablePadding: true, label: "Hospital" },
  { id: "Cost", numeric: true, disablePadding: true, label: "Cost" },
  {
    id: "Out_of_Pocket_Cost",
    numeric: true,
    disablePadding: true,
    label: "Out of Pocket Cost"
  },
  {
    id: "ins_pmt",
    numeric: true,
    disablePadding: true,
    label: "Insurance Payment"
  },
  {
    id: "ins_adjustment",
    numeric: true,
    disablePadding: true,
    label: "Insurance Adjustment"
  }
];

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

    return (
      <TableHead>
        <TableRow>
          {/* <TableCell padding="checkbox">
						<Checkbox
							indeterminate={numSelected > 0 && numSelected < rowCount}
							checked={numSelected === rowCount}
							onChange={onSelectAllClick}
						/>
                    </TableCell> */}

          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

// const toolbarStyles = theme => ({
// 	root: {
// 		paddingRight: theme.spacing.unit
// 	},
// 	highlight:
// 		theme.palette.type === "light"
// 			? {
// 					color: theme.palette.secondary.main,
// 					backgroundColor: lighten(theme.palette.secondary.light, 0.85)
// 			  }
// 			: {
// 					color: theme.palette.text.primary,
// 					backgroundColor: theme.palette.secondary.dark
// 			  },
// 	spacer: {
// 		flex: "1 1 100%"
// 	},
// 	actions: {
// 		color: theme.palette.text.secondary
// 	},
// 	title: {
// 		flex: "0 0 auto"
// 	}
// });

// -- ** -- THIS WAS FOR THE MULTIPLE SELECTING CHECKBOXES DOWN LEFT SIDE & CHANGING STYLES & CHANGING BUTTONS OF TOP BAR

// let EnhancedTableToolbar = props => {
// 	const { numSelected, classes } = props;

// 	return (
// 		<Toolbar
// 			className={classNames(classes.root, {
// 				[classes.highlight]: numSelected > 0
// 			})}
// 		>
// 			<div className={classes.title}>
// 				{numSelected > 0 ? (
// 					<Typography color="inherit" variant="subtitle1">
// 						{numSelected} selected
// 					</Typography>
// 				) : (
// 					<Typography variant="h6" id="tableTitle">
// 						Nutrition
// 					</Typography>
// 				)}
// 			</div>
// 			<div className={classes.spacer} />
// 			<div className={classes.actions}>
// 				{numSelected > 0 ? (
// 					<Tooltip title="Delete">
// 						<IconButton aria-label="Delete">
// 							<DeleteIcon />
// 						</IconButton>
// 					</Tooltip>
// 				) : (
// 					<Tooltip title="Filter list">
// 						<IconButton aria-label="Filter list">
// 							<FilterListIcon />
// 						</IconButton>
// 					</Tooltip>
// 				)}
// 			</div>
// 		</Toolbar>
// 	);
// };

// EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);
// -- ** -- END -- ** -- //

// const styles = theme => ({
// 	root: {
// 		width: "100%",
// 		marginTop: theme.spacing.unit * 3
// 	},
// 	table: {
// 		minWidth: 1020
// 	},
// 	tableWrapper: {
// 		overflowX: "auto"
// 	}
// });

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

// SET DATA FOR STATE

class EnhancedTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "calories",
    selected: [],
    data: [
      // -- ** -- THIS IS TO PRELOAD THE STATE OF THIS ENHANCED TABLE -- ** --
      // -- ** -- FOR OUT USE WE DO NOT KNOW HOW MANY ITEMS WE WILL HAVE --> HARDCODING WONT WORK -- ** --
      // -- ** -- MOVE THIS FUNCTIONALITY --> componentDidMount() -- ** --
      // createData("Cupcake", 305, 3.7, 67, 4.3),
      // createData("Donut", 452, 25.0, 51, 4.9),
      // createData("Eclair", 262, 16.0, 24, 6.0),
      // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      // createData("Gingerbread", 356, 16.0, 49, 3.9),
      // createData("Honeycomb", 408, 3.2, 87, 6.5),
      // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      // createData("Jelly Bean", 375, 0.0, 94, 0.0),
      // createData("KitKat", 518, 26.0, 65, 7.0),
      // createData("Lollipop", 392, 0.2, 98, 0.0),
      // createData("Marshmallow", 318, 0, 81, 2.0),
      // createData("Nougat", 360, 19.0, 9, 37.0),
      // createData("Oreo", 437, 18.0, 63, 4.0)
      // -- ** -- END -- ** --
    ],
    // WE CAN TRY TO IMPLEMENT THIS AFTER ITS RENDERING
    page: 0,
    rowsPerPage: 5
  };

  // USE COMPONENT DID MOUNT TO ADD DATA TO COMPONENTS STATE WHEN IT HAS MOUNTED
  componentDidMount() {
    console.log("INSIDE OF COMPONENT DID MOUNT");
    let fillData = [];
    for (let i = 0; i < this.props.dummyProcedures.length; i++) {
      let dataToPush = createData(
        this.props.dummyProcedures[i].procedure_name,
        this.props.dummyProcedures[i].docotor,
        this.props.dummyProcedures[i].hosptial_name,
        this.props.dummyProcedures[i].procedure_cost,
        this.props.dummyProcedures[i].out_of_pocket,
        this.props.dummyProcedures[i].insurance_payment,
        this.props.dummyProcedures[i].insurance_adjustment
      );

      console.log(dataToPush);
      fillData.push(dataToPush);
      console.log(fillData);
    }
    console.log("prepared data for tableState", fillData);

    console.log("state PRE setState", this.state);

    this.setState(prevState => ({
      ...prevState,
      data: fillData
    }));
    console.log("state POST setState", this.state.data);
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  // -- ** -- THIS WAS REMOVED WHEN THE ENHANCES TABLE TOOLBAR WAS REMOVED -- ** --

  // handleSelectAllClick = event => {
  // 	if (event.target.checked) {
  // 		this.setState(state => ({ selected: state.data.map(n => n.id) }));
  // 		return;
  // 	}
  // 	this.setState({ selected: [] });
  // };

  // -- ** -- END -- ** --

  // USED ONHOVER TO MAKE MULTIPLE SELECTIONS WHEN OVER ANY ROW
  // -- ** --
  // handleClick = (event, id) => {
  // 	const { selected } = this.state;
  // 	const selectedIndex = selected.indexOf(id);
  // 	let newSelected = [];

  // 	if (selectedIndex === -1) {
  // 		newSelected = newSelected.concat(selected, id);
  // 	} else if (selectedIndex === 0) {
  // 		newSelected = newSelected.concat(selected.slice(1));
  // 	} else if (selectedIndex === selected.length - 1) {
  // 		newSelected = newSelected.concat(selected.slice(0, -1));
  // 	} else if (selectedIndex > 0) {
  // 		newSelected = newSelected.concat(
  // 			selected.slice(0, selectedIndex),
  // 			selected.slice(selectedIndex + 1)
  // 		);
  // 	}

  // 	this.setState({ selected: newSelected });
  // };
  // -- ** -- END -- ** --

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    // const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <div>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  // const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      // onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      // aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      // selected={isSelected}
                    >
                      {/* <TableCell padding="checkbox">
												<Checkbox checked={isSelected} />
											</TableCell> */}

                      {console.log(n)}

                      <TableCell component="th" scope="row" padding="none">
                        {n.procedure}
                      </TableCell>

                      <TableCell align="center">{n.doctor}</TableCell>

                      <TableCell align="center">{n.hospital}</TableCell>

                      <TableCell align="center">${n.procedureCost}</TableCell>

                      <TableCell align="center">${n.outOfPocket_PMT}</TableCell>

                      <TableCell align="center">${n.ins_PMT}</TableCell>

                      <TableCell align="center">${n.ins_adjustment}</TableCell>
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

// Map State To Props
const mapStateToProps = state => {
  return {
    dummyPatients: state.dummyPatients,
    dummyProcedures: state.dummyProcedures
  };
};

export default connect(
  mapStateToProps,
  {}
)(EnhancedTable);
