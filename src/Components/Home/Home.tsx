import React,{useState} from 'react'
import Footer from '../Footer/Footer';
import MyIcon from '../Parts/MyIcon';
import "./Home.scss";
//animation
import {useTransition,animated,config} from 'react-spring';

const Top:React.FC = () => {
    const message_table = ["Engineer","Blogger","Video Creator","Soccer Coach"];
    const [index, setIndex] = useState(0);

    const transitions = useTransition(index,{
        from: {opacity:0},
        enter:{opacity:1},
        leave:{opacity:0},
        delay: 200,
        config: config.molasses,
        onRest: () => setIndex((index+1)%message_table.length),
    });

    return (
        <div className="home-page">
            <div className="top" >
                <p className="top-label">Welcome to MSK's Portfolio Site</p>
            </div>
            <MyIcon />
            <p className="top-message">I'm <span className="role">{transitions(({opacity},item) => (
                <animated.div style={{
                    display: "inline-block",
                    position: "absolute",
                    opacity: opacity.to({range:[0.0,1.0],output:[0,1]}),
                }}>
                    {message_table[item]}
                </animated.div>
            ))}</span></p>
            <Footer />
        </div>
    )
}

export default Top;
