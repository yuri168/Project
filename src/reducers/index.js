import { combineReducers } from 'redux';
import prodid from './productid';
import idLog from './idLogin';
import idInvoice from './idInvoice';
import search from './search';

export default combineReducers({
    idproduct: prodid,
    idLogin: idLog,
    invoice: idInvoice,
    searching: search
}); 
//state