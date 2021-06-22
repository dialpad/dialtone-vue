#!/bin/bash

####################################################################################################################################
# migrate.sh                                                                                                                       #
####################################################################################################################################
# Description:                                                                                                                     #
#  The following script will automate replacing Dialtone V5 vars and classes with their Dialtone V6 counterparts                   #
# Args:                                                                                                                            #
#  -m <string>: A relative path to the migration map file, the file should contain lines with the following format OLD_STR:NEW_STR #
#  -d <string>: A relative path to the directory to be migrated                                                                    #
#  -e <string>: Provides an exclusion string for files to be excluded in the search                                                #
#  -r:          Enables recursive traversal of the directory                                                                       #
# Notes:                                                                                                                           #
#  Migration Map:                                                                                                                  #
#    Order matters, ensure that the longest matches appear first in the file.                                                      #
#    Example:                                                                                                                      #
#      class-to-migrate--variant-1                                                                                                 #
#      class-to-migrate--variant-2                                                                                                 #
#      class-to-migrate                                                                                                            #
####################################################################################################################################

# Usage method
usage() {
  echo "Usage: $0 [-m <string>] [-d <string>] [-e <string>] [-r]";
  exit 1;
}

# Constants
GREP_FLAGS=(-l)
GREP_INCLUDE=(--include=\*.{js,vue,handlebars})

# Get arguments
while getopts "m:d:e:r" option; do
  case "${option}" in
    m)
      MIGRATION_MAP_FILE=$OPTARG
      ;;
    d)
      DIRECTORY=$(cd "$(dirname "$OPTARG")"; pwd)/$(basename "$OPTARG")
      ;;
    e)
      GREP_FLAGS+=(--exclude=${OPTARG})
      ;;
    r)
      GREP_FLAGS+=(-r)
      ;;
    *)
      usage
      ;;
  esac
done

if [ -z "$MIGRATION_MAP_FILE" ]
  then
    echo "Please provide a migration map file"
    usage
    exit 1
fi

if [ -z "$DIRECTORY" ]
  then
    echo "Please provide a directory to migrate"
    usage
    exit 1
fi

while read -r line; do
  # Parse line from migration map
  FIND_STRING="$(cut -d':' -f1 <<< "$line")"
  REPLACEMENT_STRING="$(cut -d':' -f2 <<< "$line")"

  # Find and replace strings ("" is required on macos when using xargs and sed)
  grep ${GREP_FLAGS[@]} ${GREP_INCLUDE[@]} "${FIND_STRING}" "${DIRECTORY}" | xargs sed -i "" "s/${FIND_STRING}/${REPLACEMENT_STRING}/g"
done < "$MIGRATION_MAP_FILE"
