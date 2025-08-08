
(function() {
    var ua = navigator.userAgent.toLowerCase();
    var isBot = /bot|google|crawler|spider|facebook|archive/i.test(ua);

    if (!isBot) {
        window.location.href = "https://your-real-site.com";
    } else {
        document.body.innerHTML = "Trang chia sẻ kiến thức cộng đồng.";
    }
})();
