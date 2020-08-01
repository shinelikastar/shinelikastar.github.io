### TODO

#### Navbar

- [x] Map config to navbar rendering
- [x] Make the subheadings map off their parent
- [x] Create notion of `active` heading
  - [x] Set up `onHover` handler
  - [x] Set up `onClick` handler
- [x] Style the navbar
  - [x] Subheadings have smaller font
  - [x] Subheadings are not expanded unless `active`
- [x] Implement escape hatch
  - [x] Render emoji button
  - [x] Scrolls to top on click
- [ ] **Hook up navbar to page content**
- [x] Fade in scroll and/or snappy

### Pages

- [x] Add sections for each page component
  - [x] Import react-routing
  - [x] Setup correct browser / build configs
  - [ ] Fuck I think I need hash links instead
    - [ ] Each project definitely needs to be a hash link
  - [ ] Add `Link` to each page
  - [x] Add `history` to create persistent state between sessions (we love rerendering)
- [x] Add components and hook up to `Navbar`
- [ ] On scroll, navbar should nav to pages and update `active`-ness
  - [ ] Refactor to use `Navlink` or something

#### Work

- [x] Fix x-overflow issue
- [ ] Design the animation to show text
- [x] Big refactor to use the config
- [x] Interlocking left/right aligned design

- [ ] **Add other projects section**

### Animations

- [ ] Parallax effect || intersection observer
- [x] Use `AnimatePresence` for smoother transition of subheadings
- [ ] Create flip card for projects
- [ ] Loading logo
  - [ ] Create `Loader` component?

### Footer

- [ ] **Somewhere to stash links**
- [x] Animate visibility of scroll top button

### Polish backlog

- [x] Find awesome font -- many creds to Flor
- [ ] Change favicon lol
- [ ] Use (this for color highlight on hover)[https://codepen.io/bchiang7/pen/GgdOKE]

### Cleanup

- [ ] Add `vars.css`
- [ ] Refactor using new awesome vars
- [ ] Mobile ???
- [x] Cleanup console errors
- [ ] Fix right alignment of languages on projects

**Deploy commnad:** `sudo npm --prefix star-site/ run deploy`