set -e

npm run build

cd dist

git init

git add -A

git commit -m "Deploy"

git push -f git@github.com:jacob-pugsley/SimpleFishBase_Front.git master:gh-pages

cd -

