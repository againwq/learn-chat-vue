export default {
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setUser(state, user) {
      state.user = user;
    },
    setReconnect(state, reconnect) {
      state.reconnect = reconnect;
    },
    setActiveRoom(state,activeRoom){
      state.activeRoom = activeRoom
    },
    setRoom(state, room) {
      state.rooms.push(room)
    },
    setUsers(state, users) {
      state.users = users
    },
   clearChatRoom(state) {
      state.users = [];
      state.messages = [];
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    addMessage(state, message) {
      state.messages.push(message)
    },
    setSending(state, status) {
      state.sending = status
    },
    setUserTyping(state, userId) {
      state.userTyping = userId
    },
    reset(state) {
      state.error = null;
      state.users = [];
      state.messages = [];
      state.rooms = [];
      state.user = null
    }
  }