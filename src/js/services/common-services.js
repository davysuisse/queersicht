(function(){
	'use strict';

	angular.module('Queersicht.services')
	.factory('CommonService', commonService);

    commonService.$inject = ['$window', '$state', '$rootScope', '$http'];
	function commonService($window, $state, $rootScope, $http){
        var service = {
	        addFavoris : addFavoris,
            deleteFavoris : deleteFavoris,
	        isInFavoris : isInFavoris,
	        getFavoris : getFavoris,
	        setFavoris : setFavoris,
	        initTitle : initTitle,
	        goDetail : goDetail,
	        getDetail : getDetail,
	        getProgramPerMovie : getProgramPerMovie,
	        getProgramPerCinema : getProgramPerCinema,
	        getProgramPerDate : getProgramPerDate,
	        getDetailMock : getDetailMock
	    }

		return service;

		function addFavoris(movieToAdd) {
            var favoris = this.getFavoris();
            if(favoris.indexOf(movieToAdd.id) < 0){
                favoris.push(movieToAdd.id);
                $window.localStorage.setItem("favoris", JSON.stringify(favoris));
            }
		}

        function deleteFavoris(movieToDelete) {
            var favoris = this.getFavoris();
            var idx = favoris.indexOf(movieToDelete.id);
            if(idx > -1){
                favoris.splice(idx, 1);
                this.setFavoris(favoris);
            }
        }

        function isInFavoris(movie) {
            var favoris = this.getFavoris();
            for(var i in favoris){
                if(angular.equals('' + favoris[i], '' + movie.id)){
                    return true;
                }
            }
            return false;
        }

        function getFavoris(){
            return JSON.parse($window.localStorage.getItem('favoris') || '[]');
        }

        function setFavoris(favoris){
            $window.localStorage.setItem("favoris", JSON.stringify(favoris));
        }

        function initTitle(myTitle){
            $rootScope.$broadcast('menu-title', { title : myTitle });
        }

        function goDetail(movieId){
            $state.go('detail', {id: movieId});
        }

        function getDetail(id){
            return $http.get('/queersicht/webservice/movies/' + id);
        }

        function getProgramPerMovie(){
            return $http.get('/queersicht/webservice/programs/movies');
        }

        function getProgramPerCinema(){
            return $http.get('/queersicht/webservice/programs/cinemas');
        }

        function getProgramPerDate(){
            return $http.get('/queersicht/webservice/programs/dates');
        }

        // TO DELETE
        function getDetailMock(){
            return { id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', text : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers mit einem furiosen A-Cappella-Auftritt gewonnen haben. Mittlerweile sind Fat Amy (Rebel Wilson) und Beca (Anna Kendrick) in den letzten Zügen ihres Studiums an der Barden Universität und bereiten sich darauf vor, schon bald in der Berufswelt Fuß zu fassen – Beca verbringt außerdem viel Zeit mit ihrem neuen Freund Jesse (Skylar Astin). Und so ist allen in der Gesangsgruppe klar, dass sie bald getrennte Wege gehen müssen. Aber wie soll es da mit der gemeinsamen Freundschaft weitergehen? Diese Frage stellen sich alle Barden Bellas, unter ihnen auch Chloe (Brittany Snow), Stacie (Alexis Knapp), Emily (Hailee Steinfeld) und Lilly Okanakamura (Hana Mae Lee). Angesichts dieses unangenehmen Themas ist den Mädels Ablenkung sehr recht, wie sie in Form der A-Capella-Weltmeisterschaft in Kopenhagen ansteht…', description : {'Time': '21:30', 'Country': 'USA', 'Autor': 'Thomas Vorwerk', 'Duration' : '120', 'Cinema': 'Cinematte'} };
        }
	};
})();