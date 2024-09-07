// let date_birthday = setInterval(function () {
//   let date = new Date();

//   let mybirthday = new Date(2025, 6, 19);

//   let today = date.getTime();
//   let birthday = mybirthday.getTime();
//   let diff = birthday - today;

//   let mont = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
//   let days = Math.floor(
//     (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//   );
//   let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((diff % (1000 * 60)) / 1000);
//   console.clear();
//   console.log(
//     "Menim ad gunume qalan tarix:  " +
//       mont +
//       " ay " +
//       days +
//       " gün " +
//       hours +
//       " saat " +
//       minutes +
//       " dəqiqə " +
//       seconds +
//       " saniyə "
//   );

//   if (diff < 0) {
//     clearInterval(date_birthday);
//     console.log("Bu gun menim Ad gunum");
//   }
// }, 1000);

// OOP - ARCHITECTURE
// try {
//   class Vehciles {
//     constructor(speed, year, engine, wheel) {
//       this.speed = speed;
//       this.year = year;
//       this.engine = engine;
//       this.wheel = wheel;
//     }

//     increaseSpeed() {
//       this.speed = this.speed + 5;
//     }
//   }

//   class Car extends Vehciles {
//     constructor(color, fuel, speed, year, engine, wheel) {
//       super(speed, year, engine, wheel);
//       this.color = color;
//       this.fuel = fuel;
//     }
//   }

//   class Plane extends Vehciles {
//     constructor(length, weight, speed, year, engine, wheel) {
//       super(speed, year, engine, wheel);
//       this.length = length;
//       this.weight = weight;
//     }
//   }
//   class Bus extends Vehciles {
//     constructor(length, speed, year, engine, wheel) {
//       super(speed, year, engine, wheel);
//       this.length = length;
//     }
//   }

//   class Velo extends Vehciles {
//     constructor(weight, speed, year, wheel) {
//       super(speed, year, wheel);
//       this.weight = weight;
//     }
//   }

//   class Moto extends Vehciles {
//     constructor(info, year, engine, wheel) {
//       super(speed, year, engine, wheel);
//       this.info = info;
//     }
//   }

//   const luftansa = new Plane(1200, 10, 900, 2010, true, 3);
//   const bmw = new Car("red", "dizel", 200, 2022, true, 4);
//   const bakuBus = new Bus(20, 200, 2022, true, 4);
//   const desna = new Velo(10, 20, 200, 2022, true, 4);
//   const honda = new Velo(
//     "This motor has been released 2015",
//     20,
//     200,
//     2022,
//     true,
//     4
//   );

//   console.log(luftansa);
//   console.log(bmw);
//   console.log(bakuBus);
//   console.log(desna);
//   console.log(honda);
// } catch (err) {
//   console.err(err);
// }
