import React from 'react';
// import './Menu.css';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

    /* Function only return view. Two way to decalre functional component:
    1. function RenderMenuItem (props){} : 
    2. Props is object. if you know whats will be passing then can pass like below*/
    function RenderMenuItem ({dish, onClick}){
        return (
            <Card onClick={()=> onClick(dish.id)}>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}                   
                </div>
            </div>
        );
    }
export default Menu;