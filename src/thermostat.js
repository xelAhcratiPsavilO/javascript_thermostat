'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature +=1;
  return this.temperature;
};

Thermostat.prototype.down = function() {
  this.temperature -=1;
  return this.temperature;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};
