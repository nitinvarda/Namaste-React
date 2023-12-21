# Namaste React (Ep2 - Ignite App)

### package.json
```
    version with caret and tilde
```


### package-lock.json 
```
    will break individual packages with exact version in detail 
```


### node_modules
```
    breaking node_modules (transitive dependency) our project has dependency -> that dependencies has dependencies which might have dependencies

```

### Quick Notes
```
    - if you have package-lock.json and package.json we recreact all the node_modules even if we delete.
    - cdn is not a good way for the project
    - the cdn links are static and wont update 
```

npm vs npx
```
    NPM is a package manager used to install, update or remove packages and dependencies your project requires. NPX is an NPM package used to execute any package on the NPM registry directly without installing it. 
```




## Parcel
```
- Dev Build
- local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling (support older browsers)
- Diagnostics
- Error Handling
- HTTPs
```
