#!/bin/bash

source paths_dirs.sh

install_packages()
{
    if [ -f $path_DONE_installed ]; then return; fi
    # Funkcja sprawdzająca czy pakiet jest zainstalowany
    check_and_install()
    {
        PACKAGE=$1
        if ! dpkg-query -W -f='${Status}' "$PACKAGE" 2>/dev/null | grep "install ok installed" > /dev/null; then
            echo "$PACKAGE is not installed. Installing..."
            sudo apt install -y "$PACKAGE"
            if [ $? -eq 0 ]; then
                echo ""
            else
                echo -e "\nstart_all.sh - ERROR - unable to install this package: $PACKAGE\n"
                exit
            fi
        fi
    }    
    # Aktualizacja listy pakietów
    sudo apt update -y > /dev/null 2>&1 && sudo apt upgrade -y > /dev/null 2>&1
    # Sprawdzanie i instalowanie każdego pakietu
    for PACKAGE in "${INSTALL_PACKAGES[@]}"; do
        check_and_install "$PACKAGE"
    done

    echo -ne "\n\n"
    echo "Instalation completed"
    echo "DONE" > $path_DONE_installed
    echo -ne "\n\n"
}

# START #

create_dir $dir_DONE

install_packages