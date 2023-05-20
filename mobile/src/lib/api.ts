import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.98:3333',
  // colocar meu endereço de ip:3333
})
