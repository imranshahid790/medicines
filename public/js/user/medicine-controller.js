app.controller('MedicineCtrl', function($scope,$http) 
{
  $scope.medicine = {
    medicineName: null,
    companyName: null,
    price: null,
    batchNo: null,
    expDate: null,
    quantity: null,
  }

 
  $scope.cart = {};
  $scope.cart = [];

  
  $scope.addLocation = () => 
  {
    $scope.cart.push({
      medicineName: $scope.medicine.medicineName,
      companyName: $scope.medicine.companyName,
      price: $scope.medicine.price,
      quantity: $scope.medicine.quantity,
      batchNo: $scope.medicine.batchNo,
      expDate: $scope.medicine.expDate,
    });
   
    
    console.log($scope.cart);
   
  }

 
// $scope.save=function(medicine)
// {
//     console.log("hi")
//     var data = medicine;

//         method = 'POST';
//         url = '/medicine';
    
//     $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
//     then(function(response)
//     {
//         $scope.status = response.status;
//         $scope.data = response.data;
//         alert('Medicine');
//     }, function(response) 
//     {
//     $scope.data = response.data || 'Request failed';
//     $scope.status = response.status;
//     alert('error Medicine');
// });
// }  
$scope.fetch=function(medicine)
{
    // search find by name
        var data = medicine;
  
     
        method = 'GET';
        url = '/medicine/' + data.medicineName;
    
    $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
    then(function(response)
    {
        $scope.status = response.status;
        $scope.data = response.data.result;
    }, function(response) 
    {
    $scope.data = response.data || 'Request failed';
    $scope.status = response.status;
    alert('error Medicine');
});
}  
$scope.inc = function(medicine)
 {
     console.log('ads');
     medicine.price = medicine.quantity * medicine.price;
  }

 

$scope.save=function(cart)
{
      alert(JSON.stringify(cart));
    var data = cart;
         method = 'POST';
        url = '/cart';

    $http({method: method, url: url,data : data,headers: {'Content-Type': 'application/json'}}).
    then(function(response)
    {
        $scope.status = response.status;
        $scope.data = response.data;
        alert('data successfull ');
    }, function(response) 
    {
    $scope.data = response.data || 'Request failed';
    $scope.status = response.status;
    alert('error Medicine');
});
}  
});