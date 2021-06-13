import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button,CardActionArea,CardActions} from '@material-ui/core';
import './ProductCard.scss';

import {PRODUCT_CARD_INFO} from '../common';

const ProductCard = (props:PRODUCT_CARD_INFO) => {
    
    const style = {
        height: props.height,
        width: props.width,
        maxWidth:320
    };

    const img_height = props.height*0.6;

    return (
        <div className="product-card-top">
            <Card style={style}>
                <CardActionArea href={props.github_url}>
                    <CardMedia image={props.img_path} title={props.title} style={{width:props.width,height:img_height}}/>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {props.message}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ProductCard
