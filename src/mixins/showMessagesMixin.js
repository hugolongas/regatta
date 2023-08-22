
export const showMessagesMixin = {
    methods: {
      showSuccess(text) {
        //this.$store.dispatch(Types.APP_SHOW_MESSAGE, {status: 'success', text: text})
        this.$noty.success('<span class="icon">👍</span>' + text)
      },
      showError(text) {
        //this.$noty.error(text)
        //this.$store.dispatch(Types.APP_SHOW_MESSAGE, {status: 'error', text: text})
        this.$noty.error('<span class="icon">👎</span>' + text)
      },
      showWarning(text) {
        //this.$noty.warning(text)
        //this.$store.dispatch(Types.APP_SHOW_MESSAGE, {status: 'warning', text: text})
        this.$noty.warning('<span class="icon">⚠️</span>' + text)
      },
      showInformation(text) {
        this.$noty.info('<span class="icon">💡</span>' + text)
      }
    }
  }
  