<?php
/**
 * The template for displaying the 404 template in the Teczilla Creative theme.
 *
 */
 
get_header();


?>
	<div class="section section-x page-extra-pd tc-bunker error-44">
		<div class="container">
			<div class="row justify-content-left">
				<div class="col-lg-12 col-md-8 text-center">
					<div class="error-content">
						<span class="error-text-large"><?php esc_html_e( '404', 'teczilla-creative' ); ?></span>
						<h5><?php esc_html_e( 'Opps! Why you are here?', 'teczilla-creative' ); ?></h5>
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn"><?php esc_html_e( 'Go to HomePage', 'teczilla-creative' ); ?></a>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php
get_footer();
?>