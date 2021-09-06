import React from 'react';
import {Grid} from '@material-ui/core';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import PORTFOLIO_SITE_IMG from '../../assets/images/portfolio_site.png';
import SIMPLE_PDF_VIEWER_IMG from '../../assets/images/simple_pdf_viewer.png';
import SAMPLE_WEBPAGE1_IMG from '../../assets/images/sample-webpage1.png';
import SAMPLE_WEDDING_OP1_IMG from '../../assets/images/wedding-op1.png';

import './Create.scss';


const Create:React.FC = () => {
    return (
        <div className="create-page">
            <p className="create-top">Create</p>
            <p className="create-intro">作ったものの一覧です。少しづつ更新しています。</p>
            <Grid container className="create-container"  justify="center">

                <Grid item container xs={12} md={4}  sm={6} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"ポートフォリオサイト"} 
                    message={"Reactで作成。制作物や僕自身について紹介しています。少しづつ更新中。"} 
                    img_path={PORTFOLIO_SITE_IMG} 
                    github_url="https://github.com/MSK0303/portfolio" 
                    height={300} 
                    width={310} />
                </Grid>
                <Grid item container xs={12} md={4} sm={6} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"simple-pdf-viewer"} 
                    message={"Electronで作成。シンプルなPDFビュワー。自分が欲しい機能があれば更新しています。"} 
                    img_path={SIMPLE_PDF_VIEWER_IMG} 
                    github_url="https://github.com/MSK0303/simple-pdf-viewer" 
                    height={300} 
                    width={320} />
                </Grid>
                <Grid item container xs={12} md={4} sm={6} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"Webサイト1"} 
                    message={"HTML・CSS(SASS)・Javascriptで作成。デザインはクリスタ(https://crestadesign.org/)から使わせてもらいました。"} 
                    img_path={SAMPLE_WEBPAGE1_IMG} 
                    github_url="https://mcgex.net/webpage-sample1/public/index.html" 
                    height={300} 
                    width={320} />
                </Grid>
                <Grid item container xs={12} md={4} sm={6} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"結婚式オープニング動画"} 
                    message={"Premiere ProとAfter Effectsで作成。素材はぱくたそとDOVA-SYNDROMから使わせてもらいました。"} 
                    img_path={SAMPLE_WEDDING_OP1_IMG} 
                    github_url="https://youtu.be/vX-fehBM1b4" 
                    height={300} 
                    width={320} />
                </Grid>
                {/* <Grid item container xs={12} md={4} sm={6} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"Webサイト2"} 
                    message={"HTML・CSS(SASS)・Javascriptで作成。こちらもクリスタ(https://crestadesign.org/)から使わせてもらいました。"} 
                    img_path={PORTFOLIO_SITE_IMG} 
                    github_url="#" 
                    height={300} 
                    width={320} />
                </Grid> */}
            </Grid>
            <Footer />
        </div>
    )
}

export default Create;
