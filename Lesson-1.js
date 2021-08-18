   /*1-ое задание*/
   let Tc;
   do {
       Tc = prompt('Введите сколько градусов по цельсию:');
   } while (Tc != Number(Tc));

   alert(`Получилось: ${getF(Tc).toFixed(1)} градусов по Фаренгейту.`)

   function getF(a) {
       let Tf = (9 / 5) * a + 32;
       return Tf;
   }
   /* 2-ое задание*/
   let name;
   let admin;
   name = 'Василий';
   admin = name;
   alert(admin);