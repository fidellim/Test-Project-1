# background OS for container
FROM node

# create dir for this img
WORKDIR /test-project-1

# copy json file from this directory to workdir
COPY package.json . 

# install dependencies
RUN yarn install

# copy files from this directory to workdir
COPY . .

# create the build folder for project
RUN yarn run build

#  expose port 3000
EXPOSE 3000

# run project
CMD ["yarn", "start"]

# to build docker / can be used to override same build
# name of tag is react
# "." refers to this folder
# ----------------------------------------
# docker build --tag react-test .
# docker build -t react-test .

# create container
# bind computer's port to container's port
# with a name of teletronics-test
# ----------------------------------------
# docker run --publish 3000:3000 --name teletronics-test react-test

# check image list
# ----------------------------------------
# docker image ls

# delete image
# ----------------------------------------
#  docker image get_id_of_image

# check containers
# ----------------------------------------
# docker ps

# delete container
# ----------------------------------------
# docker rm name_of_container -f

# check container files
# -it (interactive mode)
# ----------------------------------------
# docker exec -it name_of_container bash
# ls
