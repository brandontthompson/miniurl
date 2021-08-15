#!/bin/bash
sudo apt-get install update && sudo apt-get install upgrade -y
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

sudo docker network create uwaamoe-network

sudo docker build -t uwaamoe/node .

sudo docker run --name uwaamoe-database -v ~/database:/data/db -p 27017:27017 -d --network uwaamoe-network mongo:latest
sudo docker run --name uwaamoe-app -p 443:5231 -d --network uwaamoe-network uwaamoe/node