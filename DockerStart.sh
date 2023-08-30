#! /usr/bin/bash
npm install --dev
npm rebuild esbuild

if [ "$ENV" = "dev" ]; then
    npm run dev
elif [ "$ENV" = "prod" ]; then
    npm run build
else echo "[ENV] environment variable not set correctly"
fi