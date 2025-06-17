gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects1= [];
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects2= [];
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects3= [];
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects4= [];
gdjs.mainCode.GDkidObjects1= [];
gdjs.mainCode.GDkidObjects2= [];
gdjs.mainCode.GDkidObjects3= [];
gdjs.mainCode.GDkidObjects4= [];
gdjs.mainCode.GDplayerObjects1= [];
gdjs.mainCode.GDplayerObjects2= [];
gdjs.mainCode.GDplayerObjects3= [];
gdjs.mainCode.GDplayerObjects4= [];
gdjs.mainCode.GDcarrotObjects1= [];
gdjs.mainCode.GDcarrotObjects2= [];
gdjs.mainCode.GDcarrotObjects3= [];
gdjs.mainCode.GDcarrotObjects4= [];
gdjs.mainCode.GDlandObjects1= [];
gdjs.mainCode.GDlandObjects2= [];
gdjs.mainCode.GDlandObjects3= [];
gdjs.mainCode.GDlandObjects4= [];
gdjs.mainCode.GDcarrot_9595sproutObjects1= [];
gdjs.mainCode.GDcarrot_9595sproutObjects2= [];
gdjs.mainCode.GDcarrot_9595sproutObjects3= [];
gdjs.mainCode.GDcarrot_9595sproutObjects4= [];
gdjs.mainCode.GDcarrot_9595growObjects1= [];
gdjs.mainCode.GDcarrot_9595growObjects2= [];
gdjs.mainCode.GDcarrot_9595growObjects3= [];
gdjs.mainCode.GDcarrot_9595growObjects4= [];
gdjs.mainCode.GDcarrot_9595matureObjects1= [];
gdjs.mainCode.GDcarrot_9595matureObjects2= [];
gdjs.mainCode.GDcarrot_9595matureObjects3= [];
gdjs.mainCode.GDcarrot_9595matureObjects4= [];
gdjs.mainCode.GDchickenObjects1= [];
gdjs.mainCode.GDchickenObjects2= [];
gdjs.mainCode.GDchickenObjects3= [];
gdjs.mainCode.GDchickenObjects4= [];
gdjs.mainCode.GDAirWallObjects1= [];
gdjs.mainCode.GDAirWallObjects2= [];
gdjs.mainCode.GDAirWallObjects3= [];
gdjs.mainCode.GDAirWallObjects4= [];
gdjs.mainCode.GDtomatoObjects1= [];
gdjs.mainCode.GDtomatoObjects2= [];
gdjs.mainCode.GDtomatoObjects3= [];
gdjs.mainCode.GDtomatoObjects4= [];
gdjs.mainCode.GDNewTextObjects1= [];
gdjs.mainCode.GDNewTextObjects2= [];
gdjs.mainCode.GDNewTextObjects3= [];
gdjs.mainCode.GDNewTextObjects4= [];
gdjs.mainCode.GDNewSpriteObjects1= [];
gdjs.mainCode.GDNewSpriteObjects2= [];
gdjs.mainCode.GDNewSpriteObjects3= [];
gdjs.mainCode.GDNewSpriteObjects4= [];
gdjs.mainCode.GDcarefulObjects1= [];
gdjs.mainCode.GDcarefulObjects2= [];
gdjs.mainCode.GDcarefulObjects3= [];
gdjs.mainCode.GDcarefulObjects4= [];
gdjs.mainCode.GDbackObjects1= [];
gdjs.mainCode.GDbackObjects2= [];
gdjs.mainCode.GDbackObjects3= [];
gdjs.mainCode.GDbackObjects4= [];


gdjs.mainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.mainCode.GDplayerObjects2, gdjs.mainCode.GDplayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayerObjects3[k] = gdjs.mainCode.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayerObjects3 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects3.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects3[i].setAnimationName("Running");
}
}}

}


{

/* Reuse gdjs.mainCode.GDplayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayerObjects2[k] = gdjs.mainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].setAnimationName("Jumping");
}
}}

}


};gdjs.mainCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayerObjects2[k] = gdjs.mainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects2.length;i<l;++i) {
    if ( !(gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayerObjects2[k] = gdjs.mainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayerObjects2[k] = gdjs.mainCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12879868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayerObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayerObjects1[k] = gdjs.mainCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12880644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].flipX(false);
}
}}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects2Objects = Hashtable.newFrom({"land": gdjs.mainCode.GDlandObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcarrot_95959595sproutObjects2Objects = Hashtable.newFrom({"carrot_sprout": gdjs.mainCode.GDcarrot_9595sproutObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcarrot_95959595sproutObjects2Objects = Hashtable.newFrom({"carrot_sprout": gdjs.mainCode.GDcarrot_9595sproutObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects2Objects = Hashtable.newFrom({"land": gdjs.mainCode.GDlandObjects2});
gdjs.mainCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("land"), gdjs.mainCode.GDlandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDlandObjects2 */
gdjs.mainCode.GDcarrot_9595sproutObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcarrot_95959595sproutObjects2Objects, (( gdjs.mainCode.GDlandObjects2.length === 0 ) ? 0 :gdjs.mainCode.GDlandObjects2[0].getX()), (( gdjs.mainCode.GDlandObjects2.length === 0 ) ? 0 :gdjs.mainCode.GDlandObjects2[0].getY()) - 20, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SeedGrowthTimer") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carrot_sprout"), gdjs.mainCode.GDcarrot_9595sproutObjects2);
{for(var i = 0, len = gdjs.mainCode.GDcarrot_9595sproutObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDcarrot_9595sproutObjects2[i].returnVariable(gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getVariables().getFromIndex(1)).add(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SeedGrowthTimer");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("carrot_sprout"), gdjs.mainCode.GDcarrot_9595sproutObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDcarrot_9595sproutObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getVariableNumber(gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getVariables().getFromIndex(1)) >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDcarrot_9595sproutObjects2[k] = gdjs.mainCode.GDcarrot_9595sproutObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDcarrot_9595sproutObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.mainCode.GDNewTextObjects2);
/* Reuse gdjs.mainCode.GDcarrot_9595sproutObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDcarrot_9595sproutObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getBehavior("Animation").setAnimationName("grow2");
}
}{for(var i = 0, len = gdjs.mainCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDNewTextObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GrowthTimer") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carrot_grow"), gdjs.mainCode.GDcarrot_9595growObjects2);
{for(var i = 0, len = gdjs.mainCode.GDcarrot_9595growObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDcarrot_9595growObjects2[i].returnVariable(gdjs.mainCode.GDcarrot_9595growObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("carrot_sprout"), gdjs.mainCode.GDcarrot_9595sproutObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDcarrot_9595sproutObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getVariableNumber(gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getVariables().getFromIndex(1)) >= 10 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDcarrot_9595sproutObjects2[k] = gdjs.mainCode.GDcarrot_9595sproutObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDcarrot_9595sproutObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDcarrot_9595sproutObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDcarrot_9595sproutObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDcarrot_9595sproutObjects2[i].getBehavior("Animation").setAnimationName("grow3");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("carrot_sprout"), gdjs.mainCode.GDcarrot_9595sproutObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDcarrot_95959595sproutObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDcarrot_9595sproutObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDcarrot_9595sproutObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDcarrot_9595sproutObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("land"), gdjs.mainCode.GDlandObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects2Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects2Objects, 200, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("carrot_sprout"), gdjs.mainCode.GDcarrot_9595sproutObjects2);
{for(var i = 0, len = gdjs.mainCode.GDcarrot_9595sproutObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDcarrot_9595sproutObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDchickenObjects1Objects = Hashtable.newFrom({"chicken": gdjs.mainCode.GDchickenObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDAirWallObjects1Objects = Hashtable.newFrom({"AirWall": gdjs.mainCode.GDAirWallObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDchickenObjects2Objects = Hashtable.newFrom({"chicken": gdjs.mainCode.GDchickenObjects2});
gdjs.mainCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDchickenObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDchickenObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects2[i].returnVariable(gdjs.mainCode.GDchickenObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDchickenObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDchickenObjects2[i].getVariableBoolean(gdjs.mainCode.GDchickenObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDchickenObjects2[k] = gdjs.mainCode.GDchickenObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDchickenObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDchickenObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{for(var i = 0, len = gdjs.mainCode.GDchickenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects1[i].returnVariable(gdjs.mainCode.GDchickenObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects2Objects = Hashtable.newFrom({"land": gdjs.mainCode.GDlandObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDtomatoObjects2Objects = Hashtable.newFrom({"tomato": gdjs.mainCode.GDtomatoObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDtomatoObjects2Objects = Hashtable.newFrom({"tomato": gdjs.mainCode.GDtomatoObjects2});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects1Objects = Hashtable.newFrom({"land": gdjs.mainCode.GDlandObjects1});
gdjs.mainCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("land"), gdjs.mainCode.GDlandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDlandObjects2 */
gdjs.mainCode.GDtomatoObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDtomatoObjects2Objects, (( gdjs.mainCode.GDlandObjects2.length === 0 ) ? 0 :gdjs.mainCode.GDlandObjects2[0].getX()) + 10, (( gdjs.mainCode.GDlandObjects2.length === 0 ) ? 0 :gdjs.mainCode.GDlandObjects2[0].getY()) - 20, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TomatoGrowthTimer") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tomato"), gdjs.mainCode.GDtomatoObjects2);
{for(var i = 0, len = gdjs.mainCode.GDtomatoObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtomatoObjects2[i].returnVariable(gdjs.mainCode.GDtomatoObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TomatoGrowthTimer");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("tomato"), gdjs.mainCode.GDtomatoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDtomatoObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDtomatoObjects2[i].getVariableNumber(gdjs.mainCode.GDtomatoObjects2[i].getVariables().getFromIndex(0)) >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDtomatoObjects2[k] = gdjs.mainCode.GDtomatoObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDtomatoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDtomatoObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDtomatoObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtomatoObjects2[i].getBehavior("Animation").setAnimationName("grow2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TomatoGrowthTimer") > 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tomato"), gdjs.mainCode.GDtomatoObjects2);
{for(var i = 0, len = gdjs.mainCode.GDtomatoObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtomatoObjects2[i].returnVariable(gdjs.mainCode.GDtomatoObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("tomato"), gdjs.mainCode.GDtomatoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDtomatoObjects2.length;i<l;++i) {
    if ( gdjs.mainCode.GDtomatoObjects2[i].getVariableNumber(gdjs.mainCode.GDtomatoObjects2[i].getVariables().getFromIndex(0)) >= 10 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDtomatoObjects2[k] = gdjs.mainCode.GDtomatoObjects2[i];
        ++k;
    }
}
gdjs.mainCode.GDtomatoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDtomatoObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDtomatoObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtomatoObjects2[i].getBehavior("Animation").setAnimationName("grow3");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tomato"), gdjs.mainCode.GDtomatoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDtomatoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDtomatoObjects2 */
{for(var i = 0, len = gdjs.mainCode.GDtomatoObjects2.length ;i < len;++i) {
    gdjs.mainCode.GDtomatoObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("land"), gdjs.mainCode.GDlandObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDlandObjects1Objects, 200, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("tomato"), gdjs.mainCode.GDtomatoObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtomatoObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtomatoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.mainCode.GDNewSpriteObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.mainCode.GDNewSpriteObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.mainCode.GDbackObjects1});
gdjs.mainCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects1);
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects1[i].addForce(50, 0, 0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SeedGrowthTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "chickenMove");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TomatoGrowthTimer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "7ab01ec2e4e637121ac1863295ff39cb9093aaca57d5e4cc635406a1f98677f5_02 - it is dangerous to be lonely without a sword (chiptune).aac", true, 50, 1);
}{for(var i = 0, len = gdjs.mainCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mainCode.GDplayerObjects1.length !== 0 ? gdjs.mainCode.GDplayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


{



}


{


gdjs.mainCode.eventsList1(runtimeScene);
}


{


gdjs.mainCode.eventsList2(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "chickenMove") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects1);
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects1[i].returnVariable(gdjs.mainCode.GDchickenObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDchickenObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDchickenObjects1[i].getVariableNumber(gdjs.mainCode.GDchickenObjects1[i].getVariables().getFromIndex(0)) >= 10 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDchickenObjects1[k] = gdjs.mainCode.GDchickenObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDchickenObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDchickenObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects1[i].addForceTowardPosition(10, 1, 50, 0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects1);
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("AirWall"), gdjs.mainCode.GDAirWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("chicken"), gdjs.mainCode.GDchickenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDchickenObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDAirWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDchickenObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDchickenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDchickenObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mainCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.mainCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "pre", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDNewSpriteObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDNewSpriteObjects1[k] = gdjs.mainCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.mainCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects1.length = 0;
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects2.length = 0;
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects3.length = 0;
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects4.length = 0;
gdjs.mainCode.GDkidObjects1.length = 0;
gdjs.mainCode.GDkidObjects2.length = 0;
gdjs.mainCode.GDkidObjects3.length = 0;
gdjs.mainCode.GDkidObjects4.length = 0;
gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDplayerObjects3.length = 0;
gdjs.mainCode.GDplayerObjects4.length = 0;
gdjs.mainCode.GDcarrotObjects1.length = 0;
gdjs.mainCode.GDcarrotObjects2.length = 0;
gdjs.mainCode.GDcarrotObjects3.length = 0;
gdjs.mainCode.GDcarrotObjects4.length = 0;
gdjs.mainCode.GDlandObjects1.length = 0;
gdjs.mainCode.GDlandObjects2.length = 0;
gdjs.mainCode.GDlandObjects3.length = 0;
gdjs.mainCode.GDlandObjects4.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects1.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects2.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects3.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects4.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects1.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects2.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects3.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects4.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects1.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects2.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects3.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects4.length = 0;
gdjs.mainCode.GDchickenObjects1.length = 0;
gdjs.mainCode.GDchickenObjects2.length = 0;
gdjs.mainCode.GDchickenObjects3.length = 0;
gdjs.mainCode.GDchickenObjects4.length = 0;
gdjs.mainCode.GDAirWallObjects1.length = 0;
gdjs.mainCode.GDAirWallObjects2.length = 0;
gdjs.mainCode.GDAirWallObjects3.length = 0;
gdjs.mainCode.GDAirWallObjects4.length = 0;
gdjs.mainCode.GDtomatoObjects1.length = 0;
gdjs.mainCode.GDtomatoObjects2.length = 0;
gdjs.mainCode.GDtomatoObjects3.length = 0;
gdjs.mainCode.GDtomatoObjects4.length = 0;
gdjs.mainCode.GDNewTextObjects1.length = 0;
gdjs.mainCode.GDNewTextObjects2.length = 0;
gdjs.mainCode.GDNewTextObjects3.length = 0;
gdjs.mainCode.GDNewTextObjects4.length = 0;
gdjs.mainCode.GDNewSpriteObjects1.length = 0;
gdjs.mainCode.GDNewSpriteObjects2.length = 0;
gdjs.mainCode.GDNewSpriteObjects3.length = 0;
gdjs.mainCode.GDNewSpriteObjects4.length = 0;
gdjs.mainCode.GDcarefulObjects1.length = 0;
gdjs.mainCode.GDcarefulObjects2.length = 0;
gdjs.mainCode.GDcarefulObjects3.length = 0;
gdjs.mainCode.GDcarefulObjects4.length = 0;
gdjs.mainCode.GDbackObjects1.length = 0;
gdjs.mainCode.GDbackObjects2.length = 0;
gdjs.mainCode.GDbackObjects3.length = 0;
gdjs.mainCode.GDbackObjects4.length = 0;

gdjs.mainCode.eventsList5(runtimeScene);
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects1.length = 0;
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects2.length = 0;
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects3.length = 0;
gdjs.mainCode.GDPixelPlatformerFarmExpansionObjects4.length = 0;
gdjs.mainCode.GDkidObjects1.length = 0;
gdjs.mainCode.GDkidObjects2.length = 0;
gdjs.mainCode.GDkidObjects3.length = 0;
gdjs.mainCode.GDkidObjects4.length = 0;
gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDplayerObjects3.length = 0;
gdjs.mainCode.GDplayerObjects4.length = 0;
gdjs.mainCode.GDcarrotObjects1.length = 0;
gdjs.mainCode.GDcarrotObjects2.length = 0;
gdjs.mainCode.GDcarrotObjects3.length = 0;
gdjs.mainCode.GDcarrotObjects4.length = 0;
gdjs.mainCode.GDlandObjects1.length = 0;
gdjs.mainCode.GDlandObjects2.length = 0;
gdjs.mainCode.GDlandObjects3.length = 0;
gdjs.mainCode.GDlandObjects4.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects1.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects2.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects3.length = 0;
gdjs.mainCode.GDcarrot_9595sproutObjects4.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects1.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects2.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects3.length = 0;
gdjs.mainCode.GDcarrot_9595growObjects4.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects1.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects2.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects3.length = 0;
gdjs.mainCode.GDcarrot_9595matureObjects4.length = 0;
gdjs.mainCode.GDchickenObjects1.length = 0;
gdjs.mainCode.GDchickenObjects2.length = 0;
gdjs.mainCode.GDchickenObjects3.length = 0;
gdjs.mainCode.GDchickenObjects4.length = 0;
gdjs.mainCode.GDAirWallObjects1.length = 0;
gdjs.mainCode.GDAirWallObjects2.length = 0;
gdjs.mainCode.GDAirWallObjects3.length = 0;
gdjs.mainCode.GDAirWallObjects4.length = 0;
gdjs.mainCode.GDtomatoObjects1.length = 0;
gdjs.mainCode.GDtomatoObjects2.length = 0;
gdjs.mainCode.GDtomatoObjects3.length = 0;
gdjs.mainCode.GDtomatoObjects4.length = 0;
gdjs.mainCode.GDNewTextObjects1.length = 0;
gdjs.mainCode.GDNewTextObjects2.length = 0;
gdjs.mainCode.GDNewTextObjects3.length = 0;
gdjs.mainCode.GDNewTextObjects4.length = 0;
gdjs.mainCode.GDNewSpriteObjects1.length = 0;
gdjs.mainCode.GDNewSpriteObjects2.length = 0;
gdjs.mainCode.GDNewSpriteObjects3.length = 0;
gdjs.mainCode.GDNewSpriteObjects4.length = 0;
gdjs.mainCode.GDcarefulObjects1.length = 0;
gdjs.mainCode.GDcarefulObjects2.length = 0;
gdjs.mainCode.GDcarefulObjects3.length = 0;
gdjs.mainCode.GDcarefulObjects4.length = 0;
gdjs.mainCode.GDbackObjects1.length = 0;
gdjs.mainCode.GDbackObjects2.length = 0;
gdjs.mainCode.GDbackObjects3.length = 0;
gdjs.mainCode.GDbackObjects4.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
