import { userService } from '../services/users.service.js';
console.log('userService:', userService);

const options = {
    template: `
        <section class="show-netflix">
            <img src="images/netflix.png" alt="netflix" class="netflix-logo"/>
        <ul class="user-list"> 
            <li v-for="(user,idx) in users" v-on:click="selectedUserFrom(idx)">
              <img :src="user.img">
              <button v-on:click="onRemoveUser($event,idx)">x</button>
            </li>
        </ul>
        <input  name="input"  type="text" placeholder="Enter UserName" />
        <button v-on:click="onAddUser">Add User</button>
        <div v-if="selectedUser" class="modal" >
        
            <ul class="tv-list">
           
                <li v-for="show in selectedUser.tvshows">
                <img :src="show.img"/>
                {{show.name}}
                </li>
            </ul>
            <button v-on:click="closeModal" class="modal-btn">X</button>
        </div>
        </section>
    `,

    data() {
        return {
            users: null,
            selectedUser: null,
        };
    },
    computed: {},
    methods: {
        onRemoveUser(ev, id) {
            ev.stopPropagation();
            userService.removeUser(id);
            this.users = userService.getUsers();
        },
        onAddUser() {
            var elInput = document.querySelector('input[name=input]');
            if (!elInput.value || elInput.value === '') return;
            userService.addUser(elInput.value);
            this.users = userService.getUsers();
            elInput.value = '';
        },
        selectedUserFrom(idx) {
            this.selectedUser = this.users[idx];
        },
        closeModal() {
            this.selectedUser = null;
        },
    },
    created() {
        this.users = userService.getUsers();
    },
};

Vue.component('show-netflix', options);
