#!/usr/bin/sh

set -xe

pandoc \
  --pdf-engine pdfroff \
  -V geometry:"top=0.14cm, bottom=1.5cm, left=2cm, right=2cm" \
  -V fontsize=10pt -V urlcolor=teal \
  RESUME.md -o Resume.pdf

firefox Resume.pdf
