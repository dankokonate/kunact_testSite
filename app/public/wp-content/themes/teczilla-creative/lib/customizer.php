<?php
function teczilla_creative_sections_settings( $wp_customize ) {
    $wp_customize->remove_setting( 'teczilla_menubar_bg_color' );
     $wp_customize->remove_setting( 'teczilla_menu_item_color' );
      $wp_customize->remove_setting( 'teczilla_menu_item_hover_color' );
       $wp_customize->remove_setting( 'teczilla_menu_link_bg_color' );
       $wp_customize->remove_setting( 'teczilla_submnubg_scheme' );
        $wp_customize->remove_setting( 'teczilla_submnu_link' );
        $wp_customize->remove_control('blogdescription');
        $wp_customize->remove_section('teczilla_top_header');
 




        $wp_customize->add_setting('teczilla_theme_color_scheme',array(
        'default' => esc_html__('#ff805d','teczilla-creative'),
        'sanitize_callback' => 'sanitize_hex_color'
    ));
    
    $wp_customize->add_control(
        new WP_Customize_Color_Control($wp_customize,'teczilla_theme_color_scheme',array(
            'label' => esc_html__('Theme Color','teczilla-creative'),           
            'description' => esc_html__('Change Theme Color','teczilla-creative'),
            'section' => 'colors',
            'settings' => 'teczilla_theme_color_scheme'
        ))
    ); 

        $wp_customize->add_setting('braedcrumb_height',
            array(
                'default'           => '400',
                'sanitize_callback' => 'teczilla_sanitize_float_theme'
            )
        );
        $wp_customize->add_control('braedcrumb_height',
            array(
                'label'    => __('Breadcrumb Header Height', 'teczilla-creative'),
                'section'  => 'teczilla_breadcrumb_settings',
                'type'     => 'number',
                'input_attrs' => array(
                    'min' => '20', 'step' => '', 'max' => '100',
                  ),
                'priority' => 1,

            )
        );

    $wp_customize->add_section('teczilla_creative_top_header',array(
            'title' => esc_html__('Top Header Button Setting','teczilla-creative'),
            'panel' => 'section_settings',
            'priority' => 1,
            ));


    $wp_customize->add_setting('teczilla_show_header_butn',
        array(
            'sanitize_callback' => 'teczilla_sanitize_checkbox',
            'default'           => 0,
        )
    );
    $wp_customize->add_control('teczilla_show_header_butn',
        array(
            'type'        => 'checkbox',
            'label'       => esc_html__('Enable Top Header Button', 'teczilla-creative'),
            'section'     => 'teczilla_creative_top_header',
            'description' => esc_html__('Check this box to Enable Header button', 'teczilla-creative'),
        )
    );


    $wp_customize->add_setting('teczilla_header_creative_button',   
        array(
            'sanitize_callback' => 'teczilla_sanitize_text',
            'default'           => 'Know More',
            ));

    $wp_customize->add_control('teczilla_header_creative_button',
        array(
            'label'       => esc_html__('Header Button', 'teczilla-creative'),
            'section'     => 'teczilla_creative_top_header',
            'type'        => 'text',
        )
    );

    $wp_customize->add_setting('teczilla_header_creative_button_url',   
        array(
            'sanitize_callback' => 'teczilla_sanitize_text',
            'default'           => '#',
            ));

    $wp_customize->add_control('teczilla_header_creative_button_url',
        array(
            'label'       => esc_html__('Header Button Url', 'teczilla-creative'),
            'section'     => 'teczilla_creative_top_header',
            'type'        => 'text',
        )
    );



}
add_action( 'customize_register', 'teczilla_creative_sections_settings', 30);