<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Justin and Laura</title>

    <!-- Latest compiled and minified CSS -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>

<div id="rsvp-button-wrapper">
    <div id="rsvp-button" class="rsvp-button-light">
        <a class="smooth-scroll" href="#rsvp-section">
            <p style="margin: 0">RSVP</p>
        </a>
    </div>
</div>


<section id="hero-section" class="text-center dark-on-light">
    <div id="banner-image-wrapper">
        <img id="banner-image" src="img/banner.png" alt="">
        <div class="bottom-center mb-5">
            <a class="smooth-scroll animate-bob" href="#wedding-details">
                <i id="hero-arrow-button" class="fa fa-chevron-down text-purple" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</section>


<section id="wedding-details" class="light-on-dark">
    <div class="shadow" style="position:relative;z-index:2;">
        <div class="container">
            <div class="row">
                <h1 style="margin-top:40px;margin-bottom: 75px;">Justin & Laura Get Married</h1>

                <table id="wedding-details-table">
                    <tbody>
                    <tr>
                        <th class="text-yellow">Where?</th>
                        <td>Ken-Wo Golf Club, New Minas, Nova Scotia</td>
                    </tr>
                    <tr>
                        <th class="text-yellow">When?</th>
                        <td>
                            August 19 2017 <br>
                            Ceremony at <span class="text-yellow">4 o'clock<span>
                        </td>
                    </tr>
                    <tr>
                        <th class="text-yellow">What?</th>
                        <td>
                            Gettin' Married followed by
                            Dinner
                            <span class="text-lt-purple">|</span>
                            Drinks
                            <span class="text-lt-purple">|</span>
                            and Dancing
                        </td>
                    </tr>
                    <tr>
                        <th class="text-yellow">Why?</th>
                        <td>Seemed like a good idea at the time.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div>
        <img id="wedding-details-image" src="img/front-steps-sm.jpg" alt="">
    </div>
    <!--    <div id="wedding-details-image"></div>-->
</section>

<section id="accommodations-section" class="dark-on-light">
    <div class="container">
        <div class="row">
            <h1 style="margin-top:40px;margin-bottom: 75px;">Accommodations</h1>

            <p>
                While we do not have any official accommodations reserved for the wedding,
                there are a few hotels nearby that we would recommend below.
            </p>
            <p>
                There are also many beautiful Bed and Breakfasts in the area, but book as soon as possible
                if you are looking to stay in a B&amp;B, as they fill up quickly this time of year.
            </p>
            <ul class="no-style-list" style="margin-top: 2em">
                <li>
                    <a href="http://oldorchardinn.com/">The Old Orchard Inn</a>
                </li>
                <li>
                    <a href="http://slumberinn.ca/">Slumber Inn</a>
                </li>
            </ul>
        </div>
    </div>
</section>

<section id="rsvp-section" class="light-on-dark">
    <a name="rsvp"></a>
    <div class="container">
        <div class="row">
            <h1 style="margin-top:40px;margin-bottom: 75px;">RSVP</h1>

            <div id="react-rsvp-root"></div>

        </div>
    </div>
</section>

<footer class="light-on-dark">
    <p class="text-small">
        Website by <span class="text-yellow">Justin Doyle</span>
    </p>
    <p class="text-small">
        Copyright <span class="text-yellow"><?php echo date('Y') ?></span>
    </p>
</footer>


<script type="text/javascript" src="js/smoothscroll.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript" src="js/bundle.js"></script>

</body>
</html>