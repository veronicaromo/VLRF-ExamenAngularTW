import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
libro4: String = "Miles, en la historia apodado como “El gordo”, es un chico solitario, no del todo introvertido, pero si bastante especial. Como no tiene ningún amigo en su escuela, decide ir en busca de su “Gran quizás” entrando en el mundo de un instituto de internos donde estudio su padre. Hay un detalle con respecto al gordo que me llamo mucho la atención. A  Miles le gustan las últimas palabras de los autores de libros, y/o personas influyentes como por ejemplo los ex presidentes. El no lee los libros, si no las biografías de sus autores, y recuerda las últimas palabras que dijeron antes de morir.";
libro5: String = "REDRUM. Esa era la palabra que Danny había visto. Y aunque no sabía leer, entendió que era un mensaje de horror el que se había reflejado en aquel espejo. Danny tenía cinco años, y a los cinco años pocos niños saben leer, pocos niños saben que los espejos invierten las imágenes y pocos niños, casi ninguno, saben diferenciar la realidad de sus fantasías. Aunque, claro, Danny tenía pruebas de que sus fantasías, aquellas fantasías relacionadas con “el resplandor”, acababan cumpliéndose. REDRUM-MURDER. Y el palo ensangrentado.";
libro9: String = "Charlie tiene 15 años y se ha quedado solo tras el suicidio de su mejor amigo. Vive con sus padres, su popular y guapa hermana y un hermano mayor que es una estrella del fútbol americano y que está a punto de comenzar la universidad. Su profesor de lengua está convencido de que Charlie posee una gran capacidad intelectual. Tras conocer a Sam y Patrick empieza a comprender lo que es ser un adolescente, y comienza un viaje hacia la madurez que le llevará a recorrer caminos nuevos e inesperados. Con ellos descubre nueva música, empieza a beber, fumar y coquetear con drogas, cambia de amigos ¡Hasta que se convierte en un joven de verdad!";
libro10: String = "Noah y su hermana gemela Jude son inseparables. El solitario Noah dibuja sin parar, y se ha enamorado en secreto de su enigmático vecino. La atrevida Jude salta desde altísimos acantilados, se pinta los labios de rojo y habla hasta por los codos. Pero tres años después, a los 16, los hermanos ya no se hablan. Algo paso entre ellos que arruino dramáticamente su relación llevándolos por caminos diferentes... Hasta que Jude conoce aun chico guapo, frágil, arrogante... y a alguien mas, una nueva fuerza en su vida, todavía mas predecible y ligada a su pasado de forma inevitable. Los primeros años de esta historia los cuenta Noah; los últimos, Jude. Lo que ninguno comprende es que apenas conocen la mitad de la historia y sin tan solo pudieran compartirla tendrían una oportunidad de regalarse el mundo de nuevo.";
libro14: String = "En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota..."
  constructor() { }

  ngOnInit(): void {
  }

}
