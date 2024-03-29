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

const SidebarCategories = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1" value="Sneaker">
            Sneaker
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="Sandal">
            Sandal
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="Giày lười">
            Giày lười
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="Giày công sở">
            Giày công sở
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="Giày bốt">
            Giày bốt
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="Dép">
            Dép
          </FormCheckbox>
        </ListGroupItem>

        <ListGroupItem className="d-flex px-3">
          <InputGroup className="ml-auto">
            <FormInput placeholder="Thêm loại giày" />
            <InputGroupAddon type="append">
              <Button theme="white" className="px-2">
                <i className="material-icons">add</i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Loại giày"
};

export default SidebarCategories;
