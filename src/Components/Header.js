import React, { Component } from 'react';
import { observer } from 'mobx-react';
import searchStore from '../Stores/Search';

@observer
class Header extends Component {
    state = {
        searchText: ''
    };

    submitHandler(event) {
        event.preventDefault();
        searchStore.setSearch(this.state.searchText);
    }

    render() {
        return (
            <div className="header">
                <div className="spinner-logo" />
                <h1>Spinner News</h1>
                <div className="search">
                    <form>
                        <input value={this.state.searchText} onChange={(event) => this.setState({searchText: event.target.value})} type="text"/>
                        <button onClick={(event) => this.submitHandler(event)}>Найти</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;
