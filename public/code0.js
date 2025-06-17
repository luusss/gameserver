gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects1= [];
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects2= [];
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects3= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSpriteObjects3= [];
gdjs.menuCode.GDbuttom_95950Objects1= [];
gdjs.menuCode.GDbuttom_95950Objects2= [];
gdjs.menuCode.GDbuttom_95950Objects3= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDNewTextObjects3= [];
gdjs.menuCode.GDplayerObjects1= [];
gdjs.menuCode.GDplayerObjects2= [];
gdjs.menuCode.GDplayerObjects3= [];
gdjs.menuCode.GDplayer2Objects1= [];
gdjs.menuCode.GDplayer2Objects2= [];
gdjs.menuCode.GDplayer2Objects3= [];
gdjs.menuCode.GDchickenObjects1= [];
gdjs.menuCode.GDchickenObjects2= [];
gdjs.menuCode.GDchickenObjects3= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDbuttom_959595950Objects1Objects = Hashtable.newFrom({"buttom_0": gdjs.menuCode.GDbuttom_95950Objects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.menuCode.GDplayer2Objects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


};gdjs.menuCode.asyncCallback12742948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menuCode.localVariables);

{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.menuCode.localVariables.length = 0;
}
gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/rank", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().get("rank"), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.menuCode.asyncCallback12742948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


};gdjs.menuCode.asyncCallback12744300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menuCode.localVariables);

{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.menuCode.localVariables.length = 0;
}
gdjs.menuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().get("rank"), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.menuCode.asyncCallback12744300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.eventsList5 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("buttom_0"), gdjs.menuCode.GDbuttom_95950Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuCode.GDbuttom_95950Objects1.length !== 0 ? gdjs.menuCode.GDbuttom_95950Objects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttom_0"), gdjs.menuCode.GDbuttom_95950Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDbuttom_959595950Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.menuCode.GDplayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDplayer2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.menuCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDplayer2Objects1[i].addForceTowardPosition(1, 1, 10, 0);
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


gdjs.menuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12742716);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12744068);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects1.length = 0;
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects2.length = 0;
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects3.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects3.length = 0;
gdjs.menuCode.GDbuttom_95950Objects1.length = 0;
gdjs.menuCode.GDbuttom_95950Objects2.length = 0;
gdjs.menuCode.GDbuttom_95950Objects3.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects3.length = 0;
gdjs.menuCode.GDplayerObjects1.length = 0;
gdjs.menuCode.GDplayerObjects2.length = 0;
gdjs.menuCode.GDplayerObjects3.length = 0;
gdjs.menuCode.GDplayer2Objects1.length = 0;
gdjs.menuCode.GDplayer2Objects2.length = 0;
gdjs.menuCode.GDplayer2Objects3.length = 0;
gdjs.menuCode.GDchickenObjects1.length = 0;
gdjs.menuCode.GDchickenObjects2.length = 0;
gdjs.menuCode.GDchickenObjects3.length = 0;

gdjs.menuCode.eventsList5(runtimeScene);
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects1.length = 0;
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects2.length = 0;
gdjs.menuCode.GDPixelPlatformerFarmExpansion18x18Objects3.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects3.length = 0;
gdjs.menuCode.GDbuttom_95950Objects1.length = 0;
gdjs.menuCode.GDbuttom_95950Objects2.length = 0;
gdjs.menuCode.GDbuttom_95950Objects3.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewTextObjects3.length = 0;
gdjs.menuCode.GDplayerObjects1.length = 0;
gdjs.menuCode.GDplayerObjects2.length = 0;
gdjs.menuCode.GDplayerObjects3.length = 0;
gdjs.menuCode.GDplayer2Objects1.length = 0;
gdjs.menuCode.GDplayer2Objects2.length = 0;
gdjs.menuCode.GDplayer2Objects3.length = 0;
gdjs.menuCode.GDchickenObjects1.length = 0;
gdjs.menuCode.GDchickenObjects2.length = 0;
gdjs.menuCode.GDchickenObjects3.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
