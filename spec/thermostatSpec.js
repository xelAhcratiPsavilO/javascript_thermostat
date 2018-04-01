'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature by one degree', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature by one degree', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum limit of 10 degrees', function() {
    for (var i=0; i<11; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('checks that the temperature is at its minimum', function() {
    for (var i=0; i<10; i++) {
      thermostat.down()
    }
    expect(thermostat.isMinimumTemperature()).toBe(true);
  });

  it('checks that the temperature is no at its minimum', function() {
    for (var i=0; i<9; i++) {
      thermostat.down()
    }
    expect(thermostat.isMinimumTemperature()).toBe(false);
  });

  it('has a power saving mode activated by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('switches the mode of the power saving', function() {
    thermostat.switch();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('switches the mode of the power saving twice', function() {
    thermostat.switch();
    thermostat.switch();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('if power saving mode is on', function() {
    it('the temperature never goes beyond 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  it('checks that the temperature is at its maximum when PMS on', function() {
    for (var i=0; i<5; i++) {
      thermostat.up()
    }
    expect(thermostat.isMaximumTemperature()).toBe(true);
  });

  it('checks that the temperature is no at its maximum when PMS on', function() {
    for (var i=0; i<4; i++) {
      thermostat.up()
    }
    expect(thermostat.isMaximumTemperature()).toBe(false);
  });

  it('checks that the temperature is at its maximum when PMS off', function() {
    thermostat.switch();
    for (var i=0; i<12; i++) {
      thermostat.up()
    }
    expect(thermostat.isMaximumTemperature()).toBe(true);
  });

  it('checks that the temperature is no at its maximum when PMS off', function() {
    thermostat.switch();
    for (var i=0; i<11; i++) {
      thermostat.up()
    }
    expect(thermostat.isMaximumTemperature()).toBe(false);
  });

  describe('if power saving mode is off', function() {
    it('the temperature never goes beyond 32 degrees', function() {
      thermostat.switch();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

});
