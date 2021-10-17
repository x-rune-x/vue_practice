<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale', dark:theme === 'dark'}">
            <slot>Default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
            <div>
                <slot name="alternate"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: blue;
        padding: 0;
        border: none;
    }
    .modal p {
        font-style: normal;
    }
    .modal.sale {
        background: crimson;
        color: white;    
    }
    .modal.sale h1 {
        color: white;
    }
    .modal.dark {
        background: rgb(44, 43, 43);
    }
    .modal.dark h1 {
        color: antiquewhite;
    }
    .modal.dark p {
        color: antiquewhite;
    }
    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
        color: blueviolet;
    }
    .modal .actions a {
        color: antiquewhite;
        background: rgb(0, 0, 196);
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale .actions {
        color: white;
    }
    .modal.sale .actions a {
        color: whitesmoke;
    }
</style>