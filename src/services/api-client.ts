import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
   params   : {
    key:"b04f326d13134ea484696ae725efac9c"
    }
});