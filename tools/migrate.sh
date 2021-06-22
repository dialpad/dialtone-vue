#!/bin/bash

###########################################################################################################################
# migrate.sh                                                                                                              #
###########################################################################################################################
# Description:                                                                                                            #
#  The following script will automate replacing Dialtone V5 vars and classes with their Dialtone V6 counterparts          #
# Args:                                                                                                                   #
#  $1: A relative path to the migration map file, the file should contain lines with the following format OLD_STR:NEW_STR #
#  $2: A relative path to the directory to be migrated                                                                    #
###########################################################################################################################

if [ -z "$1" ]
  then
    echo "Please provide a migration map file"
    echo "Example Usage: ./migrate.sh MIGRATION_MAP_FILE.txt DIRECTORY"
    exit 1
fi

if [ -z "$2" ]
  then
    echo "Please provide a directory to migrate"
    echo "Example Usage: ./migrate.sh MIGRATION_MAP_FILE.txt DIRECTORY"
    exit 1
fi

MIGRATION_MAP_FILE=$1
# Converting relative to absolute path so that grep will output absolute paths
DIRECTORY=$(cd "$(dirname "$2")"; pwd)/$(basename "$2")

while read -r line; do
  # Parse line from migration map
  FIND_STRING="$(cut -d':' -f1 <<< "$line")"
  REPLACEMENT_STRING="$(cut -d':' -f2 <<< "$line")"

  # Find and replace strings ("" is required on macos when using xargs and sed)
  grep -rl "${FIND_STRING}" "${DIRECTORY}" | xargs sed -i "" "s/${FIND_STRING}/${REPLACEMENT_STRING}/g"
done < "$MIGRATION_MAP_FILE"
