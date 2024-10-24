## template-astro-pico

_Minimal starter template for sites/blogs using Astro & Pico_

### Overview

- Uses [Astro](https://astro.build) v4
  - Started with the **Empty** template
  - Uses [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- Uses [Pico CSS](https://picocss.com) v2
  - [Classless](https://picocss.com/docs/classless)
  - `./src/styles/global.css` 
    - _Just enough_ custom CSS to be functional and presentable
- Support for _Hamburger Menu_
  - see gist: [Pico-Burger](https://gist.github.com/solvworx/03adcc09b237c240bcdc90605718f909)

### Getting Started

- Branding
  - modify `./src/branding.ts` with your ...
    - **BRAND** - used in header and tab titles
    - **ENTITY** - used in footer copyright
    - **AUTHOR** - used only in meta tag 
    - replace `./public/favicon.svg` _(optional)_
- Pages _(as html)_
  - **Home** - modify `./src/pages/index.astro`
  - **About** - modify `./src/pages/about.astro`
- Posts _(as markdown)_
  - Replace _sample_ posts in `./src/content/posts` with _actual_ posts 

### Post Frontmatter
- Fields
  - `slug` is no longer part of frontmatter
    - Astro generates `slug` based on file name
    - this template uses the `slug` in browser tab titles _(html:head:title)_
  - `title` is the long-form _title_ used on posts and lists of posts
  - `date` is set up for [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)
  - `topics` _(aka 'tags')_ is entered as an array of strings 
  - no `author` as this template assumes single-author site/blog

  - frontmatter example ...
    ```
      ---
      title: Markdown Test Page
      date: 2019-07-13
      topics: ["testing", "sample"]
      ---
  - frontmatter fields are defined in `./src/content/config.ts`      ```

### Caveat
- see gist: [Global-Gitignore](https://gist.github.com/solvworx/5408700d30f59e02612834e2bc41028a)