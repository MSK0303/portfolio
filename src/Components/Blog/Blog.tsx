import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Footer from '../Footer/Footer';
import './Blog.scss'
import mds from './data.json';
import Article from '../Article/Article';

const Blog:React.FC = () => {
    //react-markdownの機能を使ってmarkdownからページを生成
    const blogs = mds.map((md) => {
        return (
            <Route key={md} path={`./blogs/${md}`}>
                {console.log(md)}
                <Article path={`/mds/${md}.md`} />
            </Route>
        )
    });

    //mdsを基にブログページへのリンクを作成
    const index = mds.map((md) => {
        <ListItem button component={Link} to={`/blogs/${md}`}>
            <ListItemText primary={md} />
        </ListItem>
    });

    console.log(blogs);
    console.log(index);
    
    return (
        <div className="blog-page">
            <p className="blog-top">Blog</p>
            <Article path="/mds/first.md" />
            {/* <Switch>
                {blogs}
                <Route>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {index}
                    </List>
                </Route>
            </Switch> */}
            <Footer />
        </div>
    );
}

export default Blog
