#!/bin/bash

set -e

cat <<EOL >> .gitignore

compose.override.yaml
.vscode/
my/
EOL

git ls-files -z my | xargs -0 git update-index --skip-worktree
git ls-files -z .vscode | xargs -0 git update-index --skip-worktree
git update-index --skip-worktree compose.override.yaml

rm README.md
touch README.md

cp .env.sample .env

docker compose -f compose.yaml build