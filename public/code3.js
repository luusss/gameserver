gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDPixelPlatformerFarmExpansion18x18Objects1= [];
gdjs.GameOverCode.GDPixelPlatformerFarmExpansion18x18Objects2= [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDbuttom_95950Objects1= [];
gdjs.GameOverCode.GDbuttom_95950Objects2= [];
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];
gdjs.GameOverCode.GDplayerObjects1= [];
gdjs.GameOverCode.GDplayerObjects2= [];
gdjs.GameOverCode.GDplayer2Objects1= [];
gdjs.GameOverCode.GDplayer2Objects2= [];
gdjs.GameOverCode.GDchickenObjects1= [];
gdjs.GameOverCode.GDchickenObjects2= [];
gdjs.GameOverCode.GDNewText2Objects1= [];
gdjs.GameOverCode.GDNewText2Objects2= [];
gdjs.GameOverCode.GDbackObjects1= [];
gdjs.GameOverCode.GDbackObjects2= [];


gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDbuttom_959595950Objects1Objects = Hashtable.newFrom({"buttom_0": gdjs.GameOverCode.GDbuttom_95950Objects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.GameOverCode.GDplayer2Objects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pre", false);
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.GameOverCode.GDbackObjects1});
gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "3938a34c4b22efe9c3bfe7a3c4413bdc65468d15944869fd733517f647ea38b7_Night in Venice.aac", false, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("buttom_0"), gdjs.GameOverCode.GDbuttom_95950Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameOverCode.GDbuttom_95950Objects1.length !== 0 ? gdjs.GameOverCode.GDbuttom_95950Objects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttom_0"), gdjs.GameOverCode.GDbuttom_95950Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDbuttom_959595950Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pre", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.GameOverCode.GDplayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDplayer2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDplayer2Objects1[i].addForceTowardPosition(1, 1, 10, 0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameOverCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.GameOverCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDPixelPlatformerFarmExpansion18x18Objects1.length = 0;
gdjs.GameOverCode.GDPixelPlatformerFarmExpansion18x18Objects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDbuttom_95950Objects1.length = 0;
gdjs.GameOverCode.GDbuttom_95950Objects2.length = 0;
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDplayerObjects1.length = 0;
gdjs.GameOverCode.GDplayerObjects2.length = 0;
gdjs.GameOverCode.GDplayer2Objects1.length = 0;
gdjs.GameOverCode.GDplayer2Objects2.length = 0;
gdjs.GameOverCode.GDchickenObjects1.length = 0;
gdjs.GameOverCode.GDchickenObjects2.length = 0;
gdjs.GameOverCode.GDNewText2Objects1.length = 0;
gdjs.GameOverCode.GDNewText2Objects2.length = 0;
gdjs.GameOverCode.GDbackObjects1.length = 0;
gdjs.GameOverCode.GDbackObjects2.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);
gdjs.GameOverCode.GDPixelPlatformerFarmExpansion18x18Objects1.length = 0;
gdjs.GameOverCode.GDPixelPlatformerFarmExpansion18x18Objects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDbuttom_95950Objects1.length = 0;
gdjs.GameOverCode.GDbuttom_95950Objects2.length = 0;
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDplayerObjects1.length = 0;
gdjs.GameOverCode.GDplayerObjects2.length = 0;
gdjs.GameOverCode.GDplayer2Objects1.length = 0;
gdjs.GameOverCode.GDplayer2Objects2.length = 0;
gdjs.GameOverCode.GDchickenObjects1.length = 0;
gdjs.GameOverCode.GDchickenObjects2.length = 0;
gdjs.GameOverCode.GDNewText2Objects1.length = 0;
gdjs.GameOverCode.GDNewText2Objects2.length = 0;
gdjs.GameOverCode.GDbackObjects1.length = 0;
gdjs.GameOverCode.GDbackObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
