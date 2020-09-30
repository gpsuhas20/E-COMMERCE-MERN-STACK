import React, { useState } from 'react';
import {BEVERAGES} from '../shared/beverage';
import SearchBar from './searchbar'
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import {Link} from 'react-router-dom'
import baseurl from '../baseurl'
function RenderItem ({item}) {
    const a1=`items?category=${item.category}?subcategory=${item.subcategory}name=${item.name}`
    return(
        <a href={a1}>
        <Card className='card'>
            <CardImg className='img' width='100%' src={item.image} alt={item.name}></CardImg>
            <CardBody>
            <CardText className='card-text'><strong>{item.name}</strong></CardText>
            </CardBody>
        </Card></a>
       
    );
}

const Beverages = () => {
    const beverages = BEVERAGES.map((item) => {
       
        return(
            <div key={item.id} className='col-12 col-sm-4 p-2'>
                <RenderItem item={item}/>
            </div>
        )
        
    });

    return(
        <>
       <SearchBar back={'/home'}/>
           <div style={{backgroundColor : '#EEEEEE'}}>
            <header className='jumbotron'>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-5 col-sm-3'>
                                    <img  className='images' src={`${process.env.PUBLIC_URL}/images/category2.jpg`} alt='groceries'/>
                                </div>
                                <div className='col-7 col-sm-9 '>
                                    <h2>Beverages and Health Drinks</h2>
                                </div>
                            </div>
                        </div>

            </header>
            
            <div className='container card-container'>
                <div className='row '>
                
                {beverages}
            
                

                </div>
            </div>
           </div>
           </>        
    )
}

export default Beverages