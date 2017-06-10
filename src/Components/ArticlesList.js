import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../App.css';


@observer
class ArticlesList extends Component {

    constructor(props) {
        super(props);
    }

    article(data, index) {
        return (
            <div key={index} className="article">
                <h2 className="articleHeader" onClick={() => window.location.href = data.url}>{data.title}</h2>
                <div className="articleItem">
                    { data.picture && <div className="picture"><img src={data.picture} width="81px" height="81px"/></div> }
                    { data.text && <div className="text">{data.text}</div> }
                    { data.text && <span className="arrow-down" /> }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="newsColumn">
                <h2>{this.props.title}</h2>

                {this.article({ title: 'asdasdasd' })}
            </div>
        );
    }
}

export default ArticlesList;
