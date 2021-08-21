import productReducer from './reducers/buyProductReducer';
import { createStore } from 'redux';

const store=createStore(productReducer);
export default store;