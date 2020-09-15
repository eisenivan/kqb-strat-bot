require('dotenv').config()
const Discord = require('discord.js')
const { getStrats } = require('./modules')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (process.env.USER_GREENLIST.split(',').includes(msg.author.username)) {
    const res = getStrats(msg, JSON.parse(process.env.STRATS))

    if (res) {
      msg.reply(res)
    }
  }
})

client.login(process.env.DEPLOY_KEY)
