import config from '../config/index'

const {host} = config

export default [
  {
    name: 'auth',
    url: `${host.domain}auth`
  },
]
