import React,{useState} from 'react';
import Footer from '../Footer/Footer';
import {Grid,TextField,Button} from '@material-ui/core';
import './Contact.scss';
import {init,sendForm,send} from 'emailjs-com';

const Contact:React.FC = () => {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [is_send, setIsSend] = useState(false);

    const sendEmail = () => {
        console.log("env.user_id , "+process.env.REACT_APP_PORTFOLIO_EMAILJS_USER_ID);
        
        const user_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_USER_ID;
        const service_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_SERVICE_ID;
        const template_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_TEMPLATE_ID;
        if((user_id != undefined) && (service_id != undefined) && (template_id != undefined))
        {

            init(user_id);

            const template_param = {
                to_name: name,
                title: title,
                email: mail,
                message: message
            };

            send(service_id,template_id,template_param).then(() => {
                setIsSend(true);
                setName("");
                setMail("");
                setMessage("");
                setTitle("");
                console.log("success to send email");
            })
        }
        
    }


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
        sendEmail();
    }

    const onClickBackBtn = () => {
        console.log("push back btn");
        setIsSend(!is_send);
    }

    return (!is_send) ? (
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
    ) : (
        <div className="thanks-page">
            <p className="thanks-top">Contact</p>
            <Grid container alignItems="center" justify="center">
                <Grid  item md={8} xs={10} className="thanks-contents">
                    <h2>お問い合わせありがとうございます</h2>
                    <p>ご記入頂いた情報は無事に送信されました。</p>
                    <p>確認のため、自動返信メールをお送りしております。</p>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} xs={10} >
                <Button className="thanks-btn" onClick={onClickBackBtn}>戻る</Button>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact
