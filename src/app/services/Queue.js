// Importa as configuração do servidor Regis
// e pega a key e o handle do PurchaseMail
const kue = require('kue')
const redisConfig = require('../../config/redis')
const jobs = require('../jobs')

const Queue = kue.createQueue({ redis: redisConfig })
Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

module.exports = Queue
