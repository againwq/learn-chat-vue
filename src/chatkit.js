import moment from 'moment'
import store from './store/index.js'
import {chatManager} from '@/myChatkitApi'



let currentUser = null;
let activeRoom = null;

//判断用户名来决定是否登录
async function connectUser(userId) {
    currentUser = await chatManager.connect();
    if(userId == 'xqc'){
      return currentUser
    }
}
//订阅房间功能
function setMembers() {
  const members = activeRoom.users.map(user => ({
    username: user.id,
    name: user.name,
    presence: user.presence.state
  }));
  store.commit('setUsers', members);
}

async function subscribeToRoom(roomId) {
  store.commit('clearChatRoom');
  activeRoom = await currentUser.subscribeToRoom({
  
  });
  setMembers();
  return activeRoom;
}



 export default {
  connectUser, subscribeToRoom
}  


