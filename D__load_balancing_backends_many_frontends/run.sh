#!/bin/bash

# sudo docker-compose up --build

# --build - zawsze przebudowuje obrazy biorąc pod uwagę nowe zmiany, bez tej opcji domyślnie odpalane są już stworzone obrazy
# -d - uruchamia w tle (detached mode)
sudo docker-compose up --build -d
