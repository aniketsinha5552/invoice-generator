import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import { Routes,Route, useNavigate, useParams } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const params= useParams();
  return (
    <div className="App d-flex flex-column w-100 p-2" style={{height:"100vh"}}>
      <Routes>
        <Route path='/' element={<InvoiceList/>} />
        <Route path='/create' 
        element={
          <Container>
            <InvoiceForm navigate={navigate}/>
          </Container>
        } />
         <Route path='/edit/:id' 
        element={
          <Container>
            <InvoiceForm navigate={navigate} params={params}/>
          </Container>
        } />
      </Routes>      
    </div>
  );
}

export default App;
