import React, { Component } from 'react';
import { observer } from 'mobx-react';
import searchStore from '../Stores/Search';
import '../App.css';

@observer
class Filters extends Component {
    render() {
        if (searchStore.search === '') {
            return <div/>
        }

        return (
            <div className="filterColumn">
              <div className="filterItem">
              	<h2>Сортировка</h2>
                <form>
                  <p><input type="radio" name="true"/>Новые сверху</p>
                  <p><input type="radio" name="false"/>Старые сверху</p>
                </form>
              </div>
            </div>
        );
    }
}

export default Filters;