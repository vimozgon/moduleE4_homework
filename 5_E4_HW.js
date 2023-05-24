class Device{
    constructor(name) {
        this.name = name;
        this.electric = electric;
        this.switch_on = switch_on;
    }
}

class ElectricDevice extends Device{
    constructor(name, power, electric, switch_on ){
    super(name);
    this.power = power;
    this.electric = electric;
    this.switch_on = switch_on;
    this. showPower = function(){
        console.log(power)
    }
  }


    function electricDeviceWork(){
        let work = false
        if (this.electric && this.switch_on) {
            work = true;
        } else {
           work = false;
               }
     return work;
  }
}

function sumPower(ElecDiv){
      let sum = 0;
     for(let value of ElecDiv){
      if (value.electricDeviceWork){
          sum += value.power;
      }else{
          sum;
      }
     }
    return sum;
  }

const lamp = new ElectricDevice("lamp_desk", 30, true, true);
const comp = new ElectricDevice("computer", 20, true, true);
let ElecDiv = [lamp, comp];
console.log(lamp.electricDeviceWork);
console.log(sumPower(ElecDiv));
lamp.showPower();
comp.showPower();