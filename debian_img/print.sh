#!/bin/bash

random_num=$(( ( RANDOM % 100 )  + 1 ))
echo "Random number: $random_num"
echo "-------------------------------------"

figlet -p < data.txt

echo "-------------------------------------"

echo -e "available files:\n"
ls -al
echo ""

file_check=".all_lines"
if [ -f $file_check ]; then
{
    echo -e "$file_check DOES exist inside docker container\n"
}
else
    echo -e "$file_check does NOT exist inside docker container\n"
fi




# cd .. && ls -al # własny system plików konkretnego kontenera
