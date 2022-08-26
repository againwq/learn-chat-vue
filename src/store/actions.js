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
        name: currentUser.name
      });

      commit('setReconnect', false);

      // 打印当前用户信息
      console.log(state.user);
      
      return true
    } catch (error) {
      if(userId !== 'xqc'){
        commit('setError', '该用户未注册')
      }
      else{
      handleError(commit,error)
      }
    } finally {
      //关闭加载状态
      commit('setLoading', false);
    }
  },
  //切换聊天室
  async changeRoom({ commit, state }, roomName) {
    try {
      const newCurrentRoom = state.rooms.forEach(room => {
        if(room.name == roomName)
        return room
      });
      commit('setActiveRoom', newCurrentRoom);
    } catch (error) {
      handleError(commit, error)
    }
  },
}