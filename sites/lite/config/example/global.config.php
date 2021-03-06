<?php
	//the language to use, if this isn't defined nothing will be translated
	//$arrConfig['Language'] = 'english';
	
	//the timezone of the server (http://us.php.net/manual/en/timezones.php)
	$arrConfig['Timezone'] = 'America/Los_Angeles';
	date_default_timezone_set($arrConfig['Timezone']);

	//the PHP CLI path
	$arrConfig['PhpCli'] = '/usr/bin/php';
	
	
	/*******************************************/
	/**     DATA STORAGE                      **/
	/*******************************************/
	
	
	//whether the database should be enabled
	$arrConfig['DatabaseEnabled'] = false;
	
	//whether caching should be enabled
	$arrConfig['CacheEnabled'] = false;
	
	//the storage types to use for uploaded files
	$arrConfig['FileSystem'] = 'Local';
	
	
	/*******************************************/
	/**     ERRORS                            **/
	/*******************************************/
	
	
	//whether to use verbose error messages with file names and line numbers (recommended for dev only)
	$arrConfig['ErrorVerbose'] = true;
	
	//the error log file relative to the files dir (must be writable by the webserver and whatever user runs scripts)
	$arrConfig['ErrorLogFile'] = AppConfig::get('FilesDir') . 'app/logs/error.' . date('Ymd') . '.log';
	
	//whether to log specific error types
	$arrConfig['ErrorLogNotice'] = true;
	$arrConfig['ErrorLogWarning'] = true;
	$arrConfig['ErrorLogError'] = true;
	
	
	/*******************************************/
	/**     DEBUGGING                         **/
	/*******************************************/
	
	
	//whether debugging is turned on
	$arrConfig['DebugEnabled'] = false;
	
	//the debugging log file relative to the the files dir (must be writable by the webserver and whatever user runs scripts)
	$arrConfig['DebugFile'] = AppConfig::get('FilesDir') . 'app/logs/debug.' . date('Ymd') . '.log';
	

	/*******************************************/
	/**     ETC                               **/
	/*******************************************/
	
	
	//a substition cipher used for very basic encryption ($output = str_shuffle($input))
	$arrConfig['EncryptInput'] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890=/+';
	$arrConfig['EncryptOutput'] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890=/+';