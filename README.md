# graphql-seed

GraphQL Seed project using:
 - Apollo Client 1.0
 - React

 Install [Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm) for a better Developer Experience

# Setup
Fill in your GraphQL endpoint to start building

```
// src/client.js
const networkInterface = createNetworkInterface({
  uri: 'GRAPHQL_ENDPOINT',
  dataIdFromObject: record => record.id,
})
```

## File Structure
```
graphql-seed/
 ├──src/ 
 |   ├──components/                * App Components
 |   │   ├──App.js                      
 |   │   ├──List.js                    
 |   │   ├──Item.js                    
 |   │   ├──Loading.js                 
 │   │   └──TopNavigation.js            
 │   ├──graphql/                   * GraphQL Folder
 |   │   └──List.query.gql 
 │   ├──utils/                     * Utils 
 |   │   └──helpers.js 
 |   ├──app.js                     * App entry point     
 |   ├──client.js                  * Apollo Client Setup
 |   ├──index.html                 * index.html for development
 │   └──style.css                  * CSS main styles
 ├──index.html                     * index.html for production
 ├──package.json                   
 ├──webpack.config.js              * webpack main configuration file
 └──webpack.dist.config.js         * webpack production

```

## License
MIT © [Gerard Sans](https://github.com/gsans)