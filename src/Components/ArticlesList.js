import React, { Component } from 'react';
import '../App.css';

class ArticlesList extends Component {
    render() {
        return (
            <div className="newsColumn">
                <h2>{this.props.title}</h2>
                <h2 className="secondHeader">Навальный</h2>
                <div className="newsItem">

                    <div className="picture"><img src="../img/facebook.png" width="81px" height="81px"/></div>
                    <div className="text">fhjds fkjdk gkfjd gfdjg gkrjgerj rejior rjgggjdfkljgdf fkdjglkrej serkljg lsrek</div>
                    <span className="arrow-down"></span>
                </div>
            </div>
        );
    }
}

export default ArticlesList;
