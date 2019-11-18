import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";
const ShoeColor = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1">
            Red
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Green
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Blue
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Yellow
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Black
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            White
          </FormCheckbox>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

ShoeColor.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

ShoeColor.defaultProps = {
  title: "Màu Sắc"
};

export default ShoeColor;
