#!/bin/bash
set -x

# Czekaj, aż PostgreSQL się uruchomi
sleep 5

# Połącz się z bazą i dodaj nowy wpis
PGPASSWORD=$PGPASSWORD psql -U $PGUSER -d $PGDATABASE -h db -c "INSERT INTO example_tab DEFAULT VALUES;"

echo "Dodano nowy rekord do bazy!"
