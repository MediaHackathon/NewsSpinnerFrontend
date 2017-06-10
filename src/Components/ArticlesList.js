import React, { Component } from 'react';
import '../App.css';

class ArticlesList extends Component {

    constructor(props) {
        super(props);
    }

    article(data, index) {
        return (
            <div key={index}>
                <h2 className="secondHeader">{data.title}</h2>
                <div className="newsItem">

                    <div className="picture"><img src="../img/facebook.png" width="81px" height="81px"/></div>
                    <div className="text">fhjds fkjdk gkfjd gfdjg gkrjgerj rejior rjgggjdfkljgdf fkdjglkrej serkljg lsrek</div>
                    <span className="arrow-down"></span>
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
                <h2>{this.props.title}</h2>

                {this.props.data.map(this.article)}
            </div>
        );
    }
}

export default ArticlesList;
