<?php
/**
 * @property Personaje $Personaje
 */

class PersonajesController extends AppController {
    public $name = 'Personajes';
    public $components = array('Session');

    function index() {
        $this->set('personajes', $this->Personaje->find('all'));
    }

    function indexBeta() {
        $this->set('personajes', $this->Personaje->find('all'));
    }

    function view($id = null) {
        $this->set('personaje',$this->Personaje->find(
            'first', array (
                'conditions' => array('Personaje.id' => $id)
            )
        ));
    }

    function carga($id = null) {
        $this->set('personaje',$this->Personaje->find(
            'first', array (
                'conditions' => array('Personaje.id' => $id)
            )
        ));
        $this->layout = 'ajax';
    }

    public function add() {
        if ( $this->request->is('post')) {
            $this->request->data['Personaje']['autor'] = $this->Auth->user('id');
            $this->request->data['Personaje']['nombre'] = $this->request->data['Personaje']['nombre'];
            $this->request->data['Personaje']['raza'] = $this->request->data['Personaje']['raza'];
            $this->request->data['Personaje']['json'] = $this->request->data['Personaje']['json'];
            if ($this->Personaje->save($this->request->data)) {
                $this->Session->setFlash('Tu personaje se ha salvado');
                $this->redirect(array('action' => 'index'));
            }
        }
    }

    public function salva() {
        if ($this->request->is(array('post', 'put'))) {
            $data = array(
                'Personaje' => array(
                    'nombre' => $this->request->data('nombre'),
                    'categoria' => $this->request->data('categoria'),
                    'nivel' => $this->request->data('nivel'),
                    'raza' => $this->request->data('raza'),
                    'json' => $this->request->data('json'),
                    'user_id' => $this->Auth->user('id')
                )
            );
            $this->Personaje->create();

            if ($this->Personaje->save($data)) {
                $this->Session->setFlash('Tu personaje se ha salvado');
                $this->redirect(array('action' => 'index'));
            }
        } else {
            $this->redirect(array('action' => 'index'));
        }
    }

    public function edit($id = null) {
        if (!$id) {
            throw new NotFoundException(__('Personaje no válido'));
        }

        $personaje = $this->Personaje->findById($id);
        if (!$personaje) {
            throw new NotFoundException(__('Personaje no válido'));
        }

        if ($this->request->is(array('post', 'put'))) {
            $this->Personaje->id = $id;
            if ($this->Personaje->save($this->request->data)) {
                $this->Session->setFlash(__('Tu Personaje ha sido actualizado.'));
                return $this->redirect(array('action' => 'index'));
            }
            $this->Session->setFlash(__('No se ha podido actualizar tu personaje.'));
        }

        if (!$this->request->data) {
            $this->request->data = $personaje;
        }
    }

    function delete($id) {
        if (!$this->request->is('post')) {
            throw new MethodNotAllowedException();
        }
        if ($this->Personaje->delete($id)) {
            $this->Session->setFlash('El Personaje con id: ' . $id . ' ha sido eliminado.');
            $this->redirect(array('action' => 'index'));
        }
    }

    public function beforeFilter() {
        parent::beforeFilter();
        $this->Auth->allow('carga', 'indexBeta');
    }

    public function isAuthorized($user) {
        if (($this->action === 'add') || ($this->action === 'salva')  || ($this->action === 'carga')) {
            return true;
        }

        if (in_array($this->action, array('edit', 'delete'))) {
            $personajeId = $this->request->params['pass'][0];
            if ($this->Personaje->isOwnedBy($personajeId, $user['id'])) {
                return true;
            }
        }

        return parent::isAuthorized($user);
    }
}