function Device(name) {
    this.name = name;
    this.electric = electric;
    this.switch_on = switch_on;
}

Device.prototype.electricDeviceWork = function () {
    let work = false
    if (this.electric && this.switch_on) {
        work = true;
    } else {
        work = false;
             }
   return (work);
   }

function EleDevice(name, power, electric, switch_on) {
  this.name = name;
  this.power = power;
  this.electric = electric;
  this.switch_on = switch_on;
  this. showPower = function(){
    console.log(power)
  }
}

EleDevice.prototype = new Device();

let sumPower = function(){
    let sum = 0;
   for(let value of ElecDiv){
    if (value.electricDeviceWork()){
        sum += value.power;
    }else{
        sum;
    }
   }
  return sum;
}

const lamp = new EleDevice(name = "Лампа", power = 30, electric = true, switch_on = true);
const computer = new EleDevice(name = "Компьютер", power = 20, electric = true, switch_on = true);
let ElecDiv = [lamp, comp];

console.log(lamp.electricDeviceWork());

console.log(sumPower(ElecDiv));
lamp.showPower();
comp.showPower();