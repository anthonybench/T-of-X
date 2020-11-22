# T(x)
*Developer documentation for our client application*

<br />

## Deployment

From the project root (`/t-of-x/`) enter:
```
$ npm run build

```
and make sure you have your configuration file `/app.yaml` configured with a minimum of the following specifications:
```yaml
runtime: nodejs12

handlers:
  - url: /
    static_files: build/index.html
    upload: build/index.html

  - url: /
    static_dir: build
```
Remember this is a react application. Given the *create-react-app* template, you are now free to deploy the build to your host. As an example of *Google Cloud*, open your [Google Cloud CLI Tool] and navigate to your project directory root (client app). Enter:
```
$ glcoud app deploy
```
and wait for the deployment to work. Consult your Google Cloud dashboard for debugging purposes. \
To view the deployment conveniently, enter:
```
$ gcloud app browse
```

## Personalize

Here is a complete bulleted summary of what placeholder assets to replace with the teachers:

- Landing page photo
- Landing page name
- Landing page social links