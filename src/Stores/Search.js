import { observable } from 'mobx';

class Search  {
    @observable search;

    constructor() {
        this.search = '';
    }

    setSearch(text) {
        this.search = text;
    }

}

const search = new Search ();

export default search;
export { Search  };
