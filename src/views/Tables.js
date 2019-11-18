import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Danh Sách Khách Hàng" className="text-sm-left" />
    </Row>
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    ID
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Role
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>User</td>
                  <td>abc@gmail.com</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>User</td>
                  <td>cdf@gmail.com</td>
                  <td>1-660-850-1647</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>User</td>
                  <td>hello@gmail.com</td>
                  <td>214-4225</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>Angela</td>
                  <td>Admin</td>
                  <td>cuccu@gmail.com</td>
                  <td>1-848-473-7416</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Dang</td>
                  <td>Nguyen</td>
                  <td>Admin</td>
                  <td>abc@gmail.com</td>
                  <td>0935238750</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>David</td>
                  <td>Beckham</td>
                  <td>User</td>
                  <td>abc@gmail.com</td>
                  <td>107-035982</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Cristiano</td>
                  <td>Ronaldo</td>
                  <td>Admin</td>
                  <td>abc343ded@gmail.com</td>
                  <td>0935413770</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Lionel</td>
                  <td>Messi</td>
                  <td>User</td>
                  <td>opsekec@gmail.com</td>
                  <td>107-0339-96-85</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
