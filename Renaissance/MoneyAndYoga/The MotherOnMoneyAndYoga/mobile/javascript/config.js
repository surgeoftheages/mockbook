﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#444444";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="http://www.aurosociety.org/";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#C0C0C0";bookConfig.iconColor="#000000";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#E8E8E8";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Show";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#FFFFFF";bookConfig.bgEndColor="#FFFFFF";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="100";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="40";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="400";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="Please contact the <a href=\'mailto:author@sample.com\'><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#682370";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=14;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1800;;bookConfig.securityType="1";bookConfig.CreatedTime ="240120113207";bookConfig.bookTitle="The Mother on Money and Yoga";bookConfig.bookmarkCR="3c437f27929dd2153781c097ce6cebe15dd026c8";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.572548","y":"0.921717","width":"0.354630","height":"0.029630"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.640778","y":"0.923560","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.100000","y":"0.884722","width":"0.373148","height":"0.030556"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.025447","y":"0.516516","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.397069","y":"0.775127","width":"0.205556","height":"0.031481"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://incarnateword.in/agenda/01/october-4-1958#p21"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.640712","y":"0.910339","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.036843","y":"0.911280","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.036843","y":"0.911280","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080458","y":"0.917049","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.607581","y":"0.746456","width":"0.373148","height":"0.030556"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.640410","y":"0.930494","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.370547","y":"0.585848","width":"0.259259","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://incarnateword.in/cwm/04/3-may-1951#p23"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.040198","y":"0.039515","width":"0.320371","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.298736","y":"0.795665","width":"0.273148","height":"0.041667"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://incarnateword.in/agenda/01/october-4-1958#p21"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.640712","y":"0.910339","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.049949","y":"0.928650","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.628232","y":"0.918817","width":"0.320370","height":"0.037037"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://renaissance.aurosociety.org/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.154630","y":"0.345926","width":"0.690741","height":"0.049074"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://ebook.aurosociety.org/Renaissance/"}}]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}