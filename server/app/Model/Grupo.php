<?php
App::uses('AppModel', 'Model');
/**
 * Grupo Model
 *
 */
class Grupo extends AppModel {

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
	public $displayField = 'nombre';

    public $belongsTo = array(
        'Dj' => array(
            'classname' => 'User',
            'foreignKey' => 'dj'
        )
    );

    public $hasMany = array(
        'MiembrosGrupo'
    );

}
