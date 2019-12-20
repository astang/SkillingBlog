import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Fade
} from 'reactstrap';

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
      }

    render() {
        let { topic, content } = this.props.post;

        return (
            <div>
                <Card>
                    <CardBody>
                    <CardTitle>{topic}</CardTitle>
                        <Button color="primary" onClick={this.toggle}>View blog post</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{content}</CardText>
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        );
    }

    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
};