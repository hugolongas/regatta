<template>
  <div class="validate">
    <p>
      S'ha validat el email, en breus moments seras redirigit a la página
      d'inici
    </p>
  </div>
</template>
  
<script>
export default {
  data: () => ({}),
  mounted() {
    let token = this.$route.query.token;
    if (token != "") {
      this.$http.post("/verifyOptin?token=" + token).then((response) => {
        if (response == "success") {
          //this.$router.push({ name: "home" });
        } else {
          this.error = response;
        }
      });
    }
  },
  computed: {},
  methods: {},
};
</script>