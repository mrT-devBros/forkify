import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    
    async getResults() {
    
        // the URL: https://forkify-api.herokuapp.com/api/search?q=pizza
        // const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?key=${key}&q=${query}`);
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
}




