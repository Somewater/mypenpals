#!/bin/sh
set -e

exec 2>&1

OPENED_FILES_LIMIT=2048
HOME_PATH=/home/pav/srv/mypenpals
APP_PATH=/home/pav/srv/mypenpals/current
TARGET_USER=pav
APP_ENV=production
SERVER_PORT=9325

ulimit -n $OPENED_FILES_LIMIT

export LANG="en_US.UTF-8"
export LC_ALL="en_US.UTF-8"
export LC_CTYPE="UTF-8"
export JAVA_OPTS="-Xms512m -Xmx512m -Xss128m -Xmn512m"
if [ -f $APP_PATH/conf/env-java.sh ]
then
. $APP_PATH/conf/env-java.sh
fi

cd $APP_PATH

exec chpst -u $TARGET_USER ./bin/mypenpals -Denvironment=$APP_ENV -Dhttp.port=$SERVER_PORT -Dhttp.address=127.0.0.1