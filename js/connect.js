  // navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function () {
      this.classList.toggle("is-open");
    });
  });


$(document).ready(function() {
    // When a Connect button is clicked
    $('.connect-btn').on('click', function() {
        var country = $(this).data('country');
        var imageUrl;
        var countryName;

        // Update modal based on selected country
        switch (country) {
            case 'kenya':
                imageUrl = 'assests/CCI-Kenya-Location.jpg'; 
                countryName = 'Kenya';
                break;
            case 'southAfrica':
                imageUrl = 'assests/CCI-South-Africa-Our-Locations.jpg'; 
                countryName ="South Africa"
                break;
            case 'ethiopia':
                imageUrl = 'assests/CCI-Ethiopia-Our-Locations-min.jpg'; 
                countryName = 'Ethiopia';
                break;
            case 'rwanda':
                imageUrl = 'assests/Rwanda-Kigali-Website-Size-min.jpg'; 
                countryName = 'Rwanda';
                break;
            case 'ghana':
                imageUrl = 'assests/CCI-Ghana-A-New-Location.jpg'; 
                countryName = 'Ghana';
                break;
            case 'egypt':
                imageUrl = 'assests/CCI-Egypt.jpg'; 
                countryName = 'Egypt';
                break;
            default:
                imageUrl = 'assests/CCI-Kenya-Location.jpg'; 
                countryName = 'Unknown';
        }

       
        $('#countryImage').attr('src', imageUrl);
        $('#modalCountry').val(countryName); 
    });
});