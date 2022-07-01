const morgan = require('morgan')
let express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }))

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://db:27017/mongodb";

/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  return db;
});



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo");
    dbo.createCollection("personajes", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo");
    const obj = {nombre: "prueba1", casa:"dc"}
    dbo.collection("personajes").insertOne(obj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo");
    dbo.collection("personajes").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.casa);
      db.close();
    });
  });
*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({ extended: true }));
app.use(cors({
    origin:'*'
}));
app.use(bodyParser.json());
app.use(morgan('dev'))


app.listen(6060, function(){
    console.log('Aplicación ejemplo, escuchando el puerto 6060!');
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mongo");
  var myobj = [{nombreSH:'Spiderman', nombreReal:'Peter Benjamin Parker', casa:'Marvel', año:'1962', equipamiento:'Mecanismos artificiales en sus muñecas que disparan telarañas inventada por él mismo que le permite columpiarse grandes distancias, alcanzar objetos fuera de su alcance e inmovilizar a sus enemigos. Traje formado por la tercera generación de partículas inestables, lo que le permite alterar la apariencia del mismo.', biografia:'Spiderman es la historia del tímido estudiante Peter Parker que viene mordisco de una araña contaminada de los radios radiactivos en el curso de un experimento científico. La picadura cambia el código genético y transforma el grácil muchacho en un individuo con características igual a aquellas de una araña si tuvo las dimensiones humanas, un verdadero y propio hombre araña. Peter ParkerÉl puede cumplir saltos prodigiosos, le sus manos y sus pies, adquieren la capacidad de adherir a cualquier superficie y éste le consiente de subir sobre las paredes de los rascacielos de Manhattan, además posee un equilibrio sorprendente y un sentido de araña que lo advierte de los peligros inminentes.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-1024x819.png'},
  {nombreSH:'Iron Man', nombreReal:'Anthony Edward Stark', casa:'Marvel', año:'1963', equipamiento:'Armadura, poder y habilidades', biografia:'Anthony Edward Stark, conocido como Tony Stark, es un multimillonario magnate empresarial estadounidense, playboy e ingenioso científico, quien sufrió una grave lesión en el pecho durante un secuestro en el Medio Oriente. Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva fabrica, en cambio, una armadura para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseñó a través de su compañía, Industrias Stark. Él usa el traje y las versiones sucesivas para proteger al mundo como Iron Man. Aunque al principio ocultó su verdadera identidad, Stark finalmente declaró que era Iron Man en un anuncio público.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Man-1024x819.png'},
  {nombreSH:'Capitan América', nombreReal:'Steven Grant Rogers', casa:'Marvel', año:'1941', equipamiento:'	Escudo de vibranium', biografia:'El Capitán América viste un traje que lleva un motivo de la bandera de los Estados Unidos, y utiliza un escudo casi indestructible que lanza como proyectil. El personaje es generalmente representado como el álter ego de Steve Rogers, un joven frágil mejorado a la cima de la perfección humana por un suero experimental S.S.S. (Suero supersoldado) para ayudar a los esfuerzos inminentes del gobierno de Estados Unidos en la Segunda Guerra Mundial. Cerca del final de la guerra, queda atrapado en el hielo y sobrevive en animación suspendida hasta que es descongelado en el presente. A pesar de que el Capitán América a menudo lucha por mantener sus ideales como un hombre fuera de su tiempo con sus realidades modernas, sigue siendo una figura muy respetada en su comunidad, hasta convertirse en el líder de Los Vengadores.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-captain-america-1024x819.png'},
  {nombreSH:'Thor', nombreReal:'Thor Odinson', casa:'Marvel', año:'1962', equipamiento:'Martillo Mjolnir', biografia:'Thor es el hijo de Odín, señor de los dioses de Asgard, y de Jord, que también es conocida como Gea, la más anciana diosa de la Tierra. Odín quería ser padre de un hijo cuyo poder derivase de la Tierra y de Asgard, así que se apareó con Jord. Odín creó una cueva en Noruega donde Jord dio a luz a Thor.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-thor-1024x819.png'},
  {nombreSH:'Wolverine', nombreReal:'James Howlett', casa:'Marvel', año:'1974', equipamiento:'Garras', biografia:'Wolverine fue el tercer mutante conocido en nacer, después de su medio hermano Dientes de Sable y siendo el primero Apocalipsis. Logan es el líder de los X-Men que perdió su memoria por culpa del programa Arma X y desde entonces ha tratado de recuperarla integrándose al grupo de los X-Men dirigido por el Profesor Charles Xavier para proteger a la humanidad de los mutantes malignos.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Wolverine-v2-def-1024x819.png'},

  {nombreSH:'Batman', nombreReal:'Bruce Wayne', casa:'DC', año:'1939', equipamiento:'Cinturón multiusos,Batarang, Batgyro, Batmobile, ', biografia:'Antes de convertirse en el mejor detective del mundo y cuando aún era un niño, el millonario Bruce Wayne vio morir a sus padres durante un asalto. Este asesinato definió su vida y lo impulsó a convertirse en el arma definitiva contra el crimen: Batman.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png'},
  {nombreSH:'Aquaman', nombreReal:'Arthur Curry', casa:'DC', año:'1941', equipamiento:'Tridente', biografia:'Aquaman es hijo del farero Thomas Curry y la reina de Atlántida, Atlanna. Al menos, así estaba establecido en la historias de la edad de plata. A partir de la serie Crisis en Tierras Infinitas, su origen cambió a completamente atlante. En esta nueva realidad, su padre es Atlan, un misterioso mago de Atlántida.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/dc-aquaman-1024x819.png'},
  {nombreSH:'Superman', nombreReal:'Clark Joseph Kent', casa:'DC', año:'1938', equipamiento:'Traje rojo y azul', biografia:'Superman nació en el planeta Krypton y recibió el nombre de Kal-El al nacer. Cuando era bebé, sus padres, el científico Jor-El, y su esposa Lara Lor-Van, lo enviaron a la Tierra en una pequeña nave espacial momentos antes de que Krypton fuera destruido en un cataclismo natural.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Superman-1024x819.png'},
  {nombreSH:'Gatubela', nombreReal:'Selina Kyle', casa:'DC', año:'DC', equipamiento:'Variedad de armas, vehículos y equipos temáticos. Disfraz', biografia:'Fue creada por Bill Finger y Bob Kane, e hizo su primera aparición en Batman N° 1 (primavera de 1940). Su nombre real, Selina, deriva de la deidad lunar Selene. Originalmente, Catwoman era una ladrona y rival de Batman con un disfraz de anciana, y era conocida simplemente como la Gata.', imgURL:'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Catwoman-2-1024x819.png'},
  {nombreSH:'Darkseid', nombreReal:'Uxas', casa:'DC', año:'1970', equipamiento:'-', biografia:'Darkseid es el gobernante tiránico del planeta Apokolips, cargo que obtuvo después de asesinar a su madre. Su obsesión es encontrar la Ecuación de la Anti-vida y usarla para gobernar el universo; esta meta también incluye conquistar su planeta rival, Nuevo Génesis, gobernado por el Alto Padre.', imgURL:'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Angel-1024x819.png'}
  ]
  dbo.collection("personajes").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Documento inseartados " + res.insertedCount);
    db.close();
  });
});






/*Peticiones*/

app.post('/cargar', (req, res) =>{
  try{
    const {nombresh, nombrereal, casa, año, equipamiento, biografia, imgURL} = req.body
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      const dbo = db.db("mongo");
      const personaje = {nombreSH:nombresh, 
                      nombreReal:nombrereal, 
                      casa: casa, 
                      año: año,
                      equipamiento: equipamiento,
                      biografia: biografia,
                      imgURL: imgURL};
      dbo.collection("personajes").insertOne(personaje, function(err, result) {
        if (err) throw err;
        console.log("Personaje cargado")
        db.close();
      });
    }); 
    res.send('Personaje cargado')
  }
  catch(err){
    console.log(err)
  }
}
)

app.get('/allpersonajes',(req, res) =>{
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo");
    dbo.collection("personajes").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
})

app.get('/personaje/:id', (req, res) =>{
  MongoClient.connect(url, function(err, db) {
    const {id} = req.params;
    if (err) throw err;
    const dbo = db.db("mongo");
    console.log('hola')
    const query = {nombreSH: id };
    dbo.collection("personajes").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result[0]);
      db.close();
    });
  });
})

app.delete('/eliminar/:nombre', (req, res)=>{
  MongoClient.connect(url, function(err, db) {
    const {nombre} = req.params
    if (err) throw err;
    var dbo = db.db("mongo");
    var myquery = {nombreSH: nombre };
    dbo.collection("personajes").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      res.send("1 document deleted");
      db.close();
    });
  });
})

app.put('/actualizar/:nombre', (req, res)=>{
  try{
    MongoClient.connect(url, function(err, db) {
      const {nombre} = req.params
      const {nombresh, nombrereal, casa, equipamiento, biografia, año, imgURL} = req.body
      if (err) throw err;
      var dbo = db.db("mongo");
      var myquery = {nombreSH : nombre};
      const newvalues = { $set: {nombreSH:nombresh, 
        nombreReal:nombrereal, 
        casa: casa, 
        año: año,
        equipamiento: equipamiento,
        biografia: biografia, 
        imgURL: imgURL} };
      dbo.collection("personajes").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
    res.send('Personaje actualizado')
  } catch(err){
    console.log(err)
  }
})

app.get('/personajesporcasa/:casa',(req, res) =>{
  MongoClient.connect(url, function(err, db) {
    const {casa} = req.params;
    if (err) throw err;
    const dbo = db.db("mongo");
    const query = {casa : casa};
    dbo.collection("personajes").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
})

