import React,{useState} from 'react'
import Footer from '../Footer/Footer';
import MyIcon from '../Parts/MyIcon';
import "./Home.scss";

const Top:React.FC = () => {
    const message_table = ["Engineer","Blogger","Soccer Coach"];
    const [index, setIndex] = useState(0);
    const message = message_table[index];

    // //timer処理
    setTimeout( () => {
        let new_index = index+1;
        if(new_index >= message_table.length) new_index = 0;
        setIndex(new_index);
        console.log("change");
    },5000);

    return (
        <div className="home-page">
            <div className="top" >
                <p className="top-label">Welcome to MSK's Portfolio Site</p>
            </div>
            <MyIcon />
            <p className="top-message">I'm <span className="role">{message}</span>.</p>
            <Footer />
        </div>
    )
}

export default Top;
