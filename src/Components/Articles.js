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
            <div>
                { searchStore.isChangedMedia('cnn') && <ArticlesList title="CNN" data={searchStore.searchResult.cnn} /> }
				{ searchStore.isChangedMedia('kloop') && <ArticlesList title="Kloop" data={searchStore.searchResult.kloop} /> }
				{ searchStore.isChangedMedia('lenta') && <ArticlesList title="Lenta.ru" data={searchStore.searchResult.lenta} /> }
				{ searchStore.isChangedMedia('zanoza') && <ArticlesList title="Zanoza" data={searchStore.searchResult.zanoza} /> }
            </div>
        );
    }
}

export default Articles;
