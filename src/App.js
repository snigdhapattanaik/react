import logo from './logo.svg';
import { Container} from 'react-bootstrap';
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import Header from './Component/Header';
import Footer from './Component/Footer';
import SideMenuBar from './Component/SideMenuBar';
import './App.css';

const App = () => {
  return (
    <>
    <Header />
    <main>
        <Container>
    <MDBTable>
    
      <MDBTableHead dark>
      <tr>
        <th>STORE LIST</th>
        <tr>
            <td><button type="button" class="btn btn-primary"  pull-right>button</button></td>
        </tr>
       </tr>
        
       </MDBTableHead>
    
    <MDBTableHead dark>
      <tr>
        <th scope='col'>S NO.</th>
        <th scope='col'>STORE NAME</th>
        <th scope='col'>TERMINAL</th>
        <th scope='col'>SECTOR</th>
        <th scope='col'>MOVEMENT TYPE</th>
        <th scope='col'>LAST UPDATE</th>
        <th scope='col'>CONTACT PERSON</th>
        <th scope='col'>DETAIL</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <th scope='row'>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope='row'>2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope='row'>3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </MDBTableBody>
  </MDBTable>
  </Container>
  </main>
  <Footer />
  </>  );
}

export default App;
