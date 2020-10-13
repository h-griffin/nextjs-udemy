# [next js](https://github.com/vercel/next.js?source=post_page---------------------------)

## Useful Resources & Links
Next.js Repo & Docs: https://github.com/zeit/next.js/

> $ npm init -y

> $ npm install --save-dev next react react-dom

- file system is main api, each js file becomes a route and is prerendered
- automatically lazy loads
- do not need to use react router

**files**
```
/pages
    /auth
        index.js    *url/auth*
    index.js        *url/*
```

> $ npm run dev


## styling 
- create-react-app uses css modules
- cant use modules -no webpack config

- can still use radium

```
<style jsx>{`
    div{
        padding: 20px;
    }
`}</style>
```

## 404 500 errors
`_error.js`

## life cycle hook
- static -can be called at anytime 
- async -does not return something immediatly

**class component**
```
static async getInitialProps(context){
    return {};
}
```
- executes on server or client
- use to initilize app before it loads

**can be used in function component**
`authIndexPage.getInitialProps = (context) => {}`

build for deployment
> $ npm run build 

ship whole project and 
> build 
> start