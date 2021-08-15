#!/bin/bash
sudo apt-get install update && sudo apt-get install upgrade -y
sudo apt-get install docker -y
sudo docker build ~/database/. -t mongodb/uwaamoe
docker build . -t nodejs/uwaamoe

sudo docker run -p 27017:27017 -d mongodb/uwaamoe
sudo docker run -p 443:5231 -d nodejs/uwaamoe