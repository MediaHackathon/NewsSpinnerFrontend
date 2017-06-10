import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import '../App.css';

class Page extends Component {
    render() {
        return (
            <div className="news-container">
				<ArticlesList title="CNN"/>
				<ArticlesList title="Kloop"/>
				<ArticlesList title="Lenta.ru"/>
				<ArticlesList title="Zanoza"/>
            </div>
        );
    }
}

export default Page;
