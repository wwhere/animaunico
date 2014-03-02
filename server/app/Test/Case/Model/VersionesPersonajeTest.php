<?php
App::uses('VersionesPersonaje', 'Model');

/**
 * VersionesPersonaje Test Case
 *
 */
class VersionesPersonajeTest extends CakeTestCase {

/**
 * Fixtures
 *
 * @var array
 */
	public $fixtures = array(
		'app.versiones_personaje',
		'app.personaje'
	);

/**
 * setUp method
 *
 * @return void
 */
	public function setUp() {
		parent::setUp();
		$this->VersionesPersonaje = ClassRegistry::init('VersionesPersonaje');
	}

/**
 * tearDown method
 *
 * @return void
 */
	public function tearDown() {
		unset($this->VersionesPersonaje);

		parent::tearDown();
	}

}
