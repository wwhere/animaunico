<div class="versionesPersonajes form">
<?php echo $this->Form->create('VersionesPersonaje'); ?>
	<fieldset>
		<legend><?php echo __('Add Versiones Personaje'); ?></legend>
	<?php
		echo $this->Form->input('personaje_id');
		echo $this->Form->input('nivel');
		echo $this->Form->input('categoria');
		echo $this->Form->input('json');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Versiones Personajes'), array('action' => 'index')); ?></li>
		<li><?php echo $this->Html->link(__('List Personajes'), array('controller' => 'personajes', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('New Personaje'), array('controller' => 'personajes', 'action' => 'add')); ?> </li>
	</ul>
</div>
