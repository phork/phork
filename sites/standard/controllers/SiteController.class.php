<?php
	require_once('php/core/CoreController.class.php');
	
	/**
	 * SiteController.class.php
	 * 
	 * This controller handles the phork standard site.
	 *
	 * Copyright 2006-2011, Phork Labs. (http://phorklabs.com)
	 *
	 * Licensed under The MIT License
	 * Redistributions of files must retain the above copyright notice.
	 *
	 * @author Elenor Collings <elenor@phork.org>
	 * @license http://www.opensource.org/licenses/mit-license.php The MIT License
	 * @package phork
	 * @subpackage controllers
	 */
	class SiteController extends CoreController {
		
		/**
		 * Sets up the common page variables to be used
		 * across all node templates.
		 * 
		 * @access public
		 */
		public function __construct() {
			parent::__construct();
			
			$this->assignPageVar('strSiteUrl', AppConfig::get('SiteUrl'));
			$this->assignPageVar('strBaseUrl', AppConfig::get('BaseUrl'));
			$this->assignPageVar('strCurrentUrl', AppRegistry::get('Url')->getCurrentUrl(false, false));
			$this->assignPageVar('strPageTitle', AppConfig::get('SiteTitle'));
		}
	}