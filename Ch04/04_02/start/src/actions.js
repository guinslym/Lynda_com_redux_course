import C from './constants'

export function clearError(error){
	return{
		type: C.CLEAR_ERROR,
		payload: error
	}
}

export function changeSuggestions(suggestions){
	return{
		type: C.CHANGE_SUGGESTIONS,
		payload: suggestions
	}
}

export function clearSuggestions(suggestions){
	return{
		type: C.CLEAR_SUGGESTIONS,
		payload:suggestions
	}
}

export function addError(error){
	return{
		type:C.ADD_ERROR,
		payload: error
	}
}
export function addDay(resort, date, powder=false, backcountry=false) {

	return {
		type: C.ADD_DAY,
		payload: {resort,date,powder,backcountry}
	}

}

export const removeDay = function(date) {
	// API call
	return {
		type: C.REMOVE_DAY,
		payload: date
	}

}

export const setGoal = (goal) =>
	(
		// API call
		{
		type: C.SET_GOAL,
		payload: goal
	})
