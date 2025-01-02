#!/bin/sh

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#NEXT_PUBLIC_DIRECTUS_URL#$NEXT_PUBLIC_DIRECTUS_URL#g"

echo "Starting App"
exec "$@"