import React, { useState } from 'react';
import {GROCERIES} from '../shared/grocery';
import SearchBar from './searchbar'
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

import {Link} from 'react-router-dom'

import baseurl from '../baseurl'

function RenderItem ({item}) {
    const a1=`items?category=${item.category}?subcategory=${item.subcategory}name=${item.name}`
    return(
        <a href={a1}>
        <Card className='cat-card'>
            <CardImg className='img' width='100%' src={item.image} alt={item.name}></CardImg>
            <CardBody>
            <CardText className='card-text'><strong>{item.name}</strong></CardText>
            </CardBody>
        </Card></a>
       
    );
}

const Groceries = () => {
    const groceries = GROCERIES.map((item) => {
       
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
                                    <img  className='images' src={`${process.env.PUBLIC_URL}/images/category1.jpg`} alt='groceries'/>
                                </div>
                                <div className='col-7 col-sm-9 '>
                                    <h2>Groceries and Staples</h2>
                                </div>
                            </div>
                        </div>

            </header>
            
            <div className='container card-container'>
                <div className='row '>
                
                {groceries}
            
                

                </div>
            </div>
           </div>
     </>              
    )
}

export default Groceries