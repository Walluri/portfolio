1. CSS BUILD PROCESS :
Convert sass to css : node-sass main.scss style.compiled.css
Concat all css files : concat -o style.concat.css ./style.compiled.css ./fontawesome/all.css
AddPrefixes to all css : postcss --use autoprefixer -b \"last 10 versions\" ./style.concat.css -o ./style.prefix.css
Minify/COMPRESS css files to style.css : node-sass ./style.prefix.css style.css --output-style compressed


Points to note: 
IF YOU USE THIS :  concat -o style.concat.css ./style.compiled.css ./fontawesome/all.css
COMMENT IN HTML :  <link rel="stylesheet" href="./fontawesome/all.css" >

2. 
add *.svg files to the gitignore. We are taking the path and embedding it in a reactJS component in the resource folder itself.

3.
