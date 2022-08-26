
const chatManager = {
  connect: () => {
    return new Promise((resolve, reject) => {
          const obj = {
           id: 'xqc-again',
           name: 'xqc',
          }
          resolve(obj)
    })
  },
}

//判断用户名来决定是否登录
async function connectUser(userId) {
    let currentUser = await chatManager.connect();

    if(userId == 'xqc'){
      return currentUser
    }

}

 export default {
  connectUser
}  


