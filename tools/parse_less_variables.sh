#!/bin/bash

####################################################################################################################################
# parse_less_variables.sh                                                                                                          #
####################################################################################################################################
# Description:                                                                                                                     #
#  The following script will automate replacing Dialtone V5 vars and classes with their Dialtone V6 counterparts                   #
# Args:                                                                                                                            #
#  -d <string>: A relative path to the directory to be migrated                                                                    #
#  -r:          Enables recursive traversal of the directory                                                                       #
####################################################################################################################################

# Usage method
usage() {
  echo "Usage: $0 [-d <string>] [-r]";
  exit 1;
}

# Constants
GREP_FLAGS=(-oh) # output only the matching strings
GREP_EXCLUDE=(--exclude=\*/themes/\*.less) # exclude any theme files

# Get arguments
while getopts "d:r" option; do
  case "${option}" in
    d)
      DIRECTORY=$(cd "$(dirname "$OPTARG")"; pwd)/$(basename "$OPTARG")
      ;;
    r)
      GREP_FLAGS+=(-r)
      ;;
    *)
      usage
      ;;
  esac
done

if [ -z "$DIRECTORY" ]
  then
    echo "Please provide a directory to migrate"
    usage
    exit 1
fi

# Get lines containing less variable definitions
LESS_VAR_LINES=$(grep ${GREP_FLAGS[@]} ${GREP_EXCLUDE[@]} -e "@.\+:.\+;" "${DIRECTORY}")
LESS_VARS=()

# Parse and output less variables
for line in "${LESS_VAR_LINES[@]}"
do
  echo "$(cut -d':' -f1 <<< "$line")"
done
