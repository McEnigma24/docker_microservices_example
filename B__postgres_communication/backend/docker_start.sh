#!/bin/bash
# set -e

# Uruchom skrypt dodający nowy rekord
./add_new_record.sh

# Uruchom backend (Node.js)
exec node app.js
