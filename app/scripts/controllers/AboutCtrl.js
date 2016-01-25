
/**
 * Created by krisztinavajda on 25/01/16.
 */

'use strict';

app.controller('AboutCtrl', function($scope, AboutService) {

  $scope.facts = AboutService.facts;

});
