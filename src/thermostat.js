'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_LIMIT = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.DEFAULT = 20;
  this.powerSavingMode = true;
  this.MID_USAGE = 18;
  this.MAX_USAGE = 25;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature +=1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -=1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MIN_LIMIT;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switch = function() {
  return this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.backToTwenty = function() {
  this.temperature = this.DEFAULT
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < this.MID_USAGE) {
  return 'low usage'
  }
  if (this.temperature <= this.MAX_USAGE && this.temperature >= this.MID_USAGE) {
  return 'medium usage'
  }
  return 'high usage';
};
