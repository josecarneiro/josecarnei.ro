<template lang="pug">
  section.full-height
    .container
      h1 José Carneiro
      h2
        | Founder of 
        a(href="https://iindie.com/?ref=josecarneiro") iindie.co
        //- br
        |  / Full-Stack Developer
        //- br
        |  / Independent Consultant
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
      social: [
        {
          name: 'contact@josecarnei.ro',
          url: 'mailto:contact@josecarnei.ro'
        }, {
          name: 'twitter@josemcarneiro',
          url: 'https://twitter.com/josemcarneiro'
        }, {
          name: 'github@josecarneiro',
          url: 'https://github.com/josecarneiro'
        }, {
          name: 'linkedin@josemcarneiro',
          url: 'https://linkedin.com/in/josemcarneiro'
        }, {
          name: 'dribbble@josec',
          url: 'https://dribbble.com/josec'
        }, {
          name: 'instagram@josecarnei.ro',
          url: 'https://instagram.com/josecarnei.ro'
        }
        // {
        //   name: 'facebook@josemcarneiro',
        //   url: 'https://facebook.com/josemcarneiro'
        // }
      ]
    })
  };
</script>
