'''
Hellow World simple
'''
<template>
    <div class="B_temp">
        <h1>{{msg}}</h1>
        <p>
            This is a simple example of a Vue component.
        </p>
    </div>
</template>
<script>
export default {
    name: 'B_export',
    props: {
        msg: String
    },
    methods: {
        method1() {
            alert('method1')
        }
    }
}
</script>
