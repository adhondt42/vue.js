let vm = new Vue({

    el:'#app',
    data: {

        success: false,
        message: ''

    },
    methods: {
        cls : function () {
            console.log("clssssss ")
            return this.sucess === true ? 'success' : 'error'
        }
    }
})