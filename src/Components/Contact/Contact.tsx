import React,{useState} from 'react';
import Footer from '../Footer/Footer';
import {Grid,TextField} from '@material-ui/core';
import './Contact.scss';

const Contact:React.FC = () => {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");


    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeMail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value);
    }
    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const onChangeMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("push submit");
    }

    return (
        <div className="contact-page">
            <p className="contact-top">Contact</p>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={8}>
                    <form onSubmit={onSubmit}>
                        <TextField className="contact-name" type="text" required label="氏名(必須)" fullWidth margin="normal" onChange={onChangeName} value={name} InputProps={{disableUnderline: true}}/>
                        <TextField className="contact-mail" type="text" required label="メールアドレス(必須)" fullWidth margin="normal" onChange={onChangeMail} value={mail} InputProps={{disableUnderline: true}}/>
                        <TextField className="contact-title" type="text" label="件名" fullWidth margin="normal" onChange={onChangeTitle} value={title} InputProps={{disableUnderline: true}}/>
                        <TextField className="contact-message" type="text" required label="お問い合わせ内容(必須)" fullWidth margin="normal" onChange={onChangeMessage} value={message} InputProps={{disableUnderline: true}}/>
                        <input className="contact-submit" type="submit"/>
                    </form>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact
