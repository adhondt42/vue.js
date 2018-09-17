/// Filtres 
// Filtre globaux 
Vue.filter('capitalize', function (value, suffix) {
    return value.toUpperCase() + suffix
})

// Ou filtre activé pour seule instance, avec appel dans l'isntance
let reverse = function (value) {
    return value.split('').reverse().join('')
}


/// Directives perso globale

Vue.directive('mydir', {
    bind: function (el, binding, vnode) {                   // Quand chargé 
        console.log(el)
        console.log(binding)
    },
    update: function  (el, binding, vnode, oldvnode) {      // Quand update
        console.log('update')
    }
})   // Si on ne veux pas dirrencier bind et update, juste créer une fonction sans eux


// Composants  perso global

// Vue.component('mycomp', {
//     props:{
//         type: {type: String, default: 'ui message error'},
//         msg: {type:String, default: 'default mesg'},
//     },
//     template: `<div :class="type">{{msg}}</div>`
// })

// Composant perso pour une seule instance 
let mycompmsg = {
    props:{
        type: {type: String, default: 'ui segment message success'},
        msg: {type:String, default: 'Pose ton like'},
        header: {type: String, default: 'please, define header'}
    },
    template: `<div :class="type">
                    <i class="close icon" @click="close"></i>
                        {{header}}
                    {{msg}}
                </div>`,
    methods: {
        close () {
            this.$emit('closealert')
        }
    }

}

let likemachine = {
    props: {
        type: {type: String, default: 'blue'},
        start: {type: Number, default: 0}
    },
    data: function () {
            return { count: this.start}
    },
    methods: {
        increment: function () {
            this.count++
        }
    },
    template: `<div :class="type" class="ui segment">
        <button @click="increment">Like !</button>
        {{ count }}

    </div>`
}





var vm = new Vue({
    el: '#app',
    filters: { reverse },
    components: { mycompmsg, likemachine },
    data: {
        message:'undefined msg', 
        langage:'Vue.js',
        link:'https://www.youtube.com/watch?v=XkgiXngcpWk&t=127s',
        success: false,
        copains: ['Thery', 'Charles', 'Hugo'],
        seconds: 1,
        firstname: "Axel",
        lastname: "Dhondt",
        alert: false

    },
    methods: {
        change_status: function() {
            console.log('checking for status update')
            this.success = (this.success === true ? false : true)
        },
        showalert () {
            this.alert = true
        },
        hidealert () {
            this.alert = false
        }
    },
    computed: {    // permet d'invoquer les method slm si une des var. présente utilisée // Getter par defaut 
        get_status: function() {
            console.log("getting status")
            return (this.success === true ? 'success' : 'error')
        },
        fullname: {
            get: function() {
                return this.firstname + ' ' + this.lastname
        },
            set: function(value) {
                var parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
    },
    mounted: function () {   // permet d'agir quand l'element est intégré au DOM
        this.$interval = setInterval(() => {
            if (this.success === true)
                this.seconds++
        }, 10)
    },
    destroyed: function () {  // l'inverse
        clearInterval(this.$interval)
    }
}) 