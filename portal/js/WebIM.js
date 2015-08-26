var mainPageUrl = "main.aspx";
var loginPageUrl = "login.aspx";
var addBuddyUrl = "WebIM/AddBuddy.aspx?Version={0}";
var getConnectUrl = "WebIM/GetConnect.aspx?Version={0}";
var getContactInfoUrl = "WebIM/GetContactInfo.aspx?UserType={0}&UserValue={1}&Version={2}";
var getContactListUrl = "WebIM/GetContactList.aspx?Version={0}";
var getGroupListUrl = "WebIM/GetGroupList.aspx?Version={0}";
var getGroupPortraitUrl = "WebIM/GetGroupPortrait.aspx?Uri={0}&Size={1}&Crc={2}&mid={3}";
var opInviteJoinUrl = "WebIM/PGHandleInviteJoinGroup.aspx?Version={0}";
var PGHandleApplicationUrl = "WebIM/PGHandleApplication.aspx?Version={0}";
var getGroupMemUrl = "WebIM/GetGroupMembers.aspx?Version={0}";
var SendGroupMsgUrl = "WebIM/SendGroupMsg.aspx?Version={0}";
var getGroupPerInfoUrl = "WebIM/PGGetPersonalInfo.aspx?Version={0}";
var approveInviteUrl = "WebIM/ApproveInviteJoin.aspx?Version={0}";
var GroupSubscribeUrl = "WebIM/GroupSubscribe.aspx?Version={0}";
var getPersonalInfoUrl = "WebIM/GetPersonalInfo.aspx?Version={0}";
var handleAddBuddyUrl = "WebIM/HandleAddBuddy.aspx?Version={0}";
var logoutUrl = "WebIM/Logout.aspx?Version={0}";
var opBuddyUrl = "WebIM/OpBuddy.aspx?Version={0}";
var sendMessageUrl = "WebIM/SendMsg.aspx?Version={0}";
var setPersonalInfoUrl = "WebIM/SetPersonalInfo.aspx?Version={0}";
var setContactInfoUrl = "WebIM/SetContactInfo.aspx?Version={0}";
var setPresenceUrl = "WebIM/SetPresence.aspx?Version={0}";
var setSmsOnlineUrl = "WebIM/SetSmsOnline.aspx?Version={0}";
var setScheduleSmsUrl = "WebIM/SetScheduleSms.aspx?Version={0}&Type={1}";
var sendSMSUrl = "WebIM/SendSMS.aspx?Version={0}";
var addChatFriendUrl = "WebIM/AddChatFriend.aspx?Version={0}";
var getCredUrl = "WebIM/GetCred.aspx?Version={0}";
var registerUrl = "WebIM/Register.aspx?Version={0}";
var registerValidateUrl = "WebIM/RegisterValidate.aspx?Version={0}";
var SetMessageReadUrl = "WebIM/SetMessageReadHttpHandler.aspx?Version={0}";
var SendDirectSMSUrl = "WebIM/SendDirectSMSHttpHandler.aspx?Version={0}";
var getBannerPicUrl = "httpHandler/GetBannerPicHttpHandler.ashx?s={0}";
var getPcRecommendBuddyListV2Url = "WebIM/GetPcRecommendBuddyListV2Handler.aspx?Version={0}";
var AddRecommendBuddyNotifyUrl = "WebIM/AddRecommendBuddyNotifyHttpHandler.aspx?Version={0}";
var getPortraitUrl = "WebIM/GetPortrait.aspx?did={0}&Size={1}&Crc={2}&mid={3}";
var getPicCodeUrl = "WebIM/GetPicCode.aspx?Type={0}&T={1}&{2}";
var ValidatePicCodeUrl = "WebIM/ValidatePicCodeHttpHandler.aspx?Version={0}";
var GetSmsCodeCodeUrl = "WebIM/GetSmsCodeHttpHandler.aspx?Version={0}";
var getALInfoUrl = "WebIM/GetALInfoHandler.aspx?Version={0}";
var addALInfoOneUrl = "WebIM/AddALInfoOneHandler.aspx?Version={0}";
var updateALInfoOneUrl = "WebIM/UpdateALInfoOneHandler.aspx?Version={0}";
var deleteALInfoOneUrl = "WebIM/DeleteALInfoOneHandler.aspx?Version={0}";
var OpShareContentUrl = "WebIM/OpShareContent.aspx?Version={0}";
var InfoOpShareContentUrl = "WebIM/InfoOpShareContent.aspx?Version={0}";
var InfoShareContentUrl = "WebIM/InfoShareContent.aspx?version={0}";
var blockDownloadUrl = "WebIM/BlockDownload.aspx?ssid={0}&fileid={1}&filename{2}";
var portrait = {
    defaultIcon: "images/portraits/fetion.jpg",
    group: "images/fetion.jpg",
    groupMsg: "images/groupSysMsg.png",
    groupList: "images/fetion(29).jpg",
    mobile: "images/portraits/mobile_user_head.jpg",
    offline_16: "images/status16/offline_16.jpg",
    offline_32: "images/status32/offline_32.jpg",
    robot_online_16: "images/status16/robot.jpg",
    robot_online_32: "images/status32/robot.jpg",
    robot_offline_16: "images/status16/robot_offline.jpg",
    robot_offline_32: "images/status32/robot_offline.jpg",
    verify: "images/status16/waiting.jpg",
    close: "images/status16/Closed.jpg",
    refuse: "images/status16/block.jpg",
    fetion_16: "images/status16/fetion_16.jpg",
    fetion_32: "images/status32/fetion_32.jpg"
};
var __webimVersion = 1.8;
var __version = 0;
var __user = new UserDefault();
var __contactMap = new jHashMap();
var __groupMap = new jHashMap();
var __groupMsgMap = new jHashMap();
var __fileInfoMap = new jHashMap();
var __sendFileMap = new jHashMap();
var __buddyList;
var __mainTabWindow;
var __contactTree;
var __moreMsgListDiv;
var __remindMsgDiv;
var __chatWindowMap = new jHashMap();
var __chatFooterItemMap = new jHashMap();
var __remindMsgItemMap = new jHashMap();
var __chatWinInitPosition = {
    top: 102,
    left: 474
};
var __chatWinTopOffset = 26;
var __chatWinLeftOffset = 26;
var __lastPos = {
    top: 102,
    left: 0
};
var __isLeft = true;
var __chatWinDefaultHeight = 365;
var __chatWinDefaultWidth = 468;
var __groupTree;
var __groupChatWinDefaultHeight = 365;
var __groupChatWinDefaultWidth = 480;
var __group_mem = new jHashMap();
var __phoneMap = new jHashMap();
var __maxMsgListOnTaskbar = 0;
var __isNormalLogout = false;
var __hideUserStatusSetterTimer = 0;
var __hideContactInfoTimer = 0;
var __showContactInfoTimer = 0;
var __initContactInfoTimer = 0;
var __hideOperateInfoTimer = 0;
var __tmpTimer = 0;
var __hideMoreMsgListTimer = 0;
var __hideRemindMsgTimer = 0;
var __setSmsWindow = null;
var __sessionId = "";
var __loginProcess = 0;
var __msgBeforeUnload = "此操作将退出网页版飞信，您确认要继续吗？";
var __searchPrompt = "查找好友...";
var __isFirstSearch = true;
var __isOnfocus = true;
var __staticTitle = "官方网页版飞信——在网页上与飞信好友聊天、免费发短信";
var __msgcomingTitle = "新消息";
var __callmeTitle = "新会话";
var __readmsgTitle = "未读消息";
var __flashTitleArray = new Array();
var __titleflashInterval = 0;
var __isOpenSound = true;
var __isOkGroupList = false;
var __isOkBuddyList = false;
var __leftSmsCount = 10000;
var isRefreshRecommendBuddyList = false;
var currentPageNum = 0;
var loadingPanel;
var divMask = $("#divMask");
function swfinfo(s) {
    sendToSwfJD(0);
}
function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}
function sendToSwfJD(value) {
    if (__loginProcess <= value) {
        __loginProcess = value;
    }
    if ($("#logging").css("display") != "none") {
        var swf = thisMovie("onlogin");
        if (swf && swf.setpercent) {
            swf.setpercent(__loginProcess);
        }
    }
}
function sendToSwfTxt(value) {
    var swf = thisMovie("onlogin");
    if ($("#logging").css("display") != "none") {
        if (swf && swf.setmessage) {
            swf.setmessage(value);
        }
    }
} (function($) {
    $(window).bind("load",
    function() {
        if ($.openPlatLogin.isOpenPlatLogin()) {
            $.openPlatLogin.login(checkCookies);
        } else {
            checkCookies();
        }
    }).bind("focus",
    function() {
        if (!$.browser.msie) {
            windowOnFocus();
        }
    }).bind("blur",
    function() {
        if (!$.browser.msie) {
            __isOnfocus = false;
        }
    });
    if ($.browser.msie) {
        $("input:checkbox").click(function() {
            this.blur();
            this.focus();
        });
    }
    $(document).bind("focusout",
    function() {
        __isOnfocus = false;
    }).bind("focusin",
    function() {
        windowOnFocus();
    });
    function checkCookies() {
        __sessionId = getCookie("webim_sessionid");
        deleteCookie("webim_sessionid", "/");
        if (!__sessionId) {
            $("#logging").css("display", "none");
            $("#maincontent").css("display", "none");
            window.location.href = loginPageUrl;
        } else {
            $("#logging").css("display", "");
            $(initialize);
            $.cacheImages();
        }
    }
    function windowOnFocus() {
        if (typeof __titleflashInterval != "undefined") {
            window.clearInterval(__titleflashInterval);
        }
        __flashTitleArray = new Array();
        __isOnfocus = true;
        if (document.title != __staticTitle) {
            document.title = __staticTitle;
        }
        var chaWindows = __chatWindowMap.values();
        var length = chaWindows.length;
        for (var i = 0; i < length; i++) {
            if (chaWindows[i].isOnFocus()) {
                chaWindows[i].focus();
                break;
            }
        }
    }
})(jQuery);
function initialize() {
    initUrls();
    $.initMaskPage();
    initNavigation();
    initMainTabWindow();
    initContentHeight();
    initUserStatusDiv();
    initContactCard();
    initOperateCard();
    initi__searchInput();
    initChatFooter();
    bindWindowEvent();
    sendToSwfJD(10);
    getPersonalInfo();
    IMSound.ajaxInit();
    getCred();
    setInterval("getCred()", 300000);
    getBanner();
}
function bindWindowEvent() {
    window.onbeforeunload = function(e) {
        e = window.event || e;
        if (!__isNormalLogout) {
            if (window.event) {
                e.returnValue = __msgBeforeUnload;
            }
            return (__msgBeforeUnload);
        }
    };
    $(window).bind("unload",
    function(e) {
        if (!__isNormalLogout) {
            logout(false);
        }
        deleteRemindMsgCookie(__user.sid);
    });
    $(window).bind("resize", onWindowResize);
}
function onWindowResize(e) {
    $.initMaskPage();
    initContentHeight();
    initGroupListHeight();
    var chaWindows = __chatWindowMap.values();
    var length = chaWindows.length;
    for (var i = 0; i < length; i++) {
        if (chaWindows[i].maxed) {
            chaWindows[i].max();
        }
    }
    var maxCount = getMaxMsglistCount();
    if (__maxMsgListOnTaskbar != maxCount) {
        __maxMsgListOnTaskbar = maxCount;
        reInitialFooter();
        __moreMsgListDiv.hide();
    }
    $("#search_result").css("display", "none");
}
function initUrls() {
    loginPageUrl = __baseSSLUrl + loginPageUrl;
}
function initContentHeight() {
    var h = getViewportHeight() - $("#frame_top").outerHeight() - $("#personal_info").outerHeight() - $("#taskbar").outerHeight();
    $("#main_window").height(h);
    if (__mainTabWindow) {
        __mainTabWindow.adjustContentHeight();
    }
    if (__contactTree) {
        __contactTree.adjustHeight(0);
    }
    $("#phone_list_content").height(0);
    $("#loadDiv_phone").height(0);
    $("#main_contact_list").height(h);
    if (__contactTree) {
        __contactTree.adjustHeight();
    }
    var phoneH = $("#main_contact_list").innerHeight() - $("#search_friends").outerHeight(true) - $("#add_friend").outerHeight(true) - $(".phone_new").outerHeight(true) - 46;
    $("#phone_list_content").height(phoneH);
    $("#loadDiv_phone").height(phoneH + 46);
}
function initMainTabWindow() {
    __mainTabWindow = $.fn.jTabWindow({
        target: "main_window",
        id: "main_content"
    });
    $("#addbuddy_link").bind("click",
    function() {
        createAddBuddyTab();
        return false;
    });
    loadingPanel = $("#loadDiv");
    $("#btnRefreshRecommend").bind("click",
    function(e) {
        var text_box = $("#side").find(".text_box");
        if (text_box.hasClass("none")) {
            loadingPanel.removeClass("none");
            currentPageNum++;
            isRefreshRecommendBuddyList = true;
            GetPcRecommendBuddyListV2(8);
        }
        stopPropagation(e);
        preventDefault(e);
    });
    $("#topTabDownload").bind("click",
    function() {
        $.increaseCounters("500400003");
    });
    $(".phone_list").find(".phone_new > a").bind("click",
    function(e) {
        $.increaseCounter(500400014);
        createAddTXLTab();
        stopPropagation(e);
        preventDefault(e);
    });
    initTXLlist();
}
function createAddBuddyTab(name, type) {
    var url = "content/addBuddy.htm";
    if (name) {
        url += "?username=" + name;
        if (type) {
            url += "&addtype=" + type;
        }
    }
    var tabEnt = __mainTabWindow.getTabByUrl(url);
    if (!tabEnt) {
        __mainTabWindow.createTab("添加好友", url, true);
    } else {
        tabEnt.topTab.click();
    }
    hideAllChatWindow();
}
function createAddBuddyBatchTab(name) {
    var url = "content/addBuddyBatch.htm";
    if (name) {
        url += "?username=" + name;
    }
    var tabEnt = __mainTabWindow.getTabByUrl(url);
    if (!tabEnt) {
        __mainTabWindow.createTab("添加好友", url, true);
    } else {
        tabEnt.topTab.click();
    }
    hideAllChatWindow();
}
function createAddTXLTab(guid) {
    var url = "content/addAndEditTXL.htm",
    tabName = "新建联系人";
    if ( !! guid) {
        url += "?guid=" + guid;
        tabName = "编辑联系人";
    }
    var tabEnt = __mainTabWindow.getTabByUrl(url);
    if (!tabEnt) {
        __mainTabWindow.createTab(tabName, url, true);
    } else {
        tabEnt.topTab.click();
    }
    hideAllChatWindow();
}
function createFreeSMSTab(guid, uid, mn) {
    var url = "content/freeSms.htm?guid=" + guid + "&uid=" + uid + "&mn=" + mn;
    var tabEnt = __mainTabWindow.getTabByUrl(url);
    if (!tabEnt) {
        __mainTabWindow.createTab("发短信", url, true);
    } else {
        tabEnt.topTab.click();
    }
    hideAllChatWindow();
}
function createCustomPresTab() {
    var tabEnt = __mainTabWindow.getTabByUrl("content/customPresence.htm");
    if (!tabEnt) {
        __mainTabWindow.createTab("设置自定义状态", "content/customPresence.htm", true);
    } else {
        tabEnt.topTab.click();
    }
    hideAllChatWindow();
}
function hideAllChatWindow() {
    var chaWindows = __chatWindowMap.values();
    var length = chaWindows.length;
    for (var i = 0; i < length; i++) {
        if (chaWindows[i].isShow) {
            chaWindows[i].hide();
        }
    }
}
function openChatWindow(sender, buddyId) {
    var currBuddy = __contactMap.get(buddyId);
    var currStatus = currBuddy.status;
    if (currStatus == ContactStatus.Verify || currStatus == ContactStatus.Verify_Bklist) {
        $.fn.fetionHintWindow({
            modal: false
        }).show("待验证好友，无法与之会话", "提示", "OK");
        return;
    }
    if (currStatus == ContactStatus.Refuse || currStatus == ContactStatus.Refuse_Bklist) {
        $.fn.fetionHintWindow({
            modal: false
        }).show("对方尚未成为您的好友，不能与之会话", "提示", "OK");
        return;
    }
    if ((currStatus & ContactStatus.CloseService) == ContactStatus.CloseService || (currStatus & ContactStatus.CloseService_Bklist) == ContactStatus.CloseService_Bklist) {
        $.fn.fetionHintWindow({
            modal: false
        }).show("对方已关闭飞信服务，您将无法与他/她进行任何会话。", "提示", "OK");
        return;
    }
    if (getContactType(currBuddy) == ContactType.Robot) {
        inviteRobot(buddyId);
    }
    var cw = getChatWindow(buddyId);
    if (!cw.isActived) {
        cw.active();
        var p = getChatWinPosition();
        cw.show(p.top, p.left);
    } else {
        if (!cw.hasShown) {
            var p = getChatWinPosition();
            cw.show(p.top, p.left);
        } else {
            cw.show();
        }
    }
    if (typeof __isIE6 != "undefined" && __isIE6) {
        cw.fixPosition();
    }
}
function getChatWindow(buddyId) {
    var cw;
    if (!__chatWindowMap.containsKey(buddyId)) {
        cw = $.fn.jChatWindow({
            maxRelative: "main_content",
            user: __user,
            buddy: __contactMap.get(buddyId),
            defaultHeight: __chatWinDefaultHeight,
            defaultWidth: __chatWinDefaultWidth,
            onActive: onActiveChatWindow,
            onClosed: onCloseChatWindow,
            onFocus: onFocusChatWindow,
            onSendMessage: onSendMsg
        });
        __chatWindowMap.put(buddyId, cw);
    } else {
        cw = __chatWindowMap.get(buddyId);
    }
    return cw;
}
function getChatWinPosition() {
    var position = new Object();
    position.top = __chatWinInitPosition.top;
    position.left = __chatWinInitPosition.left;
    var needLoop = true;
    var chaWindows = __chatWindowMap.values();
    var length = chaWindows.length;
    while (needLoop) {
        needLoop = false;
        for (var i = 0; i < length; i++) {
            if (chaWindows[i].isShow && !chaWindows[i].maxed) {
                if (isLapOver(position, {
                    "top": parseInt(chaWindows[i].css("top")),
                    "left": parseInt(chaWindows[i].css("left"))
                })) {
                    position = adjustPosition(position);
                    if (__lastPos.left < position.left) {
                        __lastPos.left = position.left;
                    } else {
                        if (__lastPos.top > position.top) {
                            __lastPos.top = position.top;
                        }
                    }
                    needLoop = true;
                    break;
                }
            }
        }
    }
    position.left -= parseInt($(".side").css("width"));
    return position;
}
function adjustPosition(position) {
    if ((position.top + __chatWinTopOffset < __chatWinInitPosition.top - Math.abs(__chatWinTopOffset)) || (position.top + __chatWinTopOffset + 50 > getViewportHeight() - __chatWinDefaultHeight)) {
        position.top = __lastPos.top - 6;
        position.left = __lastPos.left + __chatWinLeftOffset;
        __chatWinInitPosition = position;
        if (getViewportWidth() - position.left - 450 < 230 && __isLeft) {
            __chatWinInitPosition.left = __chatWinInitPosition.left == 48 ? __chatWinInitPosition.left + 6 : 48;
            __isLeft = false;
        }
    } else {
        position.top += __chatWinTopOffset;
        position.left += __chatWinLeftOffset;
    }
    return position;
}
function isLapOver(p1, p2) {
    return (Math.abs(p1.top - p2.top) < 5) && (Math.abs(p1.left - p2.left) < 5);
}
function onActiveChatWindow(cw) {
    if (!__chatFooterItemMap.containsKey(this.buddy.uid)) {
        var portraitSrc = getUserPortraitUrl(this.buddy, "5");
        var footItem = $.fn.jFooterItem(this.buddy, cw, portraitSrc);
        __chatFooterItemMap.put(this.buddy.uid, footItem);
        reInitialFooter(footItem);
    }
}
function onCloseChatWindow(cw) {
    if (__chatFooterItemMap.containsKey(this.buddy.uid)) {
        __chatFooterItemMap.get(this.buddy.uid).remove();
        __chatFooterItemMap.remove(this.buddy.uid);
        reInitialFooter();
    }
}
function onFocusChatWindow(cw) {
    if (__chatFooterItemMap.containsKey(this.buddy.uid)) {
        __chatFooterItemMap.get(this.buddy.uid).removeClass("call");
    }
    if (__remindMsgItemMap.containsKey(this.buddy.uid)) {
        __remindMsgItemMap.get(this.buddy.uid).remove();
        __remindMsgItemMap.remove(this.buddy.uid);
        setRemindCountTotal();
    }
}
function onActiveGroupChatWindow(cw) {
    if (!__chatFooterItemMap.containsKey("group_" + this.group.id)) {
        this.group.uid = this.group.id;
        this.group.statusClass = "af-group";
        this.group.displayName = this.group.n;
        var portraitSrc = getGroupItemPortraitUrl(this.group, "1");
        var footItem = $.fn.jFooterItem(this.group, cw, portraitSrc);
        __chatFooterItemMap.put("group_" + this.group.id, footItem);
        reInitialFooter(footItem);
    }
}
function onFocusGroupChatWindow(cw) {
    if (__chatFooterItemMap.containsKey("group_" + this.group.id)) {
        __chatFooterItemMap.get("group_" + this.group.id).removeClass("call");
    }
    if (__remindMsgItemMap.containsKey("group_" + this.group.id)) {
        __remindMsgItemMap.get("group_" + this.group.id).remove();
        __remindMsgItemMap.remove("group_" + this.group.id);
        setRemindCountTotal();
    }
}
function onCloseGroupChatWindow(cw) {
    if (__chatFooterItemMap.containsKey("group_" + this.group.id)) {
        __chatFooterItemMap.get("group_" + this.group.id).remove();
        __chatFooterItemMap.remove("group_" + this.group.id);
        reInitialFooter();
    }
}
function onActiveGroupSysChatWindow(cw) {
    if (!__chatFooterItemMap.containsKey("group_sys_" + cw.attr("id"))) {
        this.group.uid = "group_sys_" + cw.attr("id");
        this.group.statusClass = "af-groupSysMsg";
        this.group.displayName = cw.find("h3").text();
        var footItem = $.fn.jFooterItem(this.group, cw, portrait.groupMsg);
        footItem.removeClass().addClass("call");
        __chatFooterItemMap.put("group_sys_" + cw.attr("id"), footItem);
        reInitialFooter(footItem);
    }
}
function onFocusGroupSysChatWindow(cw) {
    if (__chatFooterItemMap.containsKey("group_sys_" + cw.attr("id"))) {
        __chatFooterItemMap.get("group_sys_" + cw.attr("id")).removeClass("call");
    }
}
function onCloseGroupSysChatWindow(cw) {
    if (__chatFooterItemMap.containsKey("group_sys_" + cw.attr("id"))) {
        __chatFooterItemMap.get("group_sys_" + cw.attr("id")).remove();
        __chatFooterItemMap.remove("group_sys_" + cw.attr("id"));
        reInitialFooter();
        var strGroupMsg = cw.html();
        if (__groupMsgMap.containsKey(strGroupMsg)) {
            __groupMsgMap.remove(strGroupMsg);
        }
        if ($("#" + cw.attr("id")).attr("id")) {
            $("#" + cw.attr("id")).remove();
        }
    }
}
function getPersonalInfo() {
    var getPersonalInfoParams = new Object();
    getPersonalInfoParams.success = getPersonalInfoSuccess;
    getPersonalInfoParams.error = getPersonalInfoError;
    getPersonalInfoParams.url = formatString(getPersonalInfoUrl, __version++);
    getPersonalInfoParams.type = "POST";
    getPersonalInfoParams.data = {
        "ssid": __sessionId
    };
    getPersonalInfoParams.dataType = "json";
    getPersonalInfoParams.cache = false;
    $.ajax(getPersonalInfoParams);
}
var __gpiRetry = 0;
function getPersonalInfoSuccess(data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        __gpiRetry = 0;
        $.extend(__user, result.rv);
        extendUser();
        getGroupList();
        initUserInfo();
        sendToSwfJD(30);
        setRemindMsgCookie(__user.sid, __user.displayName, 0, __sessionId);
        getContactList();
        GetPcRecommendBuddyListV2(8);
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (__gpiRetry < 3) {
                __gpiRetry++;
                window.setTimeout("getPersonalInfo()", 500);
            } else {
                __gpiRetry = 0;
                alert(formatString("获取用户个人信息失败，请重新登录。错误代码：{0}", typeof result.rc == "number" ? result.rc: 500));
                redirectLogin();
            }
        }
    }
}
function getPersonalInfoError(XMLHttpRequest, textStatus, errorThrown) {
    if (__gpiRetry < 3) {
        __gpiRetry++;
        window.setTimeout("getPersonalInfo()", 500);
    } else {
        __gpiRetry = 0;
        alert(formatString("获取用户个人信息失败，请重新登录。错误原因：{0}", textStatus));
        redirectLogin();
    }
}
function getBanner() {
    if (__bannerInfo == "") {
        $("#banner_list").css("display", "none");
    } else {
        var jsonObject = eval("(" + __bannerInfo + ")");
        if (jsonObject.length > 0) {
            $("#banner_list").css("display", "block");
            var fragment = "";
            var interval = 3000;
            var imgNum = 0;
            if (__isMsie) {
                for (var i = 0; i < jsonObject.length; i++) {
                    if (jsonObject[i].Key == "BannerImg_login") {
                        continue;
                    }
                    interval = jsonObject[0].Interval;
                    if (jsonObject[i].OffShelfTime == 1) {
                        var imgSrc = formatString(getBannerPicUrl, jsonObject[i].Img);
                        fragment += '<a href="' + jsonObject[i].Link + '" target="' + jsonObject[i].Target + '"><img src="' + imgSrc + '"  width="360" height="60" alt="' + jsonObject[i].Title + '" title="' + jsonObject[i].Title + '" /></a>';
                        imgNum++;
                    }
                }
            } else {
                for (var i = 0; i < jsonObject.length; i++) {
                    if (jsonObject[i].Key == "BannerImg_login") {
                        continue;
                    }
                    interval = jsonObject[0].Interval;
                    if (jsonObject[i].OffShelfTime == 1) {
                        fragment += '<a href="' + jsonObject[i].Link + '" target="' + jsonObject[i].Target + '"><img src="' + jsonObject[i].Img + '"  width="360" height="60" alt="' + jsonObject[i].Title + '" title="' + jsonObject[i].Title + '" /></a>';
                        imgNum++;
                    }
                }
            }
            fragment += '<div id="banner_info"></div>';
            $("#banner_list").html(fragment);
            imageCarousel.scroll(imgNum, "banner_list", interval, "banner_info");
        } else {
            $("#banner_list").css("display", "none");
        }
    }
}
function getContactList() {
    var getContactListParams = new Object();
    getContactListParams.success = getContactListSuccess;
    getContactListParams.error = getContactListError;
    getContactListParams.url = formatString(getContactListUrl, __version++);
    getContactListParams.type = "POST";
    getContactListParams.data = {
        "ssid": __sessionId
    };
    getContactListParams.dataType = "json";
    getContactListParams.cache = false;
    $.ajax(getContactListParams);
}
var __gclRetry = 0;
function getContactListSuccess(data, textStatus) {
    __contactTree = $.fn.jContactTree({
        target: "main_contact_list",
        isSinglePattern: true,
        user: __user,
        onBuddyItemDbClick: openChatWindow,
        onBuddyItemMouseOver: showContactCard,
        onBuddyItemMouseOut: hideContactCard,
        onBuddyItemRightClick: showOperateCard
    });
    sendToSwfJD(60);
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        __gclRetry = 0;
        var contactList = result.rv.bds;
        contactList = contactList || (new Array());
        var listLength = contactList.length;
        for (var i = 0; i < listLength; i++) {
            var contact = new ContactDefault();
            $.extend(contact, contactList[i]);
            extendContact(contact);
            __contactMap.put(contactList[i].uid.toString(), contact);
        }
        __buddyList = result.rv.bl;
        __buddyList = __buddyList || (new Array());
        __buddyList.push({
            "id": 0,
            "n": "未分组好友"
        });
        __buddyList.push({
            "id": -1,
            "n": "陌生人"
        });
        initContactList();
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (__gclRetry < 3) {
                __gclRetry++;
                window.setTimeout("getContactList();", 500);
            } else {
                __gclRetry = 0;
                alert("由于网络原因，获取好友列表失败，请重新登录。");
                redirectLogin();
            }
        }
    }
}
function getContactListError(XMLHttpRequest, textStatus, errorThrown) {
    if (__gclRetry < 3) {
        __gclRetry++;
        window.setTimeout("getContactList();", 500);
    } else {
        __gclRetry = 0;
        alert("由于网络原因，获取好友列表失败，请重新登录。");
        redirectLogin();
    }
}
function getRecommendReason(reasonStr) {
    var s = "你可能认识的人";
    if ( !! reasonStr) {
        var reason = reasonStr.split(";");
        var n = 0;
        for (var i = 0, j = reason.length; i < j; i++) {
            var str = reason[i].split(":");
            switch (str[0]) {
            case "want-to-meet":
                n = 5;
                s = "你的通讯录好友";
                break;
            case "recent-contact":
                if (n < 5) {
                    n = 4;
                    s = "你最近联系过的人";
                }
                break;
            case "have-same-friend":
                if (n < 4) {
                    n = 3;
                    s = str[1] + "位共同好友";
                }
                break;
            case "near":
                if (n < 3) {
                    n = 2;
                    s = "你附近的好友";
                }
                break;
            case "robot":
                if (n < 2) {
                    n = 1;
                    s = "有缘人";
                }
                break;
            default:
                s = "你可能认识的人";
                break;
            }
        }
    }
    return s;
}
function GetPcRecommendBuddyListV2(count) {
    var params = {};
    params.url = formatString(getPcRecommendBuddyListV2Url, __version++);
    params.type = "POST";
    params.dataType = "json";
    params.data = {
        "ssid": __sessionId,
        "c": count,
        "isIP": 1,
        page: currentPageNum
    };
    params.cache = false;
    params.success = GetPcRecommendBuddyListV2Success;
    params.error = GetPcRecommendBuddyListV2Error;
    $.ajax(params);
}
function GetPcRecommendBuddyListV2Success(data, textStatus) {
    if (data.rc == 200 && ( !! data.rv)) {
        var side = $(".side"),
        ul,
        li;
        if (isRefreshRecommendBuddyList) {
            side.find("ul").remove();
            isRefreshRecommendBuddyList = false;
        }
        ul = side.find("ul");
        var len = ul.length;
        if (len <= 0) {
            ul = $('<ul class="List"></ul>');
        }
        for (var i = 0, j = data.rv.length; i < j; i++) {
            var item = data.rv[i];
            var portraint = formatString(getPortraitUrl, item.UserId, 3, 0, __user.uid);
            var disCss = "";
            if (i >= 4 || len > 0) {
                disCss = "none";
            }
            li = $('<li class="' + disCss + '" uid="' + item.UserId + '" sid="' + item.FetionId + '"><div class="image"><img src="' + portraint + '" alt="' + item.NickName + '" title="' + item.NickName + '" /></div>' + "<dl><dt>" + cnSubstr(item.NickName, 20, false) + "</dt><dd>" + getRecommendReason(item.Reason) + '</dd><dd><a href="javascript:;">加好友</a><a href="javascript:;">打招呼</a></dd></dl></li>');
            ul.append(li);
            var dd = li.find("dl > dd:last");
            dd.find("a:first").bind("click",
            function(e) {
                $.increaseCounter(501900002);
                var t_dl = $(this).parent().parent();
                AddBuddy({
                    t: "1",
                    a: 0,
                    u: t_dl.parent().attr("sid"),
                    p: 0,
                    d: __user.displayName.substr(0, 5),
                    l: t_dl.find("dt").text(),
                    b: 1,
                    s: 0,
                    c: "",
                    cid: "",
                    successCallback: function() {
                        t_dl.find("dd:last").html("").html('<span style="color:#000;">请求已发送</span>');
                        var t_uid = t_dl.parent().attr("uid");
                        AddRecommendBuddyNotify(t_uid);
                        setTimeout(function() {
                            var ul = $(".side > ul");
                            $(t_dl.parent()).remove();
                            ul.find("li[class='none']:first").removeClass("none");
                            var len = ul.find("li[class='none']").length;
                            if (len <= 1) {
                                GetPcRecommendBuddyListV2(3);
                            }
                        },
                        3000);
                    }
                });
                stopPropagation(e);
                preventDefault(e);
            });
            dd.find("a:last").bind("click",
            function(e) {
                $.increaseCounter(501900001);
                var t_li = $(this).parent().parent().parent();
                var currBuddy = __contactMap.get(t_li.attr("uid"));
                if ( !! currBuddy) {
                    openChatWindow(this, currBuddy.uid);
                } else {
                    addChatFriendV2(2, t_li.attr("sid"),
                    function(data, textStatus) {
                        if (typeof data.rc == "number" && data.rc == 200) {
                            var rv = data.rv;
                            var contact = new ContactDefault();
                            if (!buddyListContains("-1")) {
                                __buddyList.push({
                                    "id": -1,
                                    "n": "陌生人"
                                });
                                __contactTree.insertBuddyList({
                                    "id": -1,
                                    "n": "陌生人"
                                });
                            }
                            contact.uid = rv.uid;
                            contact.uri = rv.uri;
                            contact.bl = "-1";
                            contact.ct = 2;
                            extendContact(contact);
                            __contactMap.put(contact.uid, contact);
                            __contactTree.insertBuddyItem(contact, contact.bl);
                            openChatWindow(this, contact.uid);
                        }
                    });
                }
                stopPropagation(e);
                preventDefault(e);
            });
        }
        if (len <= 0) {
            if (data.rv.length <= 0) {
                side.find(".text_box").removeClass("none");
            } else {
                side.find(".text_box").addClass("none");
                side.append(ul);
            }
        } else {
            if (ul.find("li").length <= 0) {
                side.find(".text_box").removeClass("none");
            }
        }
    } else {
        var side = $(".side");
        if (side.find("ul").length <= 0 || side.find("ul>li").length <= 0) {
            side.find(".text_box").removeClass("none");
        }
    }
    loadingPanel.addClass("none");
}
function GetPcRecommendBuddyListV2Error(XMLHttpRequest, textStatus, errorThrown) {
    var side = $(".side");
    if (side.find("ul").length <= 0 || side.find("ul>li").length <= 0) {
        side.find(".text_box").removeClass("none");
    }
    loadingPanel.addClass("none");
    isRefreshRecommendBuddyList = false;
}
function AddRecommendBuddyNotify(duid) {
    var params = {};
    params.url = formatString(AddRecommendBuddyNotifyUrl, __version++);
    params.type = "post";
    params.dataType = "json";
    params.data = {
        "uid": __user.uid,
        "duid": duid,
        "ssid": __sessionId
    };
    params.cache = false;
    params.success = function(data, textStatus) {};
    params.error = function(XMLHttpRequest, textStatus, errorThrown) {};
    $.ajax(params);
}
var tmpv = "";
function getConnect() {
    if (!tmpv) {
        tmpv = __version;
    } else {
        if ((__version - tmpv) == Math.ceil(__contactMap.size() / 100)) {
            getALInfo();
        }
    }
    var getConnectParams = new Object();
    getConnectParams.success = getConnectSuccess;
    getConnectParams.error = getConnectError;
    getConnectParams.url = formatString(getConnectUrl, __version++);
    getConnectParams.type = "POST";
    getConnectParams.data = {
        "ssid": __sessionId,
        "reported": getReportedData()
    };
    getConnectParams.dataType = "json";
    getConnectParams.cache = false;
    $.ajax(getConnectParams);
}
var __getConnErrorTimes = 0;
var __getCoonTimes = 0;
function getConnectSuccess(data, textStatus) {
    var result = data;
    __getCoonTimes++;
    if (__getCoonTimes % 3 == 0) {
        activeRemindMsgCookie();
    }
    if (typeof result.rc == "number" && result.rc == 200) {
        __getConnErrorTimes = 0;
        var pollResults = result.rv;
        var length = pollResults.length;
        var repaintTogether = false;
        if (length < 10) {
            repaintTogether = false;
        } else {
            var repaintCount = 0;
            for (var i = 0; i < length; i++) {
                if (pollResults[i].DataType == 2 || pollResults[i].DataType == 6) {
                    repaintCount++;
                }
                if (repaintCount >= 10) {
                    repaintTogether = true;
                    break;
                }
            }
        }
        function updateConnData(i) {
            if (i >= length) {
                if (repaintTogether) {
                    insertBuddyToList(__contactMap.values(),
                    function() {
                        window.setTimeout(getConnect, 100);
                    });
                } else {
                    window.setTimeout(getConnect, 100);
                }
                return;
            }
            switch (pollResults[i].DataType) {
            case 1:
                updatePersonalInfo(pollResults[i].Data);
                break;
            case 2:
                if (pollResults[i].Data.uid == __user.uid) {
                    updatePersonalInfo(pollResults[i].Data);
                } else {
                    updateContactInfo(pollResults[i].Data, !repaintTogether);
                }
                break;
            case 3:
                if (pollResults[i].Data.msgType == 2) {
                    receiveMsgs(pollResults[i].Data);
                    startSound("newmessage");
                } else {
                    if (pollResults[i].Data.msgType == 3 || pollResults[i].Data.msgType == 4) {
                        sendMsgFailed(pollResults[i].Data);
                    }
                }
                break;
            case 4:
                if (pollResults[i].Data.ec == 900) {
                    logout(false);
                    startSound("sys");
                    $.fn.fetionHintWindow().show("您已经从其他终端登录！", "提示", "OK",
                    function() {
                        __isNormalLogout = true;
                        window.location.href = __officialSiteUrl + "/account/loginout?ul=" + loginPageUrl;
                    });
                } else {
                    if (pollResults[i].Data.ec >= 902 && pollResults[i].Data.ec <= 905) {
                        logout(false);
                        $.fn.fetionHintWindow().show("您已退出网页版飞信。<br/>单击确定后返回登录页面。", "提示", "OK",
                        function() {
                            redirectLogin();
                        });
                    }
                }
                return;
                break;
            case 5:
                receiveInvite(pollResults[i].Data);
                startSound("sys");
                break;
            case 6:
                if (pollResults[i].Data.ba == 1) {
                    addBuddyWithReply(pollResults[i].Data, !repaintTogether);
                } else {
                    if (pollResults[i].Data.ba == 2) {
                        removeBuddyWithReply(pollResults[i].Data, !repaintTogether);
                    } else {
                        if (pollResults[i].Data.ba == 3) {
                            updateBuddyWithReply(pollResults[i].Data, !repaintTogether);
                        }
                    }
                }
                break;
            case 7:
                if (pollResults[i].Data.InfoType == 1) {
                    dealWithCallme(pollResults[i].Data.Info);
                }
                break;
            case 12:
                switch (pollResults[i].Ftype) {
                case 2:
                    receiveFile(pollResults[i].Data, 1);
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    receiveFile(pollResults[i].Data, 3);
                    break;
                default:
                    break;
                }
                break;
            case 8:
                if (pollResults[i].Data.length > 0) {
                    var pollGroupResults = pollResults[i].Data;
                    pollGroupResults.sort(sort_by("n", false));
                    for (var k = 0; k < pollGroupResults.length; k++) {
                        var groupDatas = pollGroupResults[k].GData;
                        switch (pollGroupResults[k].GDataType) {
                        case 1:
                            var inviteItem = groupDatas;
                            inviteItem.crc = "1234";
                            $.popWinMsg({
                                gName: inviteItem.gN,
                                fName: inviteItem.iNn,
                                group: inviteItem,
                                msgN: "msg4",
                                isLink: true,
                                handleEntity: inviteItem,
                                consent: handleInviteGroup,
                                isClose: false
                            });
                            break;
                        case 2:
                            var exitItem = groupDatas;
                            exitGroup(exitItem.gUri, exitItem);
                            break;
                        case 3:
                            var apvItem = groupDatas;
                            apvResult(apvItem);
                            break;
                        case 4:
                            var groupDle = groupDatas;
                            var groupId = jGroupUriToId(groupDle.GroupUri);
                            $.popWinMsg({
                                gName: groupDle.GroupName,
                                group: __groupMap.get(groupId),
                                msgN: "msg6"
                            });
                            removeGroupUi(groupId, 2);
                            break;
                        case 5:
                            var delMemberList = groupDatas.DeleteMemberEntity;
                            for (var j = 0; j < delMemberList.length; j++) {
                                deleteGroupMember(delMemberList[j]);
                            }
                            break;
                        case 6:
                            var auditItem = groupDatas.ApplyGroupEntity[0];
                            $.popWinMsg({
                                gName: auditItem.n,
                                fName: auditItem.ApplyGroupUserEntity[0].Nickname,
                                group: auditItem,
                                iR: auditItem.ApplyGroupUserEntity[0].Note == null ? "": auditItem.ApplyGroupUserEntity[0].Note,
                                msgN: "msg13",
                                handleEntity: auditItem,
                                consent: handleApplication,
                                isClose: false
                            });
                            break;
                        case 7:
                            var joinItem = groupDatas;
                            var memItem = new GroupMemDefault();
                            memItem.MemberUri = joinItem.MemberUri;
                            memItem.minn = joinItem.minn;
                            memItem.i = 3;
                            initGroupMemList(joinItem.gUri, memItem);
                            var groupId = jGroupUriToId(joinItem.gUri);
                            var groupItem = __groupMap.get(groupId);
                            var memId = jMemUriToId(joinItem.MemberUri);
                            if (memId != __user.sid) {
                                $.popWinMsg({
                                    gName: joinItem.n,
                                    fName: memItem.minn,
                                    group: groupItem,
                                    msgN: "msg5"
                                });
                            }
                            break;
                        case 9:
                            updateGroupInfo(groupDatas, true);
                            if (groupDatas.members) {
                                for (var jj = 0; jj < groupDatas.members.length; jj++) {
                                    initGroupMemList(groupDatas.gUri, groupDatas.members[jj]);
                                }
                            }
                            break;
                        case 10:
                            var changeList = groupDatas.PermissionChangedGroupEntity;
                            groupMemPriChange(changeList);
                            break;
                        case 14:
                            var appItem = groupDatas;
                            appItem.crc = "1234";
                            $.popWinMsg({
                                gName: appItem.n,
                                fName: appItem.iNn,
                                group: appItem,
                                msgN: "msg10",
                                iR: appItem.iR,
                                joinItems: appItem.JoinItem,
                                handleEntity: appItem,
                                consent: approveInviteGroup,
                                isClose: false
                            });
                            break;
                        case 16:
                            var inviteRs = groupDatas;
                            var groupId = jGroupUriToId(inviteRs.gUri);
                            var groupItem = __groupMap.get(groupId);
                            $.popWinMsg({
                                gName: groupItem.n,
                                fName: inviteRs.iNn,
                                group: groupItem,
                                msgN: "msg5"
                            });
                            break;
                        case 17:
                            updateGroupInfo(groupDatas, false, true);
                            break;
                        case 21:
                            receiveGroupMsgs(groupDatas);
                            break;
                        default:
                            break;
                        }
                    }
                }
                break;
            case 9:
                break;
            default:
                break;
            }
            i++;
            window.setTimeout(function() {
                updateConnData(i);
            },
            20);
        }
        updateConnData(0);
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (typeof result.rc == "number" && result.rc == 304) {
                window.setTimeout(getConnect, 1000);
            } else {
                window.setTimeout(getConnect, 1000);
            }
        }
    }
}
function getConnectError(XMLHttpRequest, textStatus, errorThrown) {
    if (__getConnErrorTimes <= 60) {
        __getConnErrorTimes++;
        window.setTimeout(getConnect, 1000);
    } else {
        alert("网络连接已断开，单击确定后返回登录页面。");
        redirectLogin();
    }
}
function getReportedData() {
    var data = __dataReportMap;
    if (__user && !!data && data.size() > 0) {
        var result = __user.uid + "|" + "default";
        var keys = data.keys();
        $.each(keys,
        function(i, key) {
            result += "|" + key + "_" + data.get(key);
        });
        data.clear();
        return result;
    } else {
        return "";
    }
}
function getGroupList() {
    var getGroupListParams = new Object();
    getGroupListParams.success = getGroupListSuccess;
    getGroupListParams.error = getGroupListError;
    getGroupListParams.url = formatString(getGroupListUrl, __version++);
    getGroupListParams.type = "POST";
    getGroupListParams.data = {
        "ssid": __sessionId
    };
    getGroupListParams.dataType = "json";
    getGroupListParams.cache = false;
    $.ajax(getGroupListParams);
    __groupTree = $.fn.jGroupTree({
        target: "main_contact_list",
        isSinglePattern: true,
        onBuddyItemDbClick: openGroupChatWindow,
        onBuddyItemClick: function() {},
        onBuddyItemMouseOver: function() {}
    });
}
var __gglRetry = 0;
function getGroupListSuccess(data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        __gglRetry = 0;
        if (data.rv.GroupListInfo != null) {
            var groupUris = "";
            for (var i = 0; i < data.rv.GroupListInfo.length; i++) {
                var gUri = data.rv.GroupListInfo[i].GroupUri;
                groupUris += gUri + ",";
            }
            getGroupPerInfo(groupUris);
            startGroupSubscribe(groupUris);
            var groupList = result.rv.GroupListInfo;
            groupList = groupList || (new Array());
            var listLength = groupList.length;
            for (var i = 0; i < listLength; i++) {
                var group = new GroupDefault();
                group.gUri = groupList[i].GroupUri;
                group.i = groupList[i].Identity;
                extendGroupItem(group);
                __groupMap.put(group.id, group);
            }
        }
        initGroupList();
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (__gglRetry < 3) {
                __gglRetry++;
                window.setTimeout("getGroupList();", 500);
            } else {
                __gglRetry = 0;
                alert(formatString("由于网络原因，获取群组列表失败，请重新登录。错误代码：{0}", result.rc));
                redirectLogin();
            }
        }
    }
}
function getGroupListError(XMLHttpRequest, textStatus, errorThrown) {
    if (__gglRetry < 3) {
        __gglRetry++;
        window.setTimeout("getGroupList();", 500);
    } else {
        __gglRetry = 0;
        alert(formatString("由于网络原因，获取群组列表失败，请重新登录。错误原因：{0}", textStatus));
        redirectLogin();
    }
}
function initGroupListHeight() {
    if (__groupTree) {
        __groupTree.adjustHeight();
    }
}
function initGroupList() {
    var groupList = __groupMap.values();
    insertGroupToList(groupList, initMainUi);
}
function insertGroupToList(groupList, callback) {
    var lists = new Object();
    if (groupList.length == 0) {
        lists[0] = __groupTree.createBuddyList(false);
    } else {
        lists[0] = __groupTree.createBuddyList(true);
    }
    var itemLength = groupList.length;
    var list = lists[0];
    for (var i = 0; i < itemLength; i++) {
        var item = __groupTree.createGroupItem(groupList[i]);
        list.pushContent(item);
    }
    var str = "";
    var l = lists[0];
    str += l.toHtmlString();
    __groupTree.setInnerHtml(str);
    __isOkGroupList = true;
    if (typeof callback == "function") {
        if (__isOkBuddyList && __isOkGroupList) {
            callback();
        }
    }
    str = null;
}
var __spRetry = 0;
function setPersonalInfo(i) {
    var setPersonalInfoParams = new Object();
    setPersonalInfoParams.url = formatString(setPersonalInfoUrl, __version++);
    setPersonalInfoParams.type = "POST";
    setPersonalInfoParams.data = {
        "Impresa": i,
        "ssid": __sessionId
    };
    setPersonalInfoParams.dataType = "json";
    setPersonalInfoParams.cache = false;
    setPersonalInfoParams.success = function(data, textStatus) {
        var result = data;
        if (result.rc && result.rc == 200) {
            __spRetry = 0;
            $("#user_impresa").text(!i ? "请输入心情短语...": cnSubstr(i, 40, false));
            __user.i = i;
        } else {
            retrySetPersonInfo(i, result.rc);
        }
    };
    setPersonalInfoParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        retrySetPersonInfo(i, textStatus);
    };
    $.ajax(setPersonalInfoParams);
}
function updateLocalName(userId) {
    $.ajax({
        type: "POST",
        url: formatString(setContactInfoUrl, __version++),
        data: {
            "ssid": __sessionId,
            "UserId": userId,
            "localName": "testss" + __version
        },
        success: function(data) {
            var currBuddy = __contactMap.get(userId);
            updateContactInfo(currBuddy);
        }
    });
}
function retrySetPersonInfo(i, errInfo) {
    if (__spRetry < 3) {
        __spRetry++;
        var p = this.data;
        window.setTimeout(function() {
            setPersonalInfo(i);
        },
        500);
    } else {
        __spRetry = 0;
        alert("设置个人资料失败，错误原因：" + errInfo);
    }
}
function setSmsOnline(s) {
    var setSmsOnlineParams = new Object();
    setSmsOnlineParams.success = setSmsOnlineSuccess;
    setSmsOnlineParams.error = setSmsOnlineError;
    setSmsOnlineParams.url = formatString(setSmsOnlineUrl, __version++);
    setSmsOnlineParams.type = "POST";
    setSmsOnlineParams.data = s;
    setSmsOnlineParams.dataType = "json";
    setSmsOnlineParams.cache = false;
    $.ajax(setSmsOnlineParams);
}
function setSmsOnlineSuccess(data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {} else {}
}
function setSmsOnlineError(XMLHttpRequest, textStatus, errorThrown) {}
var __setPresRetry = 0;
function setPresence(p, statusDesc) {
    var setPresenceParams = new Object();
    setPresenceParams.url = formatString(setPresenceUrl, __version++);
    setPresenceParams.type = "POST";
    setPresenceParams.data = p;
    setPresenceParams.dataType = "json";
    setPresenceParams.cache = false;
    setPresenceParams.success = function(data, textStatus) {
        var result = data;
        if (typeof result.rc == "number" && result.rc == 200) {
            __setPresRetry = 0;
            updateStatusDesc(statusDesc);
        } else {
            if (__setPresRetry < 3) {
                __setPresRetry++;
                var p = objects(this.data);
                window.setTimeout(function() {
                    setPresence(p, statusDesc);
                },
                500);
            } else {
                __setPresRetry = 0;
                alert("设置状态失败, 错误原因：" + result.rc);
            }
        }
    };
    setPresenceParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        if (__setPresRetry < 3) {
            __setPresRetry++;
            var p = objects(this.data);
            window.setTimeout(function() {
                setPresence(p, statusDesc);
            },
            500);
        } else {
            __setPresRetry = 0;
            alert("设置状态失败, 错误原因：" + textStatus);
        }
    };
    $.ajax(setPresenceParams);
}
function sendDirectSMS(chatWin, msg, receiver) {
    var params = new Object();
    params.type = "POST";
    params.dataType = "json";
    params.cache = false;
    params.data = {
        "UserName": __user.uid,
        "msg": msg,
        "receivers": receiver,
        "ssid": __sessionId
    };
    params.url = formatString(SendDirectSMSUrl, __version++);
    params.success = function(data, textStatus) {
        if ( !! data && typeof data.rc == "number") {
            switch (data.rc) {
            case 280:
                break;
            case 401:
                chatWin.logErrorInfo("没有给对方发送短信的授权");
                break;
            case 403:
                chatWin.logErrorInfo("服务器关闭直接短信功能");
                break;
            case 405:
                chatWin.logErrorInfo("目的用户不接受");
                break;
            case 406:
                chatWin.logErrorInfo("消息内容包含敏感词");
                break;
            case 422:
                chatWin.logErrorInfo("未开通直接短信服务");
                break;
            case 486:
                chatWin.logErrorInfo("您暂时无法发送短信，请稍后再试。");
                break;
            case 488:
                chatWin.logErrorInfo("用户停机");
                break;
            case 494:
                chatWin.logErrorInfo("您的飞信账号处于系统保护状态，限制了该功能的使用。请手机发送短信U到12520解除限制后重新登录。");
                break;
            default:
                chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
                break;
            }
        }
    };
    params.error = function() {
        chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
    };
    $.ajax(params);
}
function sendSMS(chatWin, msg, buddyId) {
    var params = new Object();
    params.type = "POST";
    params.dataType = "json";
    params.cache = false;
    params.data = {
        "UserName": __user.uid,
        "Message": msg,
        "Receivers": buddyId,
        "ssid": __sessionId
    };
    params.url = formatString(sendSMSUrl, __version++);
    params.success = function(data, textStatus) {
        if (typeof data.rc == "number") {
            switch (data.rc) {
            case 200:
                break;
            case 310:
                chatWin.logErrorInfo("Session会话过期！");
                break;
            case 311:
                chatWin.logErrorInfo("客户端请求参数错误！");
                break;
            case 400:
                chatWin.logErrorInfo("信令参数错误！");
                break;
            case 406:
                chatWin.logErrorInfo("消息有敏感词！");
                break;
            case 422:
                chatWin.logErrorInfo("没有开通直接短信！");
                break;
            case 486:
                __leftSmsCount = data.rv.day;
                if (!__user.isCM) {
                    chatWin.logErrorInfo("您的短信配额已用完，暂时无法发送短信。");
                } else {
                    chatWin.logErrorInfo("对不起，今日您发送短信数量已达上限，请明天再发");
                }
                break;
            case 4861:
                __leftSmsCount = data.rv.day;
                if (!__user.isCM) {
                    chatWin.logErrorInfo("您的短信配额已用完，暂时无法发送短信。");
                } else {
                    chatWin.logErrorInfo("对不起，今日您发送短信数量已达上限，请明天再发");
                }
                break;
            case 4862:
                __leftSmsCount = data.rv.month;
                if (!__user.isCM) {
                    chatWin.logErrorInfo("您的短信配额已用完，暂时无法发送短信。");
                } else {
                    chatWin.logErrorInfo("对不起，本月您发送短信数量已达上限，请下月再发");
                }
                break;
            case 4863:
                chatWin.logErrorInfo("超过未发送限制！");
                break;
            case 4864:
                chatWin.logErrorInfo("接收人数限制！");
                break;
            case 4865:
                chatWin.logErrorInfo("发送时间限制！");
                break;
            case 494:
                chatWin.logErrorInfo("您的飞信账号处于系统保护状态，限制了该功能的使用。请手机发送短信U到12520解除限制后重新登录。");
                break;
            default:
                chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
                break;
            }
        }
    };
    params.error = function(XMLHttpRequest, textStatus, errorThrown) {
        chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
    };
    $.ajax(params);
}
function sendMessage(chatWin, buddyId, msg, isPowerSms, isRouteSms) {
    var msgTo = __contactMap.get(buddyId);
    if (__user.isCM && (msgTo.isCT || msgTo.isCU) && isPowerSms) {
        sendDirectSMS(chatWin, msg, buddyId);
        return;
    }
    if ((__user.isCT || __user.isCU) && msgTo.isCM && isPowerSms) {
        sendSMS(chatWin, msg, buddyId);
        return;
    }
    var sendMessageParams = new Object();
    sendMessageParams.success = function(data, textStatus) {
        var result = data;
        if (typeof result.rc == "number" && result.rc >= 200 && result.rc < 300) {} else {
            if (typeof result.rc == "number" && result.rc == 420) {
                chatWin.logErrorInfo("对方版本过旧，您无法向其发起陌生人消息。");
                chatWin.inputPermission = 420;
                chatWin.enableInput(false);
            } else {
                if (typeof result.rc == "number" && result.rc == 486) {
                    if (!__user.isCM) {
                        chatWin.logErrorInfo("您的短信配额已用完，暂时无法发送短信。");
                    } else {
                        chatWin.logErrorInfo("您暂时无法发送短信，请稍后再试。");
                    }
                } else {
                    if (typeof result.rc == "number" && result.rc == 494) {
                        chatWin.logErrorInfo("您的飞信账号处于系统保护状态，限制了该功能的使用。请手机发送短信U到12520解除限制后重新登录。");
                    } else {
                        if (typeof result.rc == "number" && result.rc == 405) {} else {
                            chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
                        }
                    }
                }
            }
        }
    };
    sendMessageParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
    };
    sendMessageParams.url = formatString(sendMessageUrl, __version++);
    sendMessageParams.type = "POST";
    sendMessageParams.data = {
        "To": buddyId,
        "IsSendSms": isPowerSms ? "1": "0",
        "msg": msg,
        "ssid": __sessionId
    };
    sendMessageParams.dataType = "json";
    sendMessageParams.cache = false;
    $.ajax(sendMessageParams);
}
function inviteRobot(robotId) {
    var inviteRobotParams = new Object();
    inviteRobotParams.url = formatString(sendMessageUrl, __version++);
    inviteRobotParams.type = "POST";
    inviteRobotParams.data = {
        "To": robotId,
        "IsSendSms": "0",
        "msg": "WEB",
        "ssid": __sessionId
    };
    inviteRobotParams.dataType = "json";
    inviteRobotParams.cache = false;
    $.ajax(inviteRobotParams);
}
function OpBuddy(To, Op, onSuccess, onError) {
    var OpBuddyParams = new Object();
    OpBuddyParams.success = function(data, textStatus) {
        var result = data;
        if (typeof result.rc == "number" && result.rc == 200) {
            var currBuddy = __contactMap.get(To);
            if (Op == "0") {
                __contactMap.remove(To);
                extendContact(currBuddy);
                eachBuddyList(currBuddy,
                function(id) {
                    __contactTree.deleteBuddyItem(parseInt(id), currBuddy.uid);
                });
            } else {
                if (currBuddy) {
                    currBuddy.isBk = (Op == "2" ? 0 : 1);
                    extendContact(currBuddy);
                    eachBuddyList(currBuddy,
                    function(id) {
                        __contactTree.updateBuddyItem(parseInt(id), currBuddy);
                    });
                    var portraitSrc = getUserPortraitUrl(currBuddy, "5");
                    if (__chatFooterItemMap.containsKey(currBuddy.uid)) {
                        __chatFooterItemMap.get(currBuddy.uid).updateItem(currBuddy, portraitSrc);
                    }
                    if (__remindMsgItemMap.containsKey(currBuddy.uid)) {
                        __remindMsgItemMap.get(currBuddy.uid).updateItem(currBuddy, portraitSrc);
                    }
                    if (__chatWindowMap.containsKey(currBuddy.uid)) {
                        __chatWindowMap.get(currBuddy.uid).setBuddyStatus(currBuddy);
                    }
                } else {
                    if (Op == "1") {
                        var c = new ContactDefault();
                        c.uid = parseInt(To);
                        c.isBk = 1;
                        c.ct = -1;
                        __contactMap.put(To, c);
                    }
                }
            }
            if (typeof onSuccess == "function") {
                onSuccess(data, textStatus);
            }
        }
    };
    OpBuddyParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        if (typeof onError == "function") {
            onError(XMLHttpRequest, textStatus, errorThrown);
        }
    };
    OpBuddyParams.url = formatString(opBuddyUrl, __version++);
    OpBuddyParams.type = "POST";
    OpBuddyParams.data = {
        "To": To,
        "Op": Op,
        "ssid": __sessionId
    };
    OpBuddyParams.dataType = "json";
    OpBuddyParams.cache = false;
    $.ajax(OpBuddyParams);
}
function handleAddBuddy(e, retryTimes) {
    if (typeof retryTimes == "undefined" || retryTimes == null) {
        retryTimes = 0;
    }
    var handleAddBuddyParams = new Object();
    handleAddBuddyParams.success = function(data, textStatus) {
        var result = data;
        if (typeof result.rc == "number" && result.rc == 200 && e.data.Result == 1) {
            $.extend(result.rv, e.data.Buddy);
            addBuddySuccess(result.rv);
        }
        if (e.data.Blocked == 1 && e.data.Result == 0) {
            OpBuddy(e.data.Buddy.uid, "1");
        }
    };
    handleAddBuddyParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        if (retryTimes < 3) {
            retryTimes++;
            handleAddBuddy(e, retryTimes);
        }
    };
    handleAddBuddyParams.url = formatString(handleAddBuddyUrl, __version++);
    handleAddBuddyParams.type = "POST";
    handleAddBuddyParams.data = {
        "BuddyId": e.data.Buddy.uid,
        "Result": e.data.Result,
        "LocalName": e.data.LocalName,
        "BuddyList": e.data.BuddyList,
        "ssid": __sessionId
    };
    handleAddBuddyParams.dataType = "json";
    handleAddBuddyParams.cache = false;
    $.ajax(handleAddBuddyParams);
}
function addChatFriend(uri, onSuccess, onError) {
    var addChatFriendParams = new Object();
    if (typeof onSuccess == "function") {
        addChatFriendParams.success = onSuccess;
    }
    if (typeof onError == "function") {
        addChatFriendParams.error = onError;
    }
    addChatFriendParams.url = formatString(addChatFriendUrl, __version++);
    addChatFriendParams.type = "POST";
    addChatFriendParams.data = {
        "Uri": uri,
        "ssid": __sessionId
    };
    addChatFriendParams.dataType = "json";
    addChatFriendParams.cache = false;
    $.ajax(addChatFriendParams);
}
function addChatFriendV2(type, userValue, onSuccess, onError) {
    var params = {};
    params.url = formatString(addChatFriendUrl, __version++);
    params.type = "post";
    params.dataType = "json";
    params.data = {
        "addType": type,
        "userValue": userValue,
        "ssid": __sessionId
    };
    params.cache = false;
    if (typeof onSuccess == "function") {
        params.success = onSuccess;
    }
    if (typeof onError == "function") {
        params.error = onError;
    }
    $.ajax(params);
}
function AddBuddy(settings) {
    var ps = $.extend({
        t: 0,
        a: 0,
        u: "",
        p: 0,
        d: __user.displayName.substr(0, 5),
        l: "",
        b: 1,
        s: 0,
        c: "",
        cid: "",
        successCallback: function() {},
        failCallback: function() {},
        successCallback2: function(data) {}
    },
    settings);
    var addBuddyParams = new Object();
    addBuddyParams.url = formatString(addBuddyUrl, __version++);
    addBuddyParams.type = "POST";
    addBuddyParams.dataType = "json";
    addBuddyParams.cache = false;
    addBuddyParams.data = {
        "type": ps.t,
        "UserName": ps.u,
        "AddType": ps.a,
        "PhraseId": ps.p,
        "Desc": ps.d,
        "LocalName": ps.l,
        "BuddyLists": ps.b,
        "SubscribeFlag": ps.s,
        "Ccp": ps.c,
        "CcpId": ps.cid,
        "ssid": __sessionId
    };
    addBuddyParams.success = function(data, textStatus) {
        ps.successCallback2(data);
        if (typeof data.rc == "number" && data.rc == 200) {
            addBuddySuccess(data.rv);
            ps.successCallback();
        } else {
            if (typeof data.rc == "number" && data.rc == 520) {
                alert("您的好友数已达上限。");
            } else {
                if (typeof data.rc == "number" && data.rc == 521) {
                    alert(ps.u + "已在您的好友列表中。");
                } else {
                    if (typeof data.rc == "number" && data.rc == 522) {
                        alert("对不起，您是飞信互联网用户（未绑定手机号），不能添加未开通移动业务的移动手机号为好友。");
                    } else {
                        if (typeof data.rc == "number" && data.rc == 523) {
                            alert("不能将自己添加为好友。");
                        } else {
                            if (typeof data.rc == "number" && data.rc == 312) {
                                alert("您输入的验证码有误，请重新输入。");
                                $("#addBuddy_ccps").select();
                            } else {
                                if (typeof data.rc == "number" && data.rc == 404) {
                                    alert("您所输入的号码不存在。");
                                } else {
                                    if (typeof data.rc == "number" && data.rc == 486) {
                                        alert("您添加好友的请求过于频繁，请稍后再试。");
                                    } else {
                                        if (typeof data.rc == "number" && data.rc == 495) {
                                            alert("对不起，您权限不足，不能添加此好友。");
                                        } else {
                                            if (typeof data.rc == "number" && data.rc == 494) {
                                                alert("您的飞信账号处于系统保护状态，限制了该功能的使用。请手机发送短信U到12520解除限制后重新登录。");
                                            } else {
                                                if (typeof data.rc == "number" && data.rc == 400) {
                                                    alert("添加好友失败，请您检查对方的手机号或者飞信号是否填写正确。");
                                                } else {
                                                    alert("添加好友失败，请重试。错误代码：800000" + data.rc);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    addBuddyParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        ps.failCallback();
        alert("添加好友失败，请重试。错误原因：" + textStatus);
    };
    $.ajax(addBuddyParams);
}
function logout(redirect) {
    __isNormalLogout = true;
    var logoutParams = new Object();
    logoutParams.url = formatString(logoutUrl, __version++);
    logoutParams.type = "POST";
    logoutParams.data = {
        "ssid": __sessionId
    };
    logoutParams.dataType = "json";
    logoutParams.cache = false;
    if (redirect) {
        window.setTimeout("window.location.href = '" + loginPageUrl + "'", 500);
    }
    $.ajax(logoutParams);
}
function initUserInfo() {
    var username = cnSubstr(__user.displayName, 18);
    $("#welcome_name").text(username);
    $("#user_name").text(username);
    $("#user_sid").text(__user.sid);
    $("#user_impresa").text(cnSubstr(__user.i, 40, false) || "请输入心情短语...");
    $("#user_portrait").attr("src", getUserPortraitUrl(__user, "3"));
    if (__user.isCM && __user.cas == "0") {
        if (__isSmsOnline.test(__user.sms)) {
            $("#input_rec_msg").removeAttr("disabled").attr("checked", "true");
        } else {
            $("#input_rec_msg").removeAttr("disabled").removeAttr("checked");
        }
    } else {
        if (__user.isCT || __user.isCU) {
            $("#input_rec_msg").css({
                "display": "none"
            });
            $("#input_rec_msg").next().css({
                "display": "none"
            });
            $("#input_rec_msg").parent().prev().addClass("none");
        } else {
            $("#input_rec_msg").removeAttr("checked").attr("disabled", "disabled");
        }
    }
    if (__user.ca.toLowerCase() == "cmcc") {
        if (!$("#vip_icon").attr("id")) {
            $(".service_icon").append('<li><a id="vip_icon" href="' + __vipUrl + '" title="会员" class="sicon-vip" target="_blank"></a></li>');
        }
    }
}
function initUserStatusDiv() {
    var userImpresa = $("#user_impresa");
    var userImpresaPra = $("#user_impresa_input");
    var userImpresaInput = userImpresaPra.find("input:first");
    var status = $("#user_status");
    var setter = $("#set_user_status");
    var sid = getCookie("webim_usersid");
    $("#welcome_name").text(sid);
    $("#user_name").text(sid);
    $("#user_sid").text(sid);
    var userStatus = getCookie("webim_userstatus");
    switch (userStatus) {
    case "0":
        status.find("em").text("( 隐身 )");
        break;
    case "100":
        status.find("em").text("( 离开 )");
        break;
    case "400":
        status.find("em").text("( 在线 )");
        break;
    case "600":
        status.find("em").text("( 忙碌 )");
        break;
    default:
        status.find("em").text("( 在线 )");
        break;
    }
    userImpresa.text("请输入心情短语...");
    userImpresa.bind("click",
    function() {
        userImpresa.css("display", "none");
        userImpresaPra.css("display", "");
        userImpresaInput.focus();
    }).bind("mouseover",
    function() {
        userImpresa.removeClass().addClass("sword_chg");
    }).bind("mouseout",
    function() {
        userImpresa.removeClass();
    });
    userImpresaInput.bind("focus",
    function() {
        userImpresaInput.val(__user.i).select();
    }).bind("blur",
    function() {
        var impresa = userImpresaInput.val().trim();
        if (impresa != __user.i) {
            setPersonalInfo(impresa);
        }
        userImpresa.css("display", "");
        userImpresaPra.css("display", "none");
    }).bind("keydown",
    function(e) {
        e = window.event || e;
        if (e.keyCode == 13) {
            var impresa = userImpresaInput.val().trim();
            if (impresa != __user.i) {
                setPersonalInfo(impresa);
            }
            userImpresa.css("display", "");
            userImpresaPra.css("display", "none");
        }
    });
    status.bind("mouseover",
    function() {
        if (this.className != "focus") {
            this.className = "hover";
        }
    }).bind("mouseout",
    function() {
        if (this.className != "focus") {
            this.className = "";
        } else {
            __hideUserStatusSetterTimer = setTimeout(function() {
                status.removeClass();
                setter.css("display", "none");
            },
            500);
        }
    }).bind("click",
    function() {
        if (this.className != "focus") {
            this.className = "focus";
            var p = $(this).offset();
            setter.css({
                "display": "block",
                "top": "61px",
                "left": (p.left + 3) + "px"
            });
        } else {
            this.className = "hover";
            setter.css("display", "none");
        }
    });
    setter.bind("mouseover",
    function(e) {
        clearTimeout(__hideUserStatusSetterTimer);
    }).bind("mouseout",
    function(e) {
        if (isMouseOut(this, e)) {
            status.removeClass();
            setter.css("display", "none");
        }
    });
    (setter.find("li")).bind("mouseover",
    function() {
        this.className = "hover";
    }).bind("mouseout",
    function() {
        this.className = "";
    }).bind("click",
    function() {
        status.removeClass();
        setter.css("display", "none");
        if (this.id == "userdefined_status") {
            createCustomPresTab();
        } else {
            setPresence({
                "Presence": $(this).attr("status"),
                "Custom": $(this).text(),
                "ssid": __sessionId
            },
            $(this).text());
        }
    });
    var inputRecMsg = $("#input_rec_msg");
    inputRecMsg.removeAttr("checked").attr("disabled", "disabled");
    inputRecMsg.bind("click",
    function() {
        setter.css({
            "display": "none"
        });
        if (!this.checked) {
            this.checked = "";
            if (!__setSmsWindow) {
                __setSmsWindow = $.fn.setSmsWindow({
                    onConfirm: function(smsWin, time) {
                        var t = "1.00:00:00";
                        switch (time) {
                        case "1":
                            t = "1.00:00:00";
                            break;
                        case "2":
                            t = "3.00:00:00";
                            break;
                        case "3":
                            t = "7.00:00:00";
                            break;
                        case "4":
                            t = "36500.00:00:00";
                            break;
                        default:
                            break;
                        }
                        setSmsOnline({
                            "ReceiveSms":
                            "0",
                            "Time": t,
                            "ssid": __sessionId
                        });
                    },
                    onCancel: function() {
                        inputRecMsg.attr("checked", "true");
                    }
                });
                __setSmsWindow.show();
            } else {
                __setSmsWindow.show();
            }
        } else {
            this.checked = "checked";
            setSmsOnline({
                "ReceiveSms": "0",
                "ssid": __sessionId
            });
        }
    });
    var rec_sound = $("#input_rec_sound");
    rec_sound.click(function() {
        if (rec_sound.attr("checked") == true) {
            __isOpenSound = true;
        } else {
            __isOpenSound = false;
        }
    });
}
function initContactList() {
    var contactList = __contactMap.values();
    insertBuddyToList(contactList, initMainUi);
}
function initMainUi() {
    $("#logging").css("display", "none");
    getConnect();
    var activityUrl;
    if (__user.creds && __user.creds.length > 0) {
        activityUrl = formatString(__activityUrl, encodeURIComponent(__user.creds[0].c));
    } else {
        activityUrl = formatString(__activityUrl, "");
    }
    __mainTabWindow.createTab("发短信", "content/freeSms.htm", false);
    $("#tab_1").click();
    $("#tab_1").click(function() {
        $.increaseCounters("500400001");
    });
    initContentHeight();
    initGroupListHeight();
}
function insertBuddyToList(contactList, callback) {
    __buddyList.sort(buddyListComparator);
    var lists = new Object();
    var buddyListLength = __buddyList.length;
    for (var i = 0; i < buddyListLength; i++) {
        var visible = __contactTree.isBuddyListOpen(__buddyList[i].id);
        if (__buddyList[i].id >= -1) {
            lists[__buddyList[i].id] = __contactTree.createBuddyList(__buddyList[i], visible);
        }
    }
    var itemLength = contactList.length;
    var thisListIsOk = new Array();
    var contactPerInterval = 50;
    var intervalCount = Math.floor((itemLength - 1) / contactPerInterval) + 1;
    for (var i = 0; i < intervalCount; i++) {
        thisListIsOk.push(false);
    }
    function insertBuddies() {
        var start = 0;
        var insertInterval = window.setInterval(function() {
            if (start >= itemLength) {
                window.clearInterval(insertInterval);
                return;
            }
            var end = Math.min(itemLength, start + contactPerInterval);
            for (var i = start; i < end; i++) {
                if (contactList[i].isBk == 1 && contactList[i].ct == -1) {
                    continue;
                } else {
                    eachBuddyList(contactList[i],
                    function(id) {
                        var list = lists[id];
                        if (list) {
                            var item = __contactTree.createBuddyItem(contactList[i]);
                            list.pushContent(item);
                        }
                    });
                }
            }
            sendToSwfJD(__loginProcess + Math.round(30 * (end - start) / itemLength));
            thisListIsOk[start / contactPerInterval] = true;
            start += contactPerInterval;
        },
        50);
    }
    insertBuddies();
    var isListReadyInterval = window.setInterval(function() {
        var j = 0;
        var k = intervalCount - 1;
        while (j <= k) {
            if (!thisListIsOk[j] || !thisListIsOk[k]) {
                break;
            }
            j++;
            k--;
        }
        if (j > k) {
            window.clearInterval(isListReadyInterval);
            var str = "";
            for (var i = 0; i < buddyListLength; i++) {
                if (__buddyList[i].id >= -1) {
                    var l = lists[__buddyList[i].id];
                    str += l.toHtmlString();
                }
            }
            __contactTree.setInnerHtml(str);
            __isOkBuddyList = true;
            if (typeof callback == "function") {
                if (__isOkBuddyList && __isOkGroupList) {
                    callback();
                }
            }
            str = null;
        }
    },
    1000);
}
function updatePersonalInfo(p) {
    $.extend(__user, p);
    extendUser();
    setRemindMsgCookie(__user.sid, __user.displayName, null, __sessionId);
    initUserInfo();
    var chaWindows = __chatWindowMap.values();
    var length = chaWindows.length;
    for (var i = 0; i < length; i++) {
        if (chaWindows[i].setUserInfo) {
            chaWindows[i].setUserInfo(__user);
        }
    }
}
function addBuddyWithReply(c, updateUI) {
    var contact = null;
    if (__contactMap.containsKey(c.uid)) {
        contact = __contactMap.get(c.uid);
        var insertOrNot = (contact.isBk == 1 && contact.ct == -1);
        $.extend(contact, c);
        switch (c.ut) {
        case 1:
            contact.ct = 0;
            break;
        case 2:
            contact.ct = 2;
            break;
        case 3:
            contact.isBk = 1;
            break;
        default:
            break;
        }
        extendContact(contact);
        if (updateUI) {
            eachBuddyList(contact,
            function(id) {
                if (! (contact.isBk == 1 && contact.ct == -1)) {
                    if (insertOrNot) {
                        __contactTree.insertBuddyItem(contact, parseInt(id));
                    } else {
                        __contactTree.updateBuddyItem(parseInt(id), contact);
                    }
                }
            });
        }
    } else {
        contact = new ContactDefault();
        $.extend(contact, c);
        switch (c.ut) {
        case 1:
            contact.ct = 0;
            break;
        case 2:
            contact.ct = 2;
            break;
        case 3:
            contact.isBk = 1;
            contact.ct == -1;
            break;
        default:
            break;
        }
        extendContact(contact);
        __contactMap.put(contact.uid, contact);
        if (updateUI) {
            eachBuddyList(contact,
            function(id) {
                __contactTree.insertBuddyItem(contact, parseInt(id));
            });
        }
    }
}
function removeBuddyWithReply(c, updateUI) {
    var contact = __contactMap.get(c.uid) || c;
    if (!contact) {
        return;
    }
    if (1 == c.ut) {
        if (1 == contact.isBk) {
            var bkContact = new ContactDefault();
            bkContact.uid = c.uid;
            bkContact.isBk = 1;
            bkContact.ct = -1;
            __contactMap.remove(c.uid);
            __contactMap.put(bkContact.uid, bkContact);
        } else {
            for (var k = 0, length = __buddyList.length; k < length; k++) {
                __contactTree.deleteBuddyItem(parseInt(__buddyList[k].id), c.uid);
            }
            __contactMap.remove(c.uid);
        }
        if (updateUI) {
            for (var k = 0, length = __buddyList.length; k < length; k++) {
                __contactTree.deleteBuddyItem(parseInt(__buddyList[k].id), c.uid);
            }
        }
    } else {
        if (2 == c.ut) {
            if (2 == contact.ct) {
                if (1 == contact.isBk) {
                    var bkContact = new ContactDefault();
                    bkContact.uid = c.uid;
                    bkContact.isBk = 1;
                    bkContact.ct = -1;
                    __contactMap.remove(c.uid);
                    __contactMap.put(bkContact.uid, bkContact);
                } else {
                    __contactMap.remove(c.uid);
                }
            }
            if (updateUI) {
                __contactTree.deleteBuddyItem( - 1, c.uid);
            }
        } else {
            if (3 == c.ut) {
                if ( - 1 == contact.ct && 1 == contact.isBk) {
                    __contactMap.remove(c.uid);
                } else {
                    contact.isBk = 0;
                    extendContact(contact);
                    if (updateUI) {
                        eachBuddyList(contact,
                        function(id) {
                            __contactTree.updateBuddyItem(parseInt(id), contact);
                        });
                    }
                }
            }
        }
    }
}
function updateBuddyWithReply(c, updateUI) {
    var contact = __contactMap.get(c.uid);
    if (!contact) {
        return;
    }
    var username = "";
    if (contact.ln) {
        username = contact.ln;
    } else {
        if (contact.mn && contact.sid) {
            username = contact.mn + "(" + contact.sid + ")";
        } else {
            if (contact.mn) {
                username = contact.mn;
            } else {
                if (contact.sid) {
                    username = contact.sid;
                } else {
                    if (contact.uri) {
                        username = (new jCompactUri(contact.uri)).mobileNoOrSid;
                    }
                }
            }
        }
    }
    if (typeof c.rs == "number" && c.rs == 1) {
        contact.ct = contact.bss == 0 ? 1 : 0;
        updateContactInfo(c, updateUI);
        $.fn.fetionHintWindow({
            modal: false
        }).show("(" + username + ")同意添加为好友。 ", "提示", "OK");
    } else {
        if (typeof c.rs == "number" && c.rs == 2) {
            updateContactInfo(c, updateUI);
            $.fn.fetionHintWindow({
                modal: false
            }).show("(" + username + ")拒绝添加为好友。 ", "提示", "OK");
        } else {
            updateContactInfo(c, updateUI);
        }
    }
}
function updateContactInfo(c, updateUI) {
    var contact = __contactMap.get(c.uid);
    if (!contact) {
        return;
    }
    $.extend(contact, c);
    extendContact(contact);
    if (updateUI) {
        eachBuddyList(contact,
        function(id) {
            __contactTree.updateBuddyItem(parseInt(id), contact);
        });
    }
    var portraitSrc = getUserPortraitUrl(c, "5");
    if (__chatFooterItemMap.containsKey(c.uid)) {
        __chatFooterItemMap.get(c.uid).updateItem(contact, portraitSrc);
    }
    if (__remindMsgItemMap.containsKey(c.uid)) {
        __remindMsgItemMap.get(c.uid).updateItem(contact, portraitSrc);
    }
    var chaWindow = __chatWindowMap.get(c.uid);
    if (chaWindow) {
        chaWindow.setBuddyInfo(contact);
        chaWindow.setBuddyStatus(contact);
    }
}
var __searchKeyword = "";
function initi__searchInput() {
    $("#inputSearchFriends").bind("focus", searchFocus).bind("blur", searchBlur).bind("keydown", searchKeydown).bind("keyup", searchKeyup);
    $("#btnSearchClear").bind("click",
    function(e) {
        clearSearch();
        this.style.display = "";
        stopPropagation(e);
        return false;
    });
}
function searchFocus() {
    this.value = "";
    $("#search_result").css("display", "none");
    $("#btnSearchClear").css("display", "block");
}
function searchBlur() {
    this.className = "";
    if (this.value == "") {
        this.value = __searchPrompt;
        $("#search_result").css("display", "none");
        $("#btnSearchClear").css({
            "display": "none"
        });
    }
}
function searchKeydown(e) {
    e = window.event || e;
    switch (e.keyCode) {
    case 38:
        moveSelectedContact("up");
        break;
    case 40:
        moveSelectedContact("down");
        break;
    case 13:
        if (__searchKeyword == this.value) {
            openSelectedContact(this, e);
        } else {
            searchContact(this, e);
        }
        break;
    default:
        searchContact(this, e);
        break;
    }
}
function searchKeyup(e) {
    e = window.event || e;
    switch (e.keyCode) {
    case 38:
    case 40:
        break;
    case 13:
        if (__searchKeyword == this.value) {
            openSelectedContact(this, e);
        } else {
            searchContact(this, e);
        }
        break;
    default:
        searchContact(this, e);
        break;
    }
}
function moveSelectedContact(direction) {
    var resultDiv = $("#search_result").find("div > ul");
    var sItems = resultDiv.find("li");
    var count = sItems.length;
    var offset = 0;
    if (direction == "up") {
        offset = -1;
    } else {
        if (direction == "down") {
            offset = 1;
        }
    }
    for (var i = 0; i < count; i++) {
        if (sItems.eq(i).attr("class") == "hover") {
            sItems.eq(i).removeClass("hover");
            i += offset;
            break;
        }
    }
    var currIndex = (i + count) % count;
    sItems.eq(currIndex).addClass("hover");
    resultDiv.scrollTop(Math.floor(currIndex / 4) * 4 * sItems.eq(0).height());
}
function openSelectedContact(sender, e) {
    sender.blur();
    setTimeout(function() {
        var item = $("#search_result").find("div > ul > .hover:first");
        if (item) {
            item.click();
        }
    },
    300);
}
function searchContact(sender, e) {
    if (__searchKeyword == sender.value) {
        return;
    }
    var resultDiv = $("#search_result");
    resultDiv.find("div > ul > li").remove();
    __searchKeyword = sender.value;
    if (sender.value == "") {
        resultDiv.css("display", "none");
        $("#btnSearchClear").css({
            "display": "none"
        });
        return;
    }
    __searchKeyword = sender.value;
    var contactList = __contactMap.values();
    var length = contactList.length;
    var searchResult = new Array();
    if (__isFirstSearch) {
        for (var i = 0; i < length; i++) {
            var result = searchHelper.MakeSpellCodeAsWordsAll(contactList[i].is);
            contactList[i].is = result.bodyContent;
        }
        __isFirstSearch = false;
    }
    for (var i = 0; i < length; i++) {
        var searchLowerCase = __searchKeyword.toLowerCase();
        var reg = new RegExp("[*]+", "gi");
        var searchLowerCasePy = __searchKeyword.toLowerCase().replace(reg, "");
        var is = "";
        var pis = "";
        try {
            is = searchHelper.MakeSpellCodeAsWordsAll(contactList[i].is).bodyContent;
            pis = searchHelper.MakeSpellCodeAsWordsAll(contactList[i].pis).bodyContent;
        } catch(e) {}
        if ((contactList[i].nn && contactList[i].nn.toLowerCase().indexOf(searchLowerCase) >= 0) || (contactList[i].ln && contactList[i].ln.toLowerCase().indexOf(searchLowerCase) >= 0) || (contactList[i].mn && contactList[i].mn.toLowerCase().indexOf(searchLowerCase) >= 0) || (is && is.toLowerCase().indexOf(searchLowerCasePy) >= 0) || (pis && pis.toLowerCase().indexOf(searchLowerCasePy) >= 0)) {
            searchResult.push(contactList[i]);
        }
    }
    var resultLength = searchResult.length;
    if (resultLength <= 0) {
        resultDiv.find("div > ul:first").append("<li>没找到匹配的联系人</li>");
    }
    searchResult.sort(buddyComparator);
    for (var i = 0; i < resultLength; i++) {
        var item;
        var name = htmlEncode(searchResult[i].displayName);
        if (i == 0) {
            item = $("<li class='hover'><i class='" + searchResult[i].statusClass + "' /><b>" + name + "</b> <em>" + getStatusDesc(searchResult[i]) + "</em> </li>");
            resultDiv.find("div > ul:first").append(item);
        } else {
            item = $("<li><i class='" + searchResult[i].statusClass + "' /><b>" + name + "</b> <em>" + getStatusDesc(searchResult[i]) + "</em> </li>");
            resultDiv.find("div > ul:first").append(item);
        }
        item.bind("mouseover",
        function() {
            $("#search_result").find("div > ul > .hover").removeClass("hover");
            $(this).removeClass().addClass("hover");
        }).bind("click", {
            buddyId: searchResult[i].uid
        },
        function(e) {
            openChatWindow(this, e.data.buddyId);
            clearSearch();
            $("#btnSearchClear").css({
                "display": "none"
            });
        });
    }
    var jSender = $(sender);
    var position = jSender.offset();
    resultDiv.css("display", "block").css({
        "top": position.top + jSender.innerHeight(),
        "left": position.left - 26
    });
    $("#btnSearchClear").css({
        "display": "block"
    });
}
function clearSearch() {
    var resultDiv = $("#search_result");
    resultDiv.css("display", "none");
    resultDiv.find("div > ul > li").remove();
    var input = $("#inputSearchFriends");
    if (input.val() != __searchPrompt) {
        input.val(__searchPrompt);
    }
    __searchKeyword = "";
}
function initContactCard() {
    $("#contact_info").bind("mouseover",
    function(e) {
        clearTimeout(__hideContactInfoTimer);
        if (isMouseOver(this, e)) {
            this.style.display = "block";
        }
    }).bind("mouseout",
    function(e) {
        if (isMouseOut(this, e)) {
            this.style.display = "none";
        }
    });
}
function showContactCard(sender, buddyId) {
    clearTimeout(__hideContactInfoTimer);
    var currBuddy = __contactMap.get(buddyId);
    if (!currBuddy) {
        return;
    }
    __initContactInfoTimer = window.setTimeout(function() {
        var card = $("#contact_info");
        card.css("display", "none");
        var cardPortrait = card.find("#contact_portrait");
        var cardStatus = card.find("#contact_status");
        var cardName = card.find("#contact_name");
        cardPortrait.attr("src", getDefaultPortraitUrl(currBuddy));
        var portraitPath = getUserPortraitUrl(currBuddy, "3");
        cacheUerPortrait(currBuddy, portraitPath,
        function(portraitImg, user) {
            if (currBuddy == user) {
                cardPortrait.attr("src", portraitPath);
            }
        });
        cardName.get(0).innerHTML = EmotionNonhtmlReplace(currBuddy.displayName, 18, true);
        if (currBuddy.isVip) {
            cardName.css("color", "red");
        } else {
            cardName.css("color", "");
        }
        var buddySid = "";
        if (currBuddy.ct == 1) {
            buddySid = "尚未开通飞信";
        } else {
            var cUri = new jCompactUri(currBuddy.uri);
            buddySid = currBuddy.sid || (!cUri.isMobileNo ? cUri.mobileNoOrSid: "");
        }
        card.find("#contact_id").text(buddySid);
        cardStatus.attr("class", currBuddy.statusClass);
        if (currBuddy.uid) {
            card.find("#contact_space").attr("href", formatString(__contactSpaceUrl, currBuddy.uid)).css("display", "").click(function() {
                if (__user.c) {
                    var contactUrl = formatString(__contactSpaceUrl, currBuddy.uid, __user.c);
                    $(this).attr("href", contactUrl);
                }
            });
        } else {
            card.find("#contact_space").attr("href", "#").css("display", "none");
        }
        if (!currBuddy.i || currBuddy.ct == 1) {
            card.find("#contact_impresa").text("").css("display", "none");
            card.find("#contact_impresa_line").css("display", "none");
        } else {
            var impresa = EmotionNonhtmlReplace(currBuddy.i, 106, true);
            var impresaUI = card.find("#contact_impresa");
            impresaUI.get(0).innerHTML = impresa;
            impresaUI.css("display", "");
            card.find("#contact_impresa_line").css("display", "");
        }
        if (currBuddy.bl == "0") {
            card.find("#contact_list").text("未分组");
        } else {
            if (currBuddy.bl == "-1") {
                card.find("#contact_list").text("陌生人");
            } else {
                var listName = "";
                var buddyListLenth = __buddyList.length;
                eachBuddyList(currBuddy,
                function(id) {
                    for (var i = 0; i < buddyListLenth; i++) {
                        if (__buddyList[i].id.toString() == id) {
                            listName += __buddyList[i].n + ";";
                        }
                    }
                });
                listName = listName.trim(";");
                card.find("#contact_list").text(listName);
            }
        }
        try {
            var p = $(sender).offset();
            if (p.top + card.height() > getViewportHeight() - 20) {
                p.top = p.top - card.height() + $(sender).innerHeight();
            }
        } catch(err) {}
        __showContactInfoTimer = window.setTimeout(function() {
            card.css({
                "display": "block",
                "top": p.top,
                "left": p.left - card.outerWidth()
            });
        },
        300);
    },
    500);
}
function hideContactCard(sender, buddyId) {
    clearTimeout(__initContactInfoTimer);
    clearTimeout(__showContactInfoTimer);
    __hideContactInfoTimer = setTimeout(function() {
        var card = $("#contact_info");
        card.css({
            "display": "none"
        });
    },
    200);
}
function initOperateCard() {
    var opearteCard = $("#operate_info");
    opearteCard.bind("mouseover",
    function(e) {
        clearTimeout(__hideOperateInfoTimer);
        this.style.display = "block";
    }).bind("mouseout",
    function(e) {
        if (isMouseOut(this, e)) {
            this.style.display = "none";
        }
    });
    opearteCard.find("div>ul>li").bind("mouseover",
    function() {
        this.className = "hover";
    }).bind("mouseout",
    function() {
        this.className = "";
    });
}
function showOperateCard(sender, buddyId) {
    var currBuddy = __contactMap.get(buddyId);
    var card = $("#operate_info");
    var items = $("#operate_items");
    items.find("#operate_msg").unbind().bind("click",
    function() {
        openChatWindow(sender, buddyId);
        card.css({
            "display": "none"
        });
        return false;
    });
    items.find("#operate_block").unbind().text(currBuddy.isBk == 1 ? "移出黑名单": "加入黑名单").bind("click",
    function() {
        card.css({
            "display": "none"
        });
        OpBuddy(currBuddy.uid, currBuddy.isBk == 1 ? "2": "1");
        __group_mem.containsKey("");
        return false;
    });
    items.find("#operate_updateLocalName").unbind().bind("click",
    function() {
        card.css({
            "display": "none"
        });
        updateLocalName(currBuddy.uid);
        return false;
    });
    var addBuddyLink = items.find("#operate_add");
    addBuddyLink.unbind();
    var currStatus = currBuddy.status;
    if (currBuddy.ct == 2 || currStatus == ContactStatus.Verify || currStatus == ContactStatus.Verify_Bklist || currStatus == ContactStatus.Refuse_Bklist || currStatus == ContactStatus.Refuse) {
        var hintText = (currBuddy.ct == 2 ? "添加好友": "重新添加好友");
        addBuddyLink.parent().css("display", "");
        addBuddyLink.text(hintText).bind("click",
        function() {
            if (currBuddy.sid) {
                createAddBuddyTab(currBuddy.sid);
            } else {
                if (currBuddy.mn) {
                    createAddBuddyTab(currBuddy.mn, "1");
                } else {
                    if (currBuddy.uri) {
                        var userUri = new jCompactUri(currBuddy.uri);
                        createAddBuddyTab(userUri.mobileNoOrSid, userUri.isMobileNo ? "1": "0");
                    } else {
                        createAddBuddyTab();
                    }
                }
            }
            return false;
        });
    } else {
        addBuddyLink.parent().css("display", "none");
    }
    var enterSpace = items.find("#operate_space");
    enterSpace.unbind();
    if (currBuddy.sid) {
        enterSpace.attr("href", formatString(__contactSpaceUrl, currBuddy.uid));
        enterSpace.parent().css("display", "");
        enterSpace.bind("click",
        function() {
            card.css({
                "display": "none"
            });
            if (__user.c) {
                var contactUrl = formatString(__contactSpaceUrl, currBuddy.uid, __user.c);
                $(this).attr("href", contactUrl);
            }
        });
    } else {
        enterSpace.parent().css("display", "none");
    }
    var user_control = $(sender);
    var u = user_control.offset();
    if (u.top + card.height() > getViewportHeight() - 20) {
        u.top = u.top - card.height();
    }
    card.css({
        "display": "block",
        "top": u.top + user_control.height(),
        "left": u.left - (card.outerWidth() - user_control.width())
    });
    __hideOperateInfoTimer = setTimeout(function() {
        card.css({
            "display": "none"
        });
    },
    2000);
}
function updateStatusDesc(desc) {
    desc = desc || "";
    desc = cnSubstr2(desc.trim(), 6);
    var text = "";
    if (cnLength2(desc) < 8) {
        text = "( " + desc + " )";
    } else {
        text = "(" + desc + ")";
    }
    $("#user_status > em").text(text);
}
function initChatFooter() {
    __maxMsgListOnTaskbar = getMaxMsglistCount();
    __moreMsgListDiv = $.fn.jMoreMsgLists({
        target: $(document.body),
        maxHold: 5
    });
    __moreMsgListDiv.hide();
    $("#msg_more").bind("click",
    function() {
        this.className = "msg_more hover_msg";
        if (__chatFooterItemMap.size() > __maxMsgListOnTaskbar) {
            if (__moreMsgListDiv.isShow) {
                __moreMsgListDiv.hide();
            } else {
                __moreMsgListDiv.show();
            }
        }
    }).bind("mouseout",
    function(e) {
        this.className = "msg_more";
        if (__moreMsgListDiv.isShow && isMouseOut(this, e)) {
            __hideMoreMsgListTimer = setTimeout(function() {
                __moreMsgListDiv.hide();
            },
            500);
        }
    }).bind("mouseover",
    function() {
        this.className = "msg_more hover";
    });
    __remindMsgDiv = $.fn.jRemindMsgList({
        target: $(document.body),
        onClearAll: clearAllRemindMsg
    });
    __remindMsgDiv.hide();
    $("#msg_remind").bind("click",
    function(e) {
        $.increaseCounters("500400002");
        if (!__remindMsgDiv.isShow && __remindMsgItemMap.size() > 0) {
            __remindMsgDiv.show();
        } else {
            __remindMsgDiv.hide();
        }
        stopPropagation(e);
        return false;
    }).bind("mouseout",
    function(e) {
        if (__remindMsgDiv.isShow && isMouseOut(this, e)) {
            __hideRemindMsgTimer = setTimeout(function() {
                __remindMsgDiv.hide();
            },
            500);
        }
    }).bind("mousedown",
    function() {
        this.className = "msg_remind active";
    }).bind("mouseup",
    function() {
        this.className = "msg_remind";
    });
}
function getMaxMsglistCount() {
    var msglistAreaWith = $("#taskbar").width() - $("#cm_logo").width() - $("#msg_remind").width() - $("#msg_more").width();
    return Math.floor(msglistAreaWith / 96);
}
function reInitialFooter(footerItem) {
    var msgList = $("#msg_list");
    $("#msg_more").css("display", "none");
    if (footerItem) {
        if (__moreMsgListDiv.getItems().size() == 0 && msgList.find("li").size() < __maxMsgListOnTaskbar) {
            msgList.append(footerItem);
        } else {
            $("#msg_more").css("display", "");
            __moreMsgListDiv.addItem(footerItem);
        }
        return;
    }
    var footerArray = new Array();
    msgList.find("li").each(function() {
        footerArray.push($(this));
    });
    var moreFooters = __moreMsgListDiv.getItems();
    for (var i = moreFooters.size() - 1; i >= 0; i--) {
        footerArray.push(moreFooters.eq(i));
    }
    var length = footerArray.length;
    for (var j = 0; j < length; j++) {
        footerArray[j].css("display", "block");
        if (j < __maxMsgListOnTaskbar) {
            footerArray[j].inMore = false;
            msgList.append(footerArray[j]);
        } else {
            footerArray[j].inMore = true;
            $("#msg_more").css("display", "");
            __moreMsgListDiv.addItem(footerArray[j]);
            __moreMsgListDiv.hide();
        }
    }
}
function clearAllRemindMsg() {
    __remindMsgItemMap.clear();
    var footers = __chatFooterItemMap.values();
    for (var i = footers.length - 1; i >= 0; i--) {
        footers[i].removeClass("call");
    }
    setRemindCountTotal();
}
function receiveMsgs(d) {
    var currBuddy = __contactMap.get(d.fromUid);
    if (!currBuddy || currBuddy.ct == 2) {
        if (getUserPermission(__user.gp, "contact") != 1) {
            return;
        }
    }
    if (!currBuddy) {
        addChatFriend(d.fromUri,
        function(data, textStatus) {
            var result = data;
            if (typeof result.rc == "number" && result.rc == 200) {
                var contact = new ContactDefault();
                if (!buddyListContains("-1")) {
                    __buddyList.push({
                        "id": -1,
                        "n": "陌生人"
                    });
                    __contactTree.insertBuddyList({
                        "id": -1,
                        "n": "陌生人"
                    });
                }
                contact.uid = d.fromUid;
                contact.uri = d.fromUri;
                contact.bl = "-1";
                contact.ct = 2;
                extendContact(contact);
                __contactMap.put(contact.uid, contact);
                __contactTree.insertBuddyItem(contact, contact.bl);
                receiveMsgs(d);
            }
        });
        return;
    }
    var cw = getChatWindow(d.fromUid);
    if (!cw.isOnFocus() || !__isOnfocus) {
        if (__remindMsgItemMap.containsKey(d.fromUid)) {
            var remindItem = __remindMsgItemMap.get(d.fromUid);
            remindItem.msgCount(remindItem.msgCount() + 1);
            remindItem.updateItem(__contactMap.get(d.fromUid));
        } else {
            var b = __contactMap.get(d.fromUid);
            var c = __chatWindowMap.get(b.uid);
            var portraitSrc = getUserPortraitUrl(b, "5");
            var remindItem = $.fn.jRemindMsgItem(b, c, portraitSrc);
            __remindMsgItemMap.put(d.fromUid, remindItem);
            __remindMsgDiv.addItem(remindItem);
        }
        setRemindCountTotal();
    }
    if (!cw.isActived) {
        cw.active();
        var chatFooter = __chatFooterItemMap.get(d.fromUid);
        chatFooter.removeClass().addClass("call");
        if (chatFooter.isInMoreMsgList()) {
            $("#msg_more").removeClass().addClass("msg_more hover_msg");
        }
    } else {
        if (!cw.isOnFocus()) {
            var chatFooter = __chatFooterItemMap.get(d.fromUid);
            chatFooter.removeClass().addClass("call");
            if (chatFooter.isInMoreMsgList()) {
                $("#msg_more").removeClass().addClass("msg_more hover_msg");
            }
        }
    }
    cw.logFriendMsg(d.msg);
    if (cw.inputPermission == 420 && !cw.enablechatInput) {
        cw.enableInput(true);
    }
    if (!__isOnfocus) {
        if (typeof __titleflashInterval != "undefined") {
            window.clearInterval(__titleflashInterval);
        }
        __flashTitleArray.push(__msgcomingTitle);
        __flashTitleArray.push("【" + __msgcomingTitle + "】");
        var titleLen = __flashTitleArray.length;
        var index = titleLen - 1;
        __titleflashInterval = window.setInterval(function() {
            var title = __flashTitleArray[index];
            document.title = title;
            index = (index + 1) % titleLen;
        },
        1000);
    }
}
function receiveFile(d, fType) {
    var currBuddy = __contactMap.get(d.FromUserId);
    if (!currBuddy || currBuddy.ct == 2) {
        if (getUserPermission(__user.gp, "contact") != 1) {
            return;
        }
    }
    var cw = getChatWindow(d.FromUserId);
    if (!cw.isOnFocus() || !__isOnfocus) {
        var b = __contactMap.get(d.FromUserId);
        var c = __chatWindowMap.get(b.uid);
        var portraitSrc = getUserPortraitUrl(b, "5");
        var remindItem = $.fn.jRemindMsgItem(b, c, portraitSrc);
        __remindMsgItemMap.put(d.FromUserId, remindItem);
        __remindMsgDiv.addItem(remindItem);
        setRemindCountTotal();
    }
    if (!cw.isActived) {
        cw.active();
        var chatFooter = __chatFooterItemMap.get(d.FromUserId);
        chatFooter.removeClass().addClass("call");
        if (chatFooter.isInMoreMsgList()) {
            $("#msg_more").removeClass().addClass("msg_more hover_msg");
        }
    } else {
        if (!cw.isOnFocus()) {
            var chatFooter = __chatFooterItemMap.get(d.FromUserId);
            chatFooter.removeClass().addClass("call");
            if (chatFooter.isInMoreMsgList()) {
                $("#msg_more").removeClass().addClass("msg_more hover_msg");
            }
        }
    }
    if (fType == 2 || fType == 3) {
        d.FileName = __fileInfoMap.get(d.FileId);
    }
    cw.recFriendFile(fType, d.FileName, d.FileId, d.FromUri, d.FileUrl);
    if (cw.inputPermission == 420 && !cw.enablechatInput) {
        cw.enableInput(true);
    }
    if (!__isOnfocus) {
        if (typeof __titleflashInterval != "undefined") {
            window.clearInterval(__titleflashInterval);
        }
        __flashTitleArray.push(__msgcomingTitle);
        __flashTitleArray.push("【" + __msgcomingTitle + "】");
        var titleLen = __flashTitleArray.length;
        var index = titleLen - 1;
        __titleflashInterval = window.setInterval(function() {
            var title = __flashTitleArray[index];
            document.title = title;
            index = (index + 1) % titleLen;
        },
        1000);
    }
}
function sendMsgFailed(d) {
    var cw = getChatWindow(d.fromUid);
    if (cw) {
        cw.logErrorInfo("消息发送失败: " + d.msg);
    }
}
function receiveInvite(d) {
    var desc = "你好，我是" + d.desc + "，";
    switch (d.phrid) {
    case 0:
        desc += "正在用中国移动飞信业务，想加你为好友。";
        break;
    case 1:
        desc += "想加你为飞信好友，方便咱们联系。";
        break;
    case 2:
        desc += "飞信挺好用的，想加你为好友。";
        break;
    case 3:
        desc += "希望你成为我的飞信好友，常联系。";
        break;
    case 4:
        desc += "成为我的飞信好友，能免费给你发短信。";
        break;
    default:
        break;
    }
    var friendInvite = $("#invited_" + d.uid);
    if (friendInvite.size() > 0) {
        friendInvite.remove();
        friendInvite = null;
    }
    friendInvite = $.fn.friendInviteWindow({
        buddy: d,
        inviteType: d.t,
        onConfirm: processorFriendInvite
    });
    var buddyListLength = __buddyList.length;
    if (buddyListLength > 0) {
        __buddyList.sort(buddyListComparator);
        for (var i = 0; i < buddyListLength; i++) {
            if (parseInt(__buddyList[i].id) > 0) {
                friendInvite.insertBuddyList(__buddyList[i].id, __buddyList[i].n);
            }
        }
    }
    friendInvite.insertDesc(desc);
}
function setRemindCountTotal() {
    var count = 0;
    var remindMsgs = __remindMsgItemMap.values();
    for (var i = remindMsgs.length - 1; i >= 0; i--) {
        if (remindMsgs[i].find("i").attr("class") == "ff-pc-group") {
            count += 1;
        } else {
            count += remindMsgs[i].msgCount();
        }
    }
    setRemindMsgCookie(__user.sid, null, count, __sessionId);
    if (count > 0) {
        $("#msg_remind").removeClass("none");
    } else {
        $("#msg_remind").addClass("none");
    }
    $("#msg_remind").find("b:first").text(count.toString());
}
function onSendMsg(chatWin, buddyId, msg, isPowerSms, isRouteSms) {
    var msgLength = msg.length;
    var isSms = (isPowerSms || isRouteSms);
    if (isSms && msgLength > 180) {
        alert("温馨提示：长短信不能超过180个字符。");
    } else {
        if (msgLength > 400) {
            alert("温馨提示：消息不能超过400个字符。");
        } else {
            chatWin.logSelfMsg(msg);
            sendMessage(chatWin, buddyId, msg, isPowerSms, isRouteSms);
        }
    }
}
function processorFriendInvite(e) {
    handleAddBuddy(e, 0);
}
function redirectLogin() {
    __isNormalLogout = true;
    window.location.href = loginPageUrl;
}
function startSound(msgType) {
    if (__isOpenSound) {
        if (msgType == "newmessage") {
            IMSound.playSound(msgType);
        } else {
            if (msgType == "sys") {
                IMSound.playSound(msgType);
            }
        }
    }
}
function showPanel(pType) {
    $("#group_func").find("li").removeClass("on");
    $("#friends_list").addClass("none");
    $("#group_box").addClass("none");
    $("#phone_list").addClass("none");
    if (pType == "group") {
        $("#li_group").addClass("on");
        $("#group_box").removeClass("none");
    } else {
        if (pType == "buddy") {
            $("#li_buddy").addClass("on");
            $("#friends_list").removeClass("none");
        } else {
            if (pType == "gountxun") {
                $("#li_gountxun").addClass("on");
                $("#phone_list").removeClass("none");
            }
        }
    }
}
function addBuddySuccess(buddy) {
    var contact;
    if (__contactMap.containsKey(buddy.uid)) {
        contact = __contactMap.get(buddy.uid);
        if (contact.isBk == 1 && contact.ct == -1) {} else {
            if (1 != contact.rs || 2 == contact.ct) {
                __contactMap.remove(contact.uid.toString());
                eachBuddyList(contact,
                function(id) {
                    __contactTree.deleteBuddyItem(parseInt(id), contact.uid);
                },
                true);
                if (2 == contact.ct) {
                    contact.ct = 0;
                }
            } else {
                alert("对方已经是你好友。");
                return;
            }
        }
    } else {
        contact = new ContactDefault();
        contact.ln = buddy.ln;
        contact.ct = 0;
    }
    $.extend(contact, buddy);
    extendContact(contact);
    __contactMap.put(contact.uid, contact);
    eachBuddyList(contact,
    function(id) {
        __contactTree.insertBuddyItem(contact, parseInt(id));
    });
}
function initNavigation() {
    $("#quitIm").attr("href", __officialSiteUrl + "/account/loginout?ul=" + loginPageUrl);
    $("#officalsite").attr("href", __officialSiteUrl);
    $("#myspace").attr("href", __mySpaceUrl);
    $("#downloadpc").attr("href", __downloadUrl);
    $("#myspace_icon").attr("href", __mySpaceUrl);
    $("#feedback").attr("href", __feedbackUrl);
    $("#downloadpc").bind("click",
    function() {
        $.increaseCounters(500400004);
    });
    $("#rt_img_link").click(function() {
        addFavourite(location.href, "官方网页版飞信——在网页上与飞信好友聊天、免费发短信");
    });
    $("#quitIm").bind("click",
    function() {
        __isNormalLogout = true;
        logout(__isNormalLogout);
    });
}
function buddyListContains(value) {
    for (var i = 0; i < __buddyList.length; i++) {
        if (__buddyList[i].id.toString() == value) {
            return true;
        }
    }
    return false;
}
function dealWithCallme(callme) {
    var flashTitle = "";
    if (callme.toUid && callme.toUri) {
        if (callme.toUid == __user.uid) {
            return;
        }
        flashTitle = __callmeTitle;
        if (!__contactMap.containsKey(callme.toUid)) {
            addChatFriend(callme.toUri,
            function(data, textStatus) {
                var result = data;
                if (typeof result.rc == "number" && result.rc == 200) {
                    var contact = new ContactDefault();
                    if (!buddyListContains("-1")) {
                        __buddyList.push({
                            "id": -1,
                            "n": "陌生人"
                        });
                        __contactTree.insertBuddyList({
                            "id": -1,
                            "n": "陌生人"
                        });
                    }
                    contact.uid = callme.toUid;
                    contact.uri = callme.toUri;
                    contact.bl = "-1";
                    contact.ct = 2;
                    extendContact(contact);
                    __contactMap.put(contact.uid.toString(), contact);
                    __contactTree.insertBuddyItem(contact, contact.bl);
                    dealWithCallme(callme);
                }
            });
            return;
        }
        var cw = getChatWindow(callme.toUid);
        if (!cw.isActived) {
            cw.active();
            var p = getChatWinPosition();
            cw.show(p.top, p.left);
        } else {
            if (!cw.hasShown) {
                var p = getChatWinPosition();
                cw.show(p.top, p.left);
            } else {
                cw.show();
            }
        }
    } else {
        flashTitle = __readmsgTitle;
    }
    if (!__isOnfocus) {
        if (typeof __titleflashInterval != "undefined") {
            window.clearInterval(__titleflashInterval);
        }
        __flashTitleArray.push(flashTitle);
        __flashTitleArray.push("【" + flashTitle + "】");
        var titleLen = __flashTitleArray.length;
        var index = titleLen - 1;
        __titleflashInterval = window.setInterval(function() {
            var title = __flashTitleArray[index];
            document.title = title;
            index = (index + 1) % titleLen;
        },
        1000);
    }
}
function updateGroupInfo(c, updateUI, isGroupInfo) {
    if (c == null) {
        return;
    }
    var id = jGroupUriToId(c.gUri);
    var groupItem = __groupMap.get(id);
    if (!groupItem) {
        return;
    }
    if (groupItem.members && c.members && c.members.length < groupItem.members.length) {
        if (c.members.length == 1) {
            var memId = jMemUriToId(c.members[0].MemberUri);
            if (memId == __user.sid) {
                return;
            }
        }
    }
    $.extend(groupItem, c);
    extendGroupItem(groupItem);
    if (isGroupInfo && (groupItem.i > 3 || groupItem.msgRecv > 1)) {
        __groupTree.updateGroupItem(groupItem);
        return;
    }
    if (updateUI) {
        __groupTree.updateGroupItem(groupItem);
        var cw = __chatWindowMap.get("group_" + groupItem.id);
        if (cw) {
            cw.setGroupInfo(groupItem);
        }
        if (groupItem.n) {
            groupItem.displayName = groupItem.n;
            var portraitSrc = getGroupItemPortraitUrl(groupItem, "1");
            if (__chatFooterItemMap.containsKey("group_" + id)) {
                __chatFooterItemMap.get("group_" + id).updateItem(groupItem, portraitSrc);
            }
            if (__remindMsgItemMap.containsKey("group_" + id)) {
                __remindMsgItemMap.get("group_" + id).updateItem(groupItem, portraitSrc);
            }
        }
    }
}
function deleteGroupMember(memberItem) {
    var groupId = jGroupUriToId(memberItem.GroupUri);
    var memId = jMemUriToId(memberItem.MemberUri);
    if (memId == jMemUriToId(__user.uri)) {
        var groupItem = __groupMap.get(groupId);
        $.popWinMsg({
            gName: memberItem.GroupName,
            group: groupItem,
            msgN: "msg1"
        });
        removeGroupUi(groupId, 1);
    } else {
        chatWinDelMem(groupId, memId);
    }
}
function removeGroupUi(groupId, msgType) {
    __groupTree.deleteGroupItem(groupId);
    var cw = __chatWindowMap.get("group_" + groupId);
    if (cw) {
        cw.enableInput(false);
        cw.logSuggetInfo(msgType);
        cw.isUsable = false;
    }
    if (__chatFooterItemMap.containsKey("group_" + groupId)) {
        __chatFooterItemMap.get("group_" + groupId).remove();
        __chatFooterItemMap.remove("group_" + groupId);
        reInitialFooter();
    }
}
function openGroupChatWindow(sender, groupId) {
    var currGroup = __groupMap.get(groupId);
    if (currGroup.i > 3) {
        return;
    }
    var cw = getGroupChatWindow(groupId);
    if (!cw.isActived) {
        cw.active();
        var p = getChatWinPosition();
        cw.show(p.top, p.left);
    } else {
        if (!cw.hasShown) {
            var p = getChatWinPosition();
            cw.show(p.top, p.left);
        } else {
            cw.show();
        }
    }
    if (typeof __isIE6 != "undefined" && __isIE6) {
        cw.fixPosition();
    }
    if (currGroup.msgRecv == 2) {
        __groupTree.clearGroupMsgCount(currGroup);
    }
}
function getGroupChatWindow(groupId) {
    var cw;
    var groupItem = __groupMap.get(groupId);
    if (!__chatWindowMap.containsKey("group_" + groupId)) {
        cw = createGroupWin(groupItem, groupId);
    } else {
        cw = __chatWindowMap.get("group_" + groupId);
        if (!cw.isUsable) {
            __chatWindowMap.remove("group_" + groupId);
            cw.remove();
            cw = null;
            cw = createGroupWin(groupItem, groupId);
        }
    }
    return cw;
}
function createGroupWin(groupItem, groupId) {
    var cw;
    cw = $.fn.jGroupChatWindow({
        maxRelative: "main_content",
        user: __user,
        group: groupItem,
        groupMap: __groupMap,
        defaultHeight: __groupChatWinDefaultHeight,
        defaultWidth: __groupChatWinDefaultWidth,
        onActive: onActiveGroupChatWindow,
        onClosed: onCloseGroupChatWindow,
        onFocus: onFocusGroupChatWindow,
        onSendMessage: onSendGroupMsg
    });
    getGroupMemList(groupItem, cw.memMap, cw);
    __chatWindowMap.put("group_" + groupId, cw);
    return cw;
}
function getGroupMemList(groupItem, memMap, cw) {
    var getGroupMemListParams = new Object();
    getGroupMemListParams.success = function(data, textState) {
        getGroupMemListSuccess(data, textState, groupItem, memMap, cw);
    };
    getGroupMemListParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        getGroupMemListError(XMLHttpRequest, textStatus, errorThrown, groupItem, memMap, cw);
    };
    getGroupMemListParams.url = formatString(getGroupMemUrl, __version++);
    getGroupMemListParams.type = "POST";
    getGroupMemListParams.data = {
        "ssid": __sessionId,
        "Uri": groupItem.gUri
    };
    getGroupMemListParams.dataType = "json";
    getGroupMemListParams.cache = false;
    $.ajax(getGroupMemListParams);
}
var __gmlRetry = 0;
function getGroupMemListSuccess(data, textStatus, groupItem, memMap, cw) {
    var __groupMemTree;
    __groupMemTree = $.fn.jGroupMemTree({
        isSinglePattern: true,
        user: __user,
        group: groupItem,
        onBuddyItemDbClick: openChatWindow,
        onBuddyItemMouseOver: showContactCard,
        onBuddyItemMouseOut: hideContactCard,
        onBuddyItemRightClick: showOperateCard
    });
    cw.groupMemTree = __groupMemTree;
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        __gmlRetry = 0;
        var contactList = result.rv.GroupMembersInfo;
        contactList = contactList || (new Array());
        var listLength = contactList.length;
        var groupId = jGroupUriToId(result.rv.gUri);
        for (var i = 0; i < listLength; i++) {
            var memId = jMemUriToId(contactList[i].MemberUri);
            var memItem = __group_mem.get(groupId + "_" + memId);
            if (memItem == null) {
                memItem = new GroupMemDefault();
            }
            $.extend(memItem, contactList[i]);
            extendMemItem(memItem);
            memMap.put(memItem.id, memItem);
        }
        cw.memMap = memMap;
        var rightStr = insertGroupMemToList(memMap, __groupMemTree, groupItem);
        if (cw.isLogShowNumber) {
            var frientItem = cw.find("dt:first> span").eq(0);
            var friendId = frientItem.text();
            var friendName = memMap.get(friendId).displayName;
            frientItem.text(friendName);
        }
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (typeof result.rc == "number" && result.rc == 403) {} else {
                if (__gmlRetry < 3) {
                    __gmlRetry++;
                    window.setTimeout(function() {
                        getGroupMemList(groupItem, memMap, cw);
                    },
                    500);
                } else {
                    __gmlRetry = 0;
                    alert(formatString("由于网络原因,获取群成员列表失败，请重新登录。错误代码：{0}", typeof result.rc == "number" ? result.rc: 500));
                }
            }
        }
    }
}
function getGroupMemListError(XMLHttpRequest, textStatus, errorThrown, groupItem, memMap, cw) {
    if (__gmlRetry < 3) {
        __gclRetry++;
        window.setTimeout(function() {
            getGroupMemList(groupItem, memMap, cw);
        },
        500);
    } else {
        __gmlRetry = 0;
        alert(formatString("由于网络原因,获取群成员列表失败，请重新登录。错误原因：{0}", textStatus));
    }
}
function getGroupMemPortrait(__groupMemTree, memMap) {
    var gList = __groupMemTree.find(".pop_group_list");
    var viewH = parseInt(gList.css("height")),
    firstLiTop = gList.find("li:first").offset().top,
    maxTop = firstLiTop + viewH,
    portraitFlag = false;
    if (gList.find("li[on=1]").size() <= 0) {
        var lis = gList.find("li");
        var buddy;
        lis.each(function(i, item) {
            $(item).attr("on", "1");
            var id = $(item).attr("id").substring(10);
            if (memMap.containsKey(id)) {
                buddy = memMap.get(id);
                var portraitSrc = buddyPor(buddy, buddy.statusClass, 1);
                $(item).find("img").attr("src", portraitSrc);
            }
            if (i >= 19) {
                return false;
            }
        });
    }
    gList.bind("scroll",
    function() {
        var lis = $(this).find("li[on!=1]");
        if (lis.size() > 0 && lis.first().offset().top <= maxTop) {
            var buddy;
            lis.each(function(i, item) {
                $(item).attr("on", "1");
                var id = $(item).attr("id").substring(10);
                if (memMap.containsKey(id)) {
                    buddy = memMap.get(id);
                    var portraitSrc = buddyPor(buddy, buddy.statusClass, 1);
                    $(item).find("img").attr("src", portraitSrc);
                }
                if (i >= 19) {
                    if (!$(item).next().attr("id") || $(item).next().offset().top > maxTop) {
                        return false;
                    }
                }
            });
        }
    });
}
function insertGroupMemToList(memMap, __groupMemTree, groupItem) {
    var groupMemList = memMap.values();
    var lists = new Object();
    lists[0] = __groupMemTree.createBuddyList(groupItem);
    var itemLength = groupMemList.length;
    var list = lists[0];
    for (var i = 0; i < itemLength; i++) {
        var item = __groupMemTree.createBuddyItem(groupMemList[i], i);
        list.pushContent(item);
    }
    var str = "";
    var l = lists[0];
    str += l.toHtmlString();
    __groupMemTree.setInnerHtml(str);
    getGroupMemPortrait(__groupMemTree, memMap);
    if (typeof callback == "function") {
        callback();
    }
    str = null;
}
function onSendGroupMsg(chatWin, uri, msg) {
    var msgLength = msg.length;
    if (msgLength > 400) {
        alert("温馨提示：消息不能超过400个字符。");
    } else {
        chatWin.logSelfMsg(msg);
        sendGroupMessage(chatWin, uri, msg);
    }
}
function sendGroupMessage(chatWin, uri, msg) {
    var sendGroupMsgParams = new Object();
    sendGroupMsgParams.url = formatString(SendGroupMsgUrl, __version++);
    sendGroupMsgParams.type = "POST";
    sendGroupMsgParams.dataType = "json";
    sendGroupMsgParams.cache = false;
    sendGroupMsgParams.data = {
        "Uri": uri,
        "msg": msg,
        "ssid": __sessionId
    };
    sendGroupMsgParams.success = function(data, textStatus) {
        var result = data;
        if (typeof result.rc == "number" && result.rc >= 200 && result.rc < 300) {} else {
            if (typeof result.rc == "number" && result.rc == 420) {
                chatWin.logErrorInfo("对方版本过旧，您无法向其发起陌生人消息。");
                chatWin.inputPermission = 420;
                chatWin.enableInput(false);
            } else {
                if (typeof result.rc == "number" && result.rc == 486) {
                    chatWin.logErrorInfo("您暂时无法发送短信，请稍后再试。");
                } else {
                    if (typeof result.rc == "number" && result.rc == 494) {
                        chatWin.logErrorInfo("您的飞信账号处于系统保护状态，限制了该功能的使用。请手机发送短信U到12520解除限制后重新登录。");
                    } else {
                        if (typeof result.rc == "number" && result.rc == 405) {} else {
                            chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
                        }
                    }
                }
            }
        }
    };
    sendGroupMsgParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        chatWin.logErrorInfo("消息发送失败: " + cnSubstr(msg, 18));
    };
    $.ajax(sendGroupMsgParams);
}
function receiveGroupMsgs(d) {
    d.id = jGroupUriToId(d.FromGroupUri);
    var curGroup = __groupMap.get(d.id);
    if (curGroup == null) {
        return;
    }
    var cw = getGroupChatWindow(d.id);
    if (curGroup.msgRecv == "2") {
        var __isChatFooterItem = __chatFooterItemMap.containsKey("group_" + d.id);
        if (__isChatFooterItem && !cw.isOnFocus()) {
            var chatFooter = __chatFooterItemMap.get("group_" + d.id);
            chatFooter.removeClass().addClass("call");
            if (chatFooter.isInMoreMsgList()) {
                $("#msg_more").removeClass().addClass("msg_more hover_msg");
            }
        } else {
            if (!__isChatFooterItem) {
                __groupTree.updateGroupMsgCount(curGroup);
            }
        }
    } else {
        if (!cw.isOnFocus() || !__isOnfocus) {
            if (__remindMsgItemMap.containsKey("group_" + d.id)) {
                var remindItem = __remindMsgItemMap.get("group_" + d.id);
                var msgCountStr;
                var msgCountNum = remindItem.msgCount();
                if (msgCountNum + 1 > 99) {
                    msgCountStr = ">99";
                } else {
                    msgCountStr = msgCountNum + 1;
                }
                remindItem.msgCount(msgCountStr);
                var b = __groupMap.get(d.id);
                b.uid = b.id;
                b.statusClass = "ff-pc-group";
                b.displayName = b.n;
                var portraitSrc = getGroupItemPortraitUrl(b, "1");
                remindItem.updateItem(b, portraitSrc);
            } else {
                var b = __groupMap.get(d.id);
                b.uid = b.id;
                b.statusClass = "ff-pc-group";
                b.displayName = b.n;
                var c = __chatWindowMap.get("group_" + d.id);
                var portraitSrc = getGroupItemPortraitUrl(b, "1");
                var remindItem = $.fn.jRemindMsgItem(b, c, portraitSrc);
                var fromGroupId = jGroupUriToId(d.FromGroupUri);
                __remindMsgItemMap.put("group_" + fromGroupId, remindItem);
                __remindMsgDiv.addItem(remindItem);
                setRemindCountTotal();
            }
        }
        if (!__chatFooterItemMap.containsKey("group_" + d.id)) {
            startSound("newmessage");
        }
        if (!cw.isActived) {
            cw.active();
            var chatFooter = __chatFooterItemMap.get("group_" + d.id);
            chatFooter.removeClass().addClass("call");
            if (chatFooter.isInMoreMsgList()) {
                $("#msg_more").removeClass().addClass("msg_more hover_msg");
            }
        } else {
            if (!cw.isOnFocus()) {
                var chatFooter = __chatFooterItemMap.get("group_" + d.id);
                chatFooter.removeClass().addClass("call");
                if (chatFooter.isInMoreMsgList()) {
                    $("#msg_more").removeClass().addClass("msg_more hover_msg");
                }
            }
        }
    }
    if (d.StatusCode == 433) {
        cw.logErrorInfo("消息”" + cnSubstr(d.Message, 18) + "“发送失败:您说话太快了，请休息一下吧。");
    } else {
        cw.logFriendMsg(d);
    }
    if (cw.inputPermission == 420 && !cw.enablechatInput) {
        cw.enableInput(true);
    }
    if (!__isOnfocus && curGroup.msgRecv != "2") {
        if (typeof __titleflashInterval != "undefined") {
            window.clearInterval(__titleflashInterval);
        }
        __flashTitleArray.push(__msgcomingTitle);
        __flashTitleArray.push("【" + __msgcomingTitle + "】");
        var titleLen = __flashTitleArray.length;
        var index = titleLen - 1;
        __titleflashInterval = window.setInterval(function() {
            var title = __flashTitleArray[index];
            document.title = title;
            index = (index + 1) % titleLen;
        },
        1000);
    }
}
function groupMemPriChange(changeList) {
    for (var kk = 0; kk < changeList.length; kk++) {
        var groupId = jGroupUriToId(changeList[kk].GroupUri);
        var groupUri = changeList[kk].GroupUri;
        var groupItem = __groupMap.get(groupId);
        var memItem;
        var memList = changeList[kk].PermissionChangedMemberEntity;
        for (var ii = 0; ii < memList.length; ii++) {
            var priId = memList[ii].Identity;
            var memId = jMemUriToId(memList[ii].MemberUri);
            var memItem = new Object();
            memItem.i = memList[ii].Identity;
            memItem.MemberUri = memList[ii].MemberUri;
            if (jMemUriToId(memList[ii].MemberUri) == __user.sid) {
                if (priId == 1) {
                    $.popWinMsg({
                        gName: groupItem.n,
                        group: groupItem,
                        msgN: "msg3"
                    });
                } else {
                    if (priId == 2) {
                        $.popWinMsg({
                            gName: groupItem.n,
                            group: groupItem,
                            msgN: "msg2"
                        });
                    } else {
                        if (priId == 3) {
                            $.popWinMsg({
                                gName: groupItem.n,
                                group: groupItem,
                                msgN: "msg7"
                            });
                        }
                    }
                }
                var currGroup = __groupMap.get(groupId);
                currGroup.i = memItem.i;
                extendGroupItem(currGroup);
                __groupTree.updateGroupItem(currGroup);
            }
            initGroupMemList(groupUri, memItem);
        }
    }
}
function exitGroup(groupUri, memItem) {
    var groupId = jGroupUriToId(groupUri);
    var memId = jMemUriToId(memItem.MemberUri);
    var memKey = groupId + "_" + memId;
    __group_mem.remove(memKey);
    var memId = jMemUriToId(memItem.MemberUri);
    chatWinDelMem(groupId, memId);
}
function apvResult(apvItem) {
    var groupId = jGroupUriToId(apvItem.gUri);
    var groupItem = __groupMap.get(groupId);
    if (groupItem) {
        groupItem.apvRs = apvItem.r;
        extendGroupItem(groupItem);
        __groupTree.updateGroupItem(groupItem);
    }
    if (apvItem.r == 1) {
        __groupTree.updateGroupItem(groupItem);
    } else {
        if (apvItem.r == 2) {}
    }
    var memKey = groupId + "_" + memId;
    __group_mem.remove(memKey);
    var memId = jMemUriToId(memItem.MemberUri);
    chatWinDelMem(groupId, memId);
}
function chatWinDelMem(groupId, memId) {
    var cw = __chatWindowMap.get("group_" + groupId);
    if (cw) {
        var __groupMemTree = cw.groupMemTree;
        memItem = cw.memMap.get(memId);
        __groupMemTree.deleteBuddyItem(groupId, memItem);
    }
}
function initGroupMemList(groupUri, memItem) {
    var groupId = jGroupUriToId(groupUri);
    var memId = jMemUriToId(memItem.MemberUri);
    var memKey = groupId + "_" + memId;
    var mItem = __group_mem.get(memKey);
    if (mItem == null) {
        mItem = new GroupMemDefault();
        $.extend(mItem, memItem);
        extendMemItem(mItem);
        __group_mem.put(memKey, mItem);
    } else {
        $.extend(mItem, memItem);
        extendMemItem(mItem);
    }
    var cw = __chatWindowMap.get("group_" + groupId);
    if (cw) {
        var __groupMemTree = cw.groupMemTree;
        var cwMemItem = cw.memMap.get(memItem.id);
        if (cwMemItem) {
            $.extend(mItem, cwMemItem);
            cwMemItem = mItem;
        } else {
            cw.memMap.put(mItem.id, mItem);
        }
        var buddyItem = __groupMemTree.getBuddyItem(groupId, mItem.id);
        if (buddyItem.size() > 0) {
            __groupMemTree.updateBuddyItem(groupId, mItem);
        } else {
            __groupMemTree.insertBuddyItem(mItem, groupId);
        }
    }
}
function handleInviteGroup(inviteItem) {
    var inviteParams = new Object();
    inviteParams.success = function(data, textStatus) {
        handleInviteGroupSuccess(data, textStatus, inviteItem);
    };
    inviteParams.error = function(XMLHttpRequest, textStatus) {
        handleInviteGroupError(XMLHttpRequest, textStatus, inviteItem);
    };
    inviteParams.url = formatString(opInviteJoinUrl, __version++);
    inviteParams.type = "POST";
    inviteParams.data = {
        "ssid": __sessionId,
        "inteeNn": __user.nn,
        "gUri": inviteItem.gUri,
        "iUri": inviteItem.iUri,
        "interNn": inviteItem.iNn
    };
    inviteParams.dataType = "json";
    inviteParams.cache = false;
    $.ajax(inviteParams);
}
function handleInviteGroupSuccess(data, textStatus, inviteItem) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        startGroupSubscribe(inviteItem.gUri,
        function() {
            var group = new GroupDefault();
            group.id = jGroupUriToId(inviteItem.gUri);
            group.n = inviteItem.gN;
            group.gUri = inviteItem.gUri;
            group.crc = "1234";
            group.i = 3;
            extendGroupItem(group);
            if (__groupMap.containsKey(group.id)) {
                __groupMap.remove(group.id);
                __groupTree.deleteGroupItem(group.id);
            }
            __groupMap.put(group.id, group);
            __groupTree.insertGroupItem(group);
            $.popWinMsg({
                gName: group.n,
                group: group,
                msgN: "msg8",
                openWin: openGroupChatWindow
            });
            var cw = __chatWindowMap.get("group_" + group.id);
            if (cw && cw.isShow) {
                openGroupChatWindow(this, group.id);
            }
        });
    } else {
        if (typeof result.rc == "number" && result.rc == 437) {
            if (__user.isVip) {
                $.popWinMsg({
                    msgN: "msg11"
                });
            } else {
                $.popWinMsg({
                    msgN: "msg12",
                    isClose: false
                });
            }
        }
    }
}
var __higRetry = 0;
function handleInviteGroupError(XMLHttpRequest, textStatus, inviteItem) {
    if (__higRetry < 3) {
        __higRetry++;
        window.setTimeout(function() {
            handleInviteGroup(inviteItem);
        },
        500);
    } else {
        __higRetry = 0;
        alert("处理加入群失败，请重新登录");
    }
}
function approveInviteGroup(inviteItem, appAd) {
    var approveParams = new Object();
    var joinItemStr = "";
    for (var i = 0; i < inviteItem.JoinItem.length; i++) {
        joinItemStr += inviteItem.JoinItem[i].Uri + "-" + inviteItem.JoinItem[i].nn + "|";
    }
    approveParams.success = function(data, textStatus) {
        approveInviteGroupSuccess(data, textStatus, inviteItem);
    };
    approveParams.error = handleInviteGroupError;
    approveParams.url = formatString(approveInviteUrl, __version++);
    approveParams.type = "POST";
    approveParams.data = {
        "ssid": __sessionId,
        "appAd": appAd,
        "gUri": inviteItem.gUri,
        "iNn": inviteItem.iNn,
        "iR": inviteItem.iR,
        "iUri": inviteItem.iUri,
        "joinItem": joinItemStr
    };
    approveParams.dataType = "json";
    approveParams.cache = false;
    $.ajax(approveParams);
}
function approveInviteGroupSuccess(data, textStatus, inviteItem) {}
function approveInviteGroupError(XMLHttpRequest, textStatus, errorThrown) {}
function handleApplication(inviteItem, appAd) {
    var params = {};
    params.success = function(data, textStatus) {
        handleApplicationSuccess(data, textStatus, inviteItem);
    };
    params.error = handleApplicationError;
    params.url = formatString(PGHandleApplicationUrl, __version++);
    params.type = "POST";
    params.data = {
        "ssid": __sessionId,
        "appAd": appAd,
        "gUri": inviteItem.GroupUri,
        "note": "",
        "userUri": inviteItem.ApplyGroupUserEntity[0].Uri
    };
    params.dataType = "json";
    params.cache = false;
    $.ajax(params);
}
function handleApplicationSuccess(data, textStatus, inviteItem) {
    if (typeof data.rc == "number" && data.rc == 432) {
        $.popWinMsg({
            msgN: "msg14",
            isClose: false
        });
    }
}
function handleApplicationError(XMLHttpRequest, textStatus, errorThrown) {}
function getGroupPerInfo(gUri) {
    var getGroupPerInfoParams = new Object();
    getGroupPerInfoParams.success = getGroupPerInfoSuccess;
    getGroupPerInfoParams.error = getGroupPerInfoError;
    getGroupPerInfoParams.url = formatString(getGroupPerInfoUrl, __version++);
    getGroupPerInfoParams.type = "POST";
    getGroupPerInfoParams.data = {
        "ssid": __sessionId,
        "gUri": gUri
    };
    getGroupPerInfoParams.dataType = "json";
    getGroupPerInfoParams.cache = false;
    $.ajax(getGroupPerInfoParams);
}
var __gpiRetry = 0;
function getGroupPerInfoSuccess(data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        var groupPerInfoList = result.rv;
        for (var i = 0; i < groupPerInfoList.length; i++) {
            var groupPerItem = groupPerInfoList[i];
            updateGroupInfo(groupPerItem.rv, false, true);
        }
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (__gpiRetry < 3) {
                __gpiRetry++;
            } else {
                __gpiRetry = 0;
                alert(formatString("获取群组个人信息失败，请重新登录。错误代码：{0}", typeof result.rc == "number" ? result.rc: 500));
                redirectLogin();
            }
        }
    }
}
function getGroupPerInfoError(XMLHttpRequest, textStatus, errorThrown) {
    if (__gpiRetry < 3) {
        __gpiRetry++;
    } else {
        __gpiRetry = 0;
        alert(formatString("获取用户群组个人信息失败，请重新登录。错误原因：{0}", textStatus));
        redirectLogin();
    }
}
function startGroupSubscribe(GroupUris, callback) {
    var GroupSubParams = new Object();
    GroupSubParams.success = function(data, textStatus) {
        startGroupSubscribeSuccess(callback, GroupUris, data, textStatus);
    };
    GroupSubParams.error = function(XMLHttpRequest, textStatus, errorThrown) {
        startGroupSubscribeError(XMLHttpRequest, textStatus, errorThrown, GroupUris);
    };
    GroupSubParams.url = formatString(GroupSubscribeUrl, __version++);
    GroupSubParams.type = "POST";
    GroupSubParams.data = {
        "ssid": __sessionId,
        "GroupUris": GroupUris,
        "Type": 1
    };
    GroupSubParams.dataType = "json";
    GroupSubParams.cache = false;
    $.ajax(GroupSubParams);
}
var __sgssRetry = 0;
function startGroupSubscribeSuccess(callback, GroupUris, data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        if (typeof callback == "function") {
            callback();
        }
    } else {
        if (typeof result.rc == "number" && result.rc == 310) {
            redirectLogin();
        } else {
            if (__sgssRetry < 3) {
                __sgssRetry++;
                window.setTimeout(function() {
                    startGroupSubscribe(GroupUris);
                },
                500);
            } else {
                __sgssRetry = 0;
                alert(formatString("由于网络原因,订阅群组失败，请重新登录。错误代码：{0}", typeof result.rc == "number" ? result.rc: 500));
                redirectLogin();
            }
        }
    }
}
function startGroupSubscribeError(XMLHttpRequest, textStatus, errorThrown, GroupUris) {
    if (__sgssRetry < 3) {
        __sgssRetry++;
        window.setTimeout(function() {
            startGroupSubscribe(GroupUris);
        },
        500);
    } else {
        __sgssRetry = 0;
        alert(formatString("订阅群组失败，请重新登录。错误原因：{0}", textStatus));
        redirectLogin();
    }
}
function getCred() {
    var getCredParams = new Object();
    getCredParams.success = getCredSuccess;
    getCredParams.error = getCredError;
    getCredParams.url = formatString(getCredUrl, __version++);
    getCredParams.type = "POST";
    getCredParams.data = {
        "ssid": __sessionId
    };
    getCredParams.dataType = "json";
    getCredParams.cache = false;
    $.ajax(getCredParams);
}
var __gcRetry = 0,
__gcRetry1 = 0;
function getCredSuccess(data, textStatus) {
    var result = data;
    if ( !! result && typeof result.rc == "number" && result.rc == 200) {
        __user.c = result.rv.c;
        __user.c = encodeURIComponent(__user.c);
        if (__user.c) {
            var mySpaceUrl = formatString(__mySpaceUrl, __user.c);
            $("#myspace_icon").attr("href", mySpaceUrl);
            $("#myspace").attr("href", mySpaceUrl);
        }
        __gcRetry1 = 0;
    } else {
        if (__gcRetry1 < 3) {
            __gcRetry1++;
            getCred();
        }
    }
    __gcRetry = 0;
}
function getCredError(XMLHttpRequest, textStatus, errorThrown) {
    if (__gcRetry < 3) {
        __gcRetry++;
        getCred();
    }
}
var code_LoadingPanel = null;
var codeImgFlag = true;
function createCcpUI(type, msg, callback, t) {
    divMask.removeClass("none");
    if ($("#codeDiv").length > 0 && $("#codeDiv").attr("type").trim() == type.toString()) {
        $("#codeDiv").removeClass("none");
        $("#txtCode").focus();
        resetCcp(t);
        return;
    } else {
        $("#codeDiv").remove();
    }
    var codeDiv = $('<div id="codeDiv" type="' + type + '" class="hint" style="top: 10px;z-index: 10002;">');
    var h = $("<h3><span></span><i></i><b>输入验证码</b></h3>");
    var btn = $('<div class="hint_btn_new1"><a href="javascript:;" class="mr5">确 定</a></div>');
    var content = $('<div class="hint_cont_new1 pb8"></div>');
    var modify_new2 = $('<div class="modify_new2"><label for="textfield">' + msg + "</label><br /></div>");
    if (type == 0) {
        modify_new2.append($('<div class="input_text_c"><input type="text" name="txtCode" id="txtCode" class="frame_246-24 w125" maxlength="4" />' + '<img id="ccpimg"title="如果您无法识别验证码，点击图片更换" src="images/login20120903/ccploading.png" /><a id="change_link"' + 'href="#">看不清，换一张</a><p id="error" class="none">输入的验证码有误，请重新输入</p></div>'));
    } else {
        if (type == 1) {
            modify_new2.append($('<div class="input_text_c"><input type="text" name="txtCode" id="txtCode" class="frame_246-24 w125" maxlength="6" />' + '<p id="error" class="none">输入的验证码有误，请重新输入</p></div>'));
        }
    }
    content.append(modify_new2).append(btn);
    codeDiv.append(h).append(content);
    codeDiv.appendTo(document.body);
    code_LoadingPanel = $.fn.loadingPanel({
        target: "codeDiv"
    });
    var c = getViewportCenter();
    var p = {
        "top": c.y - codeDiv.height() / 2,
        "left": c.x - codeDiv.width() / 2
    };
    if (p.top < 50) {
        p.top = 50;
    }
    if (p.left < 50) {
        p.left = 50;
    }
    codeDiv.css({
        "top": p.top + "px",
        "left": p.left + "px"
    });
    btn.find("a").bind("click",
    function(e) {
        if (type == 0) {
            if (!t) {
                validateCode();
            } else {
                callback($("#txtCode").val().trim());
            }
        } else {
            if (type == 1) {
                callback($("#txtCode").val().trim());
            }
        }
        $("#codeDiv").addClass("none");
        divMask.addClass("none");
        $("#txtCode").val("");
        return false;
    });
    h.find("span").bind("click",
    function(e) {
        $("#codeDiv").addClass("none");
        divMask.addClass("none");
        return false;
    });
    if (type == 0) {
        $("#change_link").bind("click",
        function() {
            resetCcp(t);
            return false;
        });
        resetCcp(t);
        setTimeout(function() {
            resetCcp(t);
        },
        500);
    }
}
function resetCcp(t) {
    t = t || "";
    $("#ccpimg").attr("src", formatString(getPicCodeUrl, "ccpsession", t, Math.random()));
    return false;
}
function validateCode() {
    code_LoadingPanel.show();
    var params = {};
    params.type = "POST";
    params.dataType = "json";
    params.url = formatString(ValidatePicCodeUrl, __version++);
    params.data = {
        "Ccp": $("#txtCode").val()
    };
    params.cache = false;
    params.success = function(data) {
        code_LoadingPanel.hide();
        if (data.rc == 200) {
            $("#codeDiv").addClass("none");
            divMask.addClass("none");
            codeImgFlag = false;
        } else {
            $("#error").removeClass("none");
            resetCcp();
        }
        $("#txtCode").val("");
    };
    params.error = function() {
        code_LoadingPanel.hide();
        $("#txtCode").val("").focus();
        $("#error").removeClass("none");
        resetCcp();
    };
    $.ajax(params);
}
function sendSmsCode() {
    var params = {};
    params.type = "POST";
    params.dataType = "json";
    params.url = formatString(GetSmsCodeCodeUrl, __version++);
    params.data = {
        "mn": __user.mn
    };
    params.cache = false;
    params.success = function(data) {
        if (data.rc == 0) {} else {}
    };
    params.error = function() {};
    $.ajax(params);
}
var tryGetALInfoTimes = 0;
var getALInfo_LoadingPanel = $("#loadDiv_phone");
function getALInfo() {
    getALInfo_LoadingPanel.show();
    var params = {};
    params.url = formatString(getALInfoUrl, __version++);
    params.type = "POST";
    params.dataType = "json";
    params.data = {
        "ssid": __sessionId
    };
    params.cache = false;
    params.success = getALInfoSuccess;
    params.error = getALInfoError;
    $.ajax(params);
}
function getALInfoSuccess(data) {
    if ( !! data && data.rc == 200) {
        getALInfo_LoadingPanel.hide();
        tryGetALInfoTimes = 0;
        var phoneList = data.rv;
        var ul = $("#phone_list_content"),
        li;
        $(".phone_leisure").addClass("none");
        ul.removeClass("none");
        for (var i = 0, j = phoneList.length; i < j; i++) {
            li = createItem(phoneList[i]);
            ul.append(li);
        }
    } else {
        if (tryGetALInfoTimes < 3) {
            getALInfo();
            tryGetALInfoTimes++;
        }
    }
}
function getALInfoError() {
    getALInfo_LoadingPanel.hide();
    if (tryGetALInfoTimes < 3) {
        getALInfo();
        tryGetALInfoTimes++;
    }
}
function initTXLlist() {
    var ul = $("#phone_list_content");
    ul.bind("mouseover",
    function(e) {
        e = window.event || e;
        var target = e.target || e.srcElement;
        var li = $(target).closest("li");
        li.addClass("hover");
        stopPropagation(e);
        preventDefault(e);
    }).bind("mouseout",
    function(e) {
        e = window.event || e;
        var target = e.target || e.srcElement;
        var li = $(target).closest("li");
        li.removeClass("hover");
        stopPropagation(e);
        preventDefault(e);
    }).bind("click",
    function(e) {
        e = window.event || e;
        var target = e.target || e.srcElement;
        var li = $(target).closest("li");
        var guid = li.attr("guid");
        var uid = li.attr("uid");
        var mn = li.attr("mn");
        if (target.className.toLowerCase() == "friend_control") {
            $.increaseCounter(500400026);
            createPopForTXL(li, guid);
        } else {
            if (target.className.toLowerCase() == "friend_add") {
                $.increaseCounter(500400024);
                AddBuddy({
                    a: "1",
                    u: mn,
                    successCallback2: function(data) {
                        if (typeof data.rc == "number" && (data.rc == 521 || data.rc == 200)) {
                            $.increaseCounter(500400025);
                            $(target).remove();
                        }
                    }
                });
            } else {
                if (target.className.toLowerCase() == "friend_news") {
                    $.increaseCounter(500400023);
                    createFreeSMSTab(guid, uid, mn);
                }
            }
        }
        stopPropagation(e);
        preventDefault(e);
    }).bind("dblclick",
    function(e) {
        e = window.event || e;
        var target = e.target || e.srcElement;
        var h5 = $(target).closest("h5");
        if (h5.length > 0) {
            var li = $(target).closest("li");
            var guid = li.attr("guid");
            var uid = li.attr("uid");
            var mn = li.attr("mn");
            if (!isMobileNoReg.test(mn) || __user.ca.toLowerCase() != "cmcc") {
                createAddTXLTab(guid);
            } else {
                createFreeSMSTab(guid, uid, mn);
            }
        }
        stopPropagation(e);
        preventDefault(e);
    });
}
function createItem(item) {
    var phone = new PhoneDefault();
    $.extend(phone, item);
    __phoneMap.put(phone.GUID.toString(), phone);
    var tel = isMobileNoRegForTXL.test(phone.HMobile) ? phone.HMobile: (isMobileNoRegForTXL.test(phone.OMobile) ? phone.OMobile: ((isMobileNoRegForTXL.test(phone.OPhone) ? phone.OPhone: ((isMobileNoRegForTXL.test(phone.HPhone) ? phone.HPhone: (phone.HMobile || phone.OMobile || phone.OPhone || phone.HPhone))))));
    var nLen = phone.FN.length;
    var strTel = nLen > 8 ? cnSubstr(tel, 11, false) : cnSubstr(tel, 21 - nLen, false);
    var li = $('<li guid="' + phone.GUID + '" uid="" mn="' + tel + '" class="" style="cursor:default;"><div class="friends_info"><h5><strong class="BuddyList_Container"><b>●</b></strong>' + cnSubstr(phone.FN, 8, false) + "<span>" + strTel + "</span></h5></div>" + '<div class="friend_control"></div></li>');
    if (isMobileNoRegForTXL.test(tel)) {
        if (tel.indexOf("+") == 0) {
            tel = tel.substr(3);
            li.find(".friends_info span").text(tel);
            li.attr("mn", tel);
        }
        if (__user.ca.toLowerCase() == "cmcc") {
            phone.tel = {
                "uid": "",
                "mn": tel
            };
            li.append('<div class="friend_news" title="联系对方">');
        }
    }
    phone.arr = [],
    len = 0;
    if (isMobileNoReg.test(tel)) {
        var uid, flag = false;
        function checkTel(mn) {
            if (isMobileNoRegForTXL.test(mn)) {
                if (mn.indexOf("+") == 0) {
                    mn = mn.substr(3);
                }
                uid = isBuddy(mn);
                if (!flag && !!uid) {
                    if (li.attr("mn") != mn) {
                        phone.arr[len++] = "|" + li.attr("mn");
                        li.find(".friends_info span").text(mn);
                        li.attr("mn", mn);
                    }
                    li.attr("uid", uid);
                    if ( !! phone.tel) {
                        phone.tel.uid = uid;
                        phone.tel.mn = mn;
                    }
                    flag = true;
                } else {
                    if (li.attr("mn") != mn) {
                        phone.arr[len++] = uid + "|" + mn;
                    }
                }
            }
        }
        checkTel(phone.HMobile);
        checkTel(phone.OMobile);
        checkTel(phone.OPhone);
        checkTel(phone.HPhone);
        if (!flag) {
            li.append('<div class="friend_add" title="加为好友"></div>');
        }
    }
    return li;
}
function delAlinfo(guid) {
    var ulList = $("#phone_list_content");
    var params = {};
    params.type = "POST";
    params.dataType = "json";
    params.data = {
        "ssid": __sessionId,
        "guid": guid
    };
    params.url = formatString(deleteALInfoOneUrl, __version++);
    params.cache = false;
    params.success = function(data) {
        ulList.find('li[guid="' + guid + '"]').remove();
        if (ulList.find("li").length <= 0) {
            ulList.addClass("none");
            ulList.prev().removeClass("none");
        }
    };
    params.error = function() {};
    $.ajax(params);
}
function isBuddy(mn) {
    var uid = "",
    vals = __contactMap.values();
    if (mn == __user.mn) {
        uid = __user.uid;
        return uid;
    }
    for (var i = 0, j = vals.length; i < j; i++) {
        var val = vals[i];
        if (mn == val.mn) {
            uid = val.uid;
            return uid;
        }
    }
    return uid;
}
var PopForTXLFlag = false;
function createPopForTXL(sender, guid) {
    var pop = $("#popForTongXunLu"),
    ul = pop.find("ul");
    pop.removeClass("none");
    ul.attr("guid", guid);
    ul.find('li[t=""]').remove();
    var phone = __phoneMap.get(guid);
    if (phone.arr.length > 0) {
        var arr, li;
        for (var i = 0, j = phone.arr.length; i < j; i++) {
            arr = phone.arr[i].split("|");
            li = $('<li t="" uid="' + arr[0] + '" mn="' + arr[1] + '"><a class="icon_contact" href="javascript:;">' + arr[1] + "</a></li>");
            pop.find("ul").prepend(li);
        }
    }
    ul.find("li").bind("mouseover",
    function() {
        this.className = "hover";
    }).bind("mouseout",
    function() {
        this.className = "";
    });
    if (!PopForTXLFlag) {
        PopForTXLFlag = true;
        pop.bind("mouseover",
        function(e) {
            clearTimeout(__tmpTimer);
            pop.removeClass("none");
        }).bind("mouseout",
        function(e) {
            if (isMouseOut(this, e)) {
                clearTimeout(__tmpTimer);
                pop.addClass("none");
            }
        });
        ul.bind("click",
        function(e) {
            e = window.event || e;
            var target = e.target || e.srcElement;
            var li = $(target).closest("li");
            var guid = $(this).attr("guid");
            var ph = __phoneMap.get(guid);
            switch (li.attr("t").trim()) {
            case "del":
                $.increaseCounter(500400020);
                $.fn.fetionHintWindow({
                    modal:
                    true
                }).show('你确定要删除"' + ph.FN + '"吗', "删除联系人", "OKCancel",
                function() {
                    $.increaseCounter(500400021);
                    delAlinfo(guid);
                },
                function() {
                    $.increaseCounter(500400022);
                },
                "images/icon_wenhao.png");
                break;
            case "edit":
                $.increaseCounter(500400017);
                createAddTXLTab(guid);
                break;
            default:
                createFreeSMSTab(guid, li.attr("uid").trim(), li.attr("mn").trim());
                break;
            }
            pop.addClass("none");
            stopPropagation(e);
            preventDefault(e);
        });
    }
    var user_control = $(sender);
    var u = user_control.offset();
    if (u.top + pop.height() > getViewportHeight() - 20) {
        u.top = u.top - pop.height();
    }
    pop.css({
        "top": u.top + user_control.height(),
        "left": u.left - (pop.outerWidth() - user_control.width())
    });
    clearTimeout(__tmpTimer);
    __tmpTimer = setTimeout(function() {
        pop.addClass("none");
        clearTimeout(__tmpTimer);
    },
    2000);
}
var imageCarousel = function() {
    function each(arr, callback, thisp) {
        if (arr.forEach) {
            arr.forEach(callback, thisp);
        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                callback.call(thisp, arr[i], i, arr);
            }
        }
    }
    function fadeIn(elem) {
        setOpacity(elem, 0);
        for (var i = 0; i < 20; i++) { (function() {
                var pos = i * 5;
                setTimeout(function() {
                    setOpacity(elem, pos);
                },
                i * 25);
            })(i);
        }
    }
    function fadeOut(elem) {
        for (var i = 0; i <= 20; i++) { (function() {
                var pos = 100 - i * 5;
                setTimeout(function() {
                    setOpacity(elem, pos);
                },
                i * 25);
            })(i);
        }
    }
    function setOpacity(elem, level) {
        if (elem.filters) {
            elem.style.filter = "alpha(opacity=" + level + ")";
        } else {
            elem.style.opacity = level / 100;
        }
    }
    return {
        scroll: function(count, wrapId, interval, banner_info) {
            var self = this;
            var targetIdx = 0;
            var curIndex = 0;
            this.info = $("#banner_info");
            this.img = document.getElementById(wrapId).getElementsByTagName("a");
            each(this.img,
            function(elem, idx, arr) {
                if (idx != 0) {
                    setOpacity(elem, 0);
                }
            });
            var itv = setInterval(function() {
                if (targetIdx < count - 1) {
                    targetIdx++;
                } else {
                    targetIdx = 0;
                }
                self.fade(targetIdx, curIndex);
                curIndex = targetIdx;
            },
            interval);
            document.getElementById(wrapId).onmouseover = function() {
                clearInterval(itv);
            };
            document.getElementById(wrapId).onmouseout = function() {
                itv = setInterval(function() {
                    if (targetIdx < count - 1) {
                        targetIdx++;
                    } else {
                        targetIdx = 0;
                    }
                    self.fade(targetIdx, curIndex);
                    curIndex = targetIdx;
                },
                interval);
            };
        },
        fade: function(idx, lastIdx) {
            if (idx == lastIdx) {
                return;
            }
            var self = this;
            fadeOut(self.img[lastIdx]);
            fadeIn(self.img[idx]);
            this.info.html('<a href="' + self.img[idx].href + '" target="' + self.img[idx].target + '"><img src="' + self.img[idx].firstChild.src + '" title="' + self.img[idx].firstChild.title + '" alt="' + self.img[idx].firstChild.title + '" /></a>');
            $("#banner_info > a").bind("click",
            function() {
                $.increaseCounter(500900001);
            });
        }
    };
} ();
function opShareContent(fileKey, form) {
    var curFile = __sendFileMap.get(fileKey);
    var frm = form;
    return $.ajax({
        url: formatString(OpShareContentUrl, __version++),
        type: "post",
        dataType: "json",
        data: {
            "ssid": __sessionId,
            "toUri": curFile.buddy.uri
        },
        success: function(data, textStatus) {
            var result = data;
            if (!result) {
                return;
            }
            switch (result.rc) {
            case 200:
            case 444:
                curFile.win.fileFormOnSubmit({
                    fileKey:
                    fileKey
                },
                form);
                break;
            case 420:
                curFile.win.recFriendFile(4, fileKey);
                break;
            case 310:
                redirectLogin();
                break;
            default:
                break;
            }
        },
        error: function() {}
    });
}
function infoShareContent(toUri, fileID, fileName, filedownurl, filesize, sType) {
    if (/\.(bat|chm|com|exe|hlp|htm|html|js|msi|reg|scr|vbs|chk)$/.test(fileName)) {
        fileName += ".重命名";
    }
    var infoShareContentParams = new Object();
    infoShareContentParams.success = infoShareContentSuccess;
    infoShareContentParams.error = infoShareContentError;
    infoShareContentParams.url = formatString(InfoShareContentUrl, __version++);
    infoShareContentParams.type = "POST";
    infoShareContentParams.data = {
        "ssid": __sessionId,
        "toUri": toUri,
        "fileID": fileID,
        "fileName": fileName,
        "fileType": "0",
        "fileSize": filesize,
        "fileMd5": "0",
        "fileURL": filedownurl,
        "fileImgView": "0",
        "action": sType
    };
    infoShareContentParams.dataType = "json";
    infoShareContentParams.cache = false;
    $.ajax(infoShareContentParams);
}
var __iscRetry = 0;
function infoShareContentSuccess(data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        __iscRetry = 0;
    }
}
function infoShareContentError(XMLHttpRequest, textStatus, errorThrown) {
    if (__iscRetry < 3) {
        __iscRetry++;
        window.setTimeout("infoShareContent();", 500);
    } else {
        __iscRetry = 0;
        redirectLogin();
    }
}
function infoOpShareContent(toUri, fileID, fileName, action, fileUrl) {
    var infoOpShareContentParams = new Object();
    infoOpShareContentParams.success = infoOpShareContentSuccess;
    infoOpShareContentParams.error = infoOpShareContentError;
    infoOpShareContentParams.url = formatString(InfoOpShareContentUrl, __version++);
    infoOpShareContentParams.type = "POST";
    infoOpShareContentParams.data = {
        "ssid": __sessionId,
        "toUri": toUri,
        "fileID": fileID,
        "action": action,
        "fileURL": fileUrl
    };
    infoOpShareContentParams.dataType = "json";
    infoOpShareContentParams.cache = false;
    $.ajax(infoOpShareContentParams);
}
var __iscsRetry = 0;
function infoOpShareContentSuccess(data, textStatus) {
    var result = data;
    if (typeof result.rc == "number" && result.rc == 200) {
        __iscsRetry = 0;
    }
}
function infoOpShareContentError(XMLHttpRequest, textStatus, errorThrown) {}