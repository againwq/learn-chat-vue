import chatkit from '../chatkit';

// 用于展示错误信息的辅助函数
function handleError(commit, error) {
  const message = error.message || error.info.error_description;
  commit('setError', message);
  console.log(commit, error)
}

export default {
  async login({ commit, state }, userId) {
    try {
      commit('setError', '');
        //设置加载状态
      commit('setLoading', true);
      // 设置用户信息
      const currentUser = await chatkit.connectUser(userId);
      commit('setUser', {
        username: currentUser.id,
        name: currentUser.name,
        presence: 'online'
      });

      commit('setReconnect', false);
      
      // 打印当前用户信息
      console.log(state.user);
      state.users.push(state.user)
      return true
    } catch (error) {
      if(userId !== 'xqc'){
        commit('setError', 'the requested user does not exist')
      }
      else{
      handleError(commit,error)
      }
    } finally {
      //关闭加载状态
      commit('setLoading', false);
    }
  },

  //创建聊天室
  async createRoom({ commit, state }, newRoom){
    let result = 2
    if(newRoom.name.length <= 3){
      result = 0
    }

    state.rooms.forEach(room => {
      if(room.name == newRoom.name){
        result = 1
      }
    });

    if(result == 2){
      commit('setRoom', newRoom)
      commit('setActiveRoom', newRoom)
    }
   
    return result
  },

  //切换聊天室
  async changeRoom({ commit, state }, nextRoom) {
    try {
      state.rooms.forEach(room => {
        if(room.name == nextRoom.name)
        commit('setActiveRoom', nextRoom);
      });
     
    } catch (error) {
      handleError(commit, error)
    }
  },
  
}