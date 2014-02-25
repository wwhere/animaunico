<?php

/**
 * @var $this view
 */

?>

<!-- File: /app/View/Posts/index.ctp -->

<h1><?php echo $personaje['Personaje']['nombre']; ?></h1>
<table>
    <tr>
        <th>Nivel</th>
        <th>Categoría</th>
        <th>Raza</th>
        <th>JSON</th>
    </tr>

    <tr>
        <td><?php echo $personaje['Personaje']['nivel']; ?></td>
        <td><?php echo $personaje['Personaje']['categoria']; ?></td>
        <td><?php echo $personaje['Personaje']['raza']; ?></td>
        <td><?php echo $personaje['Personaje']['json']; ?></td>
    </tr>

</table>

