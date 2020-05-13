# Exp

## Initial commit
```sh
yarn version --new-version 0.0.0 --ignore-script --no-git-tag-version --allow-same-version --silent
git add .
git commit -m "feat: :tada: initial commit [skip ci]"
git tag -a v0.0.0 -m "release v0.0.0"
git push --follow-tags --set-upstream origin master
git checkout -b beta
git push --set-upstream origin beta
git checkout -b develop
git push --set-upstream origin develop
```
