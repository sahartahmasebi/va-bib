---
title: "How to add a reference?"
---

To add a new reference please update the [`rgva.bib`](https://git.tib.eu/varg-tools/rgva-references/-/blob/main/_bibliography/rgva.bib) file.

Please unify the references (delete _Proceedings of_, add publisher, add pages, etc.) according to the already inserted references. A wiki page in the TIB confluence will follow.

You can exclude a reference from beeing printed for the work from the whole group by adding the following line to you bibtex entry:

```bibtex
@InProceedings{bibkey,
  author = {Author et al.},
  title  = {The title of this work},
  ...
  status = {exclude},
}
```

This is useful for works that you want to be visible on your profile page but that were created outside the group.
