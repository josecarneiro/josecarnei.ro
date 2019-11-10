<template lang="pug">
  section.full-height
    .container
      h1 José Carneiro
      h2
        | Lead Instructor at Ironhack Lisboa
        //- |  / Entrepreneur
        |  / Full-Stack Developer
        //- |  / Independent Consultant
        |  / Entrepreneur
      ul
        li(v-for="link of social")
          a(
            :href="link.url",
            v-text="link.name"
          )
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        name: "contact@josecarnei.ro",
        url: "mailto:contact@josecarnei.ro"
      },
      {
        name: "github@josecarneiro",
        url: "https://github.com/josecarneiro"
      },
      {
        name: "twitter@josemcarneiro",
        url: "https://twitter.com/josemcarneiro"
      },
      {
        name: "linkedin@josemcarneiro",
        url: "https://linkedin.com/in/josemcarneiro"
      },
      {
        name: "instagram@josecarnei.ro",
        url: "https://instagram.com/josecarnei.ro"
      }
      // {
      //   name: 'dribbble@josec',
      //   url: 'https://dribbble.com/josec'
      // }
      // {
      //   name: 'facebook@josemcarneiro',
      //   url: 'https://facebook.com/josemcarneiro'
      // }
    ]
  })
};
</script>
