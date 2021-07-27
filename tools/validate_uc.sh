#!/bin/bash

#####################################################################################################################################
# validate_uc.sh                                                                                                                    #
#####################################################################################################################################
# Description:                                                                                                                      #
#  The following script will run the validate script for css / less vars, component classes and utility classes against a directory #
# Args:                                                                                                                             #
#  -m <string>: A relative path to the class / var validation maps directory                                                        #
#  -d <string>: A relative path to the UC directory                                                                                 #
#####################################################################################################################################

# Usage method
usage() {
  echo "Usage: $0 [-m <string>] [-d <string>]";
  exit 1;
}

# Get arguments
while getopts "m:d:" option; do
  case "${option}" in
    m)
      VALIDATION_MAP_DIR=$OPTARG
      ;;
    d)
      UC_DIR=$OPTARG
      ;;
    *)
      usage
      ;;
  esac
done

if [ -z "$VALIDATION_MAP_DIR" ]
  then
    echo "Please provide a path to the validation maps directory"
    usage
    exit 1
fi

if [ -z "$UC_DIR" ]
  then
    echo "Please provide a path to the UC directory"
    usage
    exit 1
fi

echo "Starting UC validation in 10 seconds"
sleep 10s

echo "Validating SRC Directory..."
sh ./validate.sh -m ${VALIDATION_MAP_DIR} -d ${UC_DIR}/src
echo "SRC Directory Validated!"
sleep 5s

echo "Validating Less Directory..."
sh ./validate.sh -m ${VALIDATION_MAP_DIR} -d ${UC_DIR}/less
echo "Less Directory Validated!"

echo "UC Validation Complete!"
