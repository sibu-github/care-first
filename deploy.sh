#!/bin/bash


echo "switching to frontend repository"
cd /Users/sibaprasad/neutrinos-studio/health-app/app
echo "switch to master branch"
git checkout prirority-issue-fix
# git checkout magic
echo "remove dist folder"
rm -rf dist 
echo "making angular build"
gulp && ng build --configuration=prod --aot --build-optimizer && gulp build-web 
echo "angular build finished"
echo "switching to care-first repository"
cd /Users/sibaprasad/works/BCD/care-first
echo "remove dist folder"
rm -rf dist 
echo "copying dist folder"
mv /Users/sibaprasad/neutrinos-studio/health-app/app/dist ./
echo "commiting to git"
git add --all
git commit -m "deploying angular build"
git push origin master
