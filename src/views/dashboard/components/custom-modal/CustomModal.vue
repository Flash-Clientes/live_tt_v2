<template>
    <n-modal :show="showModal">
        <n-card
            :class="'custom-modal ' + props.size"
            :title="props.title"
            role="dialog"
            aria-modal="true"
        >
            <button type="button" class="close-button" @click="closeModal">
                <span>✖️</span>
            </button>

            <div class="modal-body">
                <p>{{ props.description }}</p>

                <form @submit.prevent="props.functionToCall">
                    <div v-for="field in props.fields" :key="field.id">
                        <n-input
                            style="margin-top: 20px;"
                            v-if="field.type === 'text'"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            v-model="field.value"
                        />

                        <n-input
                            style="margin-top: 20px;"
                            v-else-if="field.type === 'textarea'"
                            :label="field.label"
                            :placeholder="field.placeholder"
                            v-model="field.value"
                            textarea
                        />

                        <n-select
                            style="margin-top: 20px;"
                            v-else-if="field.type === 'select'"
                            :label="field.label"
                            :options="field.options"
                            v-model="field.value"
                        />

                        <n-checkbox
                            style="margin-top: 20px;"
                            v-else-if="field.type === 'checkbox'"
                            :label="field.label"
                            v-model="field.value"
                        />

                        <n-switch
                            style="margin-top: 20px;"
                            v-else-if="field.type === 'switch'"
                            :label="field.label"
                            v-model="field.value"
                        />
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="submit" class="button button-primary" @click="props.functionToCall">
                    {{ props.submitText }}
                </button>
            </div>
        </n-card>
    </n-modal>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';

const props = defineProps({
    showModal: Boolean,
    size: {
        type: String,
        default: 'md',
    },
    title: String,
    fields: Array,
    functionToCall: Function,
    submitText: {
        type: String,
        default: 'Salvar',
    },
    description: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:showModal']);

const timeout = ref(5000);

const closeModal = () => {
  emit('update:showModal', false);
};
</script>

<style scoped>
.custom-modal {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.custom-modal .lg {
    max-width: 1000px;
}

.custom-modal .md {
    max-width: 600px;
}

.custom-modal .sm {
    max-width: 400px;
}

.custom-modal .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #333;
}

.custom-modal .modal-body {
    padding: 20px 0;
}

.custom-modal .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
}
</style>