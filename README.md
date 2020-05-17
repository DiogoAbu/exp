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
git checkout master
```

**First release must happen on `master`**

## Development
To start developing, follow these steps:

- Fork the repo.
- Make sure you are on master (`git checkout master && git pull`).
- Create a new branch (`git checkout -b featureName`).
- Make the appropriate changes in the files.
- Add the files to reflect the changes made (`git add .`).
- Commit your changes (`git commit -m "fix: delay render of screen"`).
  - The message MUST follow the [conventional commit format](https://conventionalcommits.org/).
  - Examples:
    - `docs: correct spelling on README`
    - `fix: correct minor typos in code`
    - `feat(lang): add polish language`
- The commit will trigger linters and tests, check if everything finished successfully.
- Push the current branch (`git push`).
- Create a [Pull Request](https://github.com/DiogoAbu/chatty/compare) across forks.

*On VS Code you can use the extension Conventional Commits (vscode-conventional-commits)*
