<?php
App::uses('AppModel', 'Model');
/**
 * MiembrosGrupo Model
 *
 * @property User $User
 * @property Grupo $Grupo
 */
class MiembrosGrupo extends AppModel {

    /**
     * Use database config
     *
     * @var string
     */
    public $useDbConfig = 'test';

    /**
     * belongsTo associations
     *
     * @var array
     */
    public $belongsTo = array(
        'User', 'Grupo'
    );

}
