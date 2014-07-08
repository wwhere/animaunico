<?php

/**
 * @var $this view
 */

?>
<!-- File: /app/View/Posts/index.ctp -->

<h1>Personajes</h1>
<table>
    <tr>
        <th><?php echo $this->Paginator->sort('nombre', 'Nombre'); ?></th>
        <th><?php echo $this->Paginator->sort('nivel', 'Nivel'); ?></th>
        <th><?php echo $this->Paginator->sort('categoria', 'Categoria'); ?></th>
        <th><?php echo $this->Paginator->sort('raza', 'Raza'); ?></th>
        <th><?php echo $this->Paginator->sort('User.username', 'Creador'); ?></th>
        <th>Acción</th>
    </tr>

    <?php foreach ($data as $personaje): ?>
        <tr>
            <td><?php echo $this->Html->link($personaje['Personaje']['nombre'],
                    array('controller' => 'personajes', 'action' => 'view', $personaje['Personaje']['id'])); ?></td>
            <td><?php echo $personaje['Personaje']['nivel']; ?></td>
            <td><?php echo $personaje['Personaje']['categoria']; ?></td>
            <td><?php echo $personaje['Personaje']['raza']; ?></td>
            <td><?php echo $personaje['User']['username']; ?></td>
            <td><?php
                echo $this->Form->postLink(
                    'Borrar',
                    array('action' => 'delete', $personaje['Personaje']['id']),
                    array('confirm' => '¿Seguro?')) ?>
                <?php
                /*                    echo $this->Form->postLink(
                                        'Cargar en el generador',
                                        array('action' => 'edit', $personaje['Personaje']['id']))*/
                $optionsCreate = array(
                    'type' => 'GET',
                    'url' => 'http://helechaloscuro.net/animaunico/beta/index.html'
                );
                echo $this->Form->create($optionsCreate);
                echo $this->Form->hidden('id', array(
                    'value' => $personaje['Personaje']['id']
                ));
                echo $this->Form->hidden('carga', array(
                    'value' => '1'
                ));
                $options = array(
                    'label' => 'Carga en Anima: Único'
                );
                echo $this->Form->end($options);
                ?>
            </td>

        </tr>
    <?php endforeach; ?>

</table>
<?php
// Shows the page numbers
echo $this->Paginator->numbers();

// Shows the next and previous links
echo $this->Paginator->prev(
'« Anterior ',
null,
null,
array('class' => 'disabled')
);
echo $this->Paginator->next(
' Siguiente »',
null,
null,
array('class' => 'disabled')
);

// prints X of Y, where X is current page and Y is number of pages
echo $this->Paginator->counter();
?>