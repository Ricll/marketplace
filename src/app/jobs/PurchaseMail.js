// Configuração com dados para envio de email

const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return PurchaseMail
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"rick" <rick@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de Compras ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })
    return done()
  }
}

module.exports = new PurchaseMail()
