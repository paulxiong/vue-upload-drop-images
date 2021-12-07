<template>
    <li>
        <input type="checkbox">{{item}}
    </li>
</template>
<script>
    export default {
        name: 'TodoItem',
        props: {
            item:{
                type: String,
                required: true,
                default: '123'
            }
        }
    }
</script>
