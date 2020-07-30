import React, {Component} from 'react';
// import './Menu.css';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            selectDish: null,
        }
        console.log('menu constructor is invoked');
        this.onDishSelect.bind(this);
    }
 
    onDishSelect(dish){
        this.setState({
            selectDish: dish
        });
    };
    
    
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}                   
                </div>
                <DishDetail dish={this.state.selectDish}/>
            </div>
        );
    }
} 

export default Menu;