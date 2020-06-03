#!/bin/bash

echo "making angular build"
cd /Users/sibaprasad/neutrinos-studio/health-app/app
git checkout master
rm -rf dist 
gulp && ng build --configuration=prod --aot --build-optimizer && gulp build-web 
echo "angular build finished"
cd /Users/sibaprasad/works/BCD/care-first
echo "copying dist folder"
mv /Users/sibaprasad/neutrinos-studio/health-app/app/dist ./
echo "commiting to git"
git add --all
git commit -m "deploying angular build"
git push origin master