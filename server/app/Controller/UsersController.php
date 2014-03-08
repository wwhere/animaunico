<?php

/**
 * @property User $User
 */

App::import('Controller','App');

class UsersController extends AppController {

    public function beforeFilter() {
        parent::beforeFilter();
        $this->Auth->allow('add', 'logout');
    }

    public function login() {
/*        if ($this->request->is('post')) {
            if ($this->Auth->login()) {
                return $this->redirect($this->Auth->redirectUrl());
            }
            $this->Session->setFlash(__('Usuario o contraseña erróneos'));
        }
        return;*/
        if ($this->Auth->login()) {
            return $this->redirect($this->Auth->redirectUrl());
        } else {
            $this->Session->setFlash(__('Usuario o contraseña erróneos'));
        }
    }

    public function logout() {
        return $this->redirect($this->Auth->logout());
    }

    public function index() {
        $this->User->recursive = 0;
        $this->set('users', $this->paginate());
    }

    public function view($id = null) {
        $this->User->id = $id;
        if (!$this->User->exists()) {
            throw new NotFoundException(__('Usuario no válido'));
        }
        $this->set('user', $this->User->read(null, $id));
    }

    public function add() {
        if ($this->request->is('post')) {
            $this->User->create();
            if ($this->User->save($this->request->data)) {
                $this->Session->setFlash(__('El usuario ha sido creado'));
                return $this->redirect(array('controller' => 'personajes','action' => 'index'));
            }
            $this->Session->setFlash(
                __('No se ha podido crear el usuario. Inténtalo de nuevo.')
            );
        }
    }

    public function edit($id = null) {
        $this->User->id = $id;
        if (!$this->User->exists()) {
            throw new NotFoundException(__('Usuario no válido'));
        }
        if ($this->request->is('post') || $this->request->is('put')) {
            if ($this->User->save($this->request->data)) {
                $this->Session->setFlash(__('El usuario ha sido salvado'));
                return $this->redirect(array('action' => 'index'));
            }
            $this->Session->setFlash(
                __('No se ha podido salvar el usuario. Inténtalo de nuevo.')
            );
        } else {
            $this->request->data = $this->User->read(null, $id);
            unset($this->request->data['Usuario']['password']);
        }
    }

    public function delete($id = null) {
        $this->request->onlyAllow('post');

        $this->User->id = $id;
        if (!$this->User->exists()) {
            throw new NotFoundException(__('Usuario no válido'));
        }
        if ($this->User->delete()) {
            $this->Session->setFlash(__('Usuario eliminado'));
            return $this->redirect(array('action' => 'index'));
        }
        $this->Session->setFlash(__('El usuario no ha sido eliminado'));
        return $this->redirect(array('action' => 'index'));
    }

}