import { observable } from 'mobx';
import rp from 'request-promise';

class Search  {
    @observable search;
    @observable searchResult;
    @observable changedMedia;

    constructor() {
        this.search = '';
        this.searchResult = {
            kloop: [],
            zanoza: [],
            cnn: [],
            lenta: []
        };

        this.changedMedia = [
            'kloop',
            'zanoza',
            'cnn',
            'lenta'
        ]
    }

    isChangedMedia(name) {
        return this.changedMedia.includes(name);
    }

    changeChecked(name) {
        if (this.changedMedia.includes(name)) {
            this.changedMedia = this.changedMedia.filter(e => e !== name);
        } else {
            this.changedMedia.push(name);
        }
    }

    getArticles(text) {
        const options = {
            method: 'POST',
            uri: 'http://localhost:3032/addRequests',
            body: {
                input: text
            },
            json: true
        };

        this.searchResult = {
            kloop: [],
            zanoza: [],
            cnn: [],
            lenta: []
        };

        return rp(options)
            .then((json) => {
                this.searchResult = json;
            })
            .catch((err) => {
                console.log(err);
            });

    }

    setSearch(text) {
        this.search = text;

        return this.getArticles(text);
    }

}

const search = new Search ();

export default search;
export { Search  };
