var app = angular.module("lindasPage", ["firebase", "ui.router"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/home.html'
   });

    $stateProvider.state('photos', {
     url: '/projects',
     controller: 'Photo.controller',
     templateUrl: '/templates/photos.html'
   });

    $stateProvider.state('about', {
     url: '/about',
     controller: 'Main.controller',
     templateUrl: '/templates/about.html'
   });

    $stateProvider.state('projectOne', {
     url: '/project1',
     controller: 'Photo.controller',
     templateUrl: '/templates/projectOne.html'
   });

    $stateProvider.state('projectTwo', {
     url: '/project2',
     controller: 'Photo.controller',
     templateUrl: '/templates/projectTwo.html'
   });

    $stateProvider.state('projectThree', {
     url: '/project3',
     controller: 'Photo.controller',
     templateUrl: '/templates/projectThree.html'
   });

    $stateProvider.state('projectFour', {
     url: '/project4',
     controller: 'Photo.controller',
     templateUrl: '/templates/projectFour.html'
   });
 }]);

// home controller
app.controller('Main.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $interval){
  var ref = new Firebase("kents-page.firebaseIO.com");


}]);

app.controller('Photo.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
  var ref = new Firebase("kents-page.firebaseIO.com");

  $scope.images = [
      {
        'small': "/images/RSCN1190.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "/images/RSCN1189.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/DSCN1168.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/DSCN1173.jpg",
        'url': "images/kent_elvis.jpg",
        'desc': "photo",
        'caption': "Elvis Presley"
      },
      {
        'small': "/images/DSCN1180.jpg",
        'url': "/images/gangbusters.jpg",
        'desc': "photo",
        'caption': "Gangbusters"
      },
      {
        'small': "/images/DSCN1181.jpg",
        'url': "/images/kent_rick.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/RSCN1192.jpg",
        'url': "images/hitz_girls.jpg",
        'desc': "photo",
        'caption': "Hitz Girls of the 60's"
      },
      {
        'small': "images/hitz_1_thumb.jpg",
        'url': "images/hitz_1.jpg",
        'desc': "photo",
        'caption': "Hitz Stars"
      },
      {
        'small': "images/hitz_costume_thumb.jpg",
        'url': "images/hitz_costume.jpg",
        'desc': "photo",
        'caption': "Hitz - Paul Revere and the Raiders"
      },
      {
        'small': "images/elvis_thumb.jpg",
        'url': "images/elvis.jpg",
        'desc': "photo",
        'caption': "Elvis Presley"
      },
      {
        'small': "/images/hitz_costume2_thumb.jpg",
        'url': "/images/hitz_costume2.jpg",
        'desc': "photo",
        'caption': "Hitz presents the Monkeys"
      },
      {
        'small': "/images/hitz_costume4_thumb.jpg",
        'url': "/images/hitz_costume4.jpg",
        'desc': "photo",
        'caption': "Hitz presents the Beatles"
      },
      {
        'small': "images/hitz_costume5_thumb.jpg",
        'url': "images/hitz_costume5.jpg",
        'desc': "photo",
        'caption': "Hitz present the Beach Boys"
      },
      {
        'small': "/images/kent_wedding_thumb.jpg",
        'url': "/images/kent_wedding_yellow.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "/images/kent_applebees_thumb.jpg",
        'url': "/images/kent_applebees.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "/images/kent_bar_thumb.jpg",
        'url': "/images/kent_bar.jpg",
        'desc': "photo",
        'caption': "Applebees"
      },
      {
        'small': "images/kent_bride_thumb.jpg",
        'url': "images/kent_bride.jpg",
        'desc': "photo",
        'caption': "Applebees"
      },
      {
        'small': "images/kent_fan_thumb.jpg",
        'url': "images/kent_fan.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/kent_outdoors_thumb.jpg",
        'url': "images/kent_outdoors.jpg",
        'desc': "photo",
        'caption': ""
      },
      {
        'small': "images/kent_outdoors2_thumb.jpg",
        'url': "images/kent_outdoors2.jpg",
        'desc': "photo",
        'caption': ""
      },
    ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
}]);


 

