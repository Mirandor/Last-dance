import React from "react";
import "./style.css";
import {
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

function ViewMoreBtn(){
  return (
  
    <Button className="btn see-details" size="md"  >
      <Link to="/FullDetails">
      View Full Details
    </Link>
  </Button>

  )
}

export default ViewMoreBtn; 