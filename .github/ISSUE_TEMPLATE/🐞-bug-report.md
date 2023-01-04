---
name: "\U0001F41E Bug report"
about: Something is not working as expected.
title: ''
labels: bug
assignees: ''

---

name: 🐞 Bug report
description: Something is not working as expected.
title: 🐞 YOUR_DESCRIPTION
labels: bug

body:
  - type: textarea
    attributes:
      label: Description
      description: >-
        A clear and concise description of what the bug is.
    validations:
      required: true
      
  - type: textarea
    attributes:
      label: To Reproduce
      description: >-
        Steps to reproduce the behavior.
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true

  - type: textarea
    attributes:
      label: Expected behavior
      description: >-
        A clear and concise description of what you expected to happen.
    validations:
      required: true
