#!/bin/bash
sudo apt-get install update && sudo apt-get install upgrade -y
sudo apt-get install docker -y
directory=pwd

sudo docker build -t uwaamoe/node .

sudo docker run --name uwaamoe-database -v ~/database:/data/db -p 27017:27017 -d mongo:latest
sudo docker run -p 443:5231 --name uwaamoe-app -d uwaamoe/node