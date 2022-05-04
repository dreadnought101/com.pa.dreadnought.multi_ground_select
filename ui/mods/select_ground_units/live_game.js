
 model.select_ground_units_on_screen_1 = input.doubleTap(function () {
    api.select.onScreenWithTypeFilter(model.currentFocusPlanetId(), 'Tank', 'Bot');
  }, function () {
    api.select.onPlanetWithTypeFilter(model.currentFocusPlanetId(), 'Tank', 'Bot');
  })
  
  model.select_ground_units_on_screen_2 = input.doubleTap(function () {
    api.select.onScreenWithTypeFilter(model.currentFocusPlanetId(), 'Tank', 'Bot');
  }, function () {
    api.select.onPlanetWithTypeFilter(model.currentFocusPlanetId(), 'Tank', 'Bot');
  })
  
  
  model.select_ground_units_on_screen_3 = input.doubleTap(function () {
    api.select.onScreenWithTypeFilter(model.currentFocusPlanetId(), 'Tank', 'Bot','Ground');
  }, function () {
    api.select.onPlanetWithTypeFilter(model.currentFocusPlanetId(), 'Tank', 'Bot','Ground');
  })
  
  api.Panel.message('', 'inputmap.reload');
  
  //  api.select.allLandCombatUnitsOnScreen()
	
