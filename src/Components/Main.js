import React, {Component} from 'react';
import searchStore from '../Stores/Search';
import Header from './Header';
import Page from './Page';
import { observer } from 'mobx-react';

import '../App.css';

@observer
class Main extends Component {
    render() {
        const className = searchStore.search === '' ? 'main' : 'top';
        return (
            <div className={className}>
                <Header/>
                <Page/>
            </div>
        );
    }
}

export default Main;
