addCfg("video_frame", "video_frame", "10");

var cln_MAC = "08:22:23:14:11:44";

var client_ip = "10.10.1.2";

var v_proto = "8899";
var lanip = "10.10.1.1";
var wanip = "0.0.0.0";
var lanmask = "255.0.0.0";
var ipAddr;
if (checkLansubnet(lanip, lanmask, client_ip) == true)
    ipAddr = lanip;
else {
    if (wanip != "0.0.0.0" && wanip != "")
        ipAddr = wanip;
    else
        ipAddr = lanip;
}
var mjpg_run = "1";
var video_locat = "http://" + ipAddr + ":" + v_proto + "/index.html";
var video_pause = "http://" + ipAddr + ":" + v_proto + "/?action=snapshot";
var video_settings = "http://" + ipAddr + ":" + v_proto + "/input_0.json";
var video_idx_save = "3";
var video_frame_save = "10";
var only_stream = "0";
var cameraList = "1,0,640,480#2,0,1280,1024#3,0,320,240#4,1,640,480#5,1,1280,1024#6,1,320,240#";
var cameraWidth = "640";
var cameraHeight = "480";
var ctrlList = {
    "controls": [{
            "name": "Brightness",
            "id": "9963776",
            "type": "1",
            "min": "0",
            "max": "255",
            "step": "1",
            "default_v": "100",
            "value": "100",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Contrast",
            "id": "9963777",
            "type": "1",
            "min": "0",
            "max": "127",
            "step": "1",
            "default_v": "41",
            "value": "41",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Saturation",
            "id": "9963778",
            "type": "1",
            "min": "0",
            "max": "37",
            "step": "1",
            "default_v": "31",
            "value": "31",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Hue",
            "id": "9963779",
            "type": "1",
            "min": "-15",
            "max": "15",
            "step": "1",
            "default_v": "-2",
            "value": "-2",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "White Balance Temperature, Auto",
            "id": "9963788",
            "type": "2",
            "min": "0",
            "max": "1",
            "step": "1",
            "default_v": "1",
            "value": "1",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Gamma",
            "id": "9963792",
            "type": "1",
            "min": "1",
            "max": "5",
            "step": "1",
            "default_v": "5",
            "value": "5",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Power Line Frequency",
            "id": "9963800",
            "type": "3",
            "min": "0",
            "max": "2",
            "step": "1",
            "default_v": "2",
            "value": "2",
            "dest": "0",
            "flags": "0",
            "group": "1",
            "menu": {
                "0": "Disabled",
                "1": "50 Hz",
                "2": "60 Hz"
            }
        }, {
            "name": "White Balance Temperature",
            "id": "9963802",
            "type": "1",
            "min": "2800",
            "max": "6500",
            "step": "1",
            "default_v": "5000",
            "value": "5000",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Sharpness",
            "id": "9963803",
            "type": "1",
            "min": "0",
            "max": "10",
            "step": "1",
            "default_v": "0",
            "value": "0",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }, {
            "name": "Backlight Compensation",
            "id": "9963804",
            "type": "1",
            "min": "0",
            "max": "1",
            "step": "1",
            "default_v": "0",
            "value": "0",
            "dest": "0",
            "flags": "0",
            "group": "1"
        }
    ]
};
var lan_ip = "10.10.1.1";
var lan_netmask = "255.0.0.0";
var langchoose = "English";
var netip = lan_ip.split(".");
var soft_version = "1.0.7.0";
var language1 = "English";
var sele_3g = "9";
var signalstrength = "";
var wan_proto = "9";
var operatorName = "";
var wantype = "";
var roamtype = "";
var hw_ver = "1.0";
var http_lanport = "80";
var http_wanport = "8080";
var http_client_ip = "10.10.1.2";
var runtime_wan_ip = "0.0.0.0";
var usb_product = ":";
var service_type = "";
var basemode = "4";
var camerSetTitle = new Array("Brightness", "Contrast", "Hue", "Saturation", "Sharpness", "Gamma", "Backlight Compensation", "Gain", "Power Line Frequency", "Hue, Auto", "Exposure, Auto", "Exposure (Absolute)", "White Balance Temperature, Auto", "White Balance Temperature", "White Balance Component, Auto", "White Balance Blue Component", "White Balance Red Component", "Focus (absolute)", "Focus, Auto", "JPEG quality", "Exposure, Auto Priority");
var filterTitle = new Array("Brightness", "Contrast", "Saturation", "Hue", "Gain", "Gamma", "Power Line Frequency", "Sharpness", "亮度", "对比度", "色度", "饱和度", "增益", "伽玛", "电源频率", "锐度", "對比度", "飽和度", "伽瑪", "電源頻率", "銳度");
var camerMenuTitle = new Array("Auto Mode", "Manual Mode", "Shutter Priority", "Aperture Priority");
if (mjpg_run == "0")
    video_locat = "novideo.asp";
if (only_stream == "1")
    video_locat = "onlystream.asp";
function matchFilter(namestr) {
    for (var i = 0;
        i < filterTitle.length;
        i++) {
        if (namestr.indexOf(filterTitle[i]) >= 0)
            return i + 1;
    }
    return 0;
}
function matchTitle(namestr) {
    for (var i = 0;
        i < camerSetTitle.length;
        i++) {
        if (namestr.indexOf(camerSetTitle[i]) >= 0)
            return i + 1;
    }
    return 0
}
function matchMenu(namestr) {
    for (var i = 0;
        i < camerMenuTitle.length;
        i++) {
        if (namestr.indexOf(camerMenuTitle[i]) >= 0)
            return i + 1;
    }
    return 0
}
function translate_language() {
    var ret;
    for (var i = 0;
        i < ctrlList.controls.length;
        i++) {
        ret = matchTitle(ctrlList.controls[i].name);
        if (ret != 0) {
            if (language1 == 'Chinese' || language1 == 'Big5') {
                ctrlList.controls[i].name = _camerTitleCn[ret - 1];
            }
        }
        if (ctrlList.controls[i].id == "10094849") {
            for (var j = ctrlList.controls[i].min;
                j <= ctrlList.controls[i].max;
                j++) {
                ret = matchMenu(ctrlList.controls[i].menu[j]);
                if (ret != 0) {
                    if (language1 == 'Chinese' || language1 == 'Big5')
                        ctrlList.controls[i].menu[j] = _camerMenuCn[ret - 1];
                    else
                        ctrlList.controls[i].menu[j] = camerMenuTitle[ret - 1];
                }
            }
        }
    }
}
function setCamera(idstr, group, dest, val) {
    var video_post = "http://" + ipAddr + ":" + v_proto + "/?action=command&dest=" + dest + "&plugin=0" + '&id=' + idstr + '&group=0' + group + '&value=' + val;
    http_request_setting(1, video_post);
}
function init(f) {
    var cmall = new Array();
    var cele = new Array();
    var objSelect = f.video_idx_sel;
    var obj1Select = f.video_frame_sel;
    cfg2Form(f);
    cmall = cameraList.split("#");
    for (var n = 0;
        n < cmall.length - 1;
        n++) {
        cele = cmall[n].split(",");
        if (cele[1] == 0)
            tmp = " YUV" + " " + cele[2] + "x" + cele[3];
        else
            tmp = "MJPG" + " " + cele[2] + "x" + cele[3];
        var objOption = new Option(tmp, n);
        objSelect.options[objSelect.options.length] = objOption;
    }
    f.video_idx_sel.options.selectedIndex = parseInt(video_idx_save, 10);
    for (n = 1;
        n <= 30;
        n++) {
        tmp = n + " fps";
        var obj1Option = new Option(tmp, n);
        obj1Select.options[obj1Select.options.length] = obj1Option;
    }
    f.video_frame_sel.options.selectedIndex = parseInt(video_frame_save, 10) - 1;
}
function selectVideo(f) {
    var d = f.video_idx_sel.options.selectedIndex;
    if (d != video_idx_save) {
        f.video_idx.value = d;
        document.frmSetup.action.value = "video_idx";
        document.frmSetup.submit_button.value = "wizardvideo";
        document.frmSetup.submit();
    }
}
function selectVideoFrame(f) {
    var d = f.video_frame_sel.options.selectedIndex;
    if (d != video_frame_save) {
        f.video_frame.value = d + 1;
        document.frmSetup.action.value = "video_frame";
        document.frmSetup.submit_button.value = "wizardvideo";
        document.frmSetup.submit();
    }
}
function CameraDefault() {
    var m;
    for (var i = 0;
        i < ctrlList.controls.length;
        i++) { // for IPEVO			if ( matchFilter(ctrlList.controls[i].name)==0 ) continue;
        ctrlList.controls[i].value = ctrlList.controls[i].default_v;
        setCamera(parseInt(ctrlList.controls[i].id), parseInt(ctrlList.controls[i].group), parseInt(ctrlList.controls[i].dest), parseInt(ctrlList.controls[i].value));
        updateSettins(2);
    }
}
function updateSettins(v) {
    var m = '<table border=0 width=125 cellpadding=0 cellspacing=0>';
    if (v == 0) {
        m += '<tr><td class=setDetail>No Camera Server</td>';
    }
    if (v == 1) {
        m += '<tr><td class=setDetail>Can not control Camera</td>';
    } else if (v == 2) {
        for (i = 0;
            i < ctrlList.controls.length;
            i++) { // for IPEVO 				if ( matchFilter(ctrlList.controls[i].name)==0 ) continue;
            m += '<tr><td colspan=3 width=168 height=20 class=setDetail>' + ctrlList.controls[i].name + ':</td>';
            min_int = parseInt(ctrlList.controls[i].min);
            max_int = parseInt(ctrlList.controls[i].max);
            var nstr = ctrlList.controls[i].id + '~' + ctrlList.controls[i].group + '~' + ctrlList.controls[i].dest;
            if (ctrlList.controls[i].type == '1') {
                m += '<tr><td width=56 class=setMin id="id_' + ctrlList.controls[i].id + '_Min">&nbsp;
                ';
                m += '<td style="text-align:center" width=56 class=setDetail id="id_' + ctrlList.controls[i].id + '_Detail">&nbsp;
                ';
                m += '<td width=56 class=setMax id="id_' + ctrlList.controls[i].id + '_Max">&nbsp;
                ';
                m += '<tr><td colspan=3 widtd=168  height=20 valign=top><div style="width:168px" id="' + ctrlList.controls[i].id + '"></div>';
            } else if (ctrlList.controls[i].type == '3') {
                m += '<tr><td colspan=3 widtd=168  height=20><select name=' + nstr + ' onChange=allSetectOnchange(this)>';
                for (var j = min_int;
                    j <= max_int;
                    j++) {
                    var tt = parseInt(ctrlList.controls[i].value) == j ? "selected" : "";
                    m += '<option value=' + j + ' ' + tt + '>' + ctrlList.controls[i].menu[j];
                    m += '</option>';
                }
                m += '</td></tr>';
            } else if (ctrlList.controls[i].type == '2') {
                var ckstr = ctrlList.controls[i].value == "1" ? "checked" : "";
                m += '<tr><td colspan=3 widtd=168  height=20><input type=checkbox name=' + nstr + ' onClick=allCheckOnclick(this) ' + ckstr + '>';
            }
            m += '<tr><td colspan=3 height=5>&nbsp;
            ';
        }
        m += '<tr><td colspan=3><INPUT class=vdobutton type=button name=default_button value=' + share.videodef + ' onclick=CameraDefault();
        >';
    }
    m += '</table>';
    getElementById("_Camera_settings").innerHTML = m;
    if (v == 2)
        showAllCameraSettings();
}
var http_request = false;
function http_request_setting(pg, url) {
    http_request = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE        try {            http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
        try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
}
if (!http_request) {
    alert('Cannot create an XMLHTTP instance');
    return false;
}
if (pg == 0)
    http_request.onreadystatechange = processRequest;
else
    http_request.onreadystatechange = processRequest_set;
http_request.open('GET', url, true);
http_request.send(null);
}
function processRequest() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            var tmp = http_request.responseText;
            ctrlList = eval("(" + tmp + ")");
            if (ctrlList.controls == 'undefined')
                updateSettins(1);
            else {
                updateSettins(2);
            }
        } else {
            ctrlList = 0;
            //updateSettins( 0 );
        }
    }
}
function allSetectOnchange(f) {
    var t = f.name.split('~');
    setCamera(parseInt(t[0]), parseInt(t[1]), parseInt(t[2]), parseInt(f.value));
}
function allCheckOnclick(f) {
    var t = f.name.split('~');
    setCamera(parseInt(t[0]), parseInt(t[1]), parseInt(t[2]), (f.checked == true ? 1 : 0));
}
function processRequest_set() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {}
        else {}
    }
}
function showAllCameraSettings() {
    for (i = 0;
        i < ctrlList.controls.length;
        i++) { // for IPEVO		if ( matchFilter(ctrlList.controls[i].name)==0 ) continue;
        min_int = parseInt(ctrlList.controls[i].min);
        max_int = parseInt(ctrlList.controls[i].max);
        if (ctrlList.controls[i].type == '1') {
            sliderImage = new neverModules.modules.slider({
                    targetId: ctrlList.controls[i].id,
                    sliderCss: "winSlider",
                    barCss: "winBar",
                    min: min_int,
                    max: max_int,
                    hints: "move the slider",
                    showid: "id_" + ctrlList.controls[i].id + "_Detail",
                    showmin: "id_" + ctrlList.controls[i].id + "_Min",
                    showmax: "id_" + ctrlList.controls[i].id + "_Max",
                    group: ctrlList.controls[i].group,
                    dest: ctrlList.controls[i].dest
                });
            sliderImage.onstart = function () {
                with (this) {
                    getElementById(this.showid).innerHTML = this.getValue();
                    getElementById(this.showmin).innerHTML = this.min;
                    getElementById(this.showmax).innerHTML = this.max;
                }
            };
            sliderImage.onchange = function () {
                with (this) {
                    getElementById(this.showid).innerHTML = this.getValue();
                    getElementById(this.showmin).innerHTML = this.min;
                    getElementById(this.showmax).innerHTML = this.max;
                    setCamera(parseInt(this.targetId), parseInt(this.group), parseInt(this.dest), parseInt(this.getValue()));
                }
            };
            sliderImage.onend = function () {
                with (this) {
                    getElementById(this.showid).innerHTML = this.getValue();
                    getElementById(this.showmin).innerHTML = this.min;
                    getElementById(this.showmax).innerHTML = this.max;
                    setCamera(parseInt(this.targetId), parseInt(this.group), parseInt(this.dest), parseInt(this.getValue()));
                }
            };
            sliderImage.create();
            sliderImage.setValue(parseInt(ctrlList.controls[i].value));
        }
    }
}
function pop_capwin() {
    window.open(video_pause, "", 'width=1024,height=768,toolbar=no,status=no,scrollbars=yes,resizable=no,menubar=yes');
}
var http_request = false;
var secs;
var timerID = null;
var timerRunning = false;
var timeout = 2;
var delay = 2000;
function updateclientstatusHTML(str) {
    var all_str = new Array();
    all_str = str.split("\n");
    if (all_str.length == 0)
        return;
    if (all_str[0] == "0") {
        alert(share.videounplugged);
        location = "index.asp";
    }
}
function updateclientstatus() {
    makeRequest("updateNvram.cgi", "mjpg_run");
}