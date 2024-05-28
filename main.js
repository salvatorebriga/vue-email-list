const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Emails:",
      emails: [],
    };
  },

  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((callout) => {
          this.emails.push(callout.data.response);
        });
    }
  },
}).mount("#app");
