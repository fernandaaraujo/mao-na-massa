#!/bin/bash
cd /home/faraujo/mao-na-massa/ &&
git pull -r &&
forever start index.js
