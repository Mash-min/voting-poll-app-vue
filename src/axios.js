import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.baseURL = 'https://mm-voting-poll-app.herokuapp.com/'
axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')