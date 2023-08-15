---
layout: page
permalink: /
title: RGVA Publications
description: By clicking on the respective person you can access her/his list of publications sorted by the respective criterion
nav: false
nav_order: 0
---

<!-- _pages/publications.md -->

- Whole group ([year](/va-bib/rgva), [type](/va-bib/rgva-type))
- Prof. Dr. Ralph Ewerth ([year](/va-bib/ewerthr), [type](/va-bib/ewerthr-type))
- Dr. Anett Hoppe ([year](/va-bib/hoppea), [type](/va-bib/hoppea-type))
- Dr. Eric Müller-Budack ([year](/va-bib/muellerer), [type](/va-bib/muellerer-type))
- Dr. Christian Otto ([year](/va-bib/ottoc), [type](/va-bib/ottoc-type))
- Sushil Awale ([year](/va-bib/awales), [type](/va-bib/awales-type))
- Gullal Cheema ([year](/va-bib/cheemag), [type](/va-bib/cheemag-type))
- Elias Entrup ([year](/va-bib/entrupe), [type](/va-bib/entrupe-type))
- Junaid Ghauri ([year](/va-bib/ghaurij), [type](/va-bib/ghaurij-type))
- Wolfgang Gritz ([year](/va-bib/gritzw), [type](/va-bib/gritzw-type))
- Evelyn Navarrete ([year](/va-bib/navarretee), [type](/va-bib/navarretee-type))
- Kader Pustu-Iren ([year](/va-bib/pustuk), [type](/va-bib/pustuk-type))
- Ratan Sebastian ([year](/va-bib/sebastianr), [type](/va-bib/sebastianr-type))
- Matthias Springstein ([year](/va-bib/springsteinm), [type](/va-bib/springsteinm-type))
- Markos Stamatakis ([year](/va-bib/stamatakism), [type](/va-bib/stamatakism-type))
- Sahar Tahmasebi ([year](/va-bib/tahmasebis), [type](/va-bib/tahmasebis-type))
- Golsa Tahmasebzadeh ([year](/va-bib/tahmasebzadehg), [type](/va-bib/tahmasebzadehg-type))
- Jonas Theiner ([year](/va-bib/theinerj), [type](/va-bib/theinerj-type))

## How to add a reference?
To add a new reference please edit the [`va.bib`](https://github.com/TIBHannover/va-bib/blob/main/_bibliography/va.bib) file and send a pull request. Please add your entries under a comment with your name so that we know who added which bib entry.

Please unify the references (delete _Proceedings of_, add publisher, add pages, etc.) according to this [wiki page](https://wiki.tib.eu/confluence/display/varg/Unify+References).

Please make sure that your entries always contain the `year` information as otherwise the website will not compile properly.

You can add a `award_de` and `award_en` to you paper to indicate awards (comma-separated):

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

This is useful for works that you want to be visible on your profile page but that were created outside the group.