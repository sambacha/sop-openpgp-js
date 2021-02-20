#!/bin/bash
for file in ./*-test.js
do
  node "$file"
  if [ $? -ne 0 ]
  then
    exit 1
  fi
done
