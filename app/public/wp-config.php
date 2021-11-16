<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'GdNkUqEpb6npxLULeNZh84dA1cQjWSGu0CL0ccpuZGv3FP7JWqZIo1zzl9ImG1pX8KENga89wodeobhSmxsU8A==');
define('SECURE_AUTH_KEY',  'EntorOm4vI/bVUhX4SsXv4a/2dd9EGvQziiOPUU1rn1LU5yedtlxr35N8UCeWzVqVkX5Lrb2ePUGqwwERul1cg==');
define('LOGGED_IN_KEY',    'Qxl8FAjrv/OPXX+/5VCk0fI1j8ThqtcO6AyZcRyJg2KQPdq60n7pQp7mudMqpkDPTSN3CLZn1TtdQPtxj9UKcA==');
define('NONCE_KEY',        '3oyXGCGe3VbVlx7imGTJrmX4ogIldXwM5SPWzJtJ+jtzxpvAtIlmIyoE1JMtXljFC8qScm8E8k5s79jyv1s6KA==');
define('AUTH_SALT',        'UMMmQFbNRrz8LAT1xoDdmVOBZDFSfxAcVxo7pdcfUyP+kfaWNPTYnWSh0feoF0kndkN9WgQro/uZWr4kDHZXog==');
define('SECURE_AUTH_SALT', 'WTuxpxiJqKai9TpxbZzSKHWKURG+vHBXnwWABBhiv92vtp+g95oFv5kvqyTwxLflgE2d6rsDzBHPtddBfPqLfA==');
define('LOGGED_IN_SALT',   'PFxigYKynD0QcBtm0owqtBWTc9tKJ7TmW1IW5wQy2zWQGOjx3MK3JExPzV7EkgfbDTDRmB0SGioHBOsdRPBFdw==');
define('NONCE_SALT',       'L+gXA5PbmPBS6NRW0R6uqaUmU5UaM/OKcbNmoBqYzThV0+odVCz7AhkE2mtYKI3E5jwuHCNn7UKL+nUxMeNqMg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
