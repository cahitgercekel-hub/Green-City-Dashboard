#!/bin/bash

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]***REMOVED***")" && pwd)
OUTPUT_PATH="$SCRIPT_DIR/seed.sql"

docker exec klimadashboard_postgres pg_dump -U directus directus > "$OUTPUT_PATH"