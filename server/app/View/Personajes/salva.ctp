<?php

/**
 * @var $this view
 */

?>

<h1>Salvando <?php echo $personaje['Personaje']['nombre']; ?></h1>
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
