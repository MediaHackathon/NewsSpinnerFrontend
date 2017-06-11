import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import searchStore from '../Stores/Search';
import { observer } from 'mobx-react';
import '../App.css';

import { Carousel } from 'react-responsive-carousel';

@observer
class Articles extends Component {
    render() {
        return (
            <Carousel showArrows={true} className="news-container">
				<div><ArticlesList title="CNN" data={searchStore.searchResult.cnn} /></div>
				<div><ArticlesList title="Kloop" data={searchStore.searchResult.kloop} /></div>
				<div><ArticlesList title="Lenta.ru" data={searchStore.searchResult.lenta} /></div>
				<div><ArticlesList title="Zanoza" data={searchStore.searchResult.zanoza} /></div>
            </Carousel>
        );
    }
}

export default Articles;
