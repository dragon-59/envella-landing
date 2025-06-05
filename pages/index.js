<?php
/**
 * Template Name: CMS Landing
 */
get_header(); ?>

<div style="text-align: center; padding: 100px 20px;">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Envella CMS" style="max-width: 200px;">
    <h1 style="font-size: 2.5em; margin-top: 20px;">Welcome to Envella CMS</h1>
    <p style="font-size: 1.2em; color: #666;">Manage your home data, inventory, and contractors here.</p>
    <a href="/wp-admin" style="display: inline-block; margin-top: 40px; padding: 15px 30px; background-color: #1a73e8; color: #fff; border-radius: 8px; text-decoration: none;">Login to CMS</a>
</div>

<?php get_footer(); ?>
