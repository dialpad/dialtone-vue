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

### File(s)

#### `component_class.txt`

Contains mappings for Dialtone component classes.

#### `utility_class.txt`

Contains mappings for Dialtone utility classes.

#### `css_var.txt`

Contains mappings for Dialtone CSS variables.

#### `less_var.txt`

Contains mappings for Dialtone Less variables.

#### `icons.txt`

Contains mappings for Dialtone icons.

#### `auto_generated_classes.txt`

Contains mappings for auto generated Dialtone classes that will not resolve in Less.

#### `migration_class_corrections.txt`

Contains mappings for any incorrectly migrated Dialtone classes.

#### `migration_mixin_corrections.txt`

Contains mappings for any incorrectly migrated Dialtone mixins.

#### `migration_corrections.txt`

Contains mappings for anything else that might have been incorrectly migrated.

## Scripts

### Migration Scripts

#### `migrate_uc.sh`

The following script is used to apply migrations to Dialpad Meetings (formerly UC).

##### Usage

```bash
./migrate_uc.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_UC_DIRECTORY>
```

##### Example

```bash
./migrate_uc.sh -m ./migration/maps -d ../../firespotter/uc_client
```

#### `migrate_uv.sh`

The following script is used to apply migrations to Dialpad (UV).

##### Usage

```bash
./migrate_uv.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_UV_DIRECTORY>
```

##### Example

```bash
./migrate_uv.sh -m ./migration/maps -d ../../firespotter/ubervoice
```

#### `run_migrations.sh`

The following script is used to run a set of migrations against a specified directory.

##### Usage

```bash
./run_migrations.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_DIRECTORY_TO_MIGRATE>
```

##### Example

```bash
./run_migrations.sh -m ./migration/maps -d ../../firespotter/ubervoice/static/js
```

#### `migrate.sh`

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

#### `validate_uc.sh`

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

#### `validate_uv.sh`

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

#### `run_validations.sh`

The following script will validate a specified directory for usages of removed classes and variables.

##### Usage

```bash
./run_validations.sh -m <PATH_TO_VALIDATION_MAP_DIRECTORY> -d <PATH_TO_DIRECTORY_TO_MIGRATE>
```

##### Example

```bash
./run_validations.sh -m ./migration/removed -d ../../firespotter/uc_client/src
```

#### `validate.sh`

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

1. Cut from master

```bash
gco -b my-migration-branch-name
```

2. Apply Manual Migrations via cherry pick (ebf821e, 7e2064f98b21e86facbe896e740c2353512537e7)

```bash
git cherry-pick ebf821e
git cherry-pick 7e2064f98b21e86facbe896e740c2353512537e7
...
```

3. Run migration script

```bash
cd dialtone-vue
gco add-dialtone-migration-mapping-and-scripts
git pull
cd tools
./migrate_uc.sh -m ./migration/maps -d ../../firespotter/uc_client
```

4. Update Dialtone, Add Dialtone Vue

```json
"@dialpad/dialtone": "^6.0.0-beta.12",
"@dialpad/dialtone-vue": "^1.0.0-beta.5",
```

5. Install dependencies

```bash
npm install
```

6. Test build

```bash
npm run dev
```

7. Add CSS Loader for Dialtone Vue

```txt
TODO
```

8. Apply recommended Cleanup Steps:
    1. Remove duplicate btn classes

    ```text
      Find using the following regex `\.d-btn\(\);.*\.d-btn\(\);`
    ```

    2. Remove duplicate link classes

    ```text
    Find using the following regex `\.d-link\(\);.*\.d-link\(\);`
    ```

### Dialpad (UV)

TBD
