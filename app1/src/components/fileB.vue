'''
Hellow World simple
'''
<template>
    <div class="B_temp">
        <h1>{{msg_inB}}</h1>
        <p>
            This is a simple example of a Vue component.
        </p>
    </div>
</template>
<script>
export default {
    name: 'B_export',
    props: {
        msg_inB: String
    },
    methods: {
        method1() {
            alert('method1')
            this.$emit('boost_vclick', "hello")
        },
        boost_vclick_inB() {
            alert('boost_vclick_inB')
        }        
    }
}
</script>
