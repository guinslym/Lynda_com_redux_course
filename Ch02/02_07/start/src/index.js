import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState'
var prettyjson = require('prettyjson');

let state = initialState

console.log(`
  Initial state
  ===============


  goal: ${state.goal}
  resorts:${JSON.stringify(state.allSkiDays)}
  fetching:${state.resortNames.fetching}
  suggestions:${state.resortNames.suggestions}

`)


state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
})

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`
  next state
  ===============


  goal: ${prettyjson.render(state.goal)}\n
  resorts:${prettyjson.render(state.allSkiDays)}\n
  fetching:${prettyjson.render(state.resortNames.fetching)}\n
  suggestions:${prettyjson.render(state.resortNames.suggestions)}

`)
