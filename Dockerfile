FROM node:18.17.1

# Would be useful to clone the repo even if the app volume is mounted so it does not require to mount the server to a folder in production environments
# (ex: you could just not provide a volume mount and it would use the cloned repo instead. This does not break anything because when the volume is mounted it replaces the original cloned repo anyways)

WORKDIR /frontend/1D-Chess-2.0-Frontend

CMD [ "bash", "DockerStart.sh" ]
