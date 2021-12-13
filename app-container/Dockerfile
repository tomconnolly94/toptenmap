# Use the node base image
FROM node:slim

# Set the working directory to /src
WORKDIR /proj-dir

# Copy the current directory contents into the container at /app 
ADD . /proj-dir

# add python bins
RUN apt-get update -y
RUN apt-get install -y python3
RUN apt-get install -y python3-pip

# Install the dependencies
RUN pip3 install -r api/requirements.txt
RUN npm install --prefix ./client

# run frontend static file build
#RUN client/node_modules/gulp/bin/gulp.js --gulpfile client/build/gulpfile.js build

# run the command to start uWSGI
CMD ["uwsgi", "api/app.ini"]
