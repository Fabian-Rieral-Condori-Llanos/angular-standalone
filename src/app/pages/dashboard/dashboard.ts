// import { Component } from '@angular/core';
// import { NotificationsWidget } from './components/notificationswidget';
// import { StatsWidget } from './components/statswidget';
// import { RecentSalesWidget } from './components/recentsaleswidget';
// import { BestSellingWidget } from './components/bestsellingwidget';
// import { RevenueStreamWidget } from './components/revenuestreamwidget';

// @Component({
//     selector: 'app-dashboard',
//     imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
//     template: `
        // <div class="grid grid-cols-12 gap-8">
        //     <app-stats-widget class="contents" />
        //     <div class="col-span-12 xl:col-span-6">
        //         <app-recent-sales-widget />
        //         <app-best-selling-widget />
        //     </div>
        //     <div class="col-span-12 xl:col-span-6">
        //         <app-revenue-stream-widget />
        //         <app-notifications-widget />
        //     </div>
        // </div>
//     `
// })
// export class Dashboard {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { OfflineService } from '../../services/offline.service';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        MessageModule, 
        BadgeModule,
        CardModule,
        StatsWidget, 
        RecentSalesWidget, 
        BestSellingWidget, 
        RevenueStreamWidget, 
        NotificationsWidget
    ],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
       
    `
})
export class Dashboard implements OnInit {
    
    constructor(public offlineService: OfflineService) {}

    ngOnInit() {
        console.log('Dashboard initialized');
        console.log('Connection status:', this.offlineService.isOnline);
        this.offlineService.isOnline$.subscribe(isOnline => {
            console.log('Dashboard connection changed:', isOnline ? 'Online' : 'Offline');
        });
    }
}
