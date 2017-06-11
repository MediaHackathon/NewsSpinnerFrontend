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
              	<h2>Новостные порталы</h2>
              	<form>
                  <p><input type="checkbox" onChange={() => searchStore.changeChecked('cnn')} value="cnn" checked={searchStore.isChangedMedia('cnn')} />CNN</p>
                  <p><input type="checkbox" onChange={() => searchStore.changeChecked('kloop')} value="kloop" checked={searchStore.isChangedMedia('kloop')} />Kloop</p>
                  <p><input type="checkbox" onChange={() => searchStore.changeChecked('lenta')} value="lenta" checked={searchStore.isChangedMedia('lenta')} />Lenta</p>
                  <p><input type="checkbox" onChange={() => searchStore.changeChecked('zanoza')} value="zanoza" checked={searchStore.isChangedMedia('zanoza')} />Zanoza</p>
                </form>
              </div>
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