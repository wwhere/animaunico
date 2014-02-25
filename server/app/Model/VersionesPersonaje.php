<?php
App::uses('AppModel', 'Model');
/**
 * VersionesPersonaje Model
 *
 * @property Personaje $Personaje
 */
class VersionesPersonaje extends AppModel {

/**
 * Use database config
 *
 * @var string
 */
	public $useDbConfig = 'test';

/**
 * Display field
 *
 * @var string
 */
	public $displayField = 'id';


	//The Associations below have been created with all possible keys, those that are not needed can be removed

/**
 * belongsTo associations
 *
 * @var array
 */
	public $belongsTo = array(
		'Personaje' => array(
			'className' => 'Personaje',
			'foreignKey' => 'personaje_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
}
