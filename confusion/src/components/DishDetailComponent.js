import React from 'react';
// Card, CardImg, CardText, CardBody, CardTitle,
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
    if (dish == null) {
        return (<div></div>)
    }
    // const dishItem = RenderDish(dish)
    console.log(dish)
    // const commentItem = RenderComments(dish.comments)
    return (
        <div className='row'>
            <img src={dish.image} height="100%" width="100%" alt={dish.name} />
            {/* {commentItem} */}
        </div>
    )
}

function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>

        </div>
    )
}

const DishDetail = (props) => {
    if (props != null) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}



export default DishDetail