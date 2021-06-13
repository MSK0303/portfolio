import React,{useState,useEffect} from 'react';
import {MARDDOWN_PATH} from '../common'
import ReactMarkdown from 'react-markdown';
import * as fs from 'fs';
//import Axios from 'axios';


const Article = (props:MARDDOWN_PATH) => {
    const [contents,setContents] = useState("");

    

    useEffect(() => {
        setContents("# Title\r\nFirst");
        console.log(props.path);
        // const fd_stream = fs.readFileSync(props.path,'utf-8')
        // console.log(fd_stream);
        // fs.readFile(props.path,"utf-8",(err,data) => {
        //     if(err)
        //     {
        //         setContents("ファイルを開けませんでした");
        //     }
        //     else
        //     {
        //         setContents(data);
        //     }
        // });
        //Axios(props.path).then(res => setContents(res.data));
    },[]);

    return (
        <ReactMarkdown >
            {contents}
        </ReactMarkdown>
    )
}

export default Article
