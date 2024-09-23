import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModalListPage } from '../components/modal-list/modal-list.page';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormAggActiPage } from '../components/form-agg-acti/form-agg-acti.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule],
  encapsulation: ViewEncapsulation.None // Desactiva el encapsulamiento

})
export class Tab1Page implements OnInit{

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.tareas = JSON.parse(localStorage.getItem('tarea') || '[]');
    this.proyectos = JSON.parse(localStorage.getItem('proyecto') || '[]');
    this.notas = JSON.parse(localStorage.getItem('nota') || '[]');
  }

  username = 'Juan Aquino';
  selectedTab: string = 'tareas'; // Default selected tab

  tareas = [
    {
      title: 'Actualizar proyecto AmCoder Fit',
      content: 'Migrar el dashboard de Angular 14 a Angular 18, asegurando la compatibilidad con las nuevas dependencias y mejorando el rendimiento.',
      date: '2024-09-18',
    },
    {
      title: 'Optimizar la sección de búsqueda',
      content: 'Mejorar el rendimiento y la funcionalidad de la búsqueda en el modal de socios activos e inactivos en la plataforma AmCoder Fit.',
      date: '2024-09-19',
    },
  ];
  
  proyectos = [
    {
      title: 'Integración de Google Cloud para imágenes',
      content: 'Implementar el componente de carga de imágenes a Google Cloud en AmCoder Fit, asegurando que los usuarios puedan subir fotos para su perfil y entrenamientos.',
      date: '2024-09-18',
    },
    {
      title: 'Desarrollo del landing page',
      content: 'Realizar ajustes de texto en la sección "Hero" y optimizar la sección de "Planes" para mejorar la experiencia del usuario y la velocidad de carga.',
      date: '2024-09-19',
    },
  ];
  
  notas = [
    {
      title: 'Modal de búsqueda',
      content: 'Incluir la funcionalidad de mostrar búsquedas recientes en el modal de búsqueda, con la opción de eliminar búsquedas individuales.',
      date: '2024-09-18',
    },
    {
      title: 'IA en AmCoder Fit',
      content: 'Revisar la integración del chatbot de IA para asistencia personalizada, y preparar la integración de entrenamiento automático de planes personalizados.',
      date: '2024-09-19',
    },
  ];
  

  segmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }


  async openModal(type: string, title: string, content: string, date: string) {
    const modal = await this.modalController.create({
      component: ModalListPage,
      componentProps: {
        'type': type,  // Pasamos el tipo de objeto (tarea, proyecto, nota)
        'data': {title, content, date}
      },
      breakpoints: [0, 0.5, 0.75, 1],
      initialBreakpoint: 0.50
    });
    return await modal.present();
  }

  async openFormModal(type: string) {
    const modal = await this.modalController.create({
      component: FormAggActiPage,
      componentProps: {
        'type': type,
      },
      breakpoints: [0, 0.5, 0.75, 1],
      initialBreakpoint: 1
    });
  
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        if (type === 'tarea') {
          this.tareas.push(result.data);
        } else if (type === 'proyecto') {
          this.proyectos.push(result.data);
        } else if (type === 'nota') {
          this.notas.push(result.data);
        }
      }
    });
  
    return await modal.present();
  }
  

  deleteItem(type: string, index: number) {
    if (type === 'tarea') {
      this.tareas.splice(index, 1);
      localStorage.setItem('tarea', JSON.stringify(this.tareas));
    } else if (type === 'proyecto') {
      this.proyectos.splice(index, 1);
      localStorage.setItem('proyecto', JSON.stringify(this.proyectos));
    } else if (type === 'nota') {
      this.notas.splice(index, 1);
      localStorage.setItem('nota', JSON.stringify(this.notas));
    }
  }
  
}
