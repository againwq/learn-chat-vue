<template>
  <div class="room-list">
    <h4>Rooms</h4>
    <hr>
    <el-button @click="dialogVisible = true" icon="el-icon-plus">create</el-button>
    
    <el-dialog
  title="create a new room"
  :visible.sync="dialogVisible"
  width="30%">
  <el-input placeholder="Please input new room name" v-model="newRoom.name">{{ newRoom.name }}</el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">cancel</el-button>
    <el-button :plain="true" type="primary" @click="onCreate">confirm</el-button>
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
        newRoom: {
          name: ''
        }
      };
    },
  computed: {
    ...mapState([
      'rooms',
      'activeRoom',
    ]),
  },

 
  methods:{
    ...mapActions(['changeRoom', 'createRoom']),
    async onChange(room) {
      await this.changeRoom(room.name)
    },
    
    //创建新的聊天室
    async onCreate(){
      
      const currentNewRoom = Object.assign({},this.newRoom)
    
      const rew =  await this.onCreate(currentNewRoom)
       console.log('???',rew)
    
     /*  const result = 0
      if(result == 0){
        this.$message('the length of name can not less than 3')
      }
      else if(result == 1){
        this.$message('this name has existed')
      }
      else if(result == 2){
        this.newRoom.name = ''
        this.dialogVisible = false
      }*/
    }, 
 
  }
}
</script>