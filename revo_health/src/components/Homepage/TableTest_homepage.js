// REACT
import React from "react";

// REDUX
    import { connect } from "react-redux";

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
    

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// start --> TABLE HEAD COMPONENT
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

class EnhancedTableHead extends React.Component {

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



// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// Start ACTUAL TABLE
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- //

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
    }


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
        chipFilter = () => {
            console.log(this)
            console.log(this.props)
            console.log(this.props.label)
            
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
                                                    onClick={this.chipFilter}
                                                />
											</TableCell>

                                            <TableCell align="center">
                                                <Chip 
                                                    label={n.doctor} 
                                                    variant="outlined" 
                                                    color="primary"

                                                    clickable={true}
                                                    onClick={this.chipFilter}
                                                />
                                            </TableCell>

                                            <TableCell align="center">
                                                <Chip 
                                                    label={n.hospital} 
                                                    variant="outlined" 
                                                    color="primary"

                                                    clickable={true}
                                                    onClick={this.chipFilter}
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


// Map State To Props
const mapStateToProps = state => {
    return {
        dummyPatients: state.dummyPatients,
        dummyProcedures: state.dummyProcedures
    };
};

export default connect(mapStateToProps, {})(EnhancedTable);