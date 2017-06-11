import { observable } from 'mobx';
import rp from 'request-promise';

class Search  {
    @observable search;
    @observable searchResult;
    @observable choosedMedia;
    @observable selectedMedia;
    @observable mediaSort;

    constructor() {
        this.search = '';
        this.searchResult = {
            kloop: [],
            zanoza: [],
            cnn: [],
            lenta: []
        };

        this.selectedMedia = 'zanoza';

        this.choosedMedia = [
            'zanoza',
            'cnn',
            'lenta',
            'kloop'
        ];

        this.mediaSort = true;
    }

    getMediaName(key) {
        const mediaList = {
            'kloop': 'Kloop.kg',
            'zanoza': 'Zanoza',
            'cnn': 'CNN',
            'lenta': 'Lenta'
        };

        return mediaList.hasOwnProperty(key) ? mediaList[key] : 'Error';
    }

    isChangedMedia(name) {
        return this.selectedMedia === name;
    }

    setChangedMedia(name) {
        return this.selectedMedia = name;
    }

    changeChecked(name) {
        this.choosedMedia = this.choosedMedia.includes(name) ? name : false;
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
