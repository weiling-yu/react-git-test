import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);    
    }

    renderDish(dish){
        if (dish !== null){
            return(
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    renderComments(comment){
            return(
                <div key={comment.id}>
                    <header><h4>Comments</h4></header>
                    <ul className='list-unstyled'>
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {comment.date}</li>
                    </ul>
                </div>
            );
    }

    render() {
        if (!this.props.dish) return (<div></div>);

        const comment = this.props.dish.comments.map((comment)=>{
            return(
                <div key={comment.id}>
                    {this.renderComments(comment)}
                </div>
            )
        });
        
        return(
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                        {comment}
                </div>
            </div>
        )
    }
}

export default DishDetail;