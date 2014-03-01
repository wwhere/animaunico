<?php
/**
 * @property Personaje $Personaje
 */
class Personaje extends AppModel {

    public $name = 'Personaje';

    public $validate = array(
        'nombre' => array(
            'rule' => 'notEmpty'
        ),
        'categoria' => array(
            'rule' => 'notEmpty'
        ),
        'raza' => array(
            'rule' => 'notEmpty'
        ),
        'nivel' => array(
            'nivelRule-1' => array(
                'rule' => 'notEmpty'
            ),
            'nivelRule-2' => array(
                'rule' => 'numeric',
                'message' => 'El nível debe ser un número.'
            )
        ),
        'json' => array(
            'rule' => 'notEmpty'
        )
    );

    public $belongsTo = 'User';

}