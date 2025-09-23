import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private permissionStatus = new BehaviorSubject<NotificationPermission>('default');
  public permission$ = this.permissionStatus.asObservable();

  constructor() {
    // Verificar estado inicial de permisos
    if ('Notification' in window) {
      this.permissionStatus.next(Notification.permission);
    }
  }

  async requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      console.warn('Las notificaciones no son soportadas en este navegador');
      return 'denied';
    }

    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      this.permissionStatus.next(permission);
      return permission;
    }

    return Notification.permission;
  }

  async showNotification(title: string, options: NotificationOptions = {}): Promise<boolean> {
    const permission = await this.requestPermission();
    
    if (permission !== 'granted') {
      console.warn('Permiso de notificaciones denegado');
      return false;
    }

    try {
      const notification = new Notification(title, {
        icon: '/favicon.ico',
        badge: '/assets/layout/images/logo-dark.svg',
        tag: 'dashboard-notification',
        requireInteraction: false,
        ...options
      });

      // Auto cerrar después de 5 segundos
      setTimeout(() => {
        notification.close();
      }, 5000);

      // Manejar eventos de la notificación
      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      return true;
    } catch (error) {
      console.error('Error al mostrar notificación:', error);
      return false;
    }
  }

  // Método para mostrar notificaciones predefinidas del dashboard
  async showDashboardNotification(type: 'sale' | 'revenue' | 'user' | 'test' = 'test'): Promise<boolean> {
    const notifications = {
      sale: {
        title: '🛒 Nueva Venta Registrada',
        body: 'Richard Jones ha comprado una camiseta azul por $79.00',
        icon: '/favicon.ico'
      },
      revenue: {
        title: '💰 Ingresos Actualizados', 
        body: 'Tus ingresos han aumentado un 25% esta semana',
        icon: '/favicon.ico'
      },
      user: {
        title: '👥 Nuevo Usuario Registrado',
        body: '520 usuarios se han registrado hoy',
        icon: '/favicon.ico'
      },
      test: {
        title: '🔔 Notificación de Prueba',
        body: 'Esta es una notificación de prueba desde tu dashboard',
        icon: '/favicon.ico'
      }
    };

    return this.showNotification(
      notifications[type].title,
      {
        body: notifications[type].body,
        icon: notifications[type].icon,
        tag: `dashboard-${type}`,
        requireInteraction: false
      }
    );
  }

  get hasPermission(): boolean {
    return Notification.permission === 'granted';
  }

  get permissionStatus(): NotificationPermission {
    return this.permissionStatus.value;
  }

  get isSupported(): boolean {
    return 'Notification' in window;
  }
}
