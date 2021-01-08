



/* Obtenido de las ventas total*/


db.pcpiezas.aggregate(
   
    [
  
        {

        $group:{

            _id:null,
            Obtenido_vendido:{$sum:{$multiply: [ "$price", "$quantity" ] }} 
        
        }
    
    }]

    
    );



/*Beneficio total*/

db.pcpiezas.aggregate(
    [
    {
        $group:{

            _id: null,

            Beneficio_total:    {$sum:{$subtract:[{$multiply: [ "$price", "$quantity" ]},   {$multiply:["$quantity","$cost"]}] }}
        }
    }
]);


/*Ventas de este mes*/

db.pcpiezas.aggregate(
    [
    {
        $group:{

            _id:null,

                    Ventas:{$sum:1}
        }

    }
    
    ]);


/*Mejor client,que mas ha gastado*/

db.pcpiezas.aggregate(


    [

    {
        $group:{
            _id:"$client",
            
                    Mejor_Cliente:   {$sum:{$multiply: [ "$price", "$quantity" ] }}
        }
    },

    {
        $sort:{"Mejor_Cliente":-1}
    }
    ]);





/*Beneficio y cantidad  de articulos vendidos hasta la primera mitad del mes*/

db.pcpiezas.aggregate([
    {

      $match : { "sell_date": { $gte: new ISODate("2019-02-01"), $lt: new ISODate("2019-02-15") } }
  
    },

    {
      $group : {
         _id : { $dateToString: { format: "%Y-%m-%d", date: "$sell_date" } },
         
         Beneficio: {$sum:{$subtract:[{$multiply: [ "$price", "$quantity" ]},{$multiply:["$quantity","$cost"]}] }},

         cantidad_de_ventas: {$sum:"$quantity"} ,

         articulo:  {$push:"$item"}
      }
    },


    {
      $sort : { Beneficio: -1 }
    }


   ])


  
   /*Beneficios de cada componente(menor que 80) */

db.pcpiezas.aggregate(
    [
    {
        $group:{
            _id: "$item",
            Beneficios:{$sum:{$subtract:[{$multiply: [ "$price", "$quantity" ]},{$multiply:["$quantity","$cost"]}] }}
        }
    },
    {
       
        $match:{"Beneficios":{$lte:80}}


    }
]);
   

/*Mejor articulo (mas vendido)*/

db.pcpiezas.aggregate(

    [
    {
        $group:{

            _id: "$item",
                    
                     Masvendido:{$sum:{$subtract:[{$multiply: [ "$price", "$quantity" ]},{$multiply:["$quantity","$cost"]}] }}
        }
    },

    {
        $sort:{"Masvendido":-1}
    }
]);
