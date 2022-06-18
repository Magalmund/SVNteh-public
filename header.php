<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(). '/style.css' ?>">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(). '/swiper/swiper-bundle.min.css'?>">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(). '/aos/aos.min.css'?>">
    
    <script src="<?php echo get_stylesheet_directory_uri(). '/js/app.js' ?>"></script>
    <script src="<?php echo get_stylesheet_directory_uri(). '/js/vanilla-tilt.js' ?>"></script>
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(). '/fonts/FontAwesome/css/all.min.css'?>">
    <title> <?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?> </title>
    <?php wp_head(); ?>
</head>

<body id="SVN">
        <div id="navbar" class="container-fluid scrollby">
        <div class="row justify-content-center">
            <div class="col-xl-2">
                <a class="logo-link" href="<?php echo get_site_url()?>">
                    <span class="logo"></span>
                </a>
								<div id="open" class="nav-button">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
            <div class="col-xl-8">
							<?php wp_nav_menu([
							'theme_location' => 'top',
							// 'menu' => 'Главное меню',
							'container' => 'nav',
							'container_id' => '',
							'container_class' => 'navbar-main',
							'menu_class' => 'navbar-list',
							'items_wrap' => '<ul class="%2$s">%3$s</ul>',
							]);
							?>
            </div>
        </div>
				<div class="row">
            <div id="mnav">
							<div class="logo-mnav"></div>
							<?php wp_nav_menu([
								'theme_location' => 'top',
								// 'menu' => 'Главное меню',
								'container' => 'nav',
								'container_id' => '',
								'container_class' => 'navbar-main',
								'menu_class' => 'navbar-list',
								'items_wrap' => '<ul class="%2$s">%3$s</ul>',
								]);
							?>
							<div id="close" class="nav-button">
								<div class="bar1"></div>
								<div class="bar2"></div>
								<div class="bar3"></div>
							</div>
							<!-- <button id="btn-ru">Рус</button>
							<button id="btn-est">Est</button> -->
            </div>
        </div>
    </div>
		<div id="fader"></div>

