<?php
/**
 * @property User $User
 */

App::uses('SimplePasswordHasher', 'Controller/Component/Auth');

class User extends AppModel {

    public function beforeSave($options = array()) {
        if (isset($this->data[$this->alias]['password'])) {
            $passwordHasher = new SimplePasswordHasher();
            $this->data[$this->alias]['password'] = $passwordHasher->hash(
                $this->data[$this->alias]['password']
            );
        }
        return true;
    }

    public $hasMany = array(
        'MiembrosGrupo'
    );

    public $validate = array(
        'username' => array(
            'required' => array(
                'rule' => array('notEmpty'),
                'message' => 'Se requiere un nombre de usuario'
            )
        ),
        'password' => array(
            'required' => array(
                'rule' => array('notEmpty'),
                'message' => 'Se requiere un password'
            )
        ),
        'role' => array(
            'valid' => array(
                'rule' => array('inList', array('admin', 'usuario')),
                'message' => 'Por favor introduce un rol válido',
                'allowEmpty' => false
            )
        )
    );

}