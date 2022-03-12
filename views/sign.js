const allusers  = require('../db').allusers

async function verifyUser(email,password) {
  if (email) {
    throw new Error('Did not supply email')
  }
  if (!password) {
    throw new Error('Did not supply password')
  }

  const user = await allusers.findOne({
    attributes: ['Email', 'Password', 'Secret'],
    where: {
      Email: email,
    }
  })

  if (!user) {
    throw new Error('No user with given email address')
  }
  

  if (user.password !== userOpts.password) {
    throw new Error('Password does not match')
  }
  
}
console.log(verifyUser)