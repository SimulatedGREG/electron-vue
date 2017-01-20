#!/bin/bash

# Update lists
sudo apt-get update

# Preset agreement to install ttf programmatically
echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true | sudo debconf-set-selections
sudo apt-get -y install ttf-mscorefonts-installer

# Install wine for win32 building support
sudo apt-get -y install wine

# Install `electron-builder` dependencies
sudo apt-get install --no-install-recommends -y icnsutils graphicsmagick xz-utils
