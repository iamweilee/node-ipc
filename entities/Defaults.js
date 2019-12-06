'use strict';
const os = require('os');

class Defaults{
    appspace='app.';
    socketRoot='/tmp/';
    id=os.hostname();

    autoServe=true;

    encoding='utf8';
    rawBuffer=false;
    sync=false;

    delimiter='\f';

    silent=false;
    logDepth=5;
    logInColor=true;
    logger=console.log.bind(console);

    maxConnections=100;
    retry=500;
    maxRetries=Infinity;
    stopRetrying=false;

    IPType=getIPType();
    tls=false;
    networkHost = (this.IPType == 'IPv6') ? '::1' : '127.0.0.1';
    networkPort = 8000;

    interface={
        localAddress:false,
        localPort:false,
        family:false,
        hints:false,
        lookup:false
    }
}


function getIPType() {
    const networkInterfaces = os.networkInterfaces();
    let IPType = '';
    if (networkInterfaces
        && Array.isArray(networkInterfaces)
        && networkInterfaces.length > 0) {
        // getting the family of first network interface available
        IPType = networkInterfaces [
            Object.keys( networkInterfaces )[0]
        ][0].family;
    }
    return IPType;
}

module.exports=Defaults;
