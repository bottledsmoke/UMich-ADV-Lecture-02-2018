import React, {Component} from 'react';
import { Scene, 
  PerspectiveCamera, 
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three';

export default class Three extends Component {
  constructor(props) {
    super(props);
    this.scene = new Scene();

    this.sceneWidth = window.innerWidth;
    this.sceneHeight = window.innerHeight;
    this.camera = new PerspectiveCamera(75, this.sceneWidth / this.sceneHeight, 0.1, 1000);

    this.renderer = new WebGLRenderer();

    this.animate = this.animate.bind(this);
    this.renderCube = this.renderCube.bind(this);
  }
  componentDidMount() {
    this.renderer.setSize( this.sceneWidth, this.sceneHeight );
    document.getElementById('three-container').appendChild( this.renderer.domElement );

    this.renderCube();
    this.animate();
  }
  renderCube() {
    const geometry = new BoxGeometry(1,1,1);
    const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new Mesh( geometry, material );


    this.scene.add(this.cube);
    this.camera.position.z = 5;
    console.log(this.scene, this.camera);
  }
  animate() {
    requestAnimationFrame( this.animate );
    this.cube.rotation.x += 0.025;
    this.cube.rotation.y += 0.025;
    this.renderer.render( this.scene, this.camera );
  }
  render() {
    return(
      <div id={'three-container'}>
        Three.js
      </div>
    )
  }
}
