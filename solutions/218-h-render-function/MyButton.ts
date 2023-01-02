import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'MyButton',
  emits: ['custom-click'],
  render() {
    return h(
      'button',
      {
        disabled: this.disabled,
        onClick: () => {
          this.$emit('custom-click');
        },
      },
      this.$slots
    );
  },
});
