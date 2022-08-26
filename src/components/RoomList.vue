<template>
  <div class="room-list">
    <h4>Rooms</h4>
    <hr>
    <el-button icon="el-icon-plus">create</el-button>
    <b-list-group v-if="activeRoom">
      <b-list-group-item v-for="room in rooms"
                        :key="room.name"
                        :active="activeRoom.id === room.id"
                        href="#"
                        @click="onChange(room)">
        # {{ room.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RoomList',
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ]),
  }
}
</script>