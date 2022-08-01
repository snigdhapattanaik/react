import React from "react";
import { Container, Row, Col} from 'react-bootstrap'
import { MDBFooter } from 'mdb-react-ui-kit';
const Footer = () => {
return(
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright &copy; 2006-2020 GrayMatter Software Services All rights reserved. 
    </div>
  </MDBFooter>
)
}
export default Footer