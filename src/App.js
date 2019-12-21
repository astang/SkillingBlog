import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import './App.css';
import BlogPost from './components/Layout/BlogPost';
import blogPostJsonList from './components/contentBlogPost/BlogPosts';

export default class App extends React.Component {
  
  constructor() {
    super();
    let i = 0;
    let blogPostArray = [];

    for ( i; i < blogPostJsonList.size ; i += 1 ) {
      blogPostArray.push(blogPostJsonList[i]);
    }

    this.state = {
      blogPosts: blogPostJsonList
    }
  }

  render() {
    
  let blogPosts = this.state.blogPosts.map(post => {
    return (
      <Col className="p-3" sm="4">
          <BlogPost post={post} />
      </Col>
    )
  })

    return (
      <div>
       <Jumbotron>
          <h1 className="display-3">Mabels Skilling Progress</h1>
          <p className="lead">follow my skilling progress goals </p>
          <hr className="my-2" />
          <p>Level up!</p>
          <text />
          <p className="lead">
          </p>
        </Jumbotron>

        <Container fluid>
          <Row>
          {blogPosts}
          </Row>
        </Container>

      </div>
    );
  }


};