<div class="versionesPersonajes view">
<h2><?php echo __('Versiones Personaje'); ?></h2>
	<dl>
		<dt><?php echo __('Id'); ?></dt>
		<dd>
			<?php echo h($versionesPersonaje['VersionesPersonaje']['id']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Personaje'); ?></dt>
		<dd>
			<?php echo $this->Html->link($versionesPersonaje['Personaje']['id'], array('controller' => 'personajes', 'action' => 'view', $versionesPersonaje['Personaje']['id'])); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Nivel'); ?></dt>
		<dd>
			<?php echo h($versionesPersonaje['VersionesPersonaje']['nivel']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Categoria'); ?></dt>
		<dd>
			<?php echo h($versionesPersonaje['VersionesPersonaje']['categoria']); ?>
			&nbsp;
		</dd>
		<dt><?php echo __('Json'); ?></dt>
		<dd>
			<?php echo h($versionesPersonaje['VersionesPersonaje']['json']); ?>
			&nbsp;
		</dd>
	</dl>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('Edit Versiones Personaje'), array('action' => 'edit', $versionesPersonaje['VersionesPersonaje']['id'])); ?> </li>
		<li><?php echo $this->Form->postLink(__('Delete Versiones Personaje'), array('action' => 'delete', $versionesPersonaje['VersionesPersonaje']['id']), null, __('Are you sure you want to delete # %s?', $versionesPersonaje['VersionesPersonaje']['id'])); ?> </li>
		<li><?php echo $this->Html->link(__('List Versiones Personajes'), array('action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Versiones Personaje'), array('action' => 'add')); ?> </li>
		<li><?php echo $this->Html->link(__('List Personajes'), array('controller' => 'personajes', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Personaje'), array('controller' => 'personajes', 'action' => 'add')); ?> </li>
	</ul>
</div>
