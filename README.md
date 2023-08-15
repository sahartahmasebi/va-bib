# Visual Analytics Bibliography

https://tibhannover.github.io/va-bib/

## Add a new Reference

To add a new reference please edit the [`va.bib`](https://github.com/TIBHannover/va-bib/blob/main/_bibliography/va.bib) file and send a pull request. Please add your entries under a comment with your name so that we know who added which bib entry.

Please unify the references (delete _Proceedings of_, add publisher, add pages, etc.) according to this [wiki page](https://wiki.tib.eu/confluence/display/varg/Unify+References).

Please make sure that your entries always contain the `year` information as otherwise the website will not compile properly.

You can add `award_de` and `award_en` to you paper to indicate awards (comma-separated):

```bibtex
@InProceedings{bibkey,
  author = {Author et al.},
  title  = {The title of this work},
  
  award_de = {Best Paper Award, Spotlight Session},
  award_en = {Best Paper Award, Spotlight Session},
}
```

You can indicate that the paper is accepted for publication by adding the `status = {unpublished}` to your bibtex entry:

```bibtex
@InProceedings{bibkey,
  author = {Author et al.},
  title  = {The title of this work},
  
  status = {unpublished},
}
```

You can exclude a reference from beeing printed for the work from the whole group by adding the `status = {exclude}` to your bibtex entry:

```bibtex
@InProceedings{bibkey,
  author = {Author et al.},
  title  = {The title of this work},
  
  status = {exclude},
}
```

This is useful for works that you want to be visible on your profile page but that were created outside the group. An example is shown in `Breitbarth2015` in the [`va.bib`](_bibliography/va.bib) file.

## Local Installation

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

## TODOs

- [ ] Boldify authors on individual bibliography pages
- [ ] German Language

