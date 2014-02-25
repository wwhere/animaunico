<div class="versionesPersonajes index">
	<h2><?php echo __('Versiones Personajes'); ?></h2>
	<table cellpadding="0" cellspacing="0">
	<tr>
			<th><?php echo $this->Paginator->sort('id'); ?></th>
			<th><?php echo $this->Paginator->sort('personaje_id'); ?></th>
			<th><?php echo $this->Paginator->sort('nivel'); ?></th>
			<th><?php echo $this->Paginator->sort('categoria'); ?></th>
			<th><?php echo $this->Paginator->sort('json'); ?></th>
			<th class="actions"><?php echo __('Actions'); ?></th>
	</tr>
	<?php foreach ($versionesPersonajes as $versionesPersonaje): ?>
	<tr>
		<td><?php echo h($versionesPersonaje['VersionesPersonaje']['id']); ?>&nbsp;</td>
		<td>
			<?php echo $this->Html->link($versionesPersonaje['Personaje']['id'], array('controller' => 'personajes', 'action' => 'view', $versionesPersonaje['Personaje']['id'])); ?>
		</td>
		<td><?php echo h($versionesPersonaje['VersionesPersonaje']['nivel']); ?>&nbsp;</td>
		<td><?php echo h($versionesPersonaje['VersionesPersonaje']['categoria']); ?>&nbsp;</td>
		<td><?php echo h($versionesPersonaje['VersionesPersonaje']['json']); ?>&nbsp;</td>
		<td class="actions">
			<?php echo $this->Html->link(__('View'), array('action' => 'view', $versionesPersonaje['VersionesPersonaje']['id'])); ?>
			<?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $versionesPersonaje['VersionesPersonaje']['id'])); ?>
			<?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $versionesPersonaje['VersionesPersonaje']['id']), null, __('Are you sure you want to delete # %s?', $versionesPersonaje['VersionesPersonaje']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
	</table>
	<p>
	<?php
	echo $this->Paginator->counter(array(
	'format' => __('Page {:page} of {:pages}, showing {:current} records out of {:count} total, starting on record {:start}, ending on {:end}')
	));
	?>	</p>
	<div class="paging">
	<?php
		echo $this->Paginator->prev('< ' . __('previous'), array(), null, array('class' => 'prev disabled'));
		echo $this->Paginator->numbers(array('separator' => ''));
		echo $this->Paginator->next(__('next') . ' >', array(), null, array('class' => 'next disabled'));
	?>
	</div>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('New Versiones Personaje'), array('action' => 'add')); ?></li>
		<li><?php echo $this->Html->link(__('List Personajes'), array('controller' => 'personajes', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Personaje'), array('controller' => 'personajes', 'action' => 'add')); ?> </li>
	</ul>
</div>
