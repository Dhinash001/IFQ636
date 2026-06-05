
**Assessment 1: PET STORE PROJECT**
---

**Access**

URL: 52.64.148.37

Test Login Credentials:
```
username: testuser1
password: test@2026
```

#How to SETUP

First you will need to install React.

```
npm install -g create-react-app

```
then:

```
create-react-app pets
cd my-app/
npm start

```

To download the repo and run locally, please clone:

```
git clone https://github.com/NguyenTungs/react-express-mongodb-example.git

cd pets

npm install

npm run build

npm start

```

Just one things, if you want running with start:dev then

```
npm run start:dev

```
---

**GitHub link of the starter project: **[https://github.com/nahaQUT/sampleapp_IFQ636.git](https://github.com/nahaQUT/sampleapp_IFQ636.git)

---

## Folder Structure

After creation, your project should look like this:

```
pets/
  README.md
  node_modules/
  package.json
  frontend/
	package.json
	public/
		index.html
		favicon.ico
	src/
		App.css
		App.js
		App.test.js
		index.css
		index.js
		logo.svg
   backend/
	package.json
	.env
	server.js
	config/
	controllers/
	middleware/
	models/
	node_modules/
	routes/
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack wonâ€™t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.