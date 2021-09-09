import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './WorkCard.scss';

import {WORK_CARD_INFO} from '../common';

const WorkCard = (props:WORK_CARD_INFO) => {
    
    const style = {
        height: props.height,
        width: props.width,
        maxWidth:400
    };

    const img_height = props.height*0.6;
    const img_width = props.width*0.6;

    return (
        <div className="work-card-top">
            <Card style={style}>
                <img src={props.img_path} alt="アイコン" style={{marginTop:20,marginBottom:20}}/>
                {/* <CardMedia image={props.img_path} title={props.title} style={{width:props.width,height:img_height,margin:'auto'}}/> */}
                <CardContent>
                    <Typography variant="h5" component="div" style={{marginBottom:20}}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {props.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default WorkCard
