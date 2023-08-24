<?php
/**
 * @package Chums Inc
 * @subpackage Imprint Status
 * @author Steve Montgomery
 * @copyright Copyright &copy; 2011, steve
 */

require_once "autoload.inc.php";
require_once "access.inc.php";

$bodyPath = "apps/walmart-d49-ucc";


$ui = new WebUI($bodyPath, 'Walmart D49 Optical UCC Labels', '', false, 5);
$ui->bodyClassName = 'container';
$ui->addManifest('public/js/manifest.json');
$ui->Send();
