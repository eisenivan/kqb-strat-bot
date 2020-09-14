const stanitizeCommand = str => str.replace(/^!/, '')
const bold = str => `**${str}**`
const buildMapHeader = name => `${stanitizeCommand(name)}
======`
const buildTeamLine = row => `${row.name}; ${bold('queen')}: ${row.queen}; ${bold('mil')}: ${row.mil}; ${bold('flex')}: ${row.flex}; ${bold('objective')}: ${row.objective}`
const buildRoleLine = (row, role) => `${row.name}; ${bold(role)}: ${row[role]}`
const buildRoleSpecificOutput = (strats, role) => {
  const arr = []
  Object.keys(strats).map((x) => {
    arr.push('')
    arr.push(buildMapHeader(x))
    strats[x].forEach(y => arr.push(buildRoleLine(y, stanitizeCommand(role))))
  })

  return arr.join('\n')
}

function getStrats (msg, strats) {
  const map = strats[msg.content]
  if (typeof map !== 'undefined') {
    const arr = []
    arr.push(buildMapHeader(msg.content))
    map.forEach(x => arr.push(buildTeamLine(x)))

    return arr.join('\n')
  } else {
    // role specific
    switch (msg.content) {
      case '!queen':
        return buildRoleSpecificOutput(strats, msg.content)

      case '!mil':
        return buildRoleSpecificOutput(strats, msg.content)

      case '!flex':
        return buildRoleSpecificOutput(strats, msg.content)

      case '!objective':
        return buildRoleSpecificOutput(strats, msg.content)

      default:
        return false
    }
  }
}

exports.getStrats = getStrats
