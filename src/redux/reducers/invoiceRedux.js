import {createSlice,nanoid} from "@reduxjs/toolkit"

const defaultInvoice={
     id: nanoid(),
     currency: '$',
     currentDate: '',
     invoiceNumber: 1,
     dateOfIssue: "2023-10-01",
     billTo: 'Aniket',
     billToEmail: 'aniketsinha@xyz.com',
     billToAddress: 'India',
     billFrom: 'John',
     billFromEmail: 'john@xyz.com',
     billFromAddress: 'USA',
     notes: 'Thanks!',
     total: 50,
     subTotal: '100.00',
     taxRate: '',
     taxAmmount: '0.00',
     discountRate: '50',
     discountAmmount: '50.00',
     items: [
          {
            id: 1,
            name: 'invoice',
            description: 'invoice genrator',
            price: '100.00',
            quantity: 1
          }]
}

const invoiceSlice= createSlice({
    name: "invoices",
    initialState:{
     invoices:[defaultInvoice],
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
         duplicateInvoice: (state,action)=>{
            let id = action.payload
            let dupInvoice = state.invoices.find(invoice=> invoice.id==id)
            console.error(dupInvoice)
            let payload={
                 ...dupInvoice,
               id: nanoid(),
              }
            console.warn(dupInvoice)
            state.invoices.push(payload)

         }
    }
})

export const {addInvoice,deleteInvoice, editInvoice,duplicateInvoice}= invoiceSlice.actions;
export default invoiceSlice.reducer;