(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$location', 'CustomerRepository'];

    function HomeCtrl($scope, $location, CustomerRepository) {
        $scope.title = 'Clientes cadastrados';
        $scope.customers = [];
        
        LoadCustomers();

        function LoadCustomers() {
            var promise = CustomerRepository.getAllCustomers();

            promise.then(
               function (result) {
                   $scope.customers = result.data;
               },
               function (error) {
                   console.log(error);
               });
        }
    }
})();
