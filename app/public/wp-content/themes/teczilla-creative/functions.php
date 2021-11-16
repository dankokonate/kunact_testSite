<?php 

// teczilla creative css js enqueue

load_theme_textdomain('teczilla-creative');


function teczilla_creative_theme_sidebars() {

    // Blog Sidebar

    register_sidebar(array(
        'name' => esc_html__( 'Blog Sidebar', "teczilla-creative"),
        'id' => 'top-sidebar',
        'description' => esc_html__( 'Sidebar on the blog layout.', "teczilla-creative"),
        'before_widget' => '<div id="%1$s" class="sidebar-search sidebar-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar-title"><h3 class="title semi-bold mb-20">',
        'after_title' => '</h3></div>',
    ));
        
}
add_action( 'widgets_init', 'teczilla_creative_theme_sidebars' );



function teczilla_creative_scripts_enqueue() {

    $avadanta_typography_show = get_theme_mod('teczilla_show_typography', 0);
    If($avadanta_typography_show == 0) {
      wp_enqueue_style('teczilla-font', 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap'); 
    }
    $teczilla_creative_depend = array( 'bootstrap-min', 'aoff-canvas','owl-carousel','responsive','teczilla-main');
	wp_enqueue_style( 'teczilla-creative-parent-style', get_template_directory_uri() . '/style.css',array('animate'));	
	wp_enqueue_style('teczilla-creative-creative',get_stylesheet_directory_uri() .'/resources/creative.css',$teczilla_creative_depend);
	
}
add_action('wp_enqueue_scripts', 'teczilla_creative_scripts_enqueue');



require( get_stylesheet_directory() . '/lib/customizer.php');
require( get_stylesheet_directory() . '/lib/template-function.php');