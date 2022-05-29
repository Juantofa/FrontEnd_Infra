import axios from 'axios'

const DATA_REST_API_URL = "http://localhost:9000/";

class DataService {
    getLibros() {
        return axios.get(DATA_REST_API_URL + "libro")
    }
    setLibros(data) {
        axios.post(DATA_REST_API_URL + "libro", data)
    }
    updateLibros(data) {
        axios.post(DATA_REST_API_URL + "libro", data)
    }
    deleteLibros(data) {
        axios.delete(DATA_REST_API_URL + "libro/" + data)
    }
    getAutores() {
        return axios.get(DATA_REST_API_URL + "autor")
    }
    getAutores() {
        return axios.get(DATA_REST_API_URL + "autor")
    }
}

export default new DataService();