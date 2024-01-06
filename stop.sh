#!/bin/bash
CONTAINERS=$(docker ps -qa)

if [ -n "$CONTAINERS" ]; then
    docker stop $CONTAINERS
    docker rm $CONTAINERS

else
    echo "No running containers to stop."
fi
