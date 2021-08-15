#!/bin/bash
sudo apt-get install update && sudo apt-get install upgrade -y
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

sudo docker build -t uwaamoe/node .

sudo docker run --name uwaamoe-database -v ~/database:/data/db -p 27017:27017 -d mongo:latest
sudo docker run -p 443:5231 --name uwaamoe-app -d uwaamoe/node