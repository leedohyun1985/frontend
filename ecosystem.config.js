module.exports = {
  // pm2를 사용하기 위한 설정
  apps: [{
    name: 'frontend',
    exec_mode: 'cluster',
    instances: 'max', // Or a number of instances
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start'
  }]
}
