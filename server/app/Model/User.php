<?php
/**
 * @property User $User
 */

App::uses('SimplePasswordHasher', 'Controller/Component/Auth');

class User extends AppModel {

    public $name = 'User';

    public $hasMany = array(
        'MiembrosGrupo',
        'Personaje'
    );

    public $validate = array(
        'username' => array(
            'isUnique' => array(
                'rule' => 'isUnique',
                'message' => 'Ya existe ese usuario. Elige otro.'
            ),
            'required' => array(
                'rule' => array('notEmpty'),
                'message' => 'Se requiere un nombre de usuario'
            ),
            'alphaNumeric' => array(
                'rule' => 'alphaNumeric',
                'required' => true,
                'message' => 'Letras y números sólo'
            )
        ),
        'password' => array(
            'rule' => array('notEmpty'),
            'required' => true,
            'message' => 'Se requiere un password'
        ),
        'role' => array(
            'rule' => array('inList', array('admin', 'usuario')),
            'message' => 'Por favor introduce un rol válido',
            'allowEmpty' => false
        )
    );

    public function beforeSave($options = array()) {
        if (isset($this->data[$this->alias]['password'])) {
            $passwordHasher = new SimplePasswordHasher();
            $this->data[$this->alias]['password'] = $passwordHasher->hash(
                $this->data[$this->alias]['password']
            );
        }
        return true;
    }




}