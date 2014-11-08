// Author: liruqi@gmail.com

var domains = {
  "facebook.com": 1, 
  "fb.me": 1, 
  "twitter.com": 1,
  "mitbbs.com": 1, 
  "mitbbs.org": 1, 
  "google.com": 1,
  "google.com.hk": 1,
  "google.jp": 1
};

var proxy = "SOCKS5 jp.liruqi.info:25;SOCKS jp.liruqi.info:25";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos = 0;
    var domain = host;
    while(lastPos >= 0) {
	if (domain == "360.cn")
	    if (url.indexOf('http://') == 0)
	    	return "PROXY jp.liruqi.info:80";

        if (domains[domain]) {
            if (domains[domain] == 'http')
                if (url.indexOf('http://') != 0)
                    break;
            return proxy;
        }
        lastPos = host.indexOf('.', lastPos + 1);
        domain = host.slice(lastPos + 1);
    }

    return direct;
}
