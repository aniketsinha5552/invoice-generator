import {configureStore} from "@reduxjs/toolkit"
import invoiceRedux from "../reducers/invoiceRedux"


export const store= configureStore({
    reducer: invoiceRedux
})