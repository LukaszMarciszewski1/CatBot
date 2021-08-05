const fulfillment = require('dialogflow-fulfillment')
const { responses1, responses2 } = require('./responses')

const mixMessages = (data) => Math.floor(Math.random() * data.length)

module.exports.getMessages = (req, res) => {
  const agent = new fulfillment.WebhookClient({
    request: req,
    response: res,
  })

  function welcome1(agent) {
    agent.add(responses1[mixMessages(responses1)])
  }

  function welcome2(agent) {
    agent.add(responses2[mixMessages(responses2)])
  }

  function fallback(agent) {
    agent.add(
      `Nie rozumiem co mówisz. Jestem tylko CatBotem. Możesz powtórzyć?`
    )
  }

  let intentMap = new Map()
  intentMap.set('Welcome1', welcome1)
  intentMap.set('Welcome2', welcome2)
  intentMap.set('Default Fallback Intent', fallback)

  agent.handleRequest(intentMap)
}
