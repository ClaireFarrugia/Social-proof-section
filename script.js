
function generateRating (ratingText, ratingId){
    const rating = document.createElement('div')
    rating.setAttribute("class", "rating")
    const star = document.createElement('img');
    star.src = "images/icon-star.svg"
    star.setAttribute("class", "star")
    rating.setAttribute("id", ratingId)

    const text = document.createElement("span")
    text.innerText = ratingText

    for (let i = 0; i < 5; i++) {
        rating.appendChild(star.cloneNode());
      }

    rating.appendChild(text)
    const ratings = document.getElementById("ratings")
    ratings.appendChild(rating)
}

function loadRatings () {
generateRating("Rated 5 Stars in Report Guru", "rating1")
generateRating("Rated 5 Stars in Reviews", "rating2")
generateRating("Rated 5 Stars in BestTech", "rating3")
}
