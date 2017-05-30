/**
 *分享
 */
var share = {
     //微信开放平台的appid
    wxAppId : "wxd46f5ea2f6db****",
    //腾讯开放平台的appid
    tencentAPPId : "110550***",
    //分享类型
    type : 0,
    //分享的头部图片地址
    imgUrl : 'res://icon.png',
    //分享的链接地址
    url : 'http://mp.weixin.qq.com/s/VEhuQwULZfvhagl1deIulg',
    //分享的TITLE
    title : '知，无知，吾去知！',
    //分享的内容第简介
    description : '无知 | 做学霸还是学渣你自己选择',
    //分享展示内容
    show : function() {
        var html = '';
        html += '<div class="ub ub-ver cms-popup uhide">';
        html += '    <div class="ub ub-f1 shade"></div>';
        html += '    <div class="ub ub-ver sc-bg">';
        html += '        <div class="ub ub-f1 ub-ac uinn-a06 ulev08 sc-text">分享到</div>';
        html += '        <div class="ub uinn-a04">';
        html += '            <div class="ub ub-ver ub-f1 ub-ac ub-pc cms-act" onclick="share.qqShareLink(this)">';
        html += '                <div class="cms-icon-bg-mini" style="background-color:#146eff">';
        html += '                    <div class="fa fa-qq ulev15 bc-text-head"></div>';
        html += '                </div>';
        html += '                <div class="sc-text ulev08 umar-t04">QQ</div>';
        html += '            </div>';
        html += '            <div class="ub ub-ver ub-f1 ub-ac ub-pc cms-act" onclick="share.wxShareLink(this,0)">';
        html += '                <div class="cms-icon-bg-mini" style="background-color:#93D25F">';
        html += '                    <div class="fa fa-weixin ulev15 bc-text-head"></div>';
        html += '                </div>';
        html += '                <div class="sc-text ulev08 umar-t04">微信</div>';
        html += '            </div>';
        html += '            <div class="ub ub-ver ub-f1 ub-ac ub-pc cms-act" onclick="share.wxShareLink(this,1)">';
        html += '                <div class="cms-icon-bg-mini" style="background-color:#60d182">';
        html += '                    <div class="fa fa-pengyq ulev15 bc-text-head"></div>';
        html += '                </div>';
        html += '                <div class="sc-text ulev08 umar-t04">朋友圈</div>';
        html += '            </div>';
        html += '        </div>';
        html += '        <div class="ub ub-ac ub-pc uinn-a06 sc-text cms-footer ubt sc-border-tab cms-act" onclick="cms.popup()()">取消</div>';
        html += '    </div>';
        html += '</div>';
        $("body").append(html);
    },
    /**
     * 微信链接分享
     * type 发送的目标场景 0-会话场景 1-朋友圈场景
     */
    wxShareLink : function(obj, type) {
        share.type = type;
        //注册微信
        uexWeiXin.registerApp(share.wxAppId);
    },
    //qq分享
    qqShareLink11 : function(obj) {
        //检查QQ是否已安装
        uexQQ.isQQInstalled();
    },
    //分享应用到QQ
    qqShareLink : function(obj) {
        var json = '{"title":"'+ share.title  +'","summary":"'+ share.description +'","imageUrl":"'+ share.imgUrl +'","appName":"无知"}';
        uexQQ.shareAppToQQ(share.tencentAPPId, json);
        cms.popup()();
    },
    //初始化
    init : function() {
        var obj = $(".cms-popup");
        if (obj.length == 0) {
            share.show();
        }
    }
};

share.init();
