// ------ Camera settings.
set translation [0 -0.367113 -20]
set rotation [0.963994 0.0575931 -0.259613 0.0514549 0.917418 0.394584 0.260899 -0.393735 0.881422]
set pivot [0 0 0]
set scale .10

// ------ The actual EisenScript
set background #fff
set maxdepth 700

 r0

rule r0 {
  12 * { rz 51 ry 7 } R1
  3 * { rz 1110 } R2
}

rule R1 {
  { x 2.5 rx 1.57 rz 20 ry 3 rz 10 s 0.99 hue 0.5 sat 0.99  } R1
  { s 4 } sphere::shiny
}

rule R2 {
  { x -1.3 rz 6 ry 3 rz 12 s 0.99 hue 0.3 sat 0.99 } R2
  { s 4 }  sphere
}
rule R3 {
  { x -4.3 rz 6 ry 3 s 2 hue 0.6 sat 0.99 } R2
  { s 4 }  sphere
}
rule r4 {
  12 * { rz 125  } R1
  3 * { rz 140 } R2
}

rule R5 {
  { x 21.5 rx 1.57 rz 20 ry 3 s 0.99 hue 0.4 sat 0.99  } R1
  { s 4 } sphere::shiny
}

rule R6 {
  { x 3.3 rz 6 ry 3 s 0.99 hue 0.4 sat 0.99 } R2
  { s 4 }  sphere::shiny
}
rule R7 {
  { x -4.3 rz 6 ry 3 s 2 hue 0.6 sat 0.99 } R2
  { s 5 }  sphere
}
rule r8 {
  111 * { rz 125  } R1
  3 * { rz 140 } R2
}

// ----- Settings for internal raytracer

set raytracer::shadows true

// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 11

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
set raytracer::dof [0.23,0.17]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::shiny::reflection 0.3
set raytracer::phong [3,0.6,0.2]
 