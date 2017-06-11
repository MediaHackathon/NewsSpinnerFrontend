import React, { Component } from 'react';
import { observer } from 'mobx-react';
import searchStore from '../Stores/Search';
import '../App.css';

@observer
class ArticlesList extends Component {

    // state = {
    //     data: []
    // };

    constructor(props) {
        super(props);
    }

    article(data, index) {
        return (
            <div key={index} className="article">
                <h2 className="articleHeader" onClick={() => window.location.href = data.url}>{data.title}</h2>
                <div className="articleItem">
                    { data.timestamp && <div className="date">{data.timestamp}</div> }
                    { data.picture && <div className="picture"><img src={data.picture} width="81px" height="81px"/></div> }
                    { data.text && <div className="text">{data.text}</div> }
                </div>
            </div>
        );
    }

    render() {
        if (this.props.data.length === 0) {
            return <div/>
        }

        return (
            <div className="newsColumn">
                <h2 className="mainTitle">{this.props.title}</h2>

                {this.props.data.map(this.article)}
            </div>
        );
    }
}

export default ArticlesList;
