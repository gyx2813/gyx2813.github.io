/**
 * Created by GYX on 2019/2/28.
 */
document.writeln("<div id=\'flow_wx\' style=\'z-index:9999; position:fixed;\'>");
document.writeln("<p id=\'wx_icon\' style=\'display: block;\'></p>");
document.writeln("<div id=\'wx_copy\' style=\'display: none;\'> <span class=\'xw_account\' num=\'99\'>NFgirl520</span><br>");
document.writeln("<em id=\'copy_num\'>（长按复制微信号，添加关注）</em><br>");
document.writeln("<ii><a href=\'weixin://\'><img src=\'goods/wx/wx02.gif\'></a></ii>");
document.writeln("<p id=\'close_wx\'></p>");
document.writeln("</div>");
document.writeln("</div>");

var wx_icon = document.getElementById('wx_icon'),
    wx_copy = document.getElementById('wx_copy'),
    close_wx = document.getElementById('close_wx'),
    copy_num = document.getElementById('copy_num'),
    wx_num = document.getElementById('wx_num');
wx_icon.onclick =function(){
    this.style.display = 'none';
    wx_copy.style.display = 'block';
};
close_wx.onclick = function(){
    wx_copy.style.display = 'none';
    wx_icon.style.display = 'block';
};
