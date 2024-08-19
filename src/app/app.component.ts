import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

interface CarouselItem {
  title: string;
  description: string;
  iconClass: string; // Nueva propiedad para la clase del icono
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flowbiteBlocks';
  currentPageIndex = 0;
  itemsPerPage = 6;

  items: CarouselItem[] = [
    {
      title: 'Catálogo de productos',
      description: 'Listado completo con imágenes, descripciones, precios y disponibilidad, Búsqueda y filtrado para navegación rápida.',
      iconClass: 'fas fa-box-open text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Gestión de inventario',
      description: 'Stock disponible en tiempo real, Notificaciones automáticas para reabastecimiento.',
      iconClass: 'fas fa-warehouse text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Blog/sección de noticias',
      description: 'Espacio para publicar contenido relevante, como noticias, consejos, guías de productos, etc. Mejora del SEO y atracción de tráfico orgánico.',
      iconClass: 'fas fa-blog text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Gestión de cuentas de clientes',
      description: 'Posibilidad de aprobar o rechazar usuarios, como ocultar datos si no se loguea el cliente logrando la privacidad buscada',
      iconClass: 'fas fa-user-cog text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Carrito de compras y pago en línea',
      description: 'Carrito de compras intuitivo. Múltiples métodos de pago. Opciones de pago seguro y protección de datos.',
      iconClass: 'fas fa-shopping-cart text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Personalización y recomendaciones',
      description: 'Opciones para sugerir productos basados en el historial de búsquedas y compras. Listas de deseos personalizadas.',
      iconClass: 'fas fa-thumbs-up text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Cuadros de comparación',
      description: 'Comparación de productos en precio y características.',
      iconClass: 'fas fa-exchange-alt text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Análisis y reportes',
      description: 'Herramientas de análisis para rastrear el comportamiento de los usuarios. Reportes de ventas, tráfico web y rendimiento de productos.',
      iconClass: 'fas fa-chart-line text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Atención al cliente',
      description: 'Soporte por correo electrónico o WhatsApp. Sección de preguntas frecuentes. Información de contacto y formulario de consulta.',
      iconClass: 'fas fa-headset text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Integración con redes sociales',
      description: 'Enlaces y botones para compartir productos en redes sociales. Integración de feeds en la pagina.',
      iconClass: 'fas fa-share-alt text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Optimización para móviles',
      description: 'Diseño responsivo para dispositivos móviles y tabletas.',
      iconClass: 'fas fa-mobile-alt text-primary-600 lg:text-2xl dark:text-primary-300'
    },
    {
      title: 'Opiniones y Reseñas de Clientes',
      description: 'Secciones para dejar opiniones y calificaciones de productos. Moderación de reseñas para mantener la calidad del contenido.',
      iconClass: 'fas fa-star text-primary-600 lg:text-2xl dark:text-primary-300'
    },
  ];

  paginatedItems: CarouselItem[][] = [];

  ngOnInit(): void {
    initFlowbite();
    document.documentElement.classList.add('dark');
    this.paginateItems();
  }

  paginateItems() {
    for (let i = 0; i < this.items.length; i += this.itemsPerPage) {
      this.paginatedItems.push(this.items.slice(i, i + this.itemsPerPage));
    }
  }

  nextPage() {
    if (this.currentPageIndex < this.paginatedItems.length - 1) {
      this.currentPageIndex++;
    } else {
      this.currentPageIndex = 0; // Vuelve al inicio
    }
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    } else {
      this.currentPageIndex = this.paginatedItems.length - 1; // Va al final
    }
  }


  faqs = [
    {
      question: '¿Hay algún costo adicional al valor mensual?',
      answer: 'No, no hay costos adicionales. Sólo abonas mensualmente el valor.',
      open: false
    },
    {
      question: '¿Puedo darme de baja en cualquier momento?',
      answer: 'Sí, puedes cancelar tu suscripción en cualquier momento desde el administrador de tu tienda, sin costo adicional.',
      open: false
    },
    {
      question: '¿Hacemos facturas?',
      answer: 'Si, emitimos factura B y C',
      open: false
    },
    {
      question: '¿El dominio ya está configurado?',
      answer: 'No, puedes usar tu propio dominio o comprar uno nuevo. Comprando cualquier plan mensual te ofrecemos uno gratuito para empezar.',
      open: false
    },
    {
      question: '¿Cómo hacen las personas para encontrar mi tienda?',
      answer: 'Promociona tu tienda compartiendo el link en todos lados. Utiliza herramientas y consejos de marketing que ofrecemos para maximizar tus ventas.',
      open: false
    },
     {
      question: '¿Recibiré alojamiento web gratis?',
      answer: 'Sí. Todos los planes de Adonis, incluyen alojamiento web seguro e ilimitado.',
      open: false
    },
    {
      question: '¿Hay algún cargo de configuración?',
      answer: 'No. No hay cargos de configuración en ninguno de nuestros planes.',
      open: false
    },
    {
      question: '¿En qué países puedo usar Adonis?',
      answer: 'Puedes usar Adonis en casi todos los países del mundo.',
      open: false
    },
    {
      question: '¿Es Dificil de Implementar?',
      answer: 'No, Adonis esta pensado para todo tipo de publico',
      open: false
    },
       {
      question: '¿Que pasa si necesito ayuda?',
      answer: 'Nuestos agentes estan disponibles para todo tipo de consultas y soporte',
      open: false
    },
     {
      question: '¿Cuales son las diferencias con una pagina convencional?',
      answer: 'Te brinda lo mejor de ambos mundos: la flexibilidad y personalización de una web convencional, combinada con la facilidad de uso y el costo efectivo de una plantilla pre diseñada',
      open: false
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}

