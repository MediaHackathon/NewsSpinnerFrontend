import React, { Component } from 'react';
import searchStore from '../Stores/Search';
import { observer } from 'mobx-react';
import '../App.css';

@observer
class Publishers extends Component {
    render() {
        if (searchStore.search === '') {
            return <div/>
        }

        return (
            <div className="publishers">
                <ul>
                    { searchStore.choosedMedia.map((media, index) => 
                        <li key={index}
                            className={searchStore.isChangedMedia(media) ? 'choosen' : ''}
                            onClick={() => searchStore.setChangedMedia(media)}>
                            {searchStore.getMediaName(media)}
                        </li>
                    ) }
                    <li className="plus">+</li>
                </ul>
            </div>
        );
    }
}

export default Publishers;