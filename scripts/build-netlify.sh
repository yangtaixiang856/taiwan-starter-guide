#!/usr/bin/env bash
set -euo pipefail

rm -rf public
mkdir -p public

cp -R assets guides id tools vi zh-hant public/
cp \
  index.html \
  guides.html \
  contact.html \
  privacy.html \
  disclaimer.html \
  sources.html \
  how-we-verify.html \
  work-in-taiwan.html \
  robots.txt \
  sitemap.xml \
  _headers \
  _redirects \
  googlec1bda2f350467e34.html \
  success.html \
  public/
