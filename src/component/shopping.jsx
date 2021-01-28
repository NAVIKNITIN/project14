import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Items extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[{
                id:1,
                name:'Item 1'
            },
            {
                id:2,
                name:'Item 2'
            },
            {
                id:3,
                name:'Item 3'
            }]
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>Shopping items</h1>
                {
                    this.state.item.map((data)=>{
                        return(
                            <ul  key={data.id}>
                            <li>
                                <Link to={`/items/${data.id}`}>
                                    {data.name}
                                </Link>
                            </li>
                        </ul>
                        )
                        
                    })
                }
            </React.Fragment>
            


        )
    }
};
export default Items;
