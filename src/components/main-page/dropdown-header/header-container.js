import React from 'react'

const HeaderContainer = () => {

    return (
        <div class="container">
        <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-#FFF">About</h4>
            <p class="text-muted"> We are simply, GoZomato. Your guide to Food Heaven exploration. </p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-#FFF">Contact Us!</h4>
            <ul class="list-unstyled">
            <li><a href="http://twitter.com" class="icons-sm tw-ic"><i class="fab fa-twitter-f fa-2x"> </i>Follow us on Twitter</a></li>
            <li><a href="http://facebook.com" class="icons-sm fb-ic"><i class="fab fa-facebook-f fa-2x"> </i>Like us on Facebook</a></li>
            </ul>
        </div>
        </div>
        </div>
    )
}

export default HeaderContainer