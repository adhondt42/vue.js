new Vue({
    el: '#app',
    data: {
        message:'Lien tuto youtube',
        langage_msg:'Langage pratiqué ?',
        langage:'Vue.js',
        link:'https://www.youtube.com/watch?v=XkgiXngcpWk&t=127s',
        success: true,
        copains: ['Thery', 'Charles', 'Hugo']
    },
    methods: {
        change_status: function() {
            this.success = (this.success === true ? false : true)
        }
    } 
}) 