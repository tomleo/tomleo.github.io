#!/bin/bash
#Purpose = Build Website
#Created on 2019-02-27
#Author = Thomas Leo
#Version 1.0
export LANG=C.UTF-8
sassc="$(pwd)/lib/sassc/bin/sassc"
src="$(pwd)/src"
dist="$(pwd)/dist"

$sassc -I "$src/scss" "$src/scss/base.scss" "$dist/base.css"

for f in $(find ./src -type f -not -iname "*.scss" -not -iname ".*" | cut -c7-); do
    p=`dirname "$dist/$f"`
    mkdir -p "$p"
    cp "$src/$f" "$dist/$f"
done

