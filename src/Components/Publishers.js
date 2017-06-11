import React, { Component } from 'react';
import searchStore from '../Stores/Search';
import { observer } from 'mobx-react';
import '../App.css';



@observer
class Publishers extends Component {
    render() {
        return (
            <div className="publishers">
                <ul>
                    <li>CNN</li>
                    <li >LENTA</li>
                    <li className="choosen">Kloop</li>
                </ul>
            </div>
        );
    }
}

export default Publishers;