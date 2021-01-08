

/* Clientes de un mes cualquiera de PCpiezasprov S.A*/



db.pcpiezas.insertMany([



    { _id : 1, 

        item : "teclado de membrana",
        price : NumberDecimal(20),
        quantity : NumberInt(40),
        sell_date : ISODate("2019-02-03"),
        cost : NumberDecimal(10),
        client: "Menganito S.A"},





    { _id : 2, 

        item : "teclado mecanico", 
        price : NumberDecimal(30), 
        quantity : NumberInt(21), 
        sell_date : ISODate("2019-02-11"),
        cost : NumberDecimal(12),
        client: "Juanpa S.A"},






    { _id : 3, 

        item : "teclado con leds", 
        price : NumberDecimal(40),  
        quantity : NumberInt(12), 
        sell_date : ISODate("2019-02-14"),
        cost : NumberDecimal(14),
        client: "Dolores Fuertes S.L"},






    { _id : 4, 

        item : "raton con leds",
        price : NumberDecimal(10),  
        quantity : NumberInt(10) , 
        sell_date : ISODate("2019-02-15"),
        cost : NumberDecimal(8.2),
        client: "Todoinfo"},





    { _id : 5, 

        item : "monitor hp", 
        price : NumberDecimal(110.5), 
        quantity : NumberInt(33) , 
        sell_date : ISODate("2019-02-11"),
        cost : NumberDecimal(60.5),
        client: "Ruca S.A"},






    { _id : 6, 

        item : "monitor msi", 
        price : NumberDecimal(110.5),
        quantity : NumberInt(70) , 
        sell_date : ISODate("2019-02-14") ,
        cost : NumberDecimal(80),
        client: "Informatica pepito"},






    { _id : 7, 

        item : "cascos gaming", 
        price : NumberDecimal(40),
        quantity : NumberInt(27) , 
        sell_date : ISODate("2019-02-03"),
        cost : NumberDecimal(21),
        client: "Muniain Faimiliares"},

  ])