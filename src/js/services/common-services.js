(function(){
	'use strict';

	angular.module('Queersicht.services')
	.factory('CommonService', commonService);

    /**
    * Get all the common functions that are used in the application [It will be splitted in the future]
    */
    commonService.$inject = ['$window', '$state', '$rootScope', '$http'];
    function commonService($window, $state, $rootScope, $http){
        var service = {
           addFavoris : addFavoris,
           deleteFavoris : deleteFavoris,
           isInFavoris : isInFavoris,
           getFavoris : getFavoris,
           setFavoris : setFavoris,
           initTitle : initTitle,
           lengthMap : lengthMap,
           goDetail : goDetail,
           getDetail : getDetail,
           getProgramPerMovie : getProgramPerMovie,
           getProgramPerCinema : getProgramPerCinema,
           getProgramPerDate : getProgramPerDate,
           getDetailMock : getDetailMock,
           getMovies : getMovies,
           isDefinedAndNotNull : isDefinedAndNotNull
       }

       return service;

        /**
        * @parameter movieToAdd is the movie that we want to add in the localStorage
        */
        function addFavoris(movieToAdd) {
            var favoris = getFavoris();
            if(favoris.indexOf(movieToAdd.id) < 0){
                favoris.push(movieToAdd.id);
                $window.localStorage.setItem("favoris", JSON.stringify(favoris));
            }
        }

        /**
        * Delete a favoris from the localStorage
        * @parameter movieToDelete is the movie that we want to delete
        */
        function deleteFavoris(movieToDelete) {
            var favoris = getFavoris();
            var idx = favoris.indexOf(movieToDelete.id);
            if(idx > -1){
                favoris.splice(idx, 1);
                setFavoris(favoris);
            }
        }

        /**
        * Test if the movie is already in the localStorage
        * @parameter movie
        * return {boolean}
        */
        function isInFavoris(movie) {
            var favoris = getFavoris();
            for(var i in favoris){
                if(angular.equals('' + favoris[i], '' + movie.id)){
                    return true;
                }
            }
            return false;
        }

        /**
        * Get the favoris from the localStorage
        */
        function getFavoris(){
            return JSON.parse($window.localStorage.getItem('favoris') || '[]');
        }

        /**
        * Set favoris in the localStorage
        */
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

        // TODO : TO DELETE
        function getDetailMock(){
            return { id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', text : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers mit einem furiosen A-Cappella-Auftritt gewonnen haben. Mittlerweile sind Fat Amy (Rebel Wilson) und Beca (Anna Kendrick) in den letzten Zügen ihres Studiums an der Barden Universität und bereiten sich darauf vor, schon bald in der Berufswelt Fuß zu fassen – Beca verbringt außerdem viel Zeit mit ihrem neuen Freund Jesse (Skylar Astin). Und so ist allen in der Gesangsgruppe klar, dass sie bald getrennte Wege gehen müssen. Aber wie soll es da mit der gemeinsamen Freundschaft weitergehen? Diese Frage stellen sich alle Barden Bellas, unter ihnen auch Chloe (Brittany Snow), Stacie (Alexis Knapp), Emily (Hailee Steinfeld) und Lilly Okanakamura (Hana Mae Lee). Angesichts dieses unangenehmen Themas ist den Mädels Ablenkung sehr recht, wie sie in Form der A-Capella-Weltmeisterschaft in Kopenhagen ansteht…', description : {'Time': '21:30', 'Country': 'USA', 'Autor': 'Thomas Vorwerk', 'Duration' : '120', 'Cinema': 'Cinematte'} };
        }

        // TODO: To Delete when api created
        function getMovies(){
            return [
            { id: '1', title: 'Mad Max: Fury Road', image: 'http://de.web.img3.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/27/10/46/356365.jpg', summary : 'In einer trüben Wüstenlandschaft, wo die Menschheit verkommen und fast jeder bereit ist, für das Überlebensnotwendige bis an die Grenzen zu gehen,...', time: '20:30' },
            { id: '3', title: 'Ostwind 2', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/04/13/15/13/184338.jpg', summary : 'Nichts macht Mika (Hanna Binke) mehr Freude, als Zeit mit ihrem geliebten schwarzen Hengst Ostwind zu verbringen. Daher ist sie umso glücklicher,...', time: '18:15' },
            { id: '2', title: 'Pitch Perfect 2', image: 'http://de.web.img1.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/18/12/28/270190.jpg', summary : 'Fortsetzung des Musical-Hits "Pitch Perfect", in dem die Sängerinnen der Barden Bellas das Finale der College-Meisterschaft gegen die Treblemakers...', time: '21:30' },
            { id: '4', title: 'Zweite Chance', image: 'http://de.web.img2.acsta.net/cx_160_213/b_1_d6d6d6/pictures/15/03/30/11/57/390217.jpg', summary : 'Die Polizisten und besten Freunde Andreas (Nikolaj Coster-Waldau) und Simon (Ulrich Thomsen) werden zu einem häuslichen Streit eines...', time: '21:30' }
            ];
        }

        function lengthMap(map){
            return Object.keys(map).length;
        }

        function isDefinedAndNotNull(obj){
            return angular.isDefined(obj) && obj != null;
        }
    };
})();