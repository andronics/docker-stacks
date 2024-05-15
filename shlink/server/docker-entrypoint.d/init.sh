#!/bin/sh

set -e

source /utils/file-env

DEFAULT_DOMAIN="${DEFAULT_DOMAIN}"
GEOLITE_LICENSE_KEY="${GEOLITE_LICENSE_KEY}"
INITIAL_API_KEY="${INITIAL_API_KEY}"

_file_env "DEFAULT_DOMAIN" ""
_file_env "GEOLITE_LICENSE_KEY" ""
_file_env "INITIAL_API_KEY" ""

cd /etc/shlink

/bin/sh ./docker-entrypoint.sh