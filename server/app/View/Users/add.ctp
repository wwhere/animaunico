<div class="users form">
<?php echo $this->Form->create('User'); ?>
	<fieldset>
		<legend><?php echo __('Registrarse'); ?></legend>
	<?php
		echo $this->Form->input('username', array(
            'label' => 'Usuario'
        ));
		echo $this->Form->input('password', array(
            'label' => 'Contraseña'
        ));
		echo $this->Form->hidden('role', array(
            'value' => 'usuario'
        ));
	?>
	</fieldset>
<?php echo $this->Form->end(__('Enviar')); ?>
</div>
