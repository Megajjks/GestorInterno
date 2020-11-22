# Ashoka Project (Frontend)

Application to manage the process of validation and monitoring of commitments (on the client side) within the million change agents section in Ashoka.

### **About stack technologies**

The side of client was building with next technologies:

- Reactjs 16.13
- React router dom 5.2
- Style components (for css handling)
- Material UI
- Axios (for queries of the api)

## **Preparing the app**

This project can be installed with the npm or yarn package managers depending on the person's taste.

### **Installing with npm**

The first step is clone this repo and type next code in the path of project to download all dependencies necessary.

```
npm install
```

After of download you can use this comand to execute the server give of Reactjs to show the project in the port 3000 of localhost only in develop mode.

```
npm start
```

Now you can start developing and see the changes or just view the page locally.

### **Installing with yarn**

The first step is clone this repo and type next code in the path of project to download all dependencies necessary.

```
yarn install
```

After of download you can use this comand to execute the server give of Reactjs to show the project in the port 3000 of localhost only in develop mode.

```
yarn start
```

Now you can start developing and see the changes or just view the page locally.

## **Deploy the app**

To implement the client side of this app you can do it by generating a build or from a docker container

### **Generating a build**

To generate the buid folder just place this command in the terminal.
if using yarn of managemente package use this command

```
yarn build
```

if using npm of managemente package use this command

```
npm build
```

This will create a folder for you with all the statics to upload to your trusted server.

### **Upload the container of docker**

This app includes a dockerfile it allows you to upload the container to one of the server providers such as heroku, aws, etc. The dockerfile has nodejs to run the app with reactjs and ngnix to server the static app on a server.

#### **Build the docker image in local**

To run the container in you computer you need install docker and using this comand within the project

```
docker buil -t name-container .
```

-t : is used to give a name to our image which is name-container here.
. : is the relative path to docker file, since we are in folder my-node-app we used dot to represent path to docker file.

after you must execute the following command to run the container on your local machine

```
docker run -p 3000:80 -d name-container
```

#### **Build the docker image in heroku**

Heroku has a couple of slick features when it comes to Docker images. If your project has a Dockerfile, you can deploy your app directly using the Heroku Container Registry.

First, log in to the Container Registry, remember before install the CLI of heroku [View more](https://devcenter.heroku.com/articles/heroku-cli "View more")

```
heroku container:login
```

Then, create a new app.

```
heroku create
```

Add the Git URL as a new remote to your app.

```
git remote add docker https://git.heroku.com/<your-app-name>.git
```

Then, push your Docker image to Heroku’s Container Registry.

```
heroku container:push web --remote docker
```

Once the process has completed, release the image of your app:

```
heroku container:release web --remote docker
```

And, open the app in your browser:

```
heroku open --remote docker
```

You’ll need to add your app’s URI in Okta before you can log in.
