// Description:
//   Script for showing the identity of the bot
//
// Commands:
//   hubot identify - As a good butler, I am required to identify myself when asked.
//
// Author:
//   chris@hashlab.com.br

module.exports = function identifyScript (robot) {
  return robot.respond(/identify/i, (res) => {
    res.send('I am Alfred Thaddeus Crane Pennyworth, mostly known for being the butler of Mr. Wayne aka Batman. Also, I am working for HashLab to help you guys reach your goals.')
  })
}
