#!/bin/sh
LOG_FOLDER=/var/log/mypenpals-play
mkdir -p $LOG_FOLDER
exec svlogd -tt $LOG_FOLDER