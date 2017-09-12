#!/bin/bash
cd /home/faraujo/mao-na-massa/ &&
git pull -r &&
forever stopall &&
forever start index.js
