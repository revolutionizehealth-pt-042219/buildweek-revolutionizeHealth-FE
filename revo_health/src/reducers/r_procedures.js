// -- *** IMPORT ACTION TYPES *** -- //
// Getting Procedures
import {
  GET_PROCEDURES_START,
  GET_PROCEDURES_SUCCESS,
  GET_PROCEDURES_FAILURE
} from "../actions/a_getProcedures";

// Filtering Data
import {
  FILTER_BY_PROCEDURE,
  FILTER_BY_DOCTOR,
  FILTER_BY_HOSPITAL,
  REMOVE_FILTER
} from "../actions/a_filterTable";

// Adding Procedure
import {
  EDIT_PROCEDURE_START,
  EDIT_PROCEDURE_SUCCESS,
  EDIT_PROCEDURE_FAILURE
} from "../actions/a_editProcedure";

// Editing a Procedure
import {
  ADD_PROCEDURE_START,
  ADD_PROCEDURE_SUCCESS,
  ADD_PROCEDURE_FAILURE
} from "../actions/a_addProcedure";

// -- *** INITIAL STATE *** -- //

// Initial State
const initialState = {
  procedures: [],
  error: "",

  is_gettingProcedures: false,
  is_addingProcedures: false,
  is_editingProcedures: false,

  is_filtered: false,
  filterBy: undefined,
  filtered_data: []
};

// Reducer
export const procedures_reducer = (state = initialState, action) => {
  console.log("action", action);

  switch (action.type) {
    // Getting Procedures
    case GET_PROCEDURES_START:
      return {
        ...state,

        is_gettingProcedures: true,
        error: ""
      };
    case GET_PROCEDURES_SUCCESS:
      return {
        ...state,

        procedures: action.payload,
        filtered_data: action.payload,
        is_gettingProcedures: false,
        error: ""
      };

    case GET_PROCEDURES_FAILURE:
      return {
        ...state,

        is_gettingProcedures: false,
        error: "FAILED to get procedures"
      };

    // Filters
    case FILTER_BY_PROCEDURE:
      return {
        ...state,
        is_filtered: true,
        filterBy: action.payload.columnToFilter,
        filtered_data: action.payload.filteredData
      };

    case FILTER_BY_DOCTOR:
      return {
        ...state,
        is_filtered: true,
        filterBy: action.payload.columnToFilter,
        filtered_data: action.payload.filteredData
      };

    case FILTER_BY_HOSPITAL:
      return {
        ...state,
        is_filtered: true,
        filterBy: action.payload.columnToFilter,
        filtered_data: action.payload.filteredData
      };

    case REMOVE_FILTER:
      return {
        ...state,
        is_filtered: false,
        filterBy: undefined,
        filtered_data: state.procedures
      };

    // Adding Procedures
    case ADD_PROCEDURE_START:
      return {
        ...state,

        is_addingProcedures: true,
        error: ""
      };

    case ADD_PROCEDURE_SUCCESS:
      return {
        ...state,

        procedures: action.payload,
        is_addingProcedures: false,
        error: ""
      };

    case ADD_PROCEDURE_FAILURE:
      return {
        ...state,

        is_addingProcedures: false,
        error: "FAILED to add procedures"
      };

    // Editing Procedures
    case EDIT_PROCEDURE_START:
      return {
        ...state,

        is_addingProcedures: true,
        error: ""
      };

    case EDIT_PROCEDURE_SUCCESS:
      return {
        ...state,

        procedures: action.payload,
        is_addingProcedures: false,
        error: ""
      };

    case EDIT_PROCEDURE_FAILURE:
      return {
        ...state,

        is_addingProcedures: false,
        error: "FAILED to edit procedure"
      };

    // Default
    default:
      return state;
  }
};
