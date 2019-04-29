// REACT
import React from "react";

// REDUX
import { connect } from "react-redux";

<<<<<<< HEAD
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

=======
// MATERIAL UI
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
    import Tooltip from "@material-ui/core/Tooltip";
    import Chip from '@material-ui/core/Chip';
    
    
    // STYLED ... will need
    import { withStyles } from "@material-ui/core/styles";
    
    // DONT NEED ... yet ... ever?
    import Checkbox from "@material-ui/core/Checkbox";
    import IconButton from "@material-ui/core/IconButton";
    import { lighten } from "@material-ui/core/styles/colorManipulator";
    import classNames from "classnames";
    import DeleteIcon from "@material-ui/icons/Delete";
    import FilterListIcon from "@material-ui/icons/FilterList";
    
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// NOTES
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

/* 

notes: 
    the TABLE HEAD & the actual TABLE are different components

*/

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// SORTING FUNCTIONS -- Table Head
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //


function desc(a, b, orderBy) {
    console.log('SORTING FUNCTIONS -> desc')
    console.log('SORTING FUNCTIONS -> desc: ', a)
    console.log('SORTING FUNCTIONS -> desc: ', b)
    console.log('SORTING FUNCTIONS -> desc: ', orderBy)

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
    console.log('SORTING FUNCTIONS -> getSorting')
    console.log('SORTING FUNCTIONS -> getSorting: ', order)
    console.log('SORTING FUNCTIONS -> getSorting: ', orderBy)


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
            label: "Procedure Name" },

        {   id: "doctor", 
            numeric: false, 
            // disablePadding: true, 
            label: "Doctor" },

        {   id: "hospital", 
            numeric: false, 
            // disablePadding: true, 
            label: "Hospital" },

        {   id: "procedureCost", 
            numeric: true, 
            // disablePadding: true, 
            label: "Cost" },

        {   id: "outOfPocket_PMT", 
            numeric: true, 
            // disablePadding: true, 
            label: "Out of Pocket Cost" },

        {   id: "ins_PMT", 
            numeric: true, 
            // disablePadding: true, 
            label: "Insurance Payment" },

        {   id: "ins_adjustment", 
            numeric: true, 
            // disablePadding: true, 
            label: "Insurance Adjustment" },
    ]
    

>>>>>>> a6b52181d9da420e936621ad8df99adc62747032
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// start --> TABLE HEAD COMPONENT
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

class EnhancedTableHead extends React.Component {
<<<<<<< HEAD
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
=======

	createSortHandler = property => event => {
        console.log('TABLE HEAD -> inside CreateSortHandler')
        console.log('TABLE HEAD -> CreateSortHandler -> EVENT: ', event)
        console.log('TABLE HEAD -> CreateSortHandler -> PROPERTY: ', property)


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
					{rows.map( row => (
                        

							<TableCell
								key={row.id}
                                align='center'
                                
                                // padding={row.disablePadding ? "none" : "default"}
                                padding='none' // remove disablePadding from rows

								sortDirection={orderBy === row.id ? order : false}
							>
                                {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
								<Tooltip
                                    title="Sort"
                                    placement='bottom'
									enterDelay={300}
								>
                                    {/* THIS IS WHERE THE SORTING 
                                    STARTS WITH ONCLICK */}

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

// Example of using with styles -- keep for later
    // EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);


>>>>>>> a6b52181d9da420e936621ad8df99adc62747032

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Start ACTUAL TABLE
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

<<<<<<< HEAD
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
=======
class EnhancedTable extends React.Component {
	state = {
		order: "asc",
		orderBy: "name",
		// selected: [],
        
        // add data from props in Component Did Mount
        data: [],

		page: 0,
		rowsPerPage: 4
	};

// -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Table Methods
// -- ** -- ** -- ** -- ** -- ** -- ** -- //

    // Add data to this.state.data in Component Did Mount
    componentDidMount() {
        console.log('INSIDE OF COMPONENT DID MOUNT')
        let fillData = []
            for (let i = 0; i < this.props.dummyProcedures.length; i++) {

                let dataToPush = createData(
                    this.props.dummyProcedures[i].procedure_name,
                    this.props.dummyProcedures[i].docotor,
                    this.props.dummyProcedures[i].hosptial_name,
                    this.props.dummyProcedures[i].procedure_cost,
                    this.props.dummyProcedures[i].out_of_pocket,
                    this.props.dummyProcedures[i].insurance_payment,
                    this.props.dummyProcedures[i].insurance_adjustment
                ) 

                // console.log(dataToPush)
                fillData.push(dataToPush)
            }
        console.log('prepared data for tableState', fillData)
        console.log('state PRE setState', this.state)

        this.setState(prevState => ({
            ...prevState,
            data: fillData
        }))

        // it WORKES if you look in the REACT DEV TOOLS but the log below will show NOTHING
        console.log('state POST setState', this.state.data)
>>>>>>> a6b52181d9da420e936621ad8df99adc62747032
    }
    console.log("prepared data for tableState", fillData);

    console.log("state PRE setState", this.state);

<<<<<<< HEAD
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
=======
    // SORTING FUNCTION -- Table Head
    // THIS IS THE ONLY TABLE METHOD THAT INTERACTS WITH THE TABLE HEAD METHODS
        handleRequestSort = (event, property) => {
            
            console.log('TABLE METHOD -> handleRequestSort - EVENT: ',event)
            console.log('TABLE METHOD -> handleRequestSort - PROPERTY: ',property)
            
            // set 'orderBy' to the name of the column you just selected (property)
            const orderBy = property;
            
            // logic to flip 'asc' & 'desc'
            let order = "desc";
            if (
                this.state.orderBy === property 
                && 
                this.state.order === "desc"
            ) {
                order = "asc";
            }

            this.setState({ order, orderBy });
        };

    // CHIP FILTER
        // chipFilter = () => {
        //     console.log(this)
        //     console.log(this.props)
        //     console.log(this.props.label)
            
        // }

        chipFilter = (item) => {
            console.log(this)
            console.log(item)
            console.log(item.label)
       }

    // OTHER methods
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
		const { 
            data, 
            order, 
            orderBy, 
            selected, 
            rowsPerPage, 
            page 
        } = this.state;
        
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


                                rowCount={data.length}
                            />
                        {/* // -- ** -- ** -- ** -- ** -- ** -- ** -- //
                        // END - TABLE HEAD CREATED ABOVE
                        // -- ** -- ** -- ** -- ** -- ** -- ** -- // */}

						<TableBody>
							{stableSort(
                                data, getSorting(order, orderBy))
                                
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
                                                    onClick={ () => this.chipFilter(n.procedure) }

                                                />
											</TableCell>

                                            <TableCell align="center">
                                                <Chip 
                                                    label={n.doctor} 
                                                    variant="outlined" 
                                                    color="primary"

                                                    clickable={true}
                                                    // onClick={this.chipFilter}
                                                    onClick={ () => this.chipFilter(n.doctor) }
                                                />
                                            </TableCell>

                                            <TableCell align="center">
                                                <Chip 
                                                    label={n.hospital} 
                                                    variant="outlined" 
                                                    color="primary"

                                                    clickable={true}
                                                    // onClick={this.chipFilter}
                                                    onClick={ () => this.chipFilter(n.hospital) }
                                                />
                                            </TableCell>

                                            <TableCell 
                                                align="center">
                                                ${n.procedureCost}
                                            </TableCell>

                                            <TableCell 
                                                align="center">
                                                ${n.outOfPocket_PMT}
                                            </TableCell>

                                            <TableCell 
                                                align="center">
                                                ${n.ins_PMT}
                                            </TableCell>
                                            
                                            <TableCell 
                                                align="center">
                                                ${n.ins_adjustment}
                                            </TableCell>

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
>>>>>>> a6b52181d9da420e936621ad8df99adc62747032

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
