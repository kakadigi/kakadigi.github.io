# kakadigi.github.io
Karya Kami Digital Landing Page

## Get started
1. Clone this repo
```
git clone git@github.com:kakadigi/kakadigi.github.io.git
```
2. Go to project folder
```
cd kakadigi.github.io.git
```
4. Install dependencies
```
npm install
```
5. Run app
```
npm run dev
```

## Code Cleaning
We used prettier library, so you can run to clean up the code
> ./bin-prettier.js --write [dir]

```
./node_modules/prettier/bin-prettier.js --write pages/
```

## Deployment
Run this command to generate Deploy public and secret key

```
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```
