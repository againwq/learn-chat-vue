const subscribeToRoom = () => {
    
}
//登录时用户验证
const chatManager = {
    connect: () => {
      return new Promise((resolve, reject) => {
            const obj = {
             id: 'xqc-again',
             name: 'xqc',
             subscribeToRoom
            }
            resolve(obj)
      })
    },
}





export default { chatManager }