// Author: liruqi@gmail.com 
// PAC for smarthosts users

var proxy = "PROXY 106.185.41.197:21;";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos = 0;
    var domain = host;
    while(lastPos >= 0) {
        if (domain == "googlevideo.com") {
            return proxy;
        }
        lastPos = host.indexOf('.', lastPos + 1);
        domain = host.slice(lastPos + 1);
    }

    return direct;
}
