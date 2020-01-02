#!/bin/bash

# Prompt for component name
echo New Component Name?
read compName

# Prompt for component name
echo atom? molecule? or organisim?
read atomicName

# Create files and folders
## Could touch multiple files at once but I like seeing the list
mkdir $atomicName/$compName
touch $atomicName/$compName/$compName.hbs
touch $atomicName/$compName/$compName.config.json
    mkdir $atomicName/$compName/css
    touch $atomicName/$compName/css/$compName.less

## Adds starter config
echo '{' >> $atomicName/$compName/$compName.config.json
echo '  "status": "wip",' >> $atomicName/$compName/$compName.config.json
echo '  "hidden": false,' >> $atomicName/$compName/$compName.config.json
echo '  "context": {' >> $atomicName/$compName/$compName.config.json
echo '    "modifier": ""' >> $atomicName/$compName/$compName.config.json
echo '  }' >> $atomicName/$compName/$compName.config.json
echo '}' >> $atomicName/$compName/$compName.config.json

# Done
echo Files and folders for $compName created in $atomicName