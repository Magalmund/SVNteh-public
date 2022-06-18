<?php
/**
 * 	Template Name: Home Page Eng
 *
 *	This page template has a sidebar built into it,
 * 	and can be used as a home page, in which case the title will not show up.
 *
*/
get_header(); ?>
<div id="intro" class="container-fluid">
	<div class="row">
		<div class="col-lg-10">
			<h1>We implement projects that are ahead of the future</h1>
		</div>
		<div id="section-bottom" class="col-lg-12">
				<a id="bottom-button" href="#portfolio">
					<div class="arrow-left"></div>
					<div class="arrow-right"></div>
				</a>
				<a id="up-button" href="#intro">
					<div class="arrow-left"></div>
					<div class="arrow-right"></div>
				</a>
		</div>
	</div>
</div>


<div id="portfolio" class="container-fluid scrollto">
	<div class="row justify-content-center">
		<div class="col-lg-5" data-aos="fade-right">
			<div class="swiper-portfolio swiper img">
				<div class="swiper-wrapper">
				    <div class="swiper-slide img-1"></div>
				    <div class="swiper-slide img-2"></div>
				</div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
      </div>
		</div>
		<div class="col-lg-5">
			<div class="table">
              <?php
                $post = get_post(95);
                setup_postdata($post);
              ?>
              <h2><?php the_title();?></h2>
              <?php
                the_content();
                wp_reset_postdata();
              ?>
            </div>
        </div>
    </div>
</div>


<div id="services" class="container-fluid">
    <div class="row">
        <div class="col-lg-10">
					<span data-aos="fade-right">Our</span>
					<h2 data-aos="fade-right">Services</h2>

								<div class="swiper-services swiper">
									<div class="swiper-wrapper">
											<div class="swiper-slide" data-aos="fade-up"><div class="service-1 img"><h3>Cooling</h3></div></div>
											<div class="swiper-slide" data-aos="fade-up"><div class="service-2 img"><h3>Pipe works</h3></div></div>
											<div class="swiper-slide" data-aos="fade-up"><div class="service-3 img"><h3>Water</h3></div></div>
											<div class="swiper-slide" data-aos="fade-up"><div class="service-4 img"><h3>Heating</h3></div></div>
									</div>
									<div class="swiper-button-prev"></div>
									<div class="swiper-button-next"></div>
      					</div>

        </div>
    </div>
</div>


<div id="about" class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-5">
      	    <div class="table">
                <?php
                    $post = get_post(116);
                    setup_postdata($post);
                ?>
                <h2><?php the_title();?></h2>
                <?php
                    the_content();
                    wp_reset_postdata();
                ?>
            </div>
        </div>
        <div class="col-lg-5" data-aos="fade-left">
		    <div class="about-img img"></div>
        </div>
    </div>
</div>


<div id="contact" class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-lg-5">
            <div class="contact-header">
                <?php
                    $post = get_post(112);
                    setup_postdata($post);
                ?>
                <h2><?php the_title();?></h2>
                <?php
                    the_content();
                    wp_reset_postdata();
                ?>
            </div>
            <div class="contact-footer">
                <span class="info">
                    <a href="tel:+3726647001">Phone: +372 6647001</a><br>
                    <a href="mailto:info@svnteh.ee">Mail: info@svnteh.ee</a>
                </span>
                <span class="social-media">
									<a href="https://www.facebook.com/SVNTEH/"><i class="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/svn_teh/"><i class="fab fa-instagram"></i></a>
                </span>
            </div>
        </div>
        <div class="col-lg-5">
            <?php
                $post = get_post(120);
                setup_postdata($post);
                the_content();
                wp_reset_postdata();
            ?>
						<?php get_footer();?>
        </div>
    </div>
</div>
<div class="preloader">
	<div class="preloader-logo"></div>
		<div class="preloader-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
	</div>
</div>
<div class="slider"></div>
