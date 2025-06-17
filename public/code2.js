gdjs.preCode = {};
gdjs.preCode.localVariables = [];
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects1= [];
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects2= [];
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects3= [];
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects4= [];
gdjs.preCode.GDTwiggyObjects1= [];
gdjs.preCode.GDTwiggyObjects2= [];
gdjs.preCode.GDTwiggyObjects3= [];
gdjs.preCode.GDTwiggyObjects4= [];
gdjs.preCode.GDDuckObjects1= [];
gdjs.preCode.GDDuckObjects2= [];
gdjs.preCode.GDDuckObjects3= [];
gdjs.preCode.GDDuckObjects4= [];
gdjs.preCode.GDFatBirdObjects1= [];
gdjs.preCode.GDFatBirdObjects2= [];
gdjs.preCode.GDFatBirdObjects3= [];
gdjs.preCode.GDFatBirdObjects4= [];
gdjs.preCode.GDChickenObjects1= [];
gdjs.preCode.GDChickenObjects2= [];
gdjs.preCode.GDChickenObjects3= [];
gdjs.preCode.GDChickenObjects4= [];
gdjs.preCode.GDHollyObjects1= [];
gdjs.preCode.GDHollyObjects2= [];
gdjs.preCode.GDHollyObjects3= [];
gdjs.preCode.GDHollyObjects4= [];
gdjs.preCode.GDairwallObjects1= [];
gdjs.preCode.GDairwallObjects2= [];
gdjs.preCode.GDairwallObjects3= [];
gdjs.preCode.GDairwallObjects4= [];
gdjs.preCode.GDTimerTextObjects1= [];
gdjs.preCode.GDTimerTextObjects2= [];
gdjs.preCode.GDTimerTextObjects3= [];
gdjs.preCode.GDTimerTextObjects4= [];
gdjs.preCode.GDtouchObjects1= [];
gdjs.preCode.GDtouchObjects2= [];
gdjs.preCode.GDtouchObjects3= [];
gdjs.preCode.GDtouchObjects4= [];
gdjs.preCode.GDtrytouchObjects1= [];
gdjs.preCode.GDtrytouchObjects2= [];
gdjs.preCode.GDtrytouchObjects3= [];
gdjs.preCode.GDtrytouchObjects4= [];
gdjs.preCode.GDTrygrabObjects1= [];
gdjs.preCode.GDTrygrabObjects2= [];
gdjs.preCode.GDTrygrabObjects3= [];
gdjs.preCode.GDTrygrabObjects4= [];
gdjs.preCode.GDdoorObjects1= [];
gdjs.preCode.GDdoorObjects2= [];
gdjs.preCode.GDdoorObjects3= [];
gdjs.preCode.GDdoorObjects4= [];
gdjs.preCode.GDNewTextObjects1= [];
gdjs.preCode.GDNewTextObjects2= [];
gdjs.preCode.GDNewTextObjects3= [];
gdjs.preCode.GDNewTextObjects4= [];


gdjs.preCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.preCode.GDTwiggyObjects2, gdjs.preCode.GDTwiggyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDTwiggyObjects3.length;i<l;++i) {
    if ( gdjs.preCode.GDTwiggyObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDTwiggyObjects3[k] = gdjs.preCode.GDTwiggyObjects3[i];
        ++k;
    }
}
gdjs.preCode.GDTwiggyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDTwiggyObjects3 */
{for(var i = 0, len = gdjs.preCode.GDTwiggyObjects3.length ;i < len;++i) {
    gdjs.preCode.GDTwiggyObjects3[i].setAnimationName("Running");
}
}}

}


{

/* Reuse gdjs.preCode.GDTwiggyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDTwiggyObjects2.length;i<l;++i) {
    if ( gdjs.preCode.GDTwiggyObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDTwiggyObjects2[k] = gdjs.preCode.GDTwiggyObjects2[i];
        ++k;
    }
}
gdjs.preCode.GDTwiggyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDTwiggyObjects2 */
{for(var i = 0, len = gdjs.preCode.GDTwiggyObjects2.length ;i < len;++i) {
    gdjs.preCode.GDTwiggyObjects2[i].setAnimationName("Jumping");
}
}}

}


};gdjs.preCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDTwiggyObjects2.length;i<l;++i) {
    if ( gdjs.preCode.GDTwiggyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDTwiggyObjects2[k] = gdjs.preCode.GDTwiggyObjects2[i];
        ++k;
    }
}
gdjs.preCode.GDTwiggyObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.preCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDTwiggyObjects2.length;i<l;++i) {
    if ( !(gdjs.preCode.GDTwiggyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDTwiggyObjects2[k] = gdjs.preCode.GDTwiggyObjects2[i];
        ++k;
    }
}
gdjs.preCode.GDTwiggyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDTwiggyObjects2 */
{for(var i = 0, len = gdjs.preCode.GDTwiggyObjects2.length ;i < len;++i) {
    gdjs.preCode.GDTwiggyObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDTwiggyObjects2.length;i<l;++i) {
    if ( gdjs.preCode.GDTwiggyObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDTwiggyObjects2[k] = gdjs.preCode.GDTwiggyObjects2[i];
        ++k;
    }
}
gdjs.preCode.GDTwiggyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12468996);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDTwiggyObjects2 */
{for(var i = 0, len = gdjs.preCode.GDTwiggyObjects2.length ;i < len;++i) {
    gdjs.preCode.GDTwiggyObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDTwiggyObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDTwiggyObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDTwiggyObjects1[k] = gdjs.preCode.GDTwiggyObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDTwiggyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12556828);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDTwiggyObjects1 */
{for(var i = 0, len = gdjs.preCode.GDTwiggyObjects1.length ;i < len;++i) {
    gdjs.preCode.GDTwiggyObjects1[i].flipX(false);
}
}}

}


};gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDairwallObjects1Objects = Hashtable.newFrom({"airwall": gdjs.preCode.GDairwallObjects1});
gdjs.preCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.preCode.GDTimerTextObjects2);
{for(var i = 0, len = gdjs.preCode.GDTimerTextObjects2.length ;i < len;++i) {
    gdjs.preCode.GDTimerTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Countdown"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Countdown") >= 15;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("time").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
}

}


};gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.preCode.GDChickenObjects1});
gdjs.preCode.asyncCallback12076252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.preCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("touch"), gdjs.preCode.GDtouchObjects2);

{for(var i = 0, len = gdjs.preCode.GDtouchObjects2.length ;i < len;++i) {
    gdjs.preCode.GDtouchObjects2[i].hide();
}
}gdjs.preCode.localVariables.length = 0;
}
gdjs.preCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.preCode.localVariables);
for (const obj of gdjs.preCode.GDtouchObjects1) asyncObjectsList.addObject("touch", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.preCode.asyncCallback12076252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDTwiggyObjects1Objects = Hashtable.newFrom({"Twiggy": gdjs.preCode.GDTwiggyObjects1});
gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.preCode.GDChickenObjects1});
gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDTwiggyObjects1Objects = Hashtable.newFrom({"Twiggy": gdjs.preCode.GDTwiggyObjects1});
gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.preCode.GDChickenObjects1});
gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDTwiggyObjects1Objects = Hashtable.newFrom({"Twiggy": gdjs.preCode.GDTwiggyObjects1});
gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.preCode.GDdoorObjects1});
gdjs.preCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


};gdjs.preCode.asyncCallback12079524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.preCode.localVariables);

{ //Subevents
gdjs.preCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.preCode.localVariables.length = 0;
}
gdjs.preCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.preCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.preCode.asyncCallback12079524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.preCode.GDChickenObjects1});
gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.preCode.GDDuckObjects1});
gdjs.preCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.preCode.GDTimerTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trygrab"), gdjs.preCode.GDTrygrabObjects1);
gdjs.copyArray(runtimeScene.getObjects("touch"), gdjs.preCode.GDtouchObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("time").setNumber(60);
}{for(var i = 0, len = gdjs.preCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.preCode.GDTimerTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Countdown"))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Countdown");
}{for(var i = 0, len = gdjs.preCode.GDtouchObjects1.length ;i < len;++i) {
    gdjs.preCode.GDtouchObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HideTextTimer");
}{for(var i = 0, len = gdjs.preCode.GDTrygrabObjects1.length ;i < len;++i) {
    gdjs.preCode.GDTrygrabObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.preCode.GDTwiggyObjects1.length !== 0 ? gdjs.preCode.GDTwiggyObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{


gdjs.preCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);
gdjs.copyArray(runtimeScene.getObjects("airwall"), gdjs.preCode.GDairwallObjects1);
{for(var i = 0, len = gdjs.preCode.GDTwiggyObjects1.length ;i < len;++i) {
    gdjs.preCode.GDTwiggyObjects1[i].separateFromObjectsList(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDairwallObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("airwall"), gdjs.preCode.GDairwallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDairwallObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDairwallObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDairwallObjects1[k] = gdjs.preCode.GDairwallObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDairwallObjects1.length = k;
if (isConditionTrue_0) {
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FatBird"), gdjs.preCode.GDFatBirdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDFatBirdObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDFatBirdObjects1[i].getBehavior("可拖动").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDFatBirdObjects1[k] = gdjs.preCode.GDFatBirdObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDFatBirdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDFatBirdObjects1 */
{for(var i = 0, len = gdjs.preCode.GDFatBirdObjects1.length ;i < len;++i) {
    gdjs.preCode.GDFatBirdObjects1[i].getBehavior("Animation").setAnimationName("Fall");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FatBird"), gdjs.preCode.GDFatBirdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDFatBirdObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDFatBirdObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDFatBirdObjects1[k] = gdjs.preCode.GDFatBirdObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDFatBirdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDFatBirdObjects1 */
{for(var i = 0, len = gdjs.preCode.GDFatBirdObjects1.length ;i < len;++i) {
    gdjs.preCode.GDFatBirdObjects1[i].getBehavior("Animation").setAnimationName("Ground_1");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.preCode.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDDuckObjects1[i].getBehavior("PlatformerObject").getMaxFallingSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDDuckObjects1[k] = gdjs.preCode.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10985860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDDuckObjects1 */
{for(var i = 0, len = gdjs.preCode.GDDuckObjects1.length ;i < len;++i) {
    gdjs.preCode.GDDuckObjects1[i].getBehavior("Animation").setAnimationName("Hit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.preCode.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDDuckObjects1[k] = gdjs.preCode.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDDuckObjects1 */
{for(var i = 0, len = gdjs.preCode.GDDuckObjects1.length ;i < len;++i) {
    gdjs.preCode.GDDuckObjects1[i].getBehavior("Animation").setAnimationName("Fall");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.preCode.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.preCode.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.preCode.GDDuckObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.preCode.GDDuckObjects1[k] = gdjs.preCode.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.preCode.GDDuckObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.preCode.GDDuckObjects1 */
{for(var i = 0, len = gdjs.preCode.GDDuckObjects1.length ;i < len;++i) {
    gdjs.preCode.GDDuckObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


gdjs.preCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.preCode.GDTimerTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);
{for(var i = 0, len = gdjs.preCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.preCode.GDTimerTextObjects1[i].setPosition((( gdjs.preCode.GDTwiggyObjects1.length === 0 ) ? 0 :gdjs.preCode.GDTwiggyObjects1[0].getPointX("")) - 275,(( gdjs.preCode.GDTwiggyObjects1.length === 0 ) ? 0 :gdjs.preCode.GDTwiggyObjects1[0].getPointY("")) - 160);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.preCode.GDChickenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("touch"), gdjs.preCode.GDtouchObjects1);
{for(var i = 0, len = gdjs.preCode.GDtouchObjects1.length ;i < len;++i) {
    gdjs.preCode.GDtouchObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.preCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.preCode.GDChickenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDTwiggyObjects1Objects, gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects, 100, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trytouch"), gdjs.preCode.GDtrytouchObjects1);
{for(var i = 0, len = gdjs.preCode.GDtrytouchObjects1.length ;i < len;++i) {
    gdjs.preCode.GDtrytouchObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.preCode.GDChickenObjects1);
gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDTwiggyObjects1Objects, gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects, 100, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("trytouch"), gdjs.preCode.GDtrytouchObjects1);
{for(var i = 0, len = gdjs.preCode.GDtrytouchObjects1.length ;i < len;++i) {
    gdjs.preCode.GDtrytouchObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Twiggy"), gdjs.preCode.GDTwiggyObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.preCode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDTwiggyObjects1Objects, gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("time").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12079364);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.preCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Chicken"), gdjs.preCode.GDChickenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDChickenObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("score").sub(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.preCode.GDDuckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.preCode.mapOfGDgdjs_9546preCode_9546GDDuckObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("score").add(5);
}}

}


};

gdjs.preCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects1.length = 0;
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects2.length = 0;
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects3.length = 0;
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects4.length = 0;
gdjs.preCode.GDTwiggyObjects1.length = 0;
gdjs.preCode.GDTwiggyObjects2.length = 0;
gdjs.preCode.GDTwiggyObjects3.length = 0;
gdjs.preCode.GDTwiggyObjects4.length = 0;
gdjs.preCode.GDDuckObjects1.length = 0;
gdjs.preCode.GDDuckObjects2.length = 0;
gdjs.preCode.GDDuckObjects3.length = 0;
gdjs.preCode.GDDuckObjects4.length = 0;
gdjs.preCode.GDFatBirdObjects1.length = 0;
gdjs.preCode.GDFatBirdObjects2.length = 0;
gdjs.preCode.GDFatBirdObjects3.length = 0;
gdjs.preCode.GDFatBirdObjects4.length = 0;
gdjs.preCode.GDChickenObjects1.length = 0;
gdjs.preCode.GDChickenObjects2.length = 0;
gdjs.preCode.GDChickenObjects3.length = 0;
gdjs.preCode.GDChickenObjects4.length = 0;
gdjs.preCode.GDHollyObjects1.length = 0;
gdjs.preCode.GDHollyObjects2.length = 0;
gdjs.preCode.GDHollyObjects3.length = 0;
gdjs.preCode.GDHollyObjects4.length = 0;
gdjs.preCode.GDairwallObjects1.length = 0;
gdjs.preCode.GDairwallObjects2.length = 0;
gdjs.preCode.GDairwallObjects3.length = 0;
gdjs.preCode.GDairwallObjects4.length = 0;
gdjs.preCode.GDTimerTextObjects1.length = 0;
gdjs.preCode.GDTimerTextObjects2.length = 0;
gdjs.preCode.GDTimerTextObjects3.length = 0;
gdjs.preCode.GDTimerTextObjects4.length = 0;
gdjs.preCode.GDtouchObjects1.length = 0;
gdjs.preCode.GDtouchObjects2.length = 0;
gdjs.preCode.GDtouchObjects3.length = 0;
gdjs.preCode.GDtouchObjects4.length = 0;
gdjs.preCode.GDtrytouchObjects1.length = 0;
gdjs.preCode.GDtrytouchObjects2.length = 0;
gdjs.preCode.GDtrytouchObjects3.length = 0;
gdjs.preCode.GDtrytouchObjects4.length = 0;
gdjs.preCode.GDTrygrabObjects1.length = 0;
gdjs.preCode.GDTrygrabObjects2.length = 0;
gdjs.preCode.GDTrygrabObjects3.length = 0;
gdjs.preCode.GDTrygrabObjects4.length = 0;
gdjs.preCode.GDdoorObjects1.length = 0;
gdjs.preCode.GDdoorObjects2.length = 0;
gdjs.preCode.GDdoorObjects3.length = 0;
gdjs.preCode.GDdoorObjects4.length = 0;
gdjs.preCode.GDNewTextObjects1.length = 0;
gdjs.preCode.GDNewTextObjects2.length = 0;
gdjs.preCode.GDNewTextObjects3.length = 0;
gdjs.preCode.GDNewTextObjects4.length = 0;

gdjs.preCode.eventsList6(runtimeScene);
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects1.length = 0;
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects2.length = 0;
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects3.length = 0;
gdjs.preCode.GDPixelPlatformerFarmExpansion18x18Objects4.length = 0;
gdjs.preCode.GDTwiggyObjects1.length = 0;
gdjs.preCode.GDTwiggyObjects2.length = 0;
gdjs.preCode.GDTwiggyObjects3.length = 0;
gdjs.preCode.GDTwiggyObjects4.length = 0;
gdjs.preCode.GDDuckObjects1.length = 0;
gdjs.preCode.GDDuckObjects2.length = 0;
gdjs.preCode.GDDuckObjects3.length = 0;
gdjs.preCode.GDDuckObjects4.length = 0;
gdjs.preCode.GDFatBirdObjects1.length = 0;
gdjs.preCode.GDFatBirdObjects2.length = 0;
gdjs.preCode.GDFatBirdObjects3.length = 0;
gdjs.preCode.GDFatBirdObjects4.length = 0;
gdjs.preCode.GDChickenObjects1.length = 0;
gdjs.preCode.GDChickenObjects2.length = 0;
gdjs.preCode.GDChickenObjects3.length = 0;
gdjs.preCode.GDChickenObjects4.length = 0;
gdjs.preCode.GDHollyObjects1.length = 0;
gdjs.preCode.GDHollyObjects2.length = 0;
gdjs.preCode.GDHollyObjects3.length = 0;
gdjs.preCode.GDHollyObjects4.length = 0;
gdjs.preCode.GDairwallObjects1.length = 0;
gdjs.preCode.GDairwallObjects2.length = 0;
gdjs.preCode.GDairwallObjects3.length = 0;
gdjs.preCode.GDairwallObjects4.length = 0;
gdjs.preCode.GDTimerTextObjects1.length = 0;
gdjs.preCode.GDTimerTextObjects2.length = 0;
gdjs.preCode.GDTimerTextObjects3.length = 0;
gdjs.preCode.GDTimerTextObjects4.length = 0;
gdjs.preCode.GDtouchObjects1.length = 0;
gdjs.preCode.GDtouchObjects2.length = 0;
gdjs.preCode.GDtouchObjects3.length = 0;
gdjs.preCode.GDtouchObjects4.length = 0;
gdjs.preCode.GDtrytouchObjects1.length = 0;
gdjs.preCode.GDtrytouchObjects2.length = 0;
gdjs.preCode.GDtrytouchObjects3.length = 0;
gdjs.preCode.GDtrytouchObjects4.length = 0;
gdjs.preCode.GDTrygrabObjects1.length = 0;
gdjs.preCode.GDTrygrabObjects2.length = 0;
gdjs.preCode.GDTrygrabObjects3.length = 0;
gdjs.preCode.GDTrygrabObjects4.length = 0;
gdjs.preCode.GDdoorObjects1.length = 0;
gdjs.preCode.GDdoorObjects2.length = 0;
gdjs.preCode.GDdoorObjects3.length = 0;
gdjs.preCode.GDdoorObjects4.length = 0;
gdjs.preCode.GDNewTextObjects1.length = 0;
gdjs.preCode.GDNewTextObjects2.length = 0;
gdjs.preCode.GDNewTextObjects3.length = 0;
gdjs.preCode.GDNewTextObjects4.length = 0;


return;

}

gdjs['preCode'] = gdjs.preCode;
