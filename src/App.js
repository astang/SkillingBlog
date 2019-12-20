import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import './App.css';
import BlogPost from './components/BlogPost';
import dataReact from './components/contentBlogPost/react/GettingStartedWithReact';
import dataExtjs from './components/contentBlogPost/extJs/GettingStartedWithExtjs';
import dataJava from './components/contentBlogPost/java/GettingStartedWithJava';
import dataArduino from './components/contentBlogPost/arduino/GettingStartedWithArduino';

export default class App extends React.Component {
  
  constructor() {
    super();
    let blogPostReact = dataReact.blogPost;
    let blogPostExtJs = dataExtjs.blogPost;
    let blogPostJava = dataJava.blogPost;
    let blogPostArduino = dataArduino.blogPost;

    this.state = {
      blogPosts: [
        {
          topic: blogPostReact.topic,
          content: blogPostReact.content
        },
        {
          topic: blogPostExtJs.topic,
          content: blogPostExtJs.content
        },
        {
          topic: blogPostJava.topic,
          content: blogPostJava.content
        },
        {
          topic: blogPostArduino.topic,
          content: blogPostArduino.content
        }
      ]
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