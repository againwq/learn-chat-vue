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
                        :active="activeRoom.name == room.name"
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
          name: '',
          members: []
        },
      };
    },
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ]),
  },

  watch:{
   activeRoom: (newQuestion, oldQuestion) => {
     
   }
  },
 
  methods:{
    ...mapActions(['changeRoom', 'createRoom']),
     onChange(room) {
       this.changeRoom(room)
    },
    //创建新的聊天室
    async onCreate(){
      console.log(this.rooms,this.activeRoom)

      const currentNewRoom = Object.assign({},this.newRoom)
      const result = await this.createRoom(currentNewRoom)

      if(result == 0){
        this.$message('the length of name can not be less than 3')
      }else if(result == 1){
        this.$message('this room has existed')
      }else if(result == 2){
        this.dialogVisible = false
        this.newRoom.name = ''
      }
       console.log(this.rooms,this.activeRoom)
      
    },
 
  }
}
</script>