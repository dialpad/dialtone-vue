# README

## Description

The following directory contains a set of scripts and migration maps used by the scripts in order to migrate our codebases
from Dialtone V5 to Dialtone V6 (Our In-House Design System).

## Known Issues

### Spacing

Some of the spacing values have changed within the Dialtone component classes. As a result, the migrated code may be
visually different. To address these issues, we will have to manually update components which do not match the previous
design.

## Assumptions

### Development Time

We did not want to spend too much time working on scripts to migrate our codebase. As a result, we have created a more or
less a find/replace solution; not a tokenizer. Due to this limitation, there will be cases of multiples of the same
classes and mixins since we cannot determine how many of a given class or mixin is in a given block of code.

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

#### `handset.txt`

Contains mappings for handset components.

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
./run_migrations.sh -m <PATH_TO_MIGRATION_MAPS_DIRECTORY> -d <PATH_TO_DIRECTORY_OR_FILE_TO_MIGRATE>
```

##### Example

```bash
./run_migrations.sh -m ./migration/maps -d ../../firespotter/ubervoice/static/js
```

#### `migrate.sh`

The following script is used to run a migration map against a specified directory.

##### Usage

```bash
./migrate.sh -m <PATH_TO_MIGRATION_MAP>  -d <PATH_TO_DIRECTORY_OR_FILE_TO_MIGRATE> -r -v
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

#### `parse_less_variables.sh`

The following script will extract and output less variables from a given directory.

##### Usage

```bash
./parse_less_variables.sh -d <PATH_TO_DIRECTORY> -r
```

##### Example

```bash
./parse_less_variables.sh -d ../../dialtone/lib/build/less -r > less_variables_v6.txt
```

#### `compare_css_vars.js`

The following script will compare V5 and V6 CSS variables, it will output a file `removed.txt` containing any variables
that are no longer present in Dialtone V6.

##### Usage

```bash
node compare_css_vars.js <PATH_TO_FILE_CONTAINING_V5_CSS_VARS> <PATH_TO_FILE_CONTAINING_V6_CSS_VARS>
```

##### Example

```bash
node compare_css_vars.js output/css_variables_v5.txt output/css_variables_v6.txt
```

#### `compare_less_vars.js`

The following script will compare V5 and V6 Less variables, it will output a file `removed.txt` containing any variables
that are no longer present in Dialtone V6.

##### Usage

```bash
node compare_less_vars.js <PATH_TO_FILE_CONTAINING_V5_LESS_VARS> <PATH_TO_FILE_CONTAINING_V6_LESS_VARS>
```

##### Example

```bash
node compare_less_vars.js output/less_variables_v5.txt output/less_variables_v6.txt
```

#### `validate_maps.js`

The following script will ensure that variables and classes present in a migration map file are also present in
Dialtone V6.

##### Usage

```bash
node validate_maps.js <PATH_TO_MAP_FILE> <PATH_TO_DIALTONE_LESS_DIRECTORY> <PATH_TO_DIALTONE_CSS>
```

##### Example

```bash
node validate_maps.js migration/maps/less_var.txt ../../dialtone/lib/build/less/ ../../dialtone/lib/dist/css/dialtone.css
```

## Dialtone Migration Instructions

### Dialpad Meetings (formerly UC)

1. Cut from master

```bash
gco -b my-migration-branch-name
```

2. Apply Manual Migrations via cherry pick
(ebf821e, 7e2064f98b21e86facbe896e740c2353512537e7, a47da3c, a939321, 1e388d9, db5ac0a)

```bash
git cherry-pick ebf821e
git cherry-pick 7e2064f98b21e86facbe896e740c2353512537e7
git cherry-pick a47da3c # Selects Migration
git cherry-pick a939321 # Brand Buttons Migration
git cherry-pick 1e388d9 # Fonts
git cherry-pick db5ac0a # Less Compiler Options Fix
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
"@dialpad/dialtone": "^6.0.0-beta.13",
"@dialpad/dialtone-vue": "^1.0.0-beta.6",
```

5. Install dependencies

```bash
npm install
```

6. Test build

```bash
npm run dev
```

7. Apply recommended Cleanup Steps:
    1. Remove duplicate btn classes

    ```text
      Find using the following regex `\.d-btn\(\);.*\.d-btn\(\);`
    ```

    2. Remove duplicate link classes

    ```text
    Find using the following regex `\.d-link\(\);.*\.d-link\(\);`
    ```

#### Potential Debugging Steps

You may also have to do the following to get a working build:

1. Migrate `@primary-color` to `@purple-500`
2. Fix missing semicolon error in the following class `.dashboard-conferences__fetching-more-calls`

### Dialpad (UV)

1. Cut from master

```bash
gco -b my-migration-branch-name
```

2. Apply Manual Migrations via cherry pick (TBD)

```bash
git cherry-pick TBD
...
```

3. Run migration script

```bash
cd dialtone-vue
gco add-dialtone-migration-mapping-and-scripts
git pull
cd tools
./migrate_uv.sh -m ./migration/maps -d ../../firespotter/ubervoice
```

4. Update Dialtone, Add Dialtone Vue

```json
"@dialpad/dialtone": "^6.0.0-beta.13",
"@dialpad/dialtone-vue": "^1.0.0-beta.6",
```

5. Install dependencies

```bash
npm install
```

6. Test build

```bash
npm run dev
```

7. Apply recommended Cleanup Steps:
    1. Remove duplicate btn classes

    ```text
      Find using the following regex `\.d-btn\(\);.*\.d-btn\(\);`
    ```

    2. Remove duplicate link classes

    ```text
    Find using the following regex `\.d-link\(\);.*\.d-link\(\);`
    ```

## Dialtone Migration Branches

### UC Manual Migration

Contains manual migrations for the Dialpad Meetings (UC) codebase.

`dialtone-6-uc-manual-migration`

### UV Manual Migration

Contains manual migrations for the Dialpad (UV) codebase.

`dialtone-6-uv-manual-migration`
### UC Migration

We are unlikely to use this branch. Instead we will either create a new migration branch and cherry-pick the manual
migration changes, then run the migration script or we will use the manual migration branch and run the automated
migration just prior to merging.


`dialtone-6-uc-migration-uv-changes-removed`

### UV Migration

We are unlikely to use this branch. Instead we will either create a new migration branch and cherry-pick the manual
migration changes, then run the migration script or we will use the manual migration branch and run the automated
migration just prior to merging.

`dialtone-6-uv-migration`

## Dialtone 6 Migration Guide (Public Link)

https://ginger-cairnsmore-d47.notion.site/Dialtone-V6-Migration-Guide-b071189401174341b40217969abce8a0
