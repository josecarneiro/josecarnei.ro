<template lang="pug">
  section.full-height
    .container
      h1(
        v-if="error.status",
        v-text="error.status"
      )
      h2(v-text="error.message")
      router-link(:to="{ name: 'home' }") Go back
      pre(
        v-if="error.stack",
        v-text="error.stack"
      )
</template>

<script>
  const errorMap = {
    0: {
      message: 'Unknown error'
    },
    404: {
      message: 'Page Not Found :('
    },
    500: {
      message: 'Server Error :/'
    }
  };
  
  export default {
    props: {
      status: [ String, Number ]
    },
    computed: {
      error () {
        const status = this.status.toString();
        const error = errorMap[status];
        return {
          ...error ? { status, ...error } : errorMap[0]
        };
      }
    }
  };
</script>
