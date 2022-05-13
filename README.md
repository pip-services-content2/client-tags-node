# Tags Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-tags](https://github.com/pip-services-content2/service-tags-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* Direct client for monolytic deployments
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-tags-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-tags-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.TagsHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Record tags for a user
let partyTags = await client.recordTags(
    null,
    userId,
    ['draft', 'important']
);
```

```javascript
// Get the list of user tags
let partyTags = await client.getTags(
    null,
    userId
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

