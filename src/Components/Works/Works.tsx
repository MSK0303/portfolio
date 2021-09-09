import React from 'react'
import Footer from '../Footer/Footer';
import {Grid} from '@material-ui/core';
import WorkCard from '../WorkCard/WorkCard';
import './Works.scss';
import ENGINEER_PC_IMG from '../../assets/images/eng-pc.png';
import WEB_CREATE_IMG from '../../assets/images/web-create.png';
import MOVIE_CREATE_IMG from '../../assets/images/movie-create.png';
import OTHER_IMG from '../../assets/images/other.png';


const Works:React.FC = () => {
    return (
        <div className="works-page">
            <p className="works-top">Work</p>
            <Grid container className="work-container" justify="center">
                <Grid container item xs={12} lg={3}  md={6} className="works-item" justify="center">
                    <WorkCard
                        title={"エンジニア案件"} 
                        message={"組み込み系開発(C言語)、ツール開発(Python,Go,Rust,C#)、簡単なフロントエンド開発(React)に対応致します。本職がありますので、基本的にリモートでの対応になります。"} 
                        img_path={ENGINEER_PC_IMG} 
                        height={400}
                        width={310} />
                </Grid>
                <Grid container item xs={12} lg={3}  md={6} className="works-item" justify="center">
                    <WorkCard
                        title={"Web制作"} 
                        message={"HTML/CSS、JavaScriptを使ったサイトを作成致します。React.jsやNext.jsにも対応可能です。"} 
                        img_path={WEB_CREATE_IMG} 
                        height={400}
                        width={310} />
                </Grid>
                <Grid container item xs={12} lg={3}  md={6} className="works-item" justify="center">
                    <WorkCard
                        title={"動画編集"} 
                        message={"Premiere ProとAfter Effectsを使った動画編集に対応致します。YouTubeや結婚式などのお祝い事の動画を作成致します。"} 
                        img_path={MOVIE_CREATE_IMG} 
                        height={400}
                        width={310} />
                </Grid>
                <Grid container item xs={12} lg={3}  md={6} className="works-item" justify="center">
                    <WorkCard
                        title={"その他"} 
                        message={"その他にも、プログラミング学習のメンタリングや技術系の記事のライティングにも対応致します。"} 
                        img_path={OTHER_IMG} 
                        height={400}
                        width={310} />
                </Grid>
            </Grid>
            <div className="work-message">
                <p className="work-message-contact">お仕事の依頼やご相談などは問い合わせフォームからお気軽にお問い合わせください。</p>
                <p className="work-message-coconara"><a href="https://coconala.com/users/1772888">ココナラ</a>でもお仕事お受けしています。</p>
            </div>
            <Footer />
        </div>
    )
}

export default Works
