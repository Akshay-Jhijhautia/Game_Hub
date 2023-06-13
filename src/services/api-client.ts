import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '2940191829244e92ac875150777a4c46'
    }
})

