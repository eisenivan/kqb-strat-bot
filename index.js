require('dotenv').config()
const Discord = require('discord.js')
const { getStrats } = require('./modules')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  console.log(msg.author.username, JSON.parse(process.env.USER_GREENLIST), JSON.parse(process.env.USER_GREENLIST).includes(msg.author.username))
  if (JSON.parse(process.env.USER_GREENLIST).includes(msg.author.username)) {
    console.log('whaaa?')
    const res = getStrats(msg, JSON.parse(process.env.STRATS))

    if (res) {
      msg.reply(res)
    }
  }
})

client.login(process.env.DEPLOY_KEY)
