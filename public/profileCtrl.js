angular.module('userProfiles')
    .controller('profileCtrl', function($scope, friendService) {
        // FIX ME - assign values to $scope.currentUser and $scope.friends
        $scope.getFriends = function() {
            friendService.getFriends().then(function(response) {
                $scope.currentUser = response.currentUser;
                $scope.friends = response.friends;
            })
        }

        $scope.getFriends();
    });