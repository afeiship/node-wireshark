#node-wireshark
Mini network wireshark tools based on node-http-proxy.


## set host:
+ 127.0.0.1   app.zaijiadd.com
+ nginx app.zaijiadd.com


##config:
```js
{
  "target":{
    "hostname":"www.dev.com",
    "port":"80"
  },
  "proxy":{
    "type":"http",
    "port":"8888"
  }
}
```

##useage:
```js
var nodeWireshark = require('node-wireshark');
var config = require('./proxy.json');
nodeWireshark(config);
```
## enjoy it:
```bash
node app.js
listening on port 8888
```
