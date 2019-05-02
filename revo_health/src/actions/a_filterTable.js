// AXIOS
import axios from "axios";

// -- *** START CODE *** -- //
// -- *** START CODE *** -- //

// CREATE ACTION TYPES
    export const FILTER_BY_PROCEDURE = 'FILTER_BY_PROCEDURE'
    // export const FILTER_BY_PROCEDURE_START = 'FILTER_BY_PROCEDURE'
    // export const FILTER_BY_PROCEDURE_SUCCESS = 'FILTER_BY_PROCEDURE'
    // export const FILTER_BY_PROCEDURE_FAILURE = 'FILTER_BY_PROCEDURE'
    
    
    export const FILTER_BY_DOCTOR = 'FILTER_BY_DOCTOR'
    
    
    export const FILTER_BY_HOSPITAL = 'FILTER_BY_HOSPITAL'
    export const REMOVE_FILTER = 'REMOVE_FILTER'

// ACTION CREATOR
    // -1- //
    export const filter_by_procedure = (currentPropsProcedures, columnToFilter, item) => {
        console.log(currentPropsProcedures, columnToFilter, item)
        
            // console.log(currentPropsProcedures[0][columnToFilter])

            let payload_Array = currentPropsProcedures.filter(procedure => procedure[columnToFilter] === item)
                console.log(payload_Array)
        
        return {
            type: FILTER_BY_PROCEDURE,
            payload: {
                filteredData: payload_Array,
                columnToFilter
            }
        }
    }
    // -2- //
    export const filter_by_doctor = (currentPropsProcedures, columnToFilter, item) => {
        console.log(currentPropsProcedures, columnToFilter, item)

        let payload_Array = currentPropsProcedures.filter(procedure => procedure[columnToFilter] === item)
                console.log(payload_Array)

        return {
            type: FILTER_BY_DOCTOR,
            payload: {
                filteredData: payload_Array,
                columnToFilter
            }
        }
    }
    // -3- //
    export const filter_by_hospital = (currentPropsProcedures, columnToFilter, item) => {
        console.log(currentPropsProcedures, columnToFilter, item)

        let payload_Array = currentPropsProcedures.filter(procedure => procedure[columnToFilter] === item)
                console.log(payload_Array)

        return {
            type: FILTER_BY_HOSPITAL,
            payload: {
                filteredData: payload_Array,
                columnToFilter
            }
        }
    }
    // -4- // 
    export const remove_filter = () => {
        return {
            type: REMOVE_FILTER,
        }
    }