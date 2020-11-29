# T(x) API
*How to interface with the backend*

<br />

## Deployment
This application is hosted on *Vercel*. Vercel configures deployments by searching for `/vercel.json`, in the project root. Here, you must at a minimum specify the *version*, *builds* array, and *routes* array.

As an example of our version and build, the version and build attributes may take the form:
```json
{
    "version": 2,
    "builds": [{ "src": "server.js", "use": "@vercel/node" }],
    ...
}
```

Routes are also important, and provide deployment flexibility. Here is one field of ours, see our `/vercel.json` file for further curiosity:
```json
{
    ...
    "routes": [
        ...
        { "src": "/sessions/delete", "methods": ["DELETE"], "dest": "server.js"},
        ...
    ]
}
```
Documentation on this configuration file can be found [here](https://vercel.com/docs/configuration). \
To deploy, make sure you have the [vercel cli tool](https://vercel.com/download) installed, and from the project root (`/backend/`) enter:
```
$ vercel
```

## Core Technologies
- Node
- Express
- MongoDB

<br />

## Usage

***Sessions***

`GET`

**https://t-of-x-backend.anthonybench.vercel.app/sessions**
> Returns an array of json *session* objects of the following response-format:
>```json
>[
>  {
>    "_id": "5fb980ecd44fcd0d40fe2983",
>    "id": 1,
>    "uid": 2,
>    "duration": 30,
>    "date": "2020-12-11T15:42:37.162Z",
>    "createdAt": "2020-11-21T21:04:44.345Z",
>    "updatedAt": "2020-11-21T21:04:44.345Z",
>    "__v": 0
>  },
>  {
>    "_id": "5fb980edd44fcd0d40fe2985",
>    "id": 2,
>    "uid": 3,
>    "duration": 30,
>    "date": "2020-12-12T15:42:37.162Z",
>    "createdAt": "2020-11-21T21:04:45.428Z",
>    "updatedAt": "2020-11-21T21:04:45.428Z",
>    "__v": 0
>  },
>  {
>    "_id": "5fb980eed44fcd0d40fe2987",
>    "id": 3,
>    "uid": 4,
>    "duration": 30,
>    "date": "2020-12-13T15:42:37.162Z",
>    "createdAt": "2020-11-21T21:04:46.510Z",
>    "updatedAt": "2020-11-21T21:04:46.510Z",
>    "__v": 0
>  }
>]
> ```

**https://t-of-x-backend.anthonybench.vercel.app/sessions/:uid**
> Returns an array of json *session* objects that match the provided *uid*, of teh same response-format shown above.

**https://t-of-x-backend.anthonybench.vercel.app/sessions/user/:username**
> Returns an array of json *session* objects that match the provided *username*, of the same response-format shown above. If given a new user (not found in database), the user is created.

**url**
> Returns an array of the single json *user* object that matches that username, or an empty array if none found.

`POST`

**https://t-of-x-backend.anthonybench.vercel.app/sessions/add**
> Adds user to the database. Request body must be of the following format:
> ```json
> {
>   "uid" : <user_id[int]>,
>   "duration" : <session_duration_in_minutes[int]>,
>   "date" : <session_date[string]>
> }
> ```
> Note that for `<session_date[string]>`, it must be of the format `2020-12-20T15:42:37.162Z`.

`DELETE`

**https://t-of-x-backend.anthonybench.vercel.app/sessions/delete**
> Removes a specified session from the database. Request body must be of the following format:
> ```json
> {
>   "id" : <session_id[int]>
> }
> ```

<hr>

**Users**

`GET`

**https://t-of-x-backend.anthonybench.vercel.app/users**
> Returns an array of json *session* objects of the following response-format:
> ```json
>[
>  {
>    "_id": "5fb34b24cb4aaf51f41a12f0",
>    "username": "Isaac Yep",
>    "id": 1,
>    "isTeacher": true,
>    "createdAt": "2020-11-17T04:01:40.849Z",
>    "updatedAt": "2020-11-17T04:01:40.849Z",
>    "__v": 0
>  },
>  {
>    "_id": "5fb980ecd44fcd0d40fe2982",
>    "username": "Eren",
>    "id": 2,
>    "isTeacher": false,
>    "createdAt": "2020-11-21T21:04:44.316Z",
>    "updatedAt": "2020-11-21T21:04:44.316Z",
>    "__v": 0
>   },
>   {
>     "_id": "5fb980edd44fcd0d40fe2984",
>     "username": "Mikasa",
>     "id": 3,
>     "isTeacher": false,
>     "createdAt": "2020-11-21T21:04:45.402Z",
>     "updatedAt": "2020-11-21T21:04:45.402Z",
>     "__v": 0
>   }
>]
> ```

**https://t-of-x-backend.anthonybench.vercel.app/users/:uid**
> Returns an array of json *session* objects that match the provided *uid*, of teh same response-format shown above.

`POST`

**https://t-of-x-backend.anthonybench.vercel.app/users/add**
> Adds user to the database. Request body must be of the following format:
> ```json
> {
>   "username" : <username[String]>
> }
> ```
> Note that for `<session_date[string]>`, it must be of the format `2020-12-20T15:42:37.162Z`.

`DELETE`

**https://t-of-x-backend.anthonybench.vercel.app/users/delete**
> Removes a specified user from the database. Request body must be of the following format:
> ```json
> {
>   "id" : <user_id[int]>
> }
> ```

<hr>

**Counters**

`GET`

**https://t-of-x-backend.anthonybench.vercel.app/counters**
> Returns an array of a single counter object of the following format:
> ```json
> [
>   {
>     "_id": "5fb5c8dc37d36505fcad5678",
>     "session": 13,
>     "user": 14,
>     "createdAt": "2020-11-19T01:22:36.289Z",
>     "updatedAt": "2020-11-21T21:04:57.308Z",
>     "__v": 0
>   }
> ]
> ```