import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {droneReducer} from '../reducers'

var store;

export default{
	configureStore: () => {
		const reducers = combineReducers({
			drone: droneReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}