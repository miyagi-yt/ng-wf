import { Routes } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';

import { ContentsComponent } from './contents/contents.component';
import { MenuComponent } from './menu/menu.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';

export const routes: Routes = [
    { path: '', component: ContentsComponent },
    {
        path: 'menu',
        component: MainLayoutComponent,
        children: [
          { path: '', component: MenuComponent },
        ]
    },
    {
        path: 'work',
        component: MainLayoutComponent,
        children: [
            { path: '', component: WorkComponent },
            { path: 'detail', component: WorkDetailComponent }
        ]
    },
    { path: '**', redirectTo: '' },
];
