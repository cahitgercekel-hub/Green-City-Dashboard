#!/bin/sh

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#NEXT_PUBLIC_DIRECTUS_URL#$NEXT_PUBLIC_DIRECTUS_URL#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#ECOCOUNTER_API_TOKEN#$ECOCOUNTER_API_TOKEN#g"

echo "Starting App"
exec "$@"