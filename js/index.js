let data = document.getElementById("data");

function openSideNav() {
    $(".my-side-nav").animate({
        left: 0
    }, 500)

    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");
    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeSideNav() {
    let boxWidth = $(".my-side-nav .nav-tab").outerWidth()
    $(".my-side-nav").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
}

closeSideNav()
$(".my-side-nav i.open-close-icon").click(() => {
    if ($(".my-side-nav").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})
        async function displayMovies() {
            // Fetch data from API
            let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9b933b157427ed883df0c311c7deecb3');
            response = await response.json();
            displayNowPlaying(response.results);
        }

        function displayNowPlaying(arr) {
            const baseImageUrl = 'https://image.tmdb.org/t/p/original';
            let cartona = "";
            
            for (let i = 0; i < arr.length; i++) {
                let voteAverage = arr[i].vote_average.toFixed(1);
                cartona += `
                    <div class="col-md-4 p-3">
                        <div class="movie position-relative">
                            <img src="${baseImageUrl}${arr[i].poster_path}" class="rounded-4" alt="">
                            <div class="movie-details m-3 bg-transparent">
                                <p class="mx-auto text-center header">${arr[i].original_title}</p>
                                <p class"movie-overview ">${arr[i].overview}</p>
                                <p class"movie-overview"> Release Date:${arr[i].release_date}</p>
                                  <p class="vote-circle">${voteAverage}</p>
                                
                            </div>
                        </div>
                    </div>`;
            }
            
            // Make sure to reference the correct HTML element
            const data = document.getElementById('data');
            data.innerHTML = cartona;
        }

        async function getPopularMovies() {
            let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b933b157427ed883df0c311c7deecb3');
            response = await response.json();
            displayPopular(response.results);
        }

        function displayPopular(arr) {
            const baseImageUrl = 'https://image.tmdb.org/t/p/original';
           let cartona = "";
            for (let i = 0; i < arr.length; i++) {
                let voteAverage = arr[i].vote_average.toFixed(1);
                cartona += `
                    <div class="col-md-4 p-3">
                        <div class="movie position-relative">
                            <img src="${baseImageUrl}${arr[i].poster_path}" class="rounded-4" alt="">
                            <div class="movie-details m-3 bg-transparent">
                                <p class="mx-auto text-center header">${arr[i].original_title}</p>
                                <p class"movie-overview ">${arr[i].overview}</p>
                                <p class"movie-overview"> Release Date:${arr[i].release_date}</p>
                                  <p class="vote-circle">${voteAverage}</p>
                                
                            </div>
                        </div>
                    </div>`;
            }
            
            const data = document.getElementById('data');
            data.innerHTML = cartona;
        }

        displayMovies();


        async function getTopRatedMovies() {
            let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9b933b157427ed883df0c311c7deecb3');
            response = await response.json();
            displayTopRated(response.results);
        }

        function  displayTopRated(arr) {
            const baseImageUrl = 'https://image.tmdb.org/t/p/original';
            let cartona = "";
            
            for (let i = 0; i < arr.length; i++) {
                let voteAverage = arr[i].vote_average.toFixed(1);
                cartona += `
                    <div class="col-md-4 p-3">
                        <div class="movie position-relative">
                            <img src="${baseImageUrl}${arr[i].poster_path}" class="rounded-4" alt="">
                            <div class="movie-details m-3 bg-transparent">
                                <p class="mx-auto text-center header">${arr[i].original_title}</p>
                                <p class"movie-overview ">${arr[i].overview}</p>
                                <p class"movie-overview"> Release Date:${arr[i].release_date}</p>
                                  <p class="vote-circle">${voteAverage}</p>
                                
                            </div>
                        </div>
                    </div>`;
            }
            
            const data = document.getElementById('data');
            data.innerHTML = cartona;
        }




        
        async function getTrendingMovies() {
            let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
            response = await response.json();
            displayTrending(response.results);
        }

        function  displayTrending(arr) {
            const baseImageUrl = 'https://image.tmdb.org/t/p/original';
            let cartona = "";
            
            for (let i = 0; i < arr.length; i++) {
                let voteAverage = arr[i].vote_average.toFixed(1);
                cartona += `
                 <div class="col-md-4 p-3">
                        <div class="movie position-relative">
                            <img src="${baseImageUrl}${arr[i].poster_path}" class="rounded-4" alt="">
                            <div class="movie-details m-3 bg-transparent">
                                <p class="mx-auto text-center header">${arr[i].original_title}</p>
                                <p class"movie-overview ">${arr[i].overview}</p>
                                <p class"movie-overview"> Release Date:${arr[i].release_date}</p>
                                  <p class="vote-circle">${voteAverage}</p>
                                
                            </div>
                        </div>
                    </div>`;
            }
            
            const data = document.getElementById('data');
            data.innerHTML = cartona;
        }




        async function getUpcomingMovies() {
            let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
            response = await response.json();
            displayUpcoming(response.results);
        }

        function  displayUpcoming(arr) {
            const baseImageUrl = 'https://image.tmdb.org/t/p/original';
            let cartona = "";
            
            for (let i = 0; i < arr.length; i++) {
                let voteAverage = arr[i].vote_average.toFixed(1);
                cartona += `
                    <div class="col-md-4 p-3">
                        <div class="movie position-relative">
                            <img src="${baseImageUrl}${arr[i].poster_path}" class="rounded-4" alt="">
                            <div class="movie-details m-3 bg-transparent">
                                <p class="mx-auto text-center header">${arr[i].original_title}</p>
                                <p class"movie-overview ">${arr[i].overview}</p>
                                <p class"movie-overview"> Release Date:${arr[i].release_date}</p>
                                  <p class="vote-circle">${voteAverage}</p>
                                
                            </div>
                        </div>
                    </div>`;
            }
            
            const data = document.getElementById('data');
            data.innerHTML = cartona;
        }
        function scrollToContact() {
            const contactSection = document.getElementById("contact");
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        const input = document.getElementById('text');
        const searchResults = document.getElementById('data');
        const baseImageUrl = 'https://image.tmdb.org/t/p/original';
        async function searchMovies(query) {
            const apiKey = 'eba8b9a7199efdcb0ca1f96879b83c44';
            const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            const movies = data.results;
            displaySearchMovies(movies);
        }
        
        function displaySearchMovies(movies) {
            let cartona = '';
            if (movies.length > 0) {
                for (let i = 0; i < movies.length; i++) {
                    let voteAverage = movies[i].vote_average.toFixed(1);
                    cartona += `
                        <div class="col-md-4 p-3">
                        <div class="movie position-relative">
                            <img src="${baseImageUrl}${movies[i].poster_path}" class="rounded-4" alt="">
                            <div class="movie-details m-3 bg-transparent">
                                <p class="mx-auto text-center header">${movies[i].original_title}</p>
                                <p class"movie-overview ">${movies[i].overview}</p>
                                <p class"movie-overview"> Release Date:${movies[i].release_date}</p>
                                  <p class="vote-circle">${voteAverage}</p>
                                
                            </div>
                        </div>
                    </div>`;
                }
            } else {
                cartona = '<p class="col-12 text-center">No results found</p>';
            }
            searchResults.innerHTML = cartona;
        }
        
        input.addEventListener('input', () => {
            const query = input.value;
            if (query) {
                searchMovies(query);
            }
        });

        function validateForm() {
            const nameRegex = /^[a-zA-Z\s]+$/;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phoneRegex = /^\d{10}$/;
            const ageRegex = /^(?:1[01][0-9]|120|1[7-9]|[2-9]\d)$/;
            const passwordRegex = /^[A-Za-z0-9]{8,}$/;
            const name = document.getElementById('nameInput').value;
            const email = document.getElementById('emailInput').value;
            const phone = document.getElementById('phoneInput').value;
            const age = document.getElementById('ageInput').value;
            const password = document.getElementById('passInput').value;
            const confirmPassword = document.getElementById('pass2Input').value;
    
           
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('ageError').textContent = '';
            document.getElementById('passError').textContent = '';
            document.getElementById('pass2Error').textContent = '';
    
           
            let isValid = true;
    
            if (!nameRegex.test(name)) {
                document.getElementById('nameError').textContent = 'Invalid Name, only characters allowed';
                isValid = false;
            }
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }
            if (!phoneRegex.test(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
                isValid = false;
            }
            if (!ageRegex.test(age)) {
                document.getElementById('ageError').textContent = 'Please enter a valid age between 17 and 120';
                isValid = false;
            }
            if (!passwordRegex.test(password)) {
                document.getElementById('passError').textContent = 'Password must be at least 8 characters long and contain only letters and numbers';
                isValid = false;
            }
            if (password !== confirmPassword) {
                document.getElementById('pass2Error').textContent = 'Passwords do not match';
                isValid = false;
            }
    
            if (isValid) {
                alert('Form submitted successfully!');
            }
        }