//=============================================================================
// AndrewX - OverpassEventFix
// AndrewX_OverpassEventFix.js
//=============================================================================
var AndrewX = AndrewX || {};
AndrewX.OEF = AndrewX.OEF || {};
//=============================================================================
/*:
 * @plugindesc v0.10 Fix collision check and initial layers for events when  
 * using OverpassTile.js.
 * @author AndrewX
 *
 * 
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * 
 *
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 0.01:
 * - Finished prototype
 *
 * ============================================================================
 * Term of Use
 * ============================================================================
 *
 * Free for use in non-commercial or commercial RMMV projects
 * Please credit AndrewX
 * 
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

AndrewX.OEF.isCollidedWithEvents = Game_CharacterBase.prototype.isCollidedWithEvents;
Game_CharacterBase.prototype.isCollidedWithEvents = function(x, y) {
	var events = $gameMap.eventsXyNt(x, y);
	var chara = this._higherLevel;
	return events.some(function(event) {
		//console.log(event._higherLevel);
		if (!event.isNormalPriority()){
			return false
		}
		if (event._higherLevel===undefined){
			if (chara===true) {
				return false;
			} else {
				return true;
			}
		}
		if (event._higherLevel != chara) {
			return false;
		}
		return true;
	});
};

AndrewX.OEF.refreshBushDepth = Game_CharacterBase.prototype.refreshBushDepth;
Game_CharacterBase.prototype.refreshBushDepth = function() {
    AndrewX.OEF.refreshBushDepth.call(this);
    var regionId = this.regionId();
    if (this._higherLevel===undefined){
    	this._higherLevel = true;
    }
};

Game_CharacterBase.prototype.isCollidedWithCharacters = function(x, y) {
    return false || this.isCollidedWithVehicles(x, y);
};