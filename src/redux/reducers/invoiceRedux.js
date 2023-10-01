import {createSlice,nanoid} from "@reduxjs/toolkit"

const invoiceSlice= createSlice({
    name: "invoices",
    initialState:{
     invoices:[{
          id: nanoid(),
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
              let payload={
               id: nanoid(),
               ...action.payload
              }
              state.invoices.push(payload)
              alert("Invoice Saved!")
         },
         deleteInvoice:(state,action)=>{
              console.log(action.payload)
              state.invoices = state.invoices.filter((invoice)=>invoice.id!==action.payload)
         },
         editInvoice:(state,action)=>{
             let id = action.payload.id
             let payload={
               id: id,
               ...action.payload.data
              }
             // remove the particular invoice
             state.invoices = state.invoices.filter((invoice)=>invoice.id!==id)
            //  add the edited data
            state.invoices.push(payload)
            alert("Invoice Saved!")
         },
    }
})

export const {addInvoice,deleteInvoice, editInvoice}= invoiceSlice.actions;
export default invoiceSlice.reducer;