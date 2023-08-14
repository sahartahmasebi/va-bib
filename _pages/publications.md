---
layout: page
permalink: /
title: RGVA Publications
description: By clicking on the respective person you can access her/his list of publications.
nav: false
nav_order: 0
---

- [Whole group](/rgva)
- [Prof. Dr. Ralph Ewerth](/ewerthr)
- [Dr. Anett Hoppe](/hoppea)
- [Dr. Eric Müller-Budack](/muellerer)
- [Dr. Christian Otto](/ottoc)
- [Sushil Awale](/awales)
- [Gullal Cheema](/cheemag)
- [Elias Entrup](/entrupe)
- [Junaid Ghauri](/ghaurij)
- [Wolfgang Gritz](/gritzw)
- [Evelyn Navarrete](/navarretee)
- [Kader Pustu-Iren](/pustuk)
- [Ratan Sebastian](/sebastianr)
- [Matthias Springstein](/springsteinm)
- [Markos Stamatakis](/stamatakism)
- [Sahar Tahmasebi](/tahmasebis)
- [Golsa Tahmasebzadeh](/tahmasebzadehg)
- [Jonas Theiner](/theinerj)

## How to add a reference?
To add a new reference please edit the [`va.bib`](https://github.com/TIBHannover/va-bib/blob/main/_bibliography/va.bib) file and send a pull request. Please add your entries under a comment with your name so that we know who added which bib entry.

Please unify the references (delete _Proceedings of_, add publisher, add pages, etc.) according to this [wiki page](https://wiki.tib.eu/confluence/display/varg/Unify+References).

Please make sure that your entries always contain the `year` information as otherwise the website will not compile properly.

You can add a 'note' to you paper to, for example, indicate that it is accepted for publication or that it received an award:

```bibtex
@InProceedings{bibkey,
  author = {Author et al.},
  title  = {The title of this work},
  
  note = {Best Paper Award},
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

This is useful for works that you want to be visible on your profile page but that were created outside the group.