// Global Envirement
// this or window(for chrom) AND global(node)
global.name = "afshin";

function callName() {
  console.log(this.name);
}
callName(); //Afshin

global.name = "amir";
callName(); //amir
