#!/bin/bash

ENTRY_POINT="http://localhost:8080"

# Test root endpoint
echo "Testing root endpoint:"
curl -s $ENTRY_POINT | jq '.'


curl -s "$ENTRY_POINT/divide/0" | jq '.'
