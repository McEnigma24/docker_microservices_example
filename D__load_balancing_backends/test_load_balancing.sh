#!/bin/bash

# Liczba zapytań do wykonania
NUM_REQUESTS=20
# Adres serwisu frontend
# FRONTEND_URL="http://localhost:3001"
FRONTEND_URL="http://localhost:3002"

echo "Testowanie load balancingu - wykonuję $NUM_REQUESTS zapytań..."
echo

for i in $(seq 1 $NUM_REQUESTS); do
  echo "Zapytanie $i:"
  curl -s $FRONTEND_URL | jq .
  echo "-------------------"
  sleep 0.5
done

echo
echo "Test zakończony."