<template lang="pug">
  section.full-height
    .container
      h1 José Carneiro
      h2
        | Front-end Developer at 
        a(href="https://mercedes-benz.io") Mercedes-Benz.io
        |  / Lead Instructor at Ironhack
        |  / Entrepreneur
      ul
        li(v-for="{ url, name } of social")
          a(
            :href="url",
            v-text="name"
          )
</template>

<script>
  export default {
    data: () => ({
      social: [
        {
          name: 'contact@josecarnei.ro',
          url: 'mailto:contact@josecarnei.ro'
        },
        {
          name: 'github@josecarneiro',
          url: 'https://github.com/josecarneiro'
        },
        {
          name: 'linkedin@josemcarneiro',
          url: 'https://linkedin.com/in/josemcarneiro'
        },
        {
          name: 'twitter@josemcarneiro',
          url: 'https://twitter.com/josemcarneiro'
        },
        {
          name: 'instagram@josecarnei.ro',
          url: 'https://instagram.com/josecarnei.ro'
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
