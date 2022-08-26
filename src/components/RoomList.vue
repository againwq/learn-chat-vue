<template>
  <div class="room-list">
    <h4>Rooms</h4>
    <hr>
    <el-button @click="dialogVisible = true" icon="el-icon-plus">create</el-button>
    
    <el-dialog
  title="create a new room"
  :visible.sync="dialogVisible"
  width="30%">
  <el-input placeholder="Please input new room name"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">cancel</el-button>
    <el-button :plain="!displayAlert" type="primary" @click="onCreate">confirm</el-button>
  </span>
</el-dialog>

    <hr>
    <b-list-group>
      <b-list-group-item v-for="room in rooms"
                        :key="room.name"
                        :active="activeRoom.name == newRoom.name"
                        href="#"
                        @click="onChange(room)">
        # {{ room.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RoomList',
  data() {
      return {
        dialogVisible: false,
        displayAlert: false,
        newRoom: {
          name: '',
          id: '1234',
        }
      };
    },
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ]),
  },
 
  methods:{
    ...mapActions(['changeRoom', 'createRoom']),
   
    
    async onChange(room) {
      await this.changeRoom(room.name)
    },

    //创建新的聊天室
    async onCreate(){
      const currentNewRoom = this.newRoom
      this.displayAlert = await this.createRoom(currentNewRoom)
     
    },
 
  }
}
</script>