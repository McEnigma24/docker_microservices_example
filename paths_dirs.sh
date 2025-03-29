silent_come_back() { cd - > /dev/null; }
clear_file() { if [ -f $1 ]; then rm -rf $1; fi; }
clear_file_nested() { cd $1; clear_file "$2"; silent_come_back; }
clear_dir() { if [ -d $1 ]; then rm -rf $1; fi; mkdir $1; }
clear_dir_nested() { cd $1; clear_dir "$2"; silent_come_back; }

create_dir() { if [ ! -d $1 ]; then mkdir $1; fi; }
create_dir_nested() { cd $1; create_dir "$2"; silent_come_back; }

INSTALL_PACKAGES=(
    tar
)

export dir_DONE="run_time_config"
export path_DONE_installed="$dir_DONE/DONE_installed"