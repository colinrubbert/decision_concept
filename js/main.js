// jQuery Functions

$(function(){
  mobileNavigationToggle();
  searchBoxToggle();
});

// Function to toggle open and closed mobile navigation menu
function mobileNavigationToggle() {
  $('#mobile-navigation-toggle').click(function(){
    $('.navigation-links-wrapper').slideToggle("slow");
  });
}

// Function to toggle open and closed search box
function searchBoxToggle() {
  $('.search-icon').click(function(){
    $('.search-box').fadeToggle("slow");
  });
}
