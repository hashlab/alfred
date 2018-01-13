// Description:
//   Script for saying anything after you
//
// Commands:
//   hubot say <something> - I will repeat after you
//
// Author:
//   chris@hashlab.com.br

module.exports = function sayScript(robot) {
  return robot.respond(/say (.*)/i, res => {
    res.send(res.match[1]);
  });
};
