# CPNT-265 / FINAL PROJECT / Bryan Velasco

## Attributions

- Instagram and Camera shutter icons from [Icons8](https://icons8.com/)
- All images provided by client - AshLens Photography

## TODO

- X Set up pages
- X Build some reusable components
  - X TheHeader -- Navigation bar
  - X TheFooter
  - X TheHero
    - X hero-cta
  - X AppForm
  - X FAQ Cards
  - X About Section - StoryBlok content
- X Get StoryBlok to work
  - Thank you for the help, Tony
  ```
  build: {
    transpile: ["#app"],
  },
  ```
- X Finish home page
- X Finish about page
- X Finish portfolio page
- X Finish contact
- X Finish FAQ page

### Extra:TODO

- X Add animations
- X add images to bottom of home page
- X Fix portfolio > img[].vue background

## How it went

- Did not do a journal for this project because I started fairly late.
- Had lots of issues with Storyblok and some with other modules. Overall I was able to problem solve and fix most of the issues I encountered and when I wasn't sure I was able to get help from Tony to make my StoryBlok content not enter an endless reload loop...
- To give each image its own individual url, I made 9 vue files. One for each image and linked it with `<NuxtLink>`. It's probably not the best way to do it. But it worked!!!
