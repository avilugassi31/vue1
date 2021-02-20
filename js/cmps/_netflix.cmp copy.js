import { userService } from '../services/users.service.js';
console.log('userService:', userService);

const options = {
    template: `
        <section class="show-netflix">
            <img src="images/netflix.png" alt="netflix" class="netflix-logo"/>
        <ul class="user-list"> 
            <li v-for="(user,idx) in users" v-on:click="selectedUserFrom(idx)">
              <img :src="user.img"><button v-on:click="removeUser(idx)">x</button>
            </li>
        </ul>
        <input  name="input"  type="text" placeholder="Enter UserName" />
        <button v-on:click="addUser">Add User</button>
        <div v-if="selectedUser" class="modal" >
            <ul class="tv-list">
                <li v-for="show in selectedUser.tvshows"> {{show}}
                </li>
            </ul>
            <button v-on:click="closeModal" class="modal-btn">X</button>
        </div>
        </section>
    `,

    data() {
        return {
            users: [
                {
                    username: 'Avi',
                    tvshows: ['harry potter', 'batman'],
                    img: './images/user1.png',
                },
                {
                    username: 'Geva',
                    tvshows: ['harry potter', 'superman'],
                    img: './images/user2.png',
                },
                {
                    username: 'Talia',
                    tvshows: ['Casa De Papel', 'superman'],
                    img: './images/user3.png',
                },
                {
                    username: 'Rafi',
                    tvshows: ['Casa De Papel', 'Batmen'],
                    img: './images/user4.png',
                },
                {
                    username: 'Assaf',
                    tvshows: ['Mickey Mouse', 'superman'],
                    img: './images/user5.png',
                },
            ],
            selectedUser: null,
        };
    },
    computed: {},
    methods: {
        removeUser(id) {
            const idx = this.users.findIndex((user) => user[id] === id);
            this.users.splice(idx, 1);
        },
        addUser() {
            var elInput = document.querySelector('input[name=input]').value;
            this.users.push({ username: elInput });
            console.log(this.users);
        },
        selectedUserFrom(idx) {
            this.selectedUser = this.users[idx];
        },
        closeModal() {
            this.selectedUser = null;
        },
    },
};

Vue.component('show-netflix', options);
