# Visual Analytics Bibliography

To run the website, please execute:

## Add a new Reference

To add a new reference please update the [`va.bib`](_bibliography/va.bib) file.

Please unify (delete proceedings, edition, etc.) the references according to the already inserted references. A wiki page in the TIB confluence will follow.

You can exclude a reference from beeing printed for the work from the whole group by adding the following line to you bibtex entry:

```
status = {exclude},
```

This is useful for works that you want to be visible on your profile page but that were created outside the group,

An example is shown in `Breitbarth2015` in the [`va.bib`](_bibliography/va.bib) file.

## Installation

source: https://jekyllrb.com/docs/

- Install all [prerequisites](https://jekyllrb.com/docs/installation/).
- Install the jekyll and bundler [gems](https://jekyllrb.com/docs/ruby-101/#gems).

```
pacman -Sy wget ruby git
gem install jekyll bundler
```

- Build the site and make it available on a local server.

```
bundle install
bundle exec jekyll serve
```

- Browse to http://localhost:4000
