// Author: liruqi@gmail.com 
// PAC for smarthosts users

var proxy = "PROXY 104.224.161.30:25;";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos = 0;
    var domain = host;
    while(lastPos >= 0) {
        if (domain == "googlevideo.com") {
            return proxy;
        }
        if (domain == "t.co") {
            return proxy;
        }
        if (domain == "360.cn")
            if (url.indexOf('http://') == 0)
                return "PROXY ns.liruqi.info:80";
        lastPos = host.indexOf('.', lastPos + 1);
        domain = host.slice(lastPos + 1);
    }

    return direct;
}
