#!/bin/bash

# Liczba zapytań do wykonania
NUM_REQUESTS=10
# Adres głównego load balancera
ENTRY_POINT="http://localhost:8080"

echo "Testowanie wielowarstwowego load balancingu - wykonuję $NUM_REQUESTS zapytań..."
echo "Każde zapytanie powinno przejść przez różne instancje frontendów i backendów"
echo

# Wymaga jq do ładnego formatowania JSON
for i in $(seq 1 $NUM_REQUESTS); do
  echo "Zapytanie $i:"
  curl -s $ENTRY_POINT | jq '.'
  echo "-------------------"
  sleep 0.5
done

echo
echo "Test zakończony. Sprawdź różne wartości backend i frontend, aby potwierdzić działanie load balancingu."