<template lang="pug">
  section.full-height
    .container
      h1 José Carneiro
      h2 Full-Stack Developer
      //- h5 Lisbon, Portugal
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
      social: [{
        name: 'contact@josecarnei.ro',
        url: 'mailto:contact@josecarnei.ro'
      }, {
        name: 'github@josecarneiro',
        url: 'https://github.com/josecarneiro'
      }, {
        name: 'linkedin@josemcarneiro',
        url: 'https://linkedin.com/in/josemcarneiro'
      }, {
        name: 'instagram@josecarnei.ro',
        url: 'https://instagram.com/josecarnei.ro'
      }, {
        name: 'facebook@josemcarneiro',
        url: 'https://facebook.com/josemcarneiro'
      }, {
        name: 'dribbble@josec',
        url: 'https://dribbble.com/josec'
      }]
    })
  };
</script>
