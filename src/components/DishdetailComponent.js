import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

    
    function RenderDish({dish}){
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
        );
    }

    function RenderComments({comments}){
        if (comments == null){
            return <div></div>
        }
        else {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>{comment.auther}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'} ).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

    const DishDetail = (props) => {
        if (props.dish == null) return (<div></div>);      
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}/>
                </div>
            </div>
        )
    }


export default DishDetail;

// import React, { Component } from 'react';
// import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


// class DishDetail extends Component {

//   convertDateToCommentDateFormat(timestamp) {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
//   }

//   renderDish(dish) {
//     return (
//       <Card>
//         <CardImg top src={dish.image} alt={dish.name} />
//         <CardBody>
//           <CardTitle>{dish.name}</CardTitle>
//           <CardText>{dish.description}</CardText>
//         </CardBody>
//       </Card>
//     );
//   }

//   renderComments(comments) {
//     if (comments == null || comments.length === 0) {
//       return (
//         <div></div>
//       );
//     }

//     const renderedComments = comments.map((comment) => {
//       return (
//         <li>
//           <p>{comment.comment}</p>
//           <p>-- {comment.author}, {this.convertDateToCommentDateFormat(comment.date)}</p>
//         </li>
//       );
//     });

//     return (
//       <div>
//         <h4>Comments</h4>
//         <ul className="list-unstyled">
//           { renderedComments }
//         </ul>
//       </div>
//     );
//   }

//   render() {
//     if (this.props.dish != null) {
//       return (
//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             { this.renderDish(this.props.dish) }
//           </div>
//           <div className="col-12 col-md-5 m-1">
//             { this.renderComments(this.props.dish.comments) }
//           </div>
//         </div>
//       );
//     }
//     else {
//       return (
//         <div></div>
//       );
//     }
//   }

// }

// export default DishDetail;