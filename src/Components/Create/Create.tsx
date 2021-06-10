import React from 'react';
import {Grid} from '@material-ui/core';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import PORTFOLIO_SITE_IMG from '../../assets/images/portfolio_site.png';
import SIMPLE_PDF_VIEWER_IMG from '../../assets/images/simple_pdf_viewer.png';

import './Create.scss';


const Create:React.FC = () => {
    return (
        <div className="create-page">
            <p className="create-top">Create</p>
            <Grid container className="create-container"  justify="center">
                <Grid item container xs={3} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"ポートフォリオサイト"} 
                    message={"Reactで作成。制作物の紹介や制作活動についてのブログを書いています。少しづつ更新中。"} 
                    img_path={PORTFOLIO_SITE_IMG} 
                    github_url="https://github.com/MSK0303/portfolio" 
                    height={300} 
                    width={320} />
                </Grid>
                <Grid item container xs={3} spacing={1} className="create-grid-item" justify="center">
                    <ProductCard 
                    title={"simple-pdf-viewer"} 
                    message={"Electronで作成。シンプルなPDFビュワー。自分が欲しい機能があれば更新しています。"} 
                    img_path={SIMPLE_PDF_VIEWER_IMG} 
                    github_url="https://github.com/MSK0303/simple-pdf-viewer" 
                    height={300} 
                    width={320} />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Create;
