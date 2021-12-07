'''
Hellow World simple
'''
<template>
    <div class="B_temp">
        <p>
            This is a simple example of a Vue component. ver0.1 12-08-2022
        </p>
    </div>
</template>
<script>
export default {
    name: 'B_export',
    methods: {
        method1() {
            alert('method1')
            this.$emit('boost_vclick', "hello")
        }
    }
}
</script>
