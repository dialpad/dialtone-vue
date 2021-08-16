# README

## Description

The following directory contains a set of scripts and migration maps used by the scripts in order to migrate our codebases
from Dialtone V5 to Dialtone V6 (Our In-House Design System).

## Migration Maps

These files are used by the scripts in this directory and contain a list of from:to mappings or a list of classnames to
validate against. The maps follow several formats that will be listed below.

### Formats

#### Variable / Class

These maps contain a list of from:to mappings separated by a `:` delimiter. The from mapping is space delimited.

```txt
d-old-dialtone-class:d-new-dialtone-class-1 d-new-dialtone-class-1
@old-dialtone-less-var:@new-dialtone-less-var
--old-dialtone-css-var:--new-dialtone-css-var
```

#### Auto Generated Class / Mixin Corrections

These maps contain a list of from:to mappings separated by a `|` delimiter. The delimiter was changed from `:` because
we are mapping classes that are auto generated and not accessible in Less to their equivalent styles which will contain
the `:` character.

#### Validation

These maps contain a list of classes and / or variables that no longer exist in Dialtone.

```txt
d-some-removed-dialtone-class
@some-removed-dialtone-less-variable
--some-removed-dialtone-css-variable
```

### Location(s)

The migration maps are located within the following sub directories.

```bash
/migration/maps
/migration/removed
```

## Scripts

### Migration Scripts

#### migrate_uc.sh

The following script is used to apply migrations to Dialpad Meetings (formerly UC).

##### Usage

```bash
./migrate_uc.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_UC_DIRECTORY>
```

##### Example

```bash
./migrate_uc.sh -m ./migration/maps -d ../../firespotter/uc_client
```

#### migrate_uv.sh

The following script is used to apply migrations to Dialpad (UV).

##### Usage

```bash
./migrate_uv.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_UV_DIRECTORY>
```

##### Example

```bash
./migrate_uv.sh -m ./migration/maps -d ../../firespotter/ubervoice
```

#### run_migrations.sh

The following script is used to run a set of migrations against a specified directory.

##### Usage

```bash
./run_migrations.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_DIRECTORY_TO_MIGRATE>
```

##### Example

```bash
./run_migrations.sh -m ./migration/maps -d ../../firespotter/ubervoice/static/js
```

#### migrate.sh

The following script is used to run a migration map against a specified directory.

##### Usage

```bash
./migrate.sh -m <PATH_TO_MIGRATION_MAP>  -d <PATH_TO_DIRECTORY_TO_MIGRATE> -r -v
```

##### Example

```bash
./migrate.sh -m ./migration/maps/less_var.txt  -d ../../firespotter/uc_client/less -r -v
```

### Validation Scripts

#### validate_uc.sh

The following script will run validate the Dialpad Meetings (UC) codebase for usages of
removed classes and variables.

##### Usage

```bash
./validate_uc.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_UC_DIRECTORY>
```

##### Example

```bash
./validate_uc.sh -m ./migration/removed -d ../../firespotter/uc_client
```

#### validate_uv.sh

The following script will run validate the Dialpad (UV) codebase for usages of
removed classes and variables.

##### Usage

```bash
./validate_uv.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_UV_DIRECTORY>
```

##### Example

```bash
./validate_uv.sh -m ./migration/removed -d ../../firespotter/ubervoice
```

#### run_validations.sh

The following script will validate a specified directory for usages of removed classes and variables.

##### Usage

```bash
./run_validations.sh -m <PATH_TO_VALIDATION_MAP_DIRECTORY> -d <PATH_TO_DIRECTORY_TO_MIGRATE>
```

##### Example

```bash
./run_validations.sh -m ./migration/removed -d ../../firespotter/uc_client/src
```

#### validate.sh

The following script will validate a speficied directory for usages of removed classes and variables using
a provided validation list.

##### Usage

```bash
./validate.sh -f <PATH_TO_VALIDATION_MAP> -d <PATH_TO_DIRECTORY_TO_MIGRATE> -r
```

##### Example

```bash
./validate.sh -f ./migration/removed/less_var.txt -d ../../firespotter/uc_client/src -r
```

### Utility Scripts

TODO

## Dialtone Migration Instructions

### Dialpad Meetings (formerly UC)

TODO

### Dialpad (UV)

TBD
