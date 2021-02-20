import './cmps/showtime.cmp.js'
import './cmps/countdown.cmp.js'
import './cmps/netflix.cmp.js'

const options = {
    el: '#app',
    data() {
        return {
            
        }
    },
    methods: {
        consoleLog() {
            console.log('done')
        }
    },
    computed: {
        
    },
    
}



const netflix = {
    el: '#netflix-app',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    
}

new Vue(options)

new Vue(netflix)