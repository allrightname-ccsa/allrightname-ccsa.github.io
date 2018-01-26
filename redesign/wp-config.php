<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

define('WP_MEMORY_LIMIT', '256M');
define('DB_NAME', 'ss_dbname_344335d1d5');

/** MySQL database username */
define('DB_USER', 'O1Wf60s60BGl0OR');

/** MySQL database password */
define('DB_PASSWORD', 'gxL65eX7XzBaA10j');

/** MySQL hostname */
define('DB_HOST', 'ccsa.bizlandmysql.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '>YaO?Fdf;Ym&?@(C${CTgeF?V&CWmxbY_NNrguHeH>whPJ@i*^qGyrCLq@Bx--kbM&TRH[u@)sIkTR!z=M@UR!]_%YIVd-X(@QCI@kQv>=iD*y@&yWf*lU&|XLqH?BuP');
define('SECURE_AUTH_KEY', 'Ns}i?p%h-]_<YwTe%rrJrn*Z/jUs|}P*-Y|f>L)gk{N@CC}+HMNy!yozAu{fT<ZRu)t(/VF%qc(MC){iUfz{gt$$VJEW*JM[X&v=I$>F;glLKfd^xbfFJ};Q?yA=-B>q');
define('LOGGED_IN_KEY', ';vkY@!BNLJBL[gAt=USrPT**vwKAhsm!];|KoDYeqtvu<&wRuI<JzwNsVW+F}*+sPk@hqurS]BbEU<Q@CQ=u<ql}GA*Yz+PO_nDKr^/$jt?GZkMvDtWdIJL*nSAl?b]Y');
define('NONCE_KEY', '@??)?DHZ{;sfT_!=g+$guOX[V=@YS__;wB|E>f_UWD%J@{SD&J<qPzuRv};$?d[FrwZdw(_uqoqU!]pPzpV*B}JSx$%xrsrqj;ZTaNEzconmg_&cs]qveaIT*<S]+VEf');
define('AUTH_SALT', 'u]_VR=}S<aJC=Dg@!A(VFCSRSrIRh$Y>MrFkAV=GRMXKL]juhFRODr*K%ai>I-&xb)/<[B&hj+-BE(-FPu/};+FVMTFhizU!(y&XjEf[-HJJMYP)fd(Du=!>U-xJvWu%');
define('SECURE_AUTH_SALT', 'n[nhBuYyPD%ddV>L$&;I{Rrb$Eh+CbecxBrw=WFupy[=(Tn;Cmq^$qtMY|b+igccN)muqFE<XdXZmT+w!zAyhcdIAo;>GBm+Jz=lEx<IGMM_@W%McK>uS)BElB=jLIRY');
define('LOGGED_IN_SALT', 'orlLNpFBzp|wxmapBrMkaa(hEjDJAF@ZCjXILdDYv?ztEk@cBvXb[}]z)AaHSYJ)L%&yOk&-BLG*^D!efhW>]WB_NNWsA)OcPNefaQVoXcEx!C)pQGIqZ!;u|uqfoC]-');
define('NONCE_SALT', 's/H)g^fXKXmENsoH*x^{x!$vepc$h$eO{Kng*A!VZe$yF<>-OUxsdpvQkar=bI-a<EK/YWYC&O!-q@bcbSC*{(v%Z/xaLJvRJG{GTNX/bRgJZ&UM)GdGANrzm|hbbSI!');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_nlhh_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
