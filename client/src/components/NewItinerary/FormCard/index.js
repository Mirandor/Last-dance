import React from 'react';
import ItineraryForm from "../FormGroup/index";
import FormHeading from "../FormHeader/index";
import { Card, Col, CardBody } from 'reactstrap';


const FormCard = (props) => {
  return (
    <Col sm="6">
      <Card>
        <FormHeading />
        <CardBody>
          <ItineraryForm />
        </CardBody>
      </Card>
    </Col>
  );
}

export default FormCard;