import React from 'react'
import Footer from '../Footer/Footer';
import {Grid} from '@material-ui/core';
import MyIcon from '../Parts/MyIcon';
import './About.scss';

const About = () => {

    const message_table = [
        '名前  : MSK',
        '出身  : 九州',
        '性別  : 男性',
        '年齢  : 30代',
        '資格  : 博士(数理学) , 中学・高校教員免許(数学) , 簿記3級',
        '        Python3 認定基礎試験',
        'スキル: C/C++ , C# , Java , Python , HTML , CSS , JavaScript , React',
    ];


    return (
        <div className="about-page">
            <p className="about-top">About</p>
            <Grid container>
                <Grid container item sm={1} xs={1}  spacing={2} >
                </Grid>
                <Grid container item sm={2} xs={8} spacing={2} className="grid-left">
                    <div className="about-icon">
                        <MyIcon />
                    </div>
                </Grid>
                <Grid container item sm={1} xs={1} spacing={2} >

                </Grid>
                <Grid container item sm={8} xs={12} spacing={2} className="grid-right">
                    <ul className="about-ul">
                        {
                            message_table.map((item,id) => (
                                <li key={id} className="about-li">{item}</li>
                            ))
                        }
                    </ul>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default About;
