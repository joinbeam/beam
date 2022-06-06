# Set node version on alpine
FROM node:18-alpine

# Install required dependencies
RUN apk add --no-cache \
    g++ \
    gcc \
    yarn \
    autoconf \
    curl \
    automake 

# Set workdir
WORKDIR /app/packages/api

# Copy package.json
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy source
COPY . .

# Expose port 8080
EXPOSE 8080

# Start server
CMD ["yarn", "start"]