#!/bin/bash

# Variables
WORKSPACE_NAME="klimadashboard-ms"
DIRECTUS_CONTAINER="klimadashboard-ms_devcontainer-directus-1"
DB_CONTAINER="klimadashboard-ms_devcontainer-db-1"
DB_USER="postgres"
DB_NAME="postgres"
SQL_DUMP_PATH="/workspaces/${WORKSPACE_NAME}/.devcontainer/postgres_17_directus_11_dump.sql"

# # Execute SQL dump
docker exec $DB_CONTAINER psql -U $DB_USER $DB_NAME < $SQL_DUMP_PATH

# copy .devcontainer/snapshot.yaml to docker container
docker cp .devcontainer/snapshot-directus-11.yaml $DIRECTUS_CONTAINER:/snapshot.yaml

# run snapshot apply
docker exec $DIRECTUS_CONTAINER npx directus schema apply --yes /snapshot.yaml

# restart directus
docker restart $DIRECTUS_CONTAINER

# Configure Git safe directory
git config --global --add safe.directory /workspaces/$WORKSPACE_NAME

# Install dependencies
yarn install
