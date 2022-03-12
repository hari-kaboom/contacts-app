const { allusers } = require('../db')


  

  

async function verifyUser(userOpts) {
  if (!userOpts.email) {
    throw new Error('Did not supply email')
  }
  if (!userOpts.password) {
    throw new Error('Did not supply password')
  }

  const user = await allusers.findOne({
    attributes: ['Email', 'Password', 'Secret'],
    where: {
      email: userOpts.email,
    }
  })

  if (!user) {
    throw new Error('No user with given email address')
  }
  

  if (user.password !== userOpts.password) {
    throw new Error('Password does not match')
  }
  return true
}

module.exports = {
  
  verifyUser
}