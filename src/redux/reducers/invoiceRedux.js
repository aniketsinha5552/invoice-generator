import {createSlice,nanoid} from "@reduxjs/toolkit"

const invoiceSlice= createSlice({
    name: "invoices",
    initialState:{
     invoices:[{
          currency: '$',
          currentDate: '',
          invoiceNumber: 1,
          dateOfIssue: '',
          billTo: 'Anish',
          billToEmail: 'test1@gmail.com',
          billToAddress: '',
          billFrom: 'Aniket',
          billFromEmail: '',
          billFromAddress: '',
          notes: '',
          total: '100.00',
          subTotal: '0.00',
          taxRate: '',
          taxAmmount: '0.00',
          discountRate: '',
          discountAmmount: '0.00',
          items: [
               {
                 id: 0,
                 name: '',
                 description: '',
                 price: '1.00',
                 quantity: 1
               }]
     }]
    },
    reducers:{
         addInvoice:(state,action)=>{
              state.push(action.payload);
         },
         deleteInvoice:(state,action)=>{

         },
         editInvoice:(state,action)=>{

         },
    }
})

export const {addInvoice,deleteInvoice, editInvoice}= invoiceSlice.actions;
export default invoiceSlice.reducer;