import React, {Component} from 'react';
import searchStore from '../Stores/Search';
import Header from './Header';
import { observer } from 'mobx-react';

import '../App.css';

@observer
class Main extends Component {
    render() {
        const className = searchStore.search === '' ? 'main' : 'top';
        return (
            <div className={className}>
                <Header/>
            </div>
        );
    }
}

export default Main;
