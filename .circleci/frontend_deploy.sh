#!/bin/bash
echo "Starting Deploy"
cd ffre-es-frontend

export HOME="/home/ubuntu"
source /home/ubuntu/.profile

git checkout staging
git pull

yarn install
echo "Deploy Finished"
