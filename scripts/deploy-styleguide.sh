rm -r ./styleguide && \
styleguidist build && \
# Deal with relative paths in css
mkdir styleguide/static/css/static && \
mv styleguide/static/media styleguide/static/css/static/media && \
git add styleguide/* && \
git commit -am 'Update styleguide' && \
git push && \
git subtree push --prefix styleguide origin gh-pages