import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../App.css';

@observer
class ArticlesList extends Component {

    constructor(props) {
        super(props);
    }

    article(data) {
        console.log(data);
        return (
            <div>
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
        return (
            <div className="newsColumn">
                <h2>{this.props.title}</h2>

                {this.article({ title: 'asdasdasd' })}
            </div>
        );
    }
}

export default ArticlesList;
