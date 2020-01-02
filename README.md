# fractal-component
Generates a new blank fractal component for faster development. Conversion to Node is a WIP. Curretly thr node version does not support atomic folders. 

## Usage
run $`npm link` to link the command to npm.
run $`npm unlink` to unlink command

To use in project you have to `cd` into the atomic folder you wish to create the component in. Then run $`new-comp [component-name]` 

## Files and folders generates
```
component-name (folder)
    component-name.config.json
    component-name.hbs
    css (folder)
        component-name.less
```