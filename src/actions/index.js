import constants from '../constants'
import {APIManager} from '../utils'

export default{
	fetchDrones: (params) => {
		return (dispatch) => {
			APIManager
			.get('/api/drone')
			.then(response => {
				dispatch({
					type: constants.DRONES_RECEIVED,
					drones: response.results
				})
			})
			.catch((err) => {
				console.log("ERROR:" +err)
			})
		}
	},

	dronesReceived: (drones) => {
		return {
			type: constants.DRONES_RECEIVED,
			drones: drones
		}
	}
}