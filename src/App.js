import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import { Routes,Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
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
      </Routes>      
    </div>
  );
}

export default App;
