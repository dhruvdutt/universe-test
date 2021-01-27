FROM node:14-slim

ARG APP_NAME
ARG STAGE

EXPOSE 8888

# Create app directory
RUN mkdir /$APP_NAME && chown -R node:node /$APP_NAME

WORKDIR /$APP_NAME

# Switch to node user
USER node

# Copy dependencies files so we can have better caching as these don't change often
COPY --chown=node:node .npmrc package.json yarn.lock ./

# Install strictly from lockfile don't generate new lockfile
RUN yarn install --frozen-lockfile

# Copy app source
COPY --chown=node:node . ./

# build the app source. This command will run during docker build
RUN yarn $STAGE:build

# serve the app. This command will run during docker run
CMD yarn $STAGE:serve
