import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../App.css';

@observer
class Filters extends Component {


    render() {
        return (
            <div className="filterColumn">
              <div className="filterItem">
              	<h2>Новостные порталы</h2>
              	<p><input type="radio" name="Имя издателя или чего либо">Lenta.ru</p>
              </div>
              <div className="filterItem">
              	<h2>Новостные порталы</h2>
              	<p><input type="radio" name="Имя издателя или чего либо">Lenta.ru</p>
              </div>
            </div>
        );
    }
}

export default Filters;