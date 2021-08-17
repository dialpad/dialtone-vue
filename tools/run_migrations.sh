#!/bin/bash

####################################################################################################################################
# run_migrations.sh                                                                                                                #
####################################################################################################################################
# Description:                                                                                                                     #
#  The following script will run the migrate script for css / less vars, component classes and utility classes against a directory #
# Args:                                                                                                                            #
#  -m <string>: A relative path to the class / var maps directory                                                                  #
#  -d <string>: A relative path to a directory to migrate                                                                          #
####################################################################################################################################

# Usage method
usage() {
  echo "Usage: $0 [-m <string>] [-d <string>]";
  exit 1;
}

# Get arguments
while getopts "m:d:" option; do
  case "${option}" in
    m)
      MIGRATION_MAP_DIR=$OPTARG
      ;;
    d)
      MIGRATION_DIR=$OPTARG
      ;;
    *)
      usage
      ;;
  esac
done

if [ -z "$MIGRATION_MAP_DIR" ]
  then
    echo "Please provide a path to the migration maps directory"
    usage
    exit 1
fi

if [ -z "$MIGRATION_DIR" ]
  then
    echo "Please provide a path to a directory to migrate"
    usage
    exit 1
fi

echo "Starting migration in 10 seconds"

echo "Migrating Component Classes..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/component_class.txt -d ${MIGRATION_DIR} -r
echo "Component Classes Migrated!"

echo "Migrating Utility Classes..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/utility_class.txt -d ${MIGRATION_DIR} -r
echo "Utility Classes Migrated!"

echo "Migrating LESS Variables..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/less_var.txt -d ${MIGRATION_DIR} -v -r
echo "LESS Variables Migrated!"

echo "Migrating CSS Variables..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/css_var.txt -d ${MIGRATION_DIR} -v -r
echo "CSS Variables Migrated!"

echo "Migrating Dialtone Icons..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/icons.txt  -d ${MIGRATION_DIR} -v -r
echo "Dialtone Icons Migrated!"

echo "Migrating Auto Generated Dialtone Classes..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/auto_generated_classes.txt  -d ${MIGRATION_DIR} -a -r
echo "Auto Generated Dialtone Classes Migrated!"

echo "Migrating Class Corrections..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/migration_class_corrections.txt  -d ${MIGRATION_DIR} -r
echo "Class Corrections Migrated!"

echo "Migrating Mixin Corrections..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/migration_mixin_corrections.txt  -d ${MIGRATION_DIR} -a -r
echo "Mixin Corrections Migrated!"

echo "Migrating Corrections..."
sh ./migrate.sh -m ${MIGRATION_MAP_DIR}/migration_corrections.txt  -d ${MIGRATION_DIR} -v -r
echo "Corrections Migrated!"

echo "Migration Complete!"
