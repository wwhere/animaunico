<?php

/**
 * @var $this view
 */

?>

    <h1>Editar Personaje</h1>
<?php
echo $this->Form->create('Personaje', array('action' => 'edit'));
echo $this->Form->input('nombre');
echo $this->Form->input('nivel');
echo $this->Form->input('categoria');
echo $this->Form->input('raza');
echo $this->Form->input('json');
echo $this->Form->input('id', array('type' => 'hidden'));
echo $this->Form->end('Salvar Personaje');