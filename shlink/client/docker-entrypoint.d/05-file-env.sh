#!/bin/sh

set -e

source /utils/file-env

SHLINK_SERVER_API_KEY="${SHLINK_SERVER_API_KEY}"
SHLINK_SERVER_URL="${SHLINK_SERVER_URL}"

_file_env "SHLINK_SERVER_API_KEY" ""
_file_env "SHLINK_SERVER_URL" ""

