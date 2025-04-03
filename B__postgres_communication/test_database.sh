#!/bin/bash

clear

curl -s http://localhost:3000/records | jq .