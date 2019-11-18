/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/balenciaga.jpg"),
          category: "Sneaker",
          categoryTheme: "dark",
          title: "Balenciga triple S Trainer Vàng Xanh Nam, Nữ",
          body:
            "2.050.000đ",
        },
        {
          backgroundImage: require("../images/content-management/vans.jpg"),
          category: "Sneaker",
          categoryTheme: "info",
          title: "Vans - lựa chọn của giới trẻ, phong cách trẻ trung",
          body:
            "600.000đ"
        },
        {
          backgroundImage: require("../images/content-management/LV.jpg"),
          category: "Giày Lười",
          categoryTheme: "royal-blue",
          title: "Giày lười Louis-Vuitton kiểu dáng sang trọng",
          body:
            "1.950.000đ"
        },
        {
          backgroundImage: require("../images/content-management/sandal.jpg"),
          category: "Sandal",
          categoryTheme: "warning",
          title: "Giày Sandal nam quai dù cap cấp Latoma TA055",
          body:
            "360.000đ"
        }
      ] 
    };
  }

  render() {
    const {
      PostsListOne
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Danh Sách Sản Phẩm" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Second Row of Posts */}
      </Container>
    );
  }
}

export default BlogPosts;
