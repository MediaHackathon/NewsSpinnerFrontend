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
                { searchStore.isChangedMedia('cnn') && <div><ArticlesList title="CNN" data={searchStore.searchResult.cnn} /></div> }
				{ searchStore.isChangedMedia('kloop') && <div><ArticlesList title="Kloop" data={searchStore.searchResult.kloop} /></div> }
				{ searchStore.isChangedMedia('lenta') && <div><ArticlesList title="Lenta.ru" data={searchStore.searchResult.lenta} /></div> }
				{ searchStore.isChangedMedia('zanoza') && <div><ArticlesList title="Zanoza" data={searchStore.searchResult.zanoza} /></div> }
            </Carousel>
        );
    }
}

export default Articles;
