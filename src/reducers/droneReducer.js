import constants from '../constants'

var initialState= {
	list: []
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.DRONES_RECEIVED:
			updated['list'] = action.drones
			return updated
		default:
			return updated
	}
}