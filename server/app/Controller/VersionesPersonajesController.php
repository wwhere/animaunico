<?php
App::uses('AppController', 'Controller');
/**
 * VersionesPersonajes Controller
 *
 * @property VersionesPersonaje $VersionesPersonaje
 * @property PaginatorComponent $Paginator
 */
class VersionesPersonajesController extends AppController {

/**
 * Components
 *
 * @var array
 */
	public $components = array('Paginator');

/**
 * index method
 *
 * @return void
 */
	public function index() {
		$this->VersionesPersonaje->recursive = 0;
		$this->set('versionesPersonajes', $this->Paginator->paginate());
	}

/**
 * view method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function view($id = null) {
		if (!$this->VersionesPersonaje->exists($id)) {
			throw new NotFoundException(__('Invalid versiones personaje'));
		}
		$options = array('conditions' => array('VersionesPersonaje.' . $this->VersionesPersonaje->primaryKey => $id));
		$this->set('versionesPersonaje', $this->VersionesPersonaje->find('first', $options));
	}

/**
 * add method
 *
 * @return void
 */
	public function add() {
		if ($this->request->is('post')) {
			$this->VersionesPersonaje->create();
			if ($this->VersionesPersonaje->save($this->request->data)) {
				$this->Session->setFlash(__('The versiones personaje has been saved.'));
				return $this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The versiones personaje could not be saved. Please, try again.'));
			}
		}
		$personajes = $this->VersionesPersonaje->Personaje->find('list');
		$this->set(compact('personajes'));
	}

/**
 * edit method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function edit($id = null) {
		if (!$this->VersionesPersonaje->exists($id)) {
			throw new NotFoundException(__('Invalid versiones personaje'));
		}
		if ($this->request->is(array('post', 'put'))) {
			if ($this->VersionesPersonaje->save($this->request->data)) {
				$this->Session->setFlash(__('The versiones personaje has been saved.'));
				return $this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The versiones personaje could not be saved. Please, try again.'));
			}
		} else {
			$options = array('conditions' => array('VersionesPersonaje.' . $this->VersionesPersonaje->primaryKey => $id));
			$this->request->data = $this->VersionesPersonaje->find('first', $options);
		}
		$personajes = $this->VersionesPersonaje->Personaje->find('list');
		$this->set(compact('personajes'));
	}

/**
 * delete method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function delete($id = null) {
		$this->VersionesPersonaje->id = $id;
		if (!$this->VersionesPersonaje->exists()) {
			throw new NotFoundException(__('Invalid versiones personaje'));
		}
		$this->request->onlyAllow('post', 'delete');
		if ($this->VersionesPersonaje->delete()) {
			$this->Session->setFlash(__('The versiones personaje has been deleted.'));
		} else {
			$this->Session->setFlash(__('The versiones personaje could not be deleted. Please, try again.'));
		}
		return $this->redirect(array('action' => 'index'));
	}

/**
 * admin_index method
 *
 * @return void
 */
	public function admin_index() {
		$this->VersionesPersonaje->recursive = 0;
		$this->set('versionesPersonajes', $this->Paginator->paginate());
	}

/**
 * admin_view method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function admin_view($id = null) {
		if (!$this->VersionesPersonaje->exists($id)) {
			throw new NotFoundException(__('Invalid versiones personaje'));
		}
		$options = array('conditions' => array('VersionesPersonaje.' . $this->VersionesPersonaje->primaryKey => $id));
		$this->set('versionesPersonaje', $this->VersionesPersonaje->find('first', $options));
	}

/**
 * admin_add method
 *
 * @return void
 */
	public function admin_add() {
		if ($this->request->is('post')) {
			$this->VersionesPersonaje->create();
			if ($this->VersionesPersonaje->save($this->request->data)) {
				$this->Session->setFlash(__('The versiones personaje has been saved.'));
				return $this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The versiones personaje could not be saved. Please, try again.'));
			}
		}
		$personajes = $this->VersionesPersonaje->Personaje->find('list');
		$this->set(compact('personajes'));
	}

/**
 * admin_edit method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function admin_edit($id = null) {
		if (!$this->VersionesPersonaje->exists($id)) {
			throw new NotFoundException(__('Invalid versiones personaje'));
		}
		if ($this->request->is(array('post', 'put'))) {
			if ($this->VersionesPersonaje->save($this->request->data)) {
				$this->Session->setFlash(__('The versiones personaje has been saved.'));
				return $this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The versiones personaje could not be saved. Please, try again.'));
			}
		} else {
			$options = array('conditions' => array('VersionesPersonaje.' . $this->VersionesPersonaje->primaryKey => $id));
			$this->request->data = $this->VersionesPersonaje->find('first', $options);
		}
		$personajes = $this->VersionesPersonaje->Personaje->find('list');
		$this->set(compact('personajes'));
	}

/**
 * admin_delete method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */
	public function admin_delete($id = null) {
		$this->VersionesPersonaje->id = $id;
		if (!$this->VersionesPersonaje->exists()) {
			throw new NotFoundException(__('Invalid versiones personaje'));
		}
		$this->request->onlyAllow('post', 'delete');
		if ($this->VersionesPersonaje->delete()) {
			$this->Session->setFlash(__('The versiones personaje has been deleted.'));
		} else {
			$this->Session->setFlash(__('The versiones personaje could not be deleted. Please, try again.'));
		}
		return $this->redirect(array('action' => 'index'));
	}}
