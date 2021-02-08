import axios from 'axios';

export class SyncService {
    constructor(url, queryParams) {
        this.url = url;
        this.queryParams = queryParams;
        this.configurationData = {};
    }

    async postFetchConfigurations(url = this.url, params = this.queryParams) {
        const { data, status } = await axios({
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            params,
            url,
        });
        if (status === 200) {
            this.configurationState = data;
            return true;
        } else {
            console.log(`Status code ${status} was given`)
            return false;
        }
    }
}