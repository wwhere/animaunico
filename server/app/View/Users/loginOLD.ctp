<div class="users form">
    <?php echo $this->Session->flash('auth'); ?>
    <?php echo $this->Form->create('User'); ?>
    <fieldset>
        <legend>
            <?php echo __('Por favor, introduce tu usuario y contraseña.'); ?>
        </legend>
        <?php
        echo $this->Form->input('username');
        echo $this->Form->input('password');
        ?>
        <legend>
            <?php echo __('Si no tienes usuario, puedes registrarte en el siguiente enlace antes de hacer login.'); ?>
        </legend>
        <?php
            echo $this->Html->link(__('Registrarse'), array('action' => 'add'));
        ?>
    </fieldset>
    <?php echo $this->Form->end(__('Login')); ?>
</div>