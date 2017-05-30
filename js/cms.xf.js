var appid = '591ffb**';
function openBannerAd(id) {
    //获取当前屏幕的宽度，用来设置banner广告控件的宽度
    var h = document.body.clientHeight;
    var w = document.body.clientWidth; 
    
    //alert(h +"=="+ w);
    
    //设置广告的广告位号
    IFLYBannerAd.createBannerAd(id);
    //设置应用的APPID
    IFLYBannerAd.setParameter("appid", appid);
    //设置是否调试模式，调试模式下可查看log，默认调试模式
    IFLYBannerAd.setParameter("debug_mode", "false");
    //下载广告提示框
    IFLYBannerAd.setParameter("download_alert", "true");
    //加载广告，并设置广告空间的位置和宽度
    IFLYBannerAd.loadAd(0, h, w);
}

function onBannerAdInit(opCode, dataType, data) {
    if (0 == dataType) {
        // 初始化广告失败
        //alert("初始化旗帜广告对象失败");
    } else {
        //alert("初始化旗帜广告对象成功");
    }
}

function onBannerAdReceive(opCode, dataType, data) {
    //显示广告
    IFLYBannerAd.showAd();
    //alert("请求旗帜广告成功");
}

function onBannerAdFailed(opCode, dataType, data) {
    //alert("错误码：" + data);
}

function onBannerAdClose(opCode, dataType, data) {
    alert("旗帜广告被关闭");
}

function onBannerAdClick(opCode, dataType, data) {
    alert("旗帜广告被点击");
}

function closeBannerAd() {
    //销毁广告
    IFLYBannerAd.destroy();
}


//插屏广告
function openInterstitialAd(id) {
    // 设置广告的广告位号
    IFLYInterstitialAd.createInterstitialAd(id);
    // 点击手机后退键是否销毁插屏广告，默认销毁广告
    IFLYInterstitialAd.setParameter("back_key_enable", "false");
    // 设置应用的APPID
    IFLYInterstitialAd.setParameter("appid", appid);
    // 设置是否调试模式，调试模式下可查看log，默认调试模式
    IFLYInterstitialAd.setParameter("debug_mode", "false");
    // 下载广告提示框
    IFLYInterstitialAd.setParameter("download_alert", "true");
    // 加载广告
    IFLYInterstitialAd.loadAd();
}

function onInterstitialAdReceive(opCode, dataType, data) {
    //显示广告
    IFLYInterstitialAd.showAd();
    //alert("请求插屏广告成功");
}

function onInterstitialAdFailed(opCode, dataType, data) {
    //alert("请求插屏广告失败");
}

function onInterstitialAdClose(opCode, dataType, data) {
    alert("插屏广告被关闭");
}

function onInterstitialAdClick(opCode, dataType, data) {
    alert("插屏广告被点击");
}

function onInterstitialAdInit(opCode, dataType, data) {
    if (0 == dataType) {
        // 初始化广告失败
        //alert("初始化插屏广告对象失败");
    } else {
        //alert("初始化插屏广告对象成功");
    }
}

