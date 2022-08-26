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
      // Save list of user's rooms in store
      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }))
      commit('setRooms', rooms);

      // Subscribe user to a room
      const activeRoom = state.activeRoom || rooms[0]; // pick last used room, or the first one
      commit('setActiveRoom', {
        id: activeRoom.id,
      name: activeRoom.name
     });
      await chatkit.subscribeToRoom(activeRoom.id);
      
      return true;

      commit('setReconnect', false);

      // 打印当前用户信息
      console.log(state.user);
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
  }
}