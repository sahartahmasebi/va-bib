---
title: "How to add a reference?"
---

To add a new reference please edit the [`va.bib`](https://github.com/TIBHannover/va-bib/blob/main/_bibliography/va.bib) file and send a pull request. Please add your entries under a comment with your name so that we know who added which bib entry.

Please unify the references (delete _Proceedings of_, add publisher, add pages, etc.) according to this [wiki page](https://wiki.tib.eu/confluence/display/varg/Unify+References).

Please make sure that your entries always contain the `year` information as otherwise the website will not compile properly.

You can exclude a reference from beeing printed for the work from the whole group by adding the `status = {exclude}` to your bibtex entry:

```bibtex
@InProceedings{bibkey,
  author = {Author et al.},
  title  = {The title of this work},
  ...
  status = {exclude},
}
```

This is useful for works that you want to be visible on your profile page but that were created outside the group.
