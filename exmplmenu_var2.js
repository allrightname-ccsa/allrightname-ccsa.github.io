/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=8;			// Number of first level items
	var LowBgColor='#FFCC33';			// Background color when mouse is not over
	var LowSubBgColor='#336699';			// Background color when mouse is not over on subs
	var HighBgColor='#FFCC33';			// Background color when mouse is over
	var HighSubBgColor='#6699CC';			// Background color when mouse is over on subs
	var FontLowColor='#FFCC33';			// Font color when mouse is not over
	var FontSubLowColor='#ffffff';		// Font color subs when mouse is not over
	var FontHighColor='#FF9933';			// Font color when mouse is over
	var FontSubHighColor='#FF9933';		// Font color subs when mouse is over
	var BorderColor='#6699CC';			// Border color
	var BorderSubColor='#6699CC';			// Border color for subs
	var BorderWidth=0;				// Border width
	var BorderBtwnElmnts=0;				// Border between elements 1 or 0
	var FontFamily="verdana, arial, helvetica"   // Font family menu items
	var FontSize=9;					// Font size menu items
	var FontBold=0;					// Bold menu items 1 or 0
	var FontItalic=1;					// Italic menu items 1 or 0
	var MenuTextCentered='center';		// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.1;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=145;					// Menu offset x coordinate
	var StartLeft=0;					// Menu offset y coordinate
	var VerCorrect=0;					// Multiple frames y correction
	var HorCorrect=0;					// Multiple frames x correction
	var LeftPaddng=5;					// Left padding
	var TopPaddng=0;					// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=0;			// Frames in cols or rows 1 or 0
	var DissapearDelay=750;				// delay before menu folds in
	var TakeOverBgColor=1;				// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='MenuPos';			// span id for relative positioning
	var HideTop=0;					// Hide first level when loading new document 1 or 0
	var MenuWrap=1;					// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;				// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;				// menu tree checking on or off 1 or 0
	var ShowArrow=1;					// Uses arrow gifs when 1
	var KeepHilite=1;					// Keep selected path highligthed
	var Arrws=['tri2.gif',7,10,'tridown2.gif',10,5,'trileft2.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"



Menu1=new Array("","","images/bluemenubkgd.png",0,19,175);





Menu2=new Array("rollover:images/home1.png:images/home2.png","index.html","images/bluemenubkgd.png",1,19,133);
	Menu2_1=new Array("rollover:images/btn_sitemap1.png:images/btn_sitemap2.png","sitemap.html","",0,19,150);




Menu3=new Array("rollover:images/about1.png:images/about2.png","aboutus.html","images/bluemenubkgd.png",3,19,100);
	Menu3_1=new Array("rollover:images/btn_geninfo1.png:images/btn_geninfo2.png","aboutus.html","",0,19,150);
	Menu3_2=new Array("rollover:images/btn_officers1.png:images/btn_officers2.png","officersandboard.html","",0,0,0);
	Menu3_3=new Array("rollover:images/btn_contact1.png:images/btn_contact2.png","contactus.html","",0,0,0);





Menu4=new Array("rollover:images/participate1.png:images/participate2.png","participate.html","images/bluemenubkgd.png",6,19,140);

	Menu4_1=new Array("rollover:images/btn_participate_geninfo1.png:images/btn_participate_geninfo2.png","participate.html#geninfo","",0,19,140);
	Menu4_2=new Array("rollover:images/btn_participate_map1.png:images/btn_participate_map2.png","directions.html","",0,0,0);
	Menu4_3=new Array("rollover:images/btn_participate_check1.png:images/btn_participate_check2.png","participate.html#checkusout","",0,0,0);
	Menu4_4=new Array("rollover:images/btn_participate_crew1.png:images/btn_participate_crew2.png","participate.html#crew","",0,0,0);
	Menu4_5=new Array("rollover:images/btn_participate_bring1.png:images/btn_participate_bring2.png","participate.html#boat","",0,0,0);
	Menu4_6=new Array("rollover:images/btn_participate_join1.png:images/btn_participate_join2.png","join.html","",0,0,0);





Menu5=new Array("rollover:images/sailboat1.png:images/sailboat2.png","sailboatraces.html","images/bluemenubkgd.png",6,19,120);
	Menu5_1=new Array("rollover:images/btn_sailboat_geninfo1.png:images/btn_sailboat_geninfo2.png","sailboatraces.html#geninfo","",0,19,175);
	Menu5_2=new Array("rollover:images/btn_sailboat_organized1.png:images/btn_sailboat_organized2.png","sailboatraces.html#organized","",0,0,0);
	Menu5_3=new Array("rollover:images/btn_sailboat_whattodo1.png:images/btn_sailboat_whattodo2.png","sailboatraces.html#raceday","",0,0,0);
	Menu5_4=new Array("rollover:images/btn_sailboat_instructions1.png:images/btn_sailboat_instructions2.png","instructions.html","",0,0,0);
	Menu5_5=new Array("rollover:images/btn_sailboat_results1.png:images/btn_sailboat_results2.png","raceresults.html","",0,0,0);

	Menu5_6=new Array("rollover:images/btn_sailboat_committee1.png:images/btn_sailboat_committee2.png","racecommittee.html","",0,0,0);




Menu6=new Array("rollover:images/calendar1.png:images/calendar2.png","calendar.html","images/bluemenubkgd.png",2,19,90);
	Menu6_1=new Array("rollover:images/btn_calendar_master1.png:images/btn_calendar_master2.png","calendar.html","",0,19,120);
	Menu6_2=new Array("rollover:images/btn_calendar_races1.png:images/btn_calendar_races2.png","calendar_racedays.html","",0,0,0);





Menu7=new Array("rollover:images/photo1.png:images/photo2.png","photogallery.html","images/bluemenubkgd.png",0,19,110);








Menu8=new Array("rollover:images/links1.png:images/links2.png","links.html","images/bluemenubkgd.png",0,19,84);





























